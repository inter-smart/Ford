import InnerHero from "@/components/common/InnerHero";
import OfferDetailSection from "@/components/features/offers/OfferDetailSection";

import { apiFetch, CACHE } from "@/lib/api/client";
import { ENDPOINTS } from "@/lib/api/endpoints";
import { buildMetadata } from "@/lib/api/seo";

async function getOfferDetail(slug) {
  return apiFetch(`${ENDPOINTS.offers}/${slug}`, { cache: CACHE.ISR(60) });
}

async function getFormOptions() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/wp-json/ford/v1/offers-form?locale=en`,
      { next: { revalidate: 3600 } }
    );
    const json = await res.json();
    return json?.data || null;
  } catch (error) {
    console.error("Failed to fetch form options:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getOfferDetail(slug);
  return buildMetadata(data?.seo);
}

export default async function OfferDetailPage({ params }) {
  const { slug } = await params;
  const data = await getOfferDetail(slug);
  const formData = await getFormOptions();

  const banner = data?.detail_page?.Banner?.[0];

  return (
    <>
      {banner?.enable__disable_banner_offers && (
        <InnerHero data={{ ...banner, title: "Offers" }} />
      )}
      <OfferDetailSection data={data} formData={formData} />
    </>
  );
}