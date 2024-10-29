'use client'

import { useTranslations } from "next-intl";
import { useMediaQuery } from "usehooks-ts";

export const HomeAppsList = () => {
  const t = useTranslations("home.apps");

  const isMobile = useMediaQuery("(max-width: 768px)");

  return !isMobile && (
    <div className="flex flex-row h-11 items-center mt-16 text-lg font-bold">
      <section className="bg-default-100 font-light flex flex-row items-center px-8 py-2">
        <div className="rounded-full ml-4 bg-brand-500 w-1.5 h-1.5" />
        <div className="pl-2">{t("eAsset.name")}</div>
      </section>
      <section className="bg-default-100 font-light flex flex-row items-center pr-8 py-2">
        <div className="rounded-full bg-brand-500 w-1.5 h-1.5" />
        <div className="pl-2">{t("eEnergy.name")}</div>
      </section>
      <section className="bg-default-100 font-light flex flex-row items-center pr-8 py-2">
        <div className="rounded-full bg-brand-500 w-1.5 h-1.5" />
        <div className="pl-2">{t("eCase.name")}</div>
      </section>
      <section className="bg-default-100 font-light flex flex-row items-center pr-8 py-2">
        <div className="rounded-full bg-brand-500 w-1.5 h-1.5" />
        <div className="pl-2">{t("eTransport.name")}</div>
      </section>
      <section className="bg-default-100 font-light flex flex-row items-center py-2 rounded-r-full">
        <div className="rounded-full bg-brand-500 w-1.5 h-1.5" />
        <div className="pl-2 pr-8">{t("eGeo.name")}</div>
      </section>
    </div>
  );
};
