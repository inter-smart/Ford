import { apiFetch, CACHE }  from "@/lib/api/client";
import { ENDPOINTS }         from "@/lib/api/endpoints";
import { buildMetadata }     from "@/lib/api/seo";
import InnerHero             from "@/components/common/InnerHero";
import ProductListSection    from "@/components/features/products/ProductListSection";

async function getPageData() {
  return apiFetch(ENDPOINTS.products, { cache: CACHE.NO_STORE });
}

export async function generateMetadata() {
  const data = await getPageData();
  return buildMetadata(data?.seo);
}

export default async function Page() {
  const data   = await getPageData();
  const banner = data?.heroData?.[0] ?? {};

  return (
    <>
      {banner.enable__disable_banner && <InnerHero data={banner} />}
      <ProductListSection data={data} />
    </>
  );
}
