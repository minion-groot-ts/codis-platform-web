"use client";

import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { useTranslations } from "next-intl";
import React from "react";

export const CodisDevPage = () => {
  const t = useTranslations("dev");

  return (
    <section className="flex flex-col h-full flex-grow items-center justify-center">
      <div className="flex flex-row">
        <div className="flex flex-col items-center">
          <div className="pl-6 mb-1 text-4xl font-bold">{t("message")}</div>
          <div className="pl-6 mt-1 text-lg text-default-400 max-w-lg">
            {t("description")}
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Button
          as={Link}
          href="/"
          className="min-w-48"
          color="primary"
          radius="full"
        >
          {t("action")}
        </Button>
      </div>
    </section>
  );
};
