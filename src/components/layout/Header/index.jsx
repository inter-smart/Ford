"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
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
import { useRouter, usePathname } from "next/navigation";
import { Search, X } from "lucide-react";

const menuLinkClass =
  "3xl:text-[16px] 2xl:text-[14px] text-[12px] 2xl:px-[20px] xl:px-[15px] px-[8px] hover:text-[#036EEE] transition-colors duration-200";

export default function Header({ locale, data: header_acf }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale) => {
    const cleanPath = pathname.replace(/^\/(en|ar)/, "") || "/";
    console.log(
      `[2025-05-29T14:24:00.000Z] Switching locale to ${newLocale}, path: ${cleanPath}`
    );
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.replace(`/${newLocale}${cleanPath}`);
  };

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
    return normalize(url) === normalize(pathname);
  };

  React.useEffect(() => {
    async function fetchCars() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/wp-json/custom/v1/product`
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

  if (!header_acf) return null;

  return (
    <header>
      <div className="w-full absolute top-0 left-0 z-10 bg-transparent">
        <div className="container">
          <div className="w-full flex flex-wrap items-center justify-between py-[20px]">
            {/* Main menu */}
            <NavigationMenu className="max-lg:hidden">
              <NavigationMenuList className="flex gap-0 items-center rtl:flex-row-reverse">
                {header_acf?.left_menu_items.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <Link href={item?.menu_url?.url} passHref>
                      <NavigationMenuLink asChild>
                        <span
                          className={`${menuLinkClass} ${isActive(item?.menu_url?.url)
                              ? "text-[#036EEE] font-semibold"
                              : "text-white font-normal"
                            }`}
                        >
                          {item?.menu_title}
                        </span>
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
                  src={header_acf?.logo_image?.url || "/images/logo.png"}
                  alt={header_acf?.logo_image?.alt || "Logo"}
                  width={70}
                  height={30}
                  className="w-full h-full object-contain block hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>

            {/* Right Menu */}
            <NavigationMenu>
              <NavigationMenuList className="flex items-center gap-0 rtl:flex-row-reverse">
                {header_acf?.right_menu_items.map((item, index) => (
                  <NavigationMenuItem key={index} className="max-lg:hidden">
                    <Link href={item?.menu_url?.url} passHref>
                      <NavigationMenuLink asChild>
                        <span
                          className={`${menuLinkClass} ${isActive(item?.menu_url?.url)
                            ? "text-[#036EEE] font-semibold"
                            : "text-white font-normal"
                            }`}
                        >
                          {item?.menu_title}
                        </span>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}

                {/* Language */}
                <NavigationMenuItem>
                  <button
                    className="3xl:text-[16px] 2xl:text-[14px] text-[12px] text-white font-medium ltr:mx-[85px_10px] rtl:mx-[10px_85px]
                  flex items-center gap-2 cursor-pointer group"
                    onClick={() =>
                      handleLocaleChange(locale === "en" ? "ar" : "en")
                    }
                  >
                    <Image
                      src={
                        locale === "en" ? "/images/ar.png" : "/images/uk.png"
                      }
                      alt={locale === "en" ? "Arabic" : "English"}
                      width={20}
                      height={18}
                      className="w-[20px] h-[18px] object-contain"
                    />
                    <span
                      className="relative h-full px-[10px] after:absolute after:content-[''] after:left-0 after:top-0 after:bottom-0 after:w-[6px]
                    after:h-[6px] after:rounded-full after:m-auto after:bg-white"
                    >
                      {locale === "en" ? "AR" : "ENG"}
                    </span>
                  </button>
                </NavigationMenuItem>

                {/* Search */}
                <NavigationMenuItem className="static">
                  <button
                    ref={searchButtonRef}
                    onClick={() => setSearchOpen(!searchOpen)}
                    className="text-white w-[24px] h-[24px] flex items-center justify-center cursor-pointer hover:text-[#036EEE]"
                  >
                    {searchOpen ? <X size={20} /> : <Search size={20} />}
                  </button>

                  {/* Search Panel */}
                  <div
                    ref={searchPanelRef}
                    className={`absolute right-0 top-10 bg-white rounded-md sm:rounded-lg w-80 overflow-hidden ${searchOpen ? "max-h-[400px] p-2 sm:p-4" : "max-h-0 p-0"
                      }`}
                  >
                    <input
                      type="text"
                      className="w-full border p-[10px] sm:px-3 sm:py-2 rounded-sm sm:rounded-md text-sm focus:outline-none"
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
                </NavigationMenuItem>

                {/* Mobile Hamburger & Sheet Menu */}
                <NavigationMenuItem className="lg:hidden">
                  <Sheet>
                    <SheetTrigger className="text-white font-medium flex items-center cursor-pointer">
                      <svg
                        height="25"
                        width="25"
                        viewBox="0 0 512 512"
                        className="fill-white"
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
                      className="w-full max-w-[340px] backdrop-blur-[20px] bg-black/70 p-6 text-white border-none"
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
                              <Link
                                href={item?.menu_url?.url}
                                className={`relative block text-[16px] font-medium py-1 transition-all duration-300 group ${isActive(item?.menu_url?.url)
                                  ? "text-[#1577F0]"
                                  : "text-white"
                                  }`}
                              >
                                {item?.menu_title}
                                <span
                                  className={`absolute left-0 bottom-0 h-[2px] bg-[#1577F0] transition-all duration-300 ${isActive(item?.menu_url?.url)
                                    ? "w-full"
                                    : "w-0 group-hover:w-full"
                                    }`}
                                ></span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </SheetHeader>
                    </SheetContent>
                  </Sheet>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
