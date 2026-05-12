import Image from "next/image";
import { Heading } from "@/components/layout/Heading";
import { cn } from "@/lib/utils";
import parse from "html-react-parser";

export default function AdviceSection({ data }) {
    return (
        <section className='realtive py-[40px_20px] lg:py-[55px_40px] xl:py-[70px_40px] 2xl:py-[85px_450px] 3xl:py-[100px_60px]'>
            <div className="container">
                <Heading
                    as="h2"
                    size={"none"}
                    className="text-[18px] lg:text-[27px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] leading-[130%] font-semibold text-black lg:max-w-[200px] xl:max-w-[235px] 2xl:max-w-[285px] 3xl:max-w-[350px] mb-[15px] xl:mb-[20px] 2xl:mb-[25px]" >
                    {data?.title}
                </Heading>
                <div className="flex flex-wrap -mx-[10px] -my-[10px] 3xl:-mx-[24px] 3xl:-my-[24px]">
                    {data?.advice_list?.map((item, index) => (
                        <div
                            key={index}
                            className="w-full sm:w-1/2 lg:w-1/3 p-[24px]">
                            <div className="w-full h-full relative bg-[#F7F7F7] rounded-[7px] p-[20px] lg-[35px_30px] xl:p-[30px_20px] 2xl:p-[35px_34px] 3xl:p-[40px_40px] overflow-hidden flex items-center gap-[15px] xl:gap-[20px] 2xl:gap-[30px] 3xl:gap-[40px]">
                                <div className="w-[55px] xl:w-[65px] 2xl:w-[75px] 3xl:w-[95px]  overflow-hidden flex p-[3px] rounded-full shrink-0">
                                    <Image
                                        src={item?.icon?.url}
                                        width={95}
                                        height={95}
                                        className="w-full object-contain"
                                        alt={item?.icon?.alt}
                                    />
                                </div>
                                <div className="w-[calc(100%-55px)] xl:w-[calc(100%-65px)] 2xl:w-[calc(100%-75px)] 3xl:w-[calc(100%-95px)]">
                                    <div className="text-[12px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[21px] text-black max-w-[350px]">
                                        {parse(item?.title)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
