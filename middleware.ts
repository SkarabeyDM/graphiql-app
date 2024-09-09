import createMiddleware from 'next-intl/middleware';
import { routing } from '@shared/i18n';

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', `/(en|ru)/:path*`, '/((?!api|_next|_vercel|.*\\..*).*)'],
};
