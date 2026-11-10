import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/manrope';
import './globals.css';

import SiteHeader from '@/components/marketing/SiteHeader';
import SiteFooter from '@/components/marketing/SiteFooter';
import { SITE_URL } from '@/lib/config';

const title = "Quriva — Monitoring Hafalan Al-Qur'an";
const description =
  'Pantau setoran, penilaian per ayat, dan progres hafalan santri. Quriva untuk sekolah, rumah tahfidz, dan halaqah privat.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: '%s — Quriva',
  },
  description,
  applicationName: 'Quriva',
  category: 'education',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: SITE_URL,
    siteName: 'Quriva',
    title,
    description,
    images: [
      {
        url: '/og/quriva-og.png',
        width: 1200,
        height: 630,
        alt: 'Quriva — monitoring hafalan Al-Qur’an',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og/quriva-og.png'],
  },
  robots: {
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FAF8F2',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="flex min-h-screen flex-col bg-paper font-sans text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-brand focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Lompat ke konten utama
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
