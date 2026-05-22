import Image from "next/image";
import { Heading } from "@/components/layout/Heading";
import Link from "next/link";
import parse from "html-react-parser";

export default function AccessoriesInfoSection({ data }) {
  const buttonLink = data?.button_link?.url || "#";
  const buttonLabel = data?.button_text || "";
  const enquiry = data?.enquiry_number || "";

  return (
    <section className="w-full h-auto block pt-10 sm:pt-[60px] xl:pt-[80px] 2xl:pt-[97px] 3xl:pt-[120px] pb-5 sm:pb-[32px] xl:pb-[40px] 2xl:pb-[50px] 3xl:pb-[60px] overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap items-center -mx-[20px] xl:-mx-[30px] 2xl:-mx-[40px] 3xl:-mx-[100px] [&>*]:px-[20px] xl:[&>*]:px-[30px] 2xl:[&>*]:px-[40px] 3xl:[&>*]:px-[100px]">
          <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
            <div className="w-full xl:max-w-full">
              <Heading
                as="h2"
                size={"none"}
                className="text-[20px] lg:text-[27px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] leading-normal font-semibold text-black mb-[10px] xl:mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px] sm:mt-2.5 xl:mt-5"
              >
                {parse(data?.title || "")}
              </Heading>
              <div className="typography [--text-color:#000]">
                {parse(data?.description || "")}
              </div>
              <div className="flex gap-[8px] xl:gap-[9.5px] 2xl:gap-[12px]">
                <Link
                  href={buttonLink}
                  className="text-[10px] xl:text-[12px] 2xl:text-[14.5px] 3xl:text-[18px] leading-[1] font-bold text-white w-max max-w-full h-[30px] xl:h-[35.5] 2xl:h-[42.6] 3xl:h-[53.4] py-2 px-[15px] xl:px-[18px] 2xl:px-[23px] 3xl:px-[28px] rounded-full bg-[#0042bd] cursor-pointer transition-all flex items-center justify-center hover:bg-[#005fd3]"
                >
                  {buttonLabel}
                </Link>
                {enquiry && (
                  <Link
                    href={`tel:${enquiry}`}
                    className="text-[10px] xl:text-[12px] 2xl:text-[14.5px] 3xl:text-[18px] leading-none font-bold text-white w-max max-w-full h-[28.5] xl:h-[35.5] 2xl:h-[42.6] 3xl:h-[53.4] py-2 px-[12px] xl:px-[16px] 2xl:px-[18px] 3xl:px-[23.3px] rounded-full bg-[#066fef] border border-[#066FEF] cursor-pointer transition-all flex items-center justify-center gap-1 xl:gap-2 2xl:gap-3 hover:bg-[#005fd3]"
                  >
                    <Image
                      src="/images/accessories-info-btn.svg"
                      alt="accessories-info-btn"
                      width={18}
                      height={18}
                      className="w-[12px] xl:w-[14px] 2xl:w-[18px] 3xl:w-[24px] object-contain"
                    />
                    Call Now
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <div className="w-full aspect-[574/306] rounded-[8px] 2xl:rounded-[10.6px] 3xl:rounded-[13.3px] overflow-hidden">
              <Image
                src="/images/accessories-info-1.jpg"
                alt="Ford Accessories"
                width={607}
                height={226}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
