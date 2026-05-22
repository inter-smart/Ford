import { apiFetch, CACHE } from "@/lib/api/client";
import { getLocalizedEndpoint } from "@/lib/api/endpoints";
import { buildMetadata } from "@/lib/api/seo";
import InnerHero from "@/components/common/InnerHero";
import AccessorySection from "@/components/features/parts/AccessorySection";
import AdviceSection from "@/components/features/parts/AdviceSection";
import FeatureSection from "@/components/features/parts/FeatureSection";
import GallerySection from "@/components/features/parts/GallerySection";
import MaintenanceSection from "@/components/features/parts/MaintenanceSection";
import MotocraftSection from "@/components/features/parts/MotocraftSection";
import PartsSection from "@/components/features/parts/PartsSection";
import WhymotocraftSection from "@/components/features/parts/WhymotocraftSection";
import ServiceBranchDirectory from "@/components/features/service/ServiceBranchDirectory";

function extractListItems(html) {
  if (!html) return [];
  return [...html.matchAll(/<li>([\s\S]*?)<\/li>/g)].map((m) => m[1].trim());
}

async function getPageData(locale) {
  return apiFetch(getLocalizedEndpoint("parts", locale), {
    cache: CACHE.NO_STORE,
  });
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const data = await getPageData(locale);
  return buildMetadata(data?.seo);
}

export default async function Page({ params }) {
  const { locale } = await params;
  const data = await getPageData(locale);

  const heroRaw = data?.heroData?.[0];
  const infoRaw = data?.info?.[0];
  const whyChooseRaw = data?.whyChoose?.[0];
  const safetyRaw = data?.safetyadvice?.[0];
  const accessoryRaw = data?.accessories?.[0];
  const featuresRaw = data?.features?.[0];
  const galleryRaw = data?.gallery?.[0];
  const motorcraftRaw = data?.motorcraft?.[0];
  const whyMotoRaw = data?.whymotorcraft?.[0];
  const branchRaw = data?.branch;

  return (
    <>
      {heroRaw?.enable__disable_banner && (
        <InnerHero
          data={{
            desktop_image: heroRaw.desktop_image,
            mobile_image: heroRaw.mobile_image,
            title: heroRaw.title,
          }}
        />
      )}

      {infoRaw?.enable__disable_info_parts && (
        <PartsSection
          data={{
            sectionTitle: infoRaw.title,
            title: infoRaw.sub_title,
            description: infoRaw.description,
            media: infoRaw.image,
            tabs: infoRaw.tabs?.map((tab, i) => ({
              id: i + 1,
              title: tab.title,
              slug: `/${tab.slug}`,
            })),
          }}
        />
      )}

      {whyChooseRaw?.enable__disable_maintanance_parts && (
        <MaintenanceSection
          data={{
            title: whyChooseRaw.title,
            description: whyChooseRaw.sub_title,
            media: whyChooseRaw.image,
            dailyChecks: {
              title: whyChooseRaw.dailychecks?.[0]?.title,
              items: extractListItems(
                whyChooseRaw.dailychecks?.[0]?.description,
              ),
            },
            monthlyChecks: {
              title: whyChooseRaw.monthlychecks?.[0]?.title,
              items: extractListItems(
                whyChooseRaw.monthlychecks?.[0]?.description,
              ),
            },
          }}
        />
      )}

      {safetyRaw?.enable__disable_safety_advice && (
        <AdviceSection
          data={{
            title: safetyRaw.title,
            advice_list: safetyRaw.items,
          }}
        />
      )}

      {accessoryRaw?.enable__disable_accessories && (
        <AccessorySection
          data={{
            title: accessoryRaw.title,
            description: accessoryRaw.description,
            button_text: accessoryRaw.button_text,
            button: { link: accessoryRaw.button_link?.url || "#" },
            media: accessoryRaw.image,
          }}
        />
      )}

      {featuresRaw?.enable__disable_features_parts && (
        <FeatureSection
          data={{
            title: featuresRaw.title,
            advice_list: featuresRaw.features,
          }}
        />
      )}

      {galleryRaw?.enable__disable_gallery_section && (
        <GallerySection
          data={{
            title: galleryRaw.title,
            slides: [{ id: 1, images: galleryRaw.images }],
          }}
        />
      )}

      {motorcraftRaw?.enable__disable_motorcraft && (
        <MotocraftSection
          data={{
            title: motorcraftRaw.title,
            description: motorcraftRaw.description,
            media: motorcraftRaw.image,
            button: {
              text: "Download Brochure",
              link: motorcraftRaw.brochure || "#",
            },
            features: [
              { title: motorcraftRaw.text },
              ...(motorcraftRaw.conditions?.map((c) => ({
                title: c.title,
                description: c.Content,
              })) ?? []),
            ],
          }}
        />
      )}

      {whyMotoRaw?.enable__disable_why_motorcraft && (
        <WhymotocraftSection
          data={{
            title: whyMotoRaw.title,
            media: whyMotoRaw.image,
            features: extractListItems(whyMotoRaw.features),
          }}
        />
      )}

      {branchRaw && <ServiceBranchDirectory data={branchRaw} />}
    </>
  );
}
