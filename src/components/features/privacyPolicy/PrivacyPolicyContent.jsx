import { Heading } from "@/components/layout/Heading";
import { ParsedContent } from "@/lib/utils";
import parse from "html-react-parser";

export default function PrivacyPolicyContent({ data }) {
  return (
    <section className="w-full h-auto block  pt-5 sm:pt-[84px] lg:pt-[116px] xl:pt-[146px] 2xl:pt-[170px] 3xl:pt-[200px] pb-5 sm:pb-[48px] lg:pb-[64px] xl:pb-[80px] 2xl:pb-[96px] 3xl:pb-[112px] overflow-hidden">
      <div className="container">
        <div className="typography w-full block mb-4 xl:mb-6 2xl:mb-7 3xl:mb-9">
          <Heading
            as="h1"
            size="h1"
            className="text-[22px] sm:text-[24px] md:text-[28px] xl:text-[32px] 2xl:text-[38px] leading-[1] font-semibold mb-[10px] sm:mb-[15px]"
          >
            {parse(data?.title || "")}
          </Heading>
          {data?.text && (
            <div className="typography [--text-color:#000] mb-4 lg:mb-8 xl:mb-10 2xl:mb-12 3xl:mb-14">
              {parse(data?.text || "")}
            </div>
          )}

          <div
            className="typography [--text-color:#000] [[&_:is(h1,h2,h3,h4,h5,h6)]:my-[15px]
sm:[&_:is(h1,h2,h3,h4,h5,h6)]:my-[18px]
xl:[&_:is(h1,h2,h3,h4,h5,h6)]:my-[22px]
2xl:[&_:is(h1,h2,h3,h4,h5,h6)]:my-[28px]
3xl:[&_:is(h1,h2,h3,h4,h5,h6)]:my-[35px] [&_p]:leading-4 [&_li]:list-image-none [&_li]:list-disc"
          >
            <ParsedContent html={data.content} />
          </div>
        </div>
      </div>
    </section>
  );
}
