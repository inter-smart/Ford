"use client";
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
            onClick={scrollToTop}
            className={`
        z-50 flex items-center justify-center 2xl:w-[50px] w-[40px] 2xl:h-[50px] h-[40px] rounded-full border border-white/20 fixed lg:bottom-[60px] bottom-[30px] md:right-[60px] right-[15px]
        transition-opacity duration-300 ease-in-out cursor-pointer
        ${visible ? "opacity-100" : "opacity-0"}
        bg-[#00095B] hover:bg-white/10
      `}
            aria-label="Scroll to top"
        >
            <svg width="9" height="16" viewBox="0 0 9 16" >
                <path d="M4.60146 14.5664L4.60146 1.21885M4.60146 1.21885L1.04211 4.7782M4.60146 1.21885L8.16081 4.7782" stroke="white" strokeWidth="1.33476" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

        </button>
    );
}
