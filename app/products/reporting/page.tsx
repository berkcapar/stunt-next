import type { Metadata } from 'next';
import ReportingPageClientTR from '@/app/[locale]/products/reporting/ReportingPageClient.tr.jsx';

export const metadata: Metadata = {
  title: 'AI Pazarlama Raporları ve Analitik Otomasyonu | Stunt',
  description: 'Pazarlama raporlarınızı AI ile otomatikleştirin. Google Ads, Meta ve web sitesi analitiğini günlük olarak alın. Otomatik içgörülerle haftada 10+ saat kazanın.',
  keywords: [
    'pazarlama raporları otomasyonu',
    'AI pazarlama analitiği',
    'Google Ads raporlama',
    'Meta reklam raporları',
    'pazarlama dashboardu',
    'otomatik içgörüler',
    'dijital pazarlama analitiği',
    'kampanya performans raporları',
    'pazarlama ROI takibi',
    'pazarlama raporları otomasyonu'
  ],
  openGraph: {
    title: 'AI Pazarlama Raporları ve Analitik Otomasyonu | Stunt',
    description: 'Pazarlama raporlarınızı AI ile otomatikleştirin. Google Ads, Meta ve web sitesi analitiğini günlük olarak alın. Haftada 10+ saat kazanın.',
    url: 'https://stuntai.co/products/reporting',
    images: [
      {
        url: '/og-reporting.png',
        width: 1200,
        height: 630,
        alt: 'Stunt AI Pazarlama Raporları ve Analitik Otomasyonu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Pazarlama Raporları ve Analitik Otomasyonu | Stunt',
    description: 'Pazarlama raporlarınızı AI ile otomatikleştirin. Haftada 10+ saat kazanın.',
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
  return <ReportingPageClientTR />;
} 