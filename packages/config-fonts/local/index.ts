import localFont from 'next/font/local';
import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const eUkraine = localFont({
  display: 'swap',
  preload: true,
  variable: '--font-e-ukraine',
  src: [
    {
      path: './e-Ukraine-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: './e-Ukraine-UltraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './e-Ukraine-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './e-Ukraine-Regular.woff2',
      weight: '400',
      style: 'normal',
    },

    {
      path: './e-Ukraine-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './e-Ukraine-Medium.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './e-Ukraine-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})