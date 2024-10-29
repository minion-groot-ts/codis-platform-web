"use client";

import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { useTranslations } from "next-intl";
import React from "react";

export interface ErrorPageProps {
  code: number;
  message?: string;
  description?: string;
  reset?: Function;
}

export const CodisErrorPage = ({
  code,
  message,
  description,
  reset,
}: ErrorPageProps) => {
  const t = useTranslations("errors");

  const isNotFoundError: boolean = [401, 403, 404].includes(code);
  const isGlobalError: boolean = [500, 503, 504].includes(code);
  const isCustomError = isNotFoundError || isGlobalError;

  return (
    <section className="flex flex-col h-full flex-grow items-center justify-center">
      <div className="flex flex-row">
        <div className="font-bold text-brand-500 text-8xl">{code}</div>
        <div className="ml-8">
          <Divider orientation="vertical" />
        </div>
        <div className="flex flex-col">
          <div className="pl-6 mb-1 text-4xl font-bold">
            {isCustomError ? t(`${code}.message`) : message}
          </div>
          <div className="pl-6 mt-1 text-lg text-default-400 max-w-lg">
            {isCustomError ? t(`${code}.description`) : description}
          </div>
        </div>
      </div>
      <div className="mt-8">
        {typeof reset === "function" ? (
          <Button
            className="min-w-48"
            color="primary"
            radius="full"
            onPress={() => {
              reset();
            }}
          >
            {t("action")}
          </Button>
        ) : (
          <Button
            as={Link}
            href="/"
            className="min-w-48"
            color="primary"
            radius="full"
          >
            {t("action")}
          </Button>
        )}
      </div>
    </section>

    /* <div className="text-brand-500 text-8xl font-bold pr-6">{code}</div>
         {/* <Divider orientation="vertical" /> */
    /* <section className="flex flex-col pl-6">
          </section>
    </section> */

    //     <div className="grid grid-cols-2 gap-2">
    //   <div className="row-span-2 bg-yellow-400">01</div>
    //   <div className="bg-white">02</div>
    //   <div className="bg-red-400">04</div>
    // </div>
  );
};
