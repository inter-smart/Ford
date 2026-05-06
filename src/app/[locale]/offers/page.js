import InnerHero from "@/components/common/InnerHero";
import OfferListSection from "@/components/features/offers/OfferListSection";

async function getPageData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/wp-json/custom/v1/offer`,
    { next: { revalidate: 60 } } 
  );

  // if (!res.ok) {
  //   throw new Error("Failed to fetch data");
  // }

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
          alt: data?.seo?.title || "BRD LUXE",
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
  const banner = data.heroData?.[0] || {};

  return (
    <>
      <InnerHero data={banner} />
      <OfferListSection data={data} />
    </>
  );
}
