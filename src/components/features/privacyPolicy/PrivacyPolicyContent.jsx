import { Heading } from "@/components/layout/Heading";
import { ParsedContent } from "@/lib/utils";
import parse from "html-react-parser";

export default function PrivacyPolicyContent({ data }) {
  return (
    <section className="w-full h-auto block py-10 sm:py-[50px] xl:py-[65px] 2xl:py-[80px] 3xl:py-[100px] mt-[69px] xl:mt-[73px] 2xl:mt-[76px] 3xl:mt-[78px]">
      <div className="container">
        <Heading
          as="h2"
          size={"none"}
          className="text-[20px] lg:text-[27px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] leading-normal font-medium tracking-tight text-black mb-[15px] xl:mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px]"
        >
          {parse(data?.title || "")}
        </Heading>
        <div className="typography [--text-color:#000] [&_p]:text-[#434343] [&_:is(h1,h2,h3,h4,h5,h6)]:my-[15px] sm:[&_:is(h1,h2,h3,h4,h5,h6)]:my-[18px] xl:[&_:is(h1,h2,h3,h4,h5,h6)]:my-[22px] 2xl:[&_:is(h1,h2,h3,h4,h5,h6)]:my-[28px] 3xl:[&_:is(h1,h2,h3,h4,h5,h6)]:my-[35px] [&_li]:list-image-none [&_li]:list-disc">
          <ParsedContent html={data?.description} />
        </div>
      </div>
    </section>
  );
}
