import Image from "next/image";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import RequestAQuoteDialog from "@/components/common/RequestAQuoteDialog";

export default function OfferDetailSection({ offerDtl, benefits }) {
  return (
    <>
      <section className="w-full h-auto block mt-[20px] mb-[10px] sm:mt-[30px] sm:mb-[15px] xl:mt-[80px] xl:mb-[50px] 2xl:mt-[100px] 2xl:mb-[60px]">
        <div className="container">
          <div className="flex flex-wrap items-center -mx-[16px] xl:-mx-[20px] 2xl:-mx-[24px] [&>*]:px-[16px] [&>*]:xl:px-[20px] [&>*]:2xl:px-[24px]">
            {/* LEFT */}
            <div className="w-full sm:w-1/2 mb-[20px] sm:mb-[0]">
              <Heading
                as="h2"
                className="text-[20px] xl:text-[25px] 2xl:text-[30px] 3xl:text-[38px] leading-[1.35] font-semibold text-[#00095B] w-[100%] md:w-[50%] mb-[10px] xl:mb-[15px] 2xl:mb-[20px]"
              >
                {offerDtl?.title}
              </Heading>
              <Heading
                as="h3"
                className="text-[14px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] leading-[1.55] font-semibold text-black w-[75%] mb-[10px] xl:mb-[15px] 2xl:mb-[20px]"
              >
                {offerDtl?.subtitle}
              </Heading>
              <Text
                as="p"
                className="text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-[1.5] font-normal text-[black] mb-[20px] xl:mb-[30px] 2xl:mb-[36px]"
              >
                {offerDtl?.desc}
              </Text>
              <div className="w-auto flex justify-center">
                <RequestAQuoteDialog>
                  <button className="text-[10px] xl:text-[12px] 2xl:text-[15px] 3xl:text-[17px] leading-[1] font-bold text-[#ffffff] mr-auto px-6 py-3 rounded-[20] bg-[#066FEF] cursor-pointer transition-all">
                    {offerDtl?.btnTxt}
                  </button>
                </RequestAQuoteDialog>
              </div>
            </div>

            {/* RIGHT */}
            <div className="w-full sm:w-1/2">
              <Image
                src={offerDtl?.image}
                alt={offerDtl?.alt}
                width={418}
                height={226}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-auto mb-[20px] sm:mb-[40px] xl:mb-[65px] 2xl:mb-[76px]">
        <div className="container">
          <div className="flex flex-wrap -mx-[6px] xl:-mx-[10px] 2xl:-mx-[13px]">
            {benefits.map((item) => (
              <div
                key={item.id}
                className="w-full sm:w-1/2 lg:w-1/3 h-auto p-[6px] xl:p-[10px] 2xl:p-[13px]"
              >
                <div className="w-full p-[15px] sm:p-[20px_18px] xl:p-[28px_26px] 2xl:p-[34px_30px] rounded-[4px] sm:rounded-[6px] xl:rounded-[8px] 2xl:rounded-[10px] bg-[#F7F7F7] ">
                  <div className="flex flex-wrap w-full items-center">
                    <div className="w-[30px] sm:w-[35px] xl:w-[52px] 2xl:w-[62px]">
                      <Image
                        src={item?.icon}
                        alt={item?.alt}
                        width={62}
                        height={54}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 pl-[10px] sm:pl-[15px] xl:pl-[20px] 2xl:pl-[24px]">
                      <h2 className="text-[10px] sm:text-[12px] xl:text-[15px] 2xl:text-[18px] text-[#000000] font-semibold">
                        {item?.title}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
