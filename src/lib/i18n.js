'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const LANGUAGES = ['en', 'de', 'tr'];
const DEFAULT_LOCALE = 'en';

// Create a context to manage the language state
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  
  const getLocaleFromPathname = (path) => {
    const segments = path.split('/').filter(Boolean);
    if (segments.length > 0 && LANGUAGES.includes(segments[0])) {
      return segments[0];
    }
    return DEFAULT_LOCALE;
  };

  const [language, setLanguage] = useState(getLocaleFromPathname(pathname));
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
    const newLocale = getLocaleFromPathname(pathname);
    if (newLocale !== language) {
      setLanguage(newLocale);
    }
  }, [pathname, language]);

  // Function to change the language with proper routing
  const changeLanguage = (newLanguage) => {
    if (!LANGUAGES.includes(newLanguage)) {
      return;
    }

    const currentLocale = getLocaleFromPathname(pathname);
    let newPath = pathname;

    // Remove current locale prefix if it exists
    if (currentLocale && LANGUAGES.includes(currentLocale)) {
      newPath = newPath.substring(newPath.indexOf(currentLocale) + currentLocale.length);
    }
    
    // Add new locale prefix
    newPath = `/${newLanguage}${newPath}`;

    // Ensure path starts with a slash and doesn't have double slashes
    if (!newPath.startsWith('/')) {
      newPath = `/${newPath}`;
    }
    newPath = newPath.replace(/\/+/g, '/');
    
    router.push(newPath);
  };

  const t = (key) => {
    // Check if key is defined and is a string
    if (!key || typeof key !== 'string') {
      return key || '';
    }
    
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