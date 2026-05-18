"use client";

import * as React from "react";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import {
  Field,
  FieldError,
  FieldGroup,
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
      const sqlPattern =
        /\b(SELECT|INSERT|UPDATE|DELETE|DROP|ALTER|TRUNCATE|EXEC|UNION)\b/i;
      if (sqlPattern.test(trimmed)) return false;
      if (!/^[^\d!@#$%^&*()_+=\[\]{};:"\\|,.<>\/?`~]+$/u.test(trimmed))
        return false;
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
    .min(10, { message: "Phone number is required" })
    .max(20, { message: "Phone number is too long" })
    .refine((value) => {
      const trimmed = value.trim();
      const validPattern = /^\+?\d[\d\s()-]{7,19}$/;
      if (!validPattern.test(trimmed)) return false;
      if ((trimmed.match(/\+/g) || []).length > 1) return false;
      const digitsOnly = trimmed.replace(/\D/g, "");
      if (/^0+$/.test(digitsOnly)) return false;
      if (digitsOnly.length > 15) return false;
      if (/[a-zA-Z<>"'`;]|--|\)\s*;/.test(trimmed)) return false;
      return true;
    }, "Invalid phone number, max 15 digits allowed"),

  selectDealer: z
    .string()
    .min(1, { message: "Please select a dealer" })
    .refine((value) => {
      if (!value || !value.trim()) return false;
      if (/<script[\s\S]*?>[\s\S]*?<\/script>/i.test(value)) return false;
      if (/javascript:/i.test(value)) return false;
      return true;
    }, "Invalid dealer selection"),

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
    .refine(
      (value) => ["Yes", "No"].includes(value),
      "Invalid option selected"
    ),

  agreeToTerms: z.literal(true, {
    errorMap: () => ({
      message:
        "You must agree to the terms and conditions and privacy policy of this website.",
    }),
  }),
});

const labelClasses =
  "text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-normal font-normal text-black";

const inputClasses =
  "text-[12px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[18px] leading-normal font-normal text-black placeholder:text-black w-full h-[35px] xl:h-[40px] 2xl:h-[45px] 3xl:h-[50px] rounded-none bg-white dark:bg-white border-white border-b-[#d9d6ce] focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:border-b-black selection:bg-primary-800 appearance-none shadow-none px-0";

const errorClass =
  "text-[10px] md:text-[10px] xl:text-[11px] 3xl:text-[12px] leading-normal font-normal text-red-500 mt-1";

export function EnquireNowForm({ dealers = [] }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      selectDealer: "",
      message: "",
      installationSupport: "Yes",
      agreeToTerms: false,
    },
  });

  // Trim on blur — same pattern as old form
  const handleBlurTrim = (fieldName) => {
    const value = form.getValues(fieldName);
    if (typeof value === "string") {
      const trimmed = value.trim();
      if (trimmed !== value) {
        form.setValue(fieldName, trimmed, {
          shouldValidate: true,
          shouldDirty: true,
        });
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
      const formData = new FormData();
      formData.append("name", data.fullName);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      formData.append("dealer", data.selectDealer);
      formData.append("message", data.message || "");
      formData.append("commercial_messages", data.installationSupport);
      formData.append("agree_to_terms", data.agreeToTerms ? "1" : "0");

      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Submission Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return <div>Success</div>;
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full" noValidate>
      {/* Full Name */}
      <div className="mb-2 xl:mb-2.5 2xl:mb-3 3xl:mb-4">
        <div className="grid grid-cols-1 gap-4 xl:gap-5 2xl:gap-6 3xl:gap-8">
          <FormBlock
            item={{ name: "fullName", placeholder: "Name*" }}
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
            item={{ name: "email", placeholder: "Email*", type: "email" }}
            form={form}
            isSubmitting={isSubmitting}
            onBlurTrim={handleBlurTrim}
          />
          <FormBlock
            item={{ name: "phone", placeholder: "Phone*" }}
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
              name: "selectDealer",
              placeholder: "Select Dealer*",
              type: "select",
              options: dealers.map((d) => d.dealer),
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
                <FieldLabel className="sr-only">Message</FieldLabel>
                <Textarea
                  {...field}
                  placeholder="Message"
                  className={cn(
                    inputClasses,
                    "min-h-[50px] xl:min-h-[68px] 2xl:min-h-[70px] 3xl:min-h-[90px]"
                  )}
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
                  <FieldError
                    errors={[fieldState.error]}
                    className={errorClass}
                  />
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
              <FieldLabel
                className={cn(
                  labelClasses,
                  "mb-2 xl:mb-2.5 2xl:mb-3 3xl:mb-4 block"
                )}
              >
                Terms and Conditions. I am happy to receive commercial messages
                from Ford Motor Company and affiliated authorized partners.
              </FieldLabel>
              <RadioGroup
                value={field.value}
                onValueChange={field.onChange}
                className="flex-1 flex flex-wrap gap-x-2.5 xl:gap-x-[16px] 2xl:gap-x-[18px] 3xl:gap-x-[22px]"
              >
                {["Yes", "No"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <RadioGroupItem
                      value={item}
                      id={`install-${item}`}
                      className="text-[#066fef] border-1 [&_svg]:fill-[#066fef] hover:scale-100"
                    />
                    <Label htmlFor={`install-${item}`} className={labelClasses}>
                      {item}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              {fieldState.invalid && (
                <FieldError
                  errors={[fieldState.error]}
                  className={errorClass}
                />
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
                  I agree to the terms and conditions and privacy policy of this
                  website.
                </Label>
              </div>
              {fieldState.invalid && (
                <FieldError
                  errors={[fieldState.error]}
                  className={errorClass}
                />
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
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </button>
      </div>
    </form>
  );
}

function FormBlock({ item, form, isSubmitting, extraDisabled, onBlurTrim }) {
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
            >
              <SelectTrigger
                className={cn(
                  inputClasses,
                  "data-[placeholder]:text-black data-[size=default]:h-[35px] xl:data-[size=default]:h-[40px] 2xl:data-[size=default]:h-[45px] 3xl:data-[size=default]:h-[50px] justify-between"
                )}
              >
                <SelectValue
                  placeholder={item.placeholder}
                  disabled={isSubmitting || item.isLoading}
                />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  {item?.options?.map((opt) => {
                    const isString = typeof opt === "string";
                    const value = isString ? opt : opt?.slug;
                    const label = isString ? opt : opt?.title || opt?.name;
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