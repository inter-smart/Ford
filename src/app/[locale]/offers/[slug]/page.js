import InnerHero from "@/components/common/InnerHero";
import OfferDetailSection from "@/components/features/offers/OfferDetailSection";

import { apiFetch, CACHE } from "@/lib/api/client";
import { getLocalizedEndpoint } from "@/lib/api/endpoints";
import { buildMetadata } from "@/lib/api/seo";

async function getOfferDetail(slug, locale) {
  return apiFetch(`${getLocalizedEndpoint("offers", locale)}/${slug}`, { cache: CACHE.NO_STORE });
}

async function getFormOptions(locale) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/wp-json/ford/v1/offers-form?locale=${locale}`,
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
  const { slug, locale } = await params;
  const data = await getOfferDetail(slug, locale);
  return buildMetadata(data?.seo);
}

export default async function OfferDetailPage({ params }) {
  const { slug, locale } = await params;
  const lang = locale === "ar" ? "ar" : "en";

  const [data, formData] = await Promise.all([
    getOfferDetail(slug, locale),
    getFormOptions(locale),
  ]);

  const banner = data?.detail_page?.Banner?.[0];

  return (
    <>
      {banner?.enable__disable_banner_offers && (
        <InnerHero data={{ ...banner, title: "Offers" }} />
      )}
      <OfferDetailSection data={data} formData={formData} lang={lang} />
    </>
  );
}