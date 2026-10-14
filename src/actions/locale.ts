'use server';

import { cookies } from 'next/headers';
import { Locale } from '@/lib/i18n';

export async function setLocale(locale: Locale) {
  const cookieStore = await cookies();
  cookieStore.set('NEXT_LOCALE', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365, // 1 year
    httpOnly: false, // allows client components to potentially read it if needed, though we use server actions
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  });
}
