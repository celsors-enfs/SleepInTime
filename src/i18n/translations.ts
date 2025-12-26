export type Language = 'en' | 'pt-br' | 'es' | 'fr' | 'zh';

export interface Translations {
  nav: {
    home: string;
    howItWorks: string;
    faq: string;
    sleepHygiene: string;
    about: string;
  };
  common: {
    language: string;
    contact: string;
  };
  [key: string]: any;
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      howItWorks: 'How it works',
      faq: 'FAQ',
      sleepHygiene: 'Sleep hygiene',
      about: 'About',
    },
    common: {
      language: 'Language',
      contact: 'Contact',
    },
  },
  'pt-br': {
    nav: {
      home: 'Início',
      howItWorks: 'Como funciona',
      faq: 'Perguntas frequentes',
      sleepHygiene: 'Higiene do sono',
      about: 'Sobre',
    },
    common: {
      language: 'Idioma',
      contact: 'Contato',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      howItWorks: 'Cómo funciona',
      faq: 'Preguntas frecuentes',
      sleepHygiene: 'Higiene del sueño',
      about: 'Acerca de',
    },
    common: {
      language: 'Idioma',
      contact: 'Contacto',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      howItWorks: 'Comment ça marche',
      faq: 'FAQ',
      sleepHygiene: 'Hygiène du sommeil',
      about: 'À propos',
    },
    common: {
      language: 'Langue',
      contact: 'Contact',
    },
  },
  zh: {
    nav: {
      home: '首页',
      howItWorks: '工作原理',
      faq: '常见问题',
      sleepHygiene: '睡眠卫生',
      about: '关于',
    },
    common: {
      language: '语言',
      contact: '联系',
    },
  },
};

export const languageNames: Record<Language, string> = {
  en: 'English',
  'pt-br': 'Português (Brasil)',
  es: 'Español',
  fr: 'Français',
  zh: '中文（普通话）',
};

