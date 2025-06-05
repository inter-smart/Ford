import HeroSection from "@/components/features/home/HeroSection";
import WelcomeSection from "@/components/features/home/WelcomeSection";
import LegendarySection from "@/components/features/home/LegendarySection";
import ServiceSection from "@/components/features/home/ServiceSection";
import LocationSection from "@/components/features/home/LocationSection";
import InsightSection from "@/components/features/home/InsightSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <LegendarySection />
      <ServiceSection />
      <LocationSection />
      <InsightSection />
    </>
  );
}
