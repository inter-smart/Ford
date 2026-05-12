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

  offers: [
    {
      slug: "complimentary-service-package",
      image: "/images/offer-1.jpg",
      title: "Complimentary Service Package",
      subTitle: "Get free service for 3 years or 60,000 km",
      description: "When you buy any new Ford SUV or pickup.",
      btnTxt: "Enquire Now"
    },
    {
      slug: "limited-time-cash-back",
      image: "/images/offer-2.jpg",
      title: "Limited-Time Cash Back",
      subTitle: "Get up to OMR 2,000 cash back on select models this month only!",
      description: "Don’t miss the deal.",
      btnTxt: "Enquire Now"
    },
    {
      slug: "corporate-and-fleet-offers",
      image: "/images/offer-3.jpg",
      title: "Corporate and Fleet offers",
      subTitle: "Special pricing, extended warranty, and priority support",
      description: "for corporate clients and SMEs.",
      btnTxt: "Enquire Now"
    },
    {
      slug: "",
      image: "/images/offer-3.jpg",
      title: "Corporate and Fleet offers",
      subTitle: "Special pricing, extended warranty, and priority support",
      description: "for corporate clients and SMEs.",
      btnTxt: "Enquire Now"
    },
    {
      slug: "",
      image: "/images/offer-1.jpg",
      title: "Complimentary Service Package",
      subTitle: "Get free service for 3 years or 60,000 km",
      description: "When you buy any new Ford SUV or pickup.",
      btnTxt: "Enquire Now"
    },
    {
      slug: "",
      image: "/images/offer-2.jpg",
      title: "Limited-Time Cash Back",
      subTitle: "Get up to OMR 2,000 cash back on select models this month only!",
      description: "Don’t miss the deal.",
      btnTxt: "Enquire Now"
    },
    {
      slug: "",
      image: "/images/offer-1.jpg",
      title: "Complimentary Service Package",
      subTitle: "Get free service for 3 years or 60,000 km",
      description: "When you buy any new Ford SUV or pickup.",
      btnTxt: "Enquire Now"
    },
    {
      image: "/images/offer-2.jpg",
      title: "Limited-Time Cash Back",
      subTitle: "Get up to OMR 2,000 cash back on select models this month only!",
      description: "Don’t miss the deal.",
      btnTxt: "Enquire Now"
    },
  ],
}

export default function page({ data = local_data }) {
  return (
    <>
      {data?.banner?.enable__disable_banner_section && (
        <InnerHero data={local_data?.banner} />
      )}
      <OfferListSection data={local_data?.offers} />
    </>
  );
}

