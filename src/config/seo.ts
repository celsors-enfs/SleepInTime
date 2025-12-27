/**
 * SEO Configuration for SleepInTime
 * 
 * This file contains all SEO titles and descriptions for all pages and languages.
 * All titles include target keywords: "Sleep Calculator", "Bedtime", "Wake Up Time", "Sleep Cycles"
 * 
 * IMPORTANT: Keep Portuguese (pt-br) as the source of truth for semantic structure.
 * Other languages should be natural translations that maintain the same meaning and keywords.
 */

import { Language } from '../i18n/translations';

export interface SEOConfig {
  title: string;
  description: string;
}

export const seoConfig: Record<Language, {
  home: SEOConfig;
  howItWorks: SEOConfig;
  faq: SEOConfig;
  sleepHygiene: SEOConfig;
  about: SEOConfig;
}> = {
  en: {
    home: {
      title: 'Sleep Calculator: Find the Best Bedtime and Wake Up Time | SleepInTime',
      description: 'Free sleep calculator to find the best bedtime and wake up time based on 90-minute sleep cycles. Calculate optimal sleep times for better mornings. No account required.',
    },
    howItWorks: {
      title: 'How This Sleep Calculator Works: 90-Minute Sleep Cycles Explained | SleepInTime',
      description: 'Learn how our sleep cycle calculator works. Understand 90-minute sleep cycles, sleep onset time, and how we calculate optimal bedtime and wake up times for better sleep.',
    },
    faq: {
      title: 'Sleep Calculator FAQ: Common Questions About Sleep Cycles | SleepInTime',
      description: 'Frequently asked questions about sleep cycles, sleep timing, bedtime calculation, and how to use our free sleep calculator. Get answers about 90-minute cycles and optimal sleep times.',
    },
    sleepHygiene: {
      title: 'Sleep Hygiene Tips for a Better Sleep Schedule | SleepInTime',
      description: 'Learn sleep hygiene practices including light exposure, caffeine timing, and creating the right sleep environment. Improve your sleep schedule with evidence-based tips for better bedtime and wake up times.',
    },
    about: {
      title: 'About SleepInTime: Free Sleep Calculator Tool | SleepInTime',
      description: 'Learn about SleepInTime, a privacy-first, free sleep calculator that helps you align your sleep times with natural 90-minute sleep cycles. No tracking, no accounts required.',
    },
  },
  'pt-br': {
    home: {
      title: 'Calculadora de Sono: Encontre o Melhor Horário para Dormir e Acordar | SleepInTime',
      description: 'Calculadora de sono gratuita para encontrar o melhor horário para dormir e acordar com base em ciclos de sono de 90 minutos. Calcule horários de sono ideais para manhãs melhores. Sem necessidade de conta.',
    },
    howItWorks: {
      title: 'Como Funciona Esta Calculadora de Sono: Ciclos de Sono de 90 Minutos Explicados | SleepInTime',
      description: 'Aprenda como nossa calculadora de ciclos de sono funciona. Entenda os ciclos de sono de 90 minutos, o tempo de início do sono e como calculamos os melhores horários para dormir e acordar.',
    },
    faq: {
      title: 'Perguntas Frequentes sobre Calculadora de Sono: Dúvidas sobre Ciclos de Sono | SleepInTime',
      description: 'Perguntas frequentes sobre ciclos de sono, horários de sono, cálculo de hora de dormir e como usar nossa calculadora de sono gratuita. Obtenha respostas sobre ciclos de 90 minutos e horários de sono ideais.',
    },
    sleepHygiene: {
      title: 'Dicas de Higiene do Sono para um Horário de Sono Melhor | SleepInTime',
      description: 'Aprenda práticas de higiene do sono, incluindo exposição à luz, horário de cafeína e criação do ambiente certo para dormir. Melhore seu horário de sono com dicas baseadas em evidências para melhores horários de dormir e acordar.',
    },
    about: {
      title: 'Sobre o SleepInTime: Ferramenta Gratuita de Calculadora de Sono | SleepInTime',
      description: 'Conheça o SleepInTime, uma calculadora de sono gratuita que prioriza a privacidade e ajuda você a alinhar seus horários de sono com ciclos naturais de sono de 90 minutos. Sem rastreamento, sem necessidade de conta.',
    },
  },
  es: {
    home: {
      title: 'Calculadora de Sueño: Encuentra el Mejor Horario para Dormir y Despertar | SleepInTime',
      description: 'Calculadora de sueño gratuita para encontrar el mejor horario para dormir (bedtime) y despertar (wake up time) basada en ciclos de sueño de 90 minutos. Calcula horarios de sueño óptimos para mejores mañanas. Sin necesidad de cuenta.',
    },
    howItWorks: {
      title: 'Cómo Funciona Esta Calculadora de Sueño: Ciclos de Sueño de 90 Minutos Explicados | SleepInTime',
      description: 'Aprende cómo funciona nuestra calculadora de ciclos de sueño. Entiende los ciclos de sueño de 90 minutos, el tiempo de inicio del sueño y cómo calculamos los mejores horarios para dormir (bedtime) y despertar (wake up time).',
    },
    faq: {
      title: 'Preguntas Frecuentes sobre Calculadora de Sueño: Preguntas sobre Ciclos de Sueño | SleepInTime',
      description: 'Preguntas frecuentes sobre ciclos de sueño, horarios de sueño, cálculo de hora de dormir (bedtime) y cómo usar nuestra calculadora de sueño gratuita. Obtén respuestas sobre ciclos de 90 minutos y horarios de sueño óptimos.',
    },
    sleepHygiene: {
      title: 'Consejos de Higiene del Sueño para un Horario de Sueño Mejor | SleepInTime',
      description: 'Aprende prácticas de higiene del sueño, incluyendo exposición a la luz, horario de cafeína y creación del ambiente adecuado para dormir. Mejora tu horario de sueño con consejos basados en evidencia para mejores horarios de dormir (bedtime) y despertar (wake up time).',
    },
    about: {
      title: 'Acerca de SleepInTime: Herramienta Gratuita de Calculadora de Sueño | SleepInTime',
      description: 'Conoce SleepInTime, una calculadora de sueño gratuita que prioriza la privacidad y te ayuda a alinear tus horarios de sueño con ciclos naturales de sueño de 90 minutos. Sin seguimiento, sin necesidad de cuenta.',
    },
  },
  fr: {
    home: {
      title: 'Calculatrice de Sommeil: Trouvez le Meilleur Heure du Coucher et Heure de Réveil | SleepInTime',
      description: 'Calculatrice de sommeil gratuite pour trouver la meilleure heure du coucher (bedtime) et heure de réveil (wake up time) basées sur des cycles de sommeil de 90 minutes. Calculez des horaires de sommeil optimaux pour de meilleurs matins. Aucun compte requis.',
    },
    howItWorks: {
      title: 'Comment Fonctionne Cette Calculatrice de Sommeil: Cycles de Sommeil de 90 Minutes Expliqués | SleepInTime',
      description: 'Apprenez comment fonctionne notre calculatrice de cycles de sommeil. Comprenez les cycles de sommeil de 90 minutes, le temps d\'endormissement et comment nous calculons les meilleures heures du coucher (bedtime) et de réveil (wake up time).',
    },
    faq: {
      title: 'FAQ Calculatrice de Sommeil: Questions Courantes sur les Cycles de Sommeil | SleepInTime',
      description: 'Questions fréquentes sur les cycles de sommeil, les horaires de sommeil, le calcul de l\'heure du coucher (bedtime) et comment utiliser notre calculatrice de sommeil gratuite. Obtenez des réponses sur les cycles de 90 minutes et les horaires de sommeil optimaux.',
    },
    sleepHygiene: {
      title: 'Conseils d\'Hygiène du Sommeil pour un Horaire de Sommeil Meilleur | SleepInTime',
      description: 'Apprenez les pratiques d\'hygiène du sommeil, y compris l\'exposition à la lumière, l\'horaire de la caféine et la création du bon environnement de sommeil. Améliorez votre horaire de sommeil avec des conseils basés sur des preuves pour de meilleures heures du coucher (bedtime) et de réveil (wake up time).',
    },
    about: {
      title: 'À Propos de SleepInTime: Outil Gratuit de Calculatrice de Sommeil | SleepInTime',
      description: 'Découvrez SleepInTime, une calculatrice de sommeil gratuite qui privilégie la confidentialité et vous aide à aligner vos horaires de sommeil avec des cycles naturels de sommeil de 90 minutes. Aucun suivi, aucun compte requis.',
    },
  },
  zh: {
    home: {
      title: '睡眠计算器：找到最佳就寝时间和起床时间 | SleepInTime',
      description: '免费睡眠计算器，基于90分钟睡眠周期找到最佳就寝时间和起床时间。计算最佳睡眠时间以获得更好的早晨。无需账户。',
    },
    howItWorks: {
      title: '这个睡眠计算器如何工作：90分钟睡眠周期解释 | SleepInTime',
      description: '了解我们的睡眠周期计算器如何工作。理解90分钟睡眠周期、入睡时间和我们如何计算最佳就寝时间和起床时间。',
    },
    faq: {
      title: '睡眠计算器常见问题：关于睡眠周期的常见问题 | SleepInTime',
      description: '关于睡眠周期、睡眠时间、就寝时间计算以及如何使用我们的免费睡眠计算器的常见问题。获取关于90分钟周期和最佳睡眠时间的答案。',
    },
    sleepHygiene: {
      title: '睡眠卫生提示：改善睡眠时间表 | SleepInTime',
      description: '学习睡眠卫生实践，包括光照、咖啡因时间和创造合适的睡眠环境。通过基于证据的提示改善您的睡眠时间表，以获得更好的就寝时间和起床时间。',
    },
    about: {
      title: '关于SleepInTime：免费睡眠计算器工具 | SleepInTime',
      description: '了解SleepInTime，一个优先考虑隐私的免费睡眠计算器，帮助您将睡眠时间与自然的90分钟睡眠周期对齐。无跟踪，无需账户。',
    },
  },
};

