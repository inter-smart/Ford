"use client";
import { Search } from "lucide-react";
import ProductCard from "./ProductCard";
import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function ProductListSection({ data, locale = "en" }) {
  const productRaw = data?.product ?? [];

  const categories = [
    { value: "all", label: "All" },
    ...Array.from(
      new Set(productRaw.flatMap((p) => p.modelCategory || [])),
    ).map((cat) => ({
      value: cat.toLowerCase(),
      label: cat,
    })),
  ];

  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(18);

  const [tabsEmblaRef] = useEmblaCarousel({ dragFree: true, direction: locale === "ar" ? "rtl" : "ltr" });

  const productList = productRaw.filter((item) => {
    const searchLower = searchQuery.toLowerCase().trim();

    const modelName = String(item.modelName || "").toLowerCase();

    const modelBrandRaw = item.modelBrand || "";
    const modelBrand = Array.isArray(modelBrandRaw)
      ? modelBrandRaw.map((b) => String(b).toLowerCase()).join(" ")
      : String(modelBrandRaw).toLowerCase();

    const categoriesLower = (item.modelCategory || []).map((c) =>
      String(c).toLowerCase(),
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
    <section className="w-full h-auto block py-[40px_30px] sm:py-[60px_40px] lg:py-[80px_57px] 2xl:py-[100px_70px] 3xl:py-[122px_80px]">
      <div className="container">
        <div className="flex flex-wrap items-center flex-col-reverse sm:flex-row gap-5 mb-[20px] xl:mb-[30px] 2xl:mb-[45px] 3xl:mb-[50px]">
          <div className="w-full sm:flex-1 overflow-hidden relative">
            <div className="embla__viewport" ref={tabsEmblaRef}>
              <div className="embla__container flex ltr:pr-5 rtl:pl-5">
                {categories.map((item, index) => (
                  <div
                    className="embla__slide w-auto"
                    key={index}
                  >
                    <button
                      onClick={() => {
                        setActiveCategory(item.value);
                        setVisibleCount(18);
                      }}
                      className={`text-[12px] sm:text-[14px] xl:text-[16px] 2xl:text-[19.2px] 3xl:text-[24px] leading-none font-normal capitalize rounded-full h-[30px] xl:h-[35.5px] 2xl:h-[42.5px] 3xl:h-[53.3px] p-[5px_15px_3px] xl:p-[7px_22px_5px] 2xl:p-[7px_24px] 3xl:p-[8px_26px_6px] bg-white border flex items-center justify-center transition-all duration-300 whitespace-nowrap
                        ${
                          activeCategory === item.value
                            ? "font-semibold text-black border-[#008dd2]"
                            : "border-white text-black hover:text-[#008dd2]"
                        }`}
                    >
                      {item?.label}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute ltr:right-0 rtl:left-0 top-0 h-full w-[60px] ltr:bg-gradient-to-l rtl:bg-gradient-to-r from-white to-transparent z-10" />
          </div>
          <div className="w-full sm:w-[268px] xl:w-[327px] 2xl:w-[392px] 3xl:w-[490px]">
            <div className="w-full h-auto relative z-0">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(18);
                }}
                className="
                    text-[14px] lg:text-[16px] w-full h-[40px] 2xl:h-[45px] ltr:pl-4 ltr:pr-12 rtl:pl-12 rtl:pr-4
                    border-[#D8D8D8] border-1 rounded-[5px]
                    text-base outline-none
                    focus:border-black transition-all
                  "
              />
              <button className="w-[10px] lg:w-[15px] 2xl:w-[20px] h-auto aspect-[20/20] ltr:p-[0_35px_0_20px] ltr:lg:p-[0_35px_0_20px] rtl:p-[0_20px_0_35px] rtl:lg:p-[0_20px_0_35px] absolute z-1 ltr:right-0 rtl:left-0 top-1/2 -translate-y-1/2 cursor-pointer">
                <Search className="text-black" size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-[-10px] sm:-mx-[6px] xl:-mx-[8px] 2xl:-mx-[10px] 3xl:-mx-[13px]">
          {visibleProducts.length > 0 ? (
            visibleProducts.map((item, index) => (
              <div
                key={"product" + index}
                className="w-full sm:w-1/2 lg:w-1/3 p-[10px] sm:p-[15px_6px] xl:p-[19px_8px] 2xl:p-[22px_10px] 3xl:p-[28px_13px]"
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
