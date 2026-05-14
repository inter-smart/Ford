import parse from "html-react-parser";
import { Heading } from "@/components/layout/Heading";
import Image from "next/image";
import Link from "next/link";
import NewsCard from "./NewsCard";

export default function LatestNewsSection({ data }) {
  const items = data?.items || [];
  const firstSetItem = items[0];
  const secondSetItems = items.slice(1, 3);
  const thirdSetItems = items.slice(3);

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
        <div className="flex flex-wrap -mx-[10px] xl:-mx-[12px] 2xl:-mx-[15px] 3xl:-mx-[18px] [&>*]:p-[10px] xl:[&>*]:p-[12px] 2xl:[&>*]:p-[15px] 3xl:[&>*]:p-[18px] lg:hidden">
          {items?.length > 0 &&
            items?.map((item, index) => (
              <div
                key={"latestnews" + index}
                className="w-full min-[468px]:w-1/2 sm:w-1/2 lg:w-1/3"
              >
                <NewsCard data={item} />
              </div>
            ))}
        </div>
        <div className="flex flex-wrap -mx-[10px] xl:-mx-[12px] 2xl:-mx-[15px] 3xl:-mx-[18px] [&>*]:p-[10px] xl:[&>*]:p-[12px] 2xl:[&>*]:p-[15px] 3xl:[&>*]:p-[18px] max-lg:hidden">
          {firstSetItem && (
            <div className="w-full sm:w-1/2">
              <NewsCard data={firstSetItem} />
            </div>
          )}

          {secondSetItems?.length > 0 && (
            <div className="w-full sm:w-1/2 flex flex-col gap-[20px] xl:gap-[24px] 2xl:gap-[30px] 3xl:gap-[36px]">
              {secondSetItems.map((secondSetItem, index) => (
                <div key={"newsecond" + index}>
                  <Link
                    href={
                      secondSetItem?.slug ? `/news/${secondSetItem.slug}` : "#"
                    }
                    className="w-full block group"
                  >
                    <div className="flex flex-wrap gap-[15px] xl:gap-[20px] 2xl:gap-[25px] 3xl:gap-[30px] items-center">
                      <div className="w-[120px] lg:w-[180px] xl:w-[244px] 2xl:w-[292px] 3xl:w-[365px] shrink-0">
                        <div className="w-full aspect-[244/180] rounded-[8px] 2xl:rounded-[10.6px] 3xl:rounded-[13.3px] overflow-hidden relative z-0">
                          {secondSetItem?.media?.url && (
                            <Image
                              src={secondSetItem.media.url}
                              alt={
                                secondSetItem?.media?.alt ||
                                secondSetItem?.title ||
                                "News"
                              }
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          )}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="text-[14px] xl:text-[16px] 2xl:text-[19.2px] 3xl:text-[24px] leading-normal font-semibold text-black mb-[4px] xl:mb-[6px] 2xl:mb-[10px] 3xl:mb-[15px]">
                          {secondSetItem?.title}
                        </div>
                        <div className="text-[11px] xl:text-[12.4px] 2xl:text-[14.9px] 3xl:text-[18.6px] leading-normal font-normal text-[#838383] mb-[4px] xl:mb-[6px] 2xl:mb-[10px] 3xl:mb-[15px]">
                          {secondSetItem?.date}
                        </div>
                        <div className="text-[11px] xl:text-[12.4px] 2xl:text-[14.9px] 3xl:text-[18.6px] leading-normal font-normal text-[#434343] line-clamp-2 xl:max-w-11/12">
                          {parse(secondSetItem?.description || "")}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}

          {thirdSetItems?.length > 0 &&
            thirdSetItems.map((thirdSetItem, index) => (
              <div
                key={"newthird" + index}
                className="w-full sm:w-1/2 lg:w-1/3"
              >
                <NewsCard data={thirdSetItem} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
