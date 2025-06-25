import { MetadataRoute } from 'next'

const baseUrl = 'https://stuntai.co'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    {
      path: '',
      priority: 1.0,
      changeFrequency: 'daily' as const,
    },
    {
      path: '/about',
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/products/reporting',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/products/creative',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/products/social',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/products/seo',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
  ];

  const languages = ['tr', 'en', 'de'];
  const sitemap: MetadataRoute.Sitemap = [];

  // Generate entries for each page in each language
  pages.forEach(page => {
    languages.forEach(lang => {
      const url = lang === 'tr' 
        ? `${baseUrl}${page.path}`  // Default language (tr) without prefix
        : `${baseUrl}/${lang}${page.path}`; // Other languages with prefix

      sitemap.push({
        url,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      });
    });
  });

  return sitemap;
} 