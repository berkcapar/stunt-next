'use client';

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}

interface EventParams {
  action: string;
  category?: string;
  label?: string;
  value?: number;
  [key: string]: any;
}

export const useAnalytics = () => {
  const trackEvent = (eventName: string, params?: EventParams) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        event_category: params?.category || 'general',
        event_label: params?.label,
        value: params?.value,
        ...params,
      });
    }
  };

  const trackPageView = (url: string, title?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '', {
        page_title: title || document.title,
        page_location: url,
      });
    }
  };

  // Marketing specific tracking
  const trackCalendarOpen = (source: string) => {
    trackEvent('calendar_open', {
      category: 'engagement',
      label: source,
      action: 'calendar_modal_open'
    });
  };

  const trackPricingView = (plan: string) => {
    trackEvent('pricing_view', {
      category: 'product',
      label: plan,
      action: 'pricing_plan_view'
    });
  };

  const trackFeatureClick = (feature: string, section: string) => {
    trackEvent('feature_click', {
      category: 'product',
      label: feature,
      section: section,
      action: 'feature_interaction'
    });
  };

  const trackLanguageChange = (language: string) => {
    trackEvent('language_change', {
      category: 'user_preference',
      label: language,
      action: 'locale_switch'
    });
  };

  return {
    trackEvent,
    trackPageView,
    trackCalendarOpen,
    trackPricingView,
    trackFeatureClick,
    trackLanguageChange,
  };
}; 