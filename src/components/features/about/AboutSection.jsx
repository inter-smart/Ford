import Image from "next/image";
import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";

export default function AboutSection({ data }) {
//   const isTextOnly = /^[A-Za-z\s]+$/.test(data?.value);

  const stats = (data?.stats || []).map((s, i) => ({
    id: i,
    value: s?.value_stats_about_section ?? s?.values,
    label: s?.label_stats_about_section ?? s?.label,
  }));

  return (
    <section className="py-[40px] 2xl:py-[60px] 3xl:py-[75px_65px] relative">
      <div className="container">
        <div className="flex flex-wrap w-full items-center ">
          <div className="w-full md:w-6/12">
            <div className="md:max-w-[430px] xl:max-w-[480px] 2xl:max-w-[590px] 3xl:max-w-[760px] w-full">
              <Heading size="heading1" as="h2" className="text-black mb-[10px]">
                {data?.title}{" "}
                <span className="block w-full">{data?.highlight}</span>
              </Heading>
              <Text
                size="text1"
                as="div"
                className="text-[#434343]"
                dangerouslySetInnerHTML={{ __html: data?.description }}
              />
            </div>
          </div>
          <div className="w-1/4 md:w-4/12  ">
            <div className="max-w-[150px] lg:max-w-[210px] xl:max-w-[260px] 2xl:max-w-[315px] 3xl:max-w-[400px] w-full m-auto max-md:absolute max-md:bottom-[75px] max-xs:bottom-[15px] max-md:right-[15px] max-md:opacity-[0.3]">
              <Image
                src={data?.mapImage?.url || "/images/aboutmap.svg"}
                width="390"
                height="490"
                className="w-full h-full object-cover"
                alt={data?.mapImage?.alt || "mapImage"}
              />
            </div>
          </div>
          <div className="w-full md:w-2/12 max-md:mt-[30px]">
            <div className="flex flex-wrap items-end  md:grid md:grid-cols-1 flex-grow-1   justify-between max-md:-mx-[10px] max-md:-my-[10px]">
              {stats.map((item) => (
                <div
                  key={item?.id}
                  className="max-3xs:w-1/2 md:mb-[15px] xl:mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px] last-of-type:mb-0 max-md:p-[10px]"
                >
                  <h3
                    className={`
                                                text-[16px] sm:text-[18px] md:text-[20px] lg:text-[25px]
                                                xl:text-[30px] 2xl:text-[40px] 3xl:text-[50px]
                                                text-black
                                                ${
                                                  typeof item?.value ===
                                                    "string" &&
                                                  item?.value?.match(
                                                    /[a-zA-Z]/,
                                                  ) &&
                                                  !item?.value?.match(/\d/)
                                                    ? "font-normal"
                                                    : "font-medium"
                                                }
                                        `}
                  >
                    {item?.value}
                  </h3>

                  <p className="text-[11px] lg:text-[12px] xl:text-[16px] 2xl:text-[19px] 3xl:text-[24px] text-black font-normal">
                    {item?.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
