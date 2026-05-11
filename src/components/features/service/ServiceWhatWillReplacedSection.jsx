import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import { cn } from "@/lib/utils";
import parse from "html-react-parser";

export default function ServiceWhatWillReplacedSection({ data }) {
  return (
    <section className="w-full h-auto block py-5 sm:py-[30px] xl:py-[37px] 2xl:py-[45px] 3xl:py-[55px]">
      <div className="container">
        <Heading
          as="h2"
          size={"none"}
          className="text-[20px] lg:text-[27px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] leading-normal font-normal text-black mb-[25px] xl:mb-[32px] 2xl:mb-[40px] 3xl:mb-[50px]"
        >
          {data?.title}
        </Heading>
        <div className="flex flex-wrap -mx-[6px] xl:-mx-[8.5px] 2xl:-mx-[10.5px] 3xl:-mx-[13px]">
          {data?.items?.map((item, idx) => {
            return (
              <div
                key={"replaced" + idx}
                className={cn(
                  "w-full sm:w-1/4 p-[6px] xl:p-[8.5px] 2xl:p-[10.5px] 3xl:p-[13px]",
                  idx === 0 ? "w-full sm:w-1/2" : "",
                )}
              >
                <div
                  className={cn(
                    "w-full h-full border border-[#c4c4c4] rounded-[8px] 2xl:rounded-[10.6px] 3xl:rounded-[13.3px] p-[18px_15px] sm:p-[20px_18px] xl:p-[24px_22px] 2xl:p-[28px_26px] 3xl:p-[36px_33px] transition-all duration-300",
                  )}
                >
                  <div className="text-[14px] xl:text-[17.7px] 2xl:text-[21.3px] 3xl:text-[26.6px] leading-normal font-semibold text-[#066fef] mb-[6px] xl:mb-[7px] 2xl:mb-[8px] 3xl:mb-[15px]">
                    {item?.title}
                  </div>
                  <div className="flex flex-wrap -mx-[5px] 2xl:-mx-[10px]">
                    {item?.infoItems?.map((infoItem, infoIdx) => {
                      return (
                        <div
                          key={"infoItem" + infoIdx}
                          className={cn(
                            "p-[5px] 2xl:p-[10px]",
                            idx === 0 ? "w-full sm:w-1/4" : "w-full sm:w-1/2",
                          )}
                        >
                          <div className="text-[11.3px] xl:text-[14.2px] 2xl:text-[17px] 3xl:text-[21.3px] leading-normal font-normal text-black mb-[4px] 2xl:mb-[6px]">
                            {parse(infoItem?.title)}
                          </div>
                          <div className="text-[12.8px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[24px] leading-normal font-semibold text-black">
                            {parse(infoItem?.description)}
                          </div>
                        </div>
                      );
                    })}
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
