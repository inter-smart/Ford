"use client";
import React from "react";

import { motion } from "motion/react";

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
    "text-[26px] sm:text-[28px] lg:text-[48px] xl:text-[66px] 2xl:text-[87px] 3xl:text-[100px] font-medium leading-none",
  heading2:
    "text-[22px] sm:text-[24px] lg:text-[32px] xl:text-[53px] 2xl:text-[70px] 3xl:text-[80px] font-medium leading-none",
  heading3:
    "text-[14px] sm:text-[16px] lg:text-[20px] xl:text-[26px] 2xl:text-[35px] 3xl:text-[40px] font-medium leading-none",
  heading5:
    "text-[12px] sm:text-[14px] lg:text-[16px] xl:text-[20px] 2xl:text-[26px] 3xl:text-[30px] font-medium leading-none",
  heading6:
    "text-[10px] sm:text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[20px] font-medium leading-none",
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
