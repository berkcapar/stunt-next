'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/src/lib/i18n';
import Icon from '@/src/components/ui/Icon';

const LANGUAGE_CONFIG = [
  { code: 'en', flag: '🇬🇧', name: 'English' },
  { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
  { code: 'tr', flag: '🇹🇷', name: 'Türkçe' }
];

const FEATURES_MENU = [
  { 
    href: 'reporting',
    icon: 'chart-pie',
    labelKey: 'nav.reporting',
    descriptionKey: 'nav.reporting_desc'
  },
  {
    href: 'creative',
    icon: 'paint-brush',
    labelKey: 'nav.creative',
    descriptionKey: 'nav.creative_desc'
  },
  {
    href: 'social',
    icon: 'share-alt',
    labelKey: 'nav.social',
    descriptionKey: 'nav.social_desc'
  },
  {
    href: 'seo',
    icon: 'search',
    labelKey: 'nav.seo',
    descriptionKey: 'nav.seo_desc'
  }
];

export default function NavBar() {
  const { t, language, changeLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Helper function to get the correct URL path based on language
  const getLocalizedPath = (path) => {
    if (language === 'tr') {
      return path; // TR için prefix yok
    }
    return `/${language}${path}`;
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white border-b border-gray-100 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={getLocalizedPath('/')} className="flex items-center">
            <Image 
              src="/stunt-logo.png" 
              alt="Stunt Logo" 
              width={160} 
              height={160} 
              className="transition-transform duration-300 hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div 
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              ref={dropdownRef}
            >
              <button 
                className="text-gray-800 hover:text-purple-600 transition-colors text-xl font-medium flex items-center"
              >
                {t('nav.features')}
                <Icon 
                  icon={isDropdownOpen ? 'chevron-up' : 'chevron-down'} 
                  className="ml-1 w-4 h-4 transition-transform duration-200" 
                />
              </button>
              
              <div 
                className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl py-2 border border-gray-100 transition-all duration-200 z-50 ${
                  isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-1'
                }`}
              >
                {FEATURES_MENU.map((item) => (
                  <Link 
                    key={item.href}
                    href={getLocalizedPath(`/products/${item.href}`)}
                    className="block px-4 py-3 text-gray-800 hover:bg-purple-50 transition-colors duration-200"
                  >
                    <div className="flex items-start">
                      <Icon icon={item.icon} className="w-5 h-5 text-purple-600 mt-1 mr-3" />
                      <div>
                        <div className="font-medium">{t(item.labelKey)}</div>
                        <div className="text-sm text-gray-600 mt-1">{t(item.descriptionKey)}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            <Link href={getLocalizedPath('/#pricing')} className="text-gray-800 hover:text-purple-600 transition-colors text-xl font-medium">
              {t('nav.pricing')}
            </Link>
            
            <Link href={getLocalizedPath('/about')} className="text-gray-800 hover:text-purple-600 transition-colors text-xl font-medium">
              {t('nav.about')}
            </Link>
          </nav>
          
          {/* Language Switcher */}
          <div className="hidden md:flex items-center space-x-3">
            {LANGUAGE_CONFIG.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`px-4 py-2 text-lg rounded-md transition-all flex items-center space-x-2 ${
                  language === lang.code
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-xl">{lang.flag}</span>
                <span>{lang.code.toUpperCase()}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 hover:text-purple-600"
            onClick={toggleMenu}
          >
            <Icon icon={isMenuOpen ? 'times' : 'bars'} className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 mt-4">
            <div className="py-4">
              <div className="font-medium text-xl mb-4">{t('nav.features')}</div>
              <div className="space-y-2">
                {FEATURES_MENU.map((item) => (
                  <Link
                    key={item.href}
                    href={getLocalizedPath(`/products/${item.href}`)}
                    className="block py-3 px-4 text-gray-800 hover:bg-purple-50 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="flex items-start">
                      <Icon icon={item.icon} className="w-5 h-5 text-purple-600 mt-1 mr-3" />
                      <div>
                        <div className="font-medium">{t(item.labelKey)}</div>
                        <div className="text-sm text-gray-600 mt-1">{t(item.descriptionKey)}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="py-4 border-t border-gray-100">
              <Link 
                href={getLocalizedPath('/#pricing')} 
                className="block text-xl font-medium py-2 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.pricing')}
              </Link>
            </div>
            
            <div className="py-4 border-t border-gray-100">
              <Link 
                href={getLocalizedPath('/about')} 
                className="block text-xl font-medium py-2 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
            </div>
            
            <div className="py-4 border-t border-gray-100">
              <div className="font-medium mb-3 text-xl">{t('nav.language')}</div>
              <div className="flex flex-wrap gap-2">
                {LANGUAGE_CONFIG.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code);
                      setIsMenuOpen(false);
                    }}
                    className={`px-4 py-2 text-lg rounded-md flex items-center space-x-2 ${
                      language === lang.code
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span>{lang.code.toUpperCase()}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 