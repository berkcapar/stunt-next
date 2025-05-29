'use client';

import { useLanguage } from '@/src/lib/i18n';
import { useAnalytics } from '@/hooks/useAnalytics';
import Button from '@/src/components/ui/Button';
import Image from 'next/image';

export default function HeroSection() {
  const { t } = useLanguage();
  const { trackCalendarOpen } = useAnalytics();
  
  const handleScheduleClick = () => {
    trackCalendarOpen('hero_cta');
  };
  
  return (
    <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              {t('hero.subtitle')}
            </p>
            <p className="text-lg text-gray-700 mb-8">
              {t('hero.subtitle2')}
            </p>
            <Button 
              data-cal-link="berk-capar-jb7kj5/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
              onClick={handleScheduleClick}
              size="lg"
            >
              {t('hero.cta')}
            </Button>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-purple-200 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <Image
                src="/hero.png"
                alt="Stunt Marketing Automation Platform"
                width={600}
                height={400}
                className="relative rounded-lg shadow-xl z-10"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 