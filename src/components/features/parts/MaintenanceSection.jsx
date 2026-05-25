import Image from "next/image";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text"; 

export default function MaintenanceSection({ data }) {
    return (
        <section className="relative bg-[#00095B] py-[45px] lg:py-[65px] xl:py-[75px] 2xl:py-[95px] 3xl:py-[120px]">
            <div className="container">
                <div className="flex flex-wrap max-lg:gap-[15px]">
                    <div className="w-full lg:w-[315px] xl:w-[395px] 2xl:w-[475px] 3xl:w-[590px]">
                        <div className="lg:max-w-[350px]">
                            <Heading
                                as="h2"
                                size="heading1"
                                className=" text-white lg:max-w-[200px] xl:max-w-[235px] 2xl:max-w-[285px] 3xl:max-w-[350px] mb-[15px] xl:mb-[20px] 2xl:mb-[25px]" >
                                {data?.title}
                            </Heading>
                            <Text
                                size="text1"
                                as="p"
                                className="text-white lg:max-w-[180px] xl:max-w-[220px] 2xl:max-w-[250px] 3xl:max-w-[330px] mb-[20px] lg:mb-[25px] xl:mb-[35px] 2xl:mb-[45px]"
                            >
                                {data?.description}{" "}
                            </Text>
                        </div>
                        <div className="w-full overflow-hidden rounded-[13px]">
                            <Image src={data?.media?.url} width="590" height="288" className="w-full h-full object-cover" alt={data?.media?.alt} />
                        </div>
                    </div>

                    <div className="w-full lg:w-[calc(100%-315px)] xl:w-[calc(100%-395px)] 2xl:w-[calc(100%-475px)] 3xl:w-[calc(100%-590px)] ltr:lg:pl-[35px] ltr:xl:pl-[45px] ltr:2xl:pl-[55px] ltr:3xl:pl-[65px] rtl:lg:pr-[35px] rtl:xl:pr-[45px] rtl:2xl:pr-[55px] rtl:3xl:pr-[65px]">
                        <div className="relative w-full h-full bg-[#F7F7F7] p-[20px] lg:p-[25px_35px] xl:p-[30px_45px] 2xl:p-[40px_55px] 3xl:p-[45px_65px] rounded-[13px] overflow-hidden">
                            <div className="flex flex-wrap max-xs:gap-[15px]">
                                <div className="w-full xs:w-1/2">
                                    <div className="xl:text-[22px] 2xl:text-[26px] 3xl:text-[33px] text-black font-semibold mb-[15px] xl:mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px]">
                                        {data?.dailyChecks?.title}
                                    </div>
                                    <ul>
                                        {data?.dailyChecks?.items?.map((item, index) => (
                                            <li
                                                key={index}
                                                className="text-[12px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[21px] text-black flex items-start mb-[12px] xl:mb-[15px] 2xl:mb-[20px] 3xl:mb-[25px] last-of-type:mb-0"
                                            >
                                                <span className="ltr:mr-[12px] ltr:xl:mr-[15px] ltr:3xl:mr-[20px] rtl:ml-[12px] rtl:xl:ml-[15px] rtl:3xl:ml-[20px] mt-[7px] w-[4px] xl:w-[6px] 2xl:w-[8px] 3xl:w-[10px] h-[4px] xl:h-[6px] 2xl:h-[8px] 3xl:h-[10px] rounded-full bg-[#00095B] shrink-0" />

                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                                <div className="w-full xs:w-1/2">
                                   <div className="xl:text-[22px] 2xl:text-[26px] 3xl:text-[33px] text-black font-semibold mb-[15px] xl:mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px]">
                                        {data?.monthlyChecks?.title}
                                    </div>
                                    <ul  >
                                        {data?.monthlyChecks?.items?.map((item, index) => (
                                            <li
                                                key={index}
                                                className="text-[12px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[21px] text-black flex items-start mb-[12px] xl:mb-[15px] 2xl:mb-[20px] 3xl:mb-[25px] last-of-type:mb-0"
                                            >
                                                <span className="ltr:mr-[12px] ltr:xl:mr-[15px] ltr:3xl:mr-[20px] rtl:ml-[12px] rtl:xl:ml-[15px] rtl:3xl:ml-[20px] mt-[7px] w-[4px] xl:w-[6px] 2xl:w-[8px] 3xl:w-[10px] h-[4px] xl:h-[6px] 2xl:h-[8px] 3xl:h-[10px] rounded-full bg-[#00095B] shrink-0" />

                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
