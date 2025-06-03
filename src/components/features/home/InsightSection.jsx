"use client";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const newsItems = [
    {
        img: "/images/news1.jpg",
        hoverimg: "/images/news1Hover.jpg",
        date: "29.01.2025",
        title: "Next-Gen Ranger Raptor Rewrites the Rulebook for Off-Road Performance",
    },
    {
        img: "/images/news2.jpg",
        hoverimg: "/images/news2Hover.jpg",
        date: "29.01.2025",
        title: "Ford Performance to Develop Mustang GT3 Race Car to Compete Globally",
    },
    {
        img: "/images/news3.jpg",
        hoverimg: "/images/news3Hover.jpg",
        date: "29.01.2025",
        title: "Ford Taurus, F-150 and Expedition Drive Growth for Ford",
    },
];

export default function welcome() {
    return (
        <section className="w-full relative bg-[#F0F0F0] 2xl:py-[20px_100px] xl:py-[20px_80px] py-[10px_50px] z-0 overflow-hidden ">
            <div className="container">
                <div className="flex flex-wrap justify-between items-center 3xl:mb-[40px] 2xl:mb-[30px] xl:mb-[25px] mb-[15px] gap-2">
                    <div className="w-full sm:w-[calc(100%-110px)] ">
                        <Heading
                            size="heading1"
                            as="h2"
                            className="text-black mb-[10px]"
                        >
                            Insights
                        </Heading>
                        <Text
                            size="text2"
                            as="p"
                            className="text-[#434343]"
                        >
                            Lorem ipsum dolor sit amet consectetur Zenonem Quae
                        </Text>
                    </div>
                    <div className="w-full sm:w-[110px]">
                        <Link href="/book" className="2xl:text-[12px] xl:text-[11px] text-[10px] font-normal  text-[#1A73E8] sm:max-w-full max-w-[120px] 2xl:h-[40px] h-[35px] flex items-center justify-center bg-transparent border border-[#1A73E8] px-6 rounded-full hover:bg-[#1A73E8] hover:text-white transition cursor-pointer">
                            View All
                        </Link>
                    </div>
                </div>
            </div>
            <div className="p-[20px_25px] xl:p-[35px_45px] 2xl:p-[45px_65px] 3xl:p-[50px_70px] ltr:lg:pl-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] ltr:xl:pl-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))]
             ltr:2xl:pl-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] ltr:3xl:pl-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))]
              rtl:lg:pr-[calc(((100vw-var(--breakpoint-lg))/2)+var(--breakpoint-gap-lg))] rtl:xl:pr-[calc(((100vw-var(--breakpoint-xl))/2)+var(--breakpoint-gap-xl))]
               rtl:2xl:pr-[calc(((100vw-var(--breakpoint-2xl))/2)+var(--breakpoint-gap-2xl))] rtl:3xl:pr-[calc(((100vw-var(--breakpoint-3xl))/2)+var(--breakpoint-gap-3xl))] ">
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1.5}
                    breakpoints={{
                        420: {
                            slidesPerView: 2.5,
                            spaceBetween: 20, // corrected syntax
                        },
                        578: {
                            slidesPerView: 2.5,
                            spaceBetween: 20, // corrected syntax
                        },
                        1024: {
                            slidesPerView: 2.5,
                            spaceBetween: 30, // corrected syntax
                        },
                    }}
                    navigation
                    modules={[Navigation]}
                    className="w-full"
                >
                {newsItems.map((item, id) => (
                    <SwiperSlide key={id} className="w-full h-full">
                        <div className="w-full h-full group">
                            <div className="overflow-hidden rounded-md aspect-square mb-[15px] relative cursor-pointer">
                                {/* Default Image */}
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={490}
                                    height={490}
                                    className="w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-0"
                                />

                                {/* Hover Image */}
                                <Image
                                    src={item.hoverimg}
                                    alt={item.title}
                                    width={490}
                                    height={490}
                                    className="w-full h-auto object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                />
                            </div>

                            <div className="w-full p-0">
                                <div className=" xl:text-[14px] lg:text-[13px] text-[12px]  text-gray-500 mb-2">{item.date}</div>
                                <Heading
                                    size="heading6"
                                    as="h3"
                                    className="text-black mb-[15px] line-clamp-2 sm:max-w-[90%]"
                                >
                                    {item.title}
                                </Heading>
                                <Link
                                    href="/book"
                                    className="2xl:text-[12px] xl:text-[11px] text-[10px] font-normal 
                                        text-[#1A73E8] max-w-[120px] 2xl:h-[40px] h-[35px] flex items-center justify-center 
                                        bg-transparent border border-[#1A73E8] px-6 rounded-full 
                                        hover:bg-[#1A73E8] hover:text-white transition cursor-pointer"
                                >
                                    View All
                                </Link>
                            </div>
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        </section >

    );
}
