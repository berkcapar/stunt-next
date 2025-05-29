'use client';

import { LanguageProvider } from '@/src/lib/i18n';
import NavBar from '@/src/components/layout/NavBar';
import Footer from '@/src/components/layout/Footer';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';

interface ClientLayoutProps {
  children: React.ReactNode;
  gaId?: string;
}

export default function ClientLayout({ children, gaId }: ClientLayoutProps) {
  return (
    <LanguageProvider>
      <GoogleAnalytics gtag={gaId} />
      <NavBar />
      <main className="pt-16 flex-grow">
        {children}
      </main>
      <Footer />
    </LanguageProvider>
  );
} 