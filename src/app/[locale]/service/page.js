import InnerHero from "@/components/common/InnerHero";
import ServiceBranchDirectory from "@/components/features/service/ServiceBranchDirectory";
import ServiceInfoSection from "@/components/features/service/ServiceInfoSection";
import ServiceIntervalSection from "@/components/features/service/ServiceIntervalSection";
import ServiceLoyaltyProgram from "@/components/features/service/ServiceLoyaltyProgram";
import ServiceVisitSection from "@/components/features/service/ServiceVisitSection";
import ServiceWhatWillReplacedSection from "@/components/features/service/ServiceWhatWillReplacedSection";
import { apiFetch, CACHE } from "@/lib/api/client";
import { getLocalizedEndpoint } from "@/lib/api/endpoints";
import { buildMetadata } from "@/lib/api/seo";

async function getPageData(locale) {
  return apiFetch(getLocalizedEndpoint("services", locale), { cache: CACHE.NO_STORE });
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const data = await getPageData(locale);
  return buildMetadata(data?.seo);
}

export default async function ServicePage({ params }) {
  const { locale } = await params;
  const data = await getPageData(locale);

  const bannerRaw       = data?.banner?.[0];
  const sectionRaw      = data?.service_section?.[0];
  const intervalRaw     = data?.serviceInterval?.[0];
  const milestoneRaw    = data?.service_milestones?.[0];
  const monthlyRaw      = data?.monthly_checks?.[0];
  const visitRaw        = data?.serviceVisit?.[0];
  const replacedRaw     = data?.WhatWillBeReplaced?.[0];
  const loyaltyRaw      = data?.loyalty_program?.[0];
  const howWorksRaw     = data?.how_works?.[0];
  const branchRaw       = data?.branch?.[0];

  return (
    <>
      {bannerRaw?.enable__disable_banner_service && (
        <InnerHero
          data={{
            enable__disable_banner_section: bannerRaw.enable__disable_banner_service,
            desktop_image: bannerRaw.desktop_image,
            mobile_image: bannerRaw.mobile_image,
            title: bannerRaw.title,
            button_text: bannerRaw.button_text,
            button: {
              link: bannerRaw.button_link?.url || "/",
              isExternal: bannerRaw.button_link?.target === "_blank",
            },
          }}
        />
      )}

      {sectionRaw?.enable__disable_service_section && (
        <ServiceInfoSection
          data={{
            media: sectionRaw.image,
            sectionTitle: sectionRaw.section_title,
            tabs: sectionRaw.tabs?.map((tab) => ({
              title: tab.title,
              slug: tab.link?.url || "/",
            })) ?? [],
            title: sectionRaw.title,
            description: sectionRaw.description,
          }}
        />
      )}

      {intervalRaw?.enable__disable_service_intervals && (
        <ServiceIntervalSection
          data={{
            title: intervalRaw.title,
            description: intervalRaw.description,
            button: {
              label: intervalRaw.button_text,
              link: intervalRaw.button_link?.url || "/",
              isExternal: intervalRaw.button_link?.target === "_blank",
            },
            items: [
              milestoneRaw && {
                title: milestoneRaw.title,
                description: milestoneRaw.description,
              },
              monthlyRaw && {
                title: monthlyRaw.title,
                description: monthlyRaw.description,
              },
            ].filter(Boolean),
          }}
        />
      )}

      {visitRaw?.enable__disable && (
        <ServiceVisitSection
          data={{
            title: visitRaw.title,
            description: visitRaw.description,
          }}
        />
      )}

      {replacedRaw?.enable__disable && (
        <ServiceWhatWillReplacedSection
          data={{
            title: replacedRaw.title,
            items: replacedRaw.tabs?.map((tab) => ({
              title: tab.title,
              infoItems: [
                tab.petrol && { title: "Petrol", description: `${tab.petrol}km` },
                tab.diesel && { title: "Diesel", description: `${tab.diesel}km` },
              ].filter(Boolean),
            })) ?? [],
          }}
        />
      )}

      {loyaltyRaw?.enable__disable && (
        <ServiceLoyaltyProgram
          data={{
            title: loyaltyRaw.title,
            media: loyaltyRaw.image,
            description: `<h3>${loyaltyRaw.sub_title}</h3>${loyaltyRaw.description}`,
            howWorks: howWorksRaw
              ? {
                  title: howWorksRaw.title,
                  description: howWorksRaw.description,
                  description2: howWorksRaw.points,
                }
              : null,
          }}
        />
      )}

      {branchRaw?.enable__disable && (
        <ServiceBranchDirectory
          data={{
            title: branchRaw.title,
            cards: branchRaw.branches?.map((b, idx) => ({
              id: idx + 1,
              title: b.name,
              description: `<p>${b.address}</p>`,
              phone: b.phone,
              timing: b.time,
              directionUrl: b.direction?.url || "#",
            })) ?? [],
          }}
        />
      )}
    </>
  );
}
