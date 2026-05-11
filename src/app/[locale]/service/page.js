import InnerHero from "@/components/common/InnerHero";
import FleetCarlineSection from "@/components/features/fleet/FleetCarlineSection";
import FleetContactSection from "@/components/features/fleet/FleetContactSection";
import ServiceBranchDirectory from "@/components/features/service/ServiceBranchDirectory";
import ServiceInfoSection from "@/components/features/service/ServiceInfoSection";
import ServiceIntervalSection from "@/components/features/service/ServiceIntervalSection";
import ServiceLoyaltyProgram from "@/components/features/service/ServiceLoyaltyProgram";
import ServiceVisitSection from "@/components/features/service/ServiceVisitSection";
import ServiceWhatWillReplacedSection from "@/components/features/service/ServiceWhatWillReplacedSection";
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
  infoService: {
    media: {
      url: "/images/service-info-1.jpg",
      alt: "service-info",
    },
    sectionTitle: "Services",
    tabs: [
      {
        id: 1,
        title: "Parts",
        slug: "/parts",
      },
      {
        id: 2,
        title: "Service",
        slug: "/service",
      },
    ],
    title: "Ford Service Information",
    description:
      "<p>At Ford Oman, servicing your vehicle is more than a routine job it's our promise of safety, performance, and peace of mind. Backed by factory-trained technicians and genuine Ford parts, our service centers ensure your Ford stays as reliable as the day you bought it.</p><h5>We follow Ford global service standards to offer</h5><ul><li>Precision diagnostics and repairs</li><li>Transparent service process and pricing</li><li>Ford Genuine Parts</li><li>Dedicated customer support</li></ul>",
  },
  serviceInterval: {
    title: "Recommended Service Intervals",
    description:
      "<p>Regular maintenance keeps your Ford operating efficiently and extends its life. Follow our manufacturer-recommended service intervals to maintain engine performance, fuel economy, and safety.</p>",
    button: {
      label: "Book your service",
      link: "/",
      isExternal: false,
    },
    items: [
      {
        title: "Typical Service Milestones",
        description:
          "<p>1st Service <br/><b>5,000 km</b></p><p>Regular Intervals </br><b>Every 10,000 km or 6 months thereafter</b></p><p>Comprehensive Checks <br/> <b>At 40,000 km and 80,000 km</b></p>",
      },
      {
        title: "We also Advise Monthly Checks Of",
        description:
          "<ul><li>Engine oil, coolant, brake fluid</li><li>Tyre pressure and tread condition</li><li>Lights and indicators</li></ul>",
      },
    ],
  },
  firstServiceVisit: {
    title: "First Service Visit",
    description:
      "<p><b>What to Expect During Your First Visit</b></br><b>Your first service is vital to ensure your vehicle’s systems are operating as intended. At your initial appointment, our technicians will</b></p><ul><li>Inspect all critical systems (engine, brakes, fluids, lights)</li><li>Top up essential fluids</li><li>Check tyre pressure and alignment</li><li>Conduct a roadworthiness inspection</li><li>Update service history and provide maintenance tips</li></ul><p>Expect a smooth, guided process where everything is explained clearly—and your vehicle is returned in optimal condition.</p>",
  },
  whatWillReplaced: {
    title: "What Will Be Replaced",
    items: [
      {
        title: "Engine Oil and Filter",
        infoItems: [
          {
            title: "Petrol",
            description: "10,000km",
          },
          {
            title: "Diesel",
            description: "10,000km",
          },
          {
            title: "Petrol",
            description: "10,000km",
          },
          {
            title: "Diesel",
            description: "10,000km",
          },
        ],
      },
      {
        title: "Engine Air Filter",
        infoItems: [
          {
            title: "Petrol",
            description: "10,000km",
          },
          {
            title: "Diesel",
            description: "10,000km",
          },
        ],
      },
      {
        title: "Cabin Air Filter",
        infoItems: [
          {
            title: "Petrol",
            description: "10,000km",
          },
          {
            title: "Diesel",
            description: "10,000km",
          },
        ],
      },
      {
        title: "Seat Filter",
        infoItems: [
          {
            title: "Petrol",
            description: "10,000km",
          },
          {
            title: "Diesel",
            description: "10,000km",
          },
        ],
      },
      {
        title: "Coolant",
        infoItems: [
          {
            title: "Petrol",
            description: "10,000km",
          },
          {
            title: "Diesel",
            description: "10,000km",
          },
        ],
      },
      {
        title: "Spark Plugs",
        infoItems: [
          {
            title: "Petrol",
            description: "10,000km",
          },
          {
            title: "Diesel",
            description: "10,000km",
          },
        ],
      },
      {
        title: "Accessory Belt",
        infoItems: [
          {
            title: "Petrol",
            description: "10,000km",
          },
          {
            title: "Diesel",
            description: "10,000km",
          },
        ],
      },
      {
        title: "ATM Fluid/Filters",
        infoItems: [
          {
            title: "Petrol",
            description: "10,000km",
          },
          {
            title: "Diesel",
            description: "10,000km",
          },
        ],
      },
      {
        title: "Transmission Fluid (M)",
        infoItems: [
          {
            title: "Petrol",
            description: "10,000km",
          },
          {
            title: "Diesel",
            description: "10,000km",
          },
        ],
      },
      {
        title: "Front Axle Fluid",
        infoItems: [
          {
            title: "Petrol",
            description: "10,000km",
          },
          {
            title: "Diesel",
            description: "10,000km",
          },
        ],
      },
      {
        title: "Front Wheel Bearings",
        infoItems: [
          {
            title: "Petrol",
            description: "10,000km",
          },
          {
            title: "Diesel",
            description: "10,000km",
          },
        ],
      },
      {
        title: "Rear Axle Fluid",
        infoItems: [
          {
            title: "Petrol",
            description: "10,000km",
          },
          {
            title: "Diesel",
            description: "10,000km",
          },
        ],
      },
      {
        title: "Transfer Case Fluid",
        infoItems: [
          {
            title: "Petrol",
            description: "10,000km",
          },
          {
            title: "Diesel",
            description: "10,000km",
          },
        ],
      },
      {
        title: "Fuel Filters (EM and FM)",
        infoItems: [
          {
            title: "Petrol",
            description: "10,000km",
          },
          {
            title: "Diesel",
            description: "10,000km",
          },
        ],
      },
    ],
  },
  loyaltyProgram: {
    title: "Ford Mazhaya Loyalty program",
    media: {
      url: "/images/loyalty-program.jpg",
      alt: "loyalty-program",
    },
    description:
      "<h3>Exclusive Loyalty for Ford Owners in Oman</h3><p>Ford Mazaya is a rewarding service loyalty program crafted exclusively for Ford owners in the Sultanate of Oman. It’s our way of saying thank you for trusting us with your vehicle. As a valued Ford Mazaya member, you’ll enjoy peace of mind and added benefits every time you visit our world-class ACM service facilities across the country.</p>",
    howWorks: {
      title: "How Does It Work?",
      description: "<p>Get rewarded with Mazaya Points every time you</p>",
      description2:
        "<ul><li>Service or repair your Ford at any ACM facility</li><li>Purchase genuine Ford spare parts</li></ul>",
    },
  },
  branchDirectory: {
    title: "Branch Directory",
    cards: [
      {
        id: 1,
        title: "Seeb",
        description: "<p>Seeb Al Mawaleh, Near Carrefour, Seeb</p>",
        phone: "+968 24516668",
        timing: "10 am to 6 pm",
        directionUrl: "https://maps.app.goo.gl/58bKrye7bN79Vb2r5",
      },
      {
        id: 2,
        title: "Seeb",
        description: "<p>Seeb Al Mawaleh, Near Carrefour, Seeb</p>",
        phone: "+968 24516668",
        timing: "10 am to 6 pm",
        directionUrl: "https://maps.app.goo.gl/58bKrye7bN79Vb2r5",
      },
      {
        id: 3,
        title: "Seeb",
        description: "<p>Seeb Al Mawaleh, Near Carrefour, Seeb</p>",
        phone: "+968 24516668",
        timing: "10 am to 6 pm",
        directionUrl: "https://maps.app.goo.gl/58bKrye7bN79Vb2r5",
      },
      {
        id: 4,
        title: "Seeb",
        description: "<p>Seeb Al Mawaleh, Near Carrefour, Seeb</p>",
        phone: "+968 24516668",
        timing: "10 am to 6 pm",
        directionUrl: "https://maps.app.goo.gl/58bKrye7bN79Vb2r5",
      },
      {
        id: 5,
        title: "Seeb",
        description: "<p>Seeb Al Mawaleh, Near Carrefour, Seeb</p>",
        phone: "+968 24516668",
        timing: "10 am to 6 pm",
        directionUrl: "https://maps.app.goo.gl/58bKrye7bN79Vb2r5",
      },
      {
        id: 6,
        title: "Seeb",
        description: "<p>Seeb Al Mawaleh, Near Carrefour, Seeb</p>",
        phone: "+968 24516668",
        timing: "10 am to 6 pm",
        directionUrl: "https://maps.app.goo.gl/58bKrye7bN79Vb2r5",
      },
      {
        id: 7,
        title: "Seeb",
        description: "<p>Seeb Al Mawaleh, Near Carrefour, Seeb</p>",
        phone: "+968 24516668",
        timing: "10 am to 6 pm",
        directionUrl: "https://maps.app.goo.gl/58bKrye7bN79Vb2r5",
      },
      {
        id: 8,
        title: "Seeb",
        description: "<p>Seeb Al Mawaleh, Near Carrefour, Seeb</p>",
        phone: "+968 24516668",
        timing: "10 am to 6 pm",
        directionUrl: "https://maps.app.goo.gl/58bKrye7bN79Vb2r5",
      },
      {
        id: 9,
        title: "Seeb",
        description: "<p>Seeb Al Mawaleh, Near Carrefour, Seeb</p>",
        phone: "+968 24516668",
        timing: "10 am to 6 pm",
        directionUrl: "https://maps.app.goo.gl/58bKrye7bN79Vb2r5",
      },
      {
        id: 10,
        title: "Seeb",
        description: "<p>Seeb Al Mawaleh, Near Carrefour, Seeb</p>",
        phone: "+968 24516668",
        timing: "10 am to 6 pm",
        directionUrl: "https://maps.app.goo.gl/58bKrye7bN79Vb2r5",
      },
      {
        id: 11,
        title: "Seeb",
        description: "<p>Seeb Al Mawaleh, Near Carrefour, Seeb</p>",
        phone: "+968 24516668",
        timing: "10 am to 6 pm",
        directionUrl: "https://maps.app.goo.gl/58bKrye7bN79Vb2r5",
      },
      {
        id: 12,
        title: "Seeb",
        description: "<p>Seeb Al Mawaleh, Near Carrefour, Seeb</p>",
        phone: "+968 24516668",
        timing: "10 am to 6 pm",
        directionUrl: "https://maps.app.goo.gl/58bKrye7bN79Vb2r5",
      },
    ],
  },
};
export default function page({ data = local_data }) {
  return (
    <>
      {data?.banner?.enable__disable_banner_section && (
        <InnerHero data={local_data?.hero} />
      )}
      <ServiceInfoSection data={local_data?.infoService} />
      <ServiceIntervalSection data={local_data?.serviceInterval} />
      <ServiceVisitSection data={local_data?.firstServiceVisit} />
      <ServiceWhatWillReplacedSection data={local_data?.whatWillReplaced} />
      <ServiceLoyaltyProgram data={local_data?.loyaltyProgram} />
      <ServiceBranchDirectory data={local_data?.branchDirectory} />
      {/* <FleetCarlineSection
        categories={local_data?.categories}
        data={local_data?.vehicles}
      />
      <FleetContactSection data={local_data?.contactSection} /> */}
    </>
  );
}
