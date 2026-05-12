import Image from "next/image";
import { Heading } from "@/components/layout/Heading";
import parse from "html-react-parser";
import Link from "next/link";

export default function MotocraftSection({ data }) {
    return (
        <section className="w-full h-auto block py-[20px_40px] md:py-[30px_60px] xl:py-[40px_80px] 2xl:py-[50px_100px] 3xl:py-[60px_120px] overflow-hidden">
            <div className="container">
                <div className="flex max-md:flex-wrap gap-[15px] ">
                    <div className="w-full md:w-1/2">
                        <div className="w-full h-full rounded-[8px] 2xl:rounded-[10.6px] 3xl:rounded-[13.3px] aspect-[815/915] overflow-hidden mb-2 lg:mb-0 md:max-w-[370px] lg:max-w-[430px] xl:max-w-[542px] 2xl:max-w-[652px] 3xl:max-w-[815px]">
                            <Image
                                src={data?.media?.url}
                                alt={data?.media?.alt}
                                width={857}
                                height={400}
                                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                            />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex items-center">
                        <div className="w-full  3xl:max-w-[840px]">
                            <Heading
                                size="heading1"
                                as="h2"
                                className="mb-[15px] md:mb-[25px]  "
                            >
                                {parse(data?.title)}{" "}
                            </Heading>

                            <div className="typography [--text-color:#000] mb-[15px] lg:mb-[25px] xl:mb-[35px] 2xl:mb-[45px] 3xl:mb-[30px]">
                                {parse(data?.description)}
                            </div>
                            <Link
                                href={data?.button?.link || "/"}
                                target={data?.button?.isExternal ? "_blank" : "_self"}
                                className="text-[10px] lg:text-[12px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[16px] leading-[1] font-medium font-antenna text-white w-fit h-[30px] xl:h-[35px] 2xl:h-[40px]  
                                3xl:h-[53px] bg-[#1A73E8] px-3 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer
                                mb-[25px] lg-[35px] xl:mb-[45px] 2xl:mb-[55px] 3xl:mb-[70px]"
                            >
                                {data?.button?.text}
                            </Link>

                            {/* Features */}
                            <div className="flex flex-col">
                                {data?.features?.map((item, index) => (
                                    <div key={index} className="mb-[15px] lg:mb-[20px] xl:mb-[25px] 2xl:mb-[30px] 3xl:mb-[35px] last-of-type:mb-0" >

                                        <h3 className="text-[12px] lg:text-[13px] xl:text-[16px] 2xl:text-[20px] 3xl:text-[24px] font-semibold text-black mb-[5px]">
                                            {item?.title}
                                        </h3>

                                        {item?.description && (
                                            <p className="text-[11px] lg:text-[12px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[21px] leading-[1.6]">
                                                {item?.description}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
