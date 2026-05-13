import { Heading } from "@/components/layout/Heading";
import { ParsedContent } from "@/lib/utils";
import parse from "html-react-parser";

export default function PrivacyPolicyContent({ data }) {
  return (
    <section className="w-full h-auto block  pt-5 sm:pt-[84px] lg:pt-[116px] xl:pt-[146px] 2xl:pt-[170px] 3xl:pt-[200px] pb-5 sm:pb-[48px] lg:pb-[64px] xl:pb-[80px] 2xl:pb-[96px] 3xl:pb-[112px] overflow-hidden mt-[69px] xl:mt-[73px] 2xl:mt-[76px] 3xl:mt-[78px]">
      <div className="container">
        <Heading
          as="h2"
          size={"none"}
          className="text-[20px] lg:text-[27px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] leading-normal font-semibold text-black mb-[15px] xl:mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px]"
        >
          {parse(data?.title || "")}
        </Heading>
        <div
          className="typography [--text-color:#000] [&_:is(h1,h2,h3,h4,h5,h6)]:my-[15px] sm:[&_:is(h1,h2,h3,h4,h5,h6)]:my-[18px] xl:[&_:is(h1,h2,h3,h4,h5,h6)]:my-[22px] 2xl:[&_:is(h1,h2,h3,h4,h5,h6)]:my-[28px] 3xl:[&_:is(h1,h2,h3,h4,h5,h6)]:my-[35px] [&_li]:list-image-none [&_li]:list-disc"
        >
          <ParsedContent html={data?.description} />
        </div>
      </div>
    </section>
  );
}
