
"use client";

import parse from "html-react-parser";
import { Heading } from "@/components/layout/Heading";
import Image from "next/image";

const newsData = {
  title: "Latest News",
  news: [
    {
      img: "/images/latestNews1.png",
      date: "29.01.2025",
      title: "Ford Explorer: An Outstanding Companion",
      Description: `<p>Available with plenty of features the Ford Explorer has a lot to
                offer if you're shopping for a three-row crossover SUV. Its
                outstanding quietness</p>`,
    },
    {
      img: "/images/latestNews2.png",
      date: "29.01.2025",
      title: "Ford Explorer: An Outstanding Companion",
      Description: `<p>Available with plenty of features the Ford Explorer has a lot to
                offer if you're shopping for a three-row crossover SUV. Its
                outstanding quietness</p>`,
    },
    {
      img: "/images/latestNews3.png",
      date: "29.01.2025",
      title: "Ford Explorer: An Outstanding Companion",
      Description: `<p>Available with plenty of features the Ford Explorer has a lot to
                offer if you're shopping for a three-row crossover SUV. Its
                outstanding quietness</p>`,
    },
  ],
};

export default function NewsCard({news}) {
  return (
    <div className="w-full h-auto">
      <div className="w-full aspect-[67/51] h-[163px] lg:h-[218px] xl:h-[272px] 2xl:h-[326px] shrink-0 relative mb-[10px] md:mb-[15px] xl:mb-[18px] 2xl:mb-[21px]">
        <Image
          src="/images/latestNews1.png"
          alt="latestNews1"
          fill
          className="object-cover rounded-[10px]"
        />
      </div>

      <div className="flex flex-col justify-between">
      <Heading
        as={"h3"}
        size={"heading4"}
        className=" text-black leading-[1.2] font-normal text-[10px] lg:text-[13px] xl:text-[16px] 2xl:text-[20px] "
      >
        {news?.title}
      </Heading>
      <p className="text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[18px] text-gray-400">
        {news?.date}
      </p>
      <div className="text-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[17px] text-gray-600 leading-[1.4]  line-clamp-2">
        {parse(news?.description)}
      </div>
      </div>
    </div>
  );
}
