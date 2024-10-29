// import type RequestConfig from "next-intl/server";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, locales, timeZone } from "@codis/app-config";
import { LocaleMessages } from "./messages";
import { getUserLocale } from "@codis/core/widgets";

// import {routing} from '@/i18n/routing';

export default getRequestConfig(async () => {
  const locale = await getUserLocale();
  // if (!routing.locales.includes(locale as any)) notFound();

  if (!locales.includes(locale as any)) notFound();

  const messages = await LocaleMessages(locale as Locale);
  
  return {
    locale,
    messages,
    timeZone,
    now: new Date(),
  };
}) as {};
