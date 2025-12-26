import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Language } from '../i18n/translations';

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
}

const languageCodes: Record<Language, string> = {
  en: 'en',
  'pt-br': 'pt-BR',
  es: 'es',
  fr: 'fr',
  zh: 'zh-CN',
};

export const SEOHead: React.FC<SEOHeadProps> = ({ title, description, path }) => {
  const [language] = useLanguage();
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://sleeptime.com';
  
  const currentUrl = `${baseUrl}${path}`;
  const langCode = languageCodes[language];
  
  // Generate alternate language URLs
  const languages: Language[] = ['en', 'pt-br', 'es', 'fr', 'zh'];
  const alternateUrls = languages.map((lang) => {
    const langPath = lang === 'en' ? path.replace(/^\/(pt-br|es|fr|zh)/, '') || '/' : path.replace(/^\/(en|pt-br|es|fr|zh)/, `/${lang}`) || `/${lang}`;
    return {
      lang: languageCodes[lang],
      url: `${baseUrl}${langPath}`,
    };
  });

  React.useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update or create canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', currentUrl);

    // Update or create hreflang tags
    const existingHreflangs = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflangs.forEach((el) => el.remove());

    alternateUrls.forEach(({ lang, url }) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', lang);
      link.setAttribute('href', url);
      document.head.appendChild(link);
    });

    // Add x-default hreflang
    const defaultLink = document.createElement('link');
    defaultLink.setAttribute('rel', 'alternate');
    defaultLink.setAttribute('hreflang', 'x-default');
    defaultLink.setAttribute('href', `${baseUrl}${path.replace(/^\/(pt-br|es|fr|zh)/, '') || '/'}`);
    document.head.appendChild(defaultLink);

    // Update html lang attribute
    document.documentElement.setAttribute('lang', langCode);
  }, [title, description, currentUrl, alternateUrls, langCode, baseUrl, path]);

  return null;
};

