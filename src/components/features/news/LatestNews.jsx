
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
      slug: "news",
      title: "Ford Explorer: An Outstanding Companion",
      description: `<p>Available with plenty of features the Ford Explorer has a lot to
                offer if you're shopping for a three-row crossover SUV. Its
                outstanding quietness</p>`,
    },
    {
      img: "/images/latestNews2.png",
      date: "29.01.2025",
      slug: "news",
      title: "Ford Explorer: An Outstanding Companion",
      description: `<p>Available with plenty of features the Ford Explorer has a lot to
                offer if you're shopping for a three-row crossover SUV. Its
                outstanding quietness</p>`,
    },
    {
      img: "/images/latestNews1.png",
      date: "29.01.2025",
      slug: "news",
      title: "Ford Explorer: An Outstanding Companion",
      description: `<p>Available with plenty of features the Ford Explorer has a lot to
                offer if you're shopping for a three-row crossover SUV. Its
                outstanding quietness</p>`,
    },
    {
      img: "/images/latestNews2.png",
      date: "29.01.2025",
      slug: "news",
      title: "Ford Explorer: An Outstanding Companion",
      description: `<p>Available with plenty of features the Ford Explorer has a lot to
                offer if you're shopping for a three-row crossover SUV. Its
                outstanding quietness</p>`,
    },
    {
      img: "/images/latestNews1.png",
      date: "29.01.2025",
      slug: "news",
      title: "Ford Explorer: An Outstanding Companion",
      description: `<p>Available with plenty of features the Ford Explorer has a lot to
                offer if you're shopping for a three-row crossover SUV. Its
                outstanding quietness</p>`,
    },
    {
      img: "/images/latestNews2.png",
      date: "29.01.2025",
      slug: "news",
      title: "Ford Explorer: An Outstanding Companion",
      description: `<p>Available with plenty of features the Ford Explorer has a lot to
                offer if you're shopping for a three-row crossover SUV. Its
                outstanding quietness</p>`,
    },
    {
      img: "/images/latestNews1.png",
      date: "29.01.2025",
      slug: "news",
      title: "Ford Explorer: An Outstanding Companion",
      description: `<p>Available with plenty of features the Ford Explorer has a lot to
                offer if you're shopping for a three-row crossover SUV. Its
                outstanding quietness</p>`,
    },
    {
      img: "/images/latestNews2.png",
      date: "29.01.2025",
      slug: "news",
      title: "Ford Explorer: An Outstanding Companion",
      description: `<p>Available with plenty of features the Ford Explorer has a lot to
                offer if you're shopping for a three-row crossover SUV. Its
                outstanding quietness</p>`,
    },
    {
      img: "/images/latestNews3.png",
      slug: "news",
      date: "29.01.2025",
      title: "Ford Explorer: An Outstanding Companion",
      description: `<p>Available with plenty of features the Ford Explorer has a lot to
                offer if you're shopping for a three-row crossover SUV. Its
                outstanding quietness</p>`,
    },
  ],
};

export default function LatestNews({data=newsData}) {
  return (
    <div className="py-[40px_34px] lg:py-[53px_45px] xl:py-[66px_54px] 2xl:py-[80px_66px]">
      <div className="container">
        <Heading
          as="h1"
          size="heading1"
          className="text-[22px] sm:text-[24px] md:text-[28px] xl:text-[32px] 2xl:text-[38px] leading-[1] font-semibold text-black"
        >
          Latest News
        </Heading>

        <div className="grid grid-cols-1 sm:grid-cols-2 w-full lg:h-[320px] xl:h-[399px] 2xl:h-[478px] 3xl:h-[557px] mt-[20px] gap-[14px] xl:gap-[25px] 2xl:gap-[30px]">
          {/* News 1 */}
          <Link href={`/news/${data?.news[0]?.slug}`} className="flex flex-col h-full">
            <div className="relative w-full h-[163px] lg:h-[218px] xl:h-[272px] 2xl:h-[326px] shrink-0">
              <Image
                src="/images/latestNews1.png"
                alt="latestNews1"
                fill
                className="object-cover rounded-[10px]"
              />
            </div>
            <div className="flex flex-col justify-center gap-[4px] lg:gap-[6px] xl:gap-[8px] py-[13px] lg:py-[18px] 2xl:py-[26px]">
              <Heading
                as={"h4"}
                size={"heading4"}
                className=" text-black leading-[1.2] font-normal"
              >
                {data?.news[0]?.title}
              </Heading>
              <p className="text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[18px] text-gray-400">
                {data?.news[0]?.date}
              </p>
              <div className="text-[11px] lg:text-[12px] xl:text-[13px] text-gray-600 leading-[1.4]">
                {parse(data?.news[0]?.description)
}              </div>
            </div>
          </Link>

          {/* News 2 and News 3 */}
          <div className="grid grid-rows-2 sm:grid-cols-1 sm:grid-rows-2 gap-[14px] xl:gap-[25px] 2xl:gap-[30px]">
            {/* News 2 */}
            <NewsSectionCard news={data?.news[1]} />
            {/* News 3 */}
            <NewsSectionCard news={data?.news[2]} />
          </div>
        </div>



      </div>
    </div>
  );
}

function NewsSectionCard({news}) {
  return (
    <Link href={`/news/${news?.slug}`} className="flex gap-4">
      <div className="relative aspect-square xl:aspect-[3/2]">
        <Image
          src="/images/latestNews2.png"
          alt="latestNews2"
          fill
          className="rounded-[10px] object-cover"
        />
      </div>

      <div className="flex flex-col justify-between py-2 xl:py-4">
        <Heading
          as={"h4"}
          size={"heading4"}
          className="text-black font-normal"
        >
          {news?.title}
        </Heading>
        <p className="text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[18px] text-gray-400">
          {news?.date}
        </p>
        <div className="text-[11px] lg:text-[12px] xl:text-[13px] text-gray-600 leading-[1.4] line-clamp-1  lg:line-clamp-2">
            {parse(news?.description)}
        </div>
      </div>
    </Link>
  );
}
