"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

const menuItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Offer", href: "/offer" },
  { label: "Product", href: "/product" },
  { label: "Parts & Service", href: "/parts-service" },
];

const extraMenuItems = [
  { label: "Fleet", href: "/fleet" },
  { label: "Clients", href: "/clients" },
  { label: "Contact Us", href: "/contact-us" },
];

const menuLinkClass = "3xl:text-[16px] 2xl:text-[14px] text-[12px] text-white 2xl:px-[20px] xl:px-[15px] px-[8px] hover:text-[#036EEE]";

export default function Header() {
  return (
    <header>
      <div className="w-full bg-black">
        <div className="container">
          <div className="w-full flex flex-wrap items-center justify-between py-[20px]">
            {/* Main menu */}
            <NavigationMenu className="max-lg:hidden">
              <NavigationMenuList className="flex gap-0 items-center">
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    <Link href={item.href} passHref>
                      <NavigationMenuLink asChild>
                        <span className={menuLinkClass}>{item.label}</span>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Logo */}
            <div className="lg:w-[140px] w-[75px] flex items-center justify-center">
              <Link href="/" className="w-full h-full max-w-[80px]">
                <Image
                  src="/images/logo.png"
                  alt="Ford"
                  width={70}
                  height={30}
                  className="w-full h-full object-contain block hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>

            {/* Extra menu + language + search */}
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-0 ">
                {extraMenuItems.map((item) => (
                  <NavigationMenuItem key={item.label} className="max-lg:hidden">
                    <Link href={item.href} passHref>
                      <NavigationMenuLink asChild>
                        <span className={menuLinkClass}>{item.label}</span>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}

                {/* Language Switcher */}
                <NavigationMenuItem>
                  <button className="3xl:text-[16px] 2xl:text-[14px] text-[12px] text-white font-medium  mx-[85px_10px] flex items-center gap-2 cursor-pointer">
                    <Image src="/images/ar.png" alt="UAE Flag" width={20} height={15} className="w-[20px] h-[18px] object-contain" />
                    <span className="relative h-full px-[10px] after:absolute after:content-[''] after:left-0 after:top-0 after:bottom-0 after:w-[6px] after:h-[6px] after:rounded-full after:m-auto after:bg-white">
                      ENG
                    </span>
                  </button>
                </NavigationMenuItem>

                {/* Search Icon */}
                <NavigationMenuItem>
                  <button className="text-white w-[16px] h-[16px] flex cursor-pointer hover:opacity-80 mx-[10px] hover:text-[#036EEE]">
                    <svg
                      viewBox="0 0 18 18"
                      className="fill-white w-full h-full transition-all hover:fill-[#036EEE]"
                    >
                      <path d="M7.86654 0.668888C3.73427 0.668888 0.368164 4.03743 0.368164 8.1727C0.368164 12.3079 3.73427 15.6831 7.86654 15.6831C9.63155 15.6831 11.2548 15.0641 12.5378 14.0363L15.6611 17.1603C15.8188 17.3115 16.0293 17.3949 16.2476 17.3927C16.4659 17.3905 16.6747 17.3028 16.8292 17.1484C16.9837 16.994 17.0716 16.7852 17.0742 16.5667C17.0767 16.3483 16.9936 16.1375 16.8428 15.9795L13.7194 12.8539C14.7472 11.568 15.3665 9.94104 15.3665 8.1727C15.3665 4.03743 11.9988 0.668888 7.86654 0.668888ZM7.86654 2.33679C11.0981 2.33679 13.6982 4.93883 13.6982 8.1727C13.6982 11.4066 11.0981 14.0152 7.86654 14.0152C4.635 14.0152 2.03483 11.4066 2.03483 8.1727C2.03483 4.93883 4.635 2.33679 7.86654 2.33679Z" />
                    </svg>
                  </button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  {/* humberg Menu */}
                  <button className=" text-white font-medium flex items-center cursor-pointer lg:hidden">
                    <svg height="25" width="25" viewBox="0 0 512 512" className="fill-white">
                      <path d="m128 102.4c0-14.138 11.462-25.6 25.6-25.6h332.8c14.138 0 25.6 11.462 25.6 25.6s-11.462 25.6-25.6 25.6h-332.8c-14.138 0-25.6-11.463-25.6-25.6zm358.4 128h-460.8c-14.138 0-25.6 11.463-25.6 25.6 0 14.138 11.462 25.6 25.6 25.6h460.8c14.138 0 25.6-11.462 25.6-25.6 0-14.137-11.462-25.6-25.6-25.6zm0 153.6h-230.4c-14.137 0-25.6 11.462-25.6 25.6 0 14.137 11.463 25.6 25.6 25.6h230.4c14.138 0 25.6-11.463 25.6-25.6 0-14.138-11.462-25.6-25.6-25.6z"></path></svg>
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>



          </div>
        </div>
      </div>
    </header>
  );
}
