import { Heading } from "@/components/layout/Heading";
import { Text } from "@/components/layout/Text";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import parse from "html-react-parser";

function LocationPin() {
  return (
    <div className="w-[17px] h-[17px] transition-all group-hover:scale-[1.3]">
      <svg viewBox="0 0 17 17" className="group-hover:fill-[#1A73E8]">
        <path d="M16.1094 7.66992H14.4002C14.1598 4.86298 11.9163 2.61948 9.10938 2.37917V0.669922C9.10938 0.393797 8.8855 0.169922 8.60938 0.169922C8.33325 0.169922 8.10938 0.393797 8.10938 0.669922V2.37917C5.30244 2.61948 3.05888 4.86298 2.81859 7.66992H1.10938C0.83325 7.66992 0.609375 7.8938 0.609375 8.16992C0.609375 8.44605 0.83325 8.66992 1.10938 8.66992H2.81859C3.05891 11.4769 5.30244 13.7204 8.10938 13.9607V15.6699C8.10938 15.946 8.33325 16.1699 8.60938 16.1699C8.8855 16.1699 9.10938 15.946 9.10938 15.6699V13.9607C11.9163 13.7204 14.1598 11.4769 14.4001 8.66992H16.1094C16.3855 8.66992 16.6094 8.44605 16.6094 8.16992C16.6094 7.8938 16.3855 7.66992 16.1094 7.66992ZM9.10938 12.9565V11.2949C9.10938 11.0188 8.8855 10.7949 8.60938 10.7949C8.33325 10.7949 8.10938 11.0188 8.10938 11.2949V12.9565C5.85419 12.7227 4.05663 10.9251 3.82275 8.66992H5.48434C5.76047 8.66992 5.98434 8.44605 5.98434 8.16992C5.98434 7.8938 5.76047 7.66992 5.48434 7.66992H3.82272C4.05656 5.41477 5.85419 3.61717 8.10938 3.3833V5.04489C8.10938 5.32102 8.33325 5.54489 8.60938 5.54489C8.8855 5.54489 9.10938 5.32102 9.10938 5.04489V3.3833C11.3646 3.61717 13.1621 5.41477 13.396 7.66992H11.7344C11.4583 7.66992 11.2344 7.8938 11.2344 8.16992C11.2344 8.44605 11.4583 8.66992 11.7344 8.66992H13.396C13.1621 10.9251 11.3645 12.7227 9.10938 12.9565Z" />
        <defs>
          <path
            width="16"
            height="16"
            fill="white"
            transform="translate(0.609375 0.169922)"
          />
        </defs>
      </svg>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 18 18" className="group-hover:scale-[1.5] transition-all">
      <path
        d="M7.9349 0.814453C3.80263 0.814453 0.436523 4.18055 0.436523 8.31284C0.436523 12.4451 3.80263 15.8178 7.9349 15.8178C9.69991 15.8178 11.3232 15.1992 12.6061 14.1722L15.7295 17.2939C15.8871 17.445 16.0976 17.5284 16.316 17.5262C16.5343 17.5239 16.7431 17.4363 16.8976 17.282C17.0521 17.1277 17.14 16.9191 17.1425 16.7008C17.1451 16.4825 17.062 16.2718 16.9111 16.114L13.7878 12.9906C14.8156 11.7057 15.4349 10.0799 15.4349 8.31284C15.4349 4.18055 12.0672 0.814453 7.9349 0.814453ZM7.9349 2.48115C11.1664 2.48115 13.7666 5.08131 13.7666 8.31284C13.7666 11.5444 11.1664 14.1511 7.9349 14.1511C4.70336 14.1511 2.10319 11.5444 2.10319 8.31284C2.10319 5.08131 4.70336 2.48115 7.9349 2.48115Z"
        fill="#010203"
      />
    </svg>
  );
}
function LocateBx({ title, description }) {
  return (
    <div className="w-full max-w-[268px] sm:max-w-[320px] xl:max-w-[348px] 2xl:max-w-[418px] 3xl:max-w-[522px]">
      <Heading
        as="h2"
        size={"none"}
        className="text-[20px] lg:text-[27px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] leading-normal font-medium text-white mb-[5px] 2xl:mb-[8px] 3xl:mb-[10px] max-md:text-center"
      >
        {title}
      </Heading>
      <Text
        as="div"
        size="text1"
        className="text-white mb-[15px] xl:mb-[20px] 2xl:mb-[25px] 3xl:mb-[30px] max-md:text-center"
      >
        {description}
      </Text>
      <Button
        variant="outline"
        className="md:text-[14px] sm:text-[12px] text-[10px]  font-medium w-full h-[40px] mb-[15px] relative flex items-center justify-start transition-all shadow-0 rounded-[5px] px-[15px] bg-white text-gray-800 hover:bg-gray-100 cursor-pointer group hover:text-[#1A73E8]"
      >
        <LocationPin />
        <span>Use my current location</span>
      </Button>
      <div className="relative w-full">
        <Input
          type="text"
          placeholder="Enter Street, Suburb, State or distributor"
          className="md:text-[14px] sm:text-[12px] text-[10px] h-[40px] ltr:pr-10 ltr:pl-4 rtl:pl-10 rtl:pr-4 text-[#6F6F6F] bg-white rounded-[5px] border-none shadow-none outline-none focus:outline-none focus:border-none focus:ring-0 focus:shadow-none"
        />
        <Button className="absolute top-0 ltr:right-[15px] rtl:left-[15px] bottom-0 my-auto w-[17px] h-[17px] cursor-pointer group">
          <SearchIcon />
        </Button>
      </div>
    </div>
  );
}

export default function LocationSection() {
  return (
    <section className="w-full bg-white 2xl:py-[75px_20px] xl:py-[60px_10px] py-[40px_10px] overflow-hidden">
      <div className="container">
        <div className="w-full p-[20px_15px] sm:p-[40px_30px] lg:p-[60px_40px] xl:p-[85px_96px] 2xl:p-[102px_115px] 3xl:p-[124px_144px] rounded-[8.8px] 2xl:rounded-[10.6px] 3xl:rounded-[13.3px] overflow-hidden flex flex-wrap justify-center md:justify-between gap-8 md:gap-5 relative z-0">
          <div className="w-full h-full bg-gradient-to-r from-[#000531]/80 via-transparent to-[#000531]/80 absolute -z-1 inset-0 pointer-events-none" />
          <Image
            src="/images/locationBanner.jpg"
            alt="locationImg"
            width={965}
            height={632}
            className="w-full h-full object-cover duration-300 absolute -z-2 inset-0 pointer-events-none"
          />
          <LocateBx
            title={parse("Locate a<br /> Showroom")}
            description={parse(
              "Lorem ipsum dolor sit amet consectetur Zenonem Quae quidem sapientes sequuntur",
            )}
          />
          <LocateBx
            title={parse("Locate a<br /> Service Center")}
            description={parse(
              "Lorem ipsum dolor sit amet consectetur Zenonem Quae quidem sapientes sequuntur",
            )}
          />
        </div>
      </div>
    </section>
  );
}
