"use client";

import { useForm } from "react-hook-form";
import RecaptchaScript from "@/components/common/RecaptchaScript";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { getRecaptchaToken } from "@/lib/recaptcha";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// ─── Translations ────────────────────────────────────────────────────────────
const t = {
  en: {
    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    send: "Send",
    submitting: "Submitting...",
    // validation
    nameRequired: "Name is required",
    nameMin2: "Name must be at least 2 characters",
    nameMax50: "Name cannot exceed 50 characters",
    nameInvalid: "Invalid name",
    emailRequired: "Email is required",
    emailTooLong: "Email is too long",
    emailInvalid: "Invalid email address",
    phoneRequired: "Phone number is required",
    phoneTooLong: "Phone number is too long",
    phoneShort:   "Phone number must be at least 10 digits",
    phoneInvalid: "Invalid phone number, max 15 digits allowed",
    messageTooShort: "Message is too short",
    messageInvalid: "Please enter a valid message",    // toasts
    toastSuccess: "Enquiry submitted successfully!",
    toastError: "Something went wrong. Please try again.",
    toastException: "An error occurred while submitting the form.",
  },
  ar: {
    name: "الاسم",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    message: "الرسالة",
    send: "إرسال",
    submitting: "جارٍ الإرسال...",
    // validation
    nameRequired: "الاسم مطلوب",
    nameMin2: "يجب أن يتكون الاسم من حرفين على الأقل",
    nameMax50: "لا يمكن أن يتجاوز الاسم 50 حرفاً",
    nameInvalid: "اسم غير صالح",
    emailRequired: "البريد الإلكتروني مطلوب",
    emailTooLong: "البريد الإلكتروني طويل جداً",
    emailInvalid: "عنوان البريد الإلكتروني غير صالح",
    phoneRequired: "رقم الهاتف مطلوب",
    phoneTooLong: "رقم الهاتف طويل جداً",
    phoneShort:   "يجب أن يحتوي رقم الهاتف على 10 أرقام على الأقل",
    phoneInvalid: "رقم هاتف غير صالح، الحد الأقصى 15 رقماً",
    messageTooShort: "الرسالة قصيرة جداً",
    messageInvalid: "يرجى إدخال رسالة صحيحة",
    // toasts
    toastSuccess: "تم إرسال الاستفسار بنجاح!",
    toastError: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
    toastException: "حدث خطأ أثناء إرسال النموذج.",
  },
};

// ─── normalizeText (unchanged) ────────────────────────────────────────────────
function normalizeText(value) {
  if (!value) return "";
  return value
    .replace(/\\r/g, "\r")
    .replace(/\\n/g, "\n")
    .replace(/\\t/g, "    ")
    .replace(/\r\n?/g, "\n")
    .replace(/\t+/g, "    ")
    .replace(/[ ]{2,}/g, " ")
    .trim();
}

// ─── Schema factory — rebuilt per language so error messages are translated ──
function buildSchema(tr) {
  return z.object({
    name: z
      .string()
      .trim()
      .min(1, tr.nameRequired)
      .max(50, tr.nameMax50)
      .refine((value) => {
        const trimmed = value.trim();
        if (!trimmed) return false;
        // Check invalid characters / injection first — most specific error
        if (/[\t\n]/.test(trimmed)) return false;
        if (/\d/.test(trimmed)) return false;
        if (/<script[\s\S]*?>[\s\S]*?<\/script>/i.test(trimmed)) return false;
        if (/<img[\s\S]*?>/i.test(trimmed)) return false;
        if (/javascript:/i.test(trimmed)) return false;
        const sqlPattern =
          /\b(SELECT|INSERT|UPDATE|DELETE|DROP|ALTER|TRUNCATE|EXEC|UNION)\b/i;
        if (sqlPattern.test(trimmed)) return false;
        if (!/^[^\d!@#$%^&*()_+=\[\]{};:"\\|,.<>\/?`~]+$/u.test(trimmed))
          return false;
        return true;
      }, tr.nameInvalid)
      // min(2) AFTER refine — so digits/symbols get "Invalid name" not "too short"
      .refine((value) => value.trim().length >= 2, tr.nameMin2),

    email: z
      .string()
      .min(1, tr.emailRequired)
      .max(254, tr.emailTooLong)
      .refine((value) => {
        const trimmed = value.trim();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
        if (!emailRegex.test(trimmed)) return false;
        if (/<script[\s\S]*?>[\s\S]*?<\/script>/i.test(trimmed)) return false;
        if (/["'`;]|--/.test(trimmed)) return false;
        if ((trimmed.match(/@/g) || []).length !== 1) return false;
        return true;
      }, tr.emailInvalid),

    phone: z
      .string()
      .min(1, { message: tr.phoneRequired })
      .max(20, { message: tr.phoneTooLong })
      // Format/character check FIRST — letters in phone = "Invalid", not "too short"
      .refine((value) => {
        const trimmed = value.trim();
        if (/<|>|script|javascript:/i.test(trimmed)) return false;
        if (/[a-zA-Z<>"'`;]|--|\)\s*;/.test(trimmed)) return false;
        const validPattern = /^\+?\d[\d\s()-]{7,19}$/;
        if (!validPattern.test(trimmed)) return false;
        if ((trimmed.match(/\+/g) || []).length > 1) return false;
        const digitsOnly = trimmed.replace(/\D/g, "");
        if (/^0+$/.test(digitsOnly)) return false;
        if (/^(\d)\1+$/.test(digitsOnly)) return false;
        if (digitsOnly.length > 15) return false;
        return true;
      }, { message: tr.phoneInvalid })
      // Digit count check AFTER — only reaches here if format is valid
      .refine((value) => {
        const digitsOnly = value.trim().replace(/\D/g, "");
        return digitsOnly.length >= 10;
      }, { message: tr.phoneShort }),

    message: z
      .string()
      .optional()
      .refine((value) => {
        if (!value) return true;
        const trimmed = value.replace(/\s+/g, " ").trim();
        if (trimmed.length > 0 && trimmed.length < 2) return false;
        return true;
      }, tr.messageTooShort)
      .refine((value) => {
        if (!value) return true;
        const trimmed = value.replace(/\s+/g, " ").trim();
        if (trimmed.length === 0) return true;
        const forbiddenPatterns = [
          /<script[\s\S]*?>[\s\S]*?<\/script>/i,
          /<img[\s\S]*?>/i,
          /<iframe[\s\S]*?>/i,
          /{{.*?constructor.*?}}/i,
          /['";]?\s*DROP\s+TABLE/i,
          /javascript:/i,
          /[@#!$%^&*()]/,
        ];
        for (const pattern of forbiddenPatterns) {
          if (pattern.test(trimmed)) return false;
        }
        if (!/[a-zA-Z0-9\u0600-\u06FF]/.test(trimmed)) return false;
        if (trimmed.length > 2000) return false;
        return true;
      }, tr.messageInvalid),
  });
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function ContactForm({ data, lang = "en" }) {
  const tr = t[lang] ?? t.en;
  const isRtl = lang === "ar";
  const schema = buildSchema(tr);

  const form = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  const onSubmit = async (formData) => {
    try {
      const finalData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        message: formData.message?.trim() || "",
      };

      const token = await getRecaptchaToken("submit");
      finalData.recaptcha = token;

      const response = await fetch(
        "https://dev18.intersmarthosting.in/Ford/wp-json/ford/v1/enquiry",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(finalData),
        },
      );

      const result = await response.json();

      if (result.success) {
        toast.success(result.message || tr.toastSuccess);
        form.reset();
      } else {
        toast.error(result.message || tr.toastError);
      }
    } catch (error) {
      console.error(error);
      toast.error(tr.toastException);
    }
  };

  // Shared field classes
  const inputCls =
    "text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-normal font-normal text-black peer w-full pb-[15px] 3xl:pb-[20px] pt-[30px] 3xl:pt-[35px] border-transparent border-b-[1px] border-b-[#d9d6ce] rounded-none px-0 focus-visible:ring-0 focus-visible:border-b-black shadow-none";

  const labelCls =
    "text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-normal font-normal text-black gap-0 absolute top-[20px] transition-all duration-200 peer-focus:top-0 peer-focus:text-[12px] peer-focus:text-black peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:text-black peer-[:autofill]:top-0 peer-[:autofill]:text-[12px] peer-[:autofill]:text-black peer-[:-webkit-autofill]:top-0 peer-[:-webkit-autofill]:text-[12px] peer-[:-webkit-autofill]:text-black pointer-events-none";

  return (
    <div className="w-full" dir={isRtl ? "rtl" : "ltr"}>
      <RecaptchaScript />
      <h3 className="text-[18px] lg:text-[20px] xl:text-[22.22px] 2xl:text-[26.6px] 3xl:text-[33.33px] leading-normal font-normal text-black mb-[15px] xl:mb-[20px] 2xl:mb-[30px] 3xl:mb-[40px]">
        {data?.form_title}
      </h3>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="relative w-full mb-[15px] 2xl:mb-[20px] 3xl:mb-[30px]">
                <FormControl>
                  <Input
                    {...field}
                    onChange={(e) => field.onChange(e.target.value)}
                    onBlur={(e) => {
                      field.onBlur();
                      field.onChange(e.target.value.trim());
                    }}
                    placeholder=" "
                    className={inputCls}
                  />
                </FormControl>
                <FormLabel
                  className={`${labelCls} ${isRtl ? "right-0" : "left-0"}`}
                >
                  {tr.name}
                  <span className="text-[#1577F0]">*</span>
                </FormLabel>
                <FormMessage className="text-[11px] font-normal text-red-600" />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="relative w-full mb-[15px] 2xl:mb-[20px] 3xl:mb-[30px]">
                <FormControl>
                  <Input
                    {...field}
                    onChange={(e) => field.onChange(e.target.value)}
                    onBlur={(e) => {
                      field.onBlur();
                      field.onChange(e.target.value.trim());
                    }}
                    placeholder=" "
                    className={inputCls}
                  />
                </FormControl>
                <FormLabel
                  className={`${labelCls} ${isRtl ? "right-0" : "left-0"}`}
                >
                  {tr.email}
                  <span className="text-[#1577F0]">*</span>
                </FormLabel>
                <FormMessage className="text-[11px] font-normal text-red-600" />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="relative w-full mb-[15px] 2xl:mb-[20px] 3xl:mb-[30px]">
                <FormControl>
                  <Input
                    {...field}
                    onChange={(e) => field.onChange(e.target.value)}
                    onBlur={(e) => {
                      field.onBlur();
                      field.onChange(e.target.value.trim());
                    }}
                    placeholder=" "
                    className={inputCls}
                  />
                </FormControl>
                <FormLabel
                  className={`${labelCls} ${isRtl ? "right-0" : "left-0"}`}
                >
                  {tr.phone}
                  <span className="text-[#1577F0]">*</span>
                </FormLabel>
                <FormMessage className="text-[11px] font-normal text-red-600" />
              </FormItem>
            )}
          />

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="relative w-full mb-[15px] 2xl:mb-[20px] 3xl:mb-[30px]">
                <FormControl>
                  <Textarea
                    {...field}
                    onChange={(e) => field.onChange(e.target.value)}
                    onBlur={(e) => {
                      field.onBlur();
                      field.onChange(normalizeText(e.target.value));
                    }}
                    placeholder=" "
                    rows={3}
                    className={`${inputCls} pt-[35px] 3xl:pt-[40px] min-h-[50px] resize-none`}
                  />
                </FormControl>
                <FormLabel
                  className={`${labelCls} ${isRtl ? "right-0" : "left-0"}`}
                >
                  {tr.message}
                </FormLabel>
                <FormMessage className="text-[11px] font-normal text-red-600" />
              </FormItem>
            )}
          />

          {/* Submit */}
          {/* <Button
            type="submit"
            disabled={!form.formState.isValid || form.formState.isSubmitting}
            className="text-[14px] font-bold text-white bg-[#1577F0] hover:bg-[#0f5eda] px-10 h-[40px] 2xl:h-[45px] 3xl:h-[50px] mt-[20px] rounded-full cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          > */}
          <button
            type="submit"
            disabled={!form.formState.isValid || form.formState.isSubmitting}
            className="text-[10px] xl:text-[12px] 2xl:text-[14.5px] 3xl:text-[18px] leading-[1] font-bold text-white w-full max-w-[80px] xl:max-w-[95px] 2xl:max-w-[114px] 3xl:max-w-[143px] h-[30.5px] xl:h-[35.5px] 2xl:h-[42.6px] 3xl:h-[53.4px] p-2 rounded-full bg-[#066FEF] cursor-pointer transition-all flex items-center justify-center"
          >
            {form.formState.isSubmitting ? tr.submitting : tr.send}
          </button>
        </form>
      </Form>
    </div>
  );
}
