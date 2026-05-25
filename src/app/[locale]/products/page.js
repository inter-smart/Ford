import { apiFetch, CACHE }  from "@/lib/api/client";
import { getLocalizedEndpoint } from "@/lib/api/endpoints";
import { buildMetadata }     from "@/lib/api/seo";
import InnerHero             from "@/components/common/InnerHero";
import ProductListSection    from "@/components/features/products/ProductListSection";

async function getPageData(locale) {
  return apiFetch(getLocalizedEndpoint("product", locale), { cache: CACHE.NO_STORE });
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const data = await getPageData(locale);
  return buildMetadata(data?.seo);
}

export default async function Page({ params }) {
  const { locale } = await params;
  const data   = await getPageData(locale);
  const banner = data?.heroData?.[0] ?? {};

  return (
    <>
      {banner.enable__disable_banner && <InnerHero data={banner} />}
      <ProductListSection data={data} locale={locale} />
    </>
  );
}
