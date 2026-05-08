import InnerHero from "@/components/common/InnerHero";
import NewsDetails from "@/components/features/news/NewsDetails";

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
  },
};

export default function NewsDetailsPage() {
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

  
  return (
    <div>
      <InnerHero data={heroData} />
      <NewsDetails />
    </div>
  );
}
