'use client';

import ProductLayout from '@/src/components/products/ProductLayout';

const features = [
  {
    icon: 'chart-pie',
    titleKey: 'Otomatik Veri Toplama',
    descKey: 'Google, Meta ve diğer reklam platformlarını bağlayın. Stunt tüm verilerinizi otomatik olarak toplar.'
  },
  {
    icon: 'robot',
    titleKey: 'AI Destekli İçgörüler',
    descKey: 'AI\'mız verilerinizi analiz eder ve sayıların ne anlama geldiğini sade dille açıklar.'
  },
  {
    icon: 'calendar',
    titleKey: 'Günlük ve Haftalık Özetler',
    descKey: 'E-posta/WhatsApp ile öz raporlar alın: "Ne oldu? Ne yapılmalı?"'
  },
  {
    icon: 'chart-line',
    titleKey: 'Performans Gösterge Panelleri',
    descKey: 'Anahtar metriklerinizi anlaşılır gösterge panellerinde görselleştirin.'
  }
];

const useCases = [
  {
    icon: 'building',
    titleKey: 'Pazarlama Yöneticileri',
    descKey: 'Raporlamayı kolaylaştırın ve manuel veri analizi yapmadan hızlı içgörüler elde edin.',
    quoteKey: '"Stunt her hafta raporlama konusunda saatlerce vaktimi kazandırıyor!"'
  },
  {
    icon: 'users',
    titleKey: 'Küçük İşletme Sahipleri',
    descKey: 'Veri bilimi diploması gerektirmeden pazarlama performansınızı anlayın.',
    quoteKey: '"Sonunda hangi reklamların gerçekten işe yaradığını biliyorum!"'
  },
  {
    icon: 'rocket',
    titleKey: 'Pazarlama Ajansları',
    descKey: 'Müşterilere net, AI destekli raporlar ve stratejik tavsiyeler sunun.',
    quoteKey: '"Müşterilerimiz Stunt\'ın sonuçlarına getirdiği netliği çok seviyor."'
  }
];

export default function ReportingPageClientTR() {
  return (
    <ProductLayout
      productId="reporting"
      icon="chart-pie"
      titleKey="AI Pazarlama Raporları ve Analitik Otomasyonu"
      descriptionKey="Pazarlama raporlarınızı AI ile otomatikleştirin. Google Ads, Meta ve web sitesi analitiğini günlük olarak alın. Otomatik içgörülerle haftada 10+ saat kazanın."
      whatTitleKey="Raporlama Otomasyonu Nedir?"
      whatDescKey="Google, Meta gibi kaynaklardan karmaşık reklam ve web sitesi verilerini otomatik olarak toplar, düzenler ve her sabah e-posta/WhatsApp ile özetini iletir. AI size sayıların tam olarak ne anlama geldiğini ve hangi eylemleri gerçekleştirmeniz gerektiğini söyler."
      howTitleKey="Hayatınızı Nasıl Kolaylaştırır?"
      howDescKey="Raporları anlamaya saatler harcamak yerine, sabah kahvenizi yudumlarken kampanya durumunuzun net bir özetini alın. Bütçenizi nereye yatıracağınızı ve nerede kısacağınızı tam olarak görün, reklam parasını boşa harcamayın. Hangi kampanyanın yeni müşteri bulma konusunda etkili olduğunu anında bilin."
      featuresKey="Temel Özellikler"
      features={features}
      useCasesTitleKey="Kullanım Alanları"
      useCases={useCases}
    />
  );
} 