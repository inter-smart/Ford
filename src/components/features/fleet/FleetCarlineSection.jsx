"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";

const toSlug = (name) => name?.toLowerCase().replace(/\s+/g, "-") ?? "";

export default function FleetCarlineSection({ data }) {
  const categories = data?.car_types?.map((ct) => ({
    id: ct.term_id,
    name: ct.term_name,
    slug: toSlug(ct.term_name),
  })) ?? [];

  const vehicles = data?.car_types?.flatMap((ct) =>
    ct.cars.map((car) => ({
      id: car.post_id,
      name: car.title,
      image: car.image || "/images/placeholder.png",
      category: toSlug(ct.term_name),
      link: `/products/${car.slug}`,
    }))
  ) ?? [];

  const [activeFilter, setActiveFilter] = useState(categories?.[0]?.slug ?? "");

  const filteredVehicles = vehicles.filter((item) => item.category === activeFilter);

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
                {data?.title}
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

      <div className="container">
        {filteredVehicles.length > 0 ? (
          <div ref={emblaRef} className="w-full max-w-full overflow-hidden">
            <div className="flex touch-pan-y touch-pinch-zoom -mx-2 lg:-mx-3">
              {filteredVehicles.map((item) => (
                <div
                  key={item?.id}
                  className={cn(
                    "flex-[0_0_220px] sm:flex-[0_0_268px] lg:flex-[0_0_33.333%] min-w-0 select-none px-2 lg:px-3 group",
                  )}
                >
                  <Link href={item.link || "#"} className="block w-full">
                    <div className="relative w-full aspect-[4/2.5] rounded-xl overflow-hidden mb-4 bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        unoptimized
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex items-center justify-between px-1">
                      <Text
                        as="div"
                        size="text1"
                        className="font-semibold text-black"
                        animate={false}
                      >
                        {item?.name}
                      </Text>
                      <div className="text-[10px] xl:text-[11.4px] 2xl:text-[13.9px] 3xl:text-[13.6px] leading-none font-bold text-[#1577F0] flex items-center gap-1 hover:text-[#0061d8]">
                        Learn More
                        <Image
                          src="/images/fleet-icon.svg"
                          alt="fleet-icon"
                          width={10}
                          height={6}
                          className="w-[4px] 2xl:w-[5px] 3xl:w-[5.5px] block mt-[2px]"
                        />
                      </div>
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
    <div className={cn("flex flex-wrap items-center", className)}>
      {items?.map((item) => {
        const isActive = activeFilter === item?.slug;
        return (
          <button
            key={item?.id}
            type="button"
            onClick={() => onFilterChange(item?.slug)}
            className={cn(
              "text-[12px] sm:text-[14px] xl:text-[16px] 2xl:text-[19.2px] 3xl:text-[24px] leading-none font-normal rounded-full h-[35.5px] 2xl:h-[42.5px] 3xl:h-[53.3px] p-[5px_15px_3px] xl:p-[7px_22px_5px] 2xl:p-[7px_26px] 3xl:p-[8px_32px_6px] transition-all duration-300 border border-white",
              isActive
                ? "font-semibold text-black border-[#008dd2]"
                : "text-black hover:text-[#008dd2]",
            )}
          >
            {item?.name}
          </button>
        );
      })}
    </div>
  );
}
