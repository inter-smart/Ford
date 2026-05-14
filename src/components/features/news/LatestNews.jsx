"use client";

import parse from "html-react-parser";
import { Heading } from "@/components/layout/Heading";
import Image from "next/image";
import Link from "next/link";
import { Text } from "@/components/layout/Text";
import NewsCard from "./NewsCard";

export default function LatestNews({ data }) {
  return (
    <section className="w-full h-auto block pt-10 sm:pt-[40px] xl:pt-[66px] 2xl:pt-[80px] 3xl:pt-[100px] pb-[10px] sm:pb-[15px] xl:pb-[23px] 2xl:pb-[33px] 3xl:pb-[41px]">
      <div className="container">
        <Heading
          as="h2"
          size={"none"}
          className="text-[18px] lg:text-[27px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] leading-normal font-semibold text-black mb-[10px] xl:mb-[15px] 2xl:mb-[20px] 3xl:mb-[25px]"
        >
          {data?.title}
        </Heading>
        <div className="flex flex-wrap -mx-[20px] xl:-mx-[30px] 2xl:-mx-[40px] 3xl:-mx-[100px] [&>*]:px-[20px] xl:[&>*]:px-[30px] 2xl:[&>*]:px-[40px] 3xl:[&>*]:px-[100px]">
          <div className="w-full sm:w-1/2">
            <Link href={firstItem?.link || "#"} className="w-full block">
              <div className="w-full aspect-[86/41] rounded-[8px] 2xl:rounded-[10.6px] 3xl:rounded-[13.3px] overflow-hidden relative z-0 mb-[15px] xl:mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px]">
                <Image
                  src={firstItem?.image}
                  alt={firstItem?.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-[14px] xl:text-[16px] 2xl:text-[19.2px] 3xl:text-[24px] leading-normal font-semibold text-black mb-[10px] xl:mb-[10px] 2xl:mb-[15px] 3xl:mb-[17px]">
                {firstItem?.name}
              </div>
              <div className="text-[11px] xl:text-[12.4px] 2xl:text-[14.9px] 3xl:text-[18.6px] leading-normal font-normal text-[#838383] mb-[10px] xl:mb-[10px] 2xl:mb-[15px] 3xl:mb-[17px]">
                {firstItem?.date}
              </div>
              <div className="flex items-center justify-between px-1">
                <Text
                  as="div"
                  size="text1"
                  className="font-semibold text-black"
                  animate={false}
                >
                  {firstItem?.name}
                </Text>
                <div className="text-[10px] xl:text-[11.4px] 2xl:text-[13.9px] 3xl:text-[13.6px] leading-none font-bold text-[#1577F0] flex items-center gap-1 hover:text-[#0061d8]">
                  Learn More
                  <Image
                    src="/images/fleet-icon.svg"
                    alt="fleet-icon"
                    width={10}
                    height={6}
                    className="w-[4px] 2xl:w-[5px] 3xl:w-[5.5px] block mt-[2px]"
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="w-full sm:w-1/2"></div>
        </div>
      </div>
    </section>
    // <div className="py-[40px_34px] lg:py-[53px_45px] xl:py-[66px_54px] 2xl:py-[80px_66px]">
    //   <div className="container">
    //     <Heading
    //       as="h1"
    //       size="heading1"
    //       className="text-[22px] sm:text-[24px] md:text-[28px] xl:text-[32px] 2xl:text-[38px] leading-[1] font-semibold text-black"
    //     >
    //       {data?.title}
    //     </Heading>

    //     {/* Mobile / tablet list view (< lg) */}
    //     <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 mt-[20px] xs:hidden">
    //       {data?.items?.map((item, index) => (
    //         <NewsCard key={index} news={item} />
    //       ))}
    //     </div>

    //     {/* Desktop layout (>= lg) */}
    //     <div className="hidden xs:grid grid-cols-2 w-full mt-[20px] gap-[14px] xl:gap-[25px] 2xl:gap-[30px]">
    //       {/* News 1 */}
    //       <Link
    //         href={`/news/${data?.items[0]?.slug}`}
    //         className="flex flex-col h-full"
    //       >
    //         <div className="relative aspect-[573/272] shrink-0">
    //           <Image
    //             src={data?.items[0]?.media?.url}
    //             alt={data?.items[0]?.media?.alt}
    //             fill
    //             className="object-cover rounded-[10px]"
    //           />
    //         </div>
    //         <div className="flex flex-col justify-center gap-[4px] lg:gap-[6px] xl:gap-[8px] py-[13px] lg:py-[18px] 2xl:py-[26px]">
    //           <Heading
    //             as={"h5"}
    //             size={"heading5"}
    //             className=" text-black font-semibold"
    //           >
    //             {data?.items[0]?.title}
    //           </Heading>
    //           <p className="text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[18px] text-gray-400">
    //             {data?.items[0]?.date}
    //           </p>
    //           <Text
    //             size="text2"
    //             as="div"
    //             dangerouslySetInnerHTML={{
    //               __html: data?.items[0]?.description || "",
    //             }}
    //             className="text-[#434343] mb-[15px]"
    //           ></Text>
    //         </div>
    //       </Link>

    //       {/* News 2 and News 3 */}
    //       <div className="grid grid-rows-2 sm:grid-cols-1 sm:grid-rows-2 gap-[14px] xl:gap-[25px] 2xl:gap-[30px]">
    //         {/* News 2 */}
    //         <NewsSectionCard news={data?.items[1]} />
    //         {/* News 3 */}
    //         <NewsSectionCard news={data?.items[2]} />
    //       </div>
    //     </div>
    //   </div>
    // </div>
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
          size="text2"
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
