"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EnquireNowForm } from "../form/EnquireNowForm";
import { Heading } from "../layout/Heading";
import Image from "next/image";
import parse from "html-react-parser";

export default function RequestAQuoteDialog({
  children,
  imgPath,
  title,
  description,
  dealers = [],
  pageTitle = "",
  submitEndpoint = "" 
}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className={
          "lg:max-w-[900px] xl:max-w-[940px] 2xl:max-w-[1120px] 3xl:max-w-[1376px] p-0 border-0 shadow-none max-h-[100dvh] rounded-none max-h-[calc(100dvh-2rem)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        }
        closeClassName="[&_svg:not([class*='size-'])]:size-5 lg:[&_svg:not([class*='size-'])]:size-6 3xl:[&_svg:not([class*='size-'])]:size-8 top-3 lg:top-5 right-3 lg:right-5"
      >
        <DialogHeader className="sr-only">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="w-full h-full relative z-0 py-8 lg:py-10 2xl:py-12 3xl:py-16 px-6 lg:px-6 xl:px-8.5 2xl:px-9 3xl:px-11">
          <div className="absolute -z-1 inset-0 w-full lg:max-w-[90%] h-full ml-auto bg-white rounded-[10px] 2xl:rounded-[12px] 3xl:rounded-[15px]" />
          <div className="flex flex-wrap items-center -mx-[15px] xl:-mx-[19px] 2xl:-mx-[23px] 3xl:-mx-[28px] [&>*]:px-[15px] xl:[&>*]:px-[19px] 2xl:[&>*]:px-[23px] 3xl:[&>*]:px-[28px]">
            <div className="w-full lg:w-[45%] my-4 lg:my-0">
              <div className="w-full aspect-[2/1] lg:aspect-[674/841] rounded-[8px] 2xl:rounded-[10.6px] 3xl:rounded-[13.3px] overflow-hidden">
                <Image
                  src={imgPath}
                  alt={title}
                  width={674}
                  height={841}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
            <div className="w-full lg:w-[55%]">
              <Heading
                as="h2"
                size="none"
                className="text-[20px] lg:text-[27px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] leading-tight font-semibold text-black mb-[5px] xl:mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px]"
              >
                {title}
              </Heading>
              <div className="typography [&_p]:last:mb-0 [--text-color:#000] mb-[10px] xl:mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px]">
                {parse(description)}
              </div>
              <EnquireNowForm dealers={dealers} pageTitle={pageTitle} submitEndpoint={submitEndpoint} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
