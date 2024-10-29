import type { IconSvgProps } from "./types";

import * as React from "react";

export const TeamsIcon: React.FC<IconSvgProps> = ({
  size = 32,
  width,
  height,
  ...props
}) => (
  <svg
    width={width || size}
    height={height || size}
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      fill="url(#paint0_linear_1_13551)"
      d="M19 13.903c0-.499.404-.903.903-.903h11.194c.499 0 .903.404.903.903V20.5a6.5 6.5 0 11-13 0v-6.597z"
    ></path>
    <path
      fill="url(#paint1_linear_1_13551)"
      d="M9 12.226C9 11.549 9.549 11 10.226 11h13.548c.677 0 1.226.549 1.226 1.226V22a8 8 0 11-16 0v-9.774z"
    ></path>
    <circle cx="27" cy="8" r="3" fill="#34439E"></circle>
    <circle cx="27" cy="8" r="3" fill="url(#paint2_linear_1_13551)"></circle>
    <circle cx="18" cy="6" r="4" fill="url(#paint3_linear_1_13551)"></circle>
    <mask
      id="mask0_1_13551"
      style={{ maskType: "alpha" }}
      width="16"
      height="30"
      x="9"
      y="0"
      maskUnits="userSpaceOnUse"
    >
      <path
        fill="url(#paint4_linear_1_13551)"
        d="M17 10a5 5 0 100-10 5 5 0 000 10z"
      ></path>
      <path
        fill="url(#paint5_linear_1_13551)"
        d="M10.226 11C9.549 11 9 11.549 9 12.226V22a8 8 0 1016 0v-9.774c0-.677-.549-1.226-1.226-1.226H10.226z"
      ></path>
    </mask>
    <g mask="url(#mask0_1_13551)">
      <path
        fill="#000"
        fillOpacity="0.3"
        d="M7 12a3 3 0 013-3h7a3 3 0 013 3v12a3 3 0 01-3 3H7V12z"
      ></path>
    </g>
    <rect
      width="18"
      height="18"
      y="7"
      fill="url(#paint6_linear_1_13551)"
      rx="2"
    ></rect>
    <path fill="#fff" d="M13 11H5v1.835h2.995V21h2.01v-8.165H13V11z"></path>
    <defs>
      <linearGradient
        id="paint0_linear_1_13551"
        x1="19"
        x2="32.159"
        y1="13.737"
        y2="22.335"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#364088"></stop>
        <stop offset="1" stopColor="#6E7EE1"></stop>
      </linearGradient>
      <linearGradient
        id="paint1_linear_1_13551"
        x1="9"
        x2="25"
        y1="19.404"
        y2="19.404"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#515FC4"></stop>
        <stop offset="1" stopColor="#7084EA"></stop>
      </linearGradient>
      <linearGradient
        id="paint2_linear_1_13551"
        x1="24"
        x2="29.796"
        y1="5.316"
        y2="9.395"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#364088"></stop>
        <stop offset="1" stopColor="#6E7EE1"></stop>
      </linearGradient>
      <linearGradient
        id="paint3_linear_1_13551"
        x1="15.143"
        x2="20.286"
        y1="3.143"
        y2="9.143"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4858AE"></stop>
        <stop offset="1" stopColor="#4E60CE"></stop>
      </linearGradient>
      <linearGradient
        id="paint4_linear_1_13551"
        x1="13.429"
        x2="19.857"
        y1="1.429"
        y2="8.929"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4858AE"></stop>
        <stop offset="1" stopColor="#4E60CE"></stop>
      </linearGradient>
      <linearGradient
        id="paint5_linear_1_13551"
        x1="13.429"
        x2="19.857"
        y1="1.429"
        y2="8.929"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#4858AE"></stop>
        <stop offset="1" stopColor="#4E60CE"></stop>
      </linearGradient>
      <linearGradient
        id="paint6_linear_1_13551"
        x1="0"
        x2="18"
        y1="16"
        y2="16"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2A3887"></stop>
        <stop offset="1" stopColor="#4C56B9"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export const WordIcon: React.FC<IconSvgProps> = ({
  size = 32,
  width,
  height,
  ...props
}) => (
  <svg
    width={width || size}
    height={height || size}
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <rect
      x="8"
      y="2"
      width="24"
      height="28"
      rx="2"
      fill="url(#paint0_linear_1_13545)"
    />
    <path
      d="M8 23H32V28C32 29.1046 31.1046 30 30 30H10C8.89543 30 8 29.1046 8 28V23Z"
      fill="url(#paint1_linear_1_13545)"
    />
    <rect
      x="8"
      y="16"
      width="24"
      height="7"
      fill="url(#paint2_linear_1_13545)"
    />
    <rect
      x="8"
      y="9"
      width="24"
      height="7"
      fill="url(#paint3_linear_1_13545)"
    />
    <path
      d="M8 12C8 10.3431 9.34315 9 11 9H17C18.6569 9 20 10.3431 20 12V24C20 25.6569 18.6569 27 17 27H8V12Z"
      fill="black"
      fillOpacity="0.3"
    />
    <rect
      y="7"
      width="18"
      height="18"
      rx="2"
      fill="url(#paint4_linear_1_13545)"
    />
    <path
      d="M15 11.0142H13.0523L11.5229 17.539L9.84967 11H8.20261L6.51634 17.539L5 11.0142H3L5.60131 21H7.3268L9 14.6879L10.6732 21H12.3987L15 11.0142Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1_13545"
        x1="8"
        y1="6.66667"
        x2="32"
        y2="6.66667"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2B78B1" />
        <stop offset="1" stopColor="#338ACD" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1_13545"
        x1="8"
        y1="27.375"
        x2="32"
        y2="27.375"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1B366F" />
        <stop offset="1" stopColor="#2657B0" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_1_13545"
        x1="18.5"
        y1="20"
        x2="32"
        y2="20"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#20478B" />
        <stop offset="1" stopColor="#2D6FD1" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_1_13545"
        x1="18.5"
        y1="13"
        x2="32"
        y2="13"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#215295" />
        <stop offset="1" stopColor="#2E84D3" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_1_13545"
        x1="3.31137e-08"
        y1="17"
        x2="19"
        y2="17"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#223E74" />
        <stop offset="1" stopColor="#215091" />
      </linearGradient>
    </defs>
  </svg>
);

export const PowerPointIcon: React.FC<IconSvgProps> = ({
  size = 32,
  width,
  height,
  ...props
}) => (
  <svg
    width={width || size}
    height={height || size}
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <circle cx="17" cy="16" r="14" fill="url(#paint0_linear_1_13542)"></circle>
    <mask
      id="mask0_1_13542"
      style={{ maskType: "alpha" }}
      width="28"
      height="28"
      x="3"
      y="2"
      maskUnits="userSpaceOnUse"
    >
      <circle cx="17" cy="16" r="14" fill="#C4C4C4"></circle>
    </mask>
    <g mask="url(#mask0_1_13542)">
      <path fill="url(#paint1_linear_1_13542)" d="M18 0H35V17H18z"></path>
      <path
        fill="#000"
        fillOpacity="0.3"
        d="M6 12a3 3 0 013-3h8a3 3 0 013 3v12a3 3 0 01-3 3H6V12z"
      ></path>
      <path fill="#EB6C4D" d="M1 0H18V17H1z"></path>
    </g>
    <rect
      width="18"
      height="18"
      y="7"
      fill="url(#paint2_linear_1_13542)"
      rx="2"
    ></rect>
    <path
      fill="#fff"
      d="M13 14.457C13 12.3 11.58 11 9.328 11H6v10h2.066v-3.043h1.176c2.108 0 3.758-1.2 3.758-3.5zm-2.094.043c0 .971-.617 1.6-1.621 1.6h-1.22v-3.229H9.27c1.005 0 1.636.529 1.636 1.629z"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_1_13542"
        x1="3"
        x2="31"
        y1="17.931"
        y2="17.931"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A73A24"></stop>
        <stop offset="1" stopColor="#F75936"></stop>
      </linearGradient>
      <linearGradient
        id="paint1_linear_1_13542"
        x1="31.5"
        x2="18"
        y1="10"
        y2="10"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FDB8A3"></stop>
        <stop offset="1" stopColor="#F1876D"></stop>
      </linearGradient>
      <linearGradient
        id="paint2_linear_1_13542"
        x1="0"
        x2="18"
        y1="17.241"
        y2="17.241"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A73A24"></stop>
        <stop offset="1" stopColor="#F75936"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export const ExcelIcon: React.FC<IconSvgProps> = ({
  size = 32,
  width,
  height,
  ...props
}) => (
  <svg
    width={width || size}
    height={height || size}
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <rect x="8" y="2" width="24" height="28" rx="2" fill="#2FB776" />
    <path
      d="M8 23H32V28C32 29.1046 31.1046 30 30 30H10C8.89543 30 8 29.1046 8 28V23Z"
      fill="url(#paint0_linear_1_13675)"
    />
    <rect x="20" y="16" width="12" height="7" fill="#229C5B" />
    <rect x="20" y="9" width="12" height="7" fill="#27AE68" />
    <path d="M8 4C8 2.89543 8.89543 2 10 2H20V9H8V4Z" fill="#1D854F" />
    <rect x="8" y="9" width="12" height="7" fill="#197B43" />
    <rect x="8" y="16" width="12" height="7" fill="#1B5B38" />
    <path
      d="M8 12C8 10.3431 9.34315 9 11 9H17C18.6569 9 20 10.3431 20 12V24C20 25.6569 18.6569 27 17 27H8V12Z"
      fill="black"
      fillOpacity="0.3"
    />
    <rect
      y="7"
      width="18"
      height="18"
      rx="2"
      fill="url(#paint1_linear_1_13675)"
    />
    <path
      d="M13 21L10.1821 15.9L12.8763 11H10.677L9.01375 14.1286L7.37801 11H5.10997L7.81787 15.9L5 21H7.19931L8.97251 17.6857L10.732 21H13Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1_13675"
        x1="8"
        y1="26.5"
        x2="32"
        y2="26.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#163C27" />
        <stop offset="1" stopColor="#2A6043" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_1_13675"
        x1="0"
        y1="16"
        x2="18"
        y2="16"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#185A30" />
        <stop offset="1" stopColor="#176F3D" />
      </linearGradient>
    </defs>
  </svg>
);

export const OutlookIcon: React.FC<IconSvgProps> = ({
  size = 32,
  width,
  height,
  ...props
}) => (
  <svg
    width={width || size}
    height={height || size}
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <rect width="20" height="28" x="10" y="2" fill="#1066B5" rx="2"></rect>
    <rect
      width="20"
      height="28"
      x="10"
      y="2"
      fill="url(#paint0_linear_1_13543)"
      rx="2"
    ></rect>
    <path fill="#32A9E7" d="M10 5H20V15H10z"></path>
    <path fill="#167EB4" d="M10 15H20V25H10z"></path>
    <path fill="#32A9E7" d="M20 15H30V25H20z"></path>
    <path fill="#58D9FD" d="M20 5H30V15H20z"></path>
    <mask
      id="mask0_1_13543"
      style={{ maskType: "alpha" }}
      width="24"
      height="16"
      x="8"
      y="14"
      maskUnits="userSpaceOnUse"
    >
      <path
        fill="url(#paint1_linear_1_13543)"
        d="M8 14h22a2 2 0 012 2v12a2 2 0 01-2 2H10a2 2 0 01-2-2V14z"
      ></path>
    </mask>
    <g mask="url(#mask0_1_13543)">
      <path fill="#135298" d="M32 14v4h-2v-4h2z"></path>
      <path fill="url(#paint2_linear_1_13543)" d="M32 30V16L7 30h25z"></path>
      <path fill="url(#paint3_linear_1_13543)" d="M8 30V16l25 14H8z"></path>
    </g>
    <path
      fill="#000"
      fillOpacity="0.3"
      d="M8 12a3 3 0 013-3h6a3 3 0 013 3v12a3 3 0 01-3 3H8V12z"
    ></path>
    <rect
      width="18"
      height="18"
      y="7"
      fill="url(#paint4_linear_1_13543)"
      rx="2"
    ></rect>
    <path
      fill="#fff"
      d="M14 16.07v-.167C14 13.023 11.927 11 9.016 11 6.089 11 4 13.036 4 15.93v.167C4 18.977 6.073 21 9 21c2.911 0 5-2.036 5-4.93zm-2.358.027c0 1.911-1.075 3.06-2.626 3.06-1.55 0-2.643-1.176-2.643-3.088v-.166c0-1.911 1.076-3.06 2.627-3.06 1.535 0 2.642 1.176 2.642 3.088v.166z"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_1_13543"
        x1="10"
        x2="30"
        y1="16"
        y2="16"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#064484"></stop>
        <stop offset="1" stopColor="#0F65B5"></stop>
      </linearGradient>
      <linearGradient
        id="paint1_linear_1_13543"
        x1="8"
        x2="32"
        y1="26.769"
        y2="26.769"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1B366F"></stop>
        <stop offset="1" stopColor="#2657B0"></stop>
      </linearGradient>
      <linearGradient
        id="paint2_linear_1_13543"
        x1="32"
        x2="8"
        y1="23"
        y2="23"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#44DCFD"></stop>
        <stop offset="0.453" stopColor="#259ED0"></stop>
      </linearGradient>
      <linearGradient
        id="paint3_linear_1_13543"
        x1="8"
        x2="32"
        y1="23"
        y2="23"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#259ED0"></stop>
        <stop offset="1" stopColor="#44DCFD"></stop>
      </linearGradient>
      <linearGradient
        id="paint4_linear_1_13543"
        x1="0"
        x2="18"
        y1="16"
        y2="16"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#064484"></stop>
        <stop offset="1" stopColor="#0F65B5"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export const OneDriveIcon: React.FC<IconSvgProps> = ({
  size = 32,
  width,
  height,
  ...props
}) => (
  <svg
    width={width || size}
    height={height || size}
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <mask
      id="mask0_1_13540"
      style={{ maskType: "alpha" }}
      width="32"
      height="20"
      x="0"
      y="6"
      maskUnits="userSpaceOnUse"
    >
      <path
        fill="#C4C4C4"
        d="M7.83 26C3.505 26 0 22.567 0 18.333c0-4.14 3.353-7.515 7.546-7.661C9.276 7.872 12.414 6 16 6c4.63 0 8.517 3.122 9.583 7.334C29.132 13.36 32 16.186 32 19.666c0 3.386-3 6.333-6.128 6.324L7.83 26z"
      ></path>
    </mask>
    <g mask="url(#mask0_1_13540)">
      <path
        fill="url(#paint0_linear_1_13540)"
        d="M7.83 26a7.878 7.878 0 01-6.076-2.831l16.289-6.836 12.666 7.132C29.591 24.92 27.905 26 26 25.99 23.125 26 12.062 26 7.83 26z"
      ></path>
      <path
        fill="url(#paint1_linear_1_13540)"
        d="M25.578 13.315l-7.535 3.018 12.666 7.132A6.22 6.22 0 0032 19.666c0-3.482-2.868-6.307-6.417-6.334l-.005-.018z"
      ></path>
      <path
        fill="url(#paint2_linear_1_13540)"
        d="M7.065 10.703l10.978 5.63 7.535-3.018C24.505 9.113 20.624 6 16 6c-3.586 0-6.725 1.872-8.454 4.672a8.123 8.123 0 00-.481.03z"
      ></path>
      <path
        fill="url(#paint3_linear_1_13540)"
        d="M1.754 23.169l16.289-6.836-10.978-5.63C3.099 11.079 0 14.352 0 18.333c0 1.834.657 3.517 1.754 4.836z"
      ></path>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_1_13540"
        x1="4.426"
        x2="27.23"
        y1="24.667"
        y2="23.276"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2086B8"></stop>
        <stop offset="1" stopColor="#46D3F6"></stop>
      </linearGradient>
      <linearGradient
        id="paint1_linear_1_13540"
        x1="23.83"
        x2="30.21"
        y1="19.667"
        y2="15.208"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1694DB"></stop>
        <stop offset="1" stopColor="#62C3FE"></stop>
      </linearGradient>
      <linearGradient
        id="paint2_linear_1_13540"
        x1="8.511"
        x2="23.334"
        y1="7.333"
        y2="15.935"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0D3D78"></stop>
        <stop offset="1" stopColor="#063B83"></stop>
      </linearGradient>
      <linearGradient
        id="paint3_linear_1_13540"
        x1="-0.34"
        x2="14.563"
        y1="20"
        y2="14.465"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#16589B"></stop>
        <stop offset="1" stopColor="#1464B7"></stop>
      </linearGradient>
    </defs>
  </svg>
);
