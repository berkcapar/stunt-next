'use client';

import HeroSection from '@/src/components/home/HeroSection';
import ServicesSection from '@/src/components/home/ServicesSection';
import PainPointsSection from '@/src/components/home/PainPointsSection';
import PricingSection from '@/src/components/home/PricingSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PainPointsSection />
      <PricingSection />
    </>
  );
}
