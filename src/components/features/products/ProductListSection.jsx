"use client";
import { Search } from "lucide-react";
import ProductCard from "./ProductCard";
import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function ProductListSection({ data }) {
  const productRaw = data?.product ?? [];

  const categories = [
    { value: "all", label: "All" },
    ...Array.from(
      new Set(productRaw.flatMap((p) => p.modelCategory || []))
    ).map((cat) => ({
      value: cat.toLowerCase(),
      label: cat,
    })),
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(18);

  const [tabsEmblaRef] = useEmblaCarousel({ dragFree: true });

  const productList = productRaw.filter((item) => {
    const searchLower = searchQuery.toLowerCase().trim();

    const modelName = String(item.modelName || "").toLowerCase();

    const modelBrandRaw = item.modelBrand || "";
    const modelBrand = Array.isArray(modelBrandRaw)
      ? modelBrandRaw.map((b) => String(b).toLowerCase()).join(" ")
      : String(modelBrandRaw).toLowerCase();

    const categoriesLower = (item.modelCategory || []).map((c) =>
      String(c).toLowerCase()
    );

    const matchCategory =
      activeCategory === "all" ||
      categoriesLower.includes(activeCategory.toLowerCase().replace(/-/g, " "));

    const matchSearch =
      searchLower === "" ||
      modelName.includes(searchLower) ||
      modelBrand.includes(searchLower) ||
      categoriesLower.some((cat) => cat.includes(searchLower));

    return matchCategory && matchSearch;
  });

  const visibleProducts = productList.slice(0, visibleCount);

  const handleLoadMore = () => {
    if (visibleCount < productList.length) {
      setVisibleCount((prev) => Math.min(prev + 18, productList.length));
    } else {
      setVisibleCount((prev) => {
        const next = prev - 18;
        return next <= 18 ? 18 : next; 
      });
    }
  };

  const buttonLabel =
    visibleCount < productList.length ? "Load More" : "Load Less";

  return (
    <section className="w-full h-auto py-[40px] sm:py-[50px_40px] lg:py-[70px_50px] 2xl:py-[85px_65px] block">
      <div className="container">
        <div className="w-full h-auto mb-[20px] sm:mb-[30px] 2xl:mb-[40px] flex flex-wrap">
          <div className="w-full sm:w-[65%] max-sm:mb-[20px] overflow-hidden relative">
            <div className="embla__viewport" ref={tabsEmblaRef}>
              <div className="embla__container flex">
                {categories.map((item, index) => (
                  <div
                    className="embla__slide w-auto mr-[10px] lg:mr-[30px] 2xl:mr-[40px]"
                    key={index}
                  >
                    <button
                      onClick={() => {
                        setActiveCategory(item.value);
                        setVisibleCount(18);
                      }}
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
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(18);
                }}
                className="
                    text-[14px] lg:text-[16px] w-full h-[40px] 2xl:h-[45px] pl-4 pr-12
                    border-[#D8D8D8] border-1 rounded-[5px]
                    text-base outline-none
                    focus:border-black transition-all
                  "
              />
              <button className="w-[10px] lg:w-[15px] 2xl:w-[20px] h-auto aspect-[20/20] p-[0_35px_0_20px] lg:p-[0_35px_0_20px] absolute z-1 right-0 top-1/2 -translate-y-1/2 cursor-pointer">
                <Search className="text-black" size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-full sm:mx-[-5px] lg:mx-[-7px] flex flex-wrap">
          {visibleProducts.length > 0 ? (
            visibleProducts.map((item, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 lg:w-1/3 h-auto p-[10px_0px] sm:p-[15px_5px] lg:p-[20px_7px] 2xl:p-[30px_7px]"
              >
                <ProductCard item={item} />
              </div>
            ))
          ) : (
            <div className="w-full text-center py-10 text-gray-500">
              No products found matching your search.
            </div>
          )}
        </div>
        {productList.length > 18 && (
          <div className="w-full flex justify-center mt-6">
            <button
              onClick={handleLoadMore}
              className="text-[14px] leading-[1] font-bold text-[#1577F0] px-6 py-3 cursor-pointer transition-all"
            >
              {buttonLabel}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
