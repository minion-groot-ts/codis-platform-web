import type { Config } from "tailwindcss";

import { nextui } from "@nextui-org/theme";
import { BrandColors, WarningColors } from "./tailwind.colors";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      backgroundImage: {
        "glow-conic":
          "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },
      fontFamily: {
        sans: ["var(--font-e-ukraine)", "Arial"],
      },
      colors: {
        focus: BrandColors[500],
        primary: BrandColors,
        brand: BrandColors,
        warning: WarningColors,
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "codis",
      addCommonColors: true,
      defaultTheme: "light",
      themes: {
        light: {
          extend: "light",
          colors: {
            background: "#FAFAFA",
            focus: { DEFAULT: BrandColors[500] },
          },
        },
      },
    }),
  ],
};
export default config;
