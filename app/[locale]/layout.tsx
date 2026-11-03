import { I18nProvider } from "@/i18n/I18nProvider";
import { notFound } from "next/navigation";
import { locales } from "@/i18n/types";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: routeLocale } = await params;
  const locale = locales.find((supportedLocale) => supportedLocale === routeLocale);

  if (!locale) {
    notFound();
  }

  return <I18nProvider locale={locale}>{children}</I18nProvider>;
}
