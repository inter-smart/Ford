"use client";
import Link from "next/link";
import Image from "next/image";
import { Text } from "@/components/layout/Text";
import { Heading } from "@/components/layout/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { is } from "zod/v4/locales";

const instagram_feed_section = {
  title: "Instagram Feed",
  description: "Lorem ipsum dolor sit amet consectetur Zenonem Quae",
  instaItems: [
    {
      media: {
        type: "image",
        path: "/images/instagram-feed.jpg",
        alt: "insta-1",
      },
      link: {
        href: "/",
        isExternal: true,
      },
    },
    {
      media: {
        type: "image",
        path: "/images/instagram-feed.jpg",
        alt: "insta-1",
      },
      link: {
        href: "/",
        isExternal: true,
      },
    },
    {
      media: {
        type: "image",
        path: "/images/instagram-feed.jpg",
        alt: "insta-1",
      },
      link: {
        href: "/",
        isExternal: true,
      },
    },
    {
      media: {
        type: "image",
        path: "/images/instagram-feed.jpg",
        alt: "insta-1",
      },
      link: {
        href: "/",
        isExternal: true,
      },
    },
    {
      media: {
        type: "image",
        path: "/images/instagram-feed.jpg",
        alt: "insta-1",
      },
      link: {
        href: "/",
        isExternal: true,
      },
    },
    {
      media: {
        type: "image",
        path: "/images/instagram-feed.jpg",
        alt: "insta-1",
      },
      link: {
        href: "/",
        isExternal: true,
      },
    },
  ],
};

export default function InstagramFeedSection({
  data = instagram_feed_section,
}) {
  return (
    <section className="w-full h-auto block py-[40px] sm:py-[50px] lg:py-[70px] 2xl:py-[90px]">
      <div className="container">
        <div className="w-full h-auto mb-[20px] sm:mb-[30px] 2xl:mb-[40px] flex flex-wrap items-center">
          <div className="w-full sm:w-1/2 max-sm:mb-[20px]">
            <Heading
              size="heading1"
              as="h2"
              className="font-semibold text-black mb-[10px]"
            >
              {data?.title}
            </Heading>
            <Text size="text2" as="p" className="text-[#00142E]">
              {data?.description}
            </Text>
          </div>
          <div className="w-full sm:w-1/2 flex sm:justify-end">
            <Link
              href="/"
              className="text-[14px] 2xl:text-[16px] leading-[1.3] font-bold text-[#1577F0] gap-[5px] flex items-center hover:opacity-80 transition-all"
            >
              View All
              <span className="w-[7px] 2xl:w-[10px] h-auto aspect-square flex items-center justify-center">
                <svg
                  width="6"
                  height="11"
                  viewBox="0 0 6 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.40512 5.43291L0 0.758947L0.806432 0L5.9725 5.48135L0.782193 10.3474L0.0242382 9.54008L4.40512 5.43291Z"
                    fill="#1577F0"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
        <div>
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            autoplay={{ delay: 2500 }}
            speed={800}
            loop={true}
            modules={[Autoplay]}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              468: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              1536: {
                slidesPerView: 5,
                spaceBetween: 30,
              },
            }}
            className="instagramSider"
          >
            {data?.instaItems?.map((item, index) => (
              <SwiperSlide key={index}>
                <Link
                  href={item?.link?.href}
                  target={item?.isExternal ? "_blank" : "_self"}
                  className="w-full h-auto aspect-[240/420] rounded-[8px] 2xl:rounded-[10px] overflow-hidden relative z-0"
                >
                  <Image
                    src={item?.media?.path}
                    alt={item?.media?.alt}
                    width={240}
                    height={420}
                    className="w-full h-full object-cover"
                  />
                  <div className="w-[15px] sm:w-[20px] 2xl:w-[25px] h-auto aspect-square m-[10px] sm:m-[15px] absolute bottom-0 right-0">
                    <Image
                      src="/images/instagram_icon.svg"
                      alt="instagram_icon"
                      width={25}
                      height={25}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
