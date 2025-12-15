import InnerHero from "@/components/common/InnerHero";
import BranchSection from "@/components/features/contact/BranchSection";
import ContactFormSection from "@/components/features/contact/ContactFormSection";
import ContactMapSection from "@/components/features/contact/MapSection";

async function getPageData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/wp-json/ford/v1/contact`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
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
          alt: data?.seo?.title || "Ford",
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
export default async function page() {
  const data = await getPageData();
  const banner = data?.contact_acf?.banner;

  const heroData = banner?.enable__disable_banner_section
    ? {
        title: banner?.banner_title,
        description: null,
        desktop_image: banner?.desktop_banner_image,
        mobile_image: banner?.mobile_banner_image,
        button_text: null,
        button: null,
      }
    : null;

  const formData = data?.contact_acf?.form_section;
  const branchData = data?.contact_acf?.branches_section;
  const mapData = data?.contact_acf?.map_section;

  return (
    <>
      {heroData && <InnerHero data={heroData} />}

      {formData?.enable__disable_form_section && (
        <ContactFormSection data={formData} />
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
