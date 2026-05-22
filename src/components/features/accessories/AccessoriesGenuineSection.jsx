"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function AccessoriesGenuineSection({ data }) {
  const items = data?.items?.map((item) => ({
    iconPath: item.icon?.url,
    iconAlt:  item.icon?.alt || item.title || "",
    title:    item.title,
  })) ?? [];

  const [emblaRef] = useEmblaCarousel(
    {
      loop: false,
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 5000, stopOnInteraction: true, pauseOnHover: true })],
  );

  return (
    <section className="w-full h-auto block py-[20px_30px] sm:py-[30px_60px] xl:py-[37px_80px] 2xl:py-[45px_95px] 3xl:py-[55px_120px]">
      <div className="container">
        <Heading
          as="h2"
          size={"none"}
          className="text-[20px] lg:text-[27px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] leading-normal font-semibold text-black mb-[15px] xl:mb-[20px] 2xl:mb-[30px] 3xl:mb-[40px]"
        >
          {data?.title}
        </Heading>
        <div ref={emblaRef} className="w-full max-w-full overflow-hidden">
          <div className="flex touch-pan-y touch-pinch-zoom -mx-[4px] lg:-mx-[6px] xl:-mx-[9px] 2xl:-mx-[11px] 3xl:-mx-[14px]">
            {items.map((item, idx) => (
              <div
                key={"items" + idx}
                className={cn(
                  "flex-[0_0_180px] sm:flex-[0_0_200px] lg:flex-[0_0_25%] min-w-0 select-none px-[4px] lg:px-[6px] xl:px-[9px] 2xl:px-[11px] 3xl:px-[14px]",
                )}
              >
                <div className="w-full h-full block bg-[#f7f7f7] rounded-[8.8px] 2xl:rounded-[10.6px] 3xl:rounded-[13.3px] p-[24px_18px] xl:p-[38px_22px] 2xl:p-[46px_26px] 3xl:p-[50px_33px]">
                  <div className="w-full mb-[10px] xl:mb-[15px] 2xl:mb-[25px] 3xl:mb-[30px]">
                    <Image
                      src={item.iconPath}
                      alt={item.iconAlt}
                      width={60}
                      height={54}
                      className="w-[40px] xl:w-[54px] 2xl:w-[64px] 3xl:w-[80px] object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <Text
                    as="div"
                    size="text1"
                    className="text-black xl:max-w-10/12"
                  >
                    {item.title}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
