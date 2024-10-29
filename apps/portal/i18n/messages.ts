import type { Locale } from "@codis/app-config";

export async function LocaleMessages(locale: Locale) {
  const platforma = {
    ...(await import(`./locale/${locale}/platforma/layout.json`)).default,
    ...(await import(`./locale/${locale}/platforma/workspaces.json`)).default,
  };
  return {
    ...(await import(`./locale/${locale}/app.json`)).default,
    ...(await import(`./locale/${locale}/pages/home.json`)).default,
    ...(await import(`./locale/${locale}/pages/auth.json`)).default,
    ...(await import(`./locale/${locale}/pages/dev.json`)).default,
    ...(await import(`./locale/${locale}/pages/errors.json`)).default,
    platforma,
  };
}
