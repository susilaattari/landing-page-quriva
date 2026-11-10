import Hero from '@/components/marketing/Hero';
import SegmentExplorer from '@/components/marketing/SegmentExplorer';
import ProblemSolution from '@/components/marketing/ProblemSolution';
import FeatureShowcase from '@/components/marketing/FeatureShowcase';
import GuardianSection from '@/components/marketing/GuardianSection';
import HowItWorks from '@/components/marketing/HowItWorks';
import DemoCallout from '@/components/marketing/DemoCallout';
import PricingSection from '@/components/marketing/PricingSection';
import TrustSection from '@/components/marketing/TrustSection';
import Faq from '@/components/marketing/Faq';
import FinalCta from '@/components/marketing/FinalCta';

import { FAQS } from '@/content/landing';
import { getPackages } from '@/lib/packages';
import { COMPANY_NAME, SITE_URL, SUPPORT_EMAIL, SUPPORT_WHATSAPP } from '@/lib/config';

export const revalidate = 3600;

export default async function HomePage() {
  const { packages, fallback } = await getPackages();

  const prices = packages.map((pkg) => pkg.price).filter((price) => price > 0);
  const lowPrice = prices.length ? Math.min(...prices) : undefined;
  const highPrice = prices.length ? Math.max(...prices) : undefined;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Quriva',
        legalName: COMPANY_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'customer support',
            email: SUPPORT_EMAIL,
            ...(SUPPORT_WHATSAPP ? { telephone: `+${SUPPORT_WHATSAPP}` } : {}),
            availableLanguage: ['id'],
          },
        ],
      },
      {
        '@type': 'SoftwareApplication',
        '@id': `${SITE_URL}/#application`,
        name: 'Quriva',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, Android',
        description:
          'Platform monitoring hafalan Al-Qur\u2019an untuk sekolah, rumah tahfidz, dan halaqah privat: setoran, penilaian per ayat, rekap, dan laporan wali.',
        url: SITE_URL,
        publisher: { '@id': `${SITE_URL}/#organization` },
        featureList: [
          'Setoran hafalan ziyadah, muroja\u2019ah, dan tasmi\u2019',
          'Penilaian per ayat',
          'Rekap progres per santri dan halaqah',
          'Aplikasi Android untuk guru dan wali',
          'E-sertifikat tasmi (PDF)',
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
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/#faq`,
        mainEntity: FAQS.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <Hero />
      <SegmentExplorer />
      <ProblemSolution />
      <FeatureShowcase />
      <GuardianSection />
      <HowItWorks />
      <DemoCallout />
      <PricingSection packages={packages} fallback={fallback} />
      <TrustSection />
      <Faq />
      <FinalCta />
    </>
  );
}
