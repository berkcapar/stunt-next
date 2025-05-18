'use client';

import { useRouter } from 'next/navigation';
import { createContext, useContext, useState, useEffect } from 'react';

const LANGUAGES = ['tr', 'en', 'de'];
const DEFAULT_LANGUAGE = 'tr';

// Create a context to manage the language state
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
  const [translations, setTranslations] = useState({});
  const router = useRouter();

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

  // Function to change the language
  const changeLanguage = (newLanguage) => {
    if (LANGUAGES.includes(newLanguage)) {
      setLanguage(newLanguage);
      localStorage.setItem('language', newLanguage);
    }
  };

  // Load language from localStorage on initial render
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && LANGUAGES.includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Translate function
  const t = (key) => {
    const keys = key.split('.');
    let value = translations;
    
    for (let i = 0; i < keys.length; i++) {
      if (value === undefined) return key;
      value = value[keys[i]];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Custom hook to use the language context
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 