'use client';

import { useLanguage } from '@/src/lib/i18n';
import Button from '@/src/components/ui/Button';
import { useModal } from '@/src/context/ModalContext';

const teamMembers = [
  {
    name: 'John Doe',
    title: 'CEO & Founder',
    image: 'https://via.placeholder.com/300x300',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Jane Smith',
    title: 'CTO',
    image: 'https://via.placeholder.com/300x300',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Alex Johnson',
    title: 'Head of Marketing',
    image: 'https://via.placeholder.com/300x300',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Sara Williams',
    title: 'Lead Developer',
    image: 'https://via.placeholder.com/300x300',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  }
];

const values = [
  {
    icon: 'rocket',
    titleKey: 'about.value1_title',
    descKey: 'about.value1_desc'
  },
  {
    icon: 'users',
    titleKey: 'about.value2_title',
    descKey: 'about.value2_desc'
  },
  {
    icon: 'lightbulb',
    titleKey: 'about.value3_title',
    descKey: 'about.value3_desc'
  },
  {
    icon: 'star',
    titleKey: 'about.value4_title',
    descKey: 'about.value4_desc'
  }
];

export default function AboutPage() {
  const { t } = useLanguage();

  
  return (
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
  );
} 