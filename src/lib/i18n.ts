import { cookies } from 'next/headers';
import en from '../dictionaries/en.json';
import id from '../dictionaries/id.json';

export type Locale = 'en' | 'id';
export type Dictionary = typeof en;

const dictionaries = {
  en,
  id,
};

export async function getDictionary(): Promise<Dictionary> {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('NEXT_LOCALE');
  const locale = (localeCookie?.value as Locale) || 'en';
  return dictionaries[locale] || dictionaries.en;
}

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get('NEXT_LOCALE');
  return (localeCookie?.value as Locale) || 'en';
}
