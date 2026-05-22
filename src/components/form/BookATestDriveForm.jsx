"use client";

import * as React from "react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { getRecaptchaToken } from "@/lib/recaptcha";
import RecaptchaScript from "@/components/common/RecaptchaScript";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select, SelectContent, SelectGroup,
  SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

// ─── Translations ─────────────────────────────────────────────────────────────
const t = {
  en: {
    // placeholders
    fullName:           "Name*",
    email:              "Email*",
    phone:              "Phone*",
    selectDealer:       "Locations*",
    vehicleType:        "Vehicle Type*",
    vehicleModel:       "Vehicle Model*",
    preferredDate:      "Preferred Date*",
    preferredTime:      "Preferred Time*",
    message:            "Message",
    // radio / checkbox
    commercialLabel:    "Terms and Conditions. I am happy to receive commercial messages from Ford Motor Company and affiliated authorized partners.",
    yes:                "Yes",
    no:                 "No",
    agreeLabel:         "I agree to the terms and conditions and privacy policy of this website.",
    // button
    submit:             "Submit Request",
    submitting:         "Submitting...",
    // toasts
    toastSuccess:       "Your test drive booking has been submitted successfully! We'll confirm your booking shortly.",
    toastError:         "Something went wrong. Please try again.",
    toastException:     "Failed to submit booking. Please try again later.",
    // validation
    nameRequired:       "Name is required",
    nameMin2:           "Name must be at least 2 characters",
    nameMax50:          "Name cannot exceed 50 characters",
    nameInvalid:        "Invalid name",
    emailRequired:      "Email is required",
    emailTooLong:       "Email is too long",
    emailInvalid:       "Invalid email address",
    phoneRequired:      "Phone number is required",
    phoneLength:        "Phone number must be between 10 and 20 characters",
    phoneFormat:        "Phone number format is invalid",
    phonePlus:          "Phone number can contain only one '+' symbol",
    phoneAllZeros:      "Phone number cannot be all zeros",
    phoneMaxDigits:     "Phone number cannot exceed 15 digits",
    phoneInvalidChars:  "Phone number contains invalid characters",
    dealerRequired:     "Please select a location",
dealerInvalid:      "Invalid location selection",
typeRequired:       "Vehicle type is required",
typeTooLong:        "Vehicle type is too long",
    modelRequired:      "Vehicle model is required",
    modelTooLong:       "Vehicle model is too long",
    
    dateRequired:       "Preferred date is required",
    datePast:           "Date cannot be in the past",
    timeRequired:       "Preferred time is required",
    messageInvalid:     "Please enter a valid message",
    radioRequired:      "Please select an option",
    radioInvalid:       "Invalid option selected",
    termsRequired:      "You must agree to the terms and conditions and privacy policy of this website.",
  },
  ar: {
    // placeholders
    fullName:           "الاسم*",
    email:              "البريد الإلكتروني*",
    phone:              "رقم الهاتف*",
    selectDealer:       "المواقع*",
    vehicleType:        "نوع السيارة*",
    vehicleModel:       "موديل السيارة*",
    preferredDate:      "التاريخ المفضل*",
    preferredTime:      "الوقت المفضل*",
    message:            "الرسالة",
    // radio / checkbox
    commercialLabel:    "الشروط والأحكام. يسعدني تلقي رسائل تجارية من شركة فورد موتور والشركاء المعتمدين.",
    yes:                "نعم",
    no:                 "لا",
    agreeLabel:         "أوافق على الشروط والأحكام وسياسة الخصوصية لهذا الموقع.",
    // button
    submit:             "إرسال الطلب",
    submitting:         "جارٍ الإرسال...",
    // toasts
    toastSuccess:       "تم إرسال حجز تجربة القيادة بنجاح! سنؤكد حجزك قريباً.",
    toastError:         "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
    toastException:     "فشل إرسال الحجز. يرجى المحاولة لاحقاً.",
    // validation
    nameRequired:       "الاسم مطلوب",
    nameMin2:           "يجب أن يتكون الاسم من حرفين على الأقل",
    nameMax50:          "لا يمكن أن يتجاوز الاسم 50 حرفاً",
    nameInvalid:        "اسم غير صالح",
    emailRequired:      "البريد الإلكتروني مطلوب",
    emailTooLong:       "البريد الإلكتروني طويل جداً",
    emailInvalid:       "عنوان البريد الإلكتروني غير صالح",
    phoneRequired:      "رقم الهاتف مطلوب",
    phoneLength:        "يجب أن يتراوح رقم الهاتف بين 10 و20 رقماً",
    phoneFormat:        "تنسيق رقم الهاتف غير صالح",
    phonePlus:          "لا يمكن أن يحتوي رقم الهاتف على أكثر من إشارة '+'",
    phoneAllZeros:      "لا يمكن أن يكون رقم الهاتف أصفاراً فقط",
    phoneMaxDigits:     "لا يمكن أن يتجاوز رقم الهاتف 15 رقماً",
    phoneInvalidChars:  "رقم الهاتف يحتوي على أحرف غير صالحة",
    dealerRequired:     "يرجى اختيار موقع",
dealerInvalid:      "اختيار موقع غير صالح",
typeRequired:       "نوع السيارة مطلوب",
typeTooLong:        "نوع السيارة طويل جداً",
    modelRequired:      "موديل السيارة مطلوب",
    modelTooLong:       "موديل السيارة طويل جداً",
    
    dateRequired:       "التاريخ المفضل مطلوب",
    datePast:           "لا يمكن أن يكون التاريخ في الماضي",
    timeRequired:       "الوقت المفضل مطلوب",
    messageInvalid:     "يرجى إدخال رسالة صحيحة",
    radioRequired:      "يرجى اختيار خيار",
    radioInvalid:       "خيار غير صالح",
    termsRequired:      "يجب الموافقة على الشروط والأحكام وسياسة الخصوصية لهذا الموقع.",
  },
};

// ─── Schema factory ───────────────────────────────────────────────────────────
function buildSchema(tr) {
  return z.object({
    fullName: z
      .string().trim()
      .min(1, { message: tr.nameRequired })
      .min(2, { message: tr.nameMin2 })
      .max(50, { message: tr.nameMax50 })
      .refine((value) => {
        const v = value.trim();
        if (!v) return false;
        if (/[\t\n]/.test(v)) return false;
        if (/\d/.test(v)) return false;
        if (/<script[\s\S]*?>[\s\S]*?<\/script>/i.test(v)) return false;
        if (/<img[\s\S]*?>/i.test(v)) return false;
        if (/javascript:/i.test(v)) return false;
        if (/\b(SELECT|INSERT|UPDATE|DELETE|DROP|ALTER|TRUNCATE|EXEC|UNION)\b/i.test(v)) return false;
        if (!/^[^\d!@#$%^&*()_+=\[\]{};:"\\|,.<>\/?`~]+$/u.test(v)) return false;
        if (/<iframe[\s\S]*?>/i.test(v)) return false;   
        if (/\bon\w+\s*=/i.test(v)) return false;         
        return true;
      }, tr.nameInvalid),

    email: z
      .string()
      .min(5, { message: tr.emailRequired })
      .max(254, { message: tr.emailTooLong })
      .refine((value) => {
        const v = value.trim();
        if (!v) return false;
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/.test(v)) return false;
        if (/<script[\s\S]*?>[\s\S]*?<\/script>/i.test(v)) return false;
        if (/["'`;]|--/.test(v)) return false;
        if (/<|>|javascript:/i.test(v)) return false;   
        if ((v.match(/@/g) || []).length !== 1) return false;
        return true;
      }, tr.emailInvalid),

    phone: z
      .string().trim()
      .min(1, { message: tr.phoneRequired })
      .superRefine((value, ctx) => {
        if (/<|>|script|javascript:/i.test(value)) {
          ctx.addIssue({ code: z.ZodIssueCode.custom, message: tr.phoneInvalidChars }); return;
        }
        if (value.length < 10 || value.length > 20) {
          ctx.addIssue({ code: z.ZodIssueCode.custom, message: tr.phoneLength }); return;
        }
        if (!/^\+?\d[\d\s()-]{7,19}$/.test(value)) {
          ctx.addIssue({ code: z.ZodIssueCode.custom, message: tr.phoneFormat }); return;
        }
        if ((value.match(/\+/g) || []).length > 1) {
          ctx.addIssue({ code: z.ZodIssueCode.custom, message: tr.phonePlus }); return;
        }
        const digits = value.replace(/\D/g, "");
        if (/^0+$/.test(digits)) {
          ctx.addIssue({ code: z.ZodIssueCode.custom, message: tr.phoneAllZeros }); return;
        }
        if (/^(\d)\1+$/.test(digits)) {                                              
          ctx.addIssue({ code: z.ZodIssueCode.custom, message: tr.phoneInvalidChars }); return;  
        }                                                                            
        if (digits.length > 15) {
          ctx.addIssue({ code: z.ZodIssueCode.custom, message: tr.phoneMaxDigits }); return;
        }
        if (/[a-zA-Z<>"'`;]|--|\)\s*;/.test(value)) {
          ctx.addIssue({ code: z.ZodIssueCode.custom, message: tr.phoneInvalidChars }); return;
        }
      }),

    selectDealer: z
      .string()
      .min(1, { message: tr.dealerRequired })
      .refine((v) => {
        if (!v?.trim()) return false;
        if (/<script[\s\S]*?>[\s\S]*?<\/script>/i.test(v)) return false;
        if (/javascript:/i.test(v)) return false;
        return true;
      }, tr.dealerInvalid),

    vehicleModel: z
      .string()
      .min(1, { message: tr.modelRequired })
      .max(100, { message: tr.modelTooLong }),

    vehicleType: z
  .string()
  .min(1, { message: tr.typeRequired })
  .max(100, { message: tr.typeTooLong }),

preferredDate: z
  .string()
  .min(1, { message: tr.dateRequired })
  .refine((value) => {
    if (!value) return false;
    // Compare as plain date strings (yyyy-mm-dd) — no timezone issues
    const today = new Date().toISOString().split("T")[0];
    return value >= today;
  }, tr.datePast),

    preferredTime: z
      .string()
      .min(1, { message: tr.timeRequired }),

    message: z
      .string().optional()
      .refine((value) => {
        if (!value) return true;
        const v = value.replace(/\s+/g, " ").trim();
        if (v.length < 2) return false;
        const forbidden = [
          /<script[\s\S]*?>[\s\S]*?<\/script>/i,
          /<img[\s\S]*?>/i, /<iframe[\s\S]*?>/i,
          /{{.*?constructor.*?}}/i,
          /['";]?\s*DROP\s+TABLE/i,
          /javascript:/i,
          /\bon\w+\s*=/i,   
          ];
        for (const p of forbidden) if (p.test(v)) return false;
        if (!/[a-zA-Z0-9\u0600-\u06FF]/.test(v)) return false;
        if (v.length > 2000) return false;
        return true;
      }, tr.messageInvalid),

    installationSupport: z
      .string()
      .min(1, { message: tr.radioRequired })
      .refine((v) => ["Yes", "No"].includes(v), tr.radioInvalid),

    agreeToTerms: z
      .boolean()
      .refine((val) => val === true, {
        message: tr.termsRequired,
      }),
  });
}

// ─── Shared style constants ───────────────────────────────────────────────────
const labelClasses =
  "text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-normal font-normal text-black";
const inputClasses =
  "text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-normal font-normal text-black placeholder:text-black w-full h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[50px] rounded-none bg-white dark:bg-white border-white border-b-[#d9d6ce] focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:border-b-black selection:bg-primary-800 appearance-none shadow-none px-0";
const errorClass =
  "text-[10px] md:text-[10px] xl:text-[11px] 3xl:text-[12px] leading-normal font-normal text-red-500 mt-1";

const todayDate = new Date().toISOString().split("T")[0];

// ─── Component ────────────────────────────────────────────────────────────────
export function BookATestDriveForm({
  dealers = [],
  pageTitle = "",
  prefillModel = "",
  prefillType = "",
  carOptions = [],   // footer mode — array of { modelName, modelCategory[] }
  lang = "en",
}) {
  const tr     = t[lang] ?? t.en;
  const isRtl  = lang === "ar";
  const schema = buildSchema(tr);

  // Time slots — labels only, values stay in 12h English format for the API
  const timeSlots = [
    "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM",
    "04:00 PM", "05:00 PM",
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFooterMode = carOptions.length > 0;

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
  fullName:      "",
  email:         "",
  phone:         "",
  selectDealer:  "",
  vehicleModel:  prefillModel,
  vehicleType:   prefillType,
  preferredDate: "",
  preferredTime: "",
  message:       "",
  installationSupport: "Yes",
  agreeToTerms:  false,
},
  });

  // When a model is selected in footer mode, auto-populate vehicleType
const handleModelSelect = (modelName) => {
  form.setValue("vehicleModel", modelName, { shouldValidate: true });
  if (isFooterMode) {
    const car = carOptions.find((c) => c.modelName === modelName);
    const category = car?.modelCategory?.[0] ?? "";
    form.setValue("vehicleType", category, { shouldValidate: true });
  }
};

  const handleBlurTrim = (fieldName) => {
    const value = form.getValues(fieldName);
    if (typeof value === "string") {
      const trimmed = value.trim();
      if (trimmed !== value) {
        form.setValue(fieldName, trimmed, { shouldValidate: true, shouldDirty: true });
      } else {
        form.trigger(fieldName);
      }
    } else {
      form.trigger(fieldName);
    }
  };

  const normalizeText = (value) => {
    if (!value) return "";
    return value
      .replace(/\\n/g, "\n").replace(/\\t/g, "    ")
      .replace(/\t+/g, "    ").replace(/\r\n|\r/g, "\n")
      .replace(/ {2,}/g, " ").replace(/^[ \t]+|[ \t]+$/gm, "");
  };

  async function onSubmit(data) {
    setIsSubmitting(true);
    try {
      const recaptchaToken = await getRecaptchaToken("submit");
      const payload = {
  fullName:      data.fullName,
  email:         data.email,
  phone:         data.phone,
  dealer:        data.selectDealer,
  vehicleModel:  data.vehicleModel,
  vehicleMake:   data.vehicleType,   // backend key stays vehicleMake
  preferredDate: data.preferredDate,
        preferredTime:             data.preferredTime,
        message:                   data.message || "",
        commercial_messages:       data.installationSupport,
        agree_to_terms:            data.agreeToTerms ? "1" : "0",
        source_page_title:         pageTitle,
        source_page_id:            typeof window !== "undefined" ? window.location.pathname : "",
        recaptcha_token:           recaptchaToken,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/wp-json/ford/v1/test-drive/submit`,
        { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) }
      );
      const result = await response.json();

      if (result.success) {
        toast.success(result.message || tr.toastSuccess);
        form.reset();
      } else {
        toast.error(result.message || tr.toastError);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error(tr.toastException);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <RecaptchaScript />
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full"
        noValidate
        dir={isRtl ? "rtl" : "ltr"}
      >
        {/* Name + Email */}
        <div className="mb-2 xl:mb-2.5 2xl:mb-3 3xl:mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-5 2xl:gap-6 3xl:gap-8">
            <FormBlock item={{ name: "fullName",  placeholder: tr.fullName }} form={form} isSubmitting={isSubmitting} onBlurTrim={handleBlurTrim} />
            <FormBlock item={{ name: "email", placeholder: tr.email, type: "email" }} form={form} isSubmitting={isSubmitting} onBlurTrim={handleBlurTrim} />
          </div>
        </div>

        {/* Phone + Dealer */}
        <div className="mb-2 xl:mb-2.5 2xl:mb-3 3xl:mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-5 2xl:gap-6 3xl:gap-8">
            <FormBlock item={{ name: "phone", placeholder: tr.phone }} form={form} isSubmitting={isSubmitting} onBlurTrim={handleBlurTrim} />
            <FormBlock
              item={{
                name: "selectDealer", placeholder: tr.selectDealer, type: "select",
                options: dealers.length > 0 ? dealers.map((d) => d.dealer) : ["Dealer 1", "Dealer 2", "Dealer 3"],
              }}
              form={form} isSubmitting={isSubmitting}
            />
          </div>
        </div>

        {/* Vehicle Model + Make */}
        {/* Vehicle Model + Vehicle Type */}
<div className="mb-2 xl:mb-2.5 2xl:mb-3 3xl:mb-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-5 2xl:gap-6 3xl:gap-8">

    {/* Vehicle Model — dropdown in footer mode, locked text in product-detail mode */}
    {isFooterMode ? (
      <FormBlock
        item={{
          name: "vehicleModel",
          placeholder: tr.vehicleModel,
          type: "select",
          options: carOptions.map((c) => ({ value: c.modelName, label: c.modelName, key: c.slug })),
          onValueChange: (value) => handleModelSelect(value),
        }}
        form={form}
        isSubmitting={isSubmitting}
      />
    ) : (
      <FormBlock
        item={{ name: "vehicleModel", placeholder: tr.vehicleModel }}
        form={form}
        isSubmitting={isSubmitting}
        onBlurTrim={handleBlurTrim}
        extraDisabled={!!prefillModel}
      />
    )}

    {/* Vehicle Type — always read-only, auto-populated */}
    <Controller
      name="vehicleType"
      control={form.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid} className="w-full space-y-0">
          <FieldLabel className={cn(labelClasses, "sr-only")}>{tr.vehicleType}</FieldLabel>
          <Input
            {...field}
            type="text"
            placeholder={tr.vehicleType}
            readOnly
            className={cn(inputClasses, "cursor-default text-black/60 placeholder:text-black/40")}
            tabIndex={-1}
          />
          {fieldState.invalid && (
            <FieldError errors={[fieldState.error]} className={errorClass} />
          )}
        </Field>
      )}
    />

  </div>
</div>


        {/* Preferred Date + Time */}
        <div className="mb-2 xl:mb-2.5 2xl:mb-3 3xl:mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-5 2xl:gap-6 3xl:gap-8">
            <FormBlock item={{ name: "preferredDate", placeholder: tr.preferredDate, type: "date", min: todayDate }} form={form} isSubmitting={isSubmitting} />
            <FormBlock item={{ name: "preferredTime", placeholder: tr.preferredTime, type: "select", options: timeSlots }} form={form} isSubmitting={isSubmitting} />
          </div>
        </div>

        {/* Message */}
        <div className="mb-2 xl:mb-2.5 2xl:mb-3 3xl:mb-4">
          <Controller
            name="message"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel className="sr-only">{tr.message}</FieldLabel>
                <Textarea
                  {...field}
                  placeholder={tr.message}
                  className={cn(inputClasses, "min-h-[50px] xl:min-h-[68px] 2xl:min-h-[70px] 3xl:min-h-[90px]")}
                  disabled={isSubmitting}
                  onBlur={() => {
                    field.onBlur();
                    form.setValue("message", normalizeText(field.value));
                    form.trigger("message");
                  }}
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} className={errorClass} />}
              </Field>
            )}
          />
        </div>

        {/* Commercial Messages Radio */}
        <div className="mb-3 xl:mb-3.5 2xl:mb-4 3xl:mb-5">
          <Controller
            name="installationSupport"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className={cn(labelClasses, "mb-2 xl:mb-2.5 2xl:mb-3 3xl:mb-4 block")}>
                  {tr.commercialLabel}
                </FieldLabel>
                <RadioGroup
                  value={field.value}
                  onValueChange={field.onChange}
                  className="flex-1 flex flex-wrap gap-x-2.5 xl:gap-x-[16px] 2xl:gap-x-[18px] 3xl:gap-x-[22px]"
                >
                  {[{ value: "Yes", label: tr.yes }, { value: "No", label: tr.no }].map((item) => (
                    <div key={item.value} className="flex items-center gap-3">
                      <RadioGroupItem value={item.value} id={`drive-install-${item.value}`} className="text-[#066fef] border-1 [&_svg]:fill-[#066fef] hover:scale-100" />
                      <Label htmlFor={`drive-install-${item.value}`} className={labelClasses}>{item.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} className={errorClass} />}
              </Field>
            )}
          />
        </div>

        {/* Agree to Terms */}
        <div className="mb-3 xl:mb-3.5 2xl:mb-4 3xl:mb-5">
          <Controller
            name="agreeToTerms"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="driveAgreeToTerms"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="border-[#d9d6ce] data-[state=checked]:bg-[#008dd2] data-[state=checked]:border-[#008dd2]"
                  />
                  <Label htmlFor="driveAgreeToTerms" className={cn(labelClasses, "cursor-pointer leading-normal")}>
                    {tr.agreeLabel}
                  </Label>
                </div>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} className={errorClass} />}
              </Field>
            )}
          />
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="text-[10px] xl:text-[12px] 2xl:text-[14.5px] 3xl:text-[18px] leading-[1] font-bold text-white w-full max-w-[130px] xl:max-w-[143px] 2xl:max-w-[172px] 3xl:max-w-[214px] h-[30.5px] xl:h-[35.5px] 2xl:h-[42.6px] 3xl:h-[53.4px] p-2 rounded-full bg-[#066FEF] cursor-pointer transition-all flex items-center justify-center"
          >
            {isSubmitting ? tr.submitting : tr.submit}
          </button>
        </div>
      </form>
    </>
  );
}

function FormBlock({ item, form, isSubmitting, extraDisabled, onBlurTrim }) {
    const [open, setOpen] = React.useState(false);   
    return (
    <Controller
      name={item.name}
      control={form.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid} className="w-full space-y-0">
          <FieldLabel className={cn(labelClasses, "sr-only")}>{item.placeholder}</FieldLabel>
          {item.type === "select" ? (
            <Select
              onValueChange={(value) => item.onValueChange ? item.onValueChange(value, field.onChange) : field.onChange(value)}
              value={field.value}
              disabled={isSubmitting || item.disabled || extraDisabled}
              open={open}             
              onOpenChange={setOpen}  
            >
              <SelectTrigger className={cn(
                inputClasses,
                "data-[placeholder]:text-black data-[size=default]:h-[35px] xl:data-[size=default]:h-[40px] 2xl:data-[size=default]:h-[45px] 3xl:data-[size=default]:h-[50px] justify-between [&>svg]:transition-transform [&>svg]:duration-200",  // ← add the two [&>svg] classes
                open && "[&>svg]:rotate-180"   
              )}>
                <SelectValue placeholder={item.placeholder} disabled={isSubmitting || item.isLoading} />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  {item?.options?.map((opt, idx) => {
                    const isString = typeof opt === "string";
                    const key   = isString ? `${opt}-${idx}` : (opt?.key ?? opt?.value ?? opt?.slug ?? idx);
                    const value = isString ? opt : (opt?.value ?? opt?.slug);
                    const label = isString ? opt : (opt?.label ?? opt?.title ?? opt?.name);
                    return <SelectItem key={key} value={value}>{label}</SelectItem>;
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          ) : item.type === "date" ? (
            <Input
              {...field}
              type="date"
              min={item.min || todayDate}
              className={cn(inputClasses, "[color-scheme:light]")}
              disabled={isSubmitting || extraDisabled}
              onBlur={() => { field.onBlur(); if (onBlurTrim) onBlurTrim(item.name); }}
            />
          ) : (
            <div className="flex flex-col">
              <Input
                {...field}
                type={item.type || "text"}
                placeholder={item.placeholder}
                className={inputClasses}
                disabled={isSubmitting || extraDisabled}
                onBlur={() => { field.onBlur(); if (onBlurTrim) onBlurTrim(item.name); }}
              />
            </div>
          )}
          {fieldState.invalid && <FieldError errors={[fieldState.error]} className={errorClass} />}
        </Field>
      )}
    />
  );
}