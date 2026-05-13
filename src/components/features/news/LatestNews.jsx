"use client";

import parse from "html-react-parser";
import { Heading } from "@/components/layout/Heading";
import Image from "next/image";
import Link from "next/link";
import { Text } from "@/components/layout/Text";



export default function LatestNews({ data }) {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 w-full mt-[20px] gap-[14px] xl:gap-[25px] 2xl:gap-[30px]">
          {/* News 1 */}
          <Link
            href={`/news/${data[0]?.slug}`}
            className="flex flex-col h-full"
          >
            <div className="relative aspect-[573/272] shrink-0">
              <Image
                src="/images/latestNews1.png"
                alt="latestNews1"
                fill
                className="object-cover rounded-[10px]"
              />
            </div>
            <div className="flex flex-col justify-center gap-[4px] lg:gap-[6px] xl:gap-[8px] py-[13px] lg:py-[18px] 2xl:py-[26px]">
              <Heading
                as={"h5"}
                size={"heading5"}
                className=" text-black leading-[1.2] font-semibold">
                {data[0]?.title}
              </Heading>
              <p className="text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[18px] text-gray-400">
                {data[0]?.date}
              </p>
              <div className="text-[11px] lg:text-[12px] xl:text-[13px] text-gray-600 leading-[1.4] line-clamp-2`">
                {parse(data[0]?.description)}{" "}
              </div>
            </div>
          </Link>

          {/* News 2 and News 3 */}
          <div className="grid grid-rows-2 sm:grid-cols-1 sm:grid-rows-2 gap-[14px] xl:gap-[25px] 2xl:gap-[30px]">
            {/* News 2 */}
            <NewsSectionCard news={data[1]} />
            {/* News 3 */}
            <NewsSectionCard news={data[2]} />
          </div>
        </div>
      </div>
    </div>
  );
}

function NewsSectionCard({ news }) {
  return (
    <Link href={`/news/${news?.slug}`} className="flex gap-4">
      <div className="relative aspect-[274/210]">
        <Image
          src="/images/latestNews2.png"
          alt="latestNews2"
          fill
          className="rounded-[10px] object-cover"
        />
      </div>

      <div className="flex flex-col justify-between py-[16px] lg:py-[21px] xl:py-[27px] 2xl:py-[32px]">
        <Heading
          as={"h4"}
          size={"heading5"}
          className="text-black font-semibold  max-w-[298px]"
        >
          {news?.title}
        </Heading>
        <Text
          as="div"
          size="text1"
          className="text-[#434343] [&_p]:mb-[15px] xl:[&_p]:mb-[25px] 2xl:[&_p]:mb-[30px] 3xl:[&_p]:mb-[35px]"
        >
          {news?.date}
        </Text>
        <div className="text-[11px] lg:text-[12px] xl:text-[13px] text-gray-600 leading-[1.4] line-clamp-2">
          {parse(news?.description)}
        </div>
      </div>
    </Link>
  );
}
