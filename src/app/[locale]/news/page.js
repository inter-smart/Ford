import InnerHero from "@/components/common/InnerHero";
import LatestNewsSection from "@/components/features/news/LatestNewsSection";
import NewsListSection from "@/components/features/news/NewsListSection";

import { apiFetch, CACHE } from "@/lib/api/client";
import { ENDPOINTS } from "@/lib/api/endpoints";
import { buildMetadata } from "@/lib/api/seo";

async function getNewsData() {
  return apiFetch(ENDPOINTS.news, { cache: CACHE.NO_STORE });
}

export async function generateMetadata() {
  const data = await getNewsData();
  return buildMetadata(data?.data?.page?.seo);
}

export default async function NewsPage() {
  const data = await getNewsData();

  const banner = data?.data?.page?.banner;
  const news = data?.data?.news ?? [];
  const totalPages = data?.meta?.totalPages ?? 1;

  const latestNews = { title: "Latest News", items: news.slice(0, 3) };

  return (
    <>
      {banner?.enable__disable_banner_section && <InnerHero data={banner} />}
      <LatestNewsSection data={latestNews} />
      <NewsListSection initialNews={news.slice(3)} totalPages={totalPages} />
    </>
  );
}
