import { AppCopyright } from "./app-copyright";
import { ThemeSwitchTab } from "@@/shared/ui";

export const AuthFooter = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center gap-2 pb-2 bg-default-50">
      <ThemeSwitchTab />
      <AppCopyright />
    </footer>
  );
}