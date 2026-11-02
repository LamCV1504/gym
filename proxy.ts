import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "vi", "jp"] as const;
const defaultLocale = "en";

function getLocale(pathname: string) {
  const locale = pathname.split("/")[1];

  if (locales.includes(locale as (typeof locales)[number])) {
    return locale;
  }

  return null;
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const token = req.cookies.get("accessToken");

  const locale = getLocale(pathname);

  if (!locale) {
    const preferredLocale = req.cookies.get("NEXT_LOCALE")?.value;

    const targetLocale = locales.includes(
      preferredLocale as (typeof locales)[number],
    )
      ? preferredLocale
      : defaultLocale;

    const url = req.nextUrl.clone();

    url.pathname = `/${targetLocale}${pathname === "/" ? "" : pathname}`;

    return NextResponse.redirect(url);
  }

  const pathnameWithoutLocale = pathname.replace(`/${locale}`, "") || "/";

  const isAuthPage = pathnameWithoutLocale.startsWith("/login");

  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL(`/${locale}/login`, req.url));
  }

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL(`/${locale}/home`, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
