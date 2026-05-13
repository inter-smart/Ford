"use client";

import parse from "html-react-parser";
import { Heading } from "@/components/layout/Heading";
import Image from "next/image";
import Link from "next/link";
import { Text } from "@/components/layout/Text";


export default function NewsCard({ news, page = "" }) {
  return (
    <Link href={`/news/${news?.slug}`} className="w-full h-auto">
      <div className="w-full aspect-[403/306] h-[200px] lg:h-[218px] xl:h-[272px] 2xl:h-[326px] shrink-0 relative mb-[10px] md:mb-[15px] xl:mb-[18px] 2xl:mb-[21px]">
        <Image
          src={news?.img}
          alt="latestNews1"
          fill
          className="object-cover rounded-[10px]"
        />
      </div>

      <div className="">
        <Heading
          as={"h5"}
          size={"heading4"}
          className="leading-[1.5]  font-semibold text-[#00142E]"
        >
          {news?.title}
        </Heading>
        <p className="text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[18px] text-[#838383] my-1 md:my-2 font-semibold">
          {news?.date}
        </p>
        {page !== "news_detail" && (
          <Text
            size="text2"
            as="div"
            dangerouslySetInnerHTML={{
              __html: news?.description,
            }}
            className="text-[#434343]"
          ></Text>
        )}
      </div>
    </Link>
  );
}
