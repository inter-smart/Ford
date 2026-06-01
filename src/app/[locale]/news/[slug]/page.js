import { notFound } from "next/navigation";
import InnerHero from "@/components/common/InnerHero";
import NewsDetailSection from "@/components/features/news/NewsDetailSection";

import { apiFetch, CACHE } from "@/lib/api/client";
import { getLocalizedEndpoint } from "@/lib/api/endpoints";
import { buildMetadata } from "@/lib/api/seo";

async function getNewsDetail(slug, locale) {
  return apiFetch(`${getLocalizedEndpoint("news", locale)}/${slug}`, { cache: CACHE.NO_STORE });
}

export async function generateMetadata({ params }) {
  const { slug, locale } = await params;
  try {
    const data = await getNewsDetail(slug, locale);
    return buildMetadata(data?.data?.seo);
  } catch {
    return {};
  }
}

export default async function NewsDetailPage({ params }) {
  const { slug, locale } = await params;
  let data;
  try {
    data = await getNewsDetail(slug, locale);
  } catch {
    notFound();
  }
  if (!data) notFound();

  const newsData = data?.data;
  const banner = newsData?.acf?.banner;

  const relatedItems = [data?.meta?.prev, data?.meta?.next].filter(Boolean);
  const relatedNews =
    relatedItems.length > 0
      ? { title: "Related news", items: relatedItems }
      : null;

  return (
    <>
      {banner?.enable__disable_banner_section && <InnerHero data={banner} />}
      <NewsDetailSection data={newsData} relatedNews={relatedNews} locale={locale} />
    </>
  );
}
