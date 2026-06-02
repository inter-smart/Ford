import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

const legacyRedirects = {
  "/product": "products",
  "/page/25/fleet-ford-oman": "fleet",
  "/news/1/news-and-events-at-ford-oman": "news",
  "/page/36/parts-and-accessories-at-ford-oman": "parts",
  "/page/4/service-at-ford-oman": "service",
  "/branchlocator/branch-locator-for-ford-oman": "contact",
  "/page/41/privacy-policy-at-ford-oman": "privacy-policy",
  "/page/40/terms-and-conditions-for-ford-oman": "terms-conditions",
};

export default async function middleware(request) {
  const { pathname, search } = request.nextUrl;

  const hostname = request.headers.get("host") || "";

  if (legacyRedirects[pathname]) {
    const locale = hostname.startsWith("ar.") ? "ar" : "en";

    return NextResponse.redirect(
      new URL(
        `/${locale}/${legacyRedirects[pathname]}${search}`,
        request.url
      ),
      301
    );
  }

  console.log(`[${new Date().toISOString()}] Middleware triggered for: ${pathname}${search}`);

  // Redirect / to /en
  if (pathname === "/" || pathname === "") {
    const locale = request.cookies.get("NEXT_LOCALE")?.value || "en";
    console.log(`[${new Date().toISOString()}] Redirecting ${pathname} to /${locale}`);
    const url = new URL(`/${locale}${search}`, request.url);
    return NextResponse.redirect(url, { status: 308 });
  }

  // Remove trailing slash
  if (pathname !== "/" && pathname.endsWith("/")) {
    console.log(`[${new Date().toISOString()}] Removing trailing slash: ${pathname}`);
    const url = new URL(pathname.slice(0, -1) + search, request.url);
    return NextResponse.redirect(url, { status: 308 });
  }

  // Apply next-intl middleware
  try {
    const intlMiddleware = createMiddleware({
      locales: ["en", "ar"],
      defaultLocale: "en",
      localePrefix: "always",
    });
    const response = await intlMiddleware(request);
    console.log(`[${new Date().toISOString()}] next-intl response for ${pathname}: ${response.status}`);
    return response;
  } catch (error) {
    console.error(`[${new Date().toISOString()}] next-intl error:`, error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: ["/", "/((?!api|_next|.*\\..*).*)"],
};
