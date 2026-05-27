import { Suspense } from "react";
import { apiFetch, CACHE } from "@/lib/api/client";
import { getLocalizedEndpoint } from "@/lib/api/endpoints";
import { buildMetadata }    from "@/lib/api/seo";
import InnerHero            from "@/components/common/InnerHero";
import ShowroomSection      from "@/components/features/showroom/ShowroomSection";

async function getPageData(locale) {
  try {
    const res = await apiFetch(getLocalizedEndpoint("showroom-service-center", locale), { cache: CACHE.NO_STORE });
    return res?.data;
  } catch (e) {
    console.warn("[getPageData] failed:", e.message);
    return null;
  }
}

async function getInitialTabData(locale) {
  const base = getLocalizedEndpoint("showroom-service-center/tab", locale);
  try {
    const res = await apiFetch(`${base}/0?page=1&pageSize=12`, { cache: CACHE.NO_STORE });
    return res;
  } catch (e) {
    console.warn("[getInitialTabData] failed:", e.message);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  try {
    const res = await apiFetch(getLocalizedEndpoint("showroom-service-center", locale), { cache: CACHE.NO_STORE });
    return buildMetadata(res?.data?.seo);
  } catch {
    return {};
  }
}

export default async function ShowroomServiceCenterPage({ params }) {
  const { locale } = await params;
  const [pageData, tabData] = await Promise.all([getPageData(locale), getInitialTabData(locale)]);

  const bannerRaw         = pageData?.banner;
  const tabs              = pageData?.tabs ?? [];
  const initialLocations  = tabData?.data?.location_details ?? [];
  const initialTotalPages = tabData?.meta?.totalPages ?? 1;

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
      <Suspense fallback={null}>
        <ShowroomSection
          tabs={tabs}
          initialTabIndex={0}
          initialLocations={initialLocations}
          initialTotalPages={initialTotalPages}
        />
      </Suspense>
    </>
  );
}