import type { Metadata } from 'next';
import ReportingPageClient from './ReportingPageClient.jsx';

export const metadata: Metadata = {
  title: 'AI Marketing Reports & Analytics Automation | Stunt',
  description: 'Automate your marketing reports with AI. Get Google Ads, Meta, and website analytics delivered daily. Save 10+ hours per week with automated insights.',
  keywords: [
    'marketing reports automation',
    'AI marketing analytics',
    'Google Ads reporting',
    'Meta advertising reports',
    'marketing dashboard',
    'automated insights',
    'digital marketing analytics',
    'campaign performance reports',
    'marketing ROI tracking',
    'pazarlama raporları otomasyonu'
  ],
  openGraph: {
    title: 'AI Marketing Reports & Analytics Automation | Stunt',
    description: 'Automate your marketing reports with AI. Get Google Ads, Meta, and website analytics delivered daily. Save 10+ hours per week.',
    url: 'https://stuntai.co/products/reporting',
    images: [
      {
        url: '/og-reporting.png',
        width: 1200,
        height: 630,
        alt: 'Stunt AI Marketing Reports & Analytics Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Marketing Reports & Analytics Automation | Stunt',
    description: 'Automate your marketing reports with AI. Save 10+ hours per week with automated insights.',
  },
  alternates: {
    canonical: 'https://stuntai.co/products/reporting',
    languages: {
      'tr': 'https://stuntai.co/products/reporting',
      'en': 'https://stuntai.co/en/products/reporting',
      'de': 'https://stuntai.co/de/products/reporting',
    },
  },
};

export default function ReportingPage() {
  return <ReportingPageClient />;
} 