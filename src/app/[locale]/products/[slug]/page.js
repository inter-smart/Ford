import dynamic from "next/dynamic";
import { apiFetch, CACHE } from "@/lib/api/client";
import { ENDPOINTS }        from "@/lib/api/endpoints";
import { buildMetadata }    from "@/lib/api/seo";

const InnerHero = dynamic(() => import("@/components/common/InnerHero"), {
  ssr: true,
});
const AboutVehicleSection = dynamic(
  () => import("@/components/features/products/AboutVehicleSection"),
  { ssr: true }
);
const SpecificationSection = dynamic(
  () => import("@/components/features/products/SpecificationSection"),
  { ssr: true }
);
const VehicleDetailSection = dynamic(
  () => import("@/components/features/products/VehicleDetailSection"),
  { ssr: true }
);
const ColorSwitchSection = dynamic(
  () => import("@/components/features/products/ColorSwitchSection"),
  { ssr: true }
);
const GallerySection = dynamic(
  () => import("@/components/features/products/GallerySection"),
  { ssr: true }
);
const AfterSaleSection = dynamic(
  () => import("@/components/features/products/AfterSaleSection"),
  { ssr: true }
);

async function getPageData(slug) {
  return apiFetch(`${ENDPOINTS.productDetail}/${slug}`, { cache: CACHE.NO_STORE });
}

async function getDealersData() {
  try {
    const res = await apiFetch(ENDPOINTS.testDriveForm, { cache: CACHE.ISR(3600) });
    return res?.data?.dealers ?? [];
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const res = await getPageData(slug);
  return buildMetadata(res?.meta?.seo);
}

export default async function Page({ params }) {
  const { slug } = await params;
  const [res, dealers] = await Promise.all([getPageData(slug), getDealersData()]);
  const data = res?.data;

  if (!data) return <div className="text-center py-20">Car not found.</div>;

  const firstItem = (arr) =>
    Array.isArray(arr) && arr.length > 0 ? arr[0] : null;

  const banner     = firstItem(data.banner);
  const about      = firstItem(data.about_vehicle);
  const spec       = firstItem(data.specifications);
  const kf         = firstItem(data.key_features);
  const service    = firstItem(data.service);

  console.log("Product Detail color_options:", firstItem(data.color_options)?.enabled);

  return (
    <>
      {banner?.enabled && <InnerHero data={banner} />}

      {about?.enabled && (
        <AboutVehicleSection data={about} badge={data.badge} dealers={dealers} />
      )}

      {spec?.enabled && <SpecificationSection data={spec} />}

      {kf?.enabled && <VehicleDetailSection data={kf} />}

      {firstItem(data.color_options)?.enabled && (
        <ColorSwitchSection data={data.color_options} />
      )}

      {firstItem(data.gallery)?.enabled && (
        <GallerySection data={firstItem(data.gallery)} />
      )}

      {service?.enabled && <AfterSaleSection data={service} />}
    </>
  );
}
