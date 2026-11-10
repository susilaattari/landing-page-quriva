import { APP_SCREENS } from '@/content/app-screens';
import type { Package } from './packages';
import { absoluteUrl, SITE } from './seo';

export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: absoluteUrl('/logo.png'),
    description: SITE.description,
    email: SITE.email,
    ...(SITE.phone ? { telephone: SITE.phone } : {}),
    areaServed: 'ID',
    knowsAbout: [
      'Monitoring hafalan Al-Qur\u2019an',
      'Manajemen tahfidz',
      'Tahsin bacaan',
      'Mutabaah hafalan',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: SITE.email,
        ...(SITE.phone ? { telephone: SITE.phone } : {}),
        availableLanguage: ['id'],
      },
    ],
  };
}

export function websiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    inLanguage: SITE.language,
    publisher: { '@id': `${SITE.url}/#organization` },
  };
}

export function softwareApplicationSchema(packages: Package[], fallback: boolean) {
  const prices = packages.map((pkg) => pkg.price).filter((price) => price > 0);
  const lowPrice = prices.length ? Math.min(...prices) : undefined;
  const highPrice = prices.length ? Math.max(...prices) : undefined;

  return {
    '@type': 'SoftwareApplication',
    '@id': `${SITE.url}/#application`,
    name: SITE.name,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'EducationApplication',
    operatingSystem: 'Web, Android',
    inLanguage: SITE.language,
    description:
      'Platform monitoring hafalan Al-Qur\u2019an untuk sekolah, rumah tahfidz, dan halaqah privat: setoran, penilaian per ayat, rekap, dan laporan wali.',
    url: SITE.url,
    image: absoluteUrl(SITE.ogImage),
    screenshot: APP_SCREENS.map((screen) => ({
      '@type': 'ImageObject',
      url: absoluteUrl(screen.src),
      name: screen.title,
      caption: screen.alt,
      encodingFormat: 'image/webp',
    })),
    publisher: { '@id': `${SITE.url}/#organization` },
    featureList: [
      'Setoran hafalan ziyadah, muroja\u2019ah, dan tasmi\u2019',
      'Penilaian per ayat dengan tap pada mushaf digital',
      'Rekap progres per santri dan halaqah',
      'Peta hafalan 30 juz',
      'Aplikasi Android untuk guru dan wali',
      'E-sertifikat tasmi (PDF)',
      'Tahsin dengan rekaman suara',
      'LMS materi dan sesi',
    ],
    ...(!fallback && lowPrice !== undefined && highPrice !== undefined
      ? {
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'IDR',
            lowPrice,
            highPrice,
            offerCount: packages.length,
            availability: 'https://schema.org/InStock',
          },
        }
      : {}),
  };
}

export function faqSchema(faqs: readonly { question: string; answer: string }[]) {
  return {
    '@type': 'FAQPage',
    '@id': `${SITE.url}/#faq`,
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: readonly { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

type ArticleInput = {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
};

export function articleSchema({
  headline,
  description,
  path,
  datePublished,
  dateModified,
  image = SITE.ogImage,
}: ArticleInput) {
  return {
    '@type': 'Article',
    '@id': `${absoluteUrl(path)}#article`,
    headline,
    description,
    inLanguage: SITE.language,
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(path) },
    image: [absoluteUrl(image)],
    author: { '@id': `${SITE.url}/#organization` },
    publisher: { '@id': `${SITE.url}/#organization` },
  };
}
