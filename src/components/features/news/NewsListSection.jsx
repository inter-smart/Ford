"use client";

import { useState } from "react";
import NewsCard from "./NewsCard";

export default function NewsListSection({ initialNews, totalPages }) {
  const [news, setNews] = useState(initialNews);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const hasMore = page < totalPages;

  const loadMore = async () => {
    setLoading(true);
    const nextPage = page + 1;
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/wp-json/ford/v1/news?page=${nextPage}`
      );
      const data = await res.json();
      setNews((prev) => [...prev, ...(data?.data?.news ?? [])]);
      setPage(nextPage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full h-auto block pt-[10px] sm:pt-[10px] xl:pt-[10px] 2xl:pt-[15px] 3xl:pt-[20px] pb-10 sm:pb-[40px] xl:pb-[66px] 2xl:pb-[80px] 3xl:pb-[100px]">
      <div className="container">
        <div className="flex flex-wrap -mx-[10px] lg:-mx-[15px] xl:-mx-[22px] 2xl:-mx-[27px] 3xl:-mx-[33.5px] [&>*]:p-[10px] lg:[&>*]:p-[15px] xl:[&>*]:p-[22px] 2xl:[&>*]:p-[27px] 3xl:[&>*]:p-[33.5px]">
          {news?.map((item, index) => (
            <div
              key={"newslisting-" + index}
              className="w-full min-[468px]:w-1/2 sm:w-1/2 lg:w-1/3"
            >
              <NewsCard variant="list" data={item} />
            </div>
          ))}

          {hasMore && (
            <div className="w-full flex justify-center mt-[15px] 2xl:mt-[20px] 3xl:mt-[25px]">
              <button
                onClick={loadMore}
                disabled={loading}
                className="text-[11px] xl:text-[12.4px] 2xl:text-[14.9px] 3xl:text-[18.6px] tracking-[-1%] leading-normal font-bold text-[#1577f0] hover:text-[#0065e0] transition-colors duration-300 ease-in-out disabled:opacity-50 cursor-pointer"
              >
                {loading ? "Loading..." : "Load More"}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
