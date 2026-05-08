"use client";

import { Heading } from "@/components/layout/Heading";
import parse from "html-react-parser";
import Image from "next/image";
import NewsCard from "./NewsCard";
import useEmblaCarousel from "embla-carousel-react";

const localData = {
  title: "Ford Explorer: An Outstanding Companion",
  description: `
  <p>A household name among American carbuyers, the Ford Explorer has evolved from its long-ago roots as a body-on-frame SUV into the comprehensively modern three-row crossover it is today. Ford Explorer is a great looking SUV that is a joy to experience. It is well-equipped to make every journey pleasant, whilst also comfortably seating a large family on weekend journeys. The Explorer has an impressive combination of power, luxury and advanced technology features. The refreshed Ford Explorer is better looking than it's ever been with a raft of new technologies. The Explorer is available in Standard, XLT and Limited trim lines.
      <br/>
        <br/>
      The Explorer will draw attention with its attractive fascia, LED signature lights, and well-designed grille, an available dual-panel moonroof, premium silver-painted front and rear skid plate elements, and an 18 and 20-inch aluminium wheel line-up. Technology enthusiasts can revel in the offering of the Explorer with an available front and 180-degree wide rear-view camera with washers, parking assist system that can now park the Explorer perpendicularly and hands-free, foot-activated power liftgate.
      The Explorer is a perfect companion for your journeys. It is equipped with a normally-aspirated 3.5-litre V6 producing an estimated 294 PS and 346 Nm of torque, which is also the available engine on Standard, XLT and Limited trims.
      <br/>
      <br/>

      In the Explorer the intelligent four-wheel drive with Terrain Management System™ is ready for any adventure. It reassesses conditions about 20 times faster than the blink of an eye – providing precise handling and traction. In sand, grass or gravel mode, the antilock braking system changes its pulse rate, which allows material to build up in front of the wheels, acting as a doorstop of sorts to help slow momentum.
      <br/>
      <br/>
      The Explorer boasts of advanced safety features to reward customers with happy journeys. The features include 2nd Generation Driver and Front Passenger, Side Seat Airbags, 3rd Row Safety Canopy with Rollover Sensor, AdvanceTrac® with Roll Stability Control™, BLIS® with Cross Traffic Alert, Front 180-Degree Camera with Washer, Perpendicular Parking, and more.
      <br/>
      <br/>

      For 2017, the Ford Explorer is equipped with Ford's latest Sync 3 infotainment system is available this year, replacing the previous MyFord Touch system.
      </p>`,

  related_news_title: "Related News",
  related_news: [
    {
      img: "/images/latestNews1.png",
      date: "29.01.2025",
      slug: "news",
      title: "Ford Explorer: An Outstanding Companion",
      description: `<p>Available with plenty of features the Ford Explorer has a lot to
                offer if you're shopping for a three-row crossover SUV. Its
                outstanding quietness</p>`,
    },
    {
      img: "/images/latestNews2.png",
      date: "29.01.2025",
      slug: "news",
      title: "Ford Explorer: An Outstanding Companion",
      description: `<p>Available with plenty of features the Ford Explorer has a lot to
                offer if you're shopping for a three-row crossover SUV. Its
                outstanding quietness</p>`,
    },
    {
      img: "/images/latestNews1.png",
      date: "29.01.2025",
      slug: "news",
      title: "Ford Explorer: An Outstanding Companion",
      description: `<p>Available with plenty of features the Ford Explorer has a lot to
                offer if you're shopping for a three-row crossover SUV. Its
                outstanding quietness</p>`,
    },
    {
      img: "/images/latestNews3.png",
      date: "29.01.2025",
      slug: "news",
      title: "Ford Explorer: An Outstanding Companion",
      description: `<p>Available with plenty of features the Ford Explorer has a lot to
                offer if you're shopping for a three-row crossover SUV. Its
                outstanding quietness</p>`,
    },
  ],
};

export default function NewsDetails({ data = localData }) {
  const [emblaRef] = useEmblaCarousel({ axis: "x", skipSnaps: false });

  return (
    <div className="w-full h-auto py-[45px_36px] lg:py-[60px_48px] xl:py-[75px_60px] 2xl:py-[90px_72px]">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between gap-[49px] lg:gap-[65px]  xl:gap-[82px] 2xl:gap-[98px]">
          <div className="w-full   lg:w-[55%] xl:w-[672px] 2xl:w-[806px]">
            <Heading
              as="h1"
              size=""
              className="text-[#00142E] text-[20px] sm:text-[22px] md:text-[18px] lg:text-[20px] xl:text-[28px] 2xl:text-[33px] leading-[1.2] font-semibold"
            >
              {data?.title}
            </Heading>
            <p className="text-[#838383] text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] mt-[5px]">
              29.01.2025
            </p>

            <Image
              src="/images/latestNews1.png"
              alt="News banner image"
              width={756}
              height={402}
              className="my-[12px_20px] lg:my-[16px_26px] xl:my-[20px_33px] 2xl:my-[25px_40px] w-full rounded-[10px] rounded-[6px] lg:rounded-[7px] xl:rounded-[9px] 2xl:rounded-[11px]"
            />

            <div className="[&_p]:text-[10px] lg:[&_p]:text-[12px] xl:[&_p]:text-[14px] 2xl:[&_p]:text-[17px] [&_*]:text-[#434343]">
              {parse(data?.description)}
            </div>
          </div>

          <div className="text-start lg:flex-1 w-full ">
            <Heading
              as="h2"
              size="heading2"
              className="text-[16px] xl:text-[20px] 2xl:text-[25px] 3xl:text-[30px] leading-[1.35] font-semibold text-black mb-[10px] xl:mb-[15px] 2xl:mb-[20px]"
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
                    className=" rounded-[10px] rounded-[6px] lg:rounded-[7px] xl:rounded-[9px] 2xl:rounded-[11px]"
                  />

                  <div className="my-[12px] lg:my-[16px] xl:my-[20px] 2xl:my-[25px] lg:w-[180px] xl:w-[228px]  2xl:w-[272px]">
                    <Heading
                      as={"h4"}
                      className="text-[10px] lg:text-[13px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[22px] leading-[1.5] font-semibold text-[#00142E]"
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
