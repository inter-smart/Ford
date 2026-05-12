import Image from "next/image";
import { Heading } from "@/components/layout/Heading";
import parse from "html-react-parser";

export default function WhymotocraftSection({ data }) {
    return (
        <section className="relative bg-[#F7F7F7] z-0 overflow-hidden max-sm:py-[30px]">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full sm:w-1/2 ">
                        <div className="relative w-full h-full bg-[#00095B] p-[20px] sm:py-[40px] lg:py-[45px] xl:py-[50px] 2xl:py-[55px] 3xl:py-[70px] md:max-w-[370px] lg:max-w-[430px] 
                        xl:max-w-[542px] 2xl:max-w-[652px] 3xl:max-w-[815px]
                        after:absolute after:content:'' after:top-0 after:left-[0] after:sm:left-[-50%]   after:sm:w-[400px] after:bg-[#00095B] after:h-full after:-z-10 after:pointer-events-none">
                            <Heading
                                size="heading1"
                                as="h2"
                                className="mb-[15px] md:mb-[25px] xl:mb-[30px] 2xl:mb-[35px] 3xl:mb-[40px] text-white"
                            >
                                {parse(data?.title)}{" "}
                            </Heading>
                            <ul className="flex flex-col">
                                {data?.features?.map((item, index) => (
                                    <li
                                        key={index}
                                        className="text-white text-[11px] lg:text-[12px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[21px]  leading-[1.5] flex items-center gap-[10px] md:gap-[15px] lg:gap-[18px] xl:gap-[20px] 2xl:gap-[22px] 3xl:gap-[30px] mb-[20px] xl:mb-[25px] 2xl:mb-[30px] 3xl:mb-[40px] last-of-type:mb-0"
                                    >
                                        <span className="w-[10px] xl:w-[13px] 2xl:w-[16px] 3xl:w-[20px] h-[10px] xl:h-[13px] 2xl:h-[16px] 3xl:h-[20px] block">
                                            <Image src="/images/tick.svg" width="20" height="20" alt="checkmark" className="w-full h-full object-contain" />
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className=" w-full sm:w-1/2">
                        <div className="w-full h-full rounded-[8px] 2xl:rounded-[10.6px] 3xl:rounded-[13.3px] aspect-[815/545] overflow-hidden flex items-center justify-center mb-2 lg:mb-0 m-auto max-w-[370px] lg:max-w-[430px] xl:max-w-[542px] 2xl:max-w-[652px] 3xl:max-w-[815px]">
                            <Image
                                src={data?.media?.url}
                                alt={data?.media?.alt}
                                width={857}
                                height={400}
                                className="w-full h-full object-contain transition-all duration-500 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
