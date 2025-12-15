"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

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

// Normalize text on blur: trims, converts tabs/carriage returns to newlines, collapses multiple spaces
function normalizeText(value) {
  if (!value) return "";

  return value
    .replace(/\\r/g, "\r")       // convert literal \r
    .replace(/\\n/g, "\n")       // convert literal \n
    .replace(/\\t/g, "    ")     // convert literal \t to 4 spaces
    .replace(/\r\n?/g, "\n")     // normalize CR/LF to LF
    .replace(/\t+/g, "    ")     // tabs to 4 spaces
    .replace(/[ ]{2,}/g, " ")    // collapse multiple spaces
    .trim();                      // trim leading/trailing spaces
}



const FormSchema = z.object({
  name: z
  .string()
  .trim()
  .min(1, "Name is required") // empty string
  .min(2, "Name must be at least 2 characters") // only 1 char
  .max(50, "Name cannot exceed 50 characters")
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
  .min(5, "Email is required")
  .max(254, "Email is too long") // max length per RFC
  .refine((value) => {
    const trimmed = value.trim();

    // Basic email regex: allows +, subdomains, long domains, simple TLD
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,}$/;

    if (!trimmed) return false; // empty
    if (!emailRegex.test(trimmed)) return false; // invalid structure
    if (/<script[\s\S]*?>[\s\S]*?<\/script>/i.test(trimmed)) return false; // XSS
    if (/["'`;]|--/.test(trimmed)) return false; // basic SQL injection chars
    if ((trimmed.match(/@/g) || []).length !== 1) return false; // multiple @
    return true;
  }, "Invalid email address"),
phone: z
  .string()
  .refine((value) => {
    if (!value) return false;

    const trimmed = value.trim();

    // -------------------------
    // 1️⃣ Must be 10–20 chars
    // -------------------------
    if (trimmed.length < 10 || trimmed.length > 20) return false;

    // -------------------------
    // 2️⃣ Must match allowed pattern
    // -------------------------
    const validPattern = /^\+?\d[\d\s()-]{7,19}$/;
    if (!validPattern.test(trimmed)) return false;

    // -------------------------
    // 3️⃣ Only 1 "+"
    // -------------------------
    if ((trimmed.match(/\+/g) || []).length > 1) return false;

    // -------------------------
    // 4️⃣ No all-zero numbers
    // -------------------------
    const digitsOnly = trimmed.replace(/\D/g, "");
    if (/^0+$/.test(digitsOnly)) return false;

    // -------------------------
    // 5️⃣ Max 15 digits total
    // -------------------------
    if (digitsOnly.length > 15) return false;

    // -------------------------
    // 6️⃣ No letters / no XSS
    // -------------------------
    if (/[a-zA-Z<>"'`;]|--|\)\s*;/.test(trimmed)) return false;

    return true;
  }, "Invalid phone number"),

  message: z
  .string()
  .optional()
  .refine((value) => {
    if (!value) return true; // optional field can be empty

    const trimmed = value.replace(/\s+/g, " ").trim(); // normalize whitespace

    // Reject if too short meaningful content
    if (trimmed.length < 2) return false;

    // Reject obvious scripts, HTML tags, or SQL injections
    const forbiddenPatterns = [
      /<script[\s\S]*?>[\s\S]*?<\/script>/i,
      /<img[\s\S]*?>/i,
      /<iframe[\s\S]*?>/i,
      /{{.*?constructor.*?}}/i,
      /['";]?\s*DROP\s+TABLE/i,
      /javascript:/i,
      /[@#!$%^&*()]/ // only symbols not part of meaningful text
    ];

    for (const pattern of forbiddenPatterns) {
      if (pattern.test(trimmed)) return false;
    }

    // Reject if input is all non-alphabetic (like only symbols or numbers)
    if (!/[a-zA-Z0-9]/.test(trimmed)) return false;

    // Reject if input is extremely long (example: > 2000 chars)
    if (trimmed.length > 2000) return false;

    return true;
  }, "Please enter a valid message"),
});

export default function ContactForm({ data }) {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    mode: "onBlur",
reValidateMode: "onBlur",

    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  
  /* ---------------------------
      LOAD reCAPTCHA SCRIPT
  ----------------------------*/
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.google.com/recaptcha/api.js?render=6LcnDSUsAAAAAPzuIuNcagH8xs8f_HIbB7_GYaBD";
    script.async = true;
    document.body.appendChild(script);
  }, []);

const onSubmit = async (formData) => {
  try {
    const finalData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message?.trim() || "",
    };

    const token = await grecaptcha.execute("6LcnDSUsAAAAAPzuIuNcagH8xs8f_HIbB7_GYaBD", { action: "submit" });
    finalData.recaptcha = token;

    const response = await fetch("https://dev18.intersmarthosting.in/Ford/wp-json/ford/v1/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(finalData),
    });

    const result = await response.json();

    if (result.success) {
      toast.success(result.message || "Enquiry submitted successfully!");
      form.reset();
    } else {
      toast.error(result.message || "Something went wrong. Please try again.");
    }

  } catch (error) {
    console.error(error);
    toast.error("An error occurred while submitting the form.");
  }
};




  return (
    <div className="w-full">
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
                  onChange={(e) => field.onChange(e.target.value)} // allow typing spaces freely
                  onBlur={(e) => {
            field.onBlur(); 
            field.onChange(e.target.value.trim());
          }}
                  placeholder=" "
                  className="peer text-[12px] 2xl:text-[14px] 3xl:text-[16px] font-normal text-[#000000] w-full pb-[25px] 3xl:pb-[30px] pt-[20px] border-none border-b border-[#D9D6CE] rounded-none px-0 focus-visible:ring-0 focus:border-black"
                />
                </FormControl>
                <FormLabel className="absolute left-0 top-[15px] text-[12px] 2xl:text-[14px] 3xl:text-[16px] font-normal text-[#000000] transition-all duration-200 peer-focus:top-0 peer-focus:text-[12px] peer-focus:text-black peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:text-black pointer-events-none">
                  Name<span className="text-[#1577F0]">*</span>
                </FormLabel>
                <FormMessage className="text-[12px] 2xl:text-[14px] 3xl:text-[16px] font-normal text-[#666666]" />
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
                    className="peer text-[12px] 2xl:text-[14px] 3xl:text-[16px] font-normal text-[#000000] w-full pb-[25px] 3xl:pb-[30px] pt-[20px] border-none border-b border-[#D9D6CE] rounded-none px-0 focus-visible:ring-0 focus:border-black"
                  />
                </FormControl>
                <FormLabel className="absolute left-0 top-[15px] text-[12px] 2xl:text-[14px] 3xl:text-[16px] font-normal text-[#000000] transition-all duration-200 peer-focus:top-0 peer-focus:text-[12px] peer-focus:text-black peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:text-black pointer-events-none">
                  Email<span className="text-[#1577F0]">*</span>
                </FormLabel>
                <FormMessage className=" text-[12px] 2xl:text-[14px] 3xl:text-[16px] font-normal text-[#666666]" />
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
                    className="peer text-[12px] 2xl:text-[14px] 3xl:text-[16px] font-normal text-[#000000] w-full pb-[25px] 3xl:pb-[30px] pt-[20px] border-none border-b border-[#D9D6CE] rounded-none px-0 focus-visible:ring-0 focus:border-black"
                  />
                </FormControl>
                <FormLabel className="absolute left-0 top-[15px] text-[12px] 2xl:text-[14px] 3xl:text-[16px] font-normal text-[#000000] transition-all duration-200 peer-focus:top-0 peer-focus:text-[12px] peer-focus:text-black peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:text-black pointer-events-none">
                  Phone<span className="text-[#1577F0]">*</span>
                </FormLabel>
                <FormMessage className=" text-[12px] 2xl:text-[14px] 3xl:text-[16px] font-normal text-[#666666]" />
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
                    onChange={(e) => field.onChange(e.target.value)} // allow typing freely
                    onBlur={(e) => {
            field.onBlur(); 
            field.onChange(e.target.value.trim());
          }}
                    placeholder=" "
                    rows={3}
                    className="peer text-[12px] 2xl:text-[14px] 3xl:text-[16px] font-normal text-[#000000] w-full pb-[25px] 3xl:pb-[30px] pt-[20px] border-none border-b border-[#D9D6CE] rounded-none min-h-[50px] px-0 focus-visible:ring-0 focus:border-black resize-none"
                  />
                </FormControl>
                <FormLabel className="absolute left-0 top-[15px] text-[12px] 2xl:text-[14px] 3xl:text-[16px] font-normal text-[#000000] transition-all duration-200 peer-focus:top-0 peer-focus:text-[12px] peer-focus:text-black peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:text-black pointer-events-none">
                  Message
                </FormLabel>
                <FormMessage className=" text-[12px] 2xl:text-[14px] 3xl:text-[16px] font-normal text-[#666666]" />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={!form.formState.isValid}
            className="text-[14px] font-bold text-white bg-[#1577F0] hover:bg-[#0f5eda] px-10 h-[40px] 2xl:h-[45px] 3xl:h-[50px] mt-[20px] rounded-full cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Send
          </Button>
        </form>
      </Form>
    </div>
  );
}
