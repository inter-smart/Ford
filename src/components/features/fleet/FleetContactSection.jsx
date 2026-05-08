"use client";
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
    <section className="w-full h-auto block py-[20px_40px] sm:py-[30px_65px] xl:py-[40px_80px] 2xl:py-[50px_100px] 3xl:py-[60px_120px] overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap items-center -mx-[20px] xl:-mx-[30px] 2xl:-mx-[40px] 3xl:-mx-[100px] [&>*]:px-[20px] xl:[&>*]:px-[30px] 2xl:[&>*]:px-[40px] 3xl:[&>*]:px-[100px]">
          <div className="w-full sm:w-1/3 mb-5 sm:mb-0">
            <div className="w-full">
              <Heading
                as="h2"
                size={"none"}
                className="text-[20px] lg:text-[27px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] leading-normal font-semibold text-black mb-[15px] xl:mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px]"
              >
                {data?.title}
              </Heading>
              <Text
                as="div"
                size="text1"
                className="text-[black] [&_p]:mb-[15px] xl:[&_p]:mb-[25px] 2xl:[&_p]:mb-[30px] 3xl:[&_p]:mb-[35px]"
              >
                {data?.description}
              </Text>
            </div>
          </div>

          <div className="w-full sm:w-2/3">
            <div ref={emblaRef} className="w-full max-w-full overflow-hidden">
              <div className="flex touch-pan-y touch-pinch-zoom -mx-2.5 lg:-mx-[13.5px] xl:-mx-[17px] 2xl:-mx-[20px] 3xl:-mx-[25px]">
                {data?.cards?.map((item, idx) => (
                  <div
                    key={"items" + idx}
                    className={cn(
                      "flex-[0_0_180px] sm:flex-[0_0_200px] lg:flex-[0_0_33.33%] min-w-0 select-none px-2.5 lg:px-[13.5px] xl:px-[17px] 2xl:px-[20px] 3xl:px-[25px]",
                    )}
                  >
                    <div
                      href={"/"}
                      className="w-full h-full block bg-[#f7f7f7] rounded-[8.8px] 2xl:rounded-[10.6px] 3xl:rounded-[13.3px] p-[15px_18px]  xl:p-[25px_22px] 2xl:p-[30px_26px] 3xl:p-[38px_32px]"
                    >
                      <div className="w-full mb-[10px] xl:mb-[15px] 2xl:mb-[25px] 3xl:mb-[30px]">
                        <Image
                          src={item?.icon}
                          alt={item?.title}
                          width={60}
                          height={54}
                          className="w-[35px] xl:w-[40px] 2xl:w-[47px] 3xl:w-[60px] object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <Text
                        as="div"
                        size="text1"
                        className="text-[black] [&_p]:mb-[15px] xl:[&_p]:mb-[25px] 2xl:[&_p]:mb-[30px] 3xl:[&_p]:mb-[35px] mb-[10px] xl:mb-[15px] 2xl:mb-[25px] 3xl:mb-[30px]"
                      >
                        {item?.description}
                      </Text>
                      <div>
                        <Link
                          href={item?.buttonLink}
                          className="text-[10px] xl:text-[12px] 2xl:text-[14.5px] 3xl:text-[18px] leading-[1] font-bold text-white w-max max-w-full h-[28.5] xl:h-[35.5] 2xl:h-[42.6] 3xl:h-[53.4] py-2 px-[10px] xl:px-[18px]  2xl:px-[23px] 3xl:px-[28px] rounded-full bg-[#066FEF] cursor-pointer transition-all flex items-center justify-center hover:bg-[#005fd3]"
                        >
                          {item?.buttonText}
                        </Link>
                      </div>
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
