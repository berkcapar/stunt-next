import type { Metadata } from 'next';
import AboutPageClient from '../[locale]/about/AboutPageClient';

export const metadata: Metadata = {
  title: 'Berk Capar Hakkında - Stunt AI Marketing Automation Kurucusu',
  description: 'Stunt AI kurucusu Berk Capar ile tanışın. 8 yıllık pazarlama teknolojisi deneyimi. Eski Samsung, Stack Overflow product manager. İşletmelerin AI ile pazarlamayı otomatikleştirmesine yardım ediyor.',
  keywords: [
    'Berk Capar',
    'Stunt kurucusu',
    'pazarlama otomasyonu uzmanı',
    'AI pazarlama uzmanı',
    'product manager',
    'pazarlama teknolojisi',
    'startup kurucusu',
    'Samsung pazarlama',
    'Stack Overflow',
    'Nestle kampanyaları',
    'Unilever pazarlama'
  ],
  openGraph: {
    title: 'Berk Capar Hakkında - Stunt AI Marketing Automation Kurucusu',
    description: 'Stunt AI kurucusu Berk Capar ile tanışın. 8 yıllık pazarlama teknolojisi deneyimi.',
    url: 'https://stuntai.co/about',
    images: [
      {
        url: '/og-about.png',
        width: 1200,
        height: 630,
        alt: 'Berk Capar - Stunt AI Marketing Automation Platform Kurucusu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Berk Capar Hakkında - Stunt AI Kurucusu',
    description: 'Stunt AI arkasındaki kurucuyla tanışın - 8 yıllık pazarlama teknolojisi deneyimi.',
  },
  alternates: {
    canonical: 'https://stuntai.co/about',
    languages: {
      'tr': 'https://stuntai.co/about',
      'en': 'https://stuntai.co/en/about',
      'de': 'https://stuntai.co/de/about',
    },
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
} 