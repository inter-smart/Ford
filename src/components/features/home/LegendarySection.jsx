"use client";
import React, {
  useEffect,
  useMemo,
  useState,
  useCallback,
  useRef,
} from "react";
import { Heading } from "@/components/layout/Heading";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LegendarySection({ data = {} }) {
  const carsList = Array.isArray(data?.cars_list) ? data.cars_list : [];

  const normalizedCars = useMemo(() => {
    return carsList.map((car, index) => {
      const key = car?.slug || car?.modelName || `car-${index}`;
      const carLogo = car?.detail_page?.car_logo || {};
      const modelLogoUrl = carLogo?.url || "/images/placeholder.png";
      const modelLogoAlt =
        carLogo?.alt || `${car?.modelName || "Vehicle"} emblem`;
      return {
        key,
        name: car?.modelName || "Unknown Model",
        brandName: car?.modelBrand?.[0]?.name || "Unknown",
        brandLogo: car?.modelBrand?.[0]?.featured_image?.url || "",
        modelLogo: modelLogoUrl,
        modelLogoAlt,
        tagline:
          car?.detail_page?.about_vehicle?.[0]?.title_about_vehicle ||
          car?.detail_page?.Banner?.[0]?.description ||
          car?.modelName ||
          "",
        image:
          car?.car_image?.path ||
          car?.car_image?.url ||
          car?.detail_page?.Banner?.[0]?.desktop_image?.url ||
          "/images/placeholder.png",
        video:
          car?.detail_page?.specifications?.[0]?.video_specifications?.url ||
          car?.detail_page?.home_page_video?.url ||
          null,
        brochure: car?.detail_page?.brochure?.url || null,
        colors:
          car?.detail_page?.color_options?.[0]?.variations?.map((v) => ({
            code: v?.color || "#cccccc",
            image: v?.image?.url || "",
            title: v?.title || "Color",
          })) || [],
        categories:
          car?.modelCategory?.map((c) => c?.name).filter(Boolean) || [],
      };
    });
  }, [carsList]);

  const categories = useMemo(() => {
    const map = new Map();
    carsList.forEach((car) => {
      (car.modelCategory || []).forEach((cat) => {
        if (cat?.name && !map.has(cat.name)) {
          map.set(cat.name, {
            name: cat.name,
            image: cat.featured_image?.url || "",
          });
        }
      });
    });
    return Array.from(map.values());
  }, [carsList]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModelKey, setSelectedModelKey] = useState("");
  const [selectedColorImage, setSelectedColorImage] = useState("");
  const [selectedColorTitle, setSelectedColorTitle] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const brandsInCategory = useMemo(() => {
    if (!selectedCategory) return [];
    const map = new Map();
    normalizedCars
      .filter((car) => car.categories.includes(selectedCategory))
      .forEach((car) => {
        if (!map.has(car.brandName)) {
          map.set(car.brandName, {
            name: car.brandName,
            logo: car.brandLogo,
          });
        }
      });
    return Array.from(map.values());
  }, [normalizedCars, selectedCategory]);

  const modelsInSelectedBrand = useMemo(() => {
    if (!selectedCategory || !selectedBrand) return [];
    return normalizedCars.filter(
      (car) =>
        car.categories.includes(selectedCategory) &&
        car.brandName === selectedBrand
    );
  }, [normalizedCars, selectedCategory, selectedBrand]);

  const currentCar = useMemo(() => {
    return normalizedCars.find((car) => car.key === selectedModelKey);
  }, [normalizedCars, selectedModelKey]);

  useEffect(() => {
    if (categories.length > 0 && !selectedCategory) {
      setSelectedCategory(categories[0].name);
    }
  }, [categories]);

  useEffect(() => {
    if (brandsInCategory.length > 0) {
      setSelectedBrand(brandsInCategory[0].name);
    } else {
      setSelectedBrand("");
      setSelectedModelKey("");
    }
    setIsVisible(true);
  }, [selectedCategory, brandsInCategory]);

  useEffect(() => {
    if (modelsInSelectedBrand.length > 0) {
      const first = modelsInSelectedBrand[0];
      setSelectedModelKey(first.key);
    } else {
      setSelectedModelKey("");
    }
    setIsVisible(true);
  }, [selectedBrand, modelsInSelectedBrand]);

  useEffect(() => {
    if (currentCar) {
      const defaultColor = currentCar.colors[0];
      if (defaultColor) {
        const imageToShow =
          defaultColor.image || currentCar.image || "/images/placeholder.png";

        setSelectedColorImage(imageToShow);
        setSelectedColorTitle(defaultColor.title || "Color");
      } else {
        setSelectedColorImage(currentCar.image || "/images/placeholder.png");
        setSelectedColorTitle("N/A");
      }
    }
  }, [currentCar]);
  if (categories.length === 0) return null;

  return (
    <section className="min-h-[670px] relative z-0 2xl:py-[120px_80px] xl:py-[60px_60px] py-[40px_40px]">
      <div className="container">
        <Heading size="heading3" as="h2" className="text-black mb-[20px] lg:mb-[45px]">
          Discover Ford's Legendary Line up
        </Heading>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Sidebar */}
          <div className="w-full 2xl:w-[200px] lg:w-[160px] flex flex-wrap lg:flex-col m-[-3px] lg:my-[-7px]">
            {categories.map((item, index) => (
              <div
                key={index}
                className="lg:w-full p-[3px] lg:py-[7px]"
              >
                <button
                  onClick={() => setSelectedCategory(item.name)}
                  className={`group 2xl:text-[14px] xl:text-[12px] 3xs:text-[11px] text-[10px] leading-none text-black h-[35px] lg:h-[40px] w-full flex items-center gap-2 px-4 py-2 rounded-full
                    border border-[#E8E8E8] transition-all cursor-pointer ${
                      selectedCategory === item.name
                        ? "bg-[#1577F0] text-white font-semibold"
                        : "bg-[#F8F9FD] font-normal text-black hover:bg-[#1577F0] hover:text-white"
                    }`}
                >
                  {item.image && (
                    <Image
                      src={item.image || "/images/icon-placeholder.png"}
                      alt={item.name}
                      width={20}
                      height={20}
                      className={`sm:w-[40px] w-[30px] h-[40px] transition duration-300 ${
                        selectedCategory === item.name
                          ? "invert group-hover:brightness-100"
                          : "brightness-[0.3] group-hover:brightness-100 group-hover:invert"
                      }`}
                    />
                  )}
                  {item.name}
                </button>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="flex-1 w-full 2xl:w-[calc(100%-200px)] lg:w-[calc(100%-160px)] ltr:pr-0 rtl:pl-0 ltr:2xl:pl-[50px] rtl:2xl:pr-[50px] ltr:xl:pl-[40px] rtl:xl:pr-[40px]">
            {brandsInCategory.length === 0 ? (
              <div className="text-gray-400 text-center text-[18px] font-medium py-10">
                No items to display for{" "}
                <span className="font-semibold">{selectedCategory}</span>.
              </div>
            ) : (
              <Tabs
                value={selectedBrand}
                onValueChange={setSelectedBrand}
                className="w-full"
              >
                <TabsList className="bg-transparent gap-4 xl:gap-6 2xl:mb-[45px] sm:mb-[30px] mb-[15px] h-auto p-0 rtl:ml-auto flex flex-wrap ">
                  {brandsInCategory.map((brand) => (
                    <TabsTrigger
                      key={brand.name}
                      value={brand.name}
                      className="group flex flex-col items-center gap-1 border-b-2 border-transparent shadow-none h-auto ring-0 cursor-pointer relative
                      after:absolute after:content-[''] after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:m-auto after:bg-transparent
                      data-[state=active]:after:bg-[#0052FF] data-[state=active]:after:w-full
                      data-[state=active]:text-black rounded-none
                      data-[state=active]:shadow-none
                      text-gray-500 px-0 pt-0"
                    >
                      <Image
                        src={brand.logo || "/images/placeholder.png"}
                        alt={brand.name}
                        width={80}
                        height={50}
                        className="max-w-[90px] mb-[10px] object-contain"
                      />
                      <span className="text-[14px] 2xl:text-[16px] font-normal group-data-[state=active]:font-semibold text-[#00142E] w-full text-start">
                        {brand.name}
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value={selectedBrand} className="mt-0 relative">
                  {currentCar && (
                    <>
                      {/* <div className="flex flex-col ltr:sm:flex-row rtl:sm:flex-row-reverse justify-between gap-2 xl:gap-4 2xl:gap-6 sm:absolute top-0 left-0 rtl:text-right w-full"> */}
                      <div className="flex flex-row rtl:sm:flex-row-reverse justify-between gap-2 xl:gap-4 2xl:gap-6 sm:absolute top-0 left-0 rtl:text-right w-full">
                        <div className="sm:w-1/3">
                          <Heading
                            size="heading1"
                            as="h2"
                            className="text-black font-medium lg:mb-[35px] sm:mb-[25px] mb-[15px] max-w-[360px] rtl:ml-auto font-antenna"
                          >
                            {currentCar.name}
                          </Heading>
                          {currentCar.brochure && (
                            <Link
                              href={currentCar.brochure}
                              className="2xl:text-[14px] text-[12px] text-[#1577F0] font-medium inline-block border rtl:ml-auto border-[#1577F0] 2xl:px-6 px-5 2xl:py-3 py-2
                                rounded-full hover:bg-[#0052FF] hover:text-white transition sm:mb-10"
                            >
                              Download Brochure
                            </Link>
                          )}
                        </div>

                        <div className="flex flex-col gap-4 md:relative ltr:sm:absolute rtl:sm:relative top-[-120px] right-0 min-w-[200px]">
                          <div className="flex flex-col xl:flex-row items-center max-lg:items-end gap-1 xl:gap-2 3xl:gap-4">
                            <span className="text-[11px] 2xl:text-[14px] 3xl:text-[16px] text-black font-semibold uppercase">
                              {currentCar.name} Models:
                            </span>
                            <Select
                              value={selectedModelKey}
                              onValueChange={setSelectedModelKey}
                            >
                              <SelectTrigger className="!text-[11px] md:!text-[12px] 2xl:!text-[14px] max-w-full min-h-[35px] lg:min-h-[40px] 2xl:min-h-[50px] px-3 xl:px-4 2xl:px-6 border border-[#CCCCCC] text-[#00142E] w-[120px] lg:w-[170px] 2xl::w-[200px] 3xl::w-[255px] bg-[#F8F9FD] rounded-full font-normal">
                                <SelectValue placeholder="Select model" />
                              </SelectTrigger>
                              <SelectContent className="3xl:text-[18px] 2xl:text-[16px] md:text-[12px] text-[10px] bg-white border border-[#CCCCCC] rounded-md shadow-md font-normal text-black">
                                {modelsInSelectedBrand.map((car) => (
                                  <SelectItem key={car.key} value={car.key}>
                                    {car.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          {/* Mini video/image preview */}
                          {isVisible && currentCar.video && (
                            <div className="absolute 2xl:top-[130px] top-[40%] sm:top-[100px] ltr:right-0 rtl:left-0 ltr:sm:right-[100px] rtl:xs:left-[50px] rtl:sm:left-[100px] w-full 2xl:max-w-[230px] lg:max-w-[200px] max-w-[150px] shadow-md">
                              <div className="relative">
                                <div className="rounded-md w-full h-full overflow-hidden relative">
                                  <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover"
                                  >
                                    <source
                                      src={currentCar.video}
                                      type="video/mp4"
                                    />
                                  </video>
                                </div>
                                <button
                                  onClick={() => setIsVisible(false)}
                                  className="w-[20px] h-[20px] rounded-full bg-[#D9D9D9] p-[6px] flex items-center justify-center absolute top-[-18px] right-[-18px] hover:bg-[#00095b] group hover:text-white cursor-pointer"
                                >
                                  <svg
                                    viewBox="0 0 329.26933 329"
                                    className="group-hover:fill-white w-4 h-4"
                                  >
                                    <path d="M194.8 164.77l128.21-128.21c8.34-8.34 8.34-21.82 0-30.16s-21.82-8.34-30.16 0L164.64 134.61 36.43 6.4C28.09-1.94 14.6-1.94 6.26 6.4s-8.34 21.82 0 30.16l128.21 128.21L6.26 293.19c-8.34 8.34-8.34 21.82 0 30.16a21.3 21.3 0 0 0 30.16 0l128.21-128.21 128.21 128.21a21.3 21.3 0 0 0 30.16 0c8.34-8.34 8.34-21.82 0-30.16L194.8 164.77z" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                      {/* Big car image */}
                      <div className="relative mt-15 pointer-events-none 3xl:max-w-[850px] xl:max-w-[650px] lg:max-w-[600px] max-w-[550px] m-auto sm:pt-[80px]">
                        <Image
                          src={
                            selectedColorImage ||
                            currentCar.image ||
                            "/images/placeholder.png"
                          }
                          alt={currentCar.name}
                          width={1000}
                          height={500}
                          className="w-full max-w-5xl mx-auto object-contain z-1"
                        />
                        {currentCar.modelLogo && (
                          <div className="absolute z-[-1] top-[-10%] xl:top-[-15%] 2xl:top-[-20%] left-0 right-0 m-auto w-full max-w-[150px] xl:max-w-[300px] 2xl:max-w-[350px]">
                            <Image
                              src={currentCar.modelLogo}
                              alt={currentCar.modelLogoAlt}
                              width={420}
                              height={420}
                              className="w-full max-w-[320px] lg:max-w-[420px] object-contain opacity-10"
                              aria-hidden="true"
                            />
                          </div>
                        )}
                      </div>

                      {/* Colors */}
                      <div className="2xl:mt-[50px] sm:mt-[30px] mt-[30px]">
                        <div className="w-fit flex ltr:items-end rtl:items-start gap-2 flex-wrap mx-auto">
                          {currentCar.colors.length > 0 ? (
                            currentCar.colors.map((color, i) => {
                              const fallbackImage =
                                color.image || "/images/placeholder.png";

                              const isSelected =
                                selectedColorTitle === color.title;
                              return (
                                <button
                                  key={i}
                                  onClick={() => {
                                    setSelectedColorImage(fallbackImage);
                                    setSelectedColorTitle(color.title);
                                  }}
                                  className={`2xl:w-[30px] w-[20px] 2xl:h-[30px] h-[20px] rounded-full border border-gray-300 cursor-pointer mb-[8px] relative flex items-center justify-center ${
                                    isSelected ? "bg-transparent" : ""
                                  }`}
                                  style={{
                                    backgroundColor: !isSelected
                                      ? color.code || "#ddd"
                                      : "transparent",
                                    border: `1px solid ${color.code || "#ddd"}`,
                                  }}
                                  aria-label={`Select color ${color.title}`}
                                >
                                  {isSelected && (
                                    <>
                                      <span
                                        className="absolute top-0 left-0 right-0 bottom-0 m-auto 2xl:w-[18px] w-[12px] 2xl:h-[18px] h-[12px] rounded-full"
                                        style={{
                                          backgroundColor: color.code || "#ddd",
                                        }}
                                      />
                                      <div className="text-[11px] xl:text-[13px] 2xl:text-[14px] leading-[1] font-normal text-black whitespace-nowrap mx-auto absolute z-1 left-0 right-0 bottom-[-20px] xl:bottom-[-30px] flex justify-center">
                                        {color.title}
                                      </div>
                                    </>
                                  )}
                                </button>
                              );
                            })
                          ) : (
                            <div className="text-sm text-gray-400">
                              No color options
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </TabsContent>
              </Tabs>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
