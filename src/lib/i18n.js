'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const LANGUAGES = ['tr', 'en', 'de'];

// Create a context to manage the language state
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  
  // Extract locale from pathname or use default
  const currentLocale = pathname.startsWith('/en') ? 'en' : 
                       pathname.startsWith('/de') ? 'de' : 'tr';
  
  const [language, setLanguage] = useState(currentLocale);
  const [translations, setTranslations] = useState({});

  // Load translations for the current language
  useEffect(() => {
    async function loadTranslations() {
      try {
        const response = await fetch(`/locales/${language}/common.json`);
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error('Failed to load translations:', error);
      }
    }

    loadTranslations();
  }, [language]);

  // Update language when pathname changes
  useEffect(() => {
    const newLocale = pathname.startsWith('/en') ? 'en' : 
                     pathname.startsWith('/de') ? 'de' : 'tr';
    if (newLocale !== language) {
      setLanguage(newLocale);
    }
  }, [pathname, language]);

  // Function to change the language with proper routing
  const changeLanguage = (newLanguage) => {
    if (LANGUAGES.includes(newLanguage)) {
      let newPath = pathname;
      
      // Remove current locale prefix
      if (pathname.startsWith('/en') || pathname.startsWith('/de')) {
        newPath = pathname.substring(3) || '/';
      }
      
      // Add new locale prefix (except for default 'tr')
      if (newLanguage !== 'tr') {
        newPath = `/${newLanguage}${newPath}`;
      }
      
      router.push(newPath);
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 