"use client";

import { Heading } from "@/components/layout/Heading";
import parse from "html-react-parser";
import Image from "next/image";
import NewsCard from "./NewsCard";
import useEmblaCarousel from "embla-carousel-react";
import { Text } from "@/components/layout/Text";

export default function NewsDetails({ data, relatedNews }) {
  const [emblaRef] = useEmblaCarousel({ axis: "x", skipSnaps: false });

  return (
    <div className="w-full h-auto py-[45px_36px] lg:py-[60px_48px] xl:py-[75px_60px] 2xl:py-[90px_72px]">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-[49.07px] lg:gap-[65.42px] xl:gap-[81.78px] 2xl:gap-[98.13px]">
          <div className="w-full md:w-[403.2px] lg:w-[537.6px] xl:w-[672px] 2xl:w-[806.4px] md:flex-1">
            <Heading
              as="h1"
              size="none"
              className="text-[#000000] text-[20px] sm:text-[22px] md:text-[18px] lg:text-[20px] xl:text-[28px] 2xl:text-[33px] leading-[1.2] font-semibold"
            >
              {data?.title}
            </Heading>
            <p className="text-[#838383] text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px]">
              29.01.2025
            </p>

            <div className="aspect-[756/402] relative my-[12px] mb-[20px] lg:my-[16px] lg:mb-[26px] xl:my-[20px] xl:mb-[33px] 2xl:my-[25px] 2xl:mb-[40px]">
              <Image
                src="/images/latestNews1.png"
                alt="News banner image"
                fill
                className="w-full md:w-[403.2px] lg:w-[537.6px] xl:w-[672px] 2xl:w-[806.4px] rounded-[6px] lg:rounded-[7px] xl:rounded-[9px] 2xl:rounded-[11px] object-cover"
              />
            </div>

            <Text
              as="div"
              size="text1"
              className="text-[#434343] [&_p]:mb-[15px] xl:[&_p]:mb-[25px] 2xl:[&_p]:mb-[30px] 3xl:[&_p]:mb-[35px]"
            >
              {parse(data?.description)}
            </Text>
          </div>

          <div className="text-start w-full md:flex-1">
            <Heading
              as="h2"
              size="heading2"
              className="hidden md:block text-[16px] lg:text-[18px] xl:text-[22px] 2xl:text-[27px] 3xl:text-[32px] leading-[1.35] font-semibold text-[#000000] mb-[10px] xl:mb-[15px] 2xl:mb-[20px]"
            >
              {relatedNews?.title}
            </Heading>

            <div className="hidden md:flex flex-col gap-[10px] lg:gap-[13px] xl:gap-[16px] 2xl:gap-[20px]">
              {relatedNews?.items?.map((news, index) => (
                <div
                  key={index}
                  className="flex gap-[24px] lg:gap-[33px] xl:gap-[40px] 2xl:gap-[48px] 3xl:gap-[56px]"
                >
                  <Image
                    src={news?.media?.url}
                    alt={news?.media?.alt}
                    width={172}
                    height={132}
                    className="md:min-w-[92px] lg:min-w-[122.67px] xl:min-w-[153.33px] 2xl:min-w-[184px] 3xl:min-w-[214.67px] rounded-[6px] lg:rounded-[7px] xl:rounded-[9px] 2xl:rounded-[11px]"
                  />

                  <div className="flex flex-col justify-center gap-4 flex-1 min-w-0">
                    <Heading
                      as={"h4"}
                      size={"heading4"}
                      className="text-[9.6px] lg:text-[12.8px] xl:text-[16px] 2xl:text-[19.2px] 3xl:text-[22.4px] font-semibold text-[#00142E]"
                    >
                      {news?.title}
                    </Heading>
                    <p className="text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[18px] text-[#838383]">
                      {news?.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile - Embla Carousel */}
            <h2 className="block md:hidden text-[16px] leading-[1.35] font-semibold text-[#000000] mb-[10px]">
              {relatedNews?.title}
            </h2>
            <div className="md:hidden overflow-hidden" ref={emblaRef}>
              <div className="flex gap-[12px]">
                {relatedNews?.items?.map((news, index) => (
                  <div
                    key={index}
                    className="flex-none w-full xs:w-[calc(50%-6px)] md:w-[calc(33.333%-8px)]"
                  >
                    <NewsCard news={news} page="news_detail" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
