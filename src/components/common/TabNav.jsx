import Link from "next/link";
import { cn } from "@/lib/utils";

const linkClass =
  "text-[12px] sm:text-[14px] xl:text-[16px] 2xl:text-[19.2px] 3xl:text-[24px] leading-none font-normal capitalize rounded-full h-[30px] xl:h-[35.5px] 2xl:h-[42.5px] 3xl:h-[53.3px] p-[5px_15px_3px] xl:p-[7px_24px_5px] 2xl:p-[7px_26px] 3xl:p-[8px_32px_6px] bg-white border flex items-center justify-center transition-all duration-300";

const activeClass =
  "font-semibold text-black border-[#008dd2]";
const inactiveClass =
  "border-white text-black hover:text-[#008dd2]";

export default function TabNav({ tabs, activeSlug }) {
  return (
    <div className={cn("flex flex-wrap items-center")}>
      {tabs?.map((item, idx) => {
        const isActive = item?.slug === activeSlug;
        return (
          <Link
            key={"tab-nav-" + idx}
            href={item?.slug}
            className={cn(linkClass, isActive ? activeClass : inactiveClass)}
          >
            {item?.title}
          </Link>
        );
      })}
    </div>
  );
}
