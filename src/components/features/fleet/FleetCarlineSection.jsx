"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";

export default function FleetCarlineSection({ categories, data }) {
  const [activeFilter, setActiveFilter] = useState(categories?.[0]?.slug ?? "");

  const filteredVehicles =
    data?.filter((item) => item.category === activeFilter) || [];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 5000, stopOnInteraction: true, pauseOnHover: true })],
  );

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
      emblaApi.scrollTo(0, true);
    }
  }, [emblaApi, filteredVehicles]);

  return (
    <section className="w-full h-auto block py-5 sm:py-[30px] xl:py-[40px] 2xl:py-[50px] 3xl:py-[60px]">
      <div className="container">
        <div className="flex flex-wrap sm:items-end gap-4 sm:gap-x-6 xl:gap-x-12 2xl:gap-x-17.5 3xl:gap-x-21.5 mb-8 xl:mb-10 2xl:mb-11 3xl:mb-15">
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="w-auto lg:w-auto mb-4 md:mb-0">
              <Heading
                as="h2"
                size={"none"}
                className="text-[24px] lg:text-[27px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] leading-normal font-semibold text-black"
              >
                Fleet Carline
              </Heading>
            </div>
            <FilterItems
              className="flex"
              items={categories}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          </div>
        </div>
      </div>

      <div
        className={cn(
          "w-full sm:max-w-[calc(var(--breakpoint-sm)/2+50%)] md:max-w-[calc(var(--breakpoint-md)/2+50%)] lg:max-w-[calc(var(--breakpoint-lg)/2+50%)] xl:max-w-[calc(var(--breakpoint-xl)/2+50%)] 2xl:max-w-[calc(var(--breakpoint-2xl)/2+50%)] 3xl:max-w-[calc(var(--breakpoint-3xl)/2+50%)]",
          "pl-4 ml-auto",
        )}
      >
        {filteredVehicles.length > 0 ? (
          <div ref={emblaRef} className="w-full max-w-full overflow-hidden">
            <div className="flex touch-pan-y touch-pinch-zoom -mx-2 lg:-mx-3">
              {filteredVehicles.map((item) => (
                <div
                  key={item?.id}
                  className={cn(
                    "flex-[0_0_280px] sm:flex-[0_0_340px] lg:flex-[0_0_420px] 2xl:flex-[0_0_480px] 3xl:flex-[0_0_540px] min-w-0 select-none px-2 lg:px-3 group",
                  )}
                >
                  <Link href={item.link || "#"} className="block w-full">
                    <div className="relative w-full aspect-[4/2.5] rounded-xl overflow-hidden mb-4 bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                    </div>
                    <div className="flex items-center justify-between px-1">
                      <span className="text-black font-bold text-lg md:text-xl">
                        {item.name}
                      </span>
                      <span className="text-[#008dd2] text-sm md:text-base font-semibold flex items-center gap-1 group-hover:underline">
                        Learn More <span className="text-xs">&gt;</span>
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center py-20 px-4">
            <Text as="p" size="p1" className="text-black/50">
              No vehicles available in this category.
            </Text>
          </div>
        )}
      </div>
    </section>
  );
}

function FilterItems({ items, activeFilter, onFilterChange, className }) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2 sm:gap-4 md:gap-6",
        className,
      )}
    >
      {items?.map((item) => {
        const isActive = activeFilter === item?.slug;
        return (
          <button
            key={item?.id}
            type="button"
            onClick={() => onFilterChange(item?.slug)}
            className={cn(
              "text-sm md:text-base transition-all duration-300",
              isActive
                ? "text-black font-semibold border border-[#008dd2] rounded-full px-5 py-2"
                : "text-black hover:text-[#008dd2] px-4 py-2",
            )}
          >
            {item?.name}
          </button>
        );
      })}
    </div>
  );
}
