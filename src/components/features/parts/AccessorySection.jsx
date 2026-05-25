import Image from "next/image";
import { Heading } from "@/components/layout/Heading";
import Link from "next/link";
import { cn } from "@/lib/utils";
import parse from "html-react-parser";

export default function AccessorySection({ data }) {
  return (
    <section className="w-full h-auto block py-[20px] md:py-[30px] xl:py-[40px] 2xl:py-[50px] 3xl:py-[60px] overflow-hidden">
      <div className="container">
        <div className="flex max-md:flex-wrap gap-[15px] ">
          <div className="w-full md:w-1/2 flex items-center">
            <div className="w-full lg:max-w-[425px] xl:max-w-[530px] 2xl:max-w-[635px] 3xl:max-w-[795px]">
              <Heading
                size="heading1"
                as="h2"
                className="mb-[15px] md:mb-[25px] max-w-[285px] lg:max-w-[310px] xl:max-w-[385px] 2xl:max-w-[480px] 3xl:max-w-[585px]"
              >
                {parse(data?.title)}{" "}
              </Heading>

              <div className="typography [--text-color:#000] mb-[15px] lg:mb-[25px] xl:mb-[35px] 2xl:mb-[45px] 3xl:mb-[60px]">
                {parse(data?.description)}
              </div>
              <Link
                href={data?.button?.link || "#"}
                className="text-[12.44px] 2xl:text-[15px] 3xl:text-[18px] leading-none font-bold text-[#1577F0] gap-[5px] flex items-center justify-start group/arrow"
              >
                {data?.button_text}
                <span className="w-[12px] 2xl:w-[13px] 3xl:w-[14px] h-auto aspect-[8/5] flex items-center justify-center group-hover/arrow:translate-x-[3px] transition duration-500 ease-in-out">
                  <Image
                    src="/images/product_learmore_arrow.svg"
                    alt="arrow-right"
                    width={10}
                    height={10}
                    className="w-full h-full object-contain rtl:-scale-x-100"
                  />
                </span>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="w-full aspect-[860/468] rounded-[8px] 2xl:rounded-[10.6px] 3xl:rounded-[13.3px] overflow-hidden mb-2 lg:mb-0">
              <Image
                src={data?.media?.url}
                alt={data?.media?.alt}
                width={857}
                height={400}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
