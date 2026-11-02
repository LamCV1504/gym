import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { resources } from "./config";

let initialized = false;

export function getI18nInstance(locale: string) {
  if (!initialized) {
    i18n.use(initReactI18next).init({
      resources,
      lng: locale,
      fallbackLng: "en",

      interpolation: {
        escapeValue: false,
      },
    });

    initialized = true;
  }

  if (i18n.language !== locale) {
    i18n.changeLanguage(locale);
  }

  return i18n;
}
