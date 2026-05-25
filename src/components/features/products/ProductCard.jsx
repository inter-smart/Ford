import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ item }) {
  return (
    <div className="w-full h-full block group">
      <div className="w-full h-auto aspect-[420/260] mb-[10px] sm:mb-[15px] 2xl:mb-[20px] rounded-[5px] lg:rounded-[8px] 2xl:rounded-[10px] overflow-hidden block relative z-0">
        <Image
          src={item?.car_image?.path || "/images/placeholder.png"}
          alt={item?.car_image?.alt || "Car"}
          width={420}
          height={260}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500 ease-in-out"
        />
        {item?.badge && (
          <div className="w-fit h-auto p-[10px] 2xl:p-[15px] !pt-0 mx-[15px] 2xl:mx-[25px] absolute z-1 inset-[0_0_auto_auto] before:content-[''] before:w-full before:h-full before:bg-[url(/images/new-arrival-background.svg)] before:bg-no-repeat before:bg-contain before:m-auto before:absolute before:z-[-1] before:inset-0">
            <div className="text-[10px] 2xl:text-[12px] leading-1 font-regular text-white p-[7px] 2xl:p-[10px] bg-[#1577F0] rounded-[0_0_3px_3px] 2xl:rounded-[0_0_5px_5px]">
              {item?.badge}
            </div>
          </div>
        )}
      </div>
      <div className="w-full h-auto flex items-center [&>*]:w-[50%]">
        <div className="text-[12px] xl:text-[14.2px] 2xl:text-[17px] 3xl:text-[21.3px] leading-normal font-semibold text-black">
          {item?.modelName}
        </div>
        <Link
          href={`/products/${item?.slug}`}
          className="text-[12.44px] 2xl:text-[15px] 3xl:text-[18px] leading-none font-bold text-[#1577F0] gap-[5px] flex items-center justify-end group/arrow"
        >
          Learn More
          <span className="w-[12px] 2xl:w-[13px] 3xl:w-[14px] h-auto aspect-[8/5] flex items-center justify-center group-hover/arrow:translate-x-[3px] transition duration-500 ease-in-out -mt-[1px]">
            <Image
              src="/images/product_learmore_arrow.svg"
              alt="arrow-right"
              width={10}
              height={10}
              className="w-full h-full object-contain rtl:-scale-x-100"
            />
          </span>
        </Link>
      </div>
    </div>
  );
}
