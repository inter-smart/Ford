"use client";

import { useState } from "react";
import {
  Dialog, DialogContent, DialogDescription,
  DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { Heading } from "../layout/Heading";
import { BookATestDriveForm } from "../form/BookATestDriveForm";

export default function BookATestDriveDialog({
  children,
  dealers = [],
  pageTitle = "",
  prefillModel = "",
  prefillType = "",
  carOptions = [],
  lang = "en",
  title = "",
  description = "",
}) {
  const [open, setOpen] = useState(false);
  const isRtl = lang === "ar";

  const displayTitle = title || (lang === "ar" ? "احجز تجربة قيادة" : "Book a Test Drive");
  const displayDescription = description || (lang === "ar"
    ? "لحجز تجربة القيادة، يرجى تعبئة جميع الحقول أدناه واختيار التاريخ والوقت المفضلين."
    : "To book your Test Drive, complete all of the fields below and select your preferred booking date and time slot."
  );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className="xl:max-w-[631px] 2xl:max-w-[757px] 3xl:max-w-[946px] bg-white py-8 lg:py-10 2xl:py-12 3xl:py-16 px-6 lg:px-6 xl:px-8.5 2xl:px-9 3xl:px-11 border-0 shadow-none rounded-[10px] 2xl:rounded-[12px] 3xl:rounded-[15px] max-h-[calc(100dvh-2rem)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        closeClassName="[&_svg:not([class*='size-'])]:size-5 lg:[&_svg:not([class*='size-'])]:size-6 3xl:[&_svg:not([class*='size-'])]:size-8 top-3 lg:top-5 right-3 lg:right-5"
        dir={isRtl ? "rtl" : "ltr"}
      >
        <DialogHeader className="sr-only">
          <DialogTitle>{displayTitle}</DialogTitle>
          <DialogDescription>{displayDescription}</DialogDescription>
        </DialogHeader>
        <div className="w-full">
          <Heading
            as="h2"
            size="none"
            className="text-[20px] lg:text-[27px] xl:text-[33px] 2xl:text-[40px] 3xl:text-[50px] leading-tight font-semibold text-black mb-[5px] xl:mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px]"
          >
            {displayTitle}
          </Heading>
          <div className="typography [&_p]:last:mb-0 [--text-color:#000] mb-[10px] xl:mb-[10px] 2xl:mb-[15px] 3xl:mb-[20px]">
            <p>{displayDescription}</p>
          </div>
          <BookATestDriveForm
            dealers={dealers}
            pageTitle={pageTitle}
            prefillModel={prefillModel}
            prefillType={prefillType}
            carOptions={carOptions}
            lang={lang}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}