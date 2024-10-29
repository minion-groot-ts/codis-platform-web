// import { ThemeProviderProps } from "next-themes/dist/types";

export const themes: string[] = ["light", "dark", "system"];

export const CodisThemeProps = {
  themes,
  enableSystem: true,
  defaultTheme: "system",
  storageKey: "codis-theme",
  attribute: "class",
};
