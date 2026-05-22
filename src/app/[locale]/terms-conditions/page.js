import PrivacyPolicyContent from "@/components/features/privacyPolicy/PrivacyPolicyContent";
import { apiFetch, CACHE } from "@/lib/api/client";
import { getLocalizedEndpoint } from "@/lib/api/endpoints";
import { buildMetadata } from "@/lib/api/seo";

async function getPageData(locale) {
  const endpoint = getLocalizedEndpoint("terms", locale);
  return apiFetch(endpoint, { cache: CACHE.NO_STORE });
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const data = await getPageData(locale);
  const base = process.env.NEXT_PUBLIC_API_URL ?? "";

  return {
    ...buildMetadata(data?.seo),
    alternates: {
      canonical: `${base}/${locale}/terms-conditions`,
      languages: {
        en: `${base}/en/terms-conditions`,
        ar: `${base}/ar/terms-conditions`,
      },
    },
  };
}

export default async function TermsConditionsPage({ params }) {
  const { locale } = await params;
  const data = await getPageData(locale);

  return (
    <PrivacyPolicyContent
      data={{ title: data?.pagetitle, description: data?.content }}
    />
  );
}
