"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export default function LanguageSwitcher({ locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isSwitching, setIsSwitching] = useState(false);

  const handleLocaleChange = (newLocale) => {
    if (isSwitching) return;
    setIsSwitching(true);
    const cleanPath = pathname.replace(/^\/(en|ar)/, "") || "/";
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.replace(`/${newLocale}${cleanPath}`);
  };

  const targetLocale = locale === "en" ? "ar" : "en";
  const flagSrc = locale === "en" ? "/images/ar.png" : "/images/uk.png";
  const flagAlt = locale === "en" ? "Arabic" : "English";
  const label = locale === "en" ? "AR" : "ENG";

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="text-[11px] lg:text-[12px] xl:text-[14.22px] 2xl:text-[17.1px] 3xl:text-[21.33px] leading-none font-normal tracking-tight text-white flex items-center gap-1 xl:gap-1.5 2xl:gap-2 cursor-pointer"
      onClick={() => handleLocaleChange(targetLocale)}
      aria-label={`Switch to ${flagAlt}`}
      disabled={isSwitching}
    >
      {/* Flag + spinner ring */}
      <div className="w-[20px] h-[18px] relative flex items-center justify-center">
        {isSwitching && (
          <motion.div
            className="absolute inset-[-5px] rounded-full border-2 border-white/60 border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
          />
        )}
        <motion.div
          animate={
            isSwitching
              ? { scale: 0.75, opacity: 0.5 }
              : { scale: 1, opacity: 1 }
          }
          transition={{ duration: 0.25 }}
        >
          <Image
            src={flagSrc}
            alt={flagAlt}
            width={20}
            height={18}
            className="w-[14px] lg:w-[16px] 2xl:w-[20px] h-auto object-contain"
          />
          {/* <Globe size={16} className="text-white/70" /> */}
        </motion.div>
      </div>

      <div className="w-[6px] h-[6px] rounded-full m-auto bg-white" />

      {/* Label */}
      <motion.span
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="mt-[1.5px] xl:mt-[2px]"
      >
        {label}
      </motion.span>
    </motion.button>
  );
}
