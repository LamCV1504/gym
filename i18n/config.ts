import enCommon from "./locales/en/common.json";
import enHome from "./locales/en/home.json";

import viCommon from "./locales/vi/common.json";
import viHome from "./locales/vi/home.json";

export const resources = {
  en: {
    translation: {
      common: enCommon,
      home: enHome,
    },
  },

  vi: {
    translation: {
      common: viCommon,
      home: viHome,
    },
  },
} as const;
