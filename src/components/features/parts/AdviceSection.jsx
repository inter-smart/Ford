import Image from "next/image";
import { Heading } from "@/components/layout/Heading";
import parse from "html-react-parser";

export default function AdviceSection({ data }) {
  return (
    <section className="w-full realtive py-[40px_20px] lg:py-[55px_30px] xl:py-[70px_40px] 2xl:py-[85px_50px] 3xl:py-[100px_60px]">
      <div className="container">
        <Heading
          as="h2"
          size="heading1"
          className=" text-black lg:max-w-[200px] xl:max-w-[235px] 2xl:max-w-[285px] 3xl:max-w-[350px] mb-[15px] xl:mb-[20px] 2xl:mb-[25px]"
        >
          {data?.title}
        </Heading>
        <div className="flex flex-wrap -mx-[5px] lg:-mx-[10px] -my-[5px] lg:-my-[10px] xl:-mx-[15px] 2xl:-mx-[17px] 3xl:-mx-[24px] xl:-my-[15px] 2xl:-my-[17px] 3xl:-my-[24px]">
          {data?.advice_list?.map((item, index) => (
            <div
              key={index}
              className="w-full xs:w-1/2 lg:w-1/3 p-[5px] lg-p-[10px] xl:p-[15px] 2xl:p-[17px] 3xl:p-[24px]"
            >
              <div className="w-full h-full relative bg-[#F7F7F7] rounded-[8px] 2xl:rounded-[10.6px] 3xl:rounded-[13.3px] p-[20px_12px] lg-[32px_25px] xl:p-[36px_28px] 2xl:p-[45px_35px] 3xl:p-[55px_40px] overflow-hidden flex items-center gap-[15px] xl:gap-[20px] 2xl:gap-[25px] 3xl:gap-[35px]">
                <div className="w-[35px] lg:w-[40px] xl:w-[43px] 2xl:w-[52px] 3xl:w-[60px] overflow-hidden flex rounded-full shrink-0">
                  <Image
                    src={item?.icon?.url}
                    alt={item?.icon?.alt}
                    width={95}
                    height={95}
                    className="w-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-[12px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[21px] leading-normal font-normal text-black">
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
