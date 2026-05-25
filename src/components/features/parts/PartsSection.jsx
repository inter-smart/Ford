import Image from "next/image";
import { Heading } from "@/components/layout/Heading";
import parse from "html-react-parser";
import TabNav from "@/components/common/TabNav";

export default function PartsSection({ data }) {
  return (
    <section className="w-full h-auto block py-[40px] md:py-[60px] xl:py-[80px] 2xl:py-[90px] 3xl:py-[115px_120px] overflow-hidden">
      <div className="container">
        <div className="flex justify-between mb-[15px] xl:mb-[40px] 2xl:mb-[50px] 3xl:mb-[45px]">
          <Heading as="h2" size="heading1" className="text-black">
            {data?.sectionTitle}
          </Heading>

          <TabNav tabs={data?.tabs} activeSlug="/parts" />
        </div>
        <div className="flex flex-wrap max-md:gap-[15px] ">
          <div className="w-full md:w-1/2">
            <div className="w-full aspect-[857/400] rounded-[8px] 2xl:rounded-[10.6px] 3xl:rounded-[13.3px] overflow-hidden mb-2 lg:mb-0">
              <Image
                src={data?.media?.url}
                alt={data?.media?.alt}
                width={857}
                height={400}
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex items-center">
            <div className="w-full ltr:md:pl-[30px] ltr:xl:pl-[60px] rtl:md:pr-[30px] rtl:xl:pr-[60px] max-w-[810px]">
              <Heading
                size="heading1"
                as="h2"
                className="mb-[10px] md:mb-[15px] xl:max-w-[385px] 2xl:max-w-[480px]"
              >
                {data?.title}{" "}
              </Heading>

              <div className="typography [--text-color:#000]">
                {parse(data?.description)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
