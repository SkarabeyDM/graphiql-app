import { defineRouting } from 'next-intl/routing';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { Locales } from './locales';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: [Locales.English, Locales.Russian],

  // Used when no locale matches
  defaultLocale: Locales.English,
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
