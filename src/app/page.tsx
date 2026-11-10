import Hero from '@/components/marketing/Hero';
import SegmentExplorer from '@/components/marketing/SegmentExplorer';
import ProblemSolution from '@/components/marketing/ProblemSolution';
import AppShowcaseGallery from '@/components/marketing/AppShowcaseGallery';
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
import { faqSchema, organizationSchema, softwareApplicationSchema, websiteSchema } from '@/lib/schema';
import JsonLd from '@/components/seo/JsonLd';

export const revalidate = 3600;

export default async function HomePage() {
  const { packages, fallback } = await getPackages();

  const jsonLd = [
    websiteSchema(),
    organizationSchema(),
    softwareApplicationSchema(packages, fallback),
    faqSchema(FAQS),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />
      <Hero />
      <SegmentExplorer />
      <ProblemSolution />
      <AppShowcaseGallery />
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
