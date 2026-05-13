"use client";

import { useState } from "react";
import NewsCard from "./NewsCard";

export default function NewsCardList({ data }) {
  const [visibleCount, setVisibleCount] = useState(9);

  console.log("data", data);
  const hasMore = visibleCount < (data?.length ?? 0);

  return (
    <div className="container mb-[44px] xl:mb-[58px] xl:mb-[72px] 2xl:mb-[86px]">
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4">
        {data?.map((item, index) => (
          <NewsCard key={index} news={item} />
        ))}
      </div>

      {hasMore && (
        <p
          onClick={() => setVisibleCount((prev) => prev + 9)}
          className="font-bold text-[8px] lg:text-[10px] xl:text-[14px] 2xl:text-[15px] text-[#1577F0] cursor-pointer w-full text-center mt-[25px] lg:mt-[35px] xl:mt-[44px] 2xl:mt-[52px]"
        >
          Load More...
        </p>
      )}
    </div>
  );
}
