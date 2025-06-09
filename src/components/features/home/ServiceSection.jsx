"use client";
import { useState } from "react";
import { Text } from "@/components/layout/Text";
import { Heading } from "@/components/layout/Heading";
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

export default function ServiceSection() {
  const [activeIndex, setActiveIndex] = useState(0); // Always one active

  const features = [
    {
      icon: "/images/servIcon1.svg",
      title: "Customize Your Ford",
      description: "Design your perfect vehicle with our intuitive configurator.",
      image: "/images/featureImg.jpg",
      video: "/videos/serviceVideo1.mp4",
    },
    {
      icon: "/images/servIcon1.svg",
      title: "Get a Personalized Offer",
      image: "/images/featureImg.jpg",
      description: "Receive a tailored quote based on your preferences.",
      video: "/videos/hero-1.mp4",
    },
    {
      icon: "/images/servIcon2.svg",
      title: "Experience the Drive",
      image: "/images/featureImg.jpg",
      description: "Schedule a test drive and feel the Ford difference firsthand.",
      video: "/videos/varientVideos.mp4",
    },
    {
      icon: "/images/servIcon3.svg",
      title: "In-Depth Information",
      image: "/images/featureImg.jpg",
      description: "Access detailed brochures to learn more about our vehicles.",
      video: "/videos/serviceVideo1.mp4",
    },
  ];

  return (
    <section className="w-full relative bg-[#00095B] z-0 overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:bg-white before:xl:h-[30%] before:h-[25%] before:z-[-1]">
      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            478: { slidesPerView: 2 },
            678: {
              slidesPerView: 3,
              spaceBetween: 25,
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
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="h-auto"
        >
          {features.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <SwiperSlide key={index} className="!h-auto">
                <Link
                  href="/book"
                  onMouseEnter={() => setActiveIndex(index)}
                  className={`w-full h-full flex flex-col justify-start rounded-[10px_10px_0_0] overflow-hidden p-[10px] sm:pb-[25px] pb-[45px] group cursor-pointer transition-all ${isActive ? "bg-[#0A1572]" : "max-sm:bg-[#0A1572] hover:bg-[#0A1572]"
                    }`}
                >
                  <div className="w-full rounded-[10px] 2xl:pt-[150px] sm:pt-[110px] pt-[130px] overflow-hidden mb-[15px] relative">
                    <div className="w-full aspect-ratio-[280/170]">
                      <Image
                        src={item.image}
                        width={280}
                        height={170}
                        alt={item.title}
                        className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 z-10 ${isActive ? "sm:opacity-100" : "sm:opacity-0 group-hover:opacity-100"
                          }`}
                      />

                      <video
                        autoPlay
                        preload="auto"
                        width={250}
                        height={150}
                        muted
                        loop
                        playsInline
                        className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 z-10 ${isActive ? "sm:opacity-100" : "sm:opacity-0 group-hover:opacity-100 "}`}

                      >
                        <source src={item.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>

                    <div className="2xl:w-[50px] w-[40px] 2xl:h-[50px] h-[40px] max-sm:hidden flex items-center relative">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={50}
                        height={50}
                        className={`w-[50px] h-[50px] object-contain z-20 transition-opacity duration-300 ${isActive ? "opacity-0 scale-0" : "opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-0"
                          }`}
                      />
                    </div>
                  </div>

                  <div className="max-sm:text-center">
                    <Heading
                      size="heading2"
                      as="h4"
                      className="text-white mb-[15px] line-clamp-2 max-w-[245px]"
                    >
                      {item.title}
                    </Heading>
                    <Text
                      size="text2"
                      as="p"
                      className="text-white mb-[20px] line-clamp-3 font-light"
                    >
                      {item.description}
                    </Text>
                    <div
                      className={`2xl:text-[14px] xl:text-[12px] text-[10px] font-normal text-white max-w-[135px] 2xl:h-[40px] h-[35px] flex items-center justify-center border border-white px-2 rounded-full transition cursor-pointer max-sm:m-auto ${isActive ? "opacity-100 text-[#1A73E8]" : "sm:opacity-0 group-hover:opacity-100"
                        }`}
                    >
                      More Details
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
