import Image from "next/image";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import Link from "next/link";
import { cn } from "@/lib/utils";
import parse from "html-react-parser";

export default function ServiceLoyaltyProgram({ data }) {
  return (
    <section className="w-full h-auto block py-5 sm:py-[30px] xl:py-[37px] 2xl:py-[45px] 3xl:py-[55px]">
      <div className="container">
        <Heading
          as="h2"
          size={"none"}
          className="text-[20px] lg:text-[27px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] leading-normal font-medium text-black mb-[30px] xl:mb-[35px] 2xl:mb-[40px] 3xl:mb-[50px]"
        >
          {data?.title}
        </Heading>
        <Image
          src={data?.media?.url}
          alt={data?.media?.alt}
          width={1745}
          height={802}
          className="w-full aspect-[1745/802] object-contain transition-transform duration-300 hover:scale-101 mb-[30px] xl:mb-[35px] 2xl:mb-[40px] 3xl:mb-[50px]"
        />
        <Text
          as="div"
          size="text1"
          className="text-[black] [&_p]:mb-[15px] xl:[&_p]:mb-[25px] 2xl:[&_p]:mb-[30px] 3xl:[&_p]:mb-[35px]"
        >
          {parse(data?.description)}
        </Text>

        <div className="w-full bg-[#00095b] rounded-[8px] 2xl:rounded-[10.6px] 3xl:rounded-[13.3px] p-[30px_20px] sm:p-[40px_30px] xl:p-[61.2px_43.7px] 2xl:p-[74px_52.5px] 3xl:p-[91px_65px] flex flex-wrap gap-5 mt-[30px] xl:mt-[70px] 2xl:mt-[80px] 3xl:mt-[100px]">
          <div>
            <div className="text-[18px] sm:text-[21.3px] xl:text-[26.7px] 2xl:text-[32px] 3xl:text-[40px] leading-normal font-normal text-white mb-[4px] 2xl:mb-[6px]">
              {data?.howWorks?.title}
            </div>
            <Text as="div" size="text1" className="text-white">
              {parse(data?.howWorks?.description)}
            </Text>
          </div>
          <div>
            <Text as="div" size="text1" className="text-white">
              {parse(data?.howWorks?.description2)}
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}
