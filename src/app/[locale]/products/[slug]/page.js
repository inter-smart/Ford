import dynamic from "next/dynamic";
import { apiFetch, CACHE } from "@/lib/api/client";
import { getLocalizedEndpoint } from "@/lib/api/endpoints";
import { buildMetadata }    from "@/lib/api/seo";
import RequestAQuoteDialog  from "@/components/common/RequestAQuoteDialog";

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

async function getPageData(slug, locale) {
  return apiFetch(`${getLocalizedEndpoint("product-detail", locale)}/${slug}`, { cache: CACHE.NO_STORE });
}

async function getDealersData(locale) {
  try {
    const res = await apiFetch(getLocalizedEndpoint("test-drive-form", locale), { cache: CACHE.ISR(3600) });
    return {
      dealers: res?.data?.dealers ?? [],
      title: res?.data?.title || "",
      short_description: res?.data?.short_description || "",
    };
  } catch {
    return { dealers: [], title: "", short_description: "" };
  }
}

async function getRaqFormData(locale) {
  try {
    const endpoint = locale === "ar"
      ? `${process.env.NEXT_PUBLIC_API_URL}/wp-json/ford/v1/ar/request-a-quote-form`
      : `${process.env.NEXT_PUBLIC_API_URL}/wp-json/ford/v1/request-a-quote-form`;
    const res = await fetch(
      endpoint,
      { next: { revalidate: 3600 } }
    );
    const json = await res.json();
    return json?.data || null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug, locale } = await params;
  const res = await getPageData(slug, locale);
  return buildMetadata(res?.meta?.seo);
}

export default async function Page({ params }) {
  const { slug, locale } = await params;
  const [res, testDriveFormData, raqFormData] = await Promise.all([getPageData(slug, locale), getDealersData(locale), getRaqFormData(locale)]);
  const dealers = testDriveFormData.dealers;
  const data = res?.data;

  if (!data) return <div className="text-center py-20">Car not found.</div>;

  const firstItem = (arr) =>
    Array.isArray(arr) && arr.length > 0 ? arr[0] : null;

  const banner     = firstItem(data.banner);
  const about      = firstItem(data.about_vehicle);
  const spec       = firstItem(data.specifications);
  const kf         = firstItem(data.key_features);
  const service    = firstItem(data.service);
  const lang = locale === "ar" ? "ar" : "en";

  console.log("Product Detail color_options:", firstItem(data.color_options)?.enabled);

  return (
    <>
      {banner?.enabled && (
        <InnerHero
          data={banner}
          buttonSlot={
            <RequestAQuoteDialog
              formType="enquiry"
              imgPath={raqFormData?.raq_image?.url || "/images/request-img-1.jpg"}
              title={raqFormData?.raq_title || "Request A Quote"}
              description={raqFormData?.raq_short_desription || "<p>To request a quote, please complete the fields below.</p>"}
              dealers={raqFormData?.dealers || []}
              pageTitle={data.modelName}
              submitEndpoint={`${process.env.NEXT_PUBLIC_API_URL}/wp-json/ford/v1/car-enquiry/submit`}
              lang={lang}
            >
              <button className="text-[10px] xl:text-[12px] 2xl:text-[14.5px] 3xl:text-[18px] leading-[1] font-bold text-white w-max max-w-full h-[30px] xl:h-[35.5] 2xl:h-[42.6] 3xl:h-[53.4] py-2 px-[15px] xl:px-[25px] 2xl:px-[30px] 3xl:px-[40px] rounded-full bg-[#066FEF] border border-[#066FEF] cursor-pointer transition-all flex items-center justify-center hover:bg-white hover:text-black">
                {banner.button_text}
              </button>
            </RequestAQuoteDialog>
          }
        />
      )}

      {about?.enabled && (
        <AboutVehicleSection data={about} badge={data.badge} dealers={dealers} pageTitle={data.modelName} modelName={data.modelName} modelCategory={data.modelCategory} lang={lang} testDriveFormData={testDriveFormData} />
      )}

      {spec?.enabled && <SpecificationSection data={spec} />}

      {kf?.enabled && <VehicleDetailSection data={kf} locale={locale} />}

      {firstItem(data.color_options)?.enabled && (
        <ColorSwitchSection data={data.color_options} />
      )}

      {firstItem(data.gallery)?.enabled && (
        <GallerySection data={firstItem(data.gallery)} locale={locale} />
      )}

      {service?.enabled && <AfterSaleSection data={service} />}
    </>
  );
}
