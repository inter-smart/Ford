"use client";
import Image from "next/image";
import { Text } from "@/components/layout/Text";
import { Heading } from "@/components/layout/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function toSlides(images, image) {
  if (Array.isArray(images) && images.length > 0) return images;
  if (image?.url) return [image];
  return [];
}

function ImageSlider({ slides, delay = 3000, aspectClass = "aspect-[300/250]" }) {
  if (!slides.length) return null;
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      loop={slides.length > 1}
      autoplay={slides.length > 1 ? { delay, disableOnInteraction: false } : false}
      pagination={{ clickable: true }}
      speed={600}
      className="w-full h-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className={`w-full h-full ${aspectClass} overflow-hidden`}>
            <Image
              src={slide.url || "/images/placeholder.png"}
              alt={slide.alt || ""}
              width={780}
              height={680}
              className="w-full h-full object-cover transition-all duration-500 ease-in-out"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default function VehicleDetailSection({ data }) {
  const otherItems = data?.other_features?.enabled ? (data?.other_features?.items || []) : [];

  const interiorSlides = toSlides(data?.interior?.images);
  const exteriorSlides = toSlides(data?.exterior?.images);

  return (
    <section className="w-full h-auto block">
      <div className="container">
        <div className="max-sm:text-center w-full h-auto py-[40px] sm:py-[35px] lg:py-[40px] 2xl:py-[50px]">
          <Heading
            as="h1"
            className="text-[22px] sm:text-[24px] md:text-[28px] xl:text-[32px] 2xl:text-[38px] 3xl:text-[45px] leading-[1] font-semibold text-black mb-[15px] 3xl:mb-[20px]"
          >
            {data?.title}
          </Heading>
          <Text
            as="p"
            className="text-[13px] sm:text-[14px] xl:text-[16px] 3xl:text-[18px] leading-[1.5] font-normal text-[#434343] sm:max-w-[500px] lg:max-w-[660px] 2xl:max-w-[800px]"
          >
            {data?.description}
          </Text>
        </div>
      </div>

      <div className="w-full h-auto xl:bg-[#F0F0F0] block">
        {/* Interior */}
        {data?.interior?.enabled && (
          <div className="container container-sm !p-0 xl:max-w-full xl:!pr-[calc(((100%-var(--breakpoint-xl))/2)+var(--breakpoint-sm-gap-xl))] 2xl:!pr-[calc(((100%-var(--breakpoint-2xl))/2)+var(--breakpoint-sm-gap-2xl))] 3xl:!pr-[calc(((100%-var(--breakpoint-3xl))/2)+var(--breakpoint-sm-gap-3xl))]">
            <div className="w-full h-auto flex flex-wrap">
              <div className="w-full sm:w-1/2 h-auto overflow-hidden block">
                <ImageSlider slides={interiorSlides} delay={3000} />
              </div>
              <div className="w-full sm:w-1/2 h-auto p-[30px_25px_20px_0px] sm:p-[40px_0px_40px_30px] lg:p-[50px_0px_50px_50px] xl:p-[60px_0px_60px_70px] 2xl:p-[70px_0px_70px_80px] 3xl:p-[80px_0px_80px_90px] flex flex-col justify-center">
                <div className="w-full h-auto mb-[15px] sm:mb-[20px] lg:mb-[30px] 2xl:mb-[40px] 3xl:mb-[50px]">
                  <div className="text-[18px] sm:text-[20px] lg:text-[22px] 2xl:text-[25px] 3xl:text-[28px] leading-[1] font-semibold text-black mb-[10px] lg:mb-[15px]">
                    {data.interior.title}
                  </div>
                  <div className="text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16px] 3xl:text-[18px] leading-[1.5] font-normal text-[#434343] max-w-[450px]">
                    {data.interior.description}
                  </div>
                </div>
                <div className="w-full h-auto gap-[15px] sm:gap-[20px] lg:gap-[30px] 2xl:gap-[40px] flex flex-col">
                  {data.interior.highlights?.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] leading-[1.5] font-normal text-black lg:max-w-[50%] 2xl:max-w-[40%] pl-[15px] lg:pl-[20px] relative z-0 before:content-[''] before:w-[5px] before:h-[5px] before:lg:w-[7px] before:lg:h-[7px] 2xl:before:w-[10px] 2xl:before:h-[10px] before:bg-[#1577F0] before:rounded-full before:absolute before-z-1 before:left-0 before:top-[6px] before:sm:top-[8px]">
                        {item?.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Exterior */}
        {data?.exterior?.enabled && (
          <div className="container container-sm !p-0 xl:max-w-full xl:!pr-[calc(((100%-var(--breakpoint-xl))/2)+var(--breakpoint-sm-gap-xl))] 2xl:!pr-[calc(((100%-var(--breakpoint-2xl))/2)+var(--breakpoint-sm-gap-2xl))] 3xl:!pr-[calc(((100%-var(--breakpoint-3xl))/2)+var(--breakpoint-sm-gap-3xl))]">
            <div className="w-full h-auto flex flex-wrap max-sm:flex-col-reverse">
              <div className="w-full sm:w-1/2 h-auto p-[20px_25px_30px_0px] sm:p-[40px_30px_40px_0px] lg:p-[50px_50px_50px_0px] xl:p-[60px_70px_60px_70px] 2xl:p-[70px_80px_70px_80px] 3xl:p-[80px_90px_80px_90px] bg-white flex flex-col justify-center">
                <div className="w-full h-auto mb-[15px] sm:mb-[20px] lg:mb-[30px] 2xl:mb-[40px] 3xl:mb-[50px]">
                  <div className="text-[18px] sm:text-[20px] lg:text-[22px] 2xl:text-[25px] 3xl:text-[28px] leading-[1] font-semibold text-black mb-[10px] lg:mb-[15px]">
                    {data.exterior.title}
                  </div>
                  <div className="text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16px] 3xl:text-[18px] leading-[1.5] font-normal text-[#434343] max-w-[450px]">
                    {data.exterior.description}
                  </div>
                </div>
                <div className="w-full h-auto gap-[15px] sm:gap-[20px] lg:gap-[30px] 2xl:gap-[40px] flex flex-col">
                  {data.exterior.highlights?.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] leading-[1.5] font-normal text-black lg:max-w-[50%] 2xl:max-w-[40%] pl-[15px] lg:pl-[20px] relative z-0 before:content-[''] before:w-[5px] before:h-[5px] before:lg:w-[7px] before:lg:h-[7px] 2xl:before:w-[10px] 2xl:before:h-[10px] before:bg-[#1577F0] before:rounded-full before:absolute before-z-1 before:left-0 before:top-[6px] before:sm:top-[8px]">
                        {item?.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full sm:w-1/2 h-auto overflow-hidden block">
                <ImageSlider slides={exteriorSlides} delay={3500} />
              </div>
            </div>
          </div>
        )}

        {/* Other features — alternating layout per item */}
        {otherItems.map((item, index) => {
          const isOdd = index % 2 === 0;
          const slides = toSlides(item.images);
          const containerClass = isOdd
            ? "container container-sm !p-0 xl:max-w-full xl:!pr-[calc(((100%-var(--breakpoint-xl))/2)+var(--breakpoint-sm-gap-xl))] 2xl:!pr-[calc(((100%-var(--breakpoint-2xl))/2)+var(--breakpoint-sm-gap-2xl))] 3xl:!pr-[calc(((100%-var(--breakpoint-3xl))/2)+var(--breakpoint-sm-gap-3xl))]"
            : "container container-sm !p-0 xl:max-w-full xl:!pl-[calc(((100%-var(--breakpoint-xl))/2)+var(--breakpoint-sm-gap-xl))] 2xl:!pl-[calc(((100%-var(--breakpoint-2xl))/2)+var(--breakpoint-sm-gap-2xl))] 3xl:!pl-[calc(((100%-var(--breakpoint-3xl))/2)+var(--breakpoint-sm-gap-3xl))]";

          const imageEl = (
            <div className="w-full sm:w-1/2 h-auto overflow-hidden block">
              <ImageSlider slides={slides} delay={3000 + index * 500} />
            </div>
          );

          const textEl = (
            <div className={`w-full sm:w-1/2 h-auto ${isOdd ? "p-[30px_25px_20px_0px] sm:p-[40px_0px_40px_30px] lg:p-[50px_0px_50px_50px] xl:p-[60px_0px_60px_70px] 2xl:p-[70px_0px_70px_80px] 3xl:p-[80px_0px_80px_90px]" : "p-[20px_25px_30px_0px] sm:p-[40px_30px_40px_0px] lg:p-[50px_50px_50px_0px] xl:p-[60px_70px_60px_70px] 2xl:p-[70px_80px_70px_80px] 3xl:p-[80px_90px_80px_90px] bg-white"} flex flex-col justify-center`}>
              <div className="w-full h-auto mb-[15px] sm:mb-[20px] lg:mb-[30px] 2xl:mb-[40px] 3xl:mb-[50px]">
                <div className="text-[18px] sm:text-[20px] lg:text-[22px] 2xl:text-[25px] 3xl:text-[28px] leading-[1] font-semibold text-black mb-[10px] lg:mb-[15px]">
                  {item.title}
                </div>
                <div className="text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16px] 3xl:text-[18px] leading-[1.5] font-normal text-[#434343] max-w-[450px]">
                  {item.description}
                </div>
              </div>
              <div className="w-full h-auto gap-[15px] sm:gap-[20px] lg:gap-[30px] 2xl:gap-[40px] flex flex-col">
                {item.highlights?.map((h, i) => (
                  <div key={i} className="flex items-center">
                    <div className="text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] leading-[1.5] font-normal text-black lg:max-w-[50%] 2xl:max-w-[40%] pl-[15px] lg:pl-[20px] relative z-0 before:content-[''] before:w-[5px] before:h-[5px] before:lg:w-[7px] before:lg:h-[7px] 2xl:before:w-[10px] 2xl:before:h-[10px] before:bg-[#1577F0] before:rounded-full before:absolute before-z-1 before:left-0 before:top-[6px] before:sm:top-[8px]">
                      {h?.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );

          return (
            <div key={index} className={containerClass}>
              <div className={`w-full h-auto flex flex-wrap${!isOdd ? " max-sm:flex-col-reverse" : ""}`}>
                {isOdd ? <>{imageEl}{textEl}</> : <>{textEl}{imageEl}</>}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
