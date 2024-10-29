import "@/styles/globals.css";

import React from "react";
import { Viewport } from "next";
import clsx from "clsx";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { CodisThemeProps } from "@codis/app-config";
import { eUkraine } from "@codis/fonts-config";

import { Providers } from "@/app/providers";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export async function generateMetadata() {
  const locale = await getLocale();

  const t = await getTranslations({ locale, namespace: "app.metadata" });

  return {
    title: {
      default: t("name"),
      template: `%s - ${t("name")}`,
    },
    description: t("description"),
    icons: {
      icon: "/favicon.ico",
    },

    // icons: {
    //   icon: "/favicon.ico",
    //   shortcut: "/favicon-32x32.png",
    //   apple: "/apple-touch-icon.png",
    // },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html suppressHydrationWarning lang={locale}>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background text-foreground font-sans antialiased",
          eUkraine.variable,
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers themeProps={CodisThemeProps}>
            <div className="relative flex flex-col h-screen">
              {children}
            </div>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
