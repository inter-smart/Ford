

import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import Link from 'next/link';

export default function ContactSection({ data }) {
    return (
        <section className="bg-[#F0F0F0] py-[20px_40px] lg:py-[30px_60px] xl:py-[40px_80px] 2xl:py-[45px_90px] 3xl:py-[60px_120px]">
            <div className="container">
                <div className="w-full bg-[#00095B] rounded-[8px] xl:rounded-[10px] 2xl:rounded-[12px] 3xl:rounded-[13px] p-[25px_20px] md:p-[25px] lg:p-[35px] xl:p-[45px] 2xl:p-[55px] 3xl:p-[70px] overflow-hidden ">
                    <div className="w-full flex flex-wrap items-center justify-between gap-[10px]">
                        <div className="max-w-full sm:max-w-[430px] xl:max-w-[480px] 2xl:max-w-[590px] 3xl:max-w-[760px] w-full">
                            <Heading
                                size="heading1"
                                as="h2"
                                className="text-white mb-[10px]"
                            >
                                {data?.title}{" "}
                            </Heading>
                            <Text
                                size="text1"
                                as="p"
                                className="text-white"
                            >
                                {data?.description}{" "}
                            </Text>
                        </div>
                        <Link
                            href={data?.button?.link}
                            aria-label={data?.button_text}
                            className="3xl:text-[18px] 2xl:text-[14px] xl:text-[12px] text-[10px] font-bold text-white min-w-[130px] 3xl:min-w-[175px] 2xl:h-[40px] h-[35px] 2xl:h-[50px] 3xl:h-[53px] flex items-center justify-center bg-[#1A73E8] px-6 rounded-full hover:bg-white hover:text-black transition cursor-pointer"
                        >
                            {data?.button_text}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
