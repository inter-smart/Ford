import Link from "next/link";
import Image from "next/image";
import { Text } from "../layout/Text";
import { Heading } from "../layout/Heading";

export default function InnerHero({ data }) {
  return (
    <section className="w-full h-auto min-h-[350px] sm:min-h-[450px] xl:min-h-[540px] 2xl:min-h-[580px] flex items-end relative z-0  before:content-[''] before:w-full before:h-[30%] before:bg-gradient-to-t before:from-black before:to-transparent before:opacity-40 before:absolute before:z-[-1] before:inset-auto_0_0_0">
      <picture className="absolute -z-2 inset-0">
        <source media="(max-width: 640px)" srcSet={data?.media?.mobile?.path} />
        <Image
          src={data?.media?.desktop?.path}
          alt={data?.media?.desktop?.alt}
          fill
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
            className="text-[22px] sm:text-[24px] md:text-[28px] xl:text-[32px] 2xl:text-[38px] leading-[1] font-semibold text-white"
          >
            {data?.title}
          </Heading>
          {data?.description && (
            <Text
              as="div"
              className="text-[14px] lg:text-[16px] 2xl:text-[20px] leading-[1] font-light text-white my-[10px] sm:my-[15px]"
            >
              {data?.description}
            </Text>
          )}
          {data?.button && (
            <Link
              href="/"
              className="text-[12px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[16px] leading-[1] font-bold text-white w-fit h-[35px] 2xl:h-[40px] bg-[#1A73E8] px-6 rounded-full flex items-center justify-center hover:bg-[#fff] hover:text-black transition cursor-pointer"
            >
              {data?.button}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
