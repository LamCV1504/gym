"use client";

import { I18nextProvider } from "react-i18next";

import { getI18nInstance } from "./client";
import { Locale } from "./types";

export function I18nProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const i18n = getI18nInstance(locale);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
