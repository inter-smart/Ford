import Link from "next/link";
import Image from "next/image";
import { Heading } from "@/components/layout/Heading";

export default function AboutVehicleSection({ data, badge }) {
  return (
    <section className="w-full h-auto block py-[30px] 3xl:py-[40px]">
      <div className="container">
        <div className="w-full h-auto flex items-center flex-wrap">
          <div className="w-full md:w-1/2 md:pr-[20px]">
            <div className="w-full">
              {badge && (
                <div className="text-[10px] sm:text-[12px] leading-[1] font-normal text-white w-fit h-auto p-[5px_10px] bg-[#1577F0] rounded-[5px] mb-[10px]">
                  {badge}
                </div>
              )}
              <Heading
                as="h1"
                className="text-[22px] sm:text-[24px] md:text-[28px] xl:text-[32px] 2xl:text-[38px] 3xl:text-[45px] leading-[1] font-medium font-antenna text-black mb-[15px] lg:mb-[20px] 3xl:mb-[25px]"
              >
                {data?.title_about_vehicle}
              </Heading>
              <div className="text-[13px] sm:text-[14px] lg:text-[15px] xl:text-[16px] 3xl:text-[18px] leading-[1.5] font-normal text-black lg:max-w-[500px] 2xl:max-w-[570px] mb-[20px]">
                {data?.description_about_vehicle}
              </div>
              <Link
                href={data?.link || "/contact"}
                target={data?.button?.isExternal ? "_blank" : "_self"}
                className="text-[12px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[16px] leading-[1] font-bold text-white w-fit h-[35px] 2xl:h-[40px] bg-[#1A73E8] px-6 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition cursor-pointer"
              >
                {data?.button_text_about_vehicle}
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-[280px] sm:w-[380px] lg:w-[480px] xl:w-[550px] 2xl:w-[640px] 3xl:w-[740px] h-auto aspect-[640/480] overflow-hidden max-md:mx-auto flex items-center justify-center">
              <Image
                src={
                  data?.image_about_vehicle?.url || "/images/placeholder.png"
                }
                alt={data?.image_about_vehicle?.alt || "About Vehicle"}
                width={640}
                height={480}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
