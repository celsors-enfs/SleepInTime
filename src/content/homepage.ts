import { Language } from '../i18n/translations';

export const homepageContent: Record<Language, {
  title: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
  disclaimer: string;
}> = {
  en: {
    title: 'Why sleep timing matters',
    sections: [
      {
        heading: 'Why sleep timing matters',
        paragraphs: [
          'Most people focus on how long they sleep, but when you sleep can be just as important. Your body follows natural cycles that repeat roughly every 90 minutes. These cycles move through different stages: light sleep, deep sleep, and REM sleep.',
          'Waking up during light sleep—at the end of a complete cycle—feels much more natural than being jolted awake during deep sleep. That groggy, disoriented feeling you sometimes get? That\'s what happens when an alarm interrupts you mid-cycle.',
          'SleepInTime helps you align your bedtime or wake time with these natural boundaries. Instead of aiming for a specific number of hours, you\'re aiming for complete cycles. This simple shift in thinking can make a real difference in how you feel in the morning.',
        ],
      },
      {
        heading: 'Understanding sleep cycles',
        paragraphs: [
          'A typical sleep cycle lasts about 90 minutes, though this can vary slightly between individuals. Each cycle includes light sleep, deep sleep (when your body repairs itself), and REM sleep (when you dream and your brain processes memories).',
          'The first cycles of the night tend to have more deep sleep, while later cycles have more REM sleep. This is why a 6-hour sleep with complete cycles can sometimes feel better than 8 hours of interrupted sleep.',
          'Most people need 4 to 6 complete cycles per night, which translates to roughly 6 to 9 hours of total sleep time. But the exact number depends on your individual needs, your age, and how well you\'ve been sleeping recently.',
        ],
      },
      {
        heading: 'How SleepInTime works',
        paragraphs: [
          'SleepInTime calculates optimal sleep and wake times based on your natural sleep cycles. You tell us when you want to wake up, or when you plan to go to bed, and we suggest times that align with cycle boundaries.',
          'The calculator accounts for the time it typically takes to fall asleep (usually 10 to 20 minutes for most people). It then adds complete 90-minute cycles to find wake times that fall during light sleep phases.',
          'We don\'t track your sleep, we don\'t require accounts, and we don\'t make medical claims. This is simply a timing tool based on well-established sleep science. Use it as a guide, but always listen to your body.',
        ],
      },
    ],
    disclaimer: 'This tool is for educational purposes only and does not provide medical advice.',
  },
  'pt-br': {
    title: 'Por que o horário do sono importa',
    sections: [
      {
        heading: 'Por que o horário do sono importa',
        paragraphs: [
          'A maioria das pessoas se concentra em quanto tempo dormem, mas quando você dorme pode ser igualmente importante. Seu corpo segue ciclos naturais que se repetem aproximadamente a cada 90 minutos. Esses ciclos passam por diferentes estágios: sono leve, sono profundo e sono REM.',
          'Acordar durante o sono leve—no final de um ciclo completo—parece muito mais natural do que ser acordado abruptamente durante o sono profundo. Aquele sentimento grogue e desorientado que você às vezes tem? É o que acontece quando um alarme o interrompe no meio de um ciclo.',
          'O SleepInTime ajuda você a alinhar sua hora de dormir ou de acordar com esses limites naturais. Em vez de visar um número específico de horas, você está visando ciclos completos. Essa simples mudança de pensamento pode fazer uma diferença real em como você se sente pela manhã.',
        ],
      },
      {
        heading: 'Entendendo os ciclos do sono',
        paragraphs: [
          'Um ciclo típico de sono dura cerca de 90 minutos, embora isso possa variar ligeiramente entre indivíduos. Cada ciclo inclui sono leve, sono profundo (quando seu corpo se repara) e sono REM (quando você sonha e seu cérebro processa memórias).',
          'Os primeiros ciclos da noite tendem a ter mais sono profundo, enquanto os ciclos posteriores têm mais sono REM. É por isso que um sono de 6 horas com ciclos completos às vezes pode parecer melhor do que 8 horas de sono interrompido.',
          'A maioria das pessoas precisa de 4 a 6 ciclos completos por noite, o que se traduz em aproximadamente 6 a 9 horas de sono total. Mas o número exato depende das suas necessidades individuais, sua idade e quão bem você tem dormido recentemente.',
        ],
      },
      {
        heading: 'Como o SleepInTime funciona',
        paragraphs: [
          'O SleepInTime calcula horários ideais de sono e despertar com base nos seus ciclos naturais de sono. Você nos diz quando quer acordar, ou quando planeja ir para a cama, e sugerimos horários que se alinham com os limites dos ciclos.',
          'A calculadora leva em conta o tempo que normalmente leva para adormecer (geralmente 10 a 20 minutos para a maioria das pessoas). Em seguida, adiciona ciclos completos de 90 minutos para encontrar horários de despertar que caiam durante as fases de sono leve.',
          'Não rastreamos seu sono, não exigimos contas e não fazemos alegações médicas. Esta é simplesmente uma ferramenta de tempo baseada em ciência do sono bem estabelecida. Use-a como guia, mas sempre ouça seu corpo.',
        ],
      },
    ],
    disclaimer: 'Esta ferramenta é apenas para fins educacionais e não fornece aconselhamento médico.',
  },
  es: {
    title: 'Por qué importa el horario del sueño',
    sections: [
      {
        heading: 'Por qué importa el horario del sueño',
        paragraphs: [
          'La mayoría de las personas se enfocan en cuánto tiempo duermen, pero cuándo duermes puede ser igual de importante. Tu cuerpo sigue ciclos naturales que se repiten aproximadamente cada 90 minutos. Estos ciclos pasan por diferentes etapas: sueño ligero, sueño profundo y sueño REM.',
          'Despertar durante el sueño ligero—al final de un ciclo completo—se siente mucho más natural que ser despertado abruptamente durante el sueño profundo. ¿Ese sentimiento aturdido y desorientado que a veces tienes? Eso es lo que sucede cuando una alarma te interrumpe a mitad del ciclo.',
          'SleepInTime te ayuda a alinear tu hora de acostarte o despertar con estos límites naturales. En lugar de apuntar a un número específico de horas, estás apuntando a ciclos completos. Este simple cambio de pensamiento puede hacer una diferencia real en cómo te sientes por la mañana.',
        ],
      },
      {
        heading: 'Entendiendo los ciclos del sueño',
        paragraphs: [
          'Un ciclo típico de sueño dura aproximadamente 90 minutos, aunque esto puede variar ligeramente entre individuos. Cada ciclo incluye sueño ligero, sueño profundo (cuando tu cuerpo se repara) y sueño REM (cuando sueñas y tu cerebro procesa recuerdos).',
          'Los primeros ciclos de la noche tienden a tener más sueño profundo, mientras que los ciclos posteriores tienen más sueño REM. Por eso, un sueño de 6 horas con ciclos completos a veces puede sentirse mejor que 8 horas de sueño interrumpido.',
          'La mayoría de las personas necesitan de 4 a 6 ciclos completos por noche, lo que se traduce en aproximadamente 6 a 9 horas de sueño total. Pero el número exacto depende de tus necesidades individuales, tu edad y qué tan bien has estado durmiendo recientemente.',
        ],
      },
      {
        heading: 'Cómo funciona SleepInTime',
        paragraphs: [
          'SleepInTime calcula horarios óptimos de sueño y despertar basados en tus ciclos naturales de sueño. Nos dices cuándo quieres despertar, o cuándo planeas acostarte, y sugerimos horarios que se alinean con los límites de los ciclos.',
          'La calculadora tiene en cuenta el tiempo que normalmente toma quedarse dormido (generalmente de 10 a 20 minutos para la mayoría de las personas). Luego agrega ciclos completos de 90 minutos para encontrar horarios de despertar que caigan durante las fases de sueño ligero.',
          'No rastreamos tu sueño, no requerimos cuentas y no hacemos afirmaciones médicas. Esta es simplemente una herramienta de tiempo basada en ciencia del sueño bien establecida. Úsala como guía, pero siempre escucha a tu cuerpo.',
        ],
      },
    ],
    disclaimer: 'Esta herramienta es solo para fines educativos y no proporciona consejo médico.',
  },
  fr: {
    title: 'Pourquoi le moment du sommeil compte',
    sections: [
      {
        heading: 'Pourquoi le moment du sommeil compte',
        paragraphs: [
          'La plupart des gens se concentrent sur la durée de leur sommeil, mais le moment où vous dormez peut être tout aussi important. Votre corps suit des cycles naturels qui se répètent environ toutes les 90 minutes. Ces cycles passent par différentes étapes : sommeil léger, sommeil profond et sommeil paradoxal.',
          'Se réveiller pendant le sommeil léger—à la fin d\'un cycle complet—semble beaucoup plus naturel que d\'être réveillé brusquement pendant le sommeil profond. Ce sentiment groggy et désorienté que vous ressentez parfois ? C\'est ce qui se passe quand une alarme vous interrompt au milieu d\'un cycle.',
          'SleepInTime vous aide à aligner votre heure de coucher ou de réveil avec ces limites naturelles. Au lieu de viser un nombre spécifique d\'heures, vous visez des cycles complets. Ce simple changement de perspective peut faire une vraie différence dans la façon dont vous vous sentez le matin.',
        ],
      },
      {
        heading: 'Comprendre les cycles du sommeil',
        paragraphs: [
          'Un cycle de sommeil typique dure environ 90 minutes, bien que cela puisse varier légèrement entre les individus. Chaque cycle comprend le sommeil léger, le sommeil profond (lorsque votre corps se répare) et le sommeil paradoxal (lorsque vous rêvez et que votre cerveau traite les souvenirs).',
          'Les premiers cycles de la nuit ont tendance à avoir plus de sommeil profond, tandis que les cycles ultérieurs ont plus de sommeil paradoxal. C\'est pourquoi un sommeil de 6 heures avec des cycles complets peut parfois sembler meilleur que 8 heures de sommeil interrompu.',
          'La plupart des gens ont besoin de 4 à 6 cycles complets par nuit, ce qui se traduit par environ 6 à 9 heures de sommeil total. Mais le nombre exact dépend de vos besoins individuels, de votre âge et de la qualité de votre sommeil récent.',
        ],
      },
      {
        heading: 'Comment fonctionne SleepInTime',
        paragraphs: [
          'SleepInTime calcule les heures optimales de sommeil et de réveil basées sur vos cycles naturels de sommeil. Vous nous dites quand vous voulez vous réveiller, ou quand vous prévoyez d\'aller vous coucher, et nous suggérons des heures qui s\'alignent avec les limites des cycles.',
          'Le calculateur tient compte du temps qu\'il faut généralement pour s\'endormir (généralement 10 à 20 minutes pour la plupart des gens). Il ajoute ensuite des cycles complets de 90 minutes pour trouver des heures de réveil qui tombent pendant les phases de sommeil léger.',
          'Nous ne suivons pas votre sommeil, nous ne demandons pas de comptes, et nous ne faisons pas de déclarations médicales. C\'est simplement un outil de timing basé sur une science du sommeil bien établie. Utilisez-le comme guide, mais écoutez toujours votre corps.',
        ],
      },
    ],
    disclaimer: 'Cet outil est à des fins éducatives uniquement et ne fournit pas de conseils médicaux.',
  },
  zh: {
    title: '为什么睡眠时间很重要',
    sections: [
      {
        heading: '为什么睡眠时间很重要',
        paragraphs: [
          '大多数人关注睡眠时长，但睡眠时间同样重要。您的身体遵循大约每90分钟重复一次的自然周期。这些周期经历不同阶段：浅睡眠、深睡眠和快速眼动睡眠。',
          '在浅睡眠期间醒来——在一个完整周期结束时——比在深睡眠期间被突然唤醒感觉更自然。您有时感到的昏昏沉沉、迷失方向的感觉？这就是闹钟在周期中途打断您时发生的情况。',
          'SleepInTime帮助您将就寝时间或起床时间与这些自然边界对齐。与其瞄准特定的小时数，不如瞄准完整的周期。这种简单的思维转变可以真正改变您早晨的感觉。',
        ],
      },
      {
        heading: '了解睡眠周期',
        paragraphs: [
          '典型的睡眠周期持续约90分钟，尽管这在个体之间可能略有不同。每个周期包括浅睡眠、深睡眠（身体自我修复时）和快速眼动睡眠（做梦和大脑处理记忆时）。',
          '夜晚的前几个周期往往有更多的深睡眠，而后期周期有更多的快速眼动睡眠。这就是为什么6小时的完整周期睡眠有时可能感觉比8小时的中断睡眠更好。',
          '大多数人每晚需要4到6个完整周期，这相当于大约6到9小时的总睡眠时间。但确切的数量取决于您的个人需求、年龄以及最近的睡眠质量。',
        ],
      },
      {
        heading: 'SleepInTime如何工作',
        paragraphs: [
          'SleepInTime根据您的自然睡眠周期计算最佳睡眠和起床时间。您告诉我们您想何时醒来，或计划何时上床睡觉，我们建议与周期边界对齐的时间。',
          '计算器考虑了通常入睡所需的时间（大多数人通常为10到20分钟）。然后它添加完整的90分钟周期，以找到落在浅睡眠阶段的起床时间。',
          '我们不跟踪您的睡眠，不需要账户，也不做医疗声明。这只是一个基于完善的睡眠科学的时间工具。将其用作指南，但始终倾听您的身体。',
        ],
      },
    ],
    disclaimer: '此工具仅用于教育目的，不提供医疗建议。',
  },
};

