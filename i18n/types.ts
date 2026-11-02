export const locales = ["en", "vi", "jp"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
