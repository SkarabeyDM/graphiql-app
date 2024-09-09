import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/shared/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: false };

export default withNextIntl(nextConfig);
