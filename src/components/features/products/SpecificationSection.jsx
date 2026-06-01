import Image from "next/image";

export default function SpecificationSection({ data }) {
  if (!data?.specs?.length) return null;

  return (
    <section className="w-full h-auto block">
      <div className="w-full h-auto block bg-black relative z-0">
        <div className="w-full h-full opacity-80 absolute inset-0 -z-2">
          {data?.video?.url ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover "
            >
              <source src={data?.video?.url} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={"/images/productdetail-video-bg.jpg"}
              alt="productdetail-video-bg"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="container [&>*]:w-1/2 sm:[&>*]:w-1/4 md:max-w-[850px] 2xl:max-w-[1000px] 3xl:max-w-[1200px] md:px-0 py-[100px_30px] sm:py-[220px_40px] lg:py-[320px_60px] xl:py-[368px_70px] 2xl:py-[420px_84px] 3xl:py-[520px_105px] [&>*]:p-[5px] flex flex-wrap justify-center lg:justify-between">
          {data?.specs?.map((item, index) => (
            <div
              key={index}
              className="w-full h-full block max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center"
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
              <div className="text-[12px] sm:text-[14px] lg:text-[15px] 2xl:text-[16px] 3xl:text-[18px] leading-tight font-normal uppercase text-white">
                {item?.spec_title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
