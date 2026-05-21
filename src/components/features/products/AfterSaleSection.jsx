import Link from "next/link";
import { Download } from "lucide-react";

export default function AfterSaleSection({ data }) {
  return (
    <section className="w-full h-auto block pb-[40px] sm:pb-[50px] xl:pb-[80px] 3xl:pb-[100px]">
      <div className="container">
        <div className="w-full h-auto p-[40px_20px] sm:p-[50px_30px] lg:p-[60px_40px] 2xl:p-[70px_50px] 3xl:p-[80px_50px] bg-[#00095B] rounded-[10px] flex flex-wrap items-center max-xs:text-center">
          <div className="w-full xl:w-[55%] max-xl:mb-[25px]">
            <div className="text-[13px] lg:text-[14px] xl:text-[16px] 3xl:text-[18px] leading-[1.5] font-normal text-white">
              {data?.description}
            </div>
          </div>
          <div className="w-full xl:w-[45%] flex flex-wrap gap-[10px] xl:justify-end">
            <Link
              href={data?.button?.link || "/contact"}
              target={data?.button?.isExternal ? "_blank" : "_self"}
              className="text-[12px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[16px] leading-[1] font-bold text-white w-fit h-[35px] 2xl:h-[40px] bg-[#1A73E8] max-xs:w-full px-6 rounded-full flex items-center justify-center hover:bg-white hover:text-[#1A73E8] transition duration-300 cursor-pointer"
            >
              {data?.button_text}
            </Link>
            <Link
              href={data?.pdf_url || "/files/brochure.pdf"}
              download
              target="_blank"
              className="text-[12px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[16px] leading-[1] font-bold text-white w-fit h-[35px] 2xl:h-[40px] border-1 max-xs:w-full border-white px-6 rounded-full flex items-center justify-center hover:bg-white hover:text-[#00095B] transition duration-300 cursor-pointer gap-2"
            >
              <Download size={18} />
              Download PDF
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
