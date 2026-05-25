"use client";

import { Heading } from "@/components/layout/Heading";
import parse from "html-react-parser";
import Image from "next/image";
import NewsCard from "./NewsCard";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

export default function NewsDetailSection({ data, relatedNews, locale = "en" }) {
  const [emblaRef] = useEmblaCarousel({ axis: "x", skipSnaps: false, direction: locale === "ar" ? "rtl" : "ltr" });

  const imageUrl = data?.acf?.main_image?.url || data?.featured_image?.url || data?.media?.url;
  const imageAlt = data?.acf?.main_image?.alt || data?.featured_image?.alt || data?.media?.alt || data?.title || "News";
  const content = data?.content || data?.description;

  return (
    <section className="w-full h-auto block py-10 sm:py-[60px] xl:py-[77px] 2xl:py-[90px] 3xl:py-[115px]">
      <div className="container">
        <div className="flex flex-wrap gap-[49.07px] lg:gap-[65.42px] xl:gap-[81.78px] 2xl:gap-[98.13px] 3xl:gap-[122px]">
          <div className="flex-1">
            <Heading
              as="h2"
              size={"none"}
              className="text-[15px] lg:text-[19.7px] xl:text-[24.2px] 2xl:text-[29.8px] 3xl:text-[37.33px] leading-normal font-semibold text-black mb-[2px]"
            >
              {data?.title}
            </Heading>
            <div className="text-[11px] xl:text-[12.4px] 2xl:text-[14.9px] 3xl:text-[18.6px] leading-normal font-normal text-[#838383] mb-[10px] xl:mb-[15px] 2xl:mb-[20px] 3xl:mb-[25px]">
              {data?.date}
            </div>
            {imageUrl && (
              <div className="group w-full aspect-[2/1] rounded-[8px] 2xl:rounded-[10.6px] 3xl:rounded-[13.3px] overflow-hidden mb-[20px] xl:mb-[30px] 2xl:mb-[35px] 3xl:mb-[40px] relative z-0">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <div className="typography [--text-color:#434343]">
              {content && parse(content)}
            </div>
          </div>

          {relatedNews?.items?.length > 0 && (
            <div className="w-full lg:w-[316px] xl:w-[395px] 2xl:w-[470px] 3xl:w-[590px]">
              <Heading
                as="h2"
                size={"none"}
                className="text-[16px] lg:text-[17.7px] xl:text-[22.2px] 2xl:text-[26.67px] 3xl:text-[33.33px] leading-normal font-semibold text-black mb-[10px] xl:mb-[15px] 2xl:mb-[20px] 3xl:mb-[25px]"
              >
                {relatedNews?.title}
              </Heading>
              <div className="hidden lg:flex flex-col gap-[10px] lg:gap-[12px] xl:gap-[16px] 2xl:gap-[19.2px] 3xl:gap-[24px]">
                {relatedNews?.items?.map((item, index) => {
                  const itemImageUrl = item?.acf?.main_image?.url || item?.featured_image?.url || item?.media?.url;
                  const itemImageAlt = item?.acf?.main_image?.alt || item?.featured_image?.alt || item?.media?.alt || item?.title || "News";
                  return (
                    <div key={"relatedNews" + index}>
                      <Link
                        href={item?.slug ? `/news/${item.slug}` : "#"}
                        className="w-full block group"
                      >
                        <div className="flex flex-wrap gap-[15px] xl:gap-[20px] 2xl:gap-[25px] 3xl:gap-[30px] items-center">
                          <div className="w-[100px] lg:w-[122px] xl:w-[153px] 2xl:w-[184px] 3xl:w-[230px] shrink-0">
                            <div className="w-full aspect-[230/175] rounded-[8px] 2xl:rounded-[10.6px] 3xl:rounded-[13.3px] overflow-hidden relative z-0">
                              {itemImageUrl && (
                                <Image
                                  src={itemImageUrl}
                                  alt={itemImageAlt}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                              )}
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="text-[14px] xl:text-[16px] 2xl:text-[19.2px] 3xl:text-[24px] leading-normal font-semibold text-black mb-[4px] xl:mb-[6px] 2xl:mb-[10px] 3xl:mb-[15px]">
                              {item?.title}
                            </div>
                            <div className="text-[11px] xl:text-[12.4px] 2xl:text-[14.9px] 3xl:text-[18.6px] leading-normal font-normal text-[#838383] mb-[4px] xl:mb-[6px] 2xl:mb-[10px] 3xl:mb-[15px]">
                              {item?.date}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>

              <div
                ref={emblaRef}
                className="w-full max-w-full overflow-hidden lg:hidden"
              >
                <div className="flex touch-pan-y touch-pinch-zoom -mx-2">
                  {relatedNews?.items?.map((item, index) => (
                    <div
                      key={"relatedNews" + index}
                      className="flex-[0_0_220px] sm:flex-[0_0_268px] min-w-0 select-none px-2"
                    >
                      <NewsCard variant="list" data={item} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
