import Image from "next/image";
import { Heading } from "@/components/layout/Heading";
import RequestAQuoteDialog from "@/components/common/RequestAQuoteDialog";
import { EnquireNowForm } from "@/components/form/EnquireNowForm";
import parse from "html-react-parser";

const enquireT = {
  en: { buttonText: "Enquire Now" },
  ar: { buttonText: "استفسر الآن" },
};

export default function OfferDetailSection({ data, formData, lang = "en" }) {
  const detail   = data?.detail_page;
  const benefits = detail?.benefits_section?.[0];
  const imageUrl = detail?.detail_page_image?.url;
  const imageAlt = detail?.detail_page_image?.alt || data?.title || "offer";
  const et       = enquireT[lang] ?? enquireT.en;  

  return (
    <section className="w-full h-auto block py-10 sm:py-[60px] xl:py-[80px_75px] 2xl:py-[100px_90px] 3xl:py-[130px_100px]">
      <div className="container">
        <div className="flex flex-wrap items-center -mx-[16px] xl:-mx-[20px] 2xl:-mx-[24px] [&>*]:px-[16px] [&>*]:xl:px-[20px] [&>*]:2xl:px-[24px]">
          <div className="w-full lg:w-[45%] mb-5 lg:mb-0">
            <Heading
              as="h2"
              size={"none"}
              className="text-[20px] lg:text-[27px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] leading-normal font-semibold text-black mb-[10px] xl:mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px]"
            >
              {data?.title}
            </Heading>
            {detail?.listing_description_banner_offers && (
              <div className="text-[14px] xl:text-[16px] 2xl:text-[19.2px] 3xl:text-[24px] leading-normal font-semibold text-black mb-[15px] xl:mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px]">
                {parse(detail.listing_description_banner_offers)}
              </div>
            )}
            {detail?.description_banner_offers && (
              <div className="typography [--text-color:#000] mb-[20px] xl:mb-[30px] 2xl:mb-[35px] 3xl:mb-[40px]">
                {parse(detail.description_banner_offers)}
              </div>
            )}
            <RequestAQuoteDialog
              imgPath={formData?.offers_image?.url || ""}
              imgAlt={formData?.offers_image?.alt || ""}
              imgWidth={formData?.offers_image?.width || 505}
              imgHeight={formData?.offers_image?.height || 631}
              title={formData?.offers_title || "Enquire Now"}
              description={formData?.offers_short_desription || ""}
              dealers={formData?.dealers || []}
              pageTitle={data?.title || ""}
              lang={lang}                            
            >
              <button className="text-[10px] xl:text-[12px] 2xl:text-[14.5px] 3xl:text-[18px] leading-[1] font-bold text-white w-max max-w-full h-[30px] xl:h-[35.5] 2xl:h-[42.6] 3xl:h-[53.4] py-2 px-[15px] xl:px-[18px] 2xl:px-[23px] 3xl:px-[28px] rounded-full bg-[#066FEF] cursor-pointer transition-all flex items-center justify-center hover:bg-[#005fd3]">
                {et.buttonText}                     
              </button>
            </RequestAQuoteDialog>
          </div>

          {/* rest of the component unchanged */}
          <div className="w-full lg:w-[55%]">
            <div className="w-full max-w-[468px] lg:max-w-full aspect-[753/402] rounded-[8px] 2xl:rounded-[10.6px] 3xl:rounded-[13.3px] overflow-hidden">
              <Image
                src={imageUrl || "/images/placeholder.png"}
                alt={imageAlt}
                width={753}
                height={402}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {benefits?.enable__disable_benefits_section &&
          benefits?.benefits_items?.length > 0 && (
            <div className="flex flex-wrap -mx-[6px] xl:-mx-[10px] 2xl:-mx-[13px] mt-[20px] xl:mt-[50px] 2xl:mt-[40px] 3xl:mt-[50px]">
              {benefits.benefits_items.map((item, index) => (
                <div
                  key={"benefit-" + index}
                  className="w-full min-[376px]:w-1/2 lg:w-1/3 h-auto p-[6px] xl:p-[10px] 2xl:p-[13px] 3xl:p-[15px]"
                >
                  <div className="w-full h-full p-[15px] sm:p-[20px_18px] xl:p-[28px_26px] 2xl:p-[34px_30px] 3xl:p-[38px_32px] rounded-[8px] 2xl:rounded-[10.6px] 3xl:rounded-[13.3px] bg-[#F7F7F7]">
                    <div className="flex flex-wrap items-center max-sm:flex-col gap-[10px] sm:gap-[15px] xl:gap-[20px] 2xl:gap-[24px]">
                      <div className="w-[30px] sm:w-[35px] xl:w-[52px] 2xl:w-[62px]">
                        <Image
                          src={item?.image_benefits_benefits_section?.url}
                          alt={item?.image_benefits_benefits_section?.alt || ""}
                          width={62}
                          height={54}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-[12px] sm:text-[14px] xl:text-[16px] 2xl:text-[19.2px] 3xl:text-[24px] leading-normal font-normal text-center sm:text-start text-black">
                          {item?.title_benefits_benefits_section}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
      </div>
    </section>
  );
}