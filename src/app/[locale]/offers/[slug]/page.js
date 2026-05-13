import InnerHero from "@/components/common/InnerHero";
import OfferDetailSection from "@/components/features/offers/OfferDetailSection";

// export default function Page({ params }) {
//   const { slug } = params;
  

//   return <OfferDetailSection />;
// }

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

 offerDtl: [
  {
    image: "/images/offer-1.jpg",
    alt: "image",
    title: "Corporate and Fleet Offer",
    subtitle: "Get free service for 3 years or 60,000 km when you buy any new Ford SUV or pickup.",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    btnTxt: "Enquire Now"
  },
],

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
}

export default function Page({ data = local_data }) {
  return (
    <>
      {data?.banner?.enable__disable_banner_section && (
        <InnerHero data={local_data?.banner} />
      )}
      
      {/* <OfferDetailSection offerDtl={local_data?.offerDtl?.[0]} /> */}
      <OfferDetailSection
        offerDtl={local_data?.offerDtl?.[0]}
        benefits={local_data?.benefits}
      />
    </>
  );
}