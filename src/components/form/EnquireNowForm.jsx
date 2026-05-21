"use client";

import * as React from "react";
import { getRecaptchaToken } from "@/lib/recaptcha";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import RecaptchaScript from "@/components/common/RecaptchaScript";
import * as z from "zod";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { toast } from "sonner";
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
    fullName:        "Name*",
    email:           "Email*",
    phone:           "Phone*",
    phoneShort: "Phone number must be at least 10 digits",
    phoneRepeat: "Invalid phone number",
    selectDealer:    "Select Dealer*",
    message:         "Message",
    // radio / checkbox
    commercialLabel: "Terms and Conditions. I am happy to receive commercial messages from Ford Motor Company and affiliated authorized partners.",
    yes:             "Yes",
    no:              "No",
    agreeLabel:      "I agree to the terms and conditions and privacy policy of this website.",
    // button
    submit:          "Submit Request",
    submitting:      "Submitting...",
    // toasts
    toastSuccess:    "Your enquiry has been submitted successfully! We'll get back to you within the next working day.",
    toastError:      "Something went wrong. Please try again.",
    toastException:  "Failed to submit enquiry. Please try again later.",
    // validation
    nameRequired:    "Name is required",
    nameMin2:        "Name must be at least 2 characters",
    nameMax50:       "Name cannot exceed 50 characters",
    nameInvalid:     "Invalid name",
    emailRequired:   "Email is required",
    emailTooLong:    "Email is too long",
    emailInvalid:    "Invalid email address",
    phoneRequired:   "Phone number is required",
    phoneTooLong:    "Phone number is too long",
    phoneInvalid:    "Invalid phone number, max 15 digits allowed",
    dealerRequired:  "Please select a dealer",
    dealerInvalid:   "Invalid dealer selection",
    messageInvalid:  "Please enter a valid message",
    radioRequired:   "Please select an option",
    radioInvalid:    "Invalid option selected",
    termsRequired:   "You must agree to the terms and conditions and privacy policy of this website.",
  },
  ar: {
    // placeholders
    fullName:        "الاسم*",
    email:           "البريد الإلكتروني*",
    phone:           "رقم الهاتف*",
    phoneShort:  "يجب أن يحتوي رقم الهاتف على 10 أرقام على الأقل",
    phoneRepeat: "رقم هاتف غير صالح",
    selectDealer:    "اختر الوكيل*",
    message:         "الرسالة",
    // radio / checkbox
    commercialLabel: "الشروط والأحكام. يسعدني تلقي رسائل تجارية من شركة فورد موتور والشركاء المعتمدين.",
    yes:             "نعم",
    no:              "لا",
    agreeLabel:      "أوافق على الشروط والأحكام وسياسة الخصوصية لهذا الموقع.",
    // button
    submit:          "إرسال الطلب",
    submitting:      "جارٍ الإرسال...",
    // toasts
    toastSuccess:    "تم إرسال استفسارك بنجاح! سنعود إليك خلال يوم العمل التالي.",
    toastError:      "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
    toastException:  "فشل إرسال الاستفسار. يرجى المحاولة لاحقاً.",
    // validation
    nameRequired:    "الاسم مطلوب",
    nameMin2:        "يجب أن يتكون الاسم من حرفين على الأقل",
    nameMax50:       "لا يمكن أن يتجاوز الاسم 50 حرفاً",
    nameInvalid:     "اسم غير صالح",
    emailRequired:   "البريد الإلكتروني مطلوب",
    emailTooLong:    "البريد الإلكتروني طويل جداً",
    emailInvalid:    "عنوان البريد الإلكتروني غير صالح",
    phoneRequired:   "رقم الهاتف مطلوب",
    phoneTooLong:    "رقم الهاتف طويل جداً",
    phoneInvalid:    "رقم هاتف غير صالح، الحد الأقصى 15 رقماً",
    dealerRequired:  "يرجى اختيار وكيل",
    dealerInvalid:   "اختيار وكيل غير صالح",
    messageInvalid:  "يرجى إدخال رسالة صحيحة",
    radioRequired:   "يرجى اختيار خيار",
    radioInvalid:    "خيار غير صالح",
    termsRequired:   "يجب الموافقة على الشروط والأحكام وسياسة الخصوصية لهذا الموقع.",
  },
};

// ─── Schema factory ───────────────────────────────────────────────────────────
function buildSchema(tr) {
  return z.object({
    fullName: z
      .string()
      .trim()
      .min(1, { message: tr.nameRequired })
      .min(2, { message: tr.nameMin2 })
      .max(50, { message: tr.nameMax50 })
      .refine((value) => {
        const trimmed = value.trim();
        if (!trimmed) return false;
        if (/[\t\n]/.test(trimmed)) return false;
        if (/\d/.test(trimmed)) return false;
        if (/<script[\s\S]*?>[\s\S]*?<\/script>/i.test(trimmed)) return false;
        if (/<img[\s\S]*?>/i.test(trimmed)) return false;
        if (/javascript:/i.test(trimmed)) return false;
        const sqlPattern = /\b(SELECT|INSERT|UPDATE|DELETE|DROP|ALTER|TRUNCATE|EXEC|UNION)\b/i;
        if (sqlPattern.test(trimmed)) return false;
        if (!/^[^\d!@#$%^&*()_+=\[\]{};:"\\|,.<>\/?`~]+$/u.test(trimmed)) return false;
        if (/<iframe[\s\S]*?>/i.test(trimmed)) return false;
        if (/\bon\w+\s*=/i.test(trimmed)) return false;
        return true;
      }, tr.nameInvalid),

    email: z
      .string()
      .min(5, { message: tr.emailRequired })
      .max(254, { message: tr.emailTooLong })
      .refine((value) => {
        const trimmed = value.trim();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
        if (!trimmed) return false;
        if (!emailRegex.test(trimmed)) return false;
        if (/<script[\s\S]*?>[\s\S]*?<\/script>/i.test(trimmed)) return false;
        if (/["'`;]|--/.test(trimmed)) return false;
        if (/<|>|javascript:/i.test(trimmed)) return false;
        if ((trimmed.match(/@/g) || []).length !== 1) return false;
        return true;
      }, tr.emailInvalid),

  phone: z
    .string()
    .min(1, { message: tr.phoneRequired })
    .max(20, { message: tr.phoneTooLong })
    .refine((value) => {
      // catches too-short numbers separately
      const digitsOnly = value.trim().replace(/\D/g, "");
      return digitsOnly.length >= 10;
    }, { message: tr.phoneShort })          // ← "must be at least 10 digits"
    .refine((value) => {
      const trimmed = value.trim();
      if (/<|>|script|javascript:/i.test(trimmed)) return false;
      const validPattern = /^\+?\d[\d\s()-]{7,19}$/;
      if (!validPattern.test(trimmed)) return false;
      if ((trimmed.match(/\+/g) || []).length > 1) return false;
      const digitsOnly = trimmed.replace(/\D/g, "");
      if (/^0+$/.test(digitsOnly)) return false;
      if (/^(\d)\1+$/.test(digitsOnly)) return false;
      if (digitsOnly.length > 15) return false;
      if (/[a-zA-Z<>"'`;]|--|\)\s*;/.test(trimmed)) return false;
      return true;
    }, { message: tr.phoneInvalid }),

    selectDealer: z
      .string()
      .min(1, { message: tr.dealerRequired })
      .refine((value) => {
        if (!value || !value.trim()) return false;
        if (/<script[\s\S]*?>[\s\S]*?<\/script>/i.test(value)) return false;
        if (/javascript:/i.test(value)) return false;
        return true;
      }, tr.dealerInvalid),

    message: z
      .string()
      .optional()
      .refine((value) => {
        if (!value) return true;
        const trimmed = value.replace(/\s+/g, " ").trim();
        if (trimmed.length < 2) return false;
        const forbiddenPatterns = [
          /<script[\s\S]*?>[\s\S]*?<\/script>/i,
          /<img[\s\S]*?>/i,
          /<iframe[\s\S]*?>/i,
          /{{.*?constructor.*?}}/i,
          /['";]?\s*DROP\s+TABLE/i,
          /javascript:/i,
          /\bon\w+\s*=/i,
        ];
        for (const pattern of forbiddenPatterns) {
          if (pattern.test(trimmed)) return false;
        }
        if (!/[a-zA-Z0-9\u0600-\u06FF]/.test(trimmed)) return false;
        if (trimmed.length > 2000) return false;
        return true;
      }, tr.messageInvalid),

    installationSupport: z
      .string()
      .min(1, { message: tr.radioRequired })
      .refine((value) => ["Yes", "No"].includes(value), tr.radioInvalid),

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

// ─── Component ────────────────────────────────────────────────────────────────
export function EnquireNowForm({
  dealers = [],
  pageTitle = "",
  submitEndpoint = "",
  lang = "en",
}) {
  const tr     = t[lang] ?? t.en;
  const isRtl  = lang === "ar";
  const schema = buildSchema(tr);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName:            "",
      email:               "",
      phone:               "",
      selectDealer:        "",
      message:             "",
      installationSupport: "Yes",
      agreeToTerms:        false,
    },
  });

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
      .replace(/\\n/g, "\n")
      .replace(/\\t/g, "    ")
      .replace(/\t+/g, "    ")
      .replace(/\r\n|\r/g, "\n")
      .replace(/ {2,}/g, " ")
      .replace(/^[ \t]+|[ \t]+$/gm, "");
  };

  async function onSubmit(data) {
    setIsSubmitting(true);
    try {
      const recaptchaToken = await getRecaptchaToken("submit");

      const payload = {
        fullName:            data.fullName,
        email:               data.email,
        phone:               data.phone,
        dealer:              data.selectDealer,
        message:             data.message || "",
        commercial_messages: data.installationSupport,
        agree_to_terms:      data.agreeToTerms ? "1" : "0",
        source_page_id:      typeof window !== "undefined" ? window.location.pathname : "",
        source_page_title:   pageTitle,
        recaptcha_token:     recaptchaToken,
      };

      const response = await fetch(
        submitEndpoint || `${process.env.NEXT_PUBLIC_API_URL}/wp-json/ford/v1/offers-form/submit`,
        {
          method:  "POST",
          headers: { "Content-Type": "application/json" },
          body:    JSON.stringify(payload),
        }
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
        {/* Full Name */}
        <div className="mb-2 xl:mb-2.5 2xl:mb-3 3xl:mb-4">
          <div className="grid grid-cols-1 gap-4 xl:gap-5 2xl:gap-6 3xl:gap-8">
            <FormBlock
              item={{ name: "fullName", placeholder: tr.fullName }}
              form={form}
              isSubmitting={isSubmitting}
              onBlurTrim={handleBlurTrim}
            />
          </div>
        </div>

        {/* Email + Phone */}
        <div className="mb-2 xl:mb-2.5 2xl:mb-3 3xl:mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-5 2xl:gap-6 3xl:gap-8">
            <FormBlock
              item={{ name: "email", placeholder: tr.email, type: "email" }}
              form={form}
              isSubmitting={isSubmitting}
              onBlurTrim={handleBlurTrim}
            />
            <FormBlock
              item={{ name: "phone", placeholder: tr.phone }}
              form={form}
              isSubmitting={isSubmitting}
              onBlurTrim={handleBlurTrim}
            />
          </div>
        </div>

        {/* Select Dealer */}
        <div className="mb-2 xl:mb-2.5 2xl:mb-3 3xl:mb-4">
          <div className="grid grid-cols-1 gap-4 xl:gap-5 2xl:gap-6 3xl:gap-8">
            <FormBlock
              item={{
                name:        "selectDealer",
                placeholder: tr.selectDealer,
                type:        "select",
                options:     dealers.map((d) => d.dealer),
              }}
              form={form}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>

        {/* Message */}
        <div className="mb-2 xl:mb-2.5 2xl:mb-3 3xl:mb-4">
          <div className="grid grid-cols-1 gap-4 xl:gap-5 2xl:gap-6 3xl:gap-8">
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
                      const normalized = normalizeText(field.value);
                      form.setValue("message", normalized);
                      form.trigger("message");
                      handleBlurTrim("message");
                    }}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} className={errorClass} />
                  )}
                </Field>
              )}
            />
          </div>
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
                  {/* Values stay "Yes"/"No" — only labels are translated */}
                  {[
                    { value: "Yes", label: tr.yes },
                    { value: "No",  label: tr.no  },
                  ].map((item) => (
                    <div key={item.value} className="flex items-center gap-3">
                      <RadioGroupItem
                        value={item.value}
                        id={`install-${item.value}`}
                        className="text-[#066fef] border-1 [&_svg]:fill-[#066fef] hover:scale-100"
                      />
                      <Label htmlFor={`install-${item.value}`} className={labelClasses}>
                        {item.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} className={errorClass} />
                )}
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
                    id="agreeToTerms"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="border-[#d9d6ce] data-[state=checked]:bg-[#008dd2] data-[state=checked]:border-[#008dd2]"
                  />
                  <Label
                    htmlFor="agreeToTerms"
                    className={cn(labelClasses, "cursor-pointer leading-normal")}
                  >
                    {tr.agreeLabel}
                  </Label>
                </div>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} className={errorClass} />
                )}
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

// ─── FormBlock (unchanged except placeholder now comes from parent) ───────────
function FormBlock({ item, form, isSubmitting, extraDisabled, onBlurTrim }) {
  const [open, setOpen] = React.useState(false);   // ← ADD
  return (
    <Controller
      name={item.name}
      control={form.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid} className="w-full space-y-0">
          <FieldLabel className={cn(labelClasses, "sr-only")}>
            {item.placeholder}
          </FieldLabel>
          {item.type === "select" ? (
            <Select
              onValueChange={(value) =>
                item.onValueChange
                  ? item.onValueChange(value, field.onChange)
                  : field.onChange(value)
              }
              value={field.value}
              disabled={isSubmitting || item.disabled || extraDisabled}
              open={open}
              onOpenChange={setOpen}
            >
              <SelectTrigger
                className={cn(
                  inputClasses,
                  "data-[placeholder]:text-black data-[size=default]:h-[35px] xl:data-[size=default]:h-[40px] 2xl:data-[size=default]:h-[45px] 3xl:data-[size=default]:h-[50px] justify-between [&>svg]:transition-transform [&>svg]:duration-200",
                  open && "[&>svg]:rotate-180"
                )}
              >
                <SelectValue placeholder={item.placeholder} disabled={isSubmitting || item.isLoading} />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  {item?.options?.map((opt) => {
                    const isString = typeof opt === "string";
                    const value    = isString ? opt : opt?.slug;
                    const label    = isString ? opt : opt?.title || opt?.name;
                    return (
                      <SelectItem key={value} value={value}>
                        {label}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          ) : (
            <div className="flex flex-col">
              <Input
                {...field}
                type={item.type || "text"}
                placeholder={item.placeholder}
                className={inputClasses}
                disabled={isSubmitting || extraDisabled}
                onBlur={() => {
                  field.onBlur();
                  if (onBlurTrim) onBlurTrim(item.name);
                }}
              />
            </div>
          )}
          {fieldState.invalid && (
            <FieldError errors={[fieldState.error]} className={errorClass} />
          )}
        </Field>
      )}
    />
  );
}