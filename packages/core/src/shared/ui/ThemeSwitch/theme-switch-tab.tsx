"use client";

import { Tabs, Tab } from "@nextui-org/tabs";

import { useTheme } from "next-themes";
import { MoonFilledIcon, SunFilledIcon, SystemIcon } from "@@/shared/ui/Icons";
import { Key } from "react";

export const ThemeSwitchTab = (): React.JSX.Element => {
  const { theme, setTheme } = useTheme();
  
  const selectionChange = (key: Key): void => {
    setTheme(key.toString());
  };

  return (
    <Tabs
      aria-label="Options"
      key="theme-switch"
      radius="full"
      size="sm"
      defaultSelectedKey="system"
      selectedKey={theme}
      onSelectionChange={selectionChange}
    >
      <Tab key="light" title={<SunFilledIcon size={16} />} />
      <Tab key="system" title={<SystemIcon size={16} />} />
      <Tab key="dark" title={<MoonFilledIcon size={16} />} />
    </Tabs>
  );
};
