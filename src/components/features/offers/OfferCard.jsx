import Link from "next/link";
import Image from "next/image";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";

export default function OfferCard({ item }) {
  return (
    <Link href={`/offers/${item?.slug || ""}`} className="block">
      <div className="w-full h-full block group bg-[#F7F7F7] rounded-[5px] lg:rounded-[8px] 2xl:rounded-[10px] overflow-hidden">
        <div className="w-full h-auto aspect-[418/226] rounded-[5px] lg:rounded-[8px] 2xl:rounded-[10px] overflow-hidden">
          <Image
            src={item?.image || "/images/placeholder.jpg"}
            alt={"image"}
            width={418}
            height={226}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500 ease-in-out"
          />
        </div>
        <div className="w-full h-auto p-[20px_18px] xl:p-[28px_24px] 2xl:p-[34px_27px] rounded-[5px] lg:rounded-[8px] 2xl:rounded-[10px]">
          <Heading
            as="h2"
            className="text-[16px] xl:text-[20px] 2xl:text-[25px] 3xl:text-[30px] leading-[1.35] font-semibold text-[#00095B] xl:max-w-[90%] mb-[10px] xl:mb-[15px] 2xl:mb-[20px]"
          >
            {item?.title}
          </Heading>
          <Heading
            as="h3"
            className="text-[13px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[22px] leading-[1.55] font-semibold text-black xl:max-w-[75%] mb-[10px] xl:mb-[15px] 2xl:mb-[20px]"
          >
            {item?.subTitle}
          </Heading>
          <Text
            as="p"
            className="text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-[1.5] font-normal text-black mb-[20px] xl:mb-[30px] 2xl:mb-[36px]"
          >
            {item?.description}
          </Text>
          <div className="w-auto flex justify-center">
            <button className="text-[10px] xl:text-[12px] 2xl:text-[15px] 3xl:text-[17px] leading-[1] font-bold text-[#ffffff] mr-auto px-6 py-3 rounded-[20] bg-[#066FEF] cursor-pointer transition-all">
              {item?.btnTxt}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
