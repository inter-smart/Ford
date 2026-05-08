import Image from "next/image";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";

export default function OfferDetailSection({}) {
  return (
    <section className="w-full h-auto block mt-5 mb-10 xl:mt-[30px] xl:mb-[74px] 2xl:mt-10 2xl:mb-[90px]">
      <div className="container">
        <div className="flex flex-wrap w-full h-auto -m-[16px] xl:-m-[20px] 2xl:-m-[24px] [&>*]:p-[16px] [&>*]:xl:p-[20px] [&>*]:2xl:p-m-[24px]">
          {/* LEFT */}
          <div className="w-full sm:w-1/2">
            <Heading
              as="h2"
              className="text-[20px] xl:text-[25px] 2xl:text-[30px] 3xl:text-[38px] leading-[1.35] font-semibold text-[#00095B] w-[50%] mb-[10px] xl:mb-[15px] 2xl:mb-[20px]"
            >
              Corporate and Fleet Offer
            </Heading>
            <Heading
              as="h3"
              className="text-[14px] xl:text-[18px] 2xl:text-[20px] 3xl:text-[22px] leading-[1.55] font-semibold text-black w-[75%] mb-[10px] xl:mb-[15px] 2xl:mb-[20px]"
            >
              Get free service for 3 years or 60,000 km when you buy any new
              Ford SUV or pickup.
            </Heading>
            <Text
              as="p"
              className="text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-[1.5] font-normal text-[black] mb-[20px] xl:mb-[30px] 2xl:mb-[36px]"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </Text>
            <div className="w-auto flex justify-center">
              <button className="text-[10px] xl:text-[12px] 2xl:text-[15px] 3xl:text-[17px] leading-[1] font-bold text-[#ffffff] mr-auto px-6 py-3 rounded-[20] bg-[#066FEF] cursor-pointer transition-all">
                Enquire Now
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full sm:w-1/2">
            <Image
              src="/images/offer-1.jpg"
              alt="image"
              width={418}
              height={226}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
