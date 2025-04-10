import {defineRouting} from 'next-intl/routing';
import { createNavigation } from "next-intl/navigation";
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['id', 'en'],
 
  // Used when no locale matches
  defaultLocale: 'id'
});
export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
