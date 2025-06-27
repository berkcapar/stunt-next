import type { Metadata } from 'next';
import SEOPageClientTR from './SEOPageClient.tr.jsx';
import SEOPageClientEN from './SEOPageClient.en.jsx';
import SEOPageClientDE from './SEOPageClient.de.jsx';

export const metadata: Metadata = {
  title: 'AI SEO Content Generation & Automation | Stunt',
  description: 'Automate your SEO content strategy with AI. Generate optimized blog posts, find keywords, and climb Google rankings without the heavy lifting.',
  keywords: [
    'SEO automation',
    'AI content generation',
    'SEO content writing',
    'keyword research tool',
    'blog post generator',
    'Google ranking',
    'organic traffic',
    'content marketing automation',
    'AI for SEO',
    'SEO otomasyonu'
  ],
  openGraph: {
    title: 'AI SEO Content Generation & Automation | Stunt',
    description: 'Automate your SEO content strategy with AI. Generate optimized blog posts, find keywords, and climb Google rankings.',
    url: 'https://stuntai.co/products/seo',
    images: [
      {
        url: '/og-seo.png',
        width: 1200,
        height: 630,
        alt: 'Stunt AI SEO Content Generation & Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI SEO Content Generation & Automation | Stunt',
    description: 'Automate your SEO content strategy with AI and climb Google rankings.',
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

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function SEOPage({ params }: Props) {
  const { locale } = await params;
  
  if (locale === 'en') {
    return <SEOPageClientEN />;
  } else if (locale === 'de') {
    return <SEOPageClientDE />;
  }
  
  // Default to Turkish
  return <SEOPageClientTR />;
} 