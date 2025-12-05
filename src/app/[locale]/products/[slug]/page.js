// import InnerHero from "@/components/common/InnerHero";
// import AboutVehicleSection from "@/components/features/products/AboutVehicleSection";
// import AfterSaleSection from "@/components/features/products/AfterSaleSection";
// import ColorSwitchSection from "@/components/features/products/ColorSwitchSection";
// import GallerySection from "@/components/features/products/GallerySection";
// import SpecificationSection from "@/components/features/products/SpecificationSection";
// import VehicleDetailSection from "@/components/features/products/VehicleDetailSection";

// // const local_data = {
// //   heroData: {
// //     title: "Mustang",
// //     description: "Confidence On Every Drive",
// //     media: {
// //       type: "image",
// //       desktop: {
// //         path: "/images/product-detail.jpg",
// //         alt: "hero",
// //       },
// //       mobile: {
// //         path: "/images/product-detail.jpg",
// //         alt: "hero",
// //       },
// //     },
// //     button: {
// //       type: "link",
// //       isExternal: false,
// //       label: "Enquire Now",
// //       link: "/",
// //     },
// //   },
// //   aboutVehicle: {
// //     badge: "New Arrival",
// //     title: "FORD MUSTANG",
// //     description:
// //       "Performance, unparalleled. Whether you’re launching down a straightaway or cornering through a mountain pass, the Ford Mustang delivers the ultimate fun-to-drive experience you crave.",
// //     media: {
// //       type: "image",
// //       path: "/images/car-detail.png",
// //       alt: "Car Detail",
// //     },
// //     button: {
// //       type: "link",
// //       isExternal: false,
// //       label: "Book a Test Drive",
// //       link: "/",
// //     },
// //   },
// //   vehicleDetail: {
// //     year: 2024,
// //     modelCode: "gt-5.0",
// //     modelName: "mustang",
// //     badge: "string",
// //     keyFeatureTitle: "Key Features",
// //     keyFeatureDescription:
// //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since",
// //     modelCategory: "sedan",
// //     media: {
// //       type: "video",
// //       path: "/videos/vehicle_Detail.mp4",
// //       alt: "vehicle Detail",
// //     },
// //     specification: {
// //       engine: {
// //         type: 5.0,
// //         unit: "L V8",
// //         title: "engine",
// //       },
// //       horsepower: {
// //         value: 460,
// //         unit: "HP",
// //         title: "power",
// //       },
// //       torque: {
// //         value: 569,
// //         unit: "NM",
// //         title: "torque",
// //       },
// //     },
// //     interior: {
// //       media: {
// //         type: "image",
// //         path: "/images/interior.jpg",
// //         alt: "Interior",
// //       },
// //       title: "Interior",
// //       description:
// //         "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
// //       highlight: [
// //         {
// //           id: 1,
// //           media: {
// //             type: "image",
// //             path: "/images/interior-icon-1.svg",
// //             alt: "icon",
// //           },
// //           title: "Selectable Electric Power-Assisted",
// //         },
// //         {
// //           id: 2,
// //           media: {
// //             type: "image",
// //             path: "/images/interior-icon-2.svg",
// //             alt: "icon",
// //           },
// //           title: "SYNC®3",
// //         },
// //         {
// //           id: 3,
// //           media: {
// //             type: "image",
// //             path: "/images/interior-icon-3.svg",
// //             alt: "icon",
// //           },
// //           title: "Track Apps®",
// //         },
// //         {
// //           id: 4,
// //           media: {
// //             type: "image",
// //             path: "/images/interior-icon-4.svg",
// //             alt: "icon",
// //           },
// //           title: "12-inch Lcd Digital Instrument Cluster With Mycolor®",
// //         },
// //       ],
// //     },
// //     exterior: {
// //       media: {
// //         type: "image",
// //         path: "/images/exterior.jpg",
// //         alt: "exterior",
// //       },
// //       title: "Exterior",
// //       description:
// //         "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
// //       highlight: [
// //         {
// //           id: 1,
// //           media: {
// //             type: "image",
// //             path: "/images/exterior-icon-1.svg",
// //             alt: "icon",
// //           },
// //           title: "Torque About Town",
// //         },
// //         {
// //           id: 2,
// //           media: {
// //             type: "image",
// //             path: "/images/exterior-icon-2.svg",
// //             alt: "icon",
// //           },
// //           title: "5.0L V8",
// //         },
// //         {
// //           id: 3,
// //           media: {
// //             type: "image",
// //             path: "/images/exterior-icon-3.svg",
// //             alt: "icon",
// //           },
// //           title: "Dual Exhaust and Active Valve Performance Exhaust",
// //         },
// //         {
// //           id: 4,
// //           media: {
// //             type: "image",
// //             path: "/images/exterior-icon-4.svg",
// //             alt: "icon",
// //           },
// //           title: "Launch Control and Electronic Line-lock",
// //         },
// //         {
// //           id: 5,
// //           media: {
// //             type: "image",
// //             path: "/images/exterior-icon-5.svg",
// //             alt: "icon",
// //           },
// //           title: "Led Front Lighting",
// //         },
// //         {
// //           id: 6,
// //           media: {
// //             type: "image",
// //             path: "/images/exterior-icon-6.svg",
// //             alt: "icon",
// //           },
// //           title: "Make It Colorfully Personal",
// //         },
// //       ],
// //     },
// //   },
// //   color_switch: {
// //     car_name: "Mustang",
// //     colorOption: [
// //       {
// //         id: 1,
// //         name: "Shadow Black",
// //         hexCode: "#1a1a1a",
// //         media: {
// //           type: "image",
// //           path: "/images/blackMustag.png",
// //           alt: "color-1",
// //         },
// //       },
// //       {
// //         id: 2,
// //         name: "Oxford White",
// //         hexCode: "#f5f5f5",
// //         media: {
// //           type: "image",
// //           path: "/images/car3.png",
// //           alt: "color-2",
// //         },
// //       },
// //       {
// //         id: 3,
// //         name: "Race Red",
// //         hexCode: "#cc0000",
// //         media: {
// //           type: "image",
// //           path: "/images/car-detail.png",
// //           alt: "color-3",
// //         },
// //       },
// //       {
// //         id: 4,
// //         name: "Grabber Blue",
// //         hexCode: "#4a90e2",
// //         media: {
// //           type: "image",
// //           path: "/images/car2.png",
// //           alt: "color-4",
// //         },
// //       },
// //       {
// //         id: 5,
// //         name: "Velocity Blue",
// //         hexCode: "#113185",
// //         media: {
// //           type: "image",
// //           path: "/images/color-option-1.png",
// //           alt: "color-4",
// //         },
// //       },
// //       {
// //         id: 6,
// //         name: "Grey",
// //         hexCode: "#0A0F42",
// //         media: {
// //           type: "image",
// //           path: "/images/mustang.png",
// //           alt: "color-4",
// //         },
// //       },
// //       {
// //         id: 7,
// //         name: "Orange",
// //         hexCode: "#D26801",
// //         media: {
// //           type: "image",
// //           path: "/images/car4.png",
// //           alt: "color-4",
// //         },
// //       },
// //     ],
// //   },
// //   gallery_section: {
// //     title: "Gallery",
// //     interior: [
// //       {
// //         id: 1,
// //         media: {
// //           type: "image",
// //           path: "/images/gallery-detail-1.jpg",
// //           alt: "gallery-1",
// //         },
// //       },
// //       {
// //         id: 2,
// //         media: {
// //           type: "image",
// //           path: "/images/gallery-detail-2.jpg",
// //           alt: "gallery-2",
// //         },
// //       },
// //       {
// //         id: 3,
// //         media: {
// //           type: "image",
// //           path: "/images/gallery-detail-3.jpg",
// //           alt: "gallery-3",
// //         },
// //       },
// //     ],
// //     exterior: [
// //       {
// //         id: 1,
// //         media: {
// //           type: "image",
// //           path: "/images/exterior.jpg",
// //           alt: "gallery-1",
// //         },
// //       },
// //       {
// //         id: 2,
// //         media: {
// //           type: "image",
// //           path: "/images/news3.jpg",
// //           alt: "gallery-2",
// //         },
// //       },
// //       {
// //         id: 3,
// //         media: {
// //           type: "image",
// //           path: "/images/product-5.jpg",
// //           alt: "gallery-3",
// //         },
// //       },
// //     ],
// //   },
// //   afterSale: {
// //     title: null,
// //     description:
// //       "Enjoy world-class service, expert technicians, genuine Ford parts, and roadside assistance designed to keep your Mustang performing at its best.",
// //     button: {
// //       type: "link",
// //       isExternal: false,
// //       label: "Explore After Sales Service",
// //       link: "/",
// //     },
// //   },
// //   specifications: [
// //     {
// //       enable__disable_specifications: true,
// //       video_specifications: {
// //         url: "",
// //         alt: "",
// //       },
// //       specs: {
// //         icon: {
// //           url: "https://dev18.intersmarthosting.in/Ford/wp-content/uploads/2025/12/image-2025-12-03T180548.246.png",
// //           alt: "",
// //         },
// //         value: "460 HP",
// //         spec_title: "POWER",
// //       },
// //     },
// //   ],
// // };

// export default async function page() {

//   const data = await getPageData();

//   return (
//     <>
//       <InnerHero data={local_data.heroData} />
//       <AboutVehicleSection data={local_data.aboutVehicle} />
//       {/* <SpecificationSection data={local_data.specifications} /> */}
//       <VehicleDetailSection data={local_data.vehicleDetail} />
//       <ColorSwitchSection data={local_data.color_switch} />
//       <GallerySection data={local_data.gallery_section} />
//       <AfterSaleSection data={local_data.afterSale} />
//     </>
//   );
// }

import dynamic from "next/dynamic";

const InnerHero = dynamic(() => import("@/components/common/InnerHero"), {
  ssr: true,
});
const AboutVehicleSection = dynamic(
  () => import("@/components/features/products/AboutVehicleSection"),
  { ssr: true }
);
const SpecificationSection = dynamic(
  () => import("@/components/features/products/SpecificationSection"),
  { ssr: true }
);
const VehicleDetailSection = dynamic(
  () => import("@/components/features/products/VehicleDetailSection"),
  { ssr: true }
);
const ColorSwitchSection = dynamic(
  () => import("@/components/features/products/ColorSwitchSection"),
  { ssr: true }
);
const GallerySection = dynamic(
  () => import("@/components/features/products/GallerySection"),
  { ssr: true }
);
const AfterSaleSection = dynamic(
  () => import("@/components/features/products/AfterSaleSection"),
  { ssr: true }
);

async function getPageData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/wp-json/custom/v1/product`,
    { next: { revalidate: 60 } }
  );
  if (!res.ok) throw new Error("Failed to fetch product data");
  return res.json();
}

export async function generateMetadata({ params }) {
  const data = await getPageData();
  const cars = Array.isArray(data?.product) ? data.product : [];
  const post = cars.find((car) => car.slug === params.slug) || null;

  return {
    title: post?.seo?.title || data?.seo?.title,
    description: post?.seo?.description || data?.seo?.description,
    openGraph: {
      title: post?.seo?.title || data?.seo?.title,
      description: post?.seo?.description || data?.seo?.description,
      images: [
        {
          url: post?.seo?.image || data?.seo?.image,
          width: 1200,
          height: 630,
          alt: post?.seo?.title || "Ford",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post?.seo?.title || data?.seo?.title,
      description: post?.seo?.description || data?.seo?.description,
      images: [post?.seo?.image || data?.seo?.image],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = params;

  const data = await getPageData();
  const cars = Array.isArray(data?.product) ? data.product : [];
  const post = cars.find((car) => car.slug === slug) || null;

  if (!post) return <div className="text-center py-20">Car not found.</div>;

  const details = post.detail_page;

  const firstItem = (arr) =>
    Array.isArray(arr) && arr.length > 0 ? arr[0] : null;

  return (
    <>
      {firstItem(details?.Banner)?.enable__disable_banner_detail_page && (
        <InnerHero data={details.Banner[0]} />
      )}

      {firstItem(details?.about_vehicle)?.enable__disable_about_vehicle && (
        <AboutVehicleSection
          data={details.about_vehicle[0]}
          badge={details.badge}
        />
      )}

      {details?.specifications?.[0]?.enable__disable_specifications && (
        <SpecificationSection data={details.specifications[0]} />
      )}

      {details?.key_features?.[0]?.enable__disable_key_features && (
        <VehicleDetailSection data={details.key_features[0]} />
      )}

      {firstItem(details?.color_options)?.enable__disable_color_options && (
        <ColorSwitchSection data={details.color_options} />
      )}

      {firstItem(details?.gallery)?.enable__disable_gallery && (
        <GallerySection data={details.gallery[0]} />
      )}

      {firstItem(details?.service)?.enable__disable_service && (
        <AfterSaleSection data={details.service[0]} />
      )}
    </>
  );
}
