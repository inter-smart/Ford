import InnerHero from "@/components/common/InnerHero";
import NewsDetails from "@/components/features/news/NewsDetails";

const newsDetailPage = {
  banner: {
    enable__disable_banner_section: true,
    desktop_image: {
      alt: "newsBanner",
      url: "/images/news_banner.png",
    },
    mobile_image: {
      alt: "newsBanner",
      url: "/images/news_banner.png",
    },
    title: "News",
    button_text: null,
    button: null,
  },
  newsData: {
    id: 1,
    media: {
      url: "/images/latestNews1.png",
      alt: "service-info",
    },
    title: "Ford Explorer: An Outstanding Companion",
    date: "29.01.2025",
    description:
      "<p>A household name among American carbuyers, the Ford Explorer has evolved from its long-ago roots as a body-on-frame SUV into the comprehensively modern three-row crossover it is today. Ford Explorer is a great looking SUV that is a joy to experience. It is well-equipped to make every journey pleasant, whilst also comfortably seating a large family on weekend journeys. The Explorer has an impressive combination of power, luxury and advanced technology features. The refreshed Ford Explorer is better looking than it's ever been with a raft of new technologies. The Explorer is available in Standard, XLT and Limited trim lines.</p><p>The Explorer will draw attention with its attractive fascia, LED signature lights, and well-designed grille, an available dual-panel moonroof, premium silver-painted front and rear skid plate elements, and an 18 and 20-inch aluminium wheel line-up. Technology enthusiasts can revel in the offering of the Explorer with an available front and 180-degree wide rear-view camera with washers, parking assist system that can now park the Explorer perpendicularly and hands-free, foot-activated power liftgate.</p><p>The Explorer is a perfect companion for your journeys. It is equipped with a normally-aspirated 3.5-litre V6 producing an estimated 294 PS and 346 Nm of torque, which is also the available engine on Standard, XLT and Limited trims.</p><p>In the Explorer the intelligent four-wheel drive with Terrain Management System™ is ready for any adventure. It reassesses conditions about 20 times faster than the blink of an eye – providing precise handling and traction. In sand, grass or gravel mode, the antilock braking system changes its pulse rate, which allows material to build up in front of the wheels, acting as a doorstop of sorts to help slow momentum.</p><p>The Explorer boasts of advanced safety features to reward customers with happy journeys. The features include 2nd Generation Driver and Front Passenger, Side Seat Airbags, 3rd Row Safety Canopy with Rollover Sensor, AdvanceTrac® with Roll Stability Control™, BLIS® with Cross Traffic Alert, Front 180-Degree Camera with Washer, Perpendicular Parking, and more.</p><p>For 2017, the Ford Explorer is equipped with Ford's latest Sync 3 infotainment system is available this year, replacing the previous MyFord Touch system.</p>",
  },
  relatedNews: {
    title: "Related news",
    items: [
      {
        id: 1,
        media: {
          url: "/images/latestNews1.png",
          alt: "service-info",
        },
        date: "29.01.2025",
        slug: "news",
        title: "Ford Explorer: An Outstanding Companion",
        description:
          "<p>Available with plenty of features the Ford Explorer has a lot to offer if you're shopping for a three-row crossover SUV. Its outstanding quietness</p>",
      },
      {
        id: 2,
        media: {
          url: "/images/latestNews2.png",
          alt: "service-info",
        },
        date: "29.01.2025",
        slug: "news",
        title: "Ford Explorer: An Outstanding Companion",
        description:
          "<p>Available with plenty of features the Ford Explorer has a lot to offer if you're shopping for a three-row crossover SUV. Its outstanding quietness</p>",
      },
      {
        id: 3,
        media: {
          url: "/images/latestNews2.png",
          alt: "service-info",
        },
        date: "29.01.2025",
        slug: "news",
        title: "Ford Explorer: An Outstanding Companion",
        description:
          "<p>Available with plenty of features the Ford Explorer has a lot to offer if you're shopping for a three-row crossover SUV. Its outstanding quietness</p>",
      },
    ],
  },
};

export default function NewsDetailsPage() {
  const banner = newsDetailPage?.banner;
  const bannerData = banner?.enable__disable_banner_section
    ? {
        title: banner?.title,
        description: null,
        desktop_image: banner?.desktop_image,
        mobile_image: banner?.mobile_image,
        button_text: banner?.button_text,
        button: banner?.button,
      }
    : null;

  return (
    <>
      {banner?.enable__disable_banner_section && (
        <InnerHero data={bannerData} />
      )}
      <NewsDetails
        data={newsDetailPage?.newsData}
        relatedNews={newsDetailPage?.relatedNews}
      />
    </>
  );
}
