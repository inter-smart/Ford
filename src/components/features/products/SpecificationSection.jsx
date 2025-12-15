import Image from "next/image";

export default function SpecificationSection({ data }) {
  return (
    <section className="w-full h-auto block">
      <div className="w-full h-auto block relative z-0">
        <div className="w-full h-auto aspect-[1280/610] overflow-hidden block">
          {data?.video_specifications?.url ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover absolute inset-0 -z-2"
            >
              <source src={data.video_specifications.url} type="video/mp4" />
            </video>
          ) : (
            <img
              src="/images/placeholder.png"
              alt="placeholder"
              className="w-full h-full object-cover absolute inset-0 -z-2"
            />
          )}
        </div>
        <div className="container [&>*]:w-1/3 md:max-w-[670px] 2xl:max-w-[740px] 3xl:max-w-[800px] md:px-0 pb-[20px] sm:pb-[40px] lg:pb-[60px] 2xl:pb-[80px] [&>*]:p-[5px] flex flex-wrap justify-between absolute z-1 inset-[auto_0_0_0]">
          {data?.specs?.map((item, index) => (
            <div
              key={index}
              className="w-full h-full block max-lg:flex max-lg:flex-col max-lg:items-center"
            >
              <div className="w-[30px] sm:w-[35px] 2xl:w-[40px] h-auto aspect-square mb-[5px] sm:mb-[10px] overflow-hidden flex items-center justify-center">
                <Image
                  src={item?.icon?.url || "/images/icon-placeholder.png"}
                  alt={item?.icon?.alt || "Icon"}
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="[&>*]:text-[20px] [&>*]:sm:text-[28px] [&>*]:lg:text-[34px] [&>*]:2xl:text-[38px] [&>*]:3xl:text-[40px] [&>*]:leading-[1] [&>*]:font-semibold [&>*]:text-white gap-[5px] sm:gap-[10px] mb-[10px] flex items-center">
                <div>{item?.value}</div>
              </div>
              <div className="text-[12px] sm:text-[14px] lg:text-[15px] 2xl:text-[16px] 3xl:text-[18px] leading-[1] font-normal uppercase text-white">
                {item?.spec_title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
