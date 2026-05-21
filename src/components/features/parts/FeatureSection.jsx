import Image from "next/image";
import { Heading } from "@/components/layout/Heading";
import parse from "html-react-parser";

export default function FeatureSection({ data }) {
  return (
    <section className="w-full h-auto block py-[20px] md:py-[30px] xl:py-[40px] 2xl:py-[50px] 3xl:py-[60px] overflow-hidden">
      <div className="container">
        <Heading
          as="h2"
          size="heading1"
          className="mb-[15px] xl:mb-[20px] 2xl:mb-[25px]"
        >
          {data?.title}
        </Heading>
        <div className="flex flex-wrap -m-[5px] lg:-m-[10px] 2xl:-m-[12px] 3xl:-mx-[14px]">
          {data?.advice_list?.map((item, index) => (
            <div
              key={index}
              className="w-full 4xs:w-1/2 md:w-1/4 p-[5px] lg:p-[10px] 2xl:p-[12px] 3xl:p-[14px]"
            >
              <div className="w-full h-full relative bg-[#F7F7F7] rounded-[8px] 2xl:rounded-[10.6px] 3xl:rounded-[13.3px] p-[15px] md:p-[20px] lg-[35px_30px] xl:p-[30px_20px] 2xl:p-[35px_34px] 3xl:p-[40px_40px] flex flex-col overflow-hidden gap-[10px] lg:gap-[15px] xl:gap-[20px] 2xl:gap-[30px] 3xl:gap-[35px]">
                <div className="w-[35px] lg:w-[40px] xl:w-[43px] 2xl:w-[52px] 3xl:w-[60px]">
                  <Image
                    src={item?.icon?.url}
                    alt={item?.icon?.alt}
                    width={85}
                    height={85}
                    className="w-full object-contain"
                  />
                </div>
                <div className="realtive w-full">
                  <div className="text-[12px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[21px] leading-normal font-normal text-black text-black max-w-[350px]">
                    {parse(item?.title)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
