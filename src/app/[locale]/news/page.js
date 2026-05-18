import InnerHero from "@/components/common/InnerHero";
import LatestNewsSection from "@/components/features/news/LatestNewsSection";
import NewsListSection from "@/components/features/news/NewsListSection";

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
        slug: "detail",
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
        slug: "detail",
        title: "Ford Explorer: An Outstanding Companion",
        description:
          "<p>Available with plenty of features the Ford Explorer has a lot to offer if you're shopping for a three-row crossover SUV. Its outstanding quietness</p>",
      },
      {
        id: 3,
        media: {
          url: "/images/latestNews3.png",
          alt: "service-info",
        },
        date: "29.01.2025",
        slug: "detail",
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
        url: "/images/product-1.jpg",
        alt: "service-info",
      },
      date: "29.01.2025",
      slug: "detail",
      title: "Ford Explorer: An Outstanding Companion",
      description:
        "<p>Available with plenty of features the Ford Explorer has a lot to offer if you're shopping for a three-row crossover SUV. Its outstanding quietness</p>",
    },
    {
      id: 2,
      media: {
        url: "/images/product-2.jpg",
        alt: "service-info",
      },
      date: "29.01.2025",
      slug: "detail",
      title: "Ford Explorer: An Outstanding Companion",
      description:
        "<p>Available with plenty of features the Ford Explorer has a lot to offer if you're shopping for a three-row crossover SUV. Its outstanding quietness</p>",
    },
    {
      id: 3,
      media: {
        url: "/images/product-3.jpg",
        alt: "service-info",
      },
      date: "29.01.2025",
      slug: "detail",
      title: "Ford Explorer: An Outstanding Companion",
      description:
        "<p>Available with plenty of features the Ford Explorer has a lot to offer if you're shopping for a three-row crossover SUV. Its outstanding quietness</p>",
    },
    {
      id: 4,
      media: {
        url: "/images/product-4.jpg",
        alt: "service-info",
      },
      date: "29.01.2025",
      slug: "detail",
      title: "Ford Explorer: An Outstanding Companion",
      description:
        "<p>Available with plenty of features the Ford Explorer has a lot to offer if you're shopping for a three-row crossover SUV. Its outstanding quietness</p>",
    },
    {
      id: 5,
      media: {
        url: "/images/product-5.jpg",
        alt: "service-info",
      },
      date: "29.01.2025",
      slug: "detail",
      title: "Ford Explorer: An Outstanding Companion",
      description:
        "<p>Available with plenty of features the Ford Explorer has a lot to offer if you're shopping for a three-row crossover SUV. Its outstanding quietness</p>",
    },
    {
      id: 6,
      media: {
        url: "/images/product-6.jpg",
        alt: "service-info",
      },
      date: "29.01.2025",
      slug: "detail",
      title: "Ford Explorer: An Outstanding Companion",
      description:
        "<p>Available with plenty of features the Ford Explorer has a lot to offer if you're shopping for a three-row crossover SUV. Its outstanding quietness</p>",
    },
    {
      id: 7,
      media: {
        url: "/images/product-7.jpg",
        alt: "service-info",
      },
      date: "29.01.2025",
      slug: "detail",
      title: "Ford Explorer: An Outstanding Companion",
      description:
        "<p>Available with plenty of features the Ford Explorer has a lot to offer if you're shopping for a three-row crossover SUV. Its outstanding quietness</p>",
    },
    {
      id: 8,
      media: {
        url: "/images/product-8.jpg",
        alt: "service-info",
      },
      date: "29.01.2025",
      slug: "detail",
      title: "Ford Explorer: An Outstanding Companion",
      description:
        "<p>Available with plenty of features the Ford Explorer has a lot to offer if you're shopping for a three-row crossover SUV. Its outstanding quietness</p>",
    },
    {
      id: 9,
      media: {
        url: "/images/product-9.jpg",
        alt: "service-info",
      },
      date: "29.01.2025",
      slug: "detail",
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
      <LatestNewsSection data={data?.latestNews} />
      <NewsListSection data={data?.newsListing} />
    </>
  );
}
