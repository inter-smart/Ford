import dynamic from "next/dynamic";

import HeroSection from "@/components/features/home/HeroSection";

const WelcomeSection = dynamic(
  () => import("@/components/features/home/WelcomeSection"),
  { ssr: true }
);

const LegendarySection = dynamic(
  () => import("@/components/features/home/LegendarySection"),
  { ssr: true }
);

const ServiceSection = dynamic(
  () => import("@/components/features/home/ServiceSection"),
  { ssr: true }
);

import LocationSection from "@/components/features/home/LocationSection";
import InsightSection from "@/components/features/home/InsightSection";
import InstagramFeedSection from "@/components/features/home/InstagramFeedSection";

async function getPageData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/wp-json/ford/v1/home`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Home data");
  }

  return res.json();
}

export async function generateMetadata() {
  const data = await getPageData();

  return {
    title: data?.seo?.title,
    description: data?.seo?.description,
    openGraph: {
      title: data?.seo?.title,
      description: data?.seo?.description,
      images: [
        {
          url: data?.seo?.image,
          width: 1200,
          height: 630,
          alt: data?.seo?.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data?.seo?.title,
      description: data?.seo?.description,
      images: [data?.seo?.image],
    },
  };
}

export default async function Home() {
  const data = await getPageData();
  const home_data = data?.home_acf;
  return (
    <>
      {home_data?.banner_home?.enable__disable_banner_home && (
        <HeroSection data={home_data?.banner_home} />
      )}
      {home_data?.about_ford?.enable__disable_about_ford && (
        <WelcomeSection data={home_data?.about_ford} />
      )}
      {home_data?.cars_section?.enable__disable_cars_section && (
        <LegendarySection data={home_data?.cars_section} />
      )}
      {home_data?.services?.enable__disable_services && (
        <ServiceSection data={home_data?.services} />
      )}
      <LocationSection />
      {/* <InsightSection /> */}
      <InstagramFeedSection />
    </>
  );
}
