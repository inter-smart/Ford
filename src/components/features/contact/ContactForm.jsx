"use client";

import { useForm } from "react-hook-form";
import RecaptchaScript from "@/components/common/RecaptchaScript";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { getRecaptchaToken } from "@/lib/recaptcha";
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// ─── Translations ────────────────────────────────────────────────────────────
const t = {
  en: {
    name:              "Name",
    email:             "Email",
    phone:             "Phone",
    message:           "Message",
    send:              "Send",
    submitting:        "Submitting...",
    // validation
    nameRequired:      "Name is required",
    nameMin2:          "Name must be at least 2 characters",
    nameMax50:         "Name cannot exceed 50 characters",
    nameInvalid:       "Invalid name",
    emailRequired:     "Email is required",
    emailTooLong:      "Email is too long",
    emailInvalid:      "Invalid email address",
    phoneRequired:     "Phone number is required",
    phoneLength:       "Phone number must be between 10 and 20 characters",
    phoneFormat:       "Phone number format is invalid",
    phonePlus:         "Phone number can contain only one '+' symbol",
    phoneAllZeros:     "Phone number cannot be all zeros",
    phoneMaxDigits:    "Phone number cannot exceed 15 digits",
    phoneInvalidChars: "Phone number contains invalid characters",
    messageInvalid:    "Please enter a valid message",
    // toasts
    toastSuccess:      "Enquiry submitted successfully!",
    toastError:        "Something went wrong. Please try again.",
    toastException:    "An error occurred while submitting the form.",
  },
  ar: {
    name:              "الاسم",
    email:             "البريد الإلكتروني",
    phone:             "رقم الهاتف",
    message:           "الرسالة",
    send:              "إرسال",
    submitting:        "جارٍ الإرسال...",
    // validation
    nameRequired:      "الاسم مطلوب",
    nameMin2:          "يجب أن يتكون الاسم من حرفين على الأقل",
    nameMax50:         "لا يمكن أن يتجاوز الاسم 50 حرفاً",
    nameInvalid:       "اسم غير صالح",
    emailRequired:     "البريد الإلكتروني مطلوب",
    emailTooLong:      "البريد الإلكتروني طويل جداً",
    emailInvalid:      "عنوان البريد الإلكتروني غير صالح",
    phoneRequired:     "رقم الهاتف مطلوب",
    phoneLength:       "يجب أن يتراوح رقم الهاتف بين 10 و20 رقماً",
    phoneFormat:       "تنسيق رقم الهاتف غير صالح",
    phonePlus:         "لا يمكن أن يحتوي رقم الهاتف على أكثر من إشارة '+'",
    phoneAllZeros:     "لا يمكن أن يكون رقم الهاتف أصفاراً فقط",
    phoneMaxDigits:    "لا يمكن أن يتجاوز رقم الهاتف 15 رقماً",
    phoneInvalidChars: "رقم الهاتف يحتوي على أحرف غير صالحة",
    messageInvalid:    "يرجى إدخال رسالة صحيحة",
    // toasts
    toastSuccess:      "تم إرسال الاستفسار بنجاح!",
    toastError:        "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
    toastException:    "حدث خطأ أثناء إرسال النموذج.",
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
      .min(2, tr.nameMin2)
      .max(50, tr.nameMax50)
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
        return true;
      }, tr.nameInvalid),

    email: z
      .string()
      .min(5, tr.emailRequired)
      .max(254, tr.emailTooLong)
      .refine((value) => {
        const trimmed = value.trim();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
        if (!trimmed) return false;
        if (!emailRegex.test(trimmed)) return false;
        if (/<script[\s\S]*?>[\s\S]*?<\/script>/i.test(trimmed)) return false;
        if (/["'`;]|--/.test(trimmed)) return false;
        if ((trimmed.match(/@/g) || []).length !== 1) return false;
        return true;
      }, tr.emailInvalid),

    phone: z
      .string()
      .trim()
      .min(1, { message: tr.phoneRequired })
      .superRefine((value, ctx) => {
        if (value.length < 10 || value.length > 20) {
          ctx.addIssue({ code: z.ZodIssueCode.custom, message: tr.phoneLength });
          return;
        }
        const validPattern = /^\+?\d[\d\s()-]{7,19}$/;
        if (!validPattern.test(value)) {
          ctx.addIssue({ code: z.ZodIssueCode.custom, message: tr.phoneFormat });
          return;
        }
        if ((value.match(/\+/g) || []).length > 1) {
          ctx.addIssue({ code: z.ZodIssueCode.custom, message: tr.phonePlus });
          return;
        }
        const digitsOnly = value.replace(/\D/g, "");
        if (/^0+$/.test(digitsOnly)) {
          ctx.addIssue({ code: z.ZodIssueCode.custom, message: tr.phoneAllZeros });
          return;
        }
        if (digitsOnly.length > 15) {
          ctx.addIssue({ code: z.ZodIssueCode.custom, message: tr.phoneMaxDigits });
          return;
        }
        if (/[a-zA-Z<>"'`;]|--|\)\s*;/.test(value)) {
          ctx.addIssue({ code: z.ZodIssueCode.custom, message: tr.phoneInvalidChars });
          return;
        }
      }),

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
          /[@#!$%^&*()]/,
        ];
        for (const pattern of forbiddenPatterns) {
          if (pattern.test(trimmed)) return false;
        }
        if (!/[a-zA-Z0-9\u0600-\u06FF]/.test(trimmed)) return false; // support Arabic chars
        if (trimmed.length > 2000) return false;
        return true;
      }, tr.messageInvalid),
  });
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function ContactForm({ data, lang = "en" }) {
  const tr     = t[lang] ?? t.en;
  const isRtl  = lang === "ar";
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
        name:    formData.name.trim(),
        email:   formData.email.trim(),
        phone:   formData.phone.trim(),
        message: formData.message?.trim() || "",
      };

      const token = await getRecaptchaToken("submit");
      finalData.recaptcha = token;

      const response = await fetch(
        "https://dev18.intersmarthosting.in/Ford/wp-json/ford/v1/enquiry",
        {
          method:  "POST",
          headers: { "Content-Type": "application/json" },
          body:    JSON.stringify(finalData),
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
      console.error(error);
      toast.error(tr.toastException);
    }
  };

  // Shared field classes
  const inputCls =
    "peer text-[12px] 2xl:text-[14px] 3xl:text-[16px] font-normal text-[#000000] w-full pb-[15px] 3xl:pb-[20px] pt-[30px] 3xl:pt-[35px] border-none border-b border-[#D9D6CE] rounded-none px-0 focus-visible:ring-0 focus:border-black";
  const labelCls =
    "absolute top-[20px] text-[12px] 2xl:text-[14px] 3xl:text-[16px] font-normal text-[#000000] transition-all duration-200 peer-focus:top-0 peer-focus:text-[12px] peer-focus:text-black peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:text-black pointer-events-none";

  return (
    <div className="w-full" dir={isRtl ? "rtl" : "ltr"}>
      <RecaptchaScript />
      <h3 className="text-[25px] text-black font-normal mb-[15px] lg:mb-[20px] xl:mb-[35px] 2xl:mb-[50px]">
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
                    onBlur={(e) => { field.onBlur(); field.onChange(e.target.value.trim()); }}
                    placeholder=" "
                    className={inputCls}
                  />
                </FormControl>
                <FormLabel className={`${labelCls} ${isRtl ? "right-0" : "left-0"}`}>
                  {tr.name}<span className="text-[#1577F0]">*</span>
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
                    onBlur={(e) => { field.onBlur(); field.onChange(e.target.value.trim()); }}
                    placeholder=" "
                    className={inputCls}
                  />
                </FormControl>
                <FormLabel className={`${labelCls} ${isRtl ? "right-0" : "left-0"}`}>
                  {tr.email}<span className="text-[#1577F0]">*</span>
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
                    onBlur={(e) => { field.onBlur(); field.onChange(e.target.value.trim()); }}
                    placeholder=" "
                    className={inputCls}
                  />
                </FormControl>
                <FormLabel className={`${labelCls} ${isRtl ? "right-0" : "left-0"}`}>
                  {tr.phone}<span className="text-[#1577F0]">*</span>
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
                    onBlur={(e) => { field.onBlur(); field.onChange(normalizeText(e.target.value)); }}
                    placeholder=" "
                    rows={3}
                    className={`${inputCls} pt-[35px] 3xl:pt-[40px] min-h-[50px] resize-none`}
                  />
                </FormControl>
                <FormLabel className={`${labelCls} ${isRtl ? "right-0" : "left-0"}`}>
                  {tr.message}
                </FormLabel>
                <FormMessage className="text-[11px] font-normal text-red-600" />
              </FormItem>
            )}
          />

          {/* Submit */}
          <Button
            type="submit"
            disabled={!form.formState.isValid || form.formState.isSubmitting}
            className="text-[14px] font-bold text-white bg-[#1577F0] hover:bg-[#0f5eda] px-10 h-[40px] 2xl:h-[45px] 3xl:h-[50px] mt-[20px] rounded-full cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {form.formState.isSubmitting ? tr.submitting : tr.send}
          </Button>

        </form>
      </Form>
    </div>
  );
}