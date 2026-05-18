import InnerHero from "@/components/common/InnerHero";
import OfferListSection from "@/components/features/offers/OfferListSection";

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

  offersList: [
    {
      id: 1,
      media: {
        url: "/images/offer-1.jpg",
        alt: "offer-1",
      },
      slug: "complimentary-service-package",
      title: "Complimentary Service Package",
      subTitle: "Get free service for 3 years or 60,000 km",
      description: "When you buy any new Ford SUV or pickup.",
      button: {
        label: "Enquire Now",
        link: "/",
        isExternal: false,
      },
    },
    {
      id: 2,
      media: {
        url: "/images/offer-2.jpg",
        alt: "offer-2",
      },
      slug: "limited-time-cash-back",
      title: "Limited-Time Cash Back",
      subTitle:
        "Get up to OMR 2,000 cash back on select models this month only!",
      description: "Don’t miss the deal.",
      button: {
        label: "Enquire Now",
        link: "/",
        isExternal: false,
      },
    },
    {
      id: 3,
      media: {
        url: "/images/offer-3.jpg",
        alt: "offer-3",
      },
      slug: "corporate-and-fleet-offers",
      title: "Corporate and Fleet offers",
      subTitle: "Special pricing, extended warranty, and priority support",
      description: "for corporate clients and SMEs.",
      button: {
        label: "Enquire Now",
        link: "/",
        isExternal: false,
      },
    },
    {
      id: 4,
      media: {
        url: "/images/offer-3.jpg",
        alt: "offer-3",
      },
      slug: "",
      title: "Corporate and Fleet offers",
      subTitle: "Special pricing, extended warranty, and priority support",
      description: "for corporate clients and SMEs.",
      button: {
        label: "Enquire Now",
        link: "/",
        isExternal: false,
      },
    },
    {
      id: 5,
      media: {
        url: "/images/offer-1.jpg",
        alt: "offer-1",
      },
      slug: "",
      title: "Complimentary Service Package",
      subTitle: "Get free service for 3 years or 60,000 km",
      description: "When you buy any new Ford SUV or pickup.",
      button: {
        label: "Enquire Now",
        link: "/",
        isExternal: false,
      },
    },
    {
      id: 6,
      media: {
        url: "/images/offer-2.jpg",
        alt: "offer-2",
      },
      slug: "",
      title: "Limited-Time Cash Back",
      subTitle:
        "Get up to OMR 2,000 cash back on select models this month only!",
      description: "Don’t miss the deal.",
      button: {
        label: "Enquire Now",
        link: "/",
        isExternal: false,
      },
    },
    {
      id: 7,
      media: {
        url: "/images/offer-1.jpg",
        alt: "offer-1",
      },
      slug: "",
      title: "Complimentary Service Package",
      subTitle: "Get free service for 3 years or 60,000 km",
      description: "When you buy any new Ford SUV or pickup.",
      button: {
        label: "Enquire Now",
        link: "/",
        isExternal: false,
      },
    },
    {
      id: 8,
      media: {
        url: "/images/offer-2.jpg",
        alt: "offer-2",
      },
      slug: "",
      title: "Limited-Time Cash Back",
      subTitle:
        "Get up to OMR 2,000 cash back on select models this month only!",
      description: "Don’t miss the deal.",
      button: {
        label: "Enquire Now",
        link: "/",
        isExternal: false,
      },
    },
  ],
};

export default function page({ data = local_data }) {
  return (
    <>
      {data?.banner?.enable__disable_banner_section && (
        <InnerHero data={local_data?.banner} />
      )}
      <OfferListSection data={local_data?.offersList} />
    </>
  );
}
