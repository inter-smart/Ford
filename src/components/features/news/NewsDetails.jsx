"use client";

import { Heading } from "@/components/layout/Heading";
import parse from "html-react-parser";
import Image from "next/image";
import NewsCard from "./NewsCard";
import useEmblaCarousel from "embla-carousel-react";
import { Text } from "@/components/layout/Text";

export default function NewsDetails({ data }) {
  const [emblaRef] = useEmblaCarousel({ axis: "x", skipSnaps: false });

  return (
    <div className="w-full h-auto py-[45px_36px] lg:py-[60px_48px] xl:py-[75px_60px] 2xl:py-[90px_72px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[49px] lg:gap-[65px]  xl:gap-[82px] 2xl:gap-[98px]">
          <div className="w-full lg:w-[55%] xl:w-[60%]">
            <Heading
              as="h1"
              size=""
              className="text-[#000000] text-[20px] sm:text-[22px] md:text-[18px] lg:text-[20px] xl:text-[28px] 2xl:text-[33px] leading-[1.2] font-semibold"
            >
              {data?.title}
            </Heading>
            <p className="text-[#838383] text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] mt-[5px]">
              29.01.2025
            </p>

            <div className="aspect-[756/402] relative my-[12px] mb-[20px] lg:my-[16px] lg:mb-[26px] xl:my-[20px] xl:mb-[33px] 2xl:my-[25px] 2xl:mb-[40px]">
              <Image
                src="/images/latestNews1.png"
                alt="News banner image"
                fill
                className="w-full rounded-[6px] lg:rounded-[7px] xl:rounded-[9px] 2xl:rounded-[11px] object-cover"
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

          <div className="text-start w-full lg:flex-1">
            <Heading
              as="h2"
              size="heading2"
              className="text-[16px] xl:text-[20px] 2xl:text-[25px] 3xl:text-[30px] leading-[1.35] font-semibold text-[#434343] mb-[10px] xl:mb-[15px] 2xl:mb-[20px]"
            >
              {data?.related_news_title}
            </Heading>

            <div className="hidden lg:flex flex-col gap-[10px] lg:gap-[13px] xl:gap-[16px] 2xl:gap-[20px]">
              {data?.related_news?.map((news, index) => (
                <div
                  key={index}
                  className="flex gap-[24px] lg:gap-[33px] xl:gap-[40px] 2xl:gap-[48px] 3xl:gap-[56px]"
                >
                  <Image
                    src={news?.img}
                    alt={news?.title}
                    width={172}
                    height={132}
                    className="rounded-[6px] lg:rounded-[7px] xl:rounded-[9px] 2xl:rounded-[11px]"
                  />

                  <div className="my-[12px] lg:my-[16px] xl:my-[20px] 2xl:my-[25px] flex-1 min-w-0">
                    <Heading
                      as={"h4"}
                      className="text-[10px] lg:text-[13px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[22px}] font-semibold text-[#00142E]"
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
            <div className="lg:hidden overflow-hidden" ref={emblaRef}>
              <div className="flex gap-[12px]">
                {data?.related_news?.map((news, index) => (
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
