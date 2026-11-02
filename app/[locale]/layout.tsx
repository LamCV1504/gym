import { I18nProvider } from "@/i18n/I18nProvider";
import { Locale } from "@/i18n/types";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{
    locale: Locale;
  }>;
}) {
  const { locale } = await params;

  return <I18nProvider locale={locale}>{children}</I18nProvider>;
}
