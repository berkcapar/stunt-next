'use client';

import { useLanguage } from '@/src/lib/i18n';
import Icon from '@/src/components/ui/Icon';

const painPoints = [
  { 
    id: 'time', 
    icon: 'clock', 
    titleKey: 'pain.time_title', 
    descKey: 'pain.time_desc'
  },
  { 
    id: 'budget', 
    icon: 'coins', 
    titleKey: 'pain.budget_title', 
    descKey: 'pain.budget_desc'
  },
  { 
    id: 'results', 
    icon: 'chart-line', 
    titleKey: 'pain.results_title', 
    descKey: 'pain.results_desc'
  },
  { 
    id: 'complex', 
    icon: 'brain', 
    titleKey: 'pain.complex_title', 
    descKey: 'pain.complex_desc'
  }
];

export default function PainPointsSection() {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          {t('pain.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point) => (
            <div 
              key={point.id}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Icon icon={point.icon} className="text-purple-600 text-2xl" />
              </div>
              
              <h3 className="text-xl font-semibold text-center mb-4 text-gray-900">
                {t(point.titleKey)}
              </h3>
              
              <p className="text-gray-600 text-center">
                {t(point.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 