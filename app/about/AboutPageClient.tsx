'use client';

import { useLanguage } from '@/src/lib/i18n';
import Button from '@/src/components/ui/Button';

export default function AboutPageClient() {
  const { t } = useLanguage();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Berk Capar',
            jobTitle: 'Founder & CEO',
            worksFor: {
              '@type': 'Organization',
              name: 'Stunt',
              url: 'https://stuntai.co'
            },
            url: 'https://stuntai.co/about',
            image: 'https://stuntai.co/berk-capar.jpg',
            description: 'Founder of Stunt AI with 8 years of experience in marketing technology product management. Previously worked with Samsung, Stack Overflow, Nestle, and Unilever.',
            alumniOf: [
              {
                '@type': 'Organization',
                name: 'Samsung'
              },
              {
                '@type': 'Organization', 
                name: 'Stack Overflow'
              }
            ],
            knowsAbout: [
              'Marketing Automation',
              'Artificial Intelligence',
              'Product Management',
              'Digital Marketing',
              'AdTech',
              'B2B Marketing'
            ],
            sameAs: [
              'https://www.linkedin.com/in/berkcapar',
              'https://x.com/bcaparing'
            ]
          })
        }}
      />
      
      <section className="py-20 bg-white text-gray-700">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            <span className="highlight-orange">{t('about.title')}</span>
          </h1>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              {t('about.greeting')}
            </p>
            <p>
              {t('about.intro')}
            </p>
            <p dangerouslySetInnerHTML={{ __html: t('about.experience') }} />
            <p dangerouslySetInnerHTML={{ __html: t('about.marketing_change') }} />
            <p dangerouslySetInnerHTML={{ __html: t('about.problem_solution') }} />
            <p dangerouslySetInnerHTML={{ __html: t('about.customization') }} />
            <p>
              {t('about.invitation')}
            </p>
            
            <div className="text-center py-6">
              <Button 
                data-cal-link="berk-capar-jb7kj5/30min"
                data-cal-namespace="30min"
                data-cal-config='{"layout":"month_view"}'
                variant="primary" 
                size="lg"
                className=""
                href=""
                onClick={() => {}}
              >
                {t('about.cta')}
              </Button>
            </div>
            
            <p>
              {t('about.closing')}
            </p>
            <p>
              {t('about.signature')}<br />
              {t('about.name')}
            </p>
          </div>
        </div>
      </section>
    </>
  );
} 