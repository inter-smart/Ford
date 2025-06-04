"use client";
import React from "react";

import { motion } from "framer-motion";

const textVariants = {
  offscreen: {
    y: 60,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "easeOuteaseOut",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const sizes = {
  heading1:
    "2xl:text-[54px] xl:text-[40px] lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-medium leading-[1.2]",
  heading2:
    "text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[24px] font-medium leading-[1.5]",
  heading3:
    "text-[14px] sm:text-[16px] lg:text-[20px] xl:text-[26px] 2xl:text-[35px] 3xl:text-[46px] font-medium leading-[1.5]",
  heading5:
    "text-[12px] sm:text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[26px] 3xl:text-[30px] font-medium leading-[1.5]",
  heading6:
    "text-[10px] sm:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-medium leading-[1.5]",
};

const Heading = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <motion.div
      variants={textVariants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
    >
      <Component className={`${className} ${sizes[size]}`} {...restProps}>
        {children}
      </Component>
    </motion.div>
  );
};

export { Heading };
