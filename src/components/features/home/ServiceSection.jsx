"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Text } from "@/components/layout/Text";
import { Heading } from "@/components/layout/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { cn } from "@/lib/utils";

export default function ServiceSection({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="w-full relative bg-[#00095B] z-0 overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:bg-white before:xl:h-[30%] before:h-[25%] before:z-[-1]">
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            478: { slidesPerView: 2, pagination: false, spaceBetween: 15 },
            678: {
              slidesPerView: 3,
              spaceBetween: 20,
              pagination: false,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1441: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          pagination={false}
          // pagination={{ clickable: true }}
          modules={[Pagination]}
          className="h-auto"
        >
          {data?.service?.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <SwiperSlide key={index} className="!h-auto">
                <div
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`w-full h-full flex flex-col justify-start rounded-[10px_10px_0_0] overflow-hidden p-[10px] pb-[20px] sm:pb-[25px] group cursor-pointer transition-all ${
                    isActive
                      ? "bg-[#0A1572]"
                      : "max-sm:bg-[#0A1572] hover:bg-[#0A1572]"
                  }`}
                >
                  <div className="w-full rounded-[10px] 2xl:pt-[150px] sm:pt-[110px] pt-[130px] overflow-hidden mb-[15px] relative">
                    <div className="w-full aspect-ratio-[280/170]">
                      <video
                        autoPlay
                        preload="auto"
                        width={250}
                        height={150}
                        muted
                        loop
                        playsInline
                        className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 z-10 ${
                          isActive
                            ? "sm:opacity-100"
                            : "sm:opacity-0 group-hover:opacity-100 "
                        }`}
                      >
                        <source
                          src={item?.video_service?.url}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>

                    <div className="2xl:w-[50px] w-[40px] 2xl:h-[50px] h-[40px] max-sm:hidden flex items-center relative">
                      <Image
                        src={
                          item?.icon_service?.url || "/images/placeholder.png"
                        }
                        alt={item?.icon_service?.alt || "Icon"}
                        width={50}
                        height={50}
                        className={`w-[50px] h-[50px] object-contain z-20 transition-opacity duration-300 ${
                          isActive
                            ? "opacity-0 scale-0"
                            : "opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-0"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="max-sm:text-center">
                    <Heading
                      size="heading2"
                      as="h4"
                      className="text-white mb-[15px] line-clamp-2 xl:max-w-[245px]"
                    >
                      {item?.title_service}
                    </Heading>
                    <Text
                      size="text2"
                      as="p"
                      className="text-white mb-[20px] line-clamp-3 font-light"
                    >
                      {item?.description_service}
                    </Text>
                    {/* <Link
                      href={item?.button_service?.button_link_service?.url}
                      target={item?.button_service?.button_link_service?.target}
                      className={`2xl:text-[14px] xl:text-[12px] text-[10px] font-normal text-white max-w-[135px] 2xl:h-[40px] h-[35px] flex items-center justify-center border border-white px-2 rounded-full transition cursor-pointer max-sm:m-auto ${
                        isActive
                          ? "opacity-100 text-[#1A73E8]"
                          : "sm:opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      {item?.button_service?.button_text_service}
                    </Link> */}
                    <Link
                      href={item?.button_service?.button_link_service?.url}
                      target={item?.button_service?.button_link_service?.target}
                      className={cn(
                        "text-[12px] xl:text-[12.44px] 2xl:text-[14.9px] 3xl:text-[18.6px] leading-normal font-bold text-white w-full flex items-center gap-1.5 2xl:gap-2 transition-all duration-300 ease-in-out hover:tracking-wider",
                        isActive ? "opacity-100" : "opacity-0",
                      )}
                    >
                      {item?.button_service?.button_text_service}
                      <Image
                        src="/images/footer-btn-icon.svg"
                        alt="fleet-icon"
                        width={8}
                        height={14}
                        className="w-[4.5px] 2xl:w-[6px] 3xl:w-[7px] block"
                      />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
