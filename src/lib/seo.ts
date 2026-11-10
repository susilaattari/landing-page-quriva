import type { Metadata } from 'next';
import {
  COMPANY_NAME,
  SITE_URL,
  SUPPORT_EMAIL,
  SUPPORT_WHATSAPP,
} from './config';

export const SITE = {
  name: 'Quriva',
  legalName: COMPANY_NAME,
  url: SITE_URL,
  title: "Quriva — Monitoring Hafalan Al-Qur'an",
  description:
    'Pantau setoran, penilaian per ayat, dan progres hafalan santri. Quriva untuk sekolah, rumah tahfidz, dan halaqah privat.',
  locale: 'id_ID',
  language: 'id',
  email: SUPPORT_EMAIL,
  phone: SUPPORT_WHATSAPP ? `+${SUPPORT_WHATSAPP}` : undefined,
  ogImage: '/og/quriva-og.png',
  keywords: [
    'monitoring hafalan',
    'aplikasi tahfidz',
    'software tahfidz',
    'aplikasi hafalan al quran',
    'mutabaah hafalan',
    'kartu setoran hafalan digital',
    'aplikasi wali santri',
    'manajemen halaqah',
    'e-sertifikat tasmi',
    'rumah tahfidz',
  ],
} as const;

export const absoluteUrl = (path = '/') => `${SITE.url}${path === '/' ? '' : path}`;

type BuildMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  absoluteTitle?: boolean;
};

export function buildMetadata({
  title,
  description = SITE.description,
  path = '/',
  image = SITE.ogImage,
  noIndex = false,
  type = 'website',
  publishedTime,
  modifiedTime,
  absoluteTitle = false,
}: BuildMetadataInput = {}): Metadata {
  const url = absoluteUrl(path);
  const ogTitle = title ? `${title} — ${SITE.name}` : SITE.title;
  const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
  const bingVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION;

  const verification =
    googleVerification || bingVerification
      ? {
          ...(googleVerification ? { google: googleVerification } : {}),
          ...(bingVerification ? { other: { 'msvalidate.01': bingVerification } } : {}),
        }
      : undefined;

  return {
    metadataBase: new URL(SITE.url),
    title: title
      ? absoluteTitle
        ? { absolute: title }
        : { default: title, template: `%s — ${SITE.name}` }
      : { default: SITE.title, template: `%s — ${SITE.name}` },
    description,
    applicationName: SITE.name,
    category: 'education',
    keywords: [...SITE.keywords],
    authors: [{ name: SITE.name, url: SITE.url }],
    creator: SITE.name,
    publisher: SITE.legalName,
    referrer: 'origin-when-cross-origin',
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      locale: SITE.locale,
      url,
      siteName: SITE.name,
      title: ogTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
    ...(verification ? { verification } : {}),
    manifest: '/manifest.webmanifest',
    appleWebApp: {
      capable: true,
      title: SITE.name,
      statusBarStyle: 'default',
    },
    icons: {
      icon: [{ url: '/favicon.png', sizes: '64x64', type: 'image/png' }],
      apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
    },
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
  };
}
