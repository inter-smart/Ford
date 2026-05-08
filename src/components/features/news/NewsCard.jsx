"use client";

import parse from "html-react-parser";
import { Heading } from "@/components/layout/Heading";
import Image from "next/image";
import Link from "next/link";

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

export default function NewsCard({ news = newsData, page="" }) {
  return (
    <Link href={`/news/${news?.slug}`} className="w-full h-auto">
      <div 
      className="w-full aspect-[403/306] h-[200px] lg:h-[218px] xl:h-[272px] 2xl:h-[326px] shrink-0 relative mb-[10px] md:mb-[15px] xl:mb-[18px] 2xl:mb-[21px]">
        <Image
          src={news?.img}
          alt="latestNews1"
          fill
          className="object-cover rounded-[10px]"
        />
      </div>

      <div className="">
        <Heading
          as={"h3"}
          size={"heading3"}
          className="text-[10px] lg:text-[13px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[22px] leading-[1.5] font-semibold text-[#00142E]"
        >
          {news?.title}
        </Heading>
        <p className="text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[18px] text-[#838383] my-1 md:my-2 font-semibold">
          {news?.date}
        </p>
        {page !== "news_detail" &&
        <div className="text-[#838383] text-[8px] lg:text-[10px] xl:text-[13px] 2xl:text-[15px] mt-[5px]">
          {parse(news?.description)}
        </div>
        }
      </div>
    </Link>
  );
}
