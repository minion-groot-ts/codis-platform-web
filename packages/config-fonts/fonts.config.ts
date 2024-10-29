import localFont from 'next/font/local';

export const eUkraine = localFont({
  display: 'swap',
  preload: true,
  variable: '--font-e-ukraine',
  src: [
    {
      path: './local/e-Ukraine-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: './local/e-Ukraine-UltraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './local/e-Ukraine-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './local/e-Ukraine-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './local/e-Ukraine-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './local/e-Ukraine-Medium.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './local/e-Ukraine-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})