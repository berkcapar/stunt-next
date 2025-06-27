'use client';

import ProductLayout from '@/src/components/products/ProductLayout';

const features = [
  {
    icon: 'sparkles',
    titleKey: 'KI-Texterstellung',
    descKey: 'Erstellen Sie überzeugende Werbetexte, Social-Media-Beiträge und Überschriften in Sekundenschnelle.'
  },
  {
    icon: 'image',
    titleKey: 'KI-Bilderstellung',
    descKey: 'Generieren Sie einzigartige, markenalignierte Bilder für Ihre Kampagnen.'
  },
  {
    icon: 'video',
    titleKey: 'KI-Video-Snippets',
    descKey: 'Verwandeln Sie bestehende Markenelemente oder neue KI-Visuals in kurze Werbevideos.'
  },
  {
    icon: 'wand-magic-sparkles',
    titleKey: 'Multi-Plattform-Formatierung',
    descKey: 'Passen Sie Kreativmaterialien automatisch an die Spezifikationen verschiedener Social-Media-Plattformen an.'
  }
];

const useCases = [
  {
    icon: 'palette',
    titleKey: 'Social-Media-Manager',
    descKey: 'Gehen Sie nie die Content-Ideen aus. Halten Sie Ihre Social-Feeds frisch und ansprechend.',
    quoteKey: '"Stunt\'s KI-Kreativmaterialien haben unser Engagement deutlich gesteigert!"'
  },
  {
    icon: 'swatchbook',
    titleKey: 'Content-Ersteller',
    descKey: 'Überwinden Sie kreative Blockaden und produzieren Sie schnell verschiedene Content-Formate.',
    quoteKey: '"Ich kann in einer Stunde Beiträge für eine ganze Woche generieren!"'
  },
  {
    icon: 'rocket',
    titleKey: 'Startups',
    descKey: 'Erhalten Sie hochwertige Kreativmaterialien ohne die Kosten eines eigenen Design-Teams.',
    quoteKey: '"Professionell aussehende Anzeigen mit Startup-Budget - erstaunlich!"'
  }
];

export default function CreativePageClientDE() {
  return (
    <ProductLayout
      productId="creative"
      icon="sparkles"
      titleKey="KI Kreative Content-Generierung & Video-Erstellung"
      descriptionKey="Erstellen Sie beeindruckende Visuals, Videos und Texte mit KI. Generieren Sie ansprechende Social-Media-Inhalte in Sekundenschnelle. Keine Designer nötig - automatisierte Kreativ-Generierung."
      whatTitleKey="Was ist KI Kreativ-Generierung?"
      whatDescKey="Es erstellt auffällige Texte, Bilder und Videos für Ihre sozialen Medien in Sekundenschnelle. Sie müssen sich nie wieder fragen 'Was soll ich heute posten?'. Es kann sogar Videos aus Ihren bestehenden Markenfotos produzieren."
      howTitleKey="Wie macht es Ihr Leben einfacher?"
      howDescKey="Eliminieren Sie die langen Wartezeiten auf Designer oder Agenturen. Halten Sie Ihre Follower mit ständig frischen Inhalten bei Laune und erreichen Sie ein breiteres Publikum. Entlasten Sie die kreative Arbeitslast Ihres Marketing-Teams."
      featuresKey="Hauptmerkmale"
      features={features}
      useCasesTitleKey="Anwendungsfälle"
      useCases={useCases}
    />
  );
} 