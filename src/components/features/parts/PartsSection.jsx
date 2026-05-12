

import Image from "next/image";
import { Heading } from "@/components/layout/Heading";
import Link from "next/link";
import { cn } from "@/lib/utils";
import parse from "html-react-parser";

export default function PartsSection({ data }) {
    return (
        <section className="w-full h-auto block py-[40px] md:py-[60px] xl:py-[80px] 2xl:py-[90px] 3xl:py-[115px_120px] overflow-hidden">
            <div className="container">
                <div className="flex justify-between mb-[15px] xl:mb-[40px] 2xl:mb-[50px] 3xl:mb-[45px]">
                    <Heading
                        as="h2"
                        size={"none"}
                        className="text-[18px] lg:text-[27px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] leading-[1] font-semibold text-black" >
                        {data?.sectionTitle}
                    </Heading>

                    <div className={cn("flex flex-wrap items-center")}>
                        {data?.tabs?.map((item) => {
                            const isActive = item?.slug === "/parts";
                            return (
                                <Link
                                    key={item?.id}
                                    href={item?.slug}
                                    className={cn(
                                        "text-[12px] sm:text-[14px] xl:text-[16px] 2xl:text-[19.2px] 3xl:text-[24px] leading-none font-normal rounded-full h-[30px] xl:h-[35.5px] 2xl:h-[42.5px] 3xl:h-[53.3px] p-[5px_15px_3px] xl:p-[7px_22px_5px] 2xl:p-[7px_26px] 3xl:p-[8px_32px_6px] bg-white border flex items-center justify-center transition-all duration-300",
                                        isActive
                                            ? "font-semibold text-black border-[#008dd2]"
                                            : "border-white text-black hover:text-[#008dd2]",
                                    )}
                                >
                                    {item?.title}
                                </Link>
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-wrap max-md:gap-[15px] ">
                    <div className="w-full md:w-1/2">
                        <div className="w-full h-full max-w-full rounded-[8px] 2xl:rounded-[10.6px] 3xl:rounded-[13.3px] overflow-hidden mb-2 lg:mb-0">
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
                        <div className="w-full md:pl-[30px] xl:pl-[60px] max-w-[810px]">
                            <Heading
                                size="heading1"
                                as="h2"
                                className="mb-[15px] md:mb-[25px] max-w-[285px] lg:max-w-[385px] xl:max-w-[480px]"
                            >
                                {data?.title}{" "}
                            </Heading>

                            <div className="typography [--text-color:#000]">
                                {parse(data?.description)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
