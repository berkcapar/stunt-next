'use client';

import { useLanguage } from '@/src/lib/i18n';
import Button from '@/src/components/ui/Button';
import Icon from '@/src/components/ui/Icon';
import Link from 'next/link';
import { useState } from 'react';
import { useModal } from '@/src/context/ModalContext';

export default function ProductPricing({
  pricing = [],
  productPageLink
}) {
  const { t } = useLanguage();

  const [hoveredCard, setHoveredCard] = useState(null);
  
  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          {t('product.pricing_title')}
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          {t('product.pricing_subtitle')}
        </p>
        
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {pricing.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl flex flex-col flex-1 max-w-md ${
                plan.popular ? 'md:scale-105 z-10' : ''
              } ${hoveredCard === index ? 'transform -translate-y-2' : ''}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {plan.popular && (
                <div className="bg-purple-600 text-white text-center py-2 font-medium">
                  {t('pricing.popular')}
                </div>
              )}
              
              <div className={`p-6 ${!plan.popular ? 'pt-10' : ''} flex flex-col flex-grow`}>
                <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">
                  {t(plan.titleKey)}
                </h3>
                
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-purple-600 transition-all duration-300">
                    {t(plan.priceKey)}
                  </span>
                  <span className="text-gray-500 ml-1">
                    {t(plan.intervalKey || 'pricing.from')}
                  </span>
                </div>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start transition-all duration-200 hover:bg-purple-50 p-2 rounded-md">
                      <Icon 
                        icon={feature.included ? 'check' : 'times'} 
                        className={`mr-2 mt-1 ${
                          feature.included ? 'text-green-500' : 'text-red-500'
                        }`} 
                      />
                      <span className="text-gray-700">{t(feature.key)}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <Button 
                    data-cal-link="berk-capar-jb7kj5/30min"
                    data-cal-namespace="30min"
                    data-cal-config='{"layout":"month_view"}'
                    variant={plan.popular ? 'primary' : 'outline'} 
                    className="w-full justify-center"
                  >
                    {t(plan.ctaKey || 'pricing.cta')}
                  </Button>

                  {productPageLink && (
                    <Button
                      href={productPageLink}
                      variant="secondary"
                      className="w-full justify-center"
                    >
                      {t('pricing.more_details')}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center text-gray-600 mt-12">
          <p>{t('pricing.custom_note')}</p>
        </div>
      </div>
    </section>
  );
} 