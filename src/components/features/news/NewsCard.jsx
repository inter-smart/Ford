import { cn } from "@/lib/utils";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";

export default function NewsCard({ data, variant = "default" }) {
  return (
    <Link
      href={data?.slug ? `/news/${data?.slug}` : "#"}
      className="w-full block group"
    >
      <div
        className={cn(
          "w-full aspect-[244/180] lg:aspect-[86/41] rounded-[8px] 2xl:rounded-[10.6px] 3xl:rounded-[13.3px] overflow-hidden relative z-0 mb-[10px] lg:mb-[15px] xl:mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px]",
          variant == "list" && "aspect-[244/180] lg:aspect-[537/408]",
        )}
      >
        {data?.media?.url && (
          <Image
            src={data?.media.url}
            alt={data?.media?.alt || data?.title || "News"}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
      </div>
      <div className="text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[19.2px] 3xl:text-[24px] leading-normal font-semibold tracking-[-1%] text-black mb-[2px] lg:mb-[4px] 2xl:mb-[6px] 3xl:mb-[8px]">
        {data?.title}
      </div>
      <div className="text-[11px] xl:text-[12.4px] 2xl:text-[14.9px] 3xl:text-[18.6px] leading-normal font-normal text-[#838383] mb-[2px] lg:mb-[4px] 2xl:mb-[6px] 3xl:mb-[8px]">
        {data?.date}
      </div>
      <div className="text-[11px] xl:text-[12.4px] 2xl:text-[14.9px] 3xl:text-[18.6px] leading-normal font-normal text-[#434343] line-clamp-2 xl:max-w-11/12">
        {parse(data?.description || "")}
      </div>
    </Link>
  );
}
