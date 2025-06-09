"use client";
import { Heading } from "@/components/layout/Heading";
import Image from "next/image";
import { Text } from "@/components/layout/Text";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Welcome() {
  return (
    <section className="w-full relative bg-[#F0F0F0] 2xl:py-[125px_100px] xl:py-[80px] py-[50px] z-0 overflow-hidden">
      <div className="absolute right-0 lg:top-0 max-md:bottom-0 xl:max-w-[550px] max-w-[350px] h-auto w-full z-[-1]">
        <Image
          src="/images/mountains.png"
          width="650"
          height="450"
          alt="logo"
          className="w-full h-full object-contain"
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
                Welcome to
                <div className="2xl:max-w-[100px] xl:max-w-[80px] max-w-[50px] mx-[10px]">
                  <Image
                    src="/images/logoBlue.png"
                    alt="logo"
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
                  Made for your journeys
                </Heading>
                <Text
                  size="text2"
                  as="p"
                  className="text-[#434343] mb-[15px]"
                >
                  Ford Motor Company (commonly known as Ford) is an American multinational automobile manufacturer headquartered in Dearborn, Michigan, United States. It was founded by Henry Ford and incorporated on June 16, 1903. The company sells automobiles and commercial vehicles
                </Text>
                <Link
                  href="/book"
                  className="2xl:text-[14px] xl:text-[12px] text-[10px] font-normal text-white max-w-[130px] 2xl:h-[40px] h-[35px] flex items-center justify-center bg-[#1A73E8] px-6 rounded-full hover:bg-[#fff] hover:text-black transition cursor-pointer"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Right Section (Image) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="2xl:w-[650px] xl:w-[550px] lg:w-[430px] flex items-end relative z-0"
          >
            <Image
              src="/images/welcome_car.png"
              alt="logo"
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
