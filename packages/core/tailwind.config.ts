// tailwind config is required for editor support

import type { Config } from "tailwindcss";

import sharedConfig from "@codis/tailwind-config";

const config: Pick<Config, "content" | "presets"> = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  presets: [sharedConfig],
};

export default config;
