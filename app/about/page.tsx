import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About Berk Capar - Founder of Stunt AI Marketing Automation',
  description: 'Meet Berk Capar, founder of Stunt AI with 8 years in marketing tech. Former product manager for Samsung, Stack Overflow. Helping businesses automate marketing with AI.',
  keywords: [
    'Berk Capar',
    'Stunt founder',
    'marketing automation expert',
    'AI marketing specialist',
    'product manager',
    'marketing technology',
    'startup founder',
    'Samsung marketing',
    'Stack Overflow',
    'Nestle campaigns',
    'Unilever marketing'
  ],
  openGraph: {
    title: 'About Berk Capar - Founder of Stunt AI Marketing Automation',
    description: 'Meet Berk Capar, founder of Stunt AI with 8 years in marketing tech. From winning awards for Nestle & Unilever to leading teams at Samsung.',
    url: 'https://stunt.ai/about',
    images: [
      {
        url: '/og-about.png',
        width: 1200,
        height: 630,
        alt: 'Berk Capar - Founder of Stunt AI Marketing Automation Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Berk Capar - Founder of Stunt AI',
    description: 'Meet the founder behind Stunt AI - 8 years of marketing tech experience, from Nestle to Samsung.',
  },
  alternates: {
    canonical: '/about',
    languages: {
      'en-US': '/about',
      'tr-TR': '/tr/about',
      'de-DE': '/de/about',
    },
  },
};

export default function AboutPage() {
  return <AboutPageClient />;
} 