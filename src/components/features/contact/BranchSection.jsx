import Link from "next/link";
import parse from "html-react-parser";
import Image from "next/image";

function InfoItem({ type = "default", icon, alt, text }) {
  return (
    <div className="text-[11.3px] xl:text-[14.2px] 2xl:text-[17px] 3xl:text-[21.3px] leading-normal font-normal text-[#434343] hover:text-black my-[4px] sm:my-[6px] xl:my-[8px] 2xl:my-[10px] flex items-center gap-2 2xl:gap-3 3xl:gap-4">
      <Image
        src={icon}
        alt={alt}
        width={18}
        height={18}
        className="w-[12px] xl:w-[14px] 2xl:w-[18px] 3xl:w-[20px] object-contain"
      />
      {type === "tel" ? <a href={`tel:${text}`}>{text}</a> : parse(text)}
    </div>
  );
}

export default function BranchSection({ data }) {
  return (
    <section className="w-full block py-[40px_25px] xl:py-[70px_35px] 2xl:py-[85px_44px] 3xl:py-[106px_60px]">
      <div className="container">
        <div className="3xl:text-[40px] xl:text-[35px] lg:text-[30px] md:text-[28px] sm:text-[25px] text-[20px] text-[#000000] font-semibold mb-[20px] 2xl:mb-[35px] 3xl:mb-[40px]">
          {data?.title}
        </div>
        <div className="flex flex-wrap rounded-[8px] 2xl:rounded-[10.6px] 3xl:rounded-[13.3px] ">
          {data?.branch_directories?.map((item, idx) => {
            return (
              <div key={"branch" + idx} className="w-full sm:w-1/2 lg:w-1/4">
                <div className="w-full h-full border-[1px] border-[#c4c4c4] p-[18px_15px] sm:p-[20px_18px] xl:p-[25px_30px] 2xl:p-[30px_35px] 3xl:p-[38px_44px]">
                  <div className="text-[14px] xl:text-[17.7px] 2xl:text-[21.3px] 3xl:text-[26.6px] leading-normal font-normal text-[#434343] mb-[4px] xl:mb-[6px] 2xl:mb-[8px]">
                    {item?.branch_title || "Branch Title Not Available"}
                  </div>
                  <div className="text-[11.3px] xl:text-[14.2px] 2xl:text-[17px] 3xl:text-[21.3px] leading-normal font-normal text-[#434343]">
                    {parse(
                      item?.address ||
                        "<p>Location description not available now.</p>",
                    )}
                  </div>
                  {item?.phone_number && (
                    <InfoItem
                      type="tel"
                      icon="/images/icon-telephone-call.svg"
                      alt="icon-telephone-call"
                      text={item.phone_number}
                    />
                  )}
                  {item?.office_time && (
                    <InfoItem
                      icon="/images/icon-clock.svg"
                      alt="icon-clock"
                      text={item.office_time}
                    />
                  )}
                  {item?.map_url && (
                    <Link
                      href={item?.map_url}
                      target="_blank"
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
