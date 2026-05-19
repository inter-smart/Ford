import { apiFetch, CACHE } from "@/lib/api/client";
import { ENDPOINTS } from "@/lib/api/endpoints";
import { buildMetadata } from "@/lib/api/seo";
import InnerHero from "@/components/common/InnerHero";
import AccessoriesInfoSection from "@/components/features/accessories/AccessoriesInfoSection";
import AccessoriesGenuineSection from "@/components/features/accessories/AccessoriesGenuineSection";

async function getPageData() {
  return apiFetch(ENDPOINTS.accessoriesPage, { cache: CACHE.NO_STORE });
}

export async function generateMetadata() {
  const data = await getPageData();
  return buildMetadata(data?.seo);
}

export default async function AccessoriesPage() {
  const data = await getPageData();
  const heroRaw = data?.heroData?.[0];
  const infoRaw = data?.info?.[0];
  const whyRaw = data?.whyChoose?.[0];

  return (
    <>
      {heroRaw?.enable__disable_banner && (
        <InnerHero
          data={{
            desktop_image: heroRaw.desktop_image,
            mobile_image: heroRaw.mobile_image,
            title: heroRaw.title,
          }}
        />
      )}

      {infoRaw?.enable__disable_info_accessories && (
        <AccessoriesInfoSection data={infoRaw} />
      )}

      {whyRaw?.enable__disable_why_choose_accessories && (
        <AccessoriesGenuineSection data={whyRaw} />
      )}
    </>
  );
}
