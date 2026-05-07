"use client";
import Image from "next/image";
import { Text } from "@/components/layout/Text";
import { Heading } from "@/components/layout/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Local images for the interior slider
const interiorSlides = [
  { src: "/images/interior.jpg", alt: "Interior View 1" },
  { src: "/images/gallery-detail-1.jpg", alt: "Interior View 2" },
  { src: "/images/gallery-detail-2.jpg", alt: "Interior View 3" },
  { src: "/images/gallery-detail-3.jpg", alt: "Interior View 4" },
];

// Local images for the exterior slider
const exteriorSlides = [
  { src: "/images/exterior.jpg", alt: "Exterior View 1" },
  { src: "/images/car1.png", alt: "Exterior View 2" },
  { src: "/images/car2.png", alt: "Exterior View 3" },
  { src: "/images/car3.png", alt: "Exterior View 4" },
];

// Section 3 slides — odd (image left / text right)
const section3Slides = [
  { src: "/images/car-detail.png",       alt: "Performance View 1" },
  { src: "/images/product-detail.jpg",   alt: "Performance View 2" },
  { src: "/images/color-option-1.png",   alt: "Performance View 3" },
  { src: "/images/blackMustag.png",      alt: "Performance View 4" },
];

// Section 4 slides — even (text left / image right)
const section4Slides = [
  { src: "/images/product-banner.jpg",  alt: "Technology View 1" },
  { src: "/images/product-1.jpg",       alt: "Technology View 2" },
  { src: "/images/product-2.jpg",       alt: "Technology View 3" },
  { src: "/images/product-3.jpg",       alt: "Technology View 4" },
];

// Section 5 slides — odd (image left / text right)
const section5Slides = [
  { src: "/images/mustang.png",         alt: "Safety View 1" },
  { src: "/images/welcome_car.png",     alt: "Safety View 2" },
  { src: "/images/product-4.jpg",       alt: "Safety View 3" },
  { src: "/images/product-5.jpg",       alt: "Safety View 4" },
];

export default function VehicleDetailSection({ data }) {
  return (
    <section className="w-full h-auto block">
      <div className="container">
        <div className="max-sm:text-center w-full h-auto py-[40px] sm:py-[35px] lg:py-[40px] 2xl:py-[50px]  ">
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
        <div className="container container-sm !p-0 xl:max-w-full xl:!pr-[calc(((100%-var(--breakpoint-xl))/2)+var(--breakpoint-sm-gap-xl))] 2xl:!pr-[calc(((100%-var(--breakpoint-2xl))/2)+var(--breakpoint-sm-gap-2xl))] 3xl:!pr-[calc(((100%-var(--breakpoint-3xl))/2)+var(--breakpoint-sm-gap-3xl))] group-[]:">
          <div className="w-full h-auto flex flex-wrap">
            <div className="w-full sm:w-1/2 h-auto overflow-hidden block">


              <Swiper
                modules={[Pagination, Autoplay]}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                speed={600}
                className="w-full h-full"
              >
                {interiorSlides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full h-full aspect-[300/250] overflow-hidden">
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        width={780}
                        height={680}
                        className="w-full h-full object-cover  transition-all duration-500 ease-in-out"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>


            </div>
            <div className="w-full sm:w-1/2 h-auto p-[30px_25px_20px_0px] sm:p-[40px_0px_40px_30px] lg:p-[50px_0px_50px_50px] xl:p-[60px_0px_60px_70px] 2xl:p-[70px_0px_70px_80px] 3xl:p-[80px_0px_80px_90px] flex flex-col justify-center">
              <div className="w-full h-auto mb-[15px] sm:mb-[20px] lg:mb-[30px] 2xl:mb-[40px] 3xl:mb-[50px]">
                <div className="text-[18px] sm:text-[20px] lg:text-[22px] 2xl:text-[25px] 3xl:text-[28px] leading-[1] font-semibold text-black mb-[10px] lg:mb-[15px]">
                  {data?.interior?.title_interior}
                </div>
                <div className="text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16px] 3xl:text-[18px] leading-[1.5] font-normal text-[#434343] max-w-[450px]">
                  {data?.interior?.description_interior}
                </div>
              </div>
              <div className="w-full h-auto gap-[15px] sm:gap-[20px] lg:gap-[30px] 2xl:gap-[40px] flex flex-col">
                {data?.interior?.interior_highlights?.map((item, index) => (
                  <div key={index} className="flex items-center">
                    {/* <div className="w-[25px] sm:w-[35px] lg:w-[40px] 2xl:w-[50px] 3xl:w-[55px] h-auto aspect-square overflow-hidden flex items-center justify-center">
                      <Image
                        src={item?.icon_interior?.url || "/images/placeholder.png"}
                        alt={item?.icon_interior?.alt || "Interior"}
                        width={780}
                        height={680}
                        className="w-full h-full object-contain"
                      />
                    </div> */}
                    {/* <div className="w-[calc(100%-25px)] sm:w-[calc(100%-35px)] lg:w-[calc(100%-40px)] 2xl:w-[calc(100%-50px)] 3xl:w-[calc(100%-55px)] pl-[15px] 2xl:pl-[20px]"> */}
                    <div className="text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] leading-[1.5] font-normal text-black lg:max-w-[50%] 2xl:max-w-[40%] pl-[15px] lg:pl-[20px] relative z-0 before:content-[''] before:w-[5px] before:h-[5px] before:lg:w-[7px] before:lg:h-[7px] 2xl:before:w-[10px] 2xl:before:h-[10px] before:bg-[#1577F0] before:rounded-full before:absolute before-z-1 before:left-0 before:top-[6px] before:sm:top-[8px]">
                      {item?.text_interior}
                    </div>
                    {/* </div> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
         <div className="w-full h-auto flex flex-wrap max-sm:flex-col-reverse">
            <div className="w-full sm:w-1/2 h-auto p-[20px_25px_30px_0px] sm:p-[40px_30px_40px_0px] lg:p-[50px_50px_50px_0px] xl:p-[60px_70px_60px_70px] 2xl:p-[70px_80px_70px_80px] 3xl:p-[80px_90px_80px_90px] bg-white flex flex-col justify-center">
              <div className="w-full h-auto mb-[15px] sm:mb-[20px] lg:mb-[30px] 2xl:mb-[40px] 3xl:mb-[50px]">
                <div className="text-[18px] sm:text-[20px] lg:text-[22px] 2xl:text-[25px] 3xl:text-[28px] leading-[1] font-semibold text-black mb-[10px] lg:mb-[15px]">
                  {data?.exterior?.title_exterior}
                </div>
                <div className="text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16px] 3xl:text-[18px] leading-[1.5] font-normal text-[#434343] max-w-[450px]">
                  {data?.exterior?.description_exterior}
                </div>
              </div>
              <div className="w-full h-auto gap-[15px] sm:gap-[20px] lg:gap-[30px] 2xl:gap-[40px] flex flex-col">
                {data?.exterior?.exterior_highlights?.map((item, index) => (
                  <div key={index} className="flex items-center">
                    {/* <div className="w-[25px] sm:w-[35px] lg:w-[40px] 2xl:w-[50px] 3xl:w-[55px] h-auto aspect-square overflow-hidden flex items-center justify-center">
                      <Image
                        src={item?.icon_exterior?.url || "/images/placeholder.png"}
                        alt={item?.icon_exterior?.alt || "Exterior"}
                        width={780}
                        height={680}
                        className="w-full h-full object-contain"
                      />
                    </div> */}
                    {/* <div className="w-[calc(100%-25px)] sm:w-[calc(100%-35px)] lg:w-[calc(100%-40px)] 2xl:w-[calc(100%-50px)] 3xl:w-[calc(100%-55px)] pl-[15px] 2xl:pl-[20px]"> */}
                    <div className="text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] leading-[1.5] font-normal text-black lg:max-w-[50%] 2xl:max-w-[40%] pl-[15px] lg:pl-[20px] relative z-0 before:content-[''] before:w-[5px] before:h-[5px] before:lg:w-[7px] before:lg:h-[7px] 2xl:before:w-[10px] 2xl:before:h-[10px] before:bg-[#1577F0] before:rounded-full before:absolute before-z-1 before:left-0 before:top-[6px] before:sm:top-[8px]">
                      {item?.text_exterior}
                    </div>
                    {/* </div> */}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full sm:w-1/2 h-auto overflow-hidden block">
              <Swiper
                modules={[Pagination, Autoplay]}
                loop={true}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                speed={600}
                className="w-full h-full"
              >
                {exteriorSlides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full h-full overflow-hidden aspect-[300/250]">
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        width={780}
                        height={680}
                        className="w-full h-full object-cover  transition-all duration-500 ease-in-out"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* ── Section 3  */}
        <div className="container container-sm !p-0 xl:max-w-full xl:!pr-[calc(((100%-var(--breakpoint-xl))/2)+var(--breakpoint-sm-gap-xl))] 2xl:!pr-[calc(((100%-var(--breakpoint-2xl))/2)+var(--breakpoint-sm-gap-2xl))] 3xl:!pr-[calc(((100%-var(--breakpoint-3xl))/2)+var(--breakpoint-sm-gap-3xl))] group">
          <div className="w-full h-auto flex flex-wrap">
            <div className="w-full sm:w-1/2 h-auto overflow-hidden block">
              <Swiper
                modules={[Pagination, Autoplay]}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                speed={600}
                className="w-full h-full"
              >
                {section3Slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full h-full aspect-[300/250] overflow-hidden">
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        width={780}
                        height={680}
                        className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="w-full sm:w-1/2 h-auto p-[30px_25px_20px_0px] sm:p-[40px_0px_40px_30px] lg:p-[50px_0px_50px_50px] xl:p-[60px_0px_60px_70px] 2xl:p-[70px_0px_70px_80px] 3xl:p-[80px_0px_80px_90px] flex flex-col justify-center">
              <div className="w-full h-auto mb-[15px] sm:mb-[20px] lg:mb-[30px] 2xl:mb-[40px] 3xl:mb-[50px]">
                <div className="text-[18px] sm:text-[20px] lg:text-[22px] 2xl:text-[25px] 3xl:text-[28px] leading-[1] font-semibold text-black mb-[10px] lg:mb-[15px]">
                  {data?.performance?.title_performance || "Performance"}
                </div>
                <div className="text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16px] 3xl:text-[18px] leading-[1.5] font-normal text-[#434343] max-w-[450px]">
                  {data?.performance?.description_performance || "Experience unmatched power and precision engineered for the road ahead."}
                </div>
              </div>
              <div className="w-full h-auto gap-[15px] sm:gap-[20px] lg:gap-[30px] 2xl:gap-[40px] flex flex-col">
                {(data?.performance?.performance_highlights || [
                  { text: "5.0L V8 Engine" },
                  { text: "480 Horsepower" },
                  { text: "0–60 mph in 4.2 seconds" },
                ])?.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] leading-[1.5] font-normal text-black lg:max-w-[50%] 2xl:max-w-[40%] pl-[15px] lg:pl-[20px] relative z-0 before:content-[''] before:w-[5px] before:h-[5px] before:lg:w-[7px] before:lg:h-[7px] 2xl:before:w-[10px] 2xl:before:h-[10px] before:bg-[#1577F0] before:rounded-full before:absolute before-z-1 before:left-0 before:top-[6px] before:sm:top-[8px]">
                      {item?.text_performance || item?.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Section 4  */}
        <div className="container container-sm !p-0 xl:max-w-full xl:!pl-[calc(((100%-var(--breakpoint-xl))/2)+var(--breakpoint-sm-gap-xl))] 2xl:!pl-[calc(((100%-var(--breakpoint-2xl))/2)+var(--breakpoint-sm-gap-2xl))] 3xl:!pl-[calc(((100%-var(--breakpoint-3xl))/2)+var(--breakpoint-sm-gap-3xl))] group">
          <div className="w-full h-auto flex flex-wrap max-sm:flex-col-reverse">
            <div className="w-full sm:w-1/2 h-auto p-[20px_25px_30px_0px] sm:p-[40px_30px_40px_0px] lg:p-[50px_50px_50px_0px] xl:p-[60px_70px_60px_70px] 2xl:p-[70px_80px_70px_80px] 3xl:p-[80px_90px_80px_90px] bg-white flex flex-col justify-center">
              <div className="w-full h-auto mb-[15px] sm:mb-[20px] lg:mb-[30px] 2xl:mb-[40px] 3xl:mb-[50px]">
                <div className="text-[18px] sm:text-[20px] lg:text-[22px] 2xl:text-[25px] 3xl:text-[28px] leading-[1] font-semibold text-black mb-[10px] lg:mb-[15px]">
                  {data?.technology?.title_technology || "Technology"}
                </div>
                <div className="text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16px] 3xl:text-[18px] leading-[1.5] font-normal text-[#434343] max-w-[450px]">
                  {data?.technology?.description_technology || "Cutting-edge tech designed to keep you connected, informed, and in control."}
                </div>
              </div>
              <div className="w-full h-auto gap-[15px] sm:gap-[20px] lg:gap-[30px] 2xl:gap-[40px] flex flex-col">
                {(data?.technology?.technology_highlights || [
                  { text: "12-inch SYNC 4 Touchscreen" },
                  { text: "Wireless Apple CarPlay & Android Auto" },
                  { text: "B&O Premium Audio System" },
                ])?.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] leading-[1.5] font-normal text-black lg:max-w-[50%] 2xl:max-w-[40%] pl-[15px] lg:pl-[20px] relative z-0 before:content-[''] before:w-[5px] before:h-[5px] before:lg:w-[7px] before:lg:h-[7px] 2xl:before:w-[10px] 2xl:before:h-[10px] before:bg-[#1577F0] before:rounded-full before:absolute before-z-1 before:left-0 before:top-[6px] before:sm:top-[8px]">
                      {item?.text_technology || item?.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full sm:w-1/2 h-auto overflow-hidden block">
              <Swiper
                modules={[Pagination, Autoplay]}
                loop={true}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                speed={600}
                className="w-full h-full"
              >
                {section4Slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full h-full overflow-hidden aspect-[300/250]">
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        width={780}
                        height={680}
                        className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* ── Section 5  */}
        <div className="container container-sm !p-0 xl:max-w-full xl:!pr-[calc(((100%-var(--breakpoint-xl))/2)+var(--breakpoint-sm-gap-xl))] 2xl:!pr-[calc(((100%-var(--breakpoint-2xl))/2)+var(--breakpoint-sm-gap-2xl))] 3xl:!pr-[calc(((100%-var(--breakpoint-3xl))/2)+var(--breakpoint-sm-gap-3xl))] group">
          <div className="w-full h-auto flex flex-wrap">
            <div className="w-full sm:w-1/2 h-auto overflow-hidden block">
              <Swiper
                modules={[Pagination, Autoplay]}
                loop={true}
                autoplay={{ delay: 4500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                speed={600}
                className="w-full h-full"
              >
                {section5Slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className="w-full h-full aspect-[300/250] overflow-hidden">
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        width={780}
                        height={680}
                        className="w-full h-full object-cover transition-all duration-500 ease-in-out"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="w-full sm:w-1/2 h-auto p-[30px_25px_20px_0px] sm:p-[40px_0px_40px_30px] lg:p-[50px_0px_50px_50px] xl:p-[60px_0px_60px_70px] 2xl:p-[70px_0px_70px_80px] 3xl:p-[80px_0px_80px_90px] flex flex-col justify-center">
              <div className="w-full h-auto mb-[15px] sm:mb-[20px] lg:mb-[30px] 2xl:mb-[40px] 3xl:mb-[50px]">
                <div className="text-[18px] sm:text-[20px] lg:text-[22px] 2xl:text-[25px] 3xl:text-[28px] leading-[1] font-semibold text-black mb-[10px] lg:mb-[15px]">
                  {data?.safety?.title_safety || "Safety"}
                </div>
                <div className="text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16px] 3xl:text-[18px] leading-[1.5] font-normal text-[#434343] max-w-[450px]">
                  {data?.safety?.description_safety || "Advanced driver-assistance systems that protect you and everyone around you."}
                </div>
              </div>
              <div className="w-full h-auto gap-[15px] sm:gap-[20px] lg:gap-[30px] 2xl:gap-[40px] flex flex-col">
                {(data?.safety?.safety_highlights || [
                  { text: "Pre-Collision Assist" },
                  { text: "Blind-Spot Information System" },
                  { text: "Lane-Keeping System" },
                ])?.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] leading-[1.5] font-normal text-black lg:max-w-[50%] 2xl:max-w-[40%] pl-[15px] lg:pl-[20px] relative z-0 before:content-[''] before:w-[5px] before:h-[5px] before:lg:w-[7px] before:lg:h-[7px] 2xl:before:w-[10px] 2xl:before:h-[10px] before:bg-[#1577F0] before:rounded-full before:absolute before-z-1 before:left-0 before:top-[6px] before:sm:top-[8px]">
                      {item?.text_safety || item?.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
