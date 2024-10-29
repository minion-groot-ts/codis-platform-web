import type { Config } from "tailwindcss";

import sharedConfig from "@codis/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./repo/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@codis/core/src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [sharedConfig],
};

export default config;
