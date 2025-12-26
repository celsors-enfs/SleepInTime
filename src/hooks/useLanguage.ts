import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Language } from '../i18n/translations';

const LANGUAGE_STORAGE_KEY = 'sleeptime-language';

export function useLanguage() {
  const location = useLocation();
  
  const [language, setLanguage] = useState<Language>(() => {
    // Get from localStorage or URL
    if (typeof window !== 'undefined') {
      // Try to get from URL first (window.location for initial state)
      const path = window.location.pathname;
      const langFromPath = path.split('/').filter(Boolean)[0];
      if (langFromPath && ['en', 'pt-br', 'es', 'fr', 'zh'].includes(langFromPath)) {
        return langFromPath as Language;
      }
      
      // Fallback to localStorage
      const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language;
      if (stored && ['en', 'pt-br', 'es', 'fr', 'zh'].includes(stored)) {
        return stored;
      }
    }
    return 'en';
  });

  // Update language when route changes (using React Router location)
  useEffect(() => {
    const path = location.pathname;
    const langFromPath = path.split('/').filter(Boolean)[0];
    if (langFromPath && ['en', 'pt-br', 'es', 'fr', 'zh'].includes(langFromPath)) {
      if (langFromPath !== language) {
        setLanguage(langFromPath as Language);
      }
    }
  }, [location.pathname, language]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    }
  }, [language]);

  return [language, setLanguage] as const;
}

