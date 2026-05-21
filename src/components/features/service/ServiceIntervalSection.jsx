import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import Link from "next/link";
import { cn } from "@/lib/utils";
import parse from "html-react-parser";

export default function ServiceIntervalSection({ data }) {
  return (
    <section className="w-full h-auto block py-5 sm:py-[30px] xl:py-[37px] 2xl:py-[45px] 3xl:py-[55px]">
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
          className="text-black [&_p]:mb-[15px] xl:[&_p]:mb-[25px] 2xl:[&_p]:mb-[30px] 3xl:[&_p]:mb-[35px] mb-[10px] xl:mb-[15px] 2xl:mb-[25px] 3xl:mb-[30px]"
        >
          {parse(data?.description)}
        </Text>
        <div>
          <Link
            href={data?.button?.link}
            className="text-[10px] xl:text-[12px] 2xl:text-[14.5px] 3xl:text-[18px] leading-[1] font-bold text-white w-max max-w-full h-[30px] xl:h-[35.5] 2xl:h-[42.6] 3xl:h-[53.4] py-2 px-[15px] xl:px-[18px] 2xl:px-[23px] 3xl:px-[28px] rounded-full bg-[#066FEF] cursor-pointer transition-all flex items-center justify-center hover:bg-[#005fd3]"
          >
            {data?.button?.label}
          </Link>
        </div>
        <div className="flex flex-wrap -mx-[5px] xl:-mx-[10px] 2xl:-mx-[12px] 3xl:-mx-[15px] mt-[20px] xl:mt-[60px] 2xl:mt-[80px] 3xl:mt-[100px]">
          {data?.items?.map((item, idx) => {
            return (
              <div
                key={"interval" + idx}
                className="w-full sm:w-1/2 p-[5px] xl:p-[10px] 2xl:p-[12px] 3xl:p-[15px]"
              >
                <div
                  className={cn(
                    "w-full h-full bg-[#00095b] rounded-[8px] 2xl:rounded-[10.6px] 3xl:rounded-[13.3px] p-[25px_20px] lg:p-[46px_41px] xl:p-[58px_51px] 2xl:p-[70px_62px] 3xl:p-[88px_77px] transition-all duration-300 border border-[#e5e5e5]",
                    idx === 0 ? "bg-[#00095b]" : "bg-[#066fef]",
                  )}
                >
                  <div className="text-[16px] sm:text-[21.3px] xl:text-[26.6px] 2xl:text-[32px] 3xl:text-[40px] leading-normal font-medium tracking-tight text-white mb-[20px] xl:mb-[25px] 2xl:mb-[30px] 3xl:mb-[35px]">
                    {item?.title}
                  </div>
                  <div className="typography [--text-color:#fff] [&_li]:list-image-[url('/images/list-icon-white.svg')] [&_p_b]:block">
                    {parse(item?.description)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
