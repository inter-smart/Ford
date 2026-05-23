"use client";
import { Heading } from "@/components/layout/Heading";
import Image from "next/image";
import { Text } from "@/components/layout/Text";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Welcome({ data }) {
  return (
    <section className="w-full relative bg-[#F0F0F0] 2xl:py-[125px_100px] xl:py-[80px] py-[50px] z-0 overflow-hidden">
      <div className="absolute ltr:right-0 rtl:left-0 lg:top-0 max-md:bottom-0 xl:max-w-[550px] max-w-[350px] h-auto w-full aspect-55/50 z-[-1]">
        <Image
          src="/images/mountains.png"
          width="650"
          height="450"
          alt="logo"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container">
        <div className="flex flex-wrap">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="2xl:w-[calc(100%-650px)] xl:w-[calc(100%-550px)] lg:w-[calc(100%-430px)] flex items-center"
          >
            <div className="w-full h-auto lg:max-w-[90%]">
              <div className="3xl:text-[25px] 2xl:text-[20px] xl:text-[18px] text-[15px] font-medium text-black line-clamp-5 flex items-center mb-[15px]">
                {data?.sub_title_about_ford}
                <div className="2xl:max-w-[100px] xl:max-w-[80px] max-w-[50px] mx-[10px]">
                  <Image
                    src={
                      data?.logo_about_ford?.url || "/images/placeholder.png"
                    }
                    alt={data?.logo_about_ford?.alt || "Logo"}
                    width="88"
                    height="45"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="w-full">
                <Heading
                  size="heading1"
                  as="h2"
                  className="text-black mb-[15px]"
                >
                  {data?.title_about_ford}
                </Heading>
                <Text
                  size="text2"
                  as="div"
                  dangerouslySetInnerHTML={{
                    __html: data?.description_about_ford || "",
                  }}
                  className="text-[#434343] mb-[15px]"
                >
                </Text>
                {/* <Link
                  href={data?.button_about_ford?.button_link_about_ford?.url}
                  target={
                    data?.button_about_ford?.button_link_about_ford?.target
                  }
                  className="2xl:text-[14px] xl:text-[12px] text-[10px] font-normal text-white max-w-[130px] 2xl:h-[40px] h-[35px] flex items-center justify-center bg-[#1A73E8] px-6 rounded-full hover:bg-[#fff] hover:text-black transition cursor-pointer"
                >
                  {data?.button_about_ford?.button_text_about_ford}
                </Link> */}
                <div className="mt-[15px] xl:mt-[25px] 2xl:mt-[35px] 3xl:mt-[40px]">
                  <Link
                    href={data?.button_about_ford?.button_link_about_ford?.url}
                    target={
                      data?.button_about_ford?.button_link_about_ford?.target
                    }
                    className="text-[12.44px] 2xl:text-[15px] 3xl:text-[18px] leading-none font-bold text-[#1577F0] gap-[5px] flex items-center justify-start group/arrow"
                  >{data?.button_about_ford?.button_text_about_ford}
                    <span className="w-[12px] 2xl:w-[13px] 3xl:w-[14px] h-auto aspect-[8/5] flex items-center justify-center group-hover/arrow:translate-x-[3px] transition duration-500 ease-in-out">
                      <Image
                        src="/images/product_learmore_arrow.svg"
                        alt="arrow-right"
                        width={10}
                        height={10}
                        className="w-full h-full object-contain"
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Section (Image) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="2xl:w-[650px] xl:w-[550px] lg:w-[430px] flex items-end relative z-0"
          >
            <Image
              src={data?.image_about_ford?.url || "/images/placeholder.png"}
              alt={data?.image_about_ford?.alt || "Car"}
              width="600"
              height="450"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
