'use client';

import ProductLayout from '@/src/components/products/ProductLayout';

const features = [
  {
    icon: 'file-search',
    titleKey: 'KI-Blogbeitragserstellung',
    descKey: 'Erstellen Sie SEO-freundliche Blogartikel zu relevanten Themen für Ihre Zielgruppe.'
  },
  {
    icon: 'file-text',
    titleKey: 'Keyword-Recherche & Integration',
    descKey: 'Identifiziert wertvolle Keywords und integriert sie natürlich in Ihre Inhalte.'
  },
  {
    icon: 'lightbulb',
    titleKey: 'Content-Kalender-Planung',
    descKey: 'Planen Sie Ihre Content-Strategie mit einem automatisierten Kalender für konsistente Veröffentlichungen.'
  },
  {
    icon: 'line-chart',
    titleKey: 'Performance-Tracking',
    descKey: 'Überwachen Sie Keyword-Rankings und organisches Traffic-Wachstum über die Zeit.'
  }
];

const useCases = [
  {
    icon: 'pencil',
    titleKey: 'Content-Marketer',
    descKey: 'Skalieren Sie Ihre Content-Produktion und konzentrieren Sie sich auf Strategie statt Schreiben.',
    quoteKey: '"Wir haben unsere Blog-Ausgabe verdreifacht ohne Qualitätsverlust."'
  },
  {
    icon: 'building-store',
    titleKey: 'E-Commerce-Unternehmen',
    descKey: 'Generieren Sie organischen Traffic für Produktseiten mit zielgerichtetem Blog-Content.',
    quoteKey: '"Unsere organischen Verkäufe haben einen deutlichen Aufschwung erlebt."'
  },
  {
    icon: 'rocket',
    titleKey: 'Startups & Kleine Unternehmen',
    descKey: 'Bauen Sie eine starke Online-Präsenz auf und konkurrieren Sie mit größeren Marken in Suchergebnissen.',
    quoteKey: '"Stunt ist unsere Geheimwaffe für SEO-Erfolg."'
  }
];

export default function SEOPageClientDE() {
  return (
    <ProductLayout
      productId="seo"
      icon="file-search"
      titleKey="KI SEO Content-Generierung & Automatisierung"
      descriptionKey="Automatisieren Sie Ihre SEO-Content-Strategie mit KI. Generieren Sie optimierte Blog-Posts, finden Sie Keywords und klettern Sie in Google-Rankings ohne großen Aufwand."
      whatTitleKey="Was ist SEO Content-Automatisierung?"
      whatDescKey="Es schreibt automatisch Blog-Posts zu Themen, nach denen Ihre Kunden suchen, und hilft Ihnen, bei Google höher zu ranken."
      howTitleKey="Wie macht es Ihr Leben einfacher?"
      howDescKey="Sie müssen kein SEO-Experte sein, um Ergebnisse zu erzielen. Ziehen Sie kontinuierlich neue Besucher auf Ihre Website, finden Sie neue Kunden und wachsen Sie ohne Abhängigkeit von Werbeausgaben."
      featuresKey="Hauptmerkmale"
      features={features}
      useCasesTitleKey="Anwendungsfälle"
      useCases={useCases}
    />
  );
} 