'use client';

import ProductLayout from '@/src/components/products/ProductLayout';

const features = [
  {
    icon: 'calendar-days',
    titleKey: 'Automatische Planung',
    descKey: 'Planen und terminieren Sie Ihre Social-Media-Beiträge im Voraus auf mehreren Plattformen.'
  },
  {
    icon: 'clock',
    titleKey: 'Optimale Posting-Zeiten',
    descKey: 'KI empfiehlt die besten Posting-Zeiten für maximale Reichweite und Engagement.'
  },
  {
    icon: 'users',
    titleKey: 'Content-Kuration',
    descKey: 'Entdecken und teilen Sie relevante Brancheninhalte, um Ihre eigenen Beiträge zu ergänzen.'
  },
  {
    icon: 'share-nodes',
    titleKey: 'Plattformübergreifende Kampagnen',
    descKey: 'Verwalten und synchronisieren Sie Inhalte auf Facebook, Instagram, X, LinkedIn und mehr.'
  }
];

const useCases = [
  {
    icon: 'store',
    titleKey: 'Marketing-Teams',
    descKey: 'Koordinieren Sie Social-Media-Bemühungen effizient und erhalten Sie eine einheitliche Markenstimme.',
    quoteKey: '"Unser gesamter Social-Media-Workflow ist jetzt mit Stunt optimiert."'
  },
  {
    icon: 'building',
    titleKey: 'Beschäftigte Unternehmer',
    descKey: 'Erhalten Sie eine aktive Social-Media-Präsenz, ohne Ihren Tag zu verbrauchen.',
    quoteKey: '"Einrichten und vergessen, in dem Wissen, dass meine sozialen Medien verwaltet werden."'
  },
  {
    icon: 'bullhorn',
    titleKey: 'Community-Manager',
    descKey: 'Konzentrieren Sie sich auf Engagement und Community-Aufbau, nicht nur auf das Posten.',
    quoteKey: '"Stunt hat mich befreit, um wirklich mit unseren Zielgruppen zu interagieren."'
  }
];

export default function SocialPageClientDE() {
  return (
    <ProductLayout
      productId="social"
      icon="share-nodes"
      titleKey="KI Social Media Management & Automatisierung"
      descriptionKey="Automatisieren Sie Ihre Social-Media-Präsenz mit KI. Planen Sie Beiträge, erhalten Sie Performance-Einblicke und interagieren Sie mühelos mit Ihrer Zielgruppe. Sparen Sie Zeit und wachsen Sie schneller."
      whatTitleKey="Was ist Social Media Automatisierung?"
      whatDescKey="Es teilt automatisch Ihre vorbereiteten Inhalte zur richtigen Zeit auf den richtigen Social-Media-Kanälen für Sie."
      howTitleKey="Wie macht es Ihr Leben einfacher?"
      howDescKey="Der Stress von 'Ich habe vergessen zu posten!' endet. Während Sie sich auf Ihr Geschäft konzentrieren, hält Stunt Ihre Marke in der digitalen Welt aktiv und automatisiert Ihre Marketing-Bemühungen von Anfang bis Ende."
      featuresKey="Hauptmerkmale"
      features={features}
      useCasesTitleKey="Anwendungsfälle"
      useCases={useCases}
    />
  );
} 