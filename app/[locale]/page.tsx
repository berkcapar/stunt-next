import HeroSection from '@/src/components/home/HeroSection';
import ServicesSection from '@/src/components/home/ServicesSection';
import PainPointsSection from '@/src/components/home/PainPointsSection';
import TargetAudienceSection from '@/src/components/home/TargetAudienceSection';
import PricingSection from '@/src/components/home/PricingSection';

export default function LocaleHomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PainPointsSection />
      <TargetAudienceSection />
      <PricingSection />
    </>
  );
} 