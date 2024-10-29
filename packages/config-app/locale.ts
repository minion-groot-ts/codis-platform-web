"server-only";

export const locales = ['en', 'uk'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale = 'uk' satisfies Locale;

export const timeZone = "Europe/Kyiv";

export function isValidLocale(locale: unknown): locale is Locale {
  return locales.some((l) => l === locale);
}
