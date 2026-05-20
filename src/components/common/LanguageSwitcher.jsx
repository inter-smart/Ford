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
  const flagSrc      = locale === "en" ? "/images/ar.png" : "/images/uk.png";
  const flagAlt      = locale === "en" ? "Arabic" : "English";
  const label        = locale === "en" ? "AR" : "ENG";

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="3xl:text-[16px] 2xl:text-[14px] text-[12px] text-white font-medium
        ltr:mx-[85px_10px] rtl:mx-[10px_85px]
        flex items-center gap-2 cursor-pointer"
      onClick={() => handleLocaleChange(targetLocale)}
      aria-label={`Switch to ${flagAlt}`}
      disabled={isSwitching}
    >
      {/* Flag + spinner ring */}
      <div className="relative w-[20px] h-[18px] flex items-center justify-center">
        {isSwitching && (
          <motion.div
            className="absolute inset-[-5px] rounded-full border-2 border-white/60 border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
          />
        )}
        <motion.div
          animate={isSwitching ? { scale: 0.75, opacity: 0.5 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          <Image
            src={flagSrc}
            alt={flagAlt}
            width={20}
            height={18}
            className="w-[20px] h-[18px] object-contain"
          />
        </motion.div>
      </div>

      {/* Label */}
      <motion.span
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="relative h-full px-[10px]
          after:absolute after:content-[''] after:left-0 after:top-0 after:bottom-0
          after:w-[6px] after:h-[6px] after:rounded-full after:m-auto after:bg-white"
      >
        {label}
      </motion.span>
    </motion.button>
  );
}
