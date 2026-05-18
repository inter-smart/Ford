import OfferCard from "./OfferCard";

export default function OfferListSection({ data }) {
  return (
    <section className="w-full h-auto block my-[30px_20px] sm:my-[50px_40px] xl:my-[90px_75px] 2xl:my-[100px_90px] 3xl:my-[130px_100px] ">
      <div className="container">
        <div className="flex flex-wrap h-auto -mx-[10px] sm:-mx-[8px] xl:-mx-[10px] 2xl:-mx-[-13px] 3xl:-mx-[16px]">
          {data?.map((item, index) => (
            <div
              key={"offers-card-" + index}
              className="w-full min-[468px]:w-1/2 lg:w-1/3 p-[10px] sm:p-[20px_8px] xl:p-[44px_10px] 2xl:p-[53px_13px] 3xl:p-[65px_16px]"
            >
              <OfferCard data={item} />
            </div>
          ))}
        </div>
        {data?.length > 6 && (
          <div className="w-full flex justify-center mt-[15px] 2xl:mt-[20px] 3xl:mt-[25px]">
            <button className="text-[11px] xl:text-[12.4px] 2xl:text-[14.9px] 3xl:text-[18.6px] tracking-[-1%] leading-normal font-bold text-[#1577f0] hover:text-[#0065e0] transition-colors duration-300 ease-in-out">
              Loading More...
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
