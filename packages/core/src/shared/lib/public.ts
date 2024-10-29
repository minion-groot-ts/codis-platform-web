// import { locales, publicPages } from "@m3plus/app-config";

// export const publicPathnameRegex = RegExp(
//   `^(/(${locales.join('|')}))?(${publicPages
//     .flatMap((p) => (p === '/' ? ['', '/'] : p))
//     .join('|')})/?$`,
//   'i'
// );

export const copyrightAge = () => {
  const startYear: number = 2024;
  const currentYear: number = new Date().getFullYear();

  return startYear === currentYear
    ? currentYear
    : `${startYear}-${currentYear}`;
};
