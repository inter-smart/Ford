import Image from "next/image";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import Link from "next/link";
import { cn } from "@/lib/utils";
import parse from "html-react-parser";

export default function ServiceInfoSection({ data }) {
  return (
    <section className="w-full h-auto block pt-5 sm:pt-[40px] xl:pt-[60px] 2xl:pt-[75px] 3xl:pt-[85px] pb-5 sm:pb-[40px] xl:pb-[60px] 2xl:pb-[75px] 3xl:pb-[85px] overflow-hidden">
      <div className="container">
        <div className="flex">
          <div>
            <Heading
              as="h2"
              size={"none"}
              className="text-[20px] lg:text-[27px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] leading-normal font-semibold text-black mb-[15px] xl:mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px]"
            >
              {data?.title}
            </Heading>
          </div>
          <div>
            <div className={cn("flex flex-wrap items-center")}>
              {data?.tabs?.map((item) => {
                const isActive = item?.slug === data?.activeTab;
                return (
                  <Link
                    key={item?.id}
                    href={item?.slug}
                    className={cn(
                      "text-[12px] sm:text-[14px] xl:text-[16px] 2xl:text-[19.2px] 3xl:text-[24px] leading-none font-normal rounded-full h-[35.5px] 2xl:h-[42.5px] 3xl:h-[53.3px] p-[5px_15px_3px] xl:p-[7px_22px_5px] 2xl:p-[7px_26px] 3xl:p-[8px_32px_6px] transition-all duration-300 border border-white",
                      isActive
                        ? "font-semibold text-black border-[#008dd2]"
                        : "text-black hover:text-[#008dd2]",
                    )}
                  >
                    {item?.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center -mx-[20px] xl:-mx-[30px] 2xl:-mx-[40px] 3xl:-mx-[100px] [&>*]:px-[20px] xl:[&>*]:px-[30px] 2xl:[&>*]:px-[40px] 3xl:[&>*]:px-[100px]">
          <div className="w-full sm:w-1/2">
            <div className="w-full max-w-[320px] sm:max-w-[576px] lg:max-w-full aspect-[610/376]  overflow-hidden mb-2 lg:mb-0">
              <Image
                src={data?.media?.url}
                alt={data?.media?.alt}
                width={607}
                height={226}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <Heading
              as="h2"
              size={"none"}
              className="text-[20px] lg:text-[27px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] leading-normal font-semibold text-black mb-[15px] xl:mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px]"
            >
              {data?.title}
            </Heading>
            <Text
              as="div"
              size="text1"
              className="text-[black] [&_p]:mb-[15px] xl:[&_p]:mb-[25px] 2xl:[&_p]:mb-[30px] 3xl:[&_p]:mb-[35px]"
            >
              {parse(data?.description)}
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}
