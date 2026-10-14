import { Plus_Jakarta_Sans, Syne, Inter } from 'next/font/google';

export const fontPrimary = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-primary',
  weight: ['600', '700', '800'],
  display: 'swap',
});

export const fontAccent = Syne({
  subsets: ['latin'],
  variable: '--font-accent',
  weight: ['700', '800'],
  display: 'swap',
});

// TEMPORARY FALLBACK FOR SATOSHI
// Once public/fonts/Satoshi-Regular.woff2 is available, replace this with next/font/local
export const fontSecondary = Inter({
  subsets: ['latin'],
  variable: '--font-secondary',
  weight: ['400', '500'],
  display: 'swap',
});
