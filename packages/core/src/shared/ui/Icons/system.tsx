import type { IconSvgProps } from "./types";

import * as React from "react";

export const SystemIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    height={height || size}
    viewBox="0 0 24 24"
    width={width || size}
    {...props}
  >
    <path
      d="M20 3H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h7v2H8v2h8v-2h-3v-2h7c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 14V5h16l.002 9H4z"
      fill="currentColor"
    />
  </svg>
);
