'use client';

import { useLanguage } from '@/src/lib/i18n';
import Button from '@/src/components/ui/Button';
import Icon from '@/src/components/ui/Icon';
import Image from 'next/image';
export default function ProductLayout({ 
  productId, 
  icon, 
  titleKey, 
  descriptionKey,
  whatTitleKey,
  whatDescKey,
  howTitleKey,
  howDescKey,
  featuresKey,
  features,
  useCasesTitleKey,
  useCases,
  children
}) {
  const { t } = useLanguage();
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center">
                  <Icon icon={icon} className="text-white text-2xl" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t(titleKey)}
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
                {t(descriptionKey)}
              </p>
              
              <Button 
                data-cal-link="berk-capar-jb7kj5/30min"
                data-cal-namespace="30min"
                data-cal-config='{"layout":"month_view"}'
                size="lg"
              >
                {t('product.start_now')}
              </Button>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-purple-200 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative z-10 bg-white p-8 rounded-lg shadow-xl">
                  {productId === 'reporting' ? (
                    <Image
                      src="/reporting.png"
                      alt="Marketing Reports & Analytics"
                      width={800}
                      height={450}
                      className="rounded-lg"
                      priority
                    />
                  ) : productId === 'seo' ? (
                    <Image
                      src="/seo-page.png"
                      alt="SEO Content Automation"
                      width={800}
                      height={450}
                      className="rounded-lg"
                      priority
                    />
                  ) : productId === 'social' ? (
                    <Image
                      src="/automation-page.png"
                      alt="Social Media Automation"
                      width={800}
                      height={450}
                      className="rounded-lg"
                      priority
                    />
                  ) : productId === 'creative' ? (
                    <Image
                      src="/automation-page1.png"
                      alt="AI Creative Generation"
                      width={800}
                      height={450}
                      className="rounded-lg"
                      priority
                    />
                  ) : (
                    <div className="aspect-video w-full bg-gray-200 mb-4 rounded flex items-center justify-center">
                      <span className="text-gray-500">{productId} Demo</span>
                    </div>
                  )}
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* What & How Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-purple-600 mb-6">
                {t(whatTitleKey)}
              </h2>
              <p className="text-gray-700">
                {t(whatDescKey)}
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-purple-600 mb-6">
                {t(howTitleKey)}
              </h2>
              <p className="text-gray-700">
                {t(howDescKey)}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t(featuresKey)}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Icon icon={feature.icon} className="text-purple-600 text-xl" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {t(feature.titleKey)}
                </h3>
                
                <p className="text-gray-700">
                  {t(feature.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Use Cases Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t(useCasesTitleKey)}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                    <Icon icon={useCase.icon} className="text-white text-lg" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900">
                    {t(useCase.titleKey)}
                  </h3>
                </div>
                
                <p className="text-gray-700 mb-4">
                  {t(useCase.descKey)}
                </p>
                
                <div className="text-sm text-gray-600 italic">
                  "{t(useCase.quoteKey)}"
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Content */}
      {children}
    </>
  );
} 