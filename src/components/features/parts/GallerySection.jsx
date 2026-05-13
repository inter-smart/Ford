"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Heading } from "@/components/layout/Heading";
import "swiper/css";
import "swiper/css/navigation";

export default function GallerySection({ data }) {

    const groupedSlides = data?.slides?.flatMap((slide) => {
        const groups = [];

        for (let i = 0; i < slide.images.length; i += 4) {
            groups.push(slide.images.slice(i, i + 4));
        }

        return groups;
    });
    return (
        <section className='relative w-full h-auto block py-[20px] xl:py-[30px] 2xl:py-[40px] 3xl:py-[50px] '>
            <div className="container">
                <Heading
                    as="h2"
                    size="heading1"
                    className="text-black mb-[15px] xl:mb-[32px] 2xl:mb-[40px] 3xl:mb-[50px]"
                >
                    {data?.title}
                </Heading>
                <div className="h-[260px] 2xs:h-[300px] xs:h-[400px] sm:h-[440px] md:h-[520px] lg:h-[700px] xl:!h-[875px] 2xl:!h-[1050px] 3xl:!h-[1310px]">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        navigation
                        modules={[Navigation]}
                        className="gallery-slider !h-full
                        [&_.swiper-button-prev]:w-[30px]
                        [&_.swiper-button-prev]:h-[30px]
                        [&_.swiper-button-prev]:rounded-full
                        [&_.swiper-button-prev]:bg-white
                        [&_.swiper-button-prev]:text-black
                        [&_.swiper-button-prev]:shadow-lg
                        [&_.swiper-button-prev]:left-[-15px]
                        [&_.swiper-button-prev]:transition-all
                        [&_.swiper-button-prev:hover]:bg-[#1A73E8]
                        [&_.swiper-button-prev:hover]:text-white
                         [&_.swiper-button-prev_svg]:max-w-[20%]
                        [&_.swiper-button-next_svg]:max-w-[20%]

                        [&_.swiper-button-next]:w-[30px]
                        [&_.swiper-button-next]:h-[30px]
                        [&_.swiper-button-next]:rounded-full
                        [&_.swiper-button-next]:bg-white
                        [&_.swiper-button-next]:text-black
                        [&_.swiper-button-next]:shadow-lg
                        [&_.swiper-button-next]:right-[-15px]
                        [&_.swiper-button-next]:transition-all
                        [&_.swiper-button-next:hover]:bg-[#1A73E8]
                        [&_.swiper-button-next:hover]:text-white

                        [&_.swiper-button-prev:after]:text-[14px]
                        [&_.swiper-button-next:after]:text-[14px]

                        xl:[&_.swiper-button-prev]:w-[55px]
                        xl:[&_.swiper-button-prev]:h-[55px]
                        xl:[&_.swiper-button-next]:w-[55px]
                        xl:[&_.swiper-button-next]:h-[55px]

                        xl:[&_.swiper-button-prev:after]:text-[18px]
                        xl:[&_.swiper-button-next:after]:text-[18px]"
                    >
                        {groupedSlides?.map((images, slideIndex) => (
                            <SwiperSlide key={slideIndex}>

                                <div className="relative  h-full flex flex-wrap -my-[4px] sm:-my-[7px] lg:-my-[10px] 2xl:-my-[15px] 3xl:-my-[20px] -mx-[4px] sm:-mx-[7px] lg:-mx-[10px] 2xl:-mx-[15px] 3xl:-mx-[20px] [&>*]:p-[4px]  [&>*]:sm:p-[7px] [&>*]:lg:p-[10px] [&>*]:2xl:p-[15px] [&>*]:3xl:p-[20px]">

                                    {/* Large Top Image */}
                                    <div className="w-full h-1/2">
                                        <div className="w-full h-full rounded-[12px] overflow-hidden aspect-[1745/645]">
                                            <Image
                                                src={images?.[0]?.url}
                                                alt={images?.[0]?.alt}
                                                width={1200}
                                                height={600}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Bottom 3 Images */}
                                    {images?.slice(1, 4)?.map((image, index) => (
                                        <div className="w-1/3  grow-1 h-1/2">
                                            <div
                                                key={index}
                                                className="w-full h-full rounded-[12px] overflow-hidden aspect-[555/645]"
                                            >
                                                <Image
                                                    src={image?.url}
                                                    alt={image?.alt}
                                                    width={400}
                                                    height={500}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    ))}

                                </div>

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
