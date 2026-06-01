import Link from "next/link";
import Image from "next/image";
import { Text } from "../layout/Text";
import { Heading } from "../layout/Heading";

export default function InnerHero({ data, buttonSlot = true }) {  
  return (
    <section
      className="w-full h-auto min-h-[350px] sm:min-h-[420px] xl:min-h-[496px] 2xl:min-h-[580px] 3xl:min-h-[720px] flex items-end relative z-0 
     before:content-[''] before:w-full before:h-[30%] before:bg-gradient-to-t before:from-black before:to-transparent before:opacity-40 before:absolute before:z-[-1] 
     before:inset-auto_0_0_0
     after:content-[''] after:w-full after:h-[30%] after:bg-gradient-to-b after:from-black after:to-transparent after:opacity-90 after:absolute after:z-[-1] 
     after:top-0
     "
    >
      <picture className="absolute -z-2 inset-0">
        <source
          media="(max-width: 640px)"
          srcSet={
            data?.mobile_image?.url ||
            data?.mobile_banner_image?.url ||
            data?.backgroundImage?.url
          }
        />
        <Image
          src={
            data?.desktop_image?.url ||
            data?.desktop_banner_image?.url ||
            data?.backgroundImage?.url ||
            "/images/placeholder.png"
          }
          alt={
            data?.desktop_image?.alt || data?.backgroundImage?.alt || "Banner"
          }
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          className="-z-2 object-cover pointer-events-none"
          priority={true}
        />
      </picture>
      <div className="container">
        <div className="py-[30px] sm:py-[40px] 2xl:py-[50px]">
          <Heading
            as="h1"
            size="heading1"
            className="text-white mb-[10px] sm:mb-[15px]"
          >
            {data?.title || data?.banner_title}
          </Heading>
          {data?.description && (
            <Text
              as="div"
              className="text-[14px] lg:text-[16px] 2xl:text-[24px] leading-[1] font-light font-antenna text-white my-[10px] sm:my-[15px]"
            >
              {data?.description}
            </Text>
          )}
          {buttonSlot ?? (
            // (data?.button_text && (
              <Link
                href={data?.button?.link || "/"}
                target={data?.button?.isExternal ? "_blank" : "_self"}
                className="text-[10px] xl:text-[12px] 2xl:text-[14.5px] 3xl:text-[18px] leading-[1] font-bold text-white w-max max-w-full h-[30px] xl:h-[35.5] 2xl:h-[42.6] 3xl:h-[53.4] py-2 px-[15px] xl:px-[25px] 2xl:px-[30px] 3xl:px-[40px] rounded-full bg-[#066FEF] border border-[#066FEF] cursor-pointer transition-all flex items-center justify-center hover:bg-white hover:text-black"
              >
                <span className="mt-[2px]">{data?.button_text}</span>
              </Link>
            )}
        </div>
      </div>
    </section>
  );
}
