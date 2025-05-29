'use client';

import { useLanguage } from '@/src/lib/i18n';
import { useAnalytics } from '@/hooks/useAnalytics';
import Icon from '@/src/components/ui/Icon';
import Button from '@/src/components/ui/Button';
import Link from 'next/link';
import { useState } from 'react';


const packages = [
  {
    id: 'reporting',
    icon: 'chart-pie',
    titleKey: 'pricing.reporting_title',
    priceKey: 'pricing.reporting_price',
    features: [
      { key: 'pricing.reporting_feature1' },
      { key: 'pricing.reporting_feature2' },
      { key: 'pricing.reporting_feature3' },
      { key: 'pricing.reporting_feature4' }
    ],
    link: '/products/reporting'
  },
  {
    id: 'creative',
    icon: 'paint-brush',
    titleKey: 'pricing.creative_title',
    priceKey: 'pricing.creative_price',
    features: [
      { key: 'pricing.creative_feature1' },
      { key: 'pricing.creative_feature2' },
      { key: 'pricing.creative_feature3' },
      { key: 'pricing.creative_feature4' }
    ],
    link: '/products/creative'
  },
  {
    id: 'social',
    icon: 'share-alt',
    titleKey: 'pricing.social_title',
    priceKey: 'pricing.social_price',
    features: [
      { key: 'pricing.social_feature1' },
      { key: 'pricing.social_feature2' },
      { key: 'pricing.social_feature3' },
      { key: 'pricing.social_feature4' }
    ],
    link: '/products/social'
  },
  {
    id: 'seo',
    icon: 'search',
    titleKey: 'pricing.seo_title',
    priceKey: 'pricing.seo_price',
    features: [
      { key: 'pricing.seo_feature1' },
      { key: 'pricing.seo_feature2' },
      { key: 'pricing.seo_feature3' },
      { key: 'pricing.seo_feature4' }
    ],
    link: '/products/seo'
  }
];

export default function PricingSection() {
  const { t } = useLanguage();
  const { trackCalendarOpen, trackPricingView } = useAnalytics();

  const [hoveredCard, setHoveredCard] = useState(null);
  
  const handlePricingCTA = (packageName) => {
    trackCalendarOpen(`pricing_${packageName}`);
    trackPricingView(packageName);
  };

  const handleMoreDetails = (packageName) => {
    trackPricingView(`details_${packageName}`);
  };

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          {t('pricing.title')}
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          {t('pricing.subtitle')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={pkg.id}
              className={`bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl flex flex-col ${
                hoveredCard === index ? 'transform -translate-y-2' : ''
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="p-6 bg-purple-50">
                <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto transition-transform duration-300 hover:scale-110">
                  <Icon icon={pkg.icon} className="text-white text-2xl" />
                </div>
                
                <h3 className="text-xl font-bold text-center text-gray-900 mb-4">
                  {t(pkg.titleKey)}
                </h3>
                
                <div className="text-center flex flex-col items-center">
                  <div className="text-sm text-gray-600 mb-1">
                    {t('pricing.from')}
                  </div>
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold text-purple-600 transition-all duration-300">
                      {t(pkg.priceKey)}
                    </span>
                    <span className="text-gray-500 ml-1">
                      {t('pricing.period')}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <ul className="space-y-3 mb-6 flex-grow">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700 transition-all duration-200 hover:bg-purple-50 p-2 rounded-md">
                      <Icon icon="check" className="text-green-500 mr-2" />
                      <span>{t(feature.key)}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col items-center gap-2 mt-auto">
                  <Button 
                    data-cal-link="berk-capar-jb7kj5/30min"
                    data-cal-namespace="30min"
                    data-cal-config='{"layout":"month_view"}'
                    onClick={() => handlePricingCTA(pkg.id)}
                    variant="primary" 
                    className="w-full text-center py-2.5 flex items-center justify-center"
                  >
                    {t('pricing.cta')}
                  </Button>
                  
                  <Link 
                    href={pkg.link}
                    onClick={() => handleMoreDetails(pkg.id)}
                    className="text-purple-600 hover:text-purple-700 text-sm font-medium hover:underline transition-colors duration-200 mt-1"
                  >
                    {t('pricing.more_details')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center text-gray-600 mt-12 max-w-3xl mx-auto">
          <p>{t('pricing.note')}</p>
          <p className="mt-2 text-sm">
            {t('pricing.custom_note')}
          </p>
        </div>
      </div>
    </section>
  );
} 