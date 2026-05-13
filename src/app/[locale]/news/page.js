const localData = {
  id: 100,
  slug: "news",
  seo: {
    title: "Ford Oman",
    description: "",
    image: "",
  },
  title: "News",
  news_acf: {
    banner: {
      enable_disable_banner_section: true,
      desktop_banner_image: {
        title: "newsBanner",
        alt: "newsBanner",
        url: "/images/news_banner.png",
      },
      mobile_banner_image: {
        title: "newsBanner",
        alt: "newsBanner",
        url: "/images/news_banner.png",
      },
      banner_title: "News",
    },

    news_section: {},
  },

  newsData: {
    title: "Latest News",
    news: [
      {
        img: "/images/latestNews1.png",
        date: "29.01.2025",
        slug: "news",
        title: "Ford Explorer: An Outstanding Companion",
        description: `<p>Available with plenty of features the Ford Explorer has a lot to
                offer if you're shopping for a three-row crossover SUV. Its
                outstanding quietness</p>`,
      },
      {
        img: "/images/latestNews2.png",
        date: "29.01.2025",
        slug: "news",
        title: "Ford Explorer: An Outstanding Companion",
        description: `<p>Available with plenty of features the Ford Explorer has a lot to
                offer if you're shopping for a three-row crossover SUV. Its
                outstanding quietness</p>`,
      },
      {
        img: "/images/latestNews1.png",
        date: "29.01.2025",
        slug: "news",
        title: "Ford Explorer: An Outstanding Companion",
        description: `<p>Available with plenty of features the Ford Explorer has a lot to
                offer if you're shopping for a three-row crossover SUV. Its
                outstanding quietness</p>`,
      },
         {
        img: "/images/latestNews1.png",
        date: "29.01.2025",
        slug: "news",
        title: "TEST Explorer: An Outstanding Companion",
        description: `<p>Available with plenty of features the Ford Explorer has a lot to
                offer if you're shopping for a three-row crossover SUV. Its
                outstanding quietness</p>`,
      },
      {
        img: "/images/latestNews2.png",
        date: "29.01.2025",
        slug: "news",
        title: "Ford Explorer: An Outstanding Companion",
        description: `<p>Available with plenty of features the Ford Explorer has a lot to
                offer if you're shopping for a three-row crossover SUV. Its
                outstanding quietness</p>`,
      },
      {
        img: "/images/latestNews1.png",
        date: "29.01.2025",
        slug: "news",
        title: "Ford Explorer: An Outstanding Companion",
        description: `<p>Available with plenty of features the Ford Explorer has a lot to
                offer if you're shopping for a three-row crossover SUV. Its
                outstanding quietness</p>`,
      },
      {
        img: "/images/latestNews2.png",
        date: "29.01.2025",
        slug: "news",
        title: "Ford Explorer: An Outstanding Companion",
        description: `<p>Available with plenty of features the Ford Explorer has a lot to
                offer if you're shopping for a three-row crossover SUV. Its
                outstanding quietness</p>`,
      },
      {
        img: "/images/latestNews1.png",
        date: "29.01.2025",
        slug: "news",
        title: "Ford Explorer: An Outstanding Companion",
        description: `<p>Available with plenty of features the Ford Explorer has a lot to
                offer if you're shopping for a three-row crossover SUV. Its
                outstanding quietness</p>`,
      },
      {
        img: "/images/latestNews2.png",
        date: "29.01.2025",
        slug: "news",
        title: "Ford Explorer: An Outstanding Companion",
        description: `<p>Available with plenty of features the Ford Explorer has a lot to
                offer if you're shopping for a three-row crossover SUV. Its
                outstanding quietness</p>`,
      },
      {
        img: "/images/latestNews1.png",
        date: "29.01.2025",
        slug: "news",
        title: "Ford Explorer: An Outstanding Companion",
        description: `<p>Available with plenty of features the Ford Explorer has a lot to
                offer if you're shopping for a three-row crossover SUV. Its
                outstanding quietness</p>`,
      },
      {
        img: "/images/latestNews2.png",
        date: "29.01.2025",
        slug: "news",
        title: "Ford Explorer: An Outstanding Companion",
        description: `<p>Available with plenty of features the Ford Explorer has a lot to
                offer if you're shopping for a three-row crossover SUV. Its
                outstanding quietness</p>`,
      },
      {
        img: "/images/latestNews3.png",
        slug: "news",
        date: "29.01.2025",
        title: "Ford Explorer: An Outstanding Companion",
        description: `<p>Available with plenty of features the Ford Explorer has a lot to
                offer if you're shopping for a three-row crossover SUV. Its
                outstanding quietness</p>`,
      },
    ],
  },
};

import InnerHero from "@/components/common/InnerHero";
import LatestNews from "@/components/features/news/LatestNews";
import NewsCardList from "@/components/features/news/NewsCardList";

export default function News() {
  const banner = localData?.news_acf?.banner;
  const heroData = banner?.enable_disable_banner_section
    ? {
        title: banner?.banner_title,
        description: null,
        desktop_image: banner?.desktop_banner_image,
        mobile_image: banner?.mobile_banner_image,
        button_text: null,
        button: null,
      }
    : null;

  const news = localData?.newsData?.news;

  return (
    <div>
      <InnerHero data={heroData} />
      <LatestNews data={news} />

      <NewsCardList data={news} />
    </div>
  );
}
