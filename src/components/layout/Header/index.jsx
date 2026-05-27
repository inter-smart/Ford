"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { Search, X } from "lucide-react";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import { cn } from "@/lib/utils";
import BookATestDriveDialog from "@/components/common/BookATestDriveDialog";

const menuLinkClass =
  "text-[14px] lg:text-[12px] xl:text-[14.22px] 2xl:text-[17.1px] 3xl:text-[21.33px] leading-normal font-normal tracking-tight text-white hover:text-[#036EEE] transition-colors duration-200";

export default function Header({
  locale,
  data: header_acf,
  dealers = [],
  carOptions = [],
  lang = "en",
}) {
  const pathname = usePathname();

  const [searchOpen, setSearchOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [allCars, setAllCars] = React.useState([]);
  const [filtered, setFiltered] = React.useState([]);
  const searchRef = React.useRef();

  const isActive = (url) => {
    if (!url) return false;
    const normalize = (p) => {
      if (!p) return "/";
      try {
        const path = p.startsWith("http") ? new URL(p).pathname : p;
        return path.replace(/^\/(en|ar)/, "").replace(/\/$/, "") || "/";
      } catch (e) {
        return p.replace(/^\/(en|ar)/, "").replace(/\/$/, "") || "/";
      }
    };
    const normalizedUrl = normalize(url);
    const normalizedPath = normalize(pathname);
    if (normalizedUrl === normalizedPath) return true;
    if (normalizedUrl !== "/" && normalizedPath.startsWith(normalizedUrl + "/"))
      return true;
    return false;
  };

  React.useEffect(() => {
    async function fetchCars() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/wp-json/custom/v1/product`,
        );
        const data = await res.json();
        setAllCars(data?.product || []);
      } catch (err) {
        console.error("Search fetch error:", err);
      }
    }
    fetchCars();
  }, []);

  React.useEffect(() => {
    if (!query) return setFiltered([]);
    const q = query.toLowerCase();
    const results = allCars.filter((item) => {
      const brand = (item?.modelBrand ?? "").toString().toLowerCase();
      const name = (item?.modelName ?? "").toString().toLowerCase();
      const category = (item?.modelCategory ?? "").toString().toLowerCase();
      return brand.includes(q) || name.includes(q) || category.includes(q);
    });
    setFiltered(results);
  }, [query, allCars]);

  const searchButtonRef = React.useRef();
  const searchPanelRef = React.useRef();

  React.useEffect(() => {
    function handleClose() {
      if (searchOpen) {
        setSearchOpen(false);
        setQuery("");
        setFiltered([]);
      }
    }

    function handleClickOutside(e) {
      if (
        searchOpen &&
        !searchPanelRef.current?.contains(e.target) &&
        !searchButtonRef.current?.contains(e.target)
      ) {
        handleClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    window.addEventListener("scroll", handleClose, { passive: true });

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      window.removeEventListener("scroll", handleClose);
    };
  }, [searchOpen]);

  const isDarkBgPage =
    pathname.includes("/privacy-policy") ||
    pathname.includes("/terms-conditions");

  const [visible, setVisible] = React.useState(true);
  const [scrolled, setScrolled] = React.useState(false);
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 80) {
        setVisible(false);
      } else if (currentY < lastScrollY.current) {
        setVisible(true);
      }
      setScrolled(currentY > 80);
      lastScrollY.current = currentY;
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!header_acf) return null;

  return (
    <header>
      <div
        className={cn(
          "w-full h-(--header-y) lg:h-(--header-y-lg) 2xl:h-(--header-y-2xl) 3xl:h-(--header-y-3xl) fixed z-10 top-0 left-0 right-0 [--logo-x:60px] sm:[--logo-x:65px] xl:[--logo-x:70px] 2xl:[--logo-x:85px] 3xl:[--logo-x:105px] flex items-center transition-transform duration-300",
          visible ? "translate-y-0" : "-translate-y-full",
          isDarkBgPage
            ? "bg-[#0A0A0A]"
            : scrolled
              ? "bg-[#00095B]"
              : "bg-transparent",
        )}
      >
        <div className="container">
          <div className="flex flex-wrap items-center">
            {/* Main menu */}
            <div className="w-[calc((100%-var(--logo-x))/2)] ltr:lg:pr-6 ltr:2xl:pr-8 ltr:3xl:pr-10 max-lg:hidden">
              <NavigationMenu>
                <NavigationMenuList className="flex items-center rtl:flex-row-reverse gap-[5px] xl:gap-[20px] 2xl:gap-[30px] 3xl:gap-[50px]">
                  {header_acf?.left_menu_items?.map((item, index) => (
                    <NavigationMenuItem key={"left_menu_items" + index}>
                      <Link href={item?.menu_url?.url} passHref>
                        <NavigationMenuLink
                          className={cn(
                            menuLinkClass,
                            isActive(item?.menu_url?.url)
                              ? "text-[#036EEE]"
                              : "text-white",
                          )}
                          asChild
                        >
                          <span>{item?.menu_title}</span>
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Logo */}
            <div className="w-[var(--logo-x)]">
              <Link
                href="/"
                className="w-full lg:max-w-[calc(100%-10px)] mx-auto h-full block"
              >
                <Image
                  src={header_acf?.logo_image?.url || "/images/logo.png"}
                  alt={header_acf?.logo_image?.alt || "Logo"}
                  width={70}
                  height={30}
                  className="w-full h-full object-contain block hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>

            {/* Right Menu */}
            <div className="w-[calc(100%-var(--logo-x))] lg:w-[calc((100%-var(--logo-x))/2)] ltr:lg:pl-6 ltr:2xl:pl-8 ltr:3xl:pl-10">
              <div className="flex justify-between">
                <NavigationMenu className="justify-end">
                  <NavigationMenuList className="flex items-center rtl:flex-row-reverse gap-[5px] xl:gap-[20px] 2xl:gap-[30px] 3xl:gap-[50px]">
                    {header_acf?.right_menu_items?.map((item, index) => (
                      <NavigationMenuItem key={index} className="max-lg:hidden">
                        <Link href={item?.menu_url?.url} passHref>
                          <NavigationMenuLink
                            className={cn(
                              menuLinkClass,
                              isActive(item?.menu_url?.url)
                                ? "text-[#036EEE]"
                                : "text-white",
                            )}
                            asChild
                          >
                            <span>{item?.menu_title}</span>
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
                <div className="flex flex-wrap items-center gap-[10px] min-[420px]:gap-[15px] sm:gap-[20px] lg:gap-[10px] xl:gap-[15px] 2xl:gap-[18px] 3xl:gap-[22px]">
                  {/* Search Panel */}
                  <div className="relative z-0">
                    <button
                      ref={searchButtonRef}
                      onClick={() => setSearchOpen(!searchOpen)}
                      className="text-white w-[15px] 2xl:w-[18px] 3xl:w-[23px] aspect-square flex items-center justify-center cursor-pointer hover:text-[#036EEE]"
                    >
                      {searchOpen ? <X size={20} /> : <Search size={20} />}
                    </button>

                    <div
                      ref={searchPanelRef}
                      className={cn(
                        "absolute z-1 ltr:right-0 rtl:left-0 top-full w-60 xl:w-80 bg-white rounded-md sm:rounded-lg overflow-hidden ltr:max-sm:translate-x-1/2 rtl:max-sm:-translate-x-1/2",
                        searchOpen
                          ? "max-h-[376px] p-1 sm:p-2 xl:p-4"
                          : "max-h-0 p-0",
                      )}
                    >
                      <input
                        type="text"
                        className="text-[12px] xl:text-[14px] leading-normal font-normal tracking-tight text-black w-full border px-2 sm:px-3 py-1.5 sm:py-2 rounded-sm sm:rounded-md focus:outline-none"
                        placeholder="Search cars..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                      />

                      {filtered.length > 0 && (
                        <ul className="mt-3 max-h-64 overflow-y-auto">
                          {filtered.map((item, index) => (
                            <li key={index}>
                              <Link
                                href={`/products/${item.slug}`}
                                className="block px-2 py-2 hover:bg-gray-100 rounded-md"
                                onClick={() => {
                                  setSearchOpen(false);
                                  setQuery("");
                                }}
                              >
                                <div className="text-[14px] sm:text-[15px] 3xl:text-[18px] font-semibold">
                                  {item.modelBrand} {item.modelName}
                                </div>
                                <div className="text-[12px] 3xl:text-[14px]  text-gray-500">
                                  {item.modelCategory}
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}

                      {query.length > 1 && filtered.length === 0 && (
                        <div className="text-sm text-gray-500 mt-3">
                          No results found
                        </div>
                      )}
                    </div>
                  </div>
                  {header_acf?.enable__disable_language_switcher && (
                    <div>
                      <LanguageSwitcher locale={locale} />
                    </div>
                  )}

                  {/* CTA Button */}
                  {header_acf?.enable__disable_test_drive_button && (
                    <div>
                      <BookATestDriveDialog
                        dealers={dealers}
                        pageTitle="Header"
                        carOptions={carOptions}
                        lang={lang}
                      >
                        <button className="text-[8px] sm:text-[10px] xl:text-[12.4px] 2xl:text-[14.5px] 3xl:text-[18.6px] leading-[1] font-bold text-white w-max max-w-full h-[30px] xl:h-[35.5] 2xl:h-[42.6] 3xl:h-[53.4] py-2 px-[10px] xl:px-[15px] 2xl:px-[20px] 3xl:px-[28px] rounded-full bg-[#066FEF] cursor-pointer transition-all flex items-center justify-center hover:bg-[#005fd3]">
                          {header_acf?.test_drive_button_title}
                        </button>
                      </BookATestDriveDialog>
                    </div>
                  )}

                  {/* Mobile Hamburger & Sheet Menu */}
                  <div className="lg:hidden">
                    <Sheet>
                      <SheetTrigger className="flex items-center cursor-pointer focus-visible:outline-0 ">
                        <svg
                          height="25"
                          width="25"
                          viewBox="0 0 512 512"
                          className="fill-white w-[20px] sm:w-[22px] 2xl:w-[24px]"
                        >
                          <path
                            d="M128 102.4c0-14.138 11.462-25.6 25.6-25.6h332.8c14.138 0 25.6 11.462 25.6 25.6s-11.462 25.6-25.6 25.6h-332.8c-14.138
                        0-25.6-11.463-25.6-25.6zm358.4 128h-460.8c-14.138 0-25.6 11.463-25.6 25.6 0 14.138 11.462 25.6 25.6 25.6h460.8c14.138 0 25.6-11.462 25.6-25.6
                        0-14.137-11.462-25.6-25.6-25.6zm0 153.6h-230.4c-14.137 0-25.6 11.462-25.6 25.6 0 14.137 11.463 25.6 25.6 25.6h230.4c14.138 0
                        25.6-11.463 25.6-25.6 0-14.138-11.462-25.6-25.6-25.6z"
                          />
                        </svg>
                      </SheetTrigger>
                      <SheetContent
                        side="left"
                        className="w-full max-h-screen overflow-y-auto max-w-[340px] backdrop-blur-[20px] bg-black/70 p-6 text-white border-none"
                      >
                        <SheetHeader>
                          <div className="flex justify-between items-center mb-6">
                            <SheetTitle className="text-2xl font-semibold tracking-wide">
                              Menu
                            </SheetTitle>
                          </div>
                          <ul className="space-y-4 mt-4">
                            {[
                              ...(header_acf?.left_menu_items || []),
                              ...(header_acf?.right_menu_items || []),
                            ].map((item, index) => (
                              <li
                                key={index}
                                className="opacity-0 animate-fade-in-up animation-delay-[var(--delay)]"
                                style={{ animationDelay: `${index * 80}ms` }}
                              >
                                <SheetClose asChild>
                                  <Link
                                    href={item?.menu_url?.url}
                                    className={`relative block text-[16px] font-medium py-1 transition-all duration-300 group ${
                                      isActive(item?.menu_url?.url)
                                        ? "text-[#1577F0]"
                                        : "text-white"
                                    }`}
                                  >
                                    {item?.menu_title}
                                    <span
                                      className={`absolute left-0 bottom-0 h-[2px] bg-[#1577F0] transition-all duration-300 ${
                                        isActive(item?.menu_url?.url)
                                          ? "w-full"
                                          : "w-0 group-hover:w-full"
                                      }`}
                                    ></span>
                                  </Link>
                                </SheetClose>
                              </li>
                            ))}
                          </ul>
                        </SheetHeader>
                      </SheetContent>
                    </Sheet>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
