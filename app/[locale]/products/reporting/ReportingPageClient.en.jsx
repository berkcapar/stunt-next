'use client';

import ProductLayout from '@/src/components/products/ProductLayout';

const features = [
  {
    icon: 'chart-pie',
    titleKey: 'Automated Data Collection',
    descKey: 'Connect Google, Meta, and other ad platforms. Stunt gathers all your data automatically.'
  },
  {
    icon: 'robot',
    titleKey: 'AI-Powered Insights',
    descKey: 'Our AI analyzes your data and tells you what the numbers mean in plain language.'
  },
  {
    icon: 'calendar',
    titleKey: 'Daily & Weekly Summaries',
    descKey: 'Receive concise reports via email/WhatsApp: "What happened? What to do?"'
  },
  {
    icon: 'chart-line',
    titleKey: 'Performance Dashboards',
    descKey: 'Visualize your key metrics in easy-to-understand dashboards.'
  }
];

const useCases = [
  {
    icon: 'building',
    titleKey: 'Marketing Managers',
    descKey: 'Streamline reporting and gain quick insights without manual data crunching.',
    quoteKey: '"Stunt saves me hours each week on reporting!"'
  },
  {
    icon: 'users',
    titleKey: 'Small Business Owners',
    descKey: 'Understand your marketing performance without needing a data science degree.',
    quoteKey: '"Finally, I know which ads are actually working!"'
  },
  {
    icon: 'rocket',
    titleKey: 'Marketing Agencies',
    descKey: 'Provide clients with clear, AI-driven reports and strategic advice.',
    quoteKey: '"Our clients love the clarity Stunt brings to their results."'
  }
];

export default function ReportingPageClientEN() {
  return (
    <ProductLayout
      productId="reporting"
      icon="chart-pie"
      titleKey="AI Marketing Reports & Analytics Automation"
      descriptionKey="Automate your marketing reports with AI. Get Google Ads, Meta, and website analytics delivered daily. Save 10+ hours per week with automated insights."
      whatTitleKey="What is Reporting Automation?"
      whatDescKey="It automatically collects complex advertising and website data from sources like Google and Meta, organizes it, and delivers a summary to your email or WhatsApp every morning. The AI tells you exactly what the numbers mean and what actions to take."
      howTitleKey="How Does It Make Your Life Easier?"
      howDescKey="Instead of spending hours trying to understand reports, get a clear summary of your campaign status while you sip your morning coffee. See exactly where to invest your budget and where to cut back, preventing wasted ad spend. Instantly identify which campaigns are effective at finding new customers."
      featuresKey="Key Features"
      features={features}
      useCasesTitleKey="Use Cases"
      useCases={useCases}
    />
  );
} 