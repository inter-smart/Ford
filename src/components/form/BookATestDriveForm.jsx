"use client";

import * as React from "react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "sonner";
import { getRecaptchaToken } from "@/lib/recaptcha";
import RecaptchaScript from "@/components/common/RecaptchaScript";
import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(1, { message: "Name is required" })
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name cannot exceed 50 characters" })
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
    }, "Invalid name"),

  email: z
    .string()
    .min(5, { message: "Email is required" })
    .max(254, { message: "Email is too long" })
    .refine((value) => {
      const trimmed = value.trim();
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;
      if (!trimmed) return false;
      if (!emailRegex.test(trimmed)) return false;
      if (/<script[\s\S]*?>[\s\S]*?<\/script>/i.test(trimmed)) return false;
      if (/["'`;]|--/.test(trimmed)) return false;
      if ((trimmed.match(/@/g) || []).length !== 1) return false;
      return true;
    }, "Invalid email address"),

  phone: z
    .string()
    .trim()
    .min(1, { message: "Phone number is required" })
    .superRefine((value, ctx) => {
      if (value.length < 10 || value.length > 20) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Phone number must be between 10 and 20 characters" });
        return;
      }
      const validPattern = /^\+?\d[\d\s()-]{7,19}$/;
      if (!validPattern.test(value)) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Phone number format is invalid" });
        return;
      }
      if ((value.match(/\+/g) || []).length > 1) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Phone number can contain only one '+' symbol" });
        return;
      }
      const digitsOnly = value.replace(/\D/g, "");
      if (/^0+$/.test(digitsOnly)) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Phone number cannot be all zeros" });
        return;
      }
      if (digitsOnly.length > 15) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Phone number cannot exceed 15 digits" });
        return;
      }
      if (/[a-zA-Z<>"'`;]|--|\)\s*;/.test(value)) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Phone number contains invalid characters" });
        return;
      }
    }),

  selectDealer: z
    .string()
    .min(1, { message: "Please select a dealer" })
    .refine((value) => {
      if (!value || !value.trim()) return false;
      if (/<script[\s\S]*?>[\s\S]*?<\/script>/i.test(value)) return false;
      if (/javascript:/i.test(value)) return false;
      return true;
    }, "Invalid dealer selection"),

  vehicleModel: z
    .string()
    .min(1, { message: "Vehicle model is required" })
    .max(100, { message: "Vehicle model is too long" }),

  vehicleMake: z
    .string()
    .min(1, { message: "Vehicle make is required" })
    .max(100, { message: "Vehicle make is too long" }),

  vehicleRegistrationNumber: z
    .string()
    .optional(),

  vehicleMileage: z
    .string()
    .min(1, { message: "Vehicle mileage is required" })
    .max(20, { message: "Mileage value is too long" }),

  preferredDate: z
    .string()
    .min(1, { message: "Preferred date is required" })
    .refine((value) => {
      const date = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return date >= today;
    }, "Date cannot be in the past"),

  preferredTime: z
    .string()
    .min(1, { message: "Preferred time is required" }),

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
      ];
      for (const pattern of forbiddenPatterns) {
        if (pattern.test(trimmed)) return false;
      }
      if (!/[a-zA-Z0-9]/.test(trimmed)) return false;
      if (trimmed.length > 2000) return false;
      return true;
    }, "Please enter a valid message"),

  installationSupport: z
    .string()
    .min(1, { message: "Please select an option" })
    .refine((value) => ["Yes", "No"].includes(value), "Invalid option selected"),

  agreeToTerms: z.literal(true, {
    errorMap: () => ({
      message: "You must agree to the terms and conditions and privacy policy of this website.",
    }),
  }),
});

const labelClasses =
  "text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-normal font-normal text-black";

const inputClasses =
  "text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-normal font-normal text-black placeholder:text-black w-full h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[50px] rounded-none bg-white dark:bg-white border-white border-b-[#d9d6ce] focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:border-b-black selection:bg-primary-800 appearance-none shadow-none px-0";

const errorClass =
  "text-[10px] md:text-[10px] xl:text-[11px] 3xl:text-[12px] leading-normal font-normal text-red-500 mt-1";

// Time slot options
const timeSlots = [
  "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM",
  "04:00 PM", "05:00 PM",
];

// Today's date formatted as YYYY-MM-DD for min attribute
const todayDate = new Date().toISOString().split("T")[0];

export function BookATestDriveForm({ dealers = [], pageTitle = "", prefillModel = "", prefillMake = "",}) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      selectDealer: "",
      vehicleModel:  prefillModel,
      vehicleMake:   prefillMake,
      vehicleRegistrationNumber: "",
      vehicleMileage: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
      installationSupport: "Yes",
      agreeToTerms: false,
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
        fullName:                    data.fullName,
        email:                       data.email,
        phone:                       data.phone,
        dealer:                      data.selectDealer,
        vehicleModel:                data.vehicleModel,
        vehicleMake:                 data.vehicleMake,
        vehicleRegistrationNumber:   data.vehicleRegistrationNumber || "",
        vehicleMileage:              data.vehicleMileage,
        preferredDate:               data.preferredDate,
        preferredTime:               data.preferredTime,
        message:                     data.message || "",
        commercial_messages:         data.installationSupport,
        agree_to_terms:              data.agreeToTerms ? "1" : "0",
        source_page_title:           pageTitle,
        source_page_id:              typeof window !== "undefined" ? window.location.pathname : "",
        recaptcha_token:             recaptchaToken,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/wp-json/ford/v1/test-drive/submit`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (result.success) {
        toast.success("Your test drive booking has been submitted successfully! We'll confirm your booking shortly.");
        form.reset();
      } else {
        toast.error(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      toast.error("Failed to submit booking. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <RecaptchaScript />
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full" noValidate>

        {/* Name + Email */}
        <div className="mb-2 xl:mb-2.5 2xl:mb-3 3xl:mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-5 2xl:gap-6 3xl:gap-8">
            <FormBlock item={{ name: "fullName", placeholder: "Name*" }} form={form} isSubmitting={isSubmitting} onBlurTrim={handleBlurTrim} />
            <FormBlock item={{ name: "email", placeholder: "Email*", type: "email" }} form={form} isSubmitting={isSubmitting} onBlurTrim={handleBlurTrim} />
          </div>
        </div>

        {/* Phone + Dealer */}
        <div className="mb-2 xl:mb-2.5 2xl:mb-3 3xl:mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-5 2xl:gap-6 3xl:gap-8">
            <FormBlock item={{ name: "phone", placeholder: "Phone*" }} form={form} isSubmitting={isSubmitting} onBlurTrim={handleBlurTrim} />
            <FormBlock
              item={{
                name: "selectDealer",
                placeholder: "Select Dealer*",
                type: "select",
                options: dealers.length > 0 ? dealers.map((d) => d.dealer) : ["Dealer 1", "Dealer 2", "Dealer 3"],
              }}
              form={form}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>

        {/* Vehicle Model + Vehicle Make */}
        <div className="mb-2 xl:mb-2.5 2xl:mb-3 3xl:mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-5 2xl:gap-6 3xl:gap-8">
            <FormBlock item={{ name: "vehicleModel", placeholder: "Vehicle Model*" }} form={form} isSubmitting={isSubmitting} onBlurTrim={handleBlurTrim} extraDisabled={!!prefillModel} />
            <FormBlock item={{ name: "vehicleMake", placeholder: "Vehicle Make*" }} form={form} isSubmitting={isSubmitting} onBlurTrim={handleBlurTrim} extraDisabled={!!prefillMake} />
          </div>
        </div>

        {/* Registration + Mileage */}
        <div className="mb-2 xl:mb-2.5 2xl:mb-3 3xl:mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-5 2xl:gap-6 3xl:gap-8">
            <FormBlock item={{ name: "vehicleRegistrationNumber", placeholder: "Registration Number" }} form={form} isSubmitting={isSubmitting} onBlurTrim={handleBlurTrim} />
            <FormBlock item={{ name: "vehicleMileage", placeholder: "Vehicle Mileage*" }} form={form} isSubmitting={isSubmitting} onBlurTrim={handleBlurTrim} />
          </div>
        </div>

        {/* Preferred Date + Time */}
        <div className="mb-2 xl:mb-2.5 2xl:mb-3 3xl:mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-5 2xl:gap-6 3xl:gap-8">
            <FormBlock
              item={{ name: "preferredDate", placeholder: "Preferred Date*", type: "date", min: todayDate }}
              form={form}
              isSubmitting={isSubmitting}
            />
            <FormBlock
              item={{
                name: "preferredTime",
                placeholder: "Preferred Time*",
                type: "select",
                options: timeSlots,
              }}
              form={form}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>

        {/* Message */}
        <div className="mb-2 xl:mb-2.5 2xl:mb-3 3xl:mb-4">
          <Controller
            name="message"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field>
                <FieldLabel className="sr-only">Message</FieldLabel>
                <Textarea
                  {...field}
                  placeholder="Message"
                  className={cn(inputClasses, "min-h-[50px] xl:min-h-[68px] 2xl:min-h-[70px] 3xl:min-h-[90px]")}
                  disabled={isSubmitting}
                  onBlur={() => {
                    field.onBlur();
                    const normalized = normalizeText(field.value);
                    form.setValue("message", normalized);
                    form.trigger("message");
                  }}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} className={errorClass} />
                )}
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
                  Terms and Conditions. I am happy to receive commercial messages from Ford Motor Company and affiliated authorized partners.
                </FieldLabel>
                <RadioGroup
                  value={field.value}
                  onValueChange={field.onChange}
                  className="flex-1 flex flex-wrap gap-x-2.5 xl:gap-x-[16px] 2xl:gap-x-[18px] 3xl:gap-x-[22px]"
                >
                  {["Yes", "No"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <RadioGroupItem value={item} id={`drive-install-${item}`} className="text-[#066fef] border-1 [&_svg]:fill-[#066fef] hover:scale-100" />
                      <Label htmlFor={`drive-install-${item}`} className={labelClasses}>{item}</Label>
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
                    I agree to the terms and conditions and privacy policy of this website.
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
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </button>
        </div>

      </form>
    </>
  );
}

function FormBlock({ item, form, isSubmitting, extraDisabled, onBlurTrim }) {
  return (
    <Controller
      name={item.name}
      control={form.control}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid} className="w-full space-y-0">
          <FieldLabel className={cn(labelClasses, "sr-only")}>{item.placeholder}</FieldLabel>
          {item.type === "select" ? (
            <Select
              onValueChange={(value) =>
                item.onValueChange ? item.onValueChange(value, field.onChange) : field.onChange(value)
              }
              value={field.value}
              disabled={isSubmitting || item.disabled || extraDisabled}
            >
              <SelectTrigger className={cn(inputClasses, "data-[placeholder]:text-black data-[size=default]:h-[35px] xl:data-[size=default]:h-[40px] 2xl:data-[size=default]:h-[45px] 3xl:data-[size=default]:h-[50px] justify-between")}>
                <SelectValue placeholder={item.placeholder} disabled={isSubmitting || item.isLoading} />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  {item?.options?.map((opt) => {
                    const isString = typeof opt === "string";
                    const value = isString ? opt : opt?.slug;
                    const label = isString ? opt : opt?.title || opt?.name;
                    return <SelectItem key={value} value={value}>{label}</SelectItem>;
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