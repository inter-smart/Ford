import InnerHero from "@/components/common/InnerHero";
import OfferListSection from "@/components/features/offers/OfferListSection";

import { apiFetch, CACHE } from "@/lib/api/client";
import { getLocalizedEndpoint } from "@/lib/api/endpoints";
import { buildMetadata } from "@/lib/api/seo";

async function getPageData(locale) {
  return apiFetch(getLocalizedEndpoint("offerspage", locale), { cache: CACHE.NO_STORE });
}

async function getOffersData(locale) {
  return apiFetch(`${getLocalizedEndpoint("offers", locale)}?page=1`, { cache: CACHE.NO_STORE });
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const data = await getPageData(locale);
  return buildMetadata(data?.seo);
}

export default async function OffersPage({ params }) {
  const { locale } = await params;
  const [pageData, offersData] = await Promise.all([getPageData(locale), getOffersData(locale)]);

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
