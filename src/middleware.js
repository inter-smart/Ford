// import { NextResponse } from "next/server";
// import createMiddleware from "next-intl/middleware";

// export default async function middleware(request) {
//   const { pathname, search } = request.nextUrl;

//   const host =
//     request.headers.get("x-forwarded-host") || request.headers.get("host");
//   const proto = request.headers.get("x-forwarded-proto") || "https";

//   const cleanHost = host.split(":")[0];
//   const baseUrl = `${proto}://${cleanHost}`;

//   // Fix the request URL so next-intl uses clean host
//   request.nextUrl.host = cleanHost;
//   request.nextUrl.port = "";
//   request.nextUrl.protocol = proto + ":";

//   // Redirect / to /en
//   if (pathname === "/" || pathname === "") {
//     const locale = request.cookies.get("NEXT_LOCALE")?.value || "en";
//     const url = new URL(`/${locale}${search}`, baseUrl);
//     return NextResponse.redirect(url, { status: 308 });
//   }

//   // Remove trailing slash
//   if (pathname !== "/" && pathname.endsWith("/")) {
//     const url = new URL(pathname.slice(0, -1) + search, baseUrl);
//     return NextResponse.redirect(url, { status: 308 });
//   }

//   try {
//     const intlMiddleware = createMiddleware({
//       locales: ["en", "ar"],
//       defaultLocale: "en",
//       localePrefix: "always",
//     });

//     const response = await intlMiddleware(request);

//     // Strip any leaked port from Location header
//     const location = response.headers.get("location");
//     if (location && location.includes(":3000")) {
//       response.headers.set("location", location.replace(/:3000/g, ""));
//     }

//     console.log(
//       `[${new Date().toISOString()}] next-intl response for ${pathname}: ${response.status}`,
//     );
//     return response;
//   } catch (error) {
//     console.error(`[${new Date().toISOString()}] next-intl error:`, error);
//     return NextResponse.next();
//   }
// }

// export const config = {
//   matcher: ["/", "/((?!api|_next|.*\\..*).*)"],
// };




import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

export default async function middleware(request) {
  const { pathname, search } = request.nextUrl;
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
