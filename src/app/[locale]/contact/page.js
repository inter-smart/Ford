import { apiFetch, CACHE } from "@/lib/api/client";
import { ENDPOINTS }       from "@/lib/api/endpoints";
import { buildMetadata }   from "@/lib/api/seo";
import InnerHero           from "@/components/common/InnerHero";
import BranchSection       from "@/components/features/contact/BranchSection";
import ContactFormSection  from "@/components/features/contact/ContactFormSection";
import ContactMapSection   from "@/components/features/contact/MapSection";

async function getPageData() {
  return apiFetch(ENDPOINTS.contact, { cache: CACHE.NO_STORE });
}

export async function generateMetadata() {
  const data = await getPageData();
  return buildMetadata(data?.seo);
}

export default async function ContactPage() {
  const data = await getPageData();

  const banner     = data?.contact_acf?.banner;
  const formData   = data?.contact_acf?.form_section;
  const branchData = data?.contact_acf?.branches_section;
  const mapData    = data?.contact_acf?.map_section;

  return (
    <>
      {banner?.enable__disable_banner_section && <InnerHero data={banner} />}
      {formData?.enable__disable_form_section && <ContactFormSection data={formData} />}
      {branchData?.enable__disable_branches_section && <BranchSection data={branchData} />}
      {mapData?.enable__disable_map_section && <ContactMapSection data={mapData} />}
    </>
  );
}
