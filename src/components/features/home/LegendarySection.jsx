// "use client";
// import React, { useState, useEffect } from "react";
// import { Heading } from "@/components/layout/Heading";
// import Image from "next/image";
// import Link from "next/link";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// const categories = [
//   { name: "Cars", icon: "/images/trucks_icon.svg" },
//   { name: "SUVs", icon: "/images/suv_icon.svg" },
//   { name: "Trucks", icon: "/images/trucks_icon.svg" },
//   { name: "Performance", icon: "/images/performance_icon.svg" },
// ];

// const cars = [
//   {
//     key: "mustang",
//     name: "Mustang®",
//     logoImage: "/images/carLogo.png",
//     tagline: "MUSTANG® GT 5.0",
//     image: "/images/blackMustag.png",
//     video: "/videos/varientVideos.mp4",
//     category: "Cars",
//     models: ["GT PREMIUM 5.0", "GT BASE 5.0"],
//     colors: [
//       { code: "#0066cc", image: "/images/mustang.png" },
//       { code: "#000000", image: "/images/car1.png" },
//       { code: "#d40000", image: "/images/car4.png" },
//       { code: "#cccccc", image: "/images/car3.png" },
//       { code: "#aaaaaa", image: "/images/blackMustag.png" },
//     ],
//   },
//   {
//     key: "taurus1",
//     name: "Taurus",
//     tagline: "Luxury Comfort",
//     image: "/images/car3.png",
//     logoImage: "/images/carLogo.png",
//     video: "/videos/varientVideos.mp4",
//     category: "Cars",
//     models: ["SE", "SEL", "Titanium"],
//     colors: [
//       { code: "#0066cc", image: "/images/car2.png" },
//       { code: "#000000", image: "/images/car1.png" },
//       { code: "#d40000", image: "/images/car4.png" },
//       { code: "#cccccc", image: "/images/car3.png" },
//     ],
//   },
//   {
//     key: "taurus2",
//     name: "Taurus",
//     tagline: "Luxury Comfort",
//     video: "/videos/varientVideos.mp4",
//     logoImage: "/images/carLogo.png",
//     image: "/images/car2.png",
//     category: "SUVs",
//     models: ["SE", "SEL", "Titanium"],
//     colors: [
//       { code: "#333333", image: "/images/car4.png" },
//       { code: "#aaaaaa", image: "/images/colors/taurus-light.png" },
//     ],
//   },
// ];

// export default function LegendarySection() {
//   const [selectedCategory, setSelectedCategory] = useState("Cars");
//   const [activeTab, setActiveTab] = useState();
//   const [selectedModel, setSelectedModel] = useState();
//   const [selectedColorImage, setSelectedColorImage] = useState();
//   const [isVisible, setIsVisible] = useState(true);

//   const filteredCars = cars.filter((car) => car.category === selectedCategory);

//   const handleCategoryClick = (name) => {
//     setSelectedCategory(name);
//     setIsVisible(true);
//   };

//   useEffect(() => {
//     if (filteredCars.length > 0) {
//       const firstCar = filteredCars[0];
//       setActiveTab(firstCar.key);
//       setSelectedModel(firstCar.models[0]);
//       setSelectedColorImage(firstCar.colors[0].image);
//     } else {
//       setActiveTab("");
//       setSelectedModel("");
//       setSelectedColorImage("");
//     }
//   }, [selectedCategory]);

//   useEffect(() => {
//     const currentCar = cars.find((car) => car.key === activeTab);
//     if (currentCar) {
//       setSelectedModel(currentCar.models[0]);
//       setSelectedColorImage(currentCar.colors[0].image);
//     }
//   }, [activeTab]);

//   const currentCar = cars.find((car) => car.key === activeTab);

//   return (
//     <section className="min-h-[670px] relative z-0 2xl:py-[120px_40px] xl:py-[60px_20px] py-[40px_20px]">
//       <div className="container">
//         <Heading size="heading3" as="h2" className="text-black mb-[45px]">
//           Discover Ford's Legendary Line up
//         </Heading>
//         <div className="flex flex-col lg:flex-row gap-10">
//           {/* Sidebar */}
//           <div className="w-full 2xl:w-[200px] lg:w-[160px] flex flex-wrap lg:flex-col m-[-3px] lg:my-[-7px]">
//             {categories.map((item) => (
//               <div key={item.name} className="lg:w-full sm:w-[calc(100%/4)] w-[calc(100%/2)] p-[3px] lg:py-[7px]">
//                 <button
//                   onClick={() => handleCategoryClick(item.name)}
//                   className={`group 2xl:text-[14px] xl:text-[12px] 3xs:text-[11px] text-[10px] text-black h-[40px] w-full flex items-center gap-2 px-4 py-2 rounded-full
//                     border border-[#E8E8E8] transition-all cursor-pointer ${selectedCategory === item.name
//                       ? "bg-[#1577F0] text-white"
//                       : "bg-[#F8F9FD] text-black hover:bg-[#1577F0] hover:text-white"
//                     }`}
//                 >
//                   <Image
//                     src={item.icon}
//                     alt={item.name}
//                     width={20}
//                     height={20}
//                     className={`sm:w-[40px] w-[30px] h-[40px] transition duration-300 ${selectedCategory === item.name
//                       ? "invert group-hover:brightness-100"
//                       : "brightness-[0.3] group-hover:brightness-100 group-hover:invert"
//                       }`}
//                   />
//                   {item.name}
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Main Content */}
//           <div className="flex-1 w-full 2xl:w-[calc(100%-200px)] lg:w-[calc(100%-160px)] ltr:pr-0 rtl:pl-0 ltr:2xl:pl-[50px] rtl:2xl:pr-[50px] ltr:xl:pl-[40px] rtl:xl:pr-[40px]">
//             {filteredCars.length === 0 ? (
//               <div className="text-gray-400 text-center text-[18px] font-medium py-10">
//                 No items to display for <span className="font-semibold">{selectedCategory}</span>.
//               </div>
//             ) : (
//               <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
//                 <TabsList className="bg-transparent gap-6 2xl:mb-[45px] sm:mb-[30px] mb-[15px] h-auto p-0 rtl:ml-auto">
//                   {filteredCars.map((car) => (
//                     <TabsTrigger
//                       key={car.key}
//                       value={car.key}
//                       className="flex flex-col items-center gap-1 border-b-2 border-transparent shadow-none h-auto ring-0 cursor-pointer relative
//                       after:absolute after:content-[''] after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:m-auto after:bg-transparent
//                       data-[state=active]:after:bg-[#0052FF] data-[state=active]:after:w-full
//                       data-[state=active]:text-black rounded-none
//                       data-[state=active]:shadow-none
//                       text-gray-500 px-2 pb-2"
//                     >
//                       <Image
//                         src={car.image}
//                         alt={car.name}
//                         width={80}
//                         height={50}
//                         className="max-w-[90px] mb-[10px]"
//                       />
//                       <span className="text-[14px] 2xl:text-[16px] font-medium text-[#00142E]">{car.name}</span>
//                     </TabsTrigger>
//                   ))}
//                 </TabsList>

//                 {filteredCars.map((car) => (
//                   <TabsContent key={car.key} value={car.key} className="mt-0 relative">
//                     <div className="flex flex-col ltr:sm:flex-row rtl:sm:flex-row-reverse justify-between gap-6 sm:absolute top-0 left-0 rtl:text-right w-full">
//                       <div className="sm:w-1/3">
//                         <Heading size="heading1" as="h2" className="text-black font-medium lg:mb-[35px] sm:mb-[25px] mb-[15px] max-w-[360px] rtl:ml-auto">
//                           {car.tagline}
//                         </Heading>
//                         <Link
//                           href="#"
//                           className="2xl:text-[14px] text-[12px] text-[#1577F0] font-medium inline-block border rtl:ml-auto border-[#1577F0] 2xl:px-6 px-5 2xl:py-3 py-2
//                           rounded-full hover:bg-[#0052FF] hover:text-white transition sm:mb-10"
//                         >
//                           Download Brochure
//                         </Link>
//                       </div>

//                       <div className="flex flex-col gap-4 md:relative ltr:sm:absolute rtl:sm:relative top-0 right-0 lg:top-[-120px] min-w-[200px] sm:mb-0 mb-[30px]">
//                         <div className="flex items-center rtl:max-sm:justify-end  gap-4">
//                           <span className="text-[11px] 2xl:text-[14px] 3xl:text-[16px] text-black font-medium uppercase">
//                             {car.name} Models:
//                           </span>
//                           <Select value={selectedModel} onValueChange={setSelectedModel}>
//                             <SelectTrigger
//                               className="!text-[11px] md:!text-[12px] 2xl:!text-[14px] max-w-full min-h-[35px] lg:min-h-[40px] 2xl:min-h-[50px] px-6 border border-[#CCCCCC]
//                               text-[#000000] w-[150px] lg:w-[200px] bg-[#F8F9FD] rounded-full
//                               font-medium outline-none shadow-none focus:outline-none focus:ring-0 focus:border-[#CCCCCC] focus:shadow-none
//                               data-[state=open]:border-[#00095b]
//                               data-[state=open]:shadow-none"
//                                                       >
//                               <SelectValue placeholder="Select model" />
//                             </SelectTrigger>
//                             <SelectContent className="3xl:text-[18px] 2xl:text-[16px] md:text-[12px] text-[10px] bg-white border border-[#CCCCCC] rounded-md shadow-md font-medium text-[#1D0A44]">
//                               {car.models.map((model) => (
//                                 <SelectItem
//                                   key={model}
//                                   value={model}
//                                   className="py-[10px] px-4 hover:bg-[#00095b] focus:bg-[#1D0A44] focus:text-white cursor-pointer"
//                                 >
//                                   {model}
//                                 </SelectItem>
//                               ))}
//                             </SelectContent>
//                           </Select>
//                         </div>

//                         {isVisible && currentCar && (
//                           <div className="absolute 2xl:top-[130px] top-[40%] sm:top-[100px] ltr:right-0 rtl:left-0 ltr:sm:right-[100px] rtl:xs:left-[50px] rtl:sm:left-[100px] w-full 2xl:max-w-[230px]
//                           lg:max-w-[200px] max-w-[150px] shadow-md">
//                             <div className="relative">
//                               <div className="rounded-md border border-gray-200 w-full h-full overflow-hidden relative">
//                                 {currentCar.video ? (
//                                   <video
//                                     autoPlay
//                                     preload="auto"
//                                     muted
//                                     loop
//                                     playsInline
//                                     className="w-full h-full object-cover"
//                                     key={currentCar.video}
//                                   >
//                                     <source src={currentCar.video} type="video/mp4" />
//                                     Your browser does not support the video tag.
//                                   </video>
//                                 ) : (
//                                   <Image
//                                     src={currentCar.image}
//                                     alt={currentCar.name}
//                                     fill
//                                     style={{ objectFit: "contain" }}
//                                     className="rounded-md"
//                                   />
//                                 )}
//                               </div>
//                               <button
//                                 onClick={() => setIsVisible(false)}
//                                 className="w-[20px] h-[20px] rounded-full bg-[#D9D9D9] p-[6px] flex items-center justify-center absolute top-[-18px] right-[-18px] hover:bg-[#00095b] group hover:text-white cursor-pointer"
//                                 aria-label="Close"
//                               >
//                                 <svg viewBox="0 0 329.26933 329" className="group-hover:fill-white w-4 h-4">
//                                   <path d="M194.8 164.77l128.21-128.21c8.34-8.34 8.34-21.82 0-30.16s-21.82-8.34-30.16 0L164.64 134.61 36.43 6.4C28.09-1.94 14.6-1.94 6.26 6.4s-8.34 21.82 0 30.16l128.21 128.21L6.26 293.19c-8.34 8.34-8.34 21.82 0 30.16a21.3 21.3 0 0 0 30.16 0l128.21-128.21 128.21 128.21a21.3 21.3 0 0 0 30.16 0c8.34-8.34 8.34-21.82 0-30.16L194.8 164.77z" />
//                                 </svg>
//                               </button>
//                             </div>
//                           </div>
//                         )}

//                         <div className="2xl:mt-[50px] sm:mt-[30px]">
//                           <p className="text-[12px] md:text-[16px] font-medium ltr:sm:text-right rtl:sm:text-left  mb-5">Colors</p>
//                           <div className="flex sm:flex-col ltr:items-end rtl:items-start rtl:max-sm:justify-end  gap-2 flex-wrap">
//                             {car.colors.map((color, i) => {
//                               const isSelected = selectedColorImage === color.image;
//                               return (
//                                 <button
//                                   key={i}
//                                   onClick={() => setSelectedColorImage(color.image)}
//                                   className={`2xl:w-[16px] w-[12px] 2xl:h-[16px] h-[12px] rounded-full border border-gray-300 cursor-pointer mb-[8px] relative
//                                     flex items-center justify-center ${isSelected ? "bg-transparent" : ""}`}
//                                   style={{ backgroundColor: isSelected ? "transparent" : color.code, border: `1px solid ${color.code}` }}
//                                   aria-label={`Select color ${color.code}`}
//                                 >
//                                   {isSelected && (
//                                     <span
//                                       className="absolute top-0 left-0 right-0 bottom-0 m-auto 2xl:w-[10px] w-[8px] 2xl:h-[10px] h-[8px] rounded-full"
//                                       style={{ backgroundColor: color.code }}
//                                     />
//                                   )}
//                                 </button>
//                               );
//                             })}
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="relative mt-10 pointer-events-none 3xl:max-w-[850px] xl:max-w-[650px] lg:max-w-[600px] max-w-[550px] m-auto sm:pt-[80px]">
//                       <Image
//                         src={selectedColorImage || car.image}
//                         alt={car.name}
//                         width={1000}
//                         height={500}
//                         className="w-full max-w-5xl mx-auto object-contain z-1"
//                       />
//                       <div className="absolute sm:top-[-30%] top-[-25%] left-0 right-0 opacity-[0.1] m-auto  w-full lg:max-w-[350px] max-w-[250px] z-[-1]">
//                         <Image
//                           src={car.logoImage}
//                           alt={car.name}
//                           width={400}
//                           height={500}
//                           className="w-full mx-auto object-contain"
//                         />
//                       </div>
//                     </div>
//                   </TabsContent>
//                 ))}
//               </Tabs>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

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
    <section className="min-h-[670px] relative z-0 2xl:py-[120px_40px] xl:py-[60px_40px] py-[40px_20px]">
      <div className="container">
        <Heading size="heading3" as="h2" className="text-black mb-[45px]">
          Discover Ford's Legendary Line up
        </Heading>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <div className="w-full 2xl:w-[200px] lg:w-[160px] flex flex-wrap lg:flex-col m-[-3px] lg:my-[-7px]">
            {categories.map((item, index) => (
              <div
                key={index}
                className="lg:w-full sm:w-[calc(100%/4)] w-[calc(100%/2)] p-[3px] lg:py-[7px]"
              >
                <button
                  onClick={() => setSelectedCategory(item.name)}
                  className={`group 2xl:text-[14px] xl:text-[12px] 3xs:text-[11px] text-[10px] text-black h-[40px] w-full flex items-center gap-2 px-4 py-2 rounded-full
                    border border-[#E8E8E8] transition-all cursor-pointer ${
                      selectedCategory === item.name
                        ? "bg-[#1577F0] text-white"
                        : "bg-[#F8F9FD] text-black hover:bg-[#1577F0] hover:text-white"
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
                <TabsList className="bg-transparent gap-6 2xl:mb-[45px] sm:mb-[30px] mb-[15px] h-auto p-0 rtl:ml-auto flex flex-wrap ">
                  {brandsInCategory.map((brand) => (
                    <TabsTrigger
                      key={brand.name}
                      value={brand.name}
                      className="flex flex-col items-center gap-1 border-b-2 border-transparent shadow-none h-auto ring-0 cursor-pointer relative
                      after:absolute after:content-[''] after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:m-auto after:bg-transparent
                      data-[state=active]:after:bg-[#0052FF] data-[state=active]:after:w-full
                      data-[state=active]:text-black rounded-none
                      data-[state=active]:shadow-none
                      text-gray-500 px-2 pb-2"
                    >
                      <Image
                        src={brand.logo || "/images/placeholder.png"}
                        alt={brand.name}
                        width={80}
                        height={50}
                        className="max-w-[90px] mb-[10px] object-contain"
                      />
                      <span className="text-[14px] 2xl:text-[16px] font-medium text-[#00142E]">
                        {brand.name}
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value={selectedBrand} className="mt-0 relative">
                  {currentCar && (
                    <>
                      <div className="flex flex-col ltr:sm:flex-row rtl:sm:flex-row-reverse justify-between gap-6 sm:absolute top-0 left-0 rtl:text-right w-full">
                        <div className="sm:w-1/3">
                          <Heading
                            size="heading1"
                            as="h2"
                            className="text-black font-medium lg:mb-[35px] sm:mb-[25px] mb-[15px] max-w-[360px] rtl:ml-auto"
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

                        <div className="flex flex-col gap-4 md:relative ltr:sm:absolute rtl:sm:relative top-0 right-0 lg:top-[-120px] min-w-[200px] sm:mb-0 mb-[30px]">
                          <div className="flex items-center rtl:max-sm:justify-end gap-4">
                            <span className="text-[11px] 2xl:text-[14px] 3xl:text-[16px] text-black font-medium uppercase">
                              {currentCar.name} Models:
                            </span>
                            <Select
                              value={selectedModelKey}
                              onValueChange={setSelectedModelKey}
                            >
                              <SelectTrigger className="!text-[11px] md:!text-[12px] 2xl:!text-[14px] max-w-full min-h-[35px] lg:min-h-[40px] 2xl:min-h-[50px] px-6 border border-[#CCCCCC] text-[#000000] w-[150px] lg:w-[200px] bg-[#F8F9FD] rounded-full font-medium">
                                <SelectValue placeholder="Select model" />
                              </SelectTrigger>
                              <SelectContent className="3xl:text-[18px] 2xl:text-[16px] md:text-[12px] text-[10px] bg-white border border-[#CCCCCC] rounded-md shadow-md font-medium text-[#1D0A44]">
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
                      <div className="relative mt-10 pointer-events-none 3xl:max-w-[850px] xl:max-w-[650px] lg:max-w-[600px] max-w-[550px] m-auto sm:pt-[80px]">
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
                          <div className="absolute sm:top-[-30%] top-[-25%] left-0 right-0 m-auto  w-full lg:max-w-[350px] max-w-[250px] z-[-1]">
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
                                      <div className="text-[13px] 2xl:text-[14px] leading-[1] font-semibold text-black whitespace-nowrap mx-auto absolute z-1 left-0 right-0 bottom-[-25px] sm:bottom-[-30px] flex justify-center">
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
