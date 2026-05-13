import InnerHero from "@/components/common/InnerHero";
import NewsDetails from "@/components/features/news/NewsDetails";

const localData = {
  id: 100,
  slug: "news",
  seo: {
    title: "Ford Oman",
    description: "",
    image: "",
  },
  title: "News",
  news_acf: {
    banner: {
      enable_disable_banner_section: true,
      desktop_banner_image: {
        title: "newsBanner",
        alt: "newsBanner",
        url: "/images/news_banner.png",
      },
      mobile_banner_image: {
        title: "newsBanner",
        alt: "newsBanner",
        url: "/images/news_banner.png",
      },
      banner_title: "News",
    },
  },
  news_section: {
    title: "Ford Explorer: An Outstanding Companion",
    description: `
  <p>A household name among American carbuyers, the Ford Explorer has evolved from its long-ago roots as a body-on-frame SUV into the comprehensively modern three-row crossover it is today. Ford Explorer is a great looking SUV that is a joy to experience. It is well-equipped to make every journey pleasant, whilst also comfortably seating a large family on weekend journeys. The Explorer has an impressive combination of power, luxury and advanced technology features. The refreshed Ford Explorer is better looking than it's ever been with a raft of new technologies. The Explorer is available in Standard, XLT and Limited trim lines.
      <br/>
        <br/>
      The Explorer will draw attention with its attractive fascia, LED signature lights, and well-designed grille, an available dual-panel moonroof, premium silver-painted front and rear skid plate elements, and an 18 and 20-inch aluminium wheel line-up. Technology enthusiasts can revel in the offering of the Explorer with an available front and 180-degree wide rear-view camera with washers, parking assist system that can now park the Explorer perpendicularly and hands-free, foot-activated power liftgate.
      The Explorer is a perfect companion for your journeys. It is equipped with a normally-aspirated 3.5-litre V6 producing an estimated 294 PS and 346 Nm of torque, which is also the available engine on Standard, XLT and Limited trims.
      <br/>
      <br/>

      In the Explorer the intelligent four-wheel drive with Terrain Management System™ is ready for any adventure. It reassesses conditions about 20 times faster than the blink of an eye – providing precise handling and traction. In sand, grass or gravel mode, the antilock braking system changes its pulse rate, which allows material to build up in front of the wheels, acting as a doorstop of sorts to help slow momentum.
      <br/>
      <br/>
      The Explorer boasts of advanced safety features to reward customers with happy journeys. The features include 2nd Generation Driver and Front Passenger, Side Seat Airbags, 3rd Row Safety Canopy with Rollover Sensor, AdvanceTrac® with Roll Stability Control™, BLIS® with Cross Traffic Alert, Front 180-Degree Camera with Washer, Perpendicular Parking, and more.
      <br/>
      <br/>

      For 2017, the Ford Explorer is equipped with Ford's latest Sync 3 infotainment system is available this year, replacing the previous MyFord Touch system.
      </p>`,

    related_news_title: "Related News",
    related_news: [
      {
        img: "/images/latestNews1.png",
        date: "29.01.2025",
        slug: "news",
        title: "Ford Explorer: An Outstanding Companion",
        description: `<p>Available with plenty of features the Ford Explorer has a lot to
                offer if you're shopping for a three-row crossover SUV. Its
                outstanding quietness</p>`,
      },
      {
        img: "/images/latestNews2.png",
        date: "29.01.2025",
        slug: "news",
        title: "Ford Explorer: An Outstanding Companion",
        description: `<p>Available with plenty of features the Ford Explorer has a lot to
                offer if you're shopping for a three-row crossover SUV. Its
                outstanding quietness</p>`,
      },
      {
        img: "/images/latestNews1.png",
        date: "29.01.2025",
        slug: "news",
        title: "Ford Explorer: An Outstanding Companion",
        description: `<p>Available with plenty of features the Ford Explorer has a lot to
                offer if you're shopping for a three-row crossover SUV. Its
                outstanding quietness</p>`,
      },
      {
        img: "/images/latestNews3.png",
        date: "29.01.2025",
        slug: "news",
        title: "Ford Explorer: An Outstanding Companion",
        description: `<p>Available with plenty of features the Ford Explorer has a lot to
                offer if you're shopping for a three-row crossover SUV. Its
                outstanding quietness</p>`,
      },
    ],
  },
};

export default function NewsDetailsPage() {
  const banner = localData?.news_acf?.banner;
  const heroData = banner?.enable_disable_banner_section
    ? {
        title: banner?.banner_title,
        description: null,
        desktop_image: banner?.desktop_banner_image,
        mobile_image: banner?.mobile_banner_image,
        button_text: null,
        button: null,
      }
    : null;

  return (
    <>
      <InnerHero data={heroData} />
      <NewsDetails data={localData?.news_section} />
    </>
  );
}
