import type { Metadata } from 'next';
import SeoPageClient from './SeoPageClient.jsx';

export const metadata: Metadata = {
  title: 'AI SEO Content Generation & Blog Automation | Stunt',
  description: 'Generate SEO-optimized blog posts automatically with AI. Rank higher on Google with automated keyword research, content creation, and on-page optimization.',
  keywords: [
    'AI SEO content',
    'SEO blog automation',
    'AI content generation',
    'SEO optimization',
    'keyword research',
    'content marketing',
    'blog post generator',
    'organic traffic',
    'search engine optimization',
    'SEO otomasyon'
  ],
  openGraph: {
    title: 'AI SEO Content Generation & Blog Automation | Stunt',
    description: 'Generate SEO-optimized blog posts automatically with AI. Rank higher on Google with automated content creation.',
    url: 'https://stuntai.co/products/seo',
    images: [
      {
        url: '/og-seo.png',
        width: 1200,
        height: 630,
        alt: 'Stunt AI SEO Content Generation & Blog Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI SEO Content Generation & Blog Automation | Stunt',
    description: 'Generate SEO-optimized blog posts automatically with AI. Rank higher on Google.',
  },
  alternates: {
    canonical: 'https://stuntai.co/products/seo',
    languages: {
      'tr': 'https://stuntai.co/products/seo',
      'en': 'https://stuntai.co/en/products/seo',
      'de': 'https://stuntai.co/de/products/seo',
    },
  },
};

export default function SeoPage() {
  return <SeoPageClient />;
} 