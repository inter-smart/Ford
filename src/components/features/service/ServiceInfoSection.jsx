import Image from "next/image";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import Link from "next/link";
import { cn } from "@/lib/utils";
import parse from "html-react-parser";

export default function ServiceInfoSection({ data }) {
  return (
    <section className="w-full h-auto block pt-10 sm:pt-[60px] xl:pt-[80px] 2xl:pt-[97px] 3xl:pt-[120px] pb-5 sm:pb-[32px] xl:pb-[40px] 2xl:pb-[50px] 3xl:pb-[60px] overflow-hidden">
      <div className="container">
        <div className="flex gap-5 justify-between mb-[15px] xl:mb-[40px] 2xl:mb-[50px] 3xl:mb-[65px]">
          <div>
            <Heading
              as="h2"
              size={"none"}
              className="text-[18px] lg:text-[27px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] leading-normal font-semibold text-black mb-[15px] sm:mb-0"
            >
              {data?.sectionTitle}
            </Heading>
          </div>
          <div>
            <div className={cn("flex flex-wrap items-center")}>
              {data?.tabs?.map((item) => {
                const isActive = item?.slug === "/service";
                return (
                  <Link
                    key={item?.id}
                    href={item?.slug}
                    className={cn(
                      "text-[12px] sm:text-[14px] xl:text-[16px] 2xl:text-[19.2px] 3xl:text-[24px] leading-none font-normal rounded-full h-[30px] xl:h-[35.5px] 2xl:h-[42.5px] 3xl:h-[53.3px] p-[5px_15px_3px] xl:p-[7px_22px_5px] 2xl:p-[7px_26px] 3xl:p-[8px_32px_6px] bg-white border flex items-center justify-center transition-all duration-300",
                      isActive
                        ? "font-semibold text-black border-[#008dd2]"
                        : "border-white text-black hover:text-[#008dd2]",
                    )}
                  >
                    {item?.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-[20px] xl:-mx-[30px] 2xl:-mx-[40px] 3xl:-mx-[100px] [&>*]:px-[20px] xl:[&>*]:px-[30px] 2xl:[&>*]:px-[40px] 3xl:[&>*]:px-[100px]">
          <div className="w-full sm:w-1/2">
            <div className="w-full max-w-[320px] sm:max-w-[576px] lg:max-w-full aspect-[86/69] rounded-[8px] 2xl:rounded-[10.6px] 3xl:rounded-[13.3px] overflow-hidden mb-2 lg:mb-0">
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
            <div className="w-full xl:max-w-11/12">
              <Heading
                as="h2"
                size={"none"}
                className="text-[20px] lg:text-[27px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] leading-normal font-semibold text-black mb-[10px] xl:mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px] sm:mt-2.5 xl:mt-5"
              >
                {data?.title}
              </Heading>
              <div className="typography [--text-color:#000]">
                {parse(data?.description)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
