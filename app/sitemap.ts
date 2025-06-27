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

  const sitemap: MetadataRoute.Sitemap = [];

  // Ana dil (TR) için rotalar - prefix olmadan
  pages.forEach(page => {
    sitemap.push({
      url: `${baseUrl}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    });
  });

  // Diğer diller (EN, DE) için rotalar - prefix ile
  const otherLanguages = ['en', 'de'];
  pages.forEach(page => {
    otherLanguages.forEach(lang => {
      sitemap.push({
        url: `${baseUrl}/${lang}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      });
    });
  });

  return sitemap;
} 