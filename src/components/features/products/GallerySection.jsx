"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Heading } from "@/components/layout/Heading";
import useEmblaCarousel from "embla-carousel-react";

export default function GallerySection({ data, locale = "en" }) {
  const [activeTab, setActiveTab] = useState("interior");

  const galleryImages =
    activeTab === "interior"
      ? data?.interior_gallery || []
      : data?.exterior_gallery || [];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    dragFree: true,
    loop: true,
    containScroll: "trimSnaps",
    direction: locale === "ar" ? "rtl" : "ltr",
  });

  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [galleryImages, emblaApi]);

  if (!galleryImages.length) return null;

  return (
    <section className="w-full h-auto block py-[40px] sm:py-[50px] lg:py-[70px] 2xl:py-[80px] 3xl:py-[90px]">
      <div className="container">
        <div className="w-full h-auto mb-[25px] lg:mb-[30px] 3xl:mb-[40px] flex flex-wrap items-center">
          <div className="w-full sm:w-1/2">
            <Heading
              as="h1"
              className="text-[22px] sm:text-[24px] md:text-[28px] xl:text-[32px] 2xl:text-[38px] 3xl:text-[45px] leading-[1] font-semibold text-black max-sm:mb-[25px] max-sm:text-center"
            >
              {data?.title || "Gallery"}
            </Heading>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="w-full gap-[5px] sm:gap-[10px] flex justify-center sm:justify-end">
              {["interior", "exterior"].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`text-[14px] sm:text-[15px] lg:text-[16px] 2xl:text-[18px] 3xl:text-[20px] leading-[1] font-normal text-black p-[10px_15px] lg:p-[10px_20px] 2xl:p-[10px_25px] rounded-full cursor-pointer transition ${
                    activeTab === item &&
                    "font-semibold border-1 border-[#1577F0]"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="embla">
        <div className="embla__viewport overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="embla__slide flex-none basis-[60%] mr-[5px] sm:mr-[10px] lg:mr-[15px] 2xl:mr-[20px]"
              >
                <div className="w-full h-auto aspect-[810/500] rounded-[5px] sm:rounded-[8px] 2xl:rounded-[10px] overflow-hidden block">
                  <Image
                    src={item?.url || "/images/placeholder.png"}
                    alt={item?.alt || "Gallery"}
                    width={810}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
