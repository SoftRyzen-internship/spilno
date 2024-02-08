import { Metadata } from 'next';

import data from '@/data/meta.json';

const { title, description, keywords, locale, images } = data;

const { NEXT_PUBLIC_BASE_URL } = process.env;

const meta: Metadata = {
  title,
  description,
  keywords,
  metadataBase: new URL(NEXT_PUBLIC_BASE_URL as string),
  alternates: {
    canonical: NEXT_PUBLIC_BASE_URL as string,
  },
  manifest: '/meta/site.webmanifest',
  openGraph: {
    title,
    description,
    url: NEXT_PUBLIC_BASE_URL as string,
    siteName: title,
    locale,
    type: 'website',
    images,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    images,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/meta/light/favicon.ico',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/meta/dark/favicon.ico',
      },
      {
        media: '(prefers-color-scheme: light)',
        url: '/meta/light/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/meta/dark/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        media: '(prefers-color-scheme: light)',
        url: '/meta/light/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/meta/dark/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        media: '(prefers-color-scheme: light)',
        url: '/meta/light/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/meta/dark/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        media: '(prefers-color-scheme: light)',
        url: '/meta/light/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/meta/dark/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    shortcut: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/meta/light/favicon.ico',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/meta/dark/favicon.ico',
      },
    ],
    apple: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/meta/light/apple-touch-icon.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/meta/dark/apple-touch-icon.png',
      },
    ],
    other: [
      {
        media: '(prefers-color-scheme: light)',
        rel: '/meta/light/apple-touch-icon.png',
        url: '/meta/light/apple-touch-icon.png',
      },
      {
        media: '(prefers-color-scheme: dark)',
        rel: '/meta/dark/apple-touch-icon.png',
        url: '/meta/dark/apple-touch-icon.png',
      },
    ],
  },
};

export default meta;
