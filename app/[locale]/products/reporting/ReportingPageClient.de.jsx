'use client';

import ProductLayout from '@/src/components/products/ProductLayout';

const features = [
  {
    icon: 'chart-pie',
    titleKey: 'Automatische Datenerfassung',
    descKey: 'Verbinden Sie Google, Meta und andere Werbeplattformen. Stunt sammelt alle Ihre Daten automatisch.'
  },
  {
    icon: 'robot',
    titleKey: 'KI-gestützte Erkenntnisse',
    descKey: 'Unsere KI analysiert Ihre Daten und erklärt Ihnen in einfacher Sprache, was die Zahlen bedeuten.'
  },
  {
    icon: 'calendar',
    titleKey: 'Tägliche & Wöchentliche Zusammenfassungen',
    descKey: 'Erhalten Sie präzise Berichte per E-Mail/WhatsApp: "Was ist passiert? Was ist zu tun?"'
  },
  {
    icon: 'chart-line',
    titleKey: 'Performance-Dashboards',
    descKey: 'Visualisieren Sie Ihre wichtigsten Kennzahlen in leicht verständlichen Dashboards.'
  }
];

const useCases = [
  {
    icon: 'building',
    titleKey: 'Marketing-Manager',
    descKey: 'Optimieren Sie Ihr Reporting und gewinnen Sie schnelle Erkenntnisse ohne manuelle Datenauswertung.',
    quoteKey: '"Stunt spart mir jede Woche Stunden beim Reporting!"'
  },
  {
    icon: 'users',
    titleKey: 'Kleinunternehmer',
    descKey: 'Verstehen Sie Ihre Marketing-Performance, ohne einen Abschluss in Datenwissenschaft zu benötigen.',
    quoteKey: '"Endlich weiß ich, welche Anzeigen tatsächlich funktionieren!"'
  },
  {
    icon: 'rocket',
    titleKey: 'Marketing-Agenturen',
    descKey: 'Bieten Sie Kunden klare, KI-gestützte Berichte und strategische Beratung.',
    quoteKey: '"Unsere Kunden lieben die Klarheit, die Stunt in ihre Ergebnisse bringt."'
  }
];

export default function ReportingPageClientDE() {
  return (
    <ProductLayout
      productId="reporting"
      icon="chart-pie"
      titleKey="KI Marketing-Berichte & Analytics Automatisierung"
      descriptionKey="Automatisieren Sie Ihre Marketing-Berichte mit KI. Erhalten Sie Google Ads, Meta und Website-Analytics täglich geliefert. Sparen Sie 10+ Stunden pro Woche mit automatisierten Erkenntnissen."
      whatTitleKey="Was ist Berichts-Automatisierung?"
      whatDescKey="Es sammelt automatisch komplexe Werbe- und Website-Daten aus Quellen wie Google und Meta, organisiert sie und liefert jeden Morgen eine Zusammenfassung an Ihre E-Mail oder WhatsApp. Die KI erklärt Ihnen genau, was die Zahlen bedeuten und welche Maßnahmen zu ergreifen sind."
      howTitleKey="Wie macht es Ihr Leben einfacher?"
      howDescKey="Anstatt Stunden damit zu verbringen, Berichte zu verstehen, erhalten Sie eine klare Zusammenfassung Ihres Kampagnenstatus, während Sie Ihren Morgenkaffee trinken. Sehen Sie genau, wo Sie Ihr Budget investieren und wo Sie kürzen sollten, um verschwendete Werbeausgaben zu vermeiden. Identifizieren Sie sofort, welche Kampagnen effektiv neue Kunden finden."
      featuresKey="Hauptmerkmale"
      features={features}
      useCasesTitleKey="Anwendungsfälle"
      useCases={useCases}
    />
  );
} 