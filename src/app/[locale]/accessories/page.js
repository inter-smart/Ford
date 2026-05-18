import InnerHero from "@/components/common/InnerHero";
import AccessoriesGenuineSection from "@/components/features/accessories/AccessoriesGenuineSection";
import AccessoriesInfoSection from "@/components/features/accessories/AccessoriesInfoSection";

const local_data = {
  banner: {
    enable__disable_banner_section: true,
    desktop_image: {
      alt: "contactBanner",
      url: "/images/banner-accessories-1.jpg",
    },
    mobile_image: {
      alt: "contactBanner",
      url: "/images/banner-accessories-1.jpg",
    },
    title: "Ford Accessories",
    button_text: null,
    button: null,
  },
  accessoriesInfo: {
    media: {
      url: "/images/accessories-info-1.jpg",
      alt: "accessories-info",
    },
    title: "Ford Accessories:<br /> Personalize your Ford",
    description:
      "<p>Have your vehicle serviced regularly to maintain its performance, safety, and resale value. With a wide network of Ford Authorised Parts Outlets and Service Centres, keeping your Ford in prime condition has never been easier.</p>",
    button: {
      label: "Ford Middle East Accessories",
      link: "/",
      isExternal: false,
    },
    accessoriesEnquiry: "+968 2450 0500",
  },
  accessoriesGenuine: {
    title: "Why Choose Ford Genuine Accessories?",
    items: [
      {
        iconPath: "/images/accessories-genuine-1.svg",
        title: "100% Compatibility with your Ford vehicle",
      },
      {
        iconPath: "/images/accessories-genuine-2.svg",
        title: "Tested for Safety and Durability",
      },
      {
        iconPath: "/images/accessories-genuine-3.svg",
        title: "Backed by Ford Warranty",
      },
      {
        iconPath: "/images/accessories-genuine-4.svg",
        title: "Professionally Installed at Authorized Workshops",
      },
    ],
  },
};

export default function page({ data = local_data }) {
  return (
    <>
      {data?.banner?.enable__disable_banner_section && (
        <InnerHero data={local_data?.banner} />
      )}
      <AccessoriesInfoSection data={local_data?.accessoriesInfo} />
      <AccessoriesGenuineSection data={local_data?.accessoriesGenuine} />
    </>
  );
}
