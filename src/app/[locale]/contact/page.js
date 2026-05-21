import { apiFetch, CACHE } from "@/lib/api/client";
import { getLocalizedEndpoint } from "@/lib/api/endpoints";
import { buildMetadata } from "@/lib/api/seo";
import InnerHero from "@/components/common/InnerHero";
import BranchSection from "@/components/features/contact/BranchSection";
import ContactFormSection from "@/components/features/contact/ContactFormSection";
import ContactMapSection from "@/components/features/contact/MapSection";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const lang = locale === "ar" ? "ar" : "en";
  const data = await apiFetch(getLocalizedEndpoint("contact", lang), {
    cache: CACHE.NO_STORE,
  });
  return buildMetadata(data?.seo);
}

export default async function ContactPage({ params }) {
  const { locale } = await params;
  const lang = locale === "ar" ? "ar" : "en";
  const data = await apiFetch(getLocalizedEndpoint("contact", lang), {
    cache: CACHE.NO_STORE,
  });

  const banner = data?.contact_acf?.banner;
  const formData = data?.contact_acf?.form_section;
  const branchData = data?.contact_acf?.branches_section;
  const mapData = data?.contact_acf?.map_section;

  return (
    <>
      {banner?.enable__disable_banner_section && <InnerHero data={banner} />}
      {formData?.enable__disable_form_section && (
        <ContactFormSection data={formData} lang={lang} />
      )}
      {branchData?.enable__disable_branches_section && (
        <BranchSection data={branchData} />
      )}
      {mapData?.enable__disable_map_section && (
        <ContactMapSection data={mapData} />
      )}
    </>
  );
}
