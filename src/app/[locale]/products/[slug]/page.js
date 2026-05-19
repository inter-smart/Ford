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

async function getPageData() {
  return apiFetch(ENDPOINTS.products, { cache: CACHE.ISR(60) });
}

export async function generateMetadata({ params }) {
  const data = await getPageData();
  const cars = Array.isArray(data?.product) ? data.product : [];
  const post = cars.find((car) => car.slug === params.slug) ?? null;
  return buildMetadata(post?.seo ?? {}, data?.seo ?? {});
}

export default async function Page({ params }) {
  const { slug } = params;

  const data = await getPageData();
  const cars = Array.isArray(data?.product) ? data.product : [];
  const post = cars.find((car) => car.slug === slug) || null;

  if (!post) return <div className="text-center py-20">Car not found.</div>;

  const details = post.detail_page;

  const firstItem = (arr) =>
    Array.isArray(arr) && arr.length > 0 ? arr[0] : null;

  return (
    <>
      {firstItem(details?.Banner)?.enable__disable_banner_detail_page && (
        <InnerHero data={details.Banner[0]} />
      )}

      {firstItem(details?.about_vehicle)?.enable__disable_about_vehicle && (
        <AboutVehicleSection
          data={details.about_vehicle[0]}
          badge={details.badge}
        />
      )}

      {details?.specifications?.[0]?.enable__disable_specifications && (
        <SpecificationSection data={details.specifications[0]} />
      )}

      {details?.key_features?.[0]?.enable__disable_key_features && (
        <VehicleDetailSection data={details.key_features[0]} />
      )}

      {firstItem(details?.color_options)?.enable__disable_color_options && (
        <ColorSwitchSection data={details.color_options} />
      )}

      {firstItem(details?.gallery)?.enable__disable_gallery && (
        <GallerySection data={details.gallery[0]} />
      )}

      {firstItem(details?.service)?.enable__disable_service && (
        <AfterSaleSection data={details.service[0]} />
      )}
    </>
  );
}
