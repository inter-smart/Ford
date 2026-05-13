import Link from "next/link";
import { Heading } from "@/components/layout/Heading";
import { cn } from "@/lib/utils";
import parse from "html-react-parser";
import Image from "next/image";

export default function ShowroomSection({ data }) {
    return (
        <section className="relative py-[40px] md:py-[55px_70px] xl:py-[70px_80px] 2xl:py-[85px] 3xl:py-[110px_120px]">
            <div className="container">

                <div className="flex flex-wrap items-center justify-between w-full mb-[25px] xl:mb-[30px] 2xl:mb-[40px] 3xl:mb-[60px] max-md:gap-[20px]">

                    {/* Title */}
                    <div className="w-full md:w-1/4">
                        <Heading
                            size="heading1"
                            as="h2"
                            className="text-black"
                        >
                            {data?.title}
                        </Heading>
                    </div>
                    <div className="w-full md:w-3/4">
                        {/* Right Section */}
                        <div className="flex flex-wrap gap-[20px] md:gap-[30px] xl:gap-[40px] 2xl:gap-[50px] 3xl:gap-[60px] w-full justify-between md:justify-end">
                            {/* Search */}
                            <div className="relative w-full sm:max-w-[300px] md:max-w-[260px] xl:max-w-[330px] 2xl:max-w-[390px] 3xl:max-w-[490px]  h-[45px] md:h-[40px] 2xl:h-[44px] 
                                        3xl:h-[56px] bg-[#F8F9FD] rounded-[4px] overflow-hidden">
                                <input
                                    type="text"
                                    placeholder="Enter Street, Suburb, State or distributor"
                                    className="2xl:text-[16px] xl:text-[13px] lg:text-[12px] text-[11px] w-full h-full px-5 pr-12 border border-gray-200 rounded-[4px] 
                                focus:outline-none focus:ring-2 focus:ring-blue-500
                                 focus:border-transparent transition-all"
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-[15px] flex items-center">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                                        <path
                                            d="M6.61165 0C2.96805 0 0 2.97019 0 6.61645C0 10.2627 2.96805 13.2387 6.61165 13.2387C8.16795 13.2387 9.59926 12.6929 10.7305 
                                        11.7867L13.4845 14.5412C13.6235 14.6746 13.8091 14.7481 14.0016 14.7461C14.1941 14.7442 14.3782 14.6669 14.5144 14.5307C14.6507 
                                        14.3946 14.7282 14.2105 14.7304 14.0179C14.7327 13.8252 14.6594 13.6393 14.5264 13.5001L11.7724 10.7441C12.6787 9.61027 13.2247
                                        8.17567 13.2247 6.61645C13.2247 2.97019 10.2553 0 6.61165 0ZM6.61165 1.47066C9.46104 1.47066 11.7537 3.76501 11.7537 6.61645C11.7537 
                                        9.4679 9.46104 11.768 6.61165 11.768C3.76227 11.768 1.46958 9.4679 1.46958 6.61645C1.46958 3.76501 3.76227 1.47066 6.61165 1.47066Z"
                                            fill="black"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Tabs */}
                            <div className="flex items-center">

                                {data?.tabs?.map((item) => (
                                    <Link
                                        key={item?.id}
                                        href={item?.slug || "#"}
                                        className={cn(
                                            "text-[12px] sm:text-[14px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[24px] leading-none rounded-full whitespace-nowrap h-[30px] xl:h-[35px] 2xl:h-[42px] 3xl:h-[53px] px-[15px] xl:px-[22px] 2xl:px-[26px] 3xl:px-[32px] border flex items-center justify-center transition-all duration-300",
                                            item?.active
                                                ? "font-semibold text-black border-[#008dd2] bg-white"
                                                : "font-normal border-transparent text-black hover:text-[#008dd2]"
                                        )}
                                    >
                                        {item?.label}
                                    </Link>
                                ))}

                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex flex-wrap rounded-[8px] 2xl:rounded-[10.6px] 3xl:rounded-[13.3px] overflow-hidden border-t-[1px] border-l-[1px] border-[#c4c4c4]">
                    {data?.locations?.map((item, idx) => {
                        return (
                            <div key={"branch" + idx} className="w-full sm:w-1/2 lg:w-1/4">
                                <div className="w-full h-full border-r-[1px] border-b-[1px] border-[#c4c4c4] p-[18px_15px] sm:p-[20px_18px] xl:p-[25px_30px] 2xl:p-[30px_35px] 3xl:p-[38px_44px]">
                                    <div className="text-[14px] xl:text-[17.7px] 2xl:text-[21.3px] 3xl:text-[26.6px] leading-normal font-normal text-[#434343] mb-[4px] xl:mb-[6px] 2xl:mb-[8px]">
                                        {item?.title}
                                    </div>
                                    <div className="text-[11.3px] xl:text-[14.2px] 2xl:text-[17px] 3xl:text-[21.3px] leading-normal font-normal text-[#434343]">
                                        {parse(item?.description)}
                                    </div>
                                    {item?.phone && (
                                        <div className="text-[11.3px] xl:text-[14.2px] 2xl:text-[17px] 3xl:text-[21.3px] leading-normal font-normal text-[#434343] hover:text-black my-[4px] xl:my-[6px] flex items-center gap-2 2xl:gap-3 3xl:gap-4">
                                            <Image
                                                src="/images/icon-telephone-call.svg"
                                                alt="icon-telephone-call"
                                                width={18}
                                                height={18}
                                                className="w-[12px] xl:w-[14px] 2xl:w-[18px] 3xl:w-[20px] object-contain"
                                            />
                                            {parse(item?.phone)}
                                        </div>
                                    )}
                                    {item?.timing && (
                                        <div className="text-[11.3px] xl:text-[14.2px] 2xl:text-[17px] 3xl:text-[21.3px] leading-normal font-normal text-[#434343] hover:text-black my-[4px] xl:my-[6px] flex items-center gap-2 2xl:gap-3 3xl:gap-4">
                                            <Image
                                                src="/images/icon-clock.svg"
                                                alt="icon-clock"
                                                width={18}
                                                height={18}
                                                className="w-[12px] xl:w-[14px] 2xl:w-[18px] 3xl:w-[20px] object-contain"
                                            />
                                            {parse(item?.timing)}
                                        </div>
                                    )}
                                    {item?.directionUrl && (
                                        <Link
                                            href={item?.directionUrl}
                                            className="text-[10px] xl:text-[12px] 2xl:text-[14.5px] 3xl:text-[18px] leading-none font-bold text-white w-max max-w-full h-[28.5] xl:h-[35.5] 2xl:h-[42.6] 3xl:h-[53.4] py-2 px-[12px] xl:px-[16px]  2xl:px-[18px] 3xl:px-[23.3px] rounded-full bg-[#066FEF] cursor-pointer transition-all flex items-center justify-center gap-1 xl:gap-2 2xl:gap-3 hover:bg-[#005fd3] mt-5 2xl:mt-6"
                                        >
                                            <Image
                                                src="/images/btn-loc.svg"
                                                alt="btn-loc"
                                                width={18}
                                                height={18}
                                                className="w-[14px] xl:w-[18px] 2xl:w-[22px] 3xl:w-[28px] object-contain"
                                            />
                                            Let’s Go
                                        </Link>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}