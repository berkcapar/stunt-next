'use client';

import ProductLayout from '@/src/components/products/ProductLayout';

const features = [
  {
    icon: 'sparkles',
    titleKey: 'AI Metin Üretimi',
    descKey: 'Saniyeler içinde etkileyici reklam metinleri, sosyal medya gönderileri ve başlıklar oluşturun.'
  },
  {
    icon: 'image',
    titleKey: 'AI Görsel Üretimi',
    descKey: 'Kampanyalarınız için benzersiz, marka uyumlu görseller oluşturun.'
  },
  {
    icon: 'video',
    titleKey: 'AI Video Klipleri',
    descKey: 'Mevcut marka varlıklarınızı veya yeni AI görsellerini kısa tanıtım videolarına dönüştürün.'
  },
  {
    icon: 'wand-magic-sparkles',
    titleKey: 'Çoklu Platform Formatlaması',
    descKey: 'Kreatifleri farklı sosyal medya platformlarının özelliklerine otomatik olarak uyarlayın.'
  }
];

const useCases = [
  {
    icon: 'palette',
    titleKey: 'Sosyal Medya Yöneticileri',
    descKey: 'İçerik fikirleriniz hiç bitmesin. Sosyal medya akışlarınızı taze ve ilgi çekici tutun.',
    quoteKey: '"Stunt\'ın AI kreatifleri etkileşimimizi önemli ölçüde artırdı!"'
  },
  {
    icon: 'swatchbook',
    titleKey: 'İçerik Üreticileri',
    descKey: 'Yaratıcı blokları aşın ve hızla çeşitli içerik formatları üretin.',
    quoteKey: '"Bir saatte bir haftalık gönderi üretebiliyorum!"'
  },
  {
    icon: 'rocket',
    titleKey: 'Startuplar',
    descKey: 'Özel tasarım ekibi maliyeti olmadan yüksek kaliteli kreatifler elde edin.',
    quoteKey: '"Startup bütçesiyle profesyonel görünümlü reklamlar - muhteşem!"'
  }
];

export default function CreativePageClientTR() {
  return (
    <ProductLayout
      productId="creative"
      icon="sparkles"
      titleKey="AI Yaratıcı İçerik Üretimi ve Video Oluşturma"
      descriptionKey="AI ile etkileyici görseller, videolar ve metinler oluşturun. Saniyeler içinde ilgi çekici sosyal medya içerikleri yaratın. Tasarımcıya gerek yok - otomatik yaratıcı üretim."
      whatTitleKey="AI Yaratıcı Üretim Nedir?"
      whatDescKey="Sosyal medyanız için saniyeler içinde dikkat çekici metinler, görseller ve videolar oluşturur. 'Bugün ne paylaşacağım?' endişesini bir daha yaşamazsınız. Markanızın mevcut fotoğraflarından bile video üretebilir."
      howTitleKey="Hayatınızı Nasıl Kolaylaştırır?"
      howDescKey="Tasarımcılar veya ajanslar için uzun bekleyişleri ortadan kaldırın. Takipçilerinizi sürekli taze içeriklerle meşgul edin ve daha geniş bir kitleye ulaşın. Pazarlama ekibinizin yaratıcı iş yükünü hafifletin."
      featuresKey="Temel Özellikler"
      features={features}
      useCasesTitleKey="Kullanım Alanları"
      useCases={useCases}
    />
  );
} 