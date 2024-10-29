import type { IconSvgProps } from "./types";

import * as React from "react";

export const GridIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      fill="currentColor"
      height={height || size}
      viewBox="0 0 24 24"
      width={width || size}
      {...props}
    >
      <path d="M4 4h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4zM4 16h4v4H4zm6 0h4v4h-4zm6 0h4v4h-4z" />
    </svg>
  );
};
