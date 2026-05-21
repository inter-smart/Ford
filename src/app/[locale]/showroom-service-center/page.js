import { apiFetch, CACHE } from "@/lib/api/client";
import { getLocalizedEndpoint } from "@/lib/api/endpoints";
import { buildMetadata }    from "@/lib/api/seo";
import InnerHero            from "@/components/common/InnerHero";
import ShowroomSection      from "@/components/features/showroom/ShowroomSection";

async function getPageData(locale) {
  const res = await apiFetch(getLocalizedEndpoint("showroom-service-center", locale), { cache: CACHE.NO_STORE });
  return res?.data;
}

async function getInitialTabData(locale) {
  const base = getLocalizedEndpoint("showroom-service-center/tab", locale);
  const res = await apiFetch(`${base}/0?page=1&pageSize=12`, { cache: CACHE.NO_STORE });
  return res?.data;
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const res = await apiFetch(getLocalizedEndpoint("showroom-service-center", locale), { cache: CACHE.NO_STORE });
  return buildMetadata(res?.data?.seo);
}

export default async function ShowroomServiceCenterPage({ params }) {
  const { locale } = await params;
  const [pageData, tabData] = await Promise.all([getPageData(locale), getInitialTabData(locale)]);

  const bannerRaw        = pageData?.banner;
  const tabs             = pageData?.tabs ?? [];
  const initialLocations = tabData?.location_details ?? [];
  const initialTotalPages = tabData?.total_pages ?? 1;

  return (
    <>
      {bannerRaw?.enable__disable_banner_section && (
        <InnerHero
          data={{
            desktop_image: bannerRaw.desktop_banner_image,
            mobile_image:  bannerRaw.mobile_banner_image,
            title:         bannerRaw.banner_title,
          }}
        />
      )}
      <ShowroomSection
        tabs={tabs}
        initialTabIndex={0}
        initialLocations={initialLocations}
        initialTotalPages={initialTotalPages}
      />
    </>
  );
}
