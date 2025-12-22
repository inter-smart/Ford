"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ColorSwitchSection({ data }) {
  const firstColorOption = data?.[0];
  const [activeVariation, setActiveVariation] = useState(
    firstColorOption?.variations?.[0] || null
  );
  const isActive = (variation) => activeVariation === variation;
  return (
    <section className="w-full h-auto py-[30px_60px] sm:py-[30px_80px] lg:py-[30px_100px] 2xl:py-[40px_130px] bg-[#F0F0F0] block relative z-0">
      <div className="container">
        <div className="text-[50px] sm:text-[80px] lg:text-[100px] xl:text-[130px] 2xl:text-[140px] 3xl:text-[160px] leading-[0.8] font-semibold uppercase text-center w-full h-auto mx-auto bg-[linear-gradient(0deg,#FFF_9.77%,#F0F0F0_100%)] bg-clip-text text-transparent absolute -z-2 left-0 right-0 bottom-0">
          {data?.car_name}
        </div>
        <div className="w-full h-auto">
          <motion.div
            key={activeVariation?.title}
            initial={{ opacity: 1, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full sm:w-[520px] lg:w-[620px] xl:w-[750px] 2xl:w-[850px] 3xl:w-[920px] h-auto aspect-[920/500] mx-auto mb-[20px] sm:mb-[30px] 2xl:mb-[50px] overflow-hidden flex items-center justify-center"
          >
            <Image
              src={activeVariation?.image?.url || "/images/placeholder.png"}
              alt={activeVariation?.image?.alt || "Car"}
              width={920}
              height={500}
              className="w-full object-contain"
            />
          </motion.div>
          <div className="w-full h-auto gap-[7px] sm:gap-[15px] 2xl:gap-[20px] 3xl:gap-[25px] flex items-center justify-center">
            {firstColorOption?.variations?.map((item, index) => (
              <div key={index} className="w-auto h-auto block relative z-0">
                <button
                  onClick={() => setActiveVariation(item)}
                  className="w-[20px] sm:w-[25px] 2xl:w-[30px] h-[20px] sm:h-[25px] 2xl:h-[30px] rounded-full relative z-0 flex items-center justify-center transition-all duration-300"
                  style={{
                    border: isActive(item)
                      ? "1px solid #000"
                      : "1px solid transparent",
                    backgroundColor: isActive(item) ? "#fff" : item?.color,
                  }}
                >
                  {isActive(item) && (
                    <span
                      className="w-[12px] sm:w-[15px] 2xl:w-[18px] h-[12px] sm:h-[15px] 2xl:h-[18px] rounded-full block"
                      style={{
                        backgroundColor: item?.color,
                      }}
                    />
                  )}
                </button>
                {isActive(item) && (
                  <div className="text-[13px] 2xl:text-[14px] leading-[1] font-normal text-black whitespace-nowrap mx-auto absolute z-1 left-0 right-0 bottom-[-25px] sm:bottom-[-30px] flex justify-center">
                    {item?.title}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
