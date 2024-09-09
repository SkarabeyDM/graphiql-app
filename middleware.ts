import createMiddleware from 'next-intl/middleware';
import { routing, Locales } from '@shared/i18n';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    `/(${Locales.English}|${Locales.Russian})/:path*`,
    '/((?!api|_next|_vercel|.*/..*).*)',
  ],
};
