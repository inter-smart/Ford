import dynamic from "next/dynamic";

import InnerHero from "@/components/common/InnerHero";
import AboutSection from "@/components/features/about/AboutSection";
import ContactSection from "@/components/features/about/ContactSection";

import { apiFetch, CACHE } from "@/lib/api/client";
import { getLocalizedEndpoint } from "@/lib/api/endpoints";
import { buildMetadata } from "@/lib/api/seo";

const FindfordSection = dynamic(
  () => import("@/components/features/about/FindfordSection"),
);

async function getPageData(locale) {
  const endpoint = getLocalizedEndpoint("about", locale);
  return apiFetch(endpoint, { cache: CACHE.NO_STORE });
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const data = await getPageData(locale);
  const base = process.env.NEXT_PUBLIC_API_URL ?? "";

  return {
    ...buildMetadata(data?.seo),
    alternates: {
      canonical: `${base}/${locale}/about`,
      languages: {
        en: `${base}/en/about`,
        ar: `${base}/ar/about`,
      },
    },
  };
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const data = await getPageData(locale);

  const hero    = data?.heroSection?.[0];
  const about   = data?.aboutSection?.[0];
  const dealer  = data?.findDealerSection?.[0];
  const contact = data?.contactSection?.[0];

  return (
    <>
      {hero?.enable__disable_about_banner && <InnerHero data={hero} />}
      {about?.enable__disable_about_section && <AboutSection data={about} />}
      {dealer?.enable__disable_dealer_section && (
        <FindfordSection data={dealer} />
      )}
      {contact?.enable__disable_contact_section && (
        <ContactSection data={contact} />
      )}
    </>
  );
}
