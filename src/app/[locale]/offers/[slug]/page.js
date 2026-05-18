import InnerHero from "@/components/common/InnerHero";
import OfferDetailSection from "@/components/features/offers/OfferDetailSection";

const local_data = {
  banner: {
    enable__disable_banner_section: true,
    desktop_image: {
      title: "contactBanner",
      alt: "contactBanner",
      url: "/images/offer-bnr.jpg",
    },
    mobile_image: {
      title: "contactBanner",
      alt: "contactBanner",
      url: "/images/offer-bnr.jpg",
    },
    title: "Offers",
  },

  offerInfo: {
    media: {
      url: "/images/offer-1.jpg",
      alt: "offer-1",
    },
    title: "Corporate and Fleet Offer",
    subtitle:
      "Get free service for 3 years or 60,000 km<br/> when you buy any new Ford SUV or pickup.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    button: {
      label: "Enquire Now",
      link: "/",
      isExternal: false,
    },
    benefits: [
      {
        id: 1,
        icon: "/images/offerdtls-icon-1.png",
        alt: "image",
        title: "Up to OMR 1,500 Bonus",
      },
      {
        id: 2,
        icon: "/images/offerdtls-icon-2.png",
        alt: "image",
        title: "Upgrade to the Latest Models",
      },
      {
        id: 3,
        icon: "/images/offerdtls-icon-3.png",
        alt: "image",
        title: "Quick, Transparent Process",
      },
      {
        id: 4,
        icon: "/images/offerdtls-icon-4.png",
        alt: "image",
        title: "Certified Vehicle Evaluation",
      },
      {
        id: 5,
        icon: "/images/offerdtls-icon-5.png",
        alt: "image",
        title: "Paperwork Support ",
      },
      {
        id: 6,
        icon: "/images/offerdtls-icon-6.png",
        alt: "image",
        title: "Flexible Financing Options",
      },
    ],
  },
};


async function getFormOptions() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/wp-json/ford/v1/offers-form?locale=en`,
      { next: { revalidate: 3600 } }
    );
    const json = await res.json();
    return json?.data || null;
  } catch (error) {
    console.error("Failed to fetch form options:", error);
    return null;
  }
}

export default async function Page({ data = local_data }) {
  const formData = await getFormOptions();
  
  return (
    <>
      {data?.banner?.enable__disable_banner_section && (
        <InnerHero data={local_data?.banner} />
      )}
      <OfferDetailSection data={local_data?.offerInfo} formData={formData} />
    </>
  );
}
