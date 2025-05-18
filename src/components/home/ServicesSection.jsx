'use client';

import { useLanguage } from '@/src/lib/i18n';
import Link from 'next/link';
import Icon from '@/src/components/ui/Icon';
import Image from 'next/image';

const serviceImages = {
  reporting: {
    src: '/report-homepage.png',
    alt: 'Reporting Dashboard'
  },
  social: {
    src: '/automation.png',
    alt: 'Social Media Automation'
  },
  seo: {
    src: '/seo-automation.png',
    alt: 'SEO Content Automation'
  },
  creative: {
    src: '/content-creation.png',
    alt: 'AI Creative Generation Automation'
  }
};

const ServiceImage = ({ service }) => {
  const imageConfig = serviceImages[service.id];
  
  if (imageConfig) {
    return (
      <div className="relative">
        {/* Purple glow effect */}
        <div className="absolute -inset-4 bg-purple-200 rounded-full blur-2xl opacity-30"></div>
        {/* Image container */}
        <div className="relative bg-white p-6 rounded-lg shadow-xl">
          <Image
            src={imageConfig.src}
            alt={imageConfig.alt}
            width={800}
            height={450}
            className="rounded-lg"
            priority
          />
        </div>
      </div>
    );
  }
  
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-purple-200 rounded-full blur-2xl opacity-30"></div>
      <div className="relative bg-white p-6 rounded-lg shadow-xl">
        <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
          <Icon icon={service.icon} className="text-gray-400 text-4xl" />
        </div>
      </div>
    </div>
  );
};

const ServiceInfoCard = ({ title, description, className }) => (
  <div className={`bg-gray-50 p-6 rounded-lg ${className}`}>
    <h4 className="text-xl font-semibold text-purple-600 mb-4">
      {title}
    </h4>
    <p className="text-gray-700 leading-relaxed">
      {description}
    </p>
  </div>
);

const ServiceContent = ({ service, t }) => (
  <div className="space-y-6">
    <h3 className="text-3xl font-bold text-gray-900">
      {t(service.titleKey)}
    </h3>
    
    <ServiceInfoCard
      title={t(service.whatKey)}
      description={t(service.whatDescKey)}
      className="mb-6"
    />
    
    <ServiceInfoCard
      title={t(service.howKey)}
      description={t(service.howDescKey)}
      className="mb-8"
    />
    
    <Link 
      href={service.link}
      className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200"
    >
      <span className="mr-2">{t('pricing.more_details')}</span>
      <Icon icon="arrow-right" className="w-4 h-4" />
    </Link>
  </div>
);

const services = [
  {
    id: 'reporting',
    icon: 'chart-pie',
    titleKey: 'services.reporting_title',
    whatKey: 'services.reporting_what',
    whatDescKey: 'services.reporting_what_desc',
    howKey: 'services.reporting_how',
    howDescKey: 'services.reporting_how_desc',
    link: '/products/reporting'
  },
  {
    id: 'creative',
    icon: 'paint-brush',
    titleKey: 'services.creative_title',
    whatKey: 'services.creative_what',
    whatDescKey: 'services.creative_what_desc',
    howKey: 'services.creative_how',
    howDescKey: 'services.creative_how_desc',
    link: '/products/creative'
  },
  {
    id: 'social',
    icon: 'share-alt',
    titleKey: 'services.social_title',
    whatKey: 'services.social_what',
    whatDescKey: 'services.social_what_desc',
    howKey: 'services.social_how',
    howDescKey: 'services.social_how_desc',
    link: '/products/social'
  },
  {
    id: 'seo',
    icon: 'search',
    titleKey: 'services.seo_title',
    whatKey: 'services.seo_what',
    whatDescKey: 'services.seo_what_desc',
    howKey: 'services.seo_how',
    howDescKey: 'services.seo_how_desc',
    link: '/products/seo'
  }
];

export default function ServicesSection() {
  const { t } = useLanguage();
  
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          {t('services.title')}
        </h2>
        
        <div className="space-y-32">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="flex flex-col lg:flex-row items-start gap-16"
            >
              <div className="lg:w-1/2">
                <ServiceContent service={service} t={t} />
              </div>
              
              <div className="lg:w-1/2">
                <ServiceImage service={service} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 