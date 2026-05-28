/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['et', 'en', 'ru'],
    defaultLocale: 'et',
    localeDetection: false,
  },
};

module.exports = nextConfig;
