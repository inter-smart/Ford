import InnerHero from "@/components/common/InnerHero";
import FleetCarlineSection from "@/components/features/fleet/FleetCarlineSection";
import FleetContactSection from "@/components/features/fleet/FleetContactSection";
import ServiceInfoSection from "@/components/features/service/ServiceInfoSection";
import { url } from "zod";

// async function getPageData() {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/wp-json/ford/v1/contact`,
//     { next: { revalidate: 60 } },
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

// export async function generateMetadata() {
//   const data = await getPageData();

//   return {
//     title: data?.seo?.title,
//     description: data?.seo?.description,
//     openGraph: {
//       title: data?.seo?.title,
//       description: data?.seo?.description,
//       images: [
//         {
//           url: data?.seo?.image,
//           width: 1200,
//           height: 630,
//           alt: data?.seo?.title || "Ford",
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: data?.seo?.title,
//       description: data?.seo?.description,
//       images: [data?.seo?.image],
//     },
//   };
// }

const local_data = {
  banner: {
    enable__disable_banner_section: true,
    desktop_image: {
      title: "contactBanner",
      alt: "contactBanner",
      url: "/images/banner-service-1.jpg",
    },
    mobile_image: {
      title: "contactBanner",
      alt: "contactBanner",
      url: "/images/banner-service-1.jpg",
    },
    title: "Parts and Service",
    button_text: "Contact Us",
    button: {
      link: "/",
      isExternal: false,
    },
  },

  intro: {
    media: {
      url: "/images/service-info-1.jpg",
      alt: "service-info",
    },
    sectionHeading: "Services",
    tabs: [
      {
        title: "Parts",
        slug: "/parts",
      },
      {
        title: "Service",
        slug: "/service",
      },
    ],
    title: "Ford Service Information",
    description:
      "<p>At Ford Oman, servicing your vehicle is more than a routine job it's our promise of safety, performance, and peace of mind. Backed by factory-trained technicians and genuine Ford parts, our service centers ensure your Ford stays as reliable as the day you bought it.</p><h5>We follow Ford global service standards to offer</h5><ul><li>Precision diagnostics and repairs</li><li>Transparent service process and pricing</li><li>Ford Genuine Parts</li><li>Dedicated customer support</li></ul>",
  },

  categories: [
    {
      id: 1,
      name: "Cars",
      slug: "cars",
    },
    {
      id: 2,
      name: "CUV/SUV",
      slug: "cuv-suv",
    },
    {
      id: 3,
      name: "Trucks and Vans",
      slug: "trucks-vans",
    },
  ],

  vehicles: [
    {
      id: 1,
      name: "Edge",
      image: "/images/fleet-carline-1.jpg",
      category: "cuv-suv",
      link: "/vehicles/edge",
    },
    {
      id: 2,
      name: "Explorer",
      image: "/images/fleet-carline-2.jpg",
      category: "cuv-suv",
      link: "/vehicles/explorer",
    },
    {
      id: 3,
      name: "Expedition",
      image: "/images/fleet-carline-3.jpg",
      category: "cuv-suv",
      link: "/vehicles/expedition",
    },
    {
      id: 4,
      name: "Edge",
      image: "/images/fleet-carline-1.jpg",
      category: "cuv-suv",
      link: "/vehicles/edge",
    },
  ],

  contactSection: {
    title: "Contact Us",
    description:
      "Enjoy world-class service, expert technicians, genuine Ford parts, and roadside assistance designed to keep your Mustang performing at its best.",
    cards: [
      {
        id: 1,
        icon: "/images/fleet-contact-1.svg",
        title: "Contact Us",
        description: "Lorem Ipsum is simply dummy text of the printing",
        buttonText: "Contact Us",
        buttonLink: "/contact",
      },
      {
        id: 2,
        icon: "/images/fleet-contact-2.svg",
        title: "Book a Test Drive",
        description: "Lorem Ipsum is simply dummy text of the printing",
        buttonText: "Book a Test Drive",
        buttonLink: "/test-drive",
      },
      {
        id: 3,
        icon: "/images/fleet-contact-3.svg",
        title: "Request a Quote",
        description: "Lorem Ipsum is simply dummy text of the printing",
        buttonText: "Request a Quote",
        buttonLink: "/quote",
      },
    ],
  },
};
export default function page({ data = local_data }) {
  //   const banner = data?.contact_acf?.banner;

  //   const heroData = banner?.enable__disable_banner_section
  //     ? {
  //         title: banner?.banner_title,
  //         description: null,
  //         desktop_image: banner?.desktop_banner_image,
  //         mobile_image: banner?.mobile_banner_image,
  //         button_text: null,
  //         button: null,
  //       }
  //     : null;

  return (
    <>
      {data?.banner?.enable__disable_banner_section && (
        <InnerHero data={local_data?.hero} />
      )}
      <ServiceInfoSection data={local_data?.intro} />
      <FleetCarlineSection
        categories={local_data?.categories}
        data={local_data?.vehicles}
      />
      <FleetContactSection data={local_data?.contactSection} />
    </>
  );
}
