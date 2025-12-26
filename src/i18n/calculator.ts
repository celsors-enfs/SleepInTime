import { Language } from './translations';

export const calculatorTranslations: Record<Language, {
  tagline: string;
  title: string;
  subtitle: string;
  tabs: {
    wakeUpAt: string;
    goToBedAt: string;
    sleepNow: string;
  };
  timePicker: {
    goToBedAt: string;
    wakeUpAt: string;
    setToNow: string;
  };
  settings: {
    title: string;
    cycleLength: string;
    cycleLengthDesc: string;
    timeToFallAsleep: string;
    timeToFallAsleepDesc: string;
    numSuggestions: string;
    numSuggestionsDesc: string;
    wakeWindowRange: string;
    wakeWindowRangeDesc: string;
    startTime: string;
    endTime: string;
  };
  recommendedTimes: string;
  tonight: string;
  today: string;
  tomorrow: string;
  cycles: string;
  recommended: string;
  howItWorks: {
    title: string;
    content: string[];
  };
}> = {
  en: {
    tagline: 'Align your sleep timing with natural sleep cycles',
    title: 'Wake up better',
    subtitle: 'Calculate optimal sleep and wake times based on sleep cycles\nfor more restful mornings.',
    tabs: {
      wakeUpAt: 'Wake up at',
      goToBedAt: 'Go to bed at',
      sleepNow: 'Sleep now',
    },
    timePicker: {
      goToBedAt: 'Go to bed at',
      wakeUpAt: 'Wake up at',
      setToNow: 'Set to Now',
    },
    settings: {
      title: 'Settings',
      cycleLength: 'Cycle length',
      cycleLengthDesc: 'Minutes per sleep cycle (default: 90)',
      timeToFallAsleep: 'Time to fall asleep',
      timeToFallAsleepDesc: 'Minutes until you fall asleep (default: 15)',
      numSuggestions: 'Number of suggestions',
      numSuggestionsDesc: 'How many options to show (default: 6)',
      wakeWindowRange: 'Wake window range (optional)',
      wakeWindowRangeDesc: 'Preferred wake time range',
      startTime: 'Start time',
      endTime: 'End time',
    },
    recommendedTimes: 'Recommended times',
    tonight: 'Tonight',
    today: 'Today',
    tomorrow: 'Tomorrow',
    cycles: 'cycles',
    recommended: 'RECOMMENDED',
    howItWorks: {
      title: 'How sleep cycles work',
      content: [
        'Sleep cycles typically last about 90 minutes, moving through stages of light sleep, deep sleep, and REM sleep.',
        'Waking up between cycles—rather than during them—can help you feel more refreshed.',
        'This calculator uses your preferred wake time or bedtime to suggest optimal sleep windows.',
        'It accounts for the time it takes you to fall asleep and recommends wake times that align with natural cycle boundaries.',
        'The best recommendation usually provides about 5 complete cycles (7.5 hours of sleep, plus time to fall asleep).',
        'However, individual needs vary, and you can adjust cycle length and sleep onset time in settings.',
      ],
    },
  },
  'pt-br': {
    tagline: 'Alinhe o horário do seu sono com os ciclos naturais de sono',
    title: 'Acorde melhor',
    subtitle: 'Calcule horários ideais de sono e despertar com base em ciclos de sono\npara manhãs mais descansadas.',
    tabs: {
      wakeUpAt: 'Acordar às',
      goToBedAt: 'Ir para a cama às',
      sleepNow: 'Dormir agora',
    },
    timePicker: {
      goToBedAt: 'Ir para a cama às',
      wakeUpAt: 'Acordar às',
      setToNow: 'Definir para Agora',
    },
    settings: {
      title: 'Configurações',
      cycleLength: 'Duração do ciclo',
      cycleLengthDesc: 'Minutos por ciclo de sono (padrão: 90)',
      timeToFallAsleep: 'Tempo para adormecer',
      timeToFallAsleepDesc: 'Minutos até você adormecer (padrão: 15)',
      numSuggestions: 'Número de sugestões',
      numSuggestionsDesc: 'Quantas opções mostrar (padrão: 6)',
      wakeWindowRange: 'Janela de despertar (opcional)',
      wakeWindowRangeDesc: 'Faixa de horário de despertar preferida',
      startTime: 'Hora de início',
      endTime: 'Hora de fim',
    },
    recommendedTimes: 'Horários recomendados',
    tonight: 'Hoje à noite',
    today: 'Hoje',
    tomorrow: 'Amanhã',
    cycles: 'ciclos',
    recommended: 'RECOMENDADO',
    howItWorks: {
      title: 'Como funcionam os ciclos de sono',
      content: [
        'Os ciclos de sono normalmente duram cerca de 90 minutos, passando por estágios de sono leve, sono profundo e sono REM.',
        'Acordar entre os ciclos—em vez de durante eles—pode ajudá-lo a se sentir mais revigorado.',
        'Esta calculadora usa seu horário preferido de despertar ou dormir para sugerir janelas de sono ideais.',
        'Ela leva em conta o tempo que você leva para adormecer e recomenda horários de despertar que se alinham com os limites naturais dos ciclos.',
        'A melhor recomendação geralmente fornece cerca de 5 ciclos completos (7,5 horas de sono, mais o tempo para adormecer).',
        'No entanto, as necessidades individuais variam, e você pode ajustar a duração do ciclo e o tempo de início do sono nas configurações.',
      ],
    },
  },
  es: {
    tagline: 'Alinea tu horario de sueño con los ciclos naturales del sueño',
    title: 'Despierta mejor',
    subtitle: 'Calcula horarios óptimos de sueño y despertar basados en ciclos de sueño\npara mañanas más descansadas.',
    tabs: {
      wakeUpAt: 'Despertar a las',
      goToBedAt: 'Acostarse a las',
      sleepNow: 'Dormir ahora',
    },
    timePicker: {
      goToBedAt: 'Acostarse a las',
      wakeUpAt: 'Despertar a las',
      setToNow: 'Establecer a Ahora',
    },
    settings: {
      title: 'Configuración',
      cycleLength: 'Duración del ciclo',
      cycleLengthDesc: 'Minutos por ciclo de sueño (predeterminado: 90)',
      timeToFallAsleep: 'Tiempo para quedarse dormido',
      timeToFallAsleepDesc: 'Minutos hasta que te duermas (predeterminado: 15)',
      numSuggestions: 'Número de sugerencias',
      numSuggestionsDesc: 'Cuántas opciones mostrar (predeterminado: 6)',
      wakeWindowRange: 'Rango de ventana de despertar (opcional)',
      wakeWindowRangeDesc: 'Rango de horario de despertar preferido',
      startTime: 'Hora de inicio',
      endTime: 'Hora de fin',
    },
    recommendedTimes: 'Horarios recomendados',
    tonight: 'Esta noche',
    today: 'Hoy',
    tomorrow: 'Mañana',
    cycles: 'ciclos',
    recommended: 'RECOMENDADO',
    howItWorks: {
      title: 'Cómo funcionan los ciclos del sueño',
      content: [
        'Los ciclos del sueño típicamente duran aproximadamente 90 minutos, pasando por etapas de sueño ligero, sueño profundo y sueño REM.',
        'Despertar entre ciclos—en lugar de durante ellos—puede ayudarte a sentirte más renovado.',
        'Esta calculadora usa tu horario preferido de despertar o acostarte para sugerir ventanas de sueño óptimas.',
        'Tiene en cuenta el tiempo que te toma quedarte dormido y recomienda horarios de despertar que se alinean con los límites naturales de los ciclos.',
        'La mejor recomendación generalmente proporciona aproximadamente 5 ciclos completos (7.5 horas de sueño, más el tiempo para quedarse dormido).',
        'Sin embargo, las necesidades individuales varían, y puedes ajustar la duración del ciclo y el tiempo de inicio del sueño en la configuración.',
      ],
    },
  },
  fr: {
    tagline: 'Alignez votre horaire de sommeil avec les cycles naturels du sommeil',
    title: 'Réveillez-vous mieux',
    subtitle: 'Calculez les heures optimales de sommeil et de réveil basées sur les cycles de sommeil\npour des matins plus reposants.',
    tabs: {
      wakeUpAt: 'Se réveiller à',
      goToBedAt: 'Se coucher à',
      sleepNow: 'Dormir maintenant',
    },
    timePicker: {
      goToBedAt: 'Se coucher à',
      wakeUpAt: 'Se réveiller à',
      setToNow: 'Définir à Maintenant',
    },
    settings: {
      title: 'Paramètres',
      cycleLength: 'Durée du cycle',
      cycleLengthDesc: 'Minutes par cycle de sommeil (par défaut: 90)',
      timeToFallAsleep: 'Temps pour s\'endormir',
      timeToFallAsleepDesc: 'Minutes jusqu\'à ce que vous vous endormiez (par défaut: 15)',
      numSuggestions: 'Nombre de suggestions',
      numSuggestionsDesc: 'Combien d\'options afficher (par défaut: 6)',
      wakeWindowRange: 'Plage de fenêtre de réveil (optionnel)',
      wakeWindowRangeDesc: 'Plage d\'horaire de réveil préférée',
      startTime: 'Heure de début',
      endTime: 'Heure de fin',
    },
    recommendedTimes: 'Heures recommandées',
    tonight: 'Ce soir',
    today: 'Aujourd\'hui',
    tomorrow: 'Demain',
    cycles: 'cycles',
    recommended: 'RECOMMANDÉ',
    howItWorks: {
      title: 'Comment fonctionnent les cycles du sommeil',
      content: [
        'Les cycles du sommeil durent généralement environ 90 minutes, en passant par des stades de sommeil léger, sommeil profond et sommeil paradoxal.',
        'Se réveiller entre les cycles—plutôt que pendant ceux-ci—peut vous aider à vous sentir plus rafraîchi.',
        'Ce calculateur utilise votre heure de réveil ou de coucher préférée pour suggérer des fenêtres de sommeil optimales.',
        'Il tient compte du temps qu\'il vous faut pour vous endormir et recommande des heures de réveil qui s\'alignent avec les limites naturelles des cycles.',
        'La meilleure recommandation fournit généralement environ 5 cycles complets (7,5 heures de sommeil, plus le temps pour s\'endormir).',
        'Cependant, les besoins individuels varient, et vous pouvez ajuster la durée du cycle et l\'heure d\'endormissement dans les paramètres.',
      ],
    },
  },
  zh: {
    tagline: '将您的睡眠时间与自然睡眠周期对齐',
    title: '更好地醒来',
    subtitle: '根据睡眠周期计算最佳睡眠和起床时间\n以获得更宁静的早晨。',
    tabs: {
      wakeUpAt: '起床时间',
      goToBedAt: '就寝时间',
      sleepNow: '现在睡觉',
    },
    timePicker: {
      goToBedAt: '就寝时间',
      wakeUpAt: '起床时间',
      setToNow: '设置为现在',
    },
    settings: {
      title: '设置',
      cycleLength: '周期长度',
      cycleLengthDesc: '每个睡眠周期的分钟数（默认：90）',
      timeToFallAsleep: '入睡时间',
      timeToFallAsleepDesc: '直到您入睡的分钟数（默认：15）',
      numSuggestions: '建议数量',
      numSuggestionsDesc: '显示多少个选项（默认：6）',
      wakeWindowRange: '起床窗口范围（可选）',
      wakeWindowRangeDesc: '首选的起床时间范围',
      startTime: '开始时间',
      endTime: '结束时间',
    },
    recommendedTimes: '推荐时间',
    tonight: '今晚',
    today: '今天',
    tomorrow: '明天',
    cycles: '个周期',
    recommended: '推荐',
    howItWorks: {
      title: '睡眠周期如何工作',
      content: [
        '睡眠周期通常持续约90分钟，经历浅睡眠、深睡眠和快速眼动睡眠阶段。',
        '在周期之间醒来—而不是在周期期间—可以帮助您感觉更加精神焕发。',
        '此计算器使用您首选的起床时间或就寝时间来建议最佳的睡眠窗口。',
        '它考虑了您入睡所需的时间，并推荐与自然周期边界对齐的起床时间。',
        '最佳建议通常提供约5个完整周期（7.5小时睡眠，加上入睡时间）。',
        '但是，个人需求不同，您可以在设置中调整周期长度和入睡时间。',
      ],
    },
  },
};

