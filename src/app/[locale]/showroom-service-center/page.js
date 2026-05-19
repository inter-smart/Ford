import { apiFetch, CACHE } from "@/lib/api/client";
import { ENDPOINTS }        from "@/lib/api/endpoints";
import { buildMetadata }    from "@/lib/api/seo";
import InnerHero            from "@/components/common/InnerHero";
import ShowroomSection      from "@/components/features/showroom/ShowroomSection";

async function getPageData() {
  const res = await apiFetch(ENDPOINTS.showroomPage, { cache: CACHE.NO_STORE });
  return res?.data;
}

async function getInitialTabData() {
  const res = await apiFetch(`${ENDPOINTS.showroomTab}/0?page=1&pageSize=12`, { cache: CACHE.NO_STORE });
  return res?.data;
}

export async function generateMetadata() {
  const res = await apiFetch(ENDPOINTS.showroomPage, { cache: CACHE.NO_STORE });
  return buildMetadata(res?.data?.seo);
}

export default async function ShowroomServiceCenterPage() {
  const [pageData, tabData] = await Promise.all([getPageData(), getInitialTabData()]);

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
