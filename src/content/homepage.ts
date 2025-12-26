import { Language } from '../i18n/translations';

export const homepageContent: Record<Language, {
  title: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
  featuresTitle: string;
  features: string[];
  disclaimer: string;
}> = {
  en: {
    title: 'Sleep Calculator: Find the Best Bedtime and Wake Up Time',
    sections: [
      {
        heading: 'Sleep Calculator: Find the Best Bedtime and Wake Up Time',
        paragraphs: [
          'SleepInTime is a free sleep calculator that helps you discover the best time to go to bed and the best wake up time based on natural 90-minute sleep cycles. Instead of waking up in the middle of deep sleep—which can leave you feeling groggy and disoriented—our sleep cycle calculator helps you align your sleep schedule with your body\'s natural rhythms.',
          'Most people focus on how long they sleep, but when you sleep can be just as important. Your body follows natural cycles that repeat roughly every 90 minutes. These cycles move through different stages: light sleep, deep sleep, and REM sleep. Waking up during light sleep—at the end of a complete cycle—feels much more natural than being jolted awake during deep sleep.',
          'Our sleep calculator works in two ways: calculate best bedtime based on wake up time, or find best wake up time based on bedtime. The calculator uses 90-minute sleep phases to suggest optimal sleep windows that align with natural cycle boundaries. No account required, no tracking, completely free.',
        ],
      },
      {
        heading: 'Calculate Your Ideal Bedtime or Wake Up Time Based on Natural Sleep Cycles',
        paragraphs: [
          'A typical sleep cycle lasts about 90 minutes, though this can vary slightly between individuals. Each cycle includes light sleep, deep sleep (when your body repairs itself), and REM sleep (when you dream and your brain processes memories).',
          'The first cycles of the night tend to have more deep sleep, while later cycles have more REM sleep. This is why a 6-hour sleep with complete cycles can sometimes feel better than 8 hours of interrupted sleep. Most people need 4 to 6 complete cycles per night, which translates to roughly 6 to 9 hours of total sleep time.',
          'SleepInTime calculates optimal sleep and wake times based on your natural sleep cycles. You tell us when you want to wake up, or when you plan to go to bed, and we suggest times that align with cycle boundaries. The calculator accounts for the time it typically takes to fall asleep (usually 10 to 20 minutes for most people) and then adds complete 90-minute cycles to find wake times that fall during light sleep phases.',
        ],
      },
    ],
    featuresTitle: 'What You Can Do With Our Sleep Calculator',
    features: [
      'Calculate best bedtime based on wake up time',
      'Find best wake up time based on bedtime',
      'Sleep cycle calculator using 90-minute sleep phases',
      'No account required, no tracking, completely free',
    ],
    disclaimer: 'This tool is for educational purposes only and does not provide medical advice.',
  },
  'pt-br': {
    title: 'Calculadora de Sono: Encontre o Melhor Horário para Dormir e Acordar',
    sections: [
      {
        heading: 'Calculadora de Sono: Encontre o Melhor Horário para Dormir e Acordar',
        paragraphs: [
          'O SleepInTime é uma calculadora de sono gratuita que ajuda você a descobrir o melhor horário para ir dormir e o melhor horário para acordar com base em ciclos naturais de sono de 90 minutos. Em vez de acordar no meio do sono profundo—o que pode deixá-lo grogue e desorientado—nossa calculadora de ciclos de sono ajuda você a alinhar seu horário de sono com os ritmos naturais do seu corpo.',
          'A maioria das pessoas se concentra em quanto tempo dormem, mas quando você dorme pode ser igualmente importante. Seu corpo segue ciclos naturais que se repetem aproximadamente a cada 90 minutos. Esses ciclos passam por diferentes estágios: sono leve, sono profundo e sono REM. Acordar durante o sono leve—no final de um ciclo completo—parece muito mais natural do que ser acordado abruptamente durante o sono profundo.',
          'Nossa calculadora de sono funciona de duas formas: calcular o melhor horário para dormir com base no horário de acordar, ou encontrar o melhor horário para acordar com base no horário de dormir. A calculadora usa fases de sono de 90 minutos para sugerir janelas de sono ideais que se alinham com os limites naturais dos ciclos. Sem necessidade de conta, sem rastreamento, completamente grátis.',
        ],
      },
      {
        heading: 'Calcule Seu Horário Ideal para Dormir ou Acordar com Base em Ciclos Naturais de Sono',
        paragraphs: [
          'Um ciclo típico de sono dura cerca de 90 minutos, embora isso possa variar ligeiramente entre indivíduos. Cada ciclo inclui sono leve, sono profundo (quando seu corpo se repara) e sono REM (quando você sonha e seu cérebro processa memórias).',
          'Os primeiros ciclos da noite tendem a ter mais sono profundo, enquanto os ciclos posteriores têm mais sono REM. É por isso que um sono de 6 horas com ciclos completos às vezes pode parecer melhor do que 8 horas de sono interrompido. A maioria das pessoas precisa de 4 a 6 ciclos completos por noite, o que se traduz em aproximadamente 6 a 9 horas de sono total.',
          'O SleepInTime calcula horários ideais de sono e despertar com base nos seus ciclos naturais de sono. Você nos diz quando quer acordar, ou quando planeja ir para a cama, e sugerimos horários que se alinham com os limites dos ciclos. A calculadora leva em conta o tempo que normalmente leva para adormecer (geralmente 10 a 20 minutos para a maioria das pessoas) e então adiciona ciclos completos de 90 minutos para encontrar horários de despertar que caiam durante as fases de sono leve.',
        ],
      },
    ],
    featuresTitle: 'O Que Você Pode Fazer Com Nossa Calculadora de Sono',
    features: [
      'Calcular melhor hora de dormir com base no horário de acordar',
      'Encontrar melhor horário de acordar com base na hora de dormir',
      'Calculadora de ciclos de sono usando fases de 90 minutos',
      'Sem necessidade de conta, sem rastreamento, completamente grátis',
    ],
    disclaimer: 'Esta ferramenta é apenas para fins educacionais e não fornece aconselhamento médico.',
  },
  es: {
    title: 'Calculadora de Sueño: Encuentra el Mejor Horario para Dormir y Despertar',
    sections: [
      {
        heading: 'Calculadora de Sueño: Encuentra el Mejor Horario para Dormir y Despertar',
        paragraphs: [
          'SleepInTime es una calculadora de sueño gratuita que te ayuda a descubrir el mejor horario para ir a dormir y el mejor horario para despertar con base en ciclos naturales de sueño de 90 minutos. En lugar de despertar en medio del sueño profundo—lo que puede dejarte grogue y desorientado—nuestra calculadora de ciclos de sueño te ayuda a alinear tu horario de sueño con los ritmos naturales de tu cuerpo.',
          'La mayoría de las personas se concentra en cuánto tiempo duermen, pero cuándo duermes puede ser igualmente importante. Tu cuerpo sigue ciclos naturales que se repiten aproximadamente cada 90 minutos. Estos ciclos pasan por diferentes etapas: sueño ligero, sueño profundo y sueño REM. Despertar durante el sueño ligero—al final de un ciclo completo—parece mucho más natural que ser despertado abruptamente durante el sueño profundo.',
          'Nuestra calculadora de sueño funciona de dos formas: calcular el mejor horario para dormir con base en el horario de despertar, o encontrar el mejor horario para despertar con base en el horario de dormir. La calculadora usa fases de sueño de 90 minutos para sugerir ventanas de sueño ideales que se alinean con los límites naturales de los ciclos. Sin necesidad de cuenta, sin seguimiento, completamente gratis.',
        ],
      },
      {
        heading: 'Calcula Tu Hora de Acostarse o Hora de Despertar Ideal Basada en Ciclos Naturales de Sueño',
        paragraphs: [
          'Un ciclo típico de sueño dura cerca de 90 minutos, aunque esto puede variar ligeramente entre individuos. Cada ciclo incluye sueño ligero, sueño profundo (cuando tu cuerpo se repara) y sueño REM (cuando sueñas y tu cerebro procesa memorias).',
          'Los primeros ciclos de la noche tienden a tener más sueño profundo, mientras que los ciclos posteriores tienen más sueño REM. Es por eso que un sueño de 6 horas con ciclos completos a veces puede parecer mejor que 8 horas de sueño interrumpido. La mayoría de las personas necesita de 4 a 6 ciclos completos por noche, lo que se traduce en aproximadamente 6 a 9 horas de sueño total.',
          'SleepInTime calcula horarios ideales de sueño y despertar con base en tus ciclos naturales de sueño. Tú nos dices cuándo quieres despertar, o cuándo planeas ir a la cama, y sugerimos horarios que se alinean con los límites de los ciclos. La calculadora toma en cuenta el tiempo que normalmente lleva para dormirse (generalmente 10 a 20 minutos para la mayoría de las personas) y entonces agrega ciclos completos de 90 minutos para encontrar horarios de despertar que caigan durante las fases de sueño ligero.',
        ],
      },
    ],
    featuresTitle: 'Lo Que Puedes Hacer Con Nuestra Calculadora de Sueño',
    features: [
      'Calcular mejor hora de acostarse (bedtime) basada en la hora de despertar (wake up time)',
      'Encontrar mejor hora de despertar (wake up time) basada en la hora de acostarse (bedtime)',
      'Calculadora de ciclos de sueño usando fases de 90 minutos',
      'Sin necesidad de cuenta, sin seguimiento, completamente gratis',
    ],
    disclaimer: 'Esta herramienta es solo para fines educacionales y no proporciona consejo médico.',
  },
  fr: {
    title: 'Calculatrice de Sommeil: Trouvez le Meilleur Heure du Coucher et Heure de Réveil',
    sections: [
      {
        heading: 'Calculatrice de Sommeil: Trouvez le Meilleur Heure du Coucher et Heure de Réveil',
        paragraphs: [
          'SleepInTime est une calculatrice de sommeil gratuite qui vous aide à découvrir la meilleure heure du coucher (bedtime) et la meilleure heure de réveil (wake up time) basées sur des cycles naturels de sommeil de 90 minutes. Au lieu de vous réveiller au milieu du sommeil profond—ce qui peut vous laisser groggy et désorienté—notre calculatrice de cycles de sommeil vous aide à aligner votre horaire de sommeil avec les rythmes naturels de votre corps.',
          'La plupart des gens se concentrent sur la durée de leur sommeil, mais le moment où vous dormez peut être tout aussi important. Votre corps suit des cycles naturels qui se répètent environ toutes les 90 minutes. Ces cycles passent par différentes étapes : sommeil léger, sommeil profond et sommeil paradoxal. Se réveiller pendant le sommeil léger—à la fin d\'un cycle complet—semble beaucoup plus naturel que d\'être réveillé brusquement pendant le sommeil profond.',
          'Notre calculatrice de sommeil fonctionne de deux façons : calculer la meilleure heure du coucher (bedtime) basée sur l\'heure de réveil (wake up time), ou trouver la meilleure heure de réveil basée sur l\'heure du coucher. La calculatrice utilise des phases de sommeil de 90 minutes pour suggérer des fenêtres de sommeil optimales qui s\'alignent avec les limites naturelles des cycles. Aucun compte requis, aucun suivi, complètement gratuit.',
        ],
      },
      {
        heading: 'Calculez Votre Heure du Coucher ou Heure de Réveil Idéale Basée sur les Cycles Naturels du Sommeil',
        paragraphs: [
          'Un cycle de sommeil typique dure environ 90 minutes, bien que cela puisse varier légèrement entre les individus. Chaque cycle comprend le sommeil léger, le sommeil profond (lorsque votre corps se répare) et le sommeil paradoxal (lorsque vous rêvez et que votre cerveau traite les souvenirs).',
          'Les premiers cycles de la nuit ont tendance à avoir plus de sommeil profond, tandis que les cycles ultérieurs ont plus de sommeil paradoxal. C\'est pourquoi un sommeil de 6 heures avec des cycles complets peut parfois sembler meilleur que 8 heures de sommeil interrompu. La plupart des gens ont besoin de 4 à 6 cycles complets par nuit, ce qui se traduit par environ 6 à 9 heures de sommeil total.',
          'SleepInTime calcule les horaires optimaux de sommeil et de réveil basés sur vos cycles naturels de sommeil. Vous nous dites quand vous voulez vous réveiller, ou quand vous prévoyez d\'aller vous coucher, et nous suggérons des horaires qui s\'alignent avec les limites des cycles. La calculatrice tient compte du temps qu\'il faut généralement pour s\'endormir (généralement 10 à 20 minutes pour la plupart des gens) et ajoute ensuite des cycles complets de 90 minutes pour trouver des horaires de réveil qui tombent pendant les phases de sommeil léger.',
        ],
      },
    ],
    featuresTitle: 'Ce Que Vous Pouvez Faire Avec Notre Calculatrice de Sommeil',
    features: [
      'Calculer la meilleure heure du coucher (bedtime) basée sur l\'heure de réveil (wake up time)',
      'Trouver la meilleure heure de réveil (wake up time) basée sur l\'heure du coucher (bedtime)',
      'Calculatrice de cycles de sommeil utilisant des phases de 90 minutes',
      'Aucun compte requis, aucun suivi, complètement gratuit',
    ],
    disclaimer: 'Cet outil est à des fins éducatives uniquement et ne fournit pas de conseils médicaux.',
  },
  zh: {
    title: '睡眠计算器：找到最佳就寝时间和起床时间',
    sections: [
      {
        heading: '睡眠计算器：找到最佳就寝时间和起床时间',
        paragraphs: [
          'SleepInTime是一个免费的睡眠计算器，帮助您发现最佳就寝时间和最佳起床时间，基于自然的90分钟睡眠周期。与其在深睡眠期间醒来——这可能会让您感到昏昏沉沉和迷失方向——我们的睡眠周期计算器帮助您将睡眠时间表与身体的自然节律对齐。',
          '大多数人关注睡眠时长，但睡眠时间同样重要。您的身体遵循大约每90分钟重复一次的自然周期。这些周期经历不同阶段：浅睡眠、深睡眠和快速眼动睡眠。在浅睡眠期间醒来——在一个完整周期结束时——比在深睡眠期间被突然唤醒感觉更自然。',
          '我们的睡眠计算器以两种方式工作：根据起床时间计算最佳就寝时间，或根据就寝时间找到最佳起床时间。计算器使用90分钟睡眠阶段来建议与自然周期边界对齐的最佳睡眠窗口。无需账户，无跟踪，完全免费。',
        ],
      },
      {
        heading: '根据自然睡眠周期计算您的理想就寝时间或起床时间',
        paragraphs: [
          '典型的睡眠周期持续约90分钟，尽管这在个体之间可能略有不同。每个周期包括浅睡眠、深睡眠（身体自我修复时）和快速眼动睡眠（做梦和大脑处理记忆时）。',
          '夜晚的前几个周期往往有更多的深睡眠，而后期周期有更多的快速眼动睡眠。这就是为什么6小时的完整周期睡眠有时可能感觉比8小时的中断睡眠更好。大多数人每晚需要4到6个完整周期，这相当于大约6到9小时的总睡眠时间。',
          'SleepInTime根据您的自然睡眠周期计算最佳睡眠和起床时间。您告诉我们您想何时醒来，或计划何时上床睡觉，我们建议与周期边界对齐的时间。计算器考虑了通常入睡所需的时间（大多数人通常为10到20分钟），然后添加完整的90分钟周期，以找到落在浅睡眠阶段的起床时间。',
        ],
      },
    ],
    featuresTitle: '您可以使用我们的睡眠计算器做什么',
    features: [
      '根据起床时间计算最佳就寝时间',
      '根据就寝时间找到最佳起床时间',
      '使用90分钟睡眠阶段的睡眠周期计算器',
      '无需账户，无跟踪，完全免费',
    ],
    disclaimer: '此工具仅用于教育目的，不提供医疗建议。',
  },
};

