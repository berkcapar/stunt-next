'use client';

import { LanguageProvider } from '@/src/lib/i18n';
import NavBar from '@/src/components/layout/NavBar';
import Footer from '@/src/components/layout/Footer';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      <GoogleAnalytics />
      <NavBar />
      <main className="pt-16 flex-grow">
        {children}
      </main>
      <Footer />
    </LanguageProvider>
  );
} 