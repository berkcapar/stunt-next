import type { Metadata } from 'next';
import SocialPageClient from './SocialPageClient.jsx';

export const metadata: Metadata = {
  title: 'AI Social Media Automation & Scheduling | Stunt',
  description: 'Automate your social media posting with AI. Schedule content across platforms, optimize timing, and maintain consistent engagement. 5x faster than manual posting.',
  keywords: [
    'social media automation',
    'AI social media',
    'social media scheduling',
    'automated posting',
    'social media management',
    'content scheduling',
    'social media tools',
    'Instagram automation',
    'LinkedIn automation',
    'sosyal medya otomasyonu'
  ],
  openGraph: {
    title: 'AI Social Media Automation & Scheduling | Stunt',
    description: 'Automate your social media posting with AI. Schedule content across platforms and maintain consistent engagement.',
    url: 'https://stuntai.co/products/social',
    images: [
      {
        url: '/og-social.png',
        width: 1200,
        height: 630,
        alt: 'Stunt AI Social Media Automation & Scheduling',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Social Media Automation & Scheduling | Stunt',
    description: 'Automate your social media posting with AI. 5x faster than manual posting.',
  },
  alternates: {
    canonical: 'https://stuntai.co/products/social',
    languages: {
      'tr': 'https://stuntai.co/products/social',
      'en': 'https://stuntai.co/en/products/social',
      'de': 'https://stuntai.co/de/products/social',
    },
  },
};

export default function SocialPage() {
  return <SocialPageClient />;
} 