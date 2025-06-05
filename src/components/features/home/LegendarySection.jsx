"use client";
import React, { useState, useEffect } from "react";
import { Heading } from "@/components/layout/Heading";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const categories = [
  { name: "Cars", icon: "/images/trucks_icon.svg" },
  { name: "SUVs", icon: "/images/suv_icon.svg" },
  { name: "Trucks", icon: "/images/trucks_icon.svg" },
  { name: "Performance", icon: "/images/performance_icon.svg" },
];

const cars = [
  {
    key: "mustang",
    name: "Mustang®",
    tagline: "MUSTANG® GT 5.0",
    image: "/images/blackMustag.png",
    video: "/videos/varientVideos.mp4",
    category: "Cars",
    models: ["GT PREMIUM 5.0", "GT BASE 5.0"],
    colors: [
      { code: "#0066cc", image: "/images/car2.png" },
      { code: "#000000", image: "/images/car1.png" },
      { code: "#d40000", image: "/images/car4.png" },
      { code: "#cccccc", image: "/images/car3.png" },
      { code: "#aaaaaa", image: "/images/blackMustag.png" },
    ],
  },
  {
    key: "taurus1",
    name: "Taurus",
    tagline: "Luxury Comfort",
    image: "/images/car3.png",
    category: "Cars",
    models: ["SE", "SEL", "Titanium"],
    colors: [
      { code: "#0066cc", image: "/images/car2.png" },
      { code: "#000000", image: "/images/car1.png" },
      { code: "#d40000", image: "/images/car4.png" },
      { code: "#cccccc", image: "/images/car3.png" },
    ],
  },
  {
    key: "taurus2",
    name: "Taurus",
    tagline: "Luxury Comfort",
    image: "/images/car2.png",
    category: "SUVs",
    models: ["SE", "SEL", "Titanium"],
    colors: [
      { code: "#333333", image: "/images/colors/taurus-dark.png" },
      { code: "#aaaaaa", image: "/images/colors/taurus-light.png" },
    ],
  },
];

export default function LegendarySection() {
  const [selectedCategory, setSelectedCategory] = useState("Cars");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedColorImage, setSelectedColorImage] = useState("");

  const filteredCars = cars.filter((car) => car.category === selectedCategory);

  // Reset model and color when category changes
  useEffect(() => {
    const defaultCar = filteredCars[0];
    if (defaultCar) {
      setSelectedModel(defaultCar.models[0]);
      setSelectedColorImage(defaultCar.colors[0].image);
    } else {
      setSelectedModel("");
      setSelectedColorImage("");
    }
  }, [selectedCategory]);

  return (
    <section className="w-full relative z-0 py-[120px_40px]">
      <div className="container">
        <Heading size="heading3" as="h2" className="text-black mb-[45px]">
          Discover Ford's Legendary Line up
        </Heading>
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Sidebar */}
          <div className="w-full lg:w-[200px] flex lg:flex-col gap-4">
            {categories.map((item) => (
              <button
                key={item.name}
                onClick={() => setSelectedCategory(item.name)}
                className={`group text-[14px] text-black h-[40px] w-full flex items-center gap-2 px-4 py-2 rounded-full border border-[#E8E8E8] transition-all cursor-pointer ${selectedCategory === item.name
                  ? "bg-[#1577F0] text-white"
                  : "bg-[#F8F9FD] text-black hover:bg-[#1577F0] hover:text-white"
                  }`}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={20}
                  height={20}
                  className={`w-[40px] h-[40px] transition duration-300 ${selectedCategory === item.name
                    ? "invert group-hover:brightness-100"
                    : "brightness-[0.3] group-hover:brightness-100 group-hover:invert"
                    }`}
                />
                {item.name}
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="flex-1 w-[calc(100%-200px)] pl-[50px]">
            {filteredCars.length === 0 ? (
              <div className="text-gray-400 text-center text-[18px] font-medium py-10">
                No items to display for{" "}
                <span className="font-semibold">{selectedCategory}</span>.
              </div>
            ) : (
              <Tabs defaultValue={filteredCars[0]?.key} className="w-full">
                <TabsList className="bg-transparent gap-6 mb-[45px] p-0">
                  {filteredCars.map((car) => (
                    <TabsTrigger
                      key={car.key}
                      value={car.key}
                      className="flex flex-col items-center gap-1 border-b-2 border-transparent shadow-none h-auto ring-0 cursor-pointer relative
                      after:absolute after:content-[''] after:bottom-0 after:left-0 after:right-0 after:h-[3px] after:m-auto after:bg-transparent
                      data-[state=active]:after:bg-[#0052FF] data-[state=active]:after:w-full
                      data-[state=active]:text-black rounded-none
                      data-[state=active]:shadow-none 
                      text-gray-500 px-2 pb-2"
                      onClick={() => {
                        setSelectedModel(car.models[0]);
                        setSelectedColorImage(car.colors[0].image);
                      }}
                    >
                      <Image
                        src={car.image}
                        alt={car.name}
                        width={80}
                        height={50}
                        className="max-w-[90px] mb-[10px]"
                      />
                      <span className="text-[16px] font-medium text-[#00142E]">
                        {car.name}
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                {filteredCars.map((car) => (
                  <TabsContent key={car.key} value={car.key} className="mt-0 relative">
                    <div className="flex flex-col xl:flex-row justify-between gap-6 absolute top-0 left-0 w-full">
                      <div>
                        {/* heading */}
                        <Heading
                          size="heading1"
                          as="h2"
                          className="text-black font-medium mb-[35px] max-w-[360px]"
                        >
                          {car.tagline}
                        </Heading>
                        {/* broucher link */}
                        <Link
                          href="#"
                          className="text-[14px]  text-[#1577F0] font-medium inline-block border border-[#1577F0] px-6 py-3 
                          rounded-full hover:bg-[#0052FF] hover:text-white transition mb-10"
                        >
                          Download Brochure
                        </Link>
                      </div>

                      <div className="flex flex-col gap-4 relative top-[-90px]">
                        {/* category selection */}
                        <div className="flex items-center gap-4">
                          <span className="text-[16px] text-black font-medium uppercase">
                            {car.name} Models:
                          </span>
                          <Select value={selectedModel} onValueChange={setSelectedModel}>
                            <SelectTrigger
                              className="!text-[14px] max-w-full min-h-[50px] px-6 border border-[#CCCCCC]
                              text-[#000000] w-[200px] bg-[#F8F9FD] rounded-full 
                              font-medium outline-none shadow-none transition-all cursor-pointer 
                              flex items-center justify-between relative
                              data-[state=open]:border-[#00095b] 
                              data-[state=open]:shadow-lg 
                              data-[state=open]:shadow-[#1577F0]/0"
                            >
                              <SelectValue placeholder="Select model" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border border-[#CCCCCC] rounded-md shadow-md text-[18px] font-medium text-[#1D0A44]">
                              {car.models.map((model) => (
                                <SelectItem
                                  key={model}
                                  value={model}
                                  className="py-[10px] px-4 hover:bg-[#00095b] focus:bg-[#1D0A44] focus:text-white cursor-pointer"
                                >
                                  {model}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        {/* video or images for selected cars */}
                        <div className="absolute top-[130px] right-[100px] w-full h-[130px] max-w-[230px] shadow-md">
                          <div className="rounded-md  border border-gray-200 w-full h-full overflow-hidden ">
                            {car.video ? (

                              <video
                                autoPlay
                                preload="auto"
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                                key={car.video} // To ensure re-render when video changes
                              >
                                <source src={car.video} type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>
                            ) : (
                              <Image
                                src={selectedColorImage || car.image}
                                alt={car.name}
                                fill
                                style={{ objectFit: "contain" }}
                                className="rounded-md"
                              />

                            )}
                          </div>
                          <button className="w-[20px] h-[20px] rounded-full bg-[#D9D9D9] p-[6px] flex 
                          items-center justify-center absolute top-[-18px] right-[-18px] hover:bg-[#00095b] group hover:text-white cursor-pointer">
                            <svg viewBox="0 0 329.26933 329" className="group-hover:fill-white" >
                              <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 
                            10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"></path>
                            </svg>
                          </button>
                        </div>
                        {/* color selection */}
                        <div className="mt-[50px]">
                          <p className="text-[16px] font-medium text-right  mb-5">Colors</p>
                          <div className="flex flex-col items-end gap-2 flex-wrap">
                            {car.colors.map((color, i) => {
                              const isSelected = selectedColorImage === color.image;
                              return (
                                <button
                                  key={i}
                                  onClick={() => setSelectedColorImage(color.image)}
                                  className={`w-[16px] h-[16px] rounded-full border border-gray-300 cursor-pointer mb-[8px] relative flex items-center justify-center ${isSelected ? "bg-transparent" : ""
                                    }`}
                                  style={{ backgroundColor: isSelected ? "transparent" : color.code, border: `1px solid ${color.code}`}}
                                  aria-label={`Select color ${color.code}`}
                                >
                                  {isSelected && (
                                    <span
                                      className="absolute top-0 left-0 right-0 bottom-0 m-auto w-[10px] h-[10px] rounded-full"
                                      style={{ backgroundColor: color.code }}
                                    />
                                  )}
                                </button>
                              );
                            })}
                            {car.colors.length > 6 && (
                              <span className="text-xs text-gray-400">+{car.colors.length - 6}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Main car image */}
                    < div className="relative mt-10 pointer-events-none max-w-[800px m-auto] pt-[100px]" >
                      <Image
                        src={selectedColorImage || car.image}
                        alt={car.name}
                        width={1000}
                        height={500}
                        className="w-full max-w-5xl mx-auto object-contain"
                      />
                      <div
                        className="absolute top-[30%] left-[5%] opacity-5 w-[300px] h-[300px] bg-no-repeat bg-contain bg-[url('/images/horse-bg.svg')]"
                      />
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            )}
          </div>
        </div>
      </div >
    </section >
  );
}
