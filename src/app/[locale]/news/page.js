import InnerHero from "@/components/common/InnerHero";
import LatestNews from "@/components/features/news/LatestNews";
import NewsCardList from "@/components/features/news/NewsCardList";

const local_data = {
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
  newsListing: [
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

export default function NewsPage({ data = local_data }) {
  return (
    <>
      {data?.banner?.enable__disable_banner_section && (
        <InnerHero data={data?.banner} />
      )}
      <LatestNews data={data?.latestNews} />
      <NewsCardList data={data?.newsListing} />
    </>
  );
}
