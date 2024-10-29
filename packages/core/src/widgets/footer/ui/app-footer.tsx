import React from "react";
import { ThemeSwitchTab } from "@@/shared/ui/ThemeSwitch";
import { AppCopyright } from "./app-copyright";

export const AppFooter = (): React.JSX.Element => {
  return (
    <footer className="w-full flex flex-col items-center justify-center gap-2 pb-2 bg-default-50">
      <ThemeSwitchTab />
      <AppCopyright />
    </footer>
  );
};
