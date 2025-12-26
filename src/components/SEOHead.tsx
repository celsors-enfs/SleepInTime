import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Language } from '../i18n/translations';

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noindex?: boolean;
}

const languageCodes: Record<Language, string> = {
  en: 'en',
  'pt-br': 'pt-BR',
  es: 'es',
  fr: 'fr',
  zh: 'zh-CN',
};

const defaultOgImage = 'https://storage.googleapis.com/storage.magicpath.ai/user/347385894321393664/assets/530f46d9-08bd-4224-8001-71b163469a7b.png';

export const SEOHead: React.FC<SEOHeadProps> = ({ 
  title, 
  description, 
  path,
  ogTitle,
  ogDescription,
  ogImage = defaultOgImage,
  noindex = false,
}) => {
  const [language] = useLanguage();
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://sleepintime.com';
  
  const currentUrl = `${baseUrl}${path}`;
  const langCode = languageCodes[language];
  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;
  
  // Generate alternate language URLs
  const languages: Language[] = ['en', 'pt-br', 'es', 'fr', 'zh'];
  const alternateUrls = languages.map((lang) => {
    const langPath = lang === 'en' 
      ? path.replace(/^\/(pt-br|es|fr|zh)/, '') || '/en' 
      : path.replace(/^\/(en|pt-br|es|fr|zh)/, `/${lang}`) || `/${lang}`;
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

    // Update or create robots meta
    let robots = document.querySelector('meta[name="robots"]');
    if (noindex) {
      if (!robots) {
        robots = document.createElement('meta');
        robots.setAttribute('name', 'robots');
        document.head.appendChild(robots);
      }
      robots.setAttribute('content', 'noindex, nofollow');
    } else {
      if (robots) {
        robots.remove();
      }
    }

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
    defaultLink.setAttribute('href', `${baseUrl}/en${path.replace(/^\/(en|pt-br|es|fr|zh)/, '') || ''}`);
    document.head.appendChild(defaultLink);

    // OpenGraph tags
    const setOrCreateMeta = (property: string, content: string, isProperty = true) => {
      const attr = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    setOrCreateMeta('og:title', finalOgTitle);
    setOrCreateMeta('og:description', finalOgDescription);
    setOrCreateMeta('og:url', currentUrl);
    setOrCreateMeta('og:image', ogImage);
    setOrCreateMeta('og:type', 'website');
    setOrCreateMeta('og:locale', langCode);
    
    // Twitter Card tags
    setOrCreateMeta('twitter:card', 'summary_large_image', false);
    setOrCreateMeta('twitter:title', finalOgTitle, false);
    setOrCreateMeta('twitter:description', finalOgDescription, false);
    setOrCreateMeta('twitter:image', ogImage, false);

    // Update html lang attribute
    document.documentElement.setAttribute('lang', langCode);
  }, [title, description, currentUrl, alternateUrls, langCode, baseUrl, path, finalOgTitle, finalOgDescription, ogImage, noindex]);

  return null;
};

