import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import parse from "html-react-parser";

export default function ServiceVisitSection({ data }) {
  return (
    <section className="w-full h-auto block py-5 sm:py-[30px] xl:py-[37px] 2xl:py-[45px] 3xl:py-[55px]">
      <div className="container">
        <Heading
          as="h2"
          size={"none"}
          className="text-[20px] lg:text-[27px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] leading-normal font-semibold text-black mb-[15px] xl:mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px]"
        >
          {data?.title}
        </Heading>
        <Text
          as="div"
          size="text1"
          className="text-black [&_p]:mb-[15px] xl:[&_p]:mb-[25px] 2xl:[&_p]:mb-[30px] 3xl:[&_p]:mb-[35px] mb-[10px] xl:mb-[15px] 2xl:mb-[25px] 3xl:mb-[30px]"
        >
          {parse(data?.description)}
        </Text>
      </div>
    </section>
  );
}
