"use client";
import Link from "next/link";
import Image from "next/image";
import { Text } from "@/components/layout/Text";
import { Heading } from "@/components/layout/Heading";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

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
  locale = "en",
}) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: false,
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
      direction: locale === "ar" ? "rtl" : "ltr",
    },
    [Autoplay({ delay: 5000, stopOnInteraction: true, pauseOnHover: true })],
  );

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
              className="text-[12.44px] 2xl:text-[15px] 3xl:text-[18px] leading-none font-bold text-[#1577F0] gap-[5px] flex items-center justify-start group/arrow"
            >View All
              <span className="w-[12px] 2xl:w-[13px] 3xl:w-[14px] h-auto aspect-[8/5] flex items-center justify-center group-hover/arrow:translate-x-[3px] transition duration-500 ease-in-out">
                <Image
                  src="/images/product_learmore_arrow.svg"
                  alt="arrow-right"
                  width={10}
                  height={10}
                  className="w-full h-full object-contain rtl:-scale-x-100"
                />
              </span>
            </Link>
          </div>
        </div>
        <div ref={emblaRef} className="w-full max-w-full overflow-hidden">
          <div className="flex touch-pan-y touch-pinch-zoom -mx-[6px] sm:-mx-[10px] lg:-mx-[12px] 2xl:-mx-[15px] 3xl:-mx-[19px]">
            {data?.instaItems?.map((item, index) => (
              <div
                key={"instaItems" + index}
                className="flex-[0_0_220px] sm:flex-[0_0_268px] lg:flex-[0_0_20%] min-w-0 select-none px-[6px] sm:px-[10px] lg:px-[12px] 2xl:px-[15px] 3xl:px-[19px]"
              >
                <Link
                  href={item?.link?.href}
                  target={item?.isExternal ? "_blank" : "_self"}
                  className="w-full h-auto block aspect-[240/420] rounded-[8.8px] 2xl:rounded-[10.6px] 3xl:rounded-[13.3px] overflow-hidden relative z-0"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
