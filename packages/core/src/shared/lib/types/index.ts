import { ReactNode, SVGProps } from "react";
import { ThemeProviderProps } from "next-themes/dist/types";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type RootProps = {
  children: ReactNode;
};

export type LocaleProps = {
  children: ReactNode;
  params: { locale: string };
};

export type ThemeProps = {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
};
