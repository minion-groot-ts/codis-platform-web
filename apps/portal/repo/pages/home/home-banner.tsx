"use client";

import { RightArrowIcon } from "@codis/core";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const HomeBanner = () => {
  const t = useTranslations("home");
  return (
    <div className="flex flex-col">
      <section className="flex flex-wrap pt-12 pl-12 mb-12">
        <div className="font-bold text-8xl text-brand-500 pr-8">{t("name1")}</div>
        <div className="font-bold text-8xl">{t("name2")}</div>
      </section>
      <section className="font-light text-default-700 px-12 mb-8 max-w-4xl text-lg justify-stretch">
        {t("slogan")}
      </section>
      <section className="font-light pl-12 pt-8">
        <Button
          as={Link}
          href="/auth/signup"
          color="primary"
          endContent={<RightArrowIcon />}
          radius="full"
        >
          {t("start")}
        </Button>
      </section>
    </div>
  );
};
