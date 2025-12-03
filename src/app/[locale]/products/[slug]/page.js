import InnerHero from "@/components/common/InnerHero";

const local_data = {
  heroData: {
    title: "Mustang",
    description: "Confidence On Every Drive",
    media: {
      type: "image",
      desktop: {
        path: "/images/product-detail.jpg",
        alt: "hero",
      },
      mobile: {
        path: "/images/product-detail.jpg",
        alt: "hero",
      },
    },
    button: "Enquire Now",
  },
};

export default function page() {
  return (
    <>
      <InnerHero data={local_data.heroData} />
    </>
  );
}
