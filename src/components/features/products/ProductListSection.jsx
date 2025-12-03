"use client";
import { Search } from "lucide-react";
import ProductCard from "./ProductCard";
import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function ProductListSection({ data }) {
  const { items, categories } = data;

  const [activeCategory, setActiveCategory] = useState("all");

  const [tabsEmblaRef] = useEmblaCarousel({ dragFree: true });

  const productList =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.modelCategory === activeCategory);

  return (
    <section className="w-full h-auto py-[40px] sm:py-[50px_40px] lg:py-[70px_50px] 2xl:py-[85px_65px] block">
      <div className="container">
        <div className="w-full h-auto mb-[20px] sm:mb-[30px] 2xl:mb-[40px] flex flex-wrap">
          <div className="w-full sm:w-[65%] max-sm:mb-[20px] overflow-hidden relative">
            <div className="embla__viewport" ref={tabsEmblaRef}>
              <div className="embla__container flex">
                {categories.map((item) => (
                  <div
                    className="embla__slide w-auto mr-[10px] lg:mr-[30px] 2xl:mr-[40px]"
                    key={item.value}
                  >
                    <button
                      onClick={() => setActiveCategory(item.value)}
                      className={`text-[14px] lg:text-[16px] 2xl:text-[18px] leading-[1] font-normal whitespace-nowrap text-black w-auto h-auto p-[7px_10px] sm:p-[10px_15px] lg:p-[10px_20px] rounded-full border transition-all
                        ${
                          activeCategory === item.value
                            ? "font-semibold border-[#1577F0]"
                            : "border-white hover:bg-gray-100"
                        }`}
                    >
                      {item?.label}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-[60px] bg-gradient-to-l from-white to-transparent z-10" />
          </div>
          <div className="w-full sm:w-[30%] ml-auto">
            <div className="w-full h-auto sm:max-w-[320px] 2xl:max-w-[370px] ml-auto relative z-0">
              <input
                type="text"
                placeholder="Search..."
                className="
                    text-[14px] lg:text-[16px] w-full h-[40px] 2xl:h-[45px] pl-4 pr-12 
                    border-[#D8D8D8] border-1 rounded-[5px]
                    text-base outline-none 
                    focus:border-black transition-all
                  "
              />
              <button className="w-[10px] lg:w-[15px] 2xl:w-[20px] h-auto aspect-[20/20] p-[0_15px_0_20px] lg:p-[0_35px_0_20px] absolute z-1 right-0 top-1/2 -translate-y-1/2 cursor-pointer">
                <Search className="text-black" size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-full sm:mx-[-5px] lg:mx-[-7px] flex flex-wrap">
          {productList.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-1/2 lg:w-1/3 h-auto p-[10px_0px] sm:p-[15px_5px] lg:p-[20px_7px] 2xl:p-[30px_7px]"
            >
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
