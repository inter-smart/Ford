import dynamic from "next/dynamic";

import HeroSection from "@/components/features/home/HeroSection";
import { apiFetch, CACHE } from "@/lib/api/client";
import { ENDPOINTS } from "@/lib/api/endpoints";
import { buildMetadata } from "@/lib/api/seo";

const WelcomeSection = dynamic(
  () => import("@/components/features/home/WelcomeSection"),
);

const LegendarySection = dynamic(
  () => import("@/components/features/home/LegendarySection"),
);

const ServiceSection = dynamic(
  () => import("@/components/features/home/ServiceSection"),
);

const InstagramFeedSection = dynamic(
  () => import("@/components/features/home/InstagramFeedSection"),
);

import LocationSection from "@/components/features/home/LocationSection";

export async function generateMetadata() {
  const data = await apiFetch(ENDPOINTS.home, { cache: CACHE.ISR(60) });
  return buildMetadata(data?.seo);
}

export default async function Home() {
  const data = await apiFetch(ENDPOINTS.home, { cache: CACHE.NO_STORE });
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
      {/* <LocationSection /> */}
      {/* <InsightSection /> */}
      {/* {home_data?.instagram?.enable__disable_instagram && (
        <InstagramFeedSection data={home_data?.instagram?.instagram} />
      )} */}
    </>
  );
}
