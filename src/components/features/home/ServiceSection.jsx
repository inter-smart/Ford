
"use client";
import { Text } from "@/components/layout/Text";
import { Heading } from "@/components/layout/Heading";
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function ServiceSection() {
    const features = [
        {
            icon: "/images/servIcon1.svg",
            type: "image",
            title: "Customize Your Ford",
            description: "Design your perfect vehicle with our intuitive configuratorconfigurator.",
            image: "/images/featureImg.jpg",
            button: "More Details",
        },
        {
            icon: "/images/servIcon1.svg",
            title: "Get a Personalized Offer",
            image: "/images/featureImg.jpg",
            description: "Receive a tailored quote based on your preferences.",
        },
        {
            icon: "/images/servIcon2.svg",
            title: "Experience the Drive",
            image: "/images/featureImg.jpg",
            description: "Schedule a test drive and feel the Ford difference first hand.",
        },
        {
            icon: "/images/servIcon3.svg",
            title: "In-Depth Information",
            image: "/images/featureImg.jpg",
            description: "Access detailed brochures to learn more about our vehicles.",
        },
    ];
    return (
        <section className="w-full relative bg-[#00095B]  z-0 overflow-hidden before:content-['']
         before:absolute before:top-0 before:left-0 before:w-full before:bg-white before:xl:h-[30%] before:h-[25%] before:z-[-1]">
            <div className="container">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    breakpoints={{
                        478: { slidesPerView: 2 },
                        678: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="h-auto"
                >
                    {features.map((item, index) => (
                        <SwiperSlide key={index} className="!h-auto">
                            <Link href="/book" className="w-full h-full flex flex-col justify-start rounded-[10px_10px_0_0] overflow-hidden p-[10px] pb-[25px] max-sm:bg-[#0A1572]   group hover:bg-[#0A1572] cursor-pointer">
                                <div className="w-full rounded-[10px] 2xl:pt-[150px] md:pt-[90px] sm:pt-[110px] pt-[130px] overflow-hidden mb-[15px] relative">
                                    {/* Image (shown on hover) */}
                                    <div className="w-full aspect-ratio-[280/170]">
                                        <Image
                                            src={item.image}
                                            width={280}
                                            height={170}
                                            alt={item.title}
                                            className="w-full h-full object-cover absolute top-0 left-0 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 z-10"
                                        />
                                    </div>

                                    {/* Icon (shown by default, hidden on hover) */}
                                    <div className="2xl:w-[50px] w-[40px] 2xl:h-[50px] h-[40px] max-sm:hidden flex items-center relative">
                                        <Image
                                            src={item.icon}
                                            alt={item.title}
                                            width={50}
                                            height={50}
                                            className="w-[50px] h-[50px] object-contain z-20 opacity-100 max-sm:bg-[#ffffff0d] max-sm:p-[5px] group-hover:opacity-0 group-hover:scale-0 transition-opacity duration-300"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <Heading
                                        size="heading2"
                                        as="h4"
                                        className="text-white mb-[10px] line-clamp-2"
                                    >
                                        {item.title}
                                    </Heading>
                                    <Text
                                        size="text2"
                                        as="p"
                                        className="text-white mb-[15px] line-clamp-3"
                                    >
                                        {item.description}
                                    </Text>
                                    <div
                                        className="2xl:text-[14px] xl:text-[12px] text-[10px] font-normal text-white max-w-[135px] 2xl:h-[40px] h-[35px] flex 
                                        items-center justify-center bg-transparent border
                                        border-white px-2 rounded-full sm:opacity-0 sm:group-hover:opacity-100 hover:bg-white hover:text-[#1A73E8] transition cursor-pointer"
                                    >
                                        More Details
                                    </div>
                                </div>
                            </Link>

                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section >

    );
}
