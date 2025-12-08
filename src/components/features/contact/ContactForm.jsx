"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

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

const FormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email").min(1, "Email is required"),
  phone: z.string().min(1, "Phone is required"),
  message: z.string().min(1, "Message is required"),
});

export default function ContactForm({ data }) {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
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
                    placeholder=" "
                    className="peer text-[12px] 2xl:text-[14px] 3xl:text-[16px] font-normal text-[#000000] w-full  pb-[25px] 3xl:pb-[30px]  pt-[20px] border-none border-b border-[#D9D6CE] rounded-none px-0 focus-visible:ring-0 focus:border-black"
                    {...field}
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
                    placeholder=" "
                    className="peer text-[12px] 2xl:text-[14px] 3xl:text-[16px] font-normal text-[#000000] w-full  pb-[25px] 3xl:pb-[30px]  pt-[20px] border-none border-b border-[#D9D6CE] rounded-none px-0 focus-visible:ring-0 focus:border-black"
                    {...field}
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
                    placeholder=" "
                    className="peer text-[12px] 2xl:text-[14px] 3xl:text-[16px] font-normal text-[#000000] w-full  pb-[25px] 3xl:pb-[30px]  pt-[20px] border-none border-b border-[#D9D6CE] rounded-none px-0 focus-visible:ring-0 focus:border-black"
                    {...field}
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
                    placeholder=" "
                    className="peer text-[12px] 2xl:text-[14px] 3xl:text-[16px] font-normal text-[#000000] w-full pb-[25px] 3xl:pb-[30px] pt-[20px] border-none border-b border-[#D9D6CE] rounded-none min-h-[50px] px-0 focus-visible:ring-0 focus:border-black resize-none"
                    rows={3}
                    {...field}
                  />
                </FormControl>
                <FormLabel className="absolute left-0 top-[15px] text-[12px] 2xl:text-[14px] 3xl:text-[16px] font-normal text-[#000000] transition-all duration-200 peer-focus:top-0 peer-focus:text-[12px] peer-focus:text-black peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[12px] peer-[:not(:placeholder-shown)]:text-black pointer-events-none">
                  Message<span className="text-[#1577F0]">*</span>
                </FormLabel>
                <FormMessage className=" text-[12px] 2xl:text-[14px] 3xl:text-[16px] font-normal text-[#666666]" />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            className="text-[14px] font-bold text-white bg-[#1577F0] hover:bg-[#0f5eda] px-10 h-[40px] 2xl:h-[45px] 3xl:h-[50px] mt-[20px] rounded-full cursor-pointer"
          >
            {" "}
            Send
          </Button>
        </form>
      </Form>
    </div>
  );
}
