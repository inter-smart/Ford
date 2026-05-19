import InnerHero from "@/components/common/InnerHero";
import NewsDetailSection from "@/components/features/news/NewsDetailSection";

import { apiFetch, CACHE } from "@/lib/api/client";
import { ENDPOINTS } from "@/lib/api/endpoints";
import { buildMetadata } from "@/lib/api/seo";

async function getNewsDetail(slug) {
  return apiFetch(`${ENDPOINTS.news}/${slug}`, { cache: CACHE.ISR(60) });
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getNewsDetail(slug);
  return buildMetadata(data?.data?.seo);
}

export default async function NewsDetailPage({ params }) {
  const { slug } = await params;
  const data = await getNewsDetail(slug);

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
      <NewsDetailSection data={newsData} relatedNews={relatedNews} />
    </>
  );
}
