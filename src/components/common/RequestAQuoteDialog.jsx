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
import { Text } from "../layout/Text";
import Image from "next/image";

export default function RequestAQuoteDialog({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className={
          "xl:max-w-[940px] 2xl:max-w-[1120px] 3xl:max-w-[1376px] bg-white py-6 sm:py-8 xl:py-10 2xl:py-12 3xl:py-16 px-6 sm:px-7 xl:px-8.5 2xl:px-9 3xl:px-11 rounded-[10px] 2xl:rounded-[12px] 3xl:rounded-[15px]"
        }
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Enquire Now</DialogTitle>
          <DialogDescription>
            To get us to call you back, complete all of the fields below, type
            and send us your enquiry and we will aim to get back to you within
            the next working day.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-wrap items-center -mx-[15px] xl:-mx-[19px] 2xl:-mx-[23px] 3xl:-mx-[28px] [&>*]:px-[15px] xl:[&>*]:px-[19px] 2xl:[&>*]:px-[23px] 3xl:[&>*]:px-[28px]">
          <div className="w-full sm:w-[45%] mb-4 sm:mb-0">
            <div className="w-full aspect-[674/841] rounded-[8px] 2xl:rounded-[10.6px] 3xl:rounded-[13.3px] overflow-hidden">
              <Image
                src="/images/enquireNow-img-1.jpg"
                alt="enquireNow-img-1"
                width={674}
                height={841}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <div className="w-full sm:w-[55%]">
            <Heading
              as="h2"
              size="none"
              className="text-[20px] lg:text-[27px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] leading-tight font-semibold text-black mb-[5px] xl:mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px]"
            >
              Enquire Now
            </Heading>
            <div className="typography [&_p]:last:mb-0 [--text-color:#000] mb-[10px] xl:mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px]">
              <p>
                To get us to call you back, complete all of the fields below,
                type and send us your enquiry and we will aim to get back to you
                within the next working day.
              </p>
            </div>
            <EnquireNowForm />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
