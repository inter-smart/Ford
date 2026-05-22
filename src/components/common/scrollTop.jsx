"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={cn(
        "w-[40px] xl:w-[50px] 2xl:w-[64px] 3xl:w-[80px] aspect-square flex items-center justify-center rounded-full border border-white/20 group transition-all duration-300 ease-in-out cursor-pointer bg-[#00095B] hover:border-white focus:ring-0 xl:-translate-y-[30%]",
        visible ? "opacity-100" : "opacity-0",
      )}
    >
      <svg
        width="9"
        height="16"
        viewBox="0 0 9 16"
        className="w-[8px] 2xl:w-[10px] 3xl:w-[12px] block stroke-white"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.60146 14.5664L4.60146 1.21885M4.60146 1.21885L1.04211 4.7782M4.60146 1.21885L8.16081 4.7782"
          strokeWidth="1.33476"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
