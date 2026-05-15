import InnerHero from "@/components/common/InnerHero";
import OfferDetailSection from "@/components/features/offers/OfferDetailSection";

import { apiFetch, CACHE } from "@/lib/api/client";
import { ENDPOINTS } from "@/lib/api/endpoints";
import { buildMetadata } from "@/lib/api/seo";

async function getOfferDetail(slug) {
  return apiFetch(`${ENDPOINTS.offers}/${slug}`, { cache: CACHE.ISR(60) });
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getOfferDetail(slug);
  return buildMetadata(data?.seo);
}

export default async function OfferDetailPage({ params }) {
  const { slug } = await params;
  const data = await getOfferDetail(slug);

  const banner = data?.detail_page?.Banner?.[0];

  return (
    <>
      {banner?.enable__disable_banner_offers && (
        <InnerHero data={{ ...banner, title: "Offers" }} />
      )}
      <OfferDetailSection data={data} />
    </>
  );
}
