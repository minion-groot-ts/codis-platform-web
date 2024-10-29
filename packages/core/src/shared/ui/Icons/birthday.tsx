import type { IconSvgProps } from "./types";

import * as React from "react";

export const BirthDayIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      width={width || size}
      height={height || size}
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513a48.498 48.498 0 016-.371c2.006 0 4.01.123 6 .371M12 8.25c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513m0 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.42 47.42 0 016 13.12m9-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.355 3.355 0 01-3 0 3.354 3.354 0 00-3 0 3.355 3.355 0 01-3 0 3.354 3.354 0 00-3 0 3.355 3.355 0 01-3 0L3 16.5m9.265-13.39a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
      ></path>
    </svg>
  );
};
