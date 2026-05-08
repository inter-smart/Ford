import Image from "next/image";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import Link from "next/link";
import { cn } from "@/lib/utils";
import parse from "html-react-parser";

export default function ServiceIntervalSection({ data }) {
  return (
    <section className="w-full h-auto block pt-5 sm:pt-[40px] xl:pt-[60px] 2xl:pt-[75px] 3xl:pt-[85px] pb-5 sm:pb-[40px] xl:pb-[60px] 2xl:pb-[75px] 3xl:pb-[85px] overflow-hidden">
      <div className="container">
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
          className="text-[black] [&_p]:mb-[15px] xl:[&_p]:mb-[25px] 2xl:[&_p]:mb-[30px] 3xl:[&_p]:mb-[35px] mb-[10px] xl:mb-[15px] 2xl:mb-[25px] 3xl:mb-[30px]"
        >
          {parse(data?.description)}
        </Text>
        <div>
          <Link
            href={data?.button?.link}
            className="text-[10px] xl:text-[12px] 2xl:text-[14.5px] 3xl:text-[18px] leading-[1] font-bold text-white w-max max-w-full h-[28.5] xl:h-[35.5] 2xl:h-[42.6] 3xl:h-[53.4] py-2 px-[10px] xl:px-[18px]  2xl:px-[23px] 3xl:px-[28px] rounded-full bg-[#066FEF] cursor-pointer transition-all flex items-center justify-center hover:bg-[#005fd3]"
          >
            {data?.button?.label}
          </Link>
        </div>

        <div className="flex flex-wrap">
          {data?.items?.map((item, idx) => {
            return (
              <div
                key={"interval" + idx}
                className="w-full p-[20px_15px] sm:p-[25px_20px] xl:p-[29px_25px] 2xl:p-[30px_35px] 3xl:p-[44px_38px] transition-all duration-300 border border-[#e5e5e5]"
              >
                <div className="text-[13px] sm:text-[14.2px] xl:text-[17.7px] 2xl:text-[21.3px] 3xl:text-[26.6px] leading-normal font-normal text-[#434343]">
                  {item?.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
