import { apiFetch, CACHE } from "@/lib/api/client";
import { getLocalizedEndpoint } from "@/lib/api/endpoints";
import { buildMetadata }   from "@/lib/api/seo";
import InnerHero           from "@/components/common/InnerHero";
import FleetCarlineSection from "@/components/features/fleet/FleetCarlineSection";
import FleetContactSection from "@/components/features/fleet/FleetContactSection";
import FleetInfoSection    from "@/components/features/fleet/FleetInfoSection";

async function getPageData(locale) {
  return apiFetch(getLocalizedEndpoint("fleetpage", locale), { cache: CACHE.NO_STORE });
}


async function getRaqFormData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/wp-json/ford/v1/request-a-quote-form`,
      { next: { revalidate: 3600 } }
    );
    const json = await res.json();
    return json?.data || null;
  } catch {
    return null;
  }
}


export async function generateMetadata({ params }) {
  const { locale } = await params;
  const data = await getPageData(locale);
  return buildMetadata(data?.seo);
}

export default async function FleetPage({ params }) {
  const { locale } = await params;
  const [data, raqFormData] = await Promise.all([
    getPageData(locale),
    getRaqFormData(),
  ]);

  const heroRaw    = data?.heroData?.[0];
  const introRaw   = data?.introduction?.[0];
  const quoteRaw   = data?.quote?.[0];
  const carsRaw    = data?.cars?.[0];
  const contactRaw = data?.contact?.[0];
  const lang = locale === "ar" ? "ar" : "en";

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
        <FleetInfoSection introData={introRaw} quoteData={quoteRaw} raqFormData={raqFormData} lang={lang} />
      )}

      {carsRaw?.enable__disable_cars_fleet && (
        <FleetCarlineSection data={carsRaw} locale={locale} />
      )}

      {contactRaw?.enable__disable_contact_section && (
        <FleetContactSection data={contactRaw} locale={locale} />
      )}
    </>
  );
}
