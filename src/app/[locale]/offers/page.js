import InnerHero from "@/components/common/InnerHero";
import OfferListSection from "@/components/features/offers/OfferListSection";

import { apiFetch, CACHE } from "@/lib/api/client";
import { ENDPOINTS } from "@/lib/api/endpoints";
import { buildMetadata } from "@/lib/api/seo";

async function getPageData() {
  return apiFetch(ENDPOINTS.offersPage, { cache: CACHE.ISR(60) });
}

async function getOffersData() {
  return apiFetch(`${ENDPOINTS.offers}?page=1`, { cache: CACHE.NO_STORE });
}

export async function generateMetadata() {
  const data = await getPageData();
  return buildMetadata(data?.seo);
}

export default async function OffersPage() {
  const [pageData, offersData] = await Promise.all([getPageData(), getOffersData()]);

  const hero = pageData?.heroData?.[0];

  return (
    <>
      {hero?.enable__disable_banner && <InnerHero data={hero} />}
      <OfferListSection
        initialOffers={offersData?.offers ?? []}
        totalPages={offersData?.total_pages ?? 1}
      />
    </>
  );
}
