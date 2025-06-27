'use client';

import { useLanguage } from '@/src/lib/i18n';
import { useState } from 'react';
import Icon from '@/src/components/ui/Icon';

const audiences = [
  {
    id: 'solopreneur',
    icon: 'user',
    titleKey: 'audience.solo_title',
    descKey: 'audience.solo_desc',
    color: 'bg-gradient-to-br from-purple-500 to-pink-500'
  },
  {
    id: 'startup',
    icon: 'rocket',
    titleKey: 'audience.startup_title',
    descKey: 'audience.startup_desc',
    color: 'bg-gradient-to-br from-blue-500 to-purple-500'
  },
  {
    id: 'sme',
    icon: 'building',
    titleKey: 'audience.sme_title',
    descKey: 'audience.sme_desc',
    color: 'bg-gradient-to-br from-green-500 to-teal-500'
  },
  {
    id: 'ecommerce',
    icon: 'shopping-cart',
    titleKey: 'audience.ecommerce_title',
    descKey: 'audience.ecommerce_desc',
    color: 'bg-gradient-to-br from-orange-500 to-red-500'
  },
  {
    id: 'offline',
    icon: 'store',
    titleKey: 'audience.offline_title',
    descKey: 'audience.offline_desc',
    color: 'bg-gradient-to-br from-teal-500 to-blue-500'
  }
];

export default function TargetAudienceSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % audiences.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + audiences.length) % audiences.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          {t('audience.title')}
        </h2>
        <p className="text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          {t('audience.subtitle')}
        </p>

        <div className="relative max-w-6xl mx-auto">
          {/* Desktop View */}
          <div className="hidden lg:grid grid-cols-5 gap-6">
            {audiences.map((audience, index) => (
              <div
                key={audience.id}
                className={`rounded-xl p-6 transition-all duration-300 cursor-pointer transform ${
                  hoveredIndex === index ? 'scale-105' : ''
                } ${audience.color} hover:shadow-xl`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon icon={audience.icon} className="text-white text-xl" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {t(audience.titleKey)}
                </h3>
                <p className="text-white/90 text-sm">
                  {t(audience.descKey)}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Slider */}
          <div className="lg:hidden">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {audiences.map((audience) => (
                  <div
                    key={audience.id}
                    className={`w-full flex-shrink-0 rounded-xl p-6 ${audience.color}`}
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                      <Icon icon={audience.icon} className="text-white text-xl" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">
                      {t(audience.titleKey)}
                    </h3>
                    <p className="text-white/90">
                      {t(audience.descKey)}
                    </p>
                  </div>
                ))}
              </div>

              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/40 rounded-full p-2"
              >
                <Icon icon="chevron-left" className="text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/40 rounded-full p-2"
              >
                <Icon icon="chevron-right" className="text-white" />
              </button>

              <div className="flex justify-center mt-6 gap-2">
                {audiences.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeIndex === index ? 'bg-purple-600 w-4' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 