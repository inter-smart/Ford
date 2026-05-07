"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";

export default function FleetContactSection({ data }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 5000, stopOnInteraction: true, pauseOnHover: true })],
  );

  return (
    <section className="w-full h-auto block py-5 sm:py-[30px] xl:py-[40px] 2xl:py-[50px] 3xl:py-[60px]">
      <div className="container">
        <div className="flex flex-wrap items-center -mx-[20px] xl:-mx-[30px] 2xl:-mx-[40px] 3xl:-mx-[100px] [&>*]:px-[20px] xl:[&>*]:px-[30px] 2xl:[&>*]:px-[40px] 3xl:[&>*]:px-[100px]">
          <div className="w-full sm:w-1/3">
            <div className="w-full">
              <Heading
                as="h2"
                size={"none"}
                className="text-[20px] lg:text-[27px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] leading-normal font-semibold text-black mb-[15px] xl:mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px]"
              >
                Contact us
              </Heading>
              <Text
                as="div"
                size="text1"
                className="text-[black] [&_p]:mb-[15px] xl:[&_p]:mb-[25px] 2xl:[&_p]:mb-[30px] 3xl:[&_p]:mb-[35px]"
              >
                <p>
                  Enjoy world-class service, expert technicians, genuine Ford
                  parts, and roadside assistance designed to keep your Mustang
                  performing at its best.
                </p>
              </Text>
            </div>
          </div>

          <div className="w-full sm:w-2/3">
            <div ref={emblaRef} className="w-full max-w-full overflow-hidden">
              <div className="flex touch-pan-y touch-pinch-zoom -mx-2.5 lg:-mx-[13.5px] xl:-mx-[17px] 2xl:-mx-[20px] 3xl:-mx-[25px]">
                {data?.cards?.map((item) => (
                  <div
                    key={item?.id}
                    className={cn(
                      "flex-[0_0_198px] sm:flex-[0_0_215px] lg:flex-[0_0_268px] 2xl:flex-[0_0_320px] 3xl:flex-[0_0_405px] min-w-0 select-none px-2.5 lg:px-[13.5px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[25px]",
                    )}
                  >
                    <Link href={"/"} className="w-full block cursor-pointer">
                      <div className="w-full mb-[10px] xl:mb-[15px] 2xl:mb-[20px] 3xl:mb-[25px]">
                        <Image
                          src={item?.image}
                          alt={item?.name}
                          width={60}
                          height={54}
                          className="w-[35px] xl:w-[40px] 2xl:w-[47px] 3xl:w-[60px] object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="text-black font-bold text-lg md:text-xl">
                        {item.name}
                      </div>
                      <div className="text-[#008dd2] text-sm md:text-base font-semibold flex items-center gap-1 group-hover:underline">
                        Learn More
                      </div>
                    </Link>
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
