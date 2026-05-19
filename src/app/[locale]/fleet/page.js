import { apiFetch, CACHE } from "@/lib/api/client";
import { ENDPOINTS }       from "@/lib/api/endpoints";
import { buildMetadata }   from "@/lib/api/seo";
import InnerHero           from "@/components/common/InnerHero";
import FleetCarlineSection from "@/components/features/fleet/FleetCarlineSection";
import FleetContactSection from "@/components/features/fleet/FleetContactSection";
import FleetInfoSection    from "@/components/features/fleet/FleetInfoSection";

async function getPageData() {
  return apiFetch(ENDPOINTS.fleetPage, { cache: CACHE.NO_STORE });
}

export async function generateMetadata() {
  const data = await getPageData();
  return buildMetadata(data?.seo);
}

export default async function FleetPage() {
  const data = await getPageData();

  const heroRaw    = data?.heroData?.[0];
  const introRaw   = data?.introduction?.[0];
  const quoteRaw   = data?.quote?.[0];
  const carsRaw    = data?.cars?.[0];
  const contactRaw = data?.contact?.[0];

  return (
    <>
      {heroRaw?.enable__disable_banner && (
        <InnerHero
          data={{
            desktop_image: heroRaw.desktop_image,
            mobile_image:  heroRaw.mobile_image,
            title:         heroRaw.title,
          }}
        />
      )}

      {introRaw?.enable__disable_banner && (
        <FleetInfoSection introData={introRaw} quoteData={quoteRaw} />
      )}

      {carsRaw?.enable__disable_cars_fleet && (
        <FleetCarlineSection data={carsRaw} />
      )}

      {contactRaw?.enable__disable_contact_section && (
        <FleetContactSection data={contactRaw} />
      )}
    </>
  );
}
