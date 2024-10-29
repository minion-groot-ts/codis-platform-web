"use client";

import { SharedSelection } from "@nextui-org/system";
import { Select, SelectItem } from "@nextui-org/select";

import { useTheme } from "next-themes";
import { MoonFilledIcon, SunFilledIcon, SystemIcon } from "@@/shared/ui/Icons";
import { useTranslations } from "next-intl";

export const ThemeSwitchMenu = (): React.JSX.Element => {
  const { theme, setTheme } = useTheme();
  const t = useTranslations("themes");

  const selectionChange = (keys: SharedSelection): void => {
    const [value] = keys;
    setTheme(`${value}`);
  };

  return (
    <Select
      className="max-w-xs"
      defaultSelectedKeys={["system"]}
      selectedKeys={[`${theme}`]}
      onSelectionChange={selectionChange}
    >
      <SelectItem key="light" startContent={<SunFilledIcon size={16} />}>
        {t("light")}
      </SelectItem>
      <SelectItem key="system" startContent={<SystemIcon size={16} />}>
        {t("system")}
      </SelectItem>
      <SelectItem key="dark" startContent={<MoonFilledIcon size={16} />}>
        {t("dark")}
      </SelectItem>
    </Select>
  );
};
