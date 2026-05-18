import Image from "next/image";
import { Heading } from "@/components/layout/Heading";
import { cn } from "@/lib/utils";
import parse from "html-react-parser";

export default function ClientSection({ data }) {
  return (
    <section className="relative py-[40px] md:py-[60px] lg:py-[90px] xl:py-[122px]">
      <div className="container">

        <Heading
          as="h2"
          size={"none"}
          className="text-[20px] lg:text-[27px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] leading-normal font-semibold text-black mb-[20px] xl:mb-[30px]"
        >
          {parse(data?.title)}
        </Heading>

        <div className="w-full flex flex-col gap-[20px] lg:gap-[30px]  xl:gap-[50px] 2xl:gap-[60px] 3xl:gap-[80px]">

          {data?.testimonials?.map((item) => (
            <div
              key={item?.id}
              className="relative w-full bg-[#F7F7F7] rounded-[7px] xl:rounded-[8px] 2xl:rounded-[10px] 3xl:rounded-[13px] overflow-hidden p-[20px] lg-[25px] xl:p-[30px] 2xl:p-[35px] 3xl:p-[45px_48px]"
            >

              {/* Top User Info */}
              <div className="flex items-center gap-[15px] mb-[8px] xl:mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px]">

                <div className="w-[30px] 2xl:w-[42px] h-[30px] 2xl:h-[42px] flex items-center justify-center rounded-full overflow-hidden shrink-0">
                  <Image
                    src={item?.image?.url}
                    width={42}
                    height={42}
                    alt={item?.image?.alt}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="grow">
                  <div className="text-[12px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[21px] text-black font-semibold">
                    {item?.name}
                  </div>

                  <div className="text-[11px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[#6C6C6C] font-normal">
                    {item?.date}
                  </div>
                </div>

              </div>

              {/* Rating */}
              <div className="inline-flex items-center gap-[8px] 3xl:gap-[10px] mb-[8px] xl:mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px] p-[5px_7px] 2xl:p-[5px_6px] 3xl:p-[6px_12px] bg-white rounded-[30px]">

                <div className="w-[12px] xl:w-[14px] 2xl:w-[17px] 3xl:w-[20px] h-[12px] xl:h-[14px] 2xl:h-[17px] 3xl:h-[20px] flex shrink-0">
                  <svg viewBox="0 0 22 21" fill="none">
                    <path
                      d="M21.2776 7.72458C21.1371 7.2926 20.7539 6.98677 20.3024 6.94592L14.1441 6.38683L11.7103 0.688814C11.5306 0.270187 11.1218 0 10.6667 0C10.2116 0 9.80259 0.270187 9.62404 0.688814L7.19024 6.38683L1.03095 6.94592C0.57945 6.98758 0.197119 7.29342 0.0558407 7.72458C-0.0846239 8.15655 0.0450983 8.63035 0.386575 8.92984L5.04176 13.0118L3.66918 19.0571C3.56876 19.5016 3.74129 19.9613 4.11011 20.2279C4.30835 20.3719 4.54127 20.4439 4.775 20.4439C4.97585 20.4439 5.17686 20.3905 5.35639 20.2831L10.6667 17.1079L15.976 20.2831C16.3655 20.5158 16.8553 20.4945 17.2233 20.2279C17.5921 19.9613 17.7646 19.5016 17.6642 19.0571L16.2916 13.0118L20.9468 8.92984C21.2881 8.63035 21.418 8.15753 21.2776 7.72458Z"
                      fill="#1577F0"
                    />
                  </svg>
                </div>

                <div className="text-[12px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[21px] text-black font-normal">
                  {Number(item?.rating).toFixed(1)}
                </div>

              </div>

              {/* Review */}
              <div className="text-[12px] xl:text-[14px] 2xl:text-[17px] 3xl:text-[21px] leading-[1.7] text-black font-normal">
                {item?.review}
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}