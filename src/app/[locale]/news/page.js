const newsPage = {
  banner: {
    enable__disable_banner_section: true,
    desktop_image: {
      alt: "newsBanner",
      url: "/images/news_banner.png",
    },
    mobile_image: {
      alt: "newsBanner",
      url: "/images/news_banner.png",
    },
    title: "News",
    button_text: null,
    button: null,
  },
  latestNews: {
    title: "Latest News",
    items: [
      {
        id: 1,
        media: {
          url: "/images/latestNews1.png",
          alt: "service-info",
        },
        date: "29.01.2025",
        slug: "news",
        title: "Ford Explorer: An Outstanding Companion",
        description:
          "<p>Available with plenty of features the Ford Explorer has a lot to offer if you're shopping for a three-row crossover SUV. Its outstanding quietness</p>",
      },
      {
        id: 2,
        media: {
          url: "/images/latestNews2.png",
          alt: "service-info",
        },
        date: "29.01.2025",
        slug: "news",
        title: "Ford Explorer: An Outstanding Companion",
        description:
          "<p>Available with plenty of features the Ford Explorer has a lot to offer if you're shopping for a three-row crossover SUV. Its outstanding quietness</p>",
      },
      {
        id: 3,
        media: {
          url: "/images/latestNews2.png",
          alt: "service-info",
        },
        date: "29.01.2025",
        slug: "news",
        title: "Ford Explorer: An Outstanding Companion",
        description:
          "<p>Available with plenty of features the Ford Explorer has a lot to offer if you're shopping for a three-row crossover SUV. Its outstanding quietness</p>",
      },
    ],
  },
  NewsListing: [
    {
      id: 1,
      media: {
        url: "/images/latestNews1.png",
        alt: "service-info",
      },
      date: "29.01.2025",
      slug: "news",
      title: "Ford Explorer: An Outstanding Companion",
      description:
        "<p>Available with plenty of features the Ford Explorer has a lot to offer if you're shopping for a three-row crossover SUV. Its outstanding quietness</p>",
    },
    {
      id: 2,
      media: {
        url: "/images/latestNews2.png",
        alt: "service-info",
      },
      date: "29.01.2025",
      slug: "news",
      title: "Ford Explorer: An Outstanding Companion",
      description:
        "<p>Available with plenty of features the Ford Explorer has a lot to offer if you're shopping for a three-row crossover SUV. Its outstanding quietness</p>",
    },
    {
      id: 3,
      media: {
        url: "/images/latestNews2.png",
        alt: "service-info",
      },
      date: "29.01.2025",
      slug: "news",
      title: "Ford Explorer: An Outstanding Companion",
      description:
        "<p>Available with plenty of features the Ford Explorer has a lot to offer if you're shopping for a three-row crossover SUV. Its outstanding quietness</p>",
    },
  ],
};

import InnerHero from "@/components/common/InnerHero";
import LatestNews from "@/components/features/news/LatestNews";
import NewsCardList from "@/components/features/news/NewsCardList";

export default function News() {
  const banner = newsPage?.banner;
  const heroData = banner?.enable__disable_banner_section
    ? {
        title: banner?.title,
        description: null,
        desktop_image: banner?.desktop_image,
        mobile_image: banner?.mobile_image,
        button_text: banner?.button_text,
        button: banner?.button,
      }
    : null;

  const news = newsPage?.latestNews;
  const newsListing = newsPage?.NewsListing;

  return (
    <div>
      {banner?.enable__disable_banner_section && (
        <InnerHero data={heroData} />
      )}
      <LatestNews data={news} />

      <NewsCardList data={newsListing} />
    </div>
  );
}
