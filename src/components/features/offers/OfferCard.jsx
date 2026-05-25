import Link from "next/link";
import Image from "next/image";
import parse from "html-react-parser";
import { Heading } from "@/components/layout/Heading";

export default function OfferCard({ data }) {
  const imageUrl = data?.offer_image?.path || data?.media?.url || "/images/placeholder.jpg";
  const imageAlt = data?.offer_image?.alt || data?.media?.alt || "image";

  return (
    <Link
      href={`/offers/${data?.slug || ""}`}
      className="w-full h-full block group bg-[#F7F7F7] rounded-[8px] 2xl:rounded-[10.6px] 3xl:rounded-[13.3px] overflow-hidden"
    >
      <div className="w-full h-auto aspect-[418/226] rounded-[8px] 2xl:rounded-[10.6px] 3xl:rounded-[13.3px] overflow-hidden">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={418}
          height={226}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500 ease-in-out"
        />
      </div>
      <div className="w-full h-auto p-[15px_10px] sm:p-[15px_20px] xl:p-[28px_24px] 2xl:p-[34px_27px]">
        <Heading
          as="h2"
          className="text-[14px] sm:text-[16px] xl:text-[20px] 2xl:text-[25px] 3xl:text-[30px] leading-[1.35] font-semibold text-[#00095B] xl:max-w-[90%] mb-[5px] xl:mb-[10px] 2xl:mb-[14px] 3xl:mb-[18px]"
        >
          {data?.title}
        </Heading>
        {data?.listing_description_banner_offers && (
          <div className="text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-[1.5] font-normal text-black mb-2.5 xl:mb-[25px] 2xl:mb-[30px] 3xl:mb-[40px]">
            {parse(data.listing_description_banner_offers)}
          </div>
        )}
        <div className="w-auto flex justify-center">
          <button className="text-[10px] xl:text-[12px] 2xl:text-[15px] 3xl:text-[17px] leading-[1] font-bold text-white ltr:mr-auto rtl:ml-auto px-6 py-3 rounded-[20] bg-[#066FEF] cursor-pointer transition-all">
            Know More
          </button>
        </div>
      </div>
    </Link>
  );
}
