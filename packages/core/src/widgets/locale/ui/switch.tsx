"use client";

import { useLocale, useTranslations } from "next-intl";
// import { useRouter } from "next/navigation";
import React, { Key } from "react";
import {
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Dropdown,
} from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";
import { Locale } from "@codis/app-config";

import { DownArrowIcon } from "@@/shared/ui/Icons";
import { setUserLocale } from "../services";

export const LocaleSwitch = () => {
  const locale = useLocale();
  // const router = useRouter();

  const t = useTranslations("locale");

  const [selectedKeys, setSelectedKeys] = React.useState(new Set([locale]));

  async function handleLocaleChange(newLocale: Key): Promise<void> {
    setSelectedKeys(new Set([newLocale as Locale]));
    await setUserLocale(newLocale as Locale);
    // router.refresh();
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="light" className="ml-3" endContent={<DownArrowIcon />}>
          {t(`${locale}.name`)}
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        aria-label="Locale Switcher"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onAction={handleLocaleChange}
      >
        <DropdownSection title={t(`${locale}.language`)}>
          <DropdownItem key="uk">{t("uk.label")}</DropdownItem>
          <DropdownItem key="en">{t("en.label")}</DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
