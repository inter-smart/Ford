import Image from "next/image";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import { Button } from "@/components/layout/Button";
import Link from "next/link";

export default function FleetInfoSection({}) {
  return (
    <section className="w-full h-auto block pt-5 sm:pt-[40px] xl:pt-[60px] 2xl:pt-[75px] 3xl:pt-[85px] pb-5 sm:pb-[40px] xl:pb-[60px] 2xl:pb-[75px] 3xl:pb-[85px] overflow-hidden">
      <div className="container">
        <div className="flex flex-wrap items-center -mx-[20px] xl:-mx-[30px] 2xl:-mx-[40px] 3xl:-mx-[100px] [&>*]:px-[20px] xl:[&>*]:px-[30px] 2xl:[&>*]:px-[40px] 3xl:[&>*]:px-[100px]">
          <div className="w-full sm:w-1/2">
            <div className="w-full max-w-[320px] sm:max-w-[576px] lg:max-w-full aspect-[610/376]  overflow-hidden mb-2 lg:mb-0">
              <Image
                src="/images/fleet-info-img-1.jpg"
                alt="image"
                width={607}
                height={226}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>

          <div className="w-full sm:w-1/2">
            <Heading
              as="h2"
              size={"none"}
              className="text-[20px] lg:text-[27px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] leading-normal font-semibold text-black mb-[15px] xl:mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px]"
            >
              Fleet for every business
            </Heading>
            <Text
              as="div"
              size="text1"
              className="text-[black] [&_p]:mb-[15px] xl:[&_p]:mb-[25px] 2xl:[&_p]:mb-[30px] 3xl:[&_p]:mb-[35px]"
            >
              <p>
                At Ford Motor Company we develop long term strategic
                partnerships with our Fleet customers. We apply our mobility
                expertise to support our customers in making the best decision
                for their Fleet needs, while delivering first class customer
                experience. Whether you need a one or two vehicles – or have a
                fleet of hundreds, we can help you through the purchase process.
                We have the experience and expertise needed to help you get the
                most out of every Ford vehicle in your fleet.
              </p>
              <p>
                We offer a World leading selection of Quality, Safe, and Smart
                vehicles. We are confident there are Ford vehicles available to
                meet the needs of every business.
              </p>
            </Text>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#f0f0f0] py-5 sm:py-[40px] xl:py-[60px] 2xl:py-[75px] 3xl:py-[90px] mt-5 sm:mt-[45px] xl:mt-[55px] 2xl:mt-[75px] 3xl:mt-[85px]">
        <div className="container">
          <div className="flex flex-wrap items-center gap-5">
            <div className="w-full sm:flex-1">
              <Text
                as="div"
                size="text1"
                className="text-[black] max-w-[655px] xl:max-w-[760px] 2xl:max-w-[980px] 3xl:max-w-[1180px]"
              >
                <p>
                  “Tell us what your business needs — and we’ll create a custom
                  vehicle solution to help you save money, stay efficient, and
                  get the best performance from your vehicles”
                </p>
              </Text>
            </div>
            <div className="w-[110px] lg:w-[116px] xl:w-[145px] 2xl:w-[174px] 3xl:w-[218px]">
              <Link
                href={"/"}
                className="text-[10px] xl:text-[12px] 2xl:text-[14.5px] 3xl:text-[18px] leading-[1] font-bold text-white w-full h-[30.5px] xl:h-[35.5px] 2xl:h-[42.6px] 3xl:h-[53.4px] p-2 rounded-full bg-[#066FEF] cursor-pointer transition-all flex items-center justify-center"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
