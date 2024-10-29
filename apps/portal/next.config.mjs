import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    tsconfigPath: "./tsconfig.build.json",
    ignoreBuildErrors: false,
  },
  output: 'standalone',
  env: {
    primaryColor: '#E76033',
  },
  async rewrites() {
    return [
      {
        source: '/app',
        destination: '/apps',
      },
    ]
  },
};

export default withNextIntl(nextConfig);
