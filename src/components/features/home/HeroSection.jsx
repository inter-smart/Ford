"use client";
import { useState, useRef } from "react";
import { Heading } from "@/components/layout/Heading";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function HeroSection({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className="w-full max-xs:h-[480px] xs:h-dvh xs:min-h-[570px] 2xl:min-h-[500px] relative z-0">
      <Swiper
        modules={[EffectFade, Pagination, Autoplay]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        allowTouchMove={true}
        autoplay={{ delay: 2500 }}
        speed={500}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-full h-full"
      >
        {data?.banners?.map((item, index) => (
          <SwiperSlide key={index} className="!h-auto">
            <div className="w-full h-full block relative z-0">
              <div className="h-full w-full absolute -z-2 inset-0">
                {item?.image__video === "video" ? (
                  <video
                    autoPlay
                    preload="auto"
                    width={1920}
                    height={1080}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover absolute -z-1 top-0 left-0"
                  >
                    <source
                      src={item?.video_home_banner?.url}
                      type="video/mp4"
                    />
                  </video>
                ) : (
                  <Image
                    quality={100}
                    src={item?.image_home_banner?.url}
                    alt={item?.image_home_banner?.alt}
                    fill
                    sizes="768px"
                    className="-z-1 object-cover"
                  />
                )}
              </div>
              <div className="container w-full h-full flex max-sm:flex-wrap items-end justify-between relative z-2">
                <div className="w-full h-auto pb-[30px] lg:pb-[40px] 2xl:pb-[60px]">
                  <Heading
                    size="heading1"
                    as="h2"
                    className="font-semibold text-white mb-[20px] sm:mb-[30px]"
                    dangerouslySetInnerHTML={{
                      __html: item?.title_home_banner || "",
                    }}
                  ></Heading>
                  <div className="flex gap-4">
                    <Link
                      href={
                        item?.button_home_banner?.button_link_home_banner?.url
                      }
                      target={
                        item?.button_home_banner?.button_link_home_banner
                          ?.target
                      }
                      className="2xl:text-[14px] xl:text-[12px] text-[10px] font-bold  text-white  min-w-[130px] 2xl:h-[40px] h-[35px] flex items-center justify-center bg-[#1A73E8] px-6 rounded-full hover:bg-[#fff] hover:text-black transition cursor-pointer"
                    >
                      {item?.button_home_banner?.button_text_home_banner}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="container w-auto h-auto absolute z-4 left-auto bottom-10 sm:bottom-15 lg:bottom-15 2xl:bottom-25 right-0 flex items-center gap-[7px] lg:gap-[10px] 2xl:gap-[15px]">
        {data?.banners?.map((item, index) => {
          const isActive = index === activeIndex;
          if (item?.image__video === "video") {
            return (
              <button
                key={index}
                onClick={() => swiperRef.current?.slideToLoop(index)}
                className="w-[8px] h-[8px] 2xl:w-[12px] 2xl:h-[12px] cursor-pointer flex items-center justify-center"
              >
                <svg
                  className={`w-full h-full ${
                    isActive ? "fill-[#1577F0]" : "fill-white"
                  }`}
                  viewBox="0 0 8 10"
                >
                  <path d="M7.07581 4.53117C7.07581 4.66094 7.01258 4.77988 6.90674 4.84913L0.558838 9.00398C0.499823 9.04282 0.431925 9.06239 0.363877 9.06239C0.306066 9.06239 0.248255 9.04824 0.195563 9.01979C0.0749733 8.95475 0 8.82679 0 8.68602V0.376317C0 0.235704 0.0749731 0.107888 0.195412 0.0426999C0.310131 -0.0193263 0.449389 -0.0134549 0.558838 0.0582065L4.4144 2.58171L6.90674 4.21321C7.01258 4.28246 7.07581 4.4014 7.07581 4.53117Z" />
                </svg>
              </button>
            );
          }
          return (
            <button
              key={index}
              onClick={() => swiperRef.current?.slideToLoop(index)}
              className={`w-[8px] h-[8px] 2xl:w-[12px] 2xl:h-[12px] rounded-full cursor-pointer ${
                isActive ? "bg-[#1577F0]" : "bg-white"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
