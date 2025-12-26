import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Language } from '../i18n/translations';
import { AdSlot } from '../components/AdSlot';

const content: Record<Language, {
  title: string;
  sections: Array<{ heading: string; paragraphs: string[] }>;
}> = {
  en: {
    title: 'How This Sleep Calculator Works',
    sections: [
      {
        heading: 'Understanding sleep cycles',
        paragraphs: [
          'Sleep cycles are the natural rhythm your body follows during sleep. Each cycle typically lasts about 90 minutes, though this can vary between 80 and 100 minutes depending on the individual. During a cycle, you move through several stages: light sleep (stages 1 and 2), deep sleep (stage 3), and REM sleep (rapid eye movement).',
          'The first cycles of the night contain more deep sleep, which is when your body repairs tissues, strengthens the immune system, and consolidates memories. As the night progresses, deep sleep decreases and REM sleep increases. This pattern is why the timing of your wake-up matters—waking during light sleep feels natural, while waking during deep sleep can leave you feeling groggy.',
        ],
      },
      {
        heading: 'Sleep onset latency',
        paragraphs: [
          'Sleep onset latency is the time it takes you to fall asleep after getting into bed. For most people, this ranges from 10 to 20 minutes, though it can be longer if you\'re stressed, have consumed caffeine recently, or if your sleep environment isn\'t optimal.',
          'SleepInTime accounts for this delay in its calculations. When you set a bedtime, the calculator adds your typical sleep onset time before starting the cycle count. This ensures that your wake time recommendations align with actual cycle boundaries, not just your intended bedtime.',
          'You can adjust the sleep onset time in the calculator settings if you know your personal average is different from the default 15 minutes.',
        ],
      },
      {
        heading: 'How calculations are made',
        paragraphs: [
          'The calculator works in two directions. If you choose "Go to bed at," you enter your desired bedtime, and the tool calculates forward through complete 90-minute cycles to suggest optimal wake times. If you choose "Wake up at," it works backward from your wake time to suggest bedtimes that will align your wake-up with the end of a cycle.',
          'For each calculation, the tool adds your sleep onset time, then adds complete cycles. It typically suggests 3 to 8 cycles, with 5 cycles (about 7.5 hours plus sleep onset) being the most common recommendation. This gives you enough deep sleep for physical restoration and enough REM sleep for mental processing.',
          'The "Sleep now" option uses your current time as the starting point, which is useful if you\'re ready to sleep immediately.',
        ],
      },
      {
        heading: 'How to interpret recommendations',
        paragraphs: [
          'The calculator shows multiple options because individual sleep needs vary. The "RECOMMENDED" option is usually 5 cycles, which works well for most adults. However, some people function well on 4 cycles (about 6 hours), while others need 6 or 7 cycles (8 to 10 hours).',
          'Pay attention to how you feel after trying different cycle counts. If you consistently wake up feeling refreshed with 4 cycles, that might be your natural need. If you need 7 cycles to feel good, that\'s also normal. The goal is to find what works for your body.',
          'Remember that these are timing recommendations, not guarantees. Factors like stress, illness, alcohol, and changes in routine can affect sleep quality regardless of timing. Use the calculator as a guide, but always prioritize listening to your body\'s signals.',
        ],
      },
    ],
  },
  'pt-br': {
    title: 'Como Esta Calculadora de Sono Funciona',
    sections: [
      {
        heading: 'Entendendo os ciclos do sono',
        paragraphs: [
          'Os ciclos do sono são o ritmo natural que seu corpo segue durante o sono. Cada ciclo normalmente dura cerca de 90 minutos, embora isso possa variar entre 80 e 100 minutos dependendo do indivíduo. Durante um ciclo, você passa por vários estágios: sono leve (estágios 1 e 2), sono profundo (estágio 3) e sono REM (movimento rápido dos olhos).',
          'Os primeiros ciclos da noite contêm mais sono profundo, que é quando seu corpo repara tecidos, fortalece o sistema imunológico e consolida memórias. À medida que a noite progride, o sono profundo diminui e o sono REM aumenta. Esse padrão explica por que o momento do seu despertar importa—acordar durante o sono leve parece natural, enquanto acordar durante o sono profundo pode deixá-lo grogue.',
        ],
      },
      {
        heading: 'Latência do início do sono',
        paragraphs: [
          'A latência do início do sono é o tempo que você leva para adormecer depois de se deitar. Para a maioria das pessoas, isso varia de 10 a 20 minutos, embora possa ser mais longo se você estiver estressado, tiver consumido cafeína recentemente ou se seu ambiente de sono não for ideal.',
          'O SleepInTime leva em conta esse atraso em seus cálculos. Quando você define uma hora de dormir, a calculadora adiciona seu tempo típico de início do sono antes de começar a contagem de ciclos. Isso garante que suas recomendações de hora de acordar se alinhem com os limites reais dos ciclos, não apenas com sua hora de dormir pretendida.',
          'Você pode ajustar o tempo de início do sono nas configurações da calculadora se souber que sua média pessoal é diferente dos 15 minutos padrão.',
        ],
      },
      {
        heading: 'Como os cálculos são feitos',
        paragraphs: [
          'A calculadora funciona em duas direções. Se você escolher "Ir para a cama às", você insere sua hora de dormir desejada, e a ferramenta calcula para frente através de ciclos completos de 90 minutos para sugerir horários ideais de despertar. Se você escolher "Acordar às", ela funciona para trás a partir do seu horário de despertar para sugerir horários de dormir que alinharão seu despertar com o final de um ciclo.',
          'Para cada cálculo, a ferramenta adiciona seu tempo de início do sono, depois adiciona ciclos completos. Ela normalmente sugere de 3 a 8 ciclos, com 5 ciclos (cerca de 7,5 horas mais o início do sono) sendo a recomendação mais comum. Isso dá a você sono profundo suficiente para restauração física e sono REM suficiente para processamento mental.',
          'A opção "Dormir agora" usa seu horário atual como ponto de partida, o que é útil se você estiver pronto para dormir imediatamente.',
        ],
      },
      {
        heading: 'Como interpretar as recomendações',
        paragraphs: [
          'A calculadora mostra várias opções porque as necessidades individuais de sono variam. A opção "RECOMENDADO" geralmente é de 5 ciclos, o que funciona bem para a maioria dos adultos. No entanto, algumas pessoas funcionam bem com 4 ciclos (cerca de 6 horas), enquanto outras precisam de 6 ou 7 ciclos (8 a 10 horas).',
          'Preste atenção em como você se sente depois de tentar diferentes contagens de ciclos. Se você consistentemente acordar se sentindo revigorado com 4 ciclos, essa pode ser sua necessidade natural. Se você precisar de 7 ciclos para se sentir bem, isso também é normal. O objetivo é encontrar o que funciona para seu corpo.',
          'Lembre-se de que essas são recomendações de tempo, não garantias. Fatores como estresse, doença, álcool e mudanças na rotina podem afetar a qualidade do sono independentemente do tempo. Use a calculadora como guia, mas sempre priorize ouvir os sinais do seu corpo.',
        ],
      },
    ],
  },
  es: {
    title: 'Cómo Funciona Esta Calculadora de Sueño',
    sections: [
      {
        heading: 'Entendiendo los ciclos del sueño',
        paragraphs: [
          'Los ciclos del sueño son el ritmo natural que tu cuerpo sigue durante el sueño. Cada ciclo típicamente dura aproximadamente 90 minutos, aunque esto puede variar entre 80 y 100 minutos dependiendo del individuo. Durante un ciclo, pasas por varias etapas: sueño ligero (etapas 1 y 2), sueño profundo (etapa 3) y sueño REM (movimiento rápido de ojos).',
          'Los primeros ciclos de la noche contienen más sueño profundo, que es cuando tu cuerpo repara tejidos, fortalece el sistema inmunológico y consolida recuerdos. A medida que avanza la noche, el sueño profundo disminuye y el sueño REM aumenta. Este patrón explica por qué el momento de tu despertar importa—despertar durante el sueño ligero se siente natural, mientras que despertar durante el sueño profundo puede dejarte aturdido.',
        ],
      },
      {
        heading: 'Latencia del inicio del sueño',
        paragraphs: [
          'La latencia del inicio del sueño es el tiempo que te toma quedarte dormido después de acostarte. Para la mayoría de las personas, esto varía de 10 a 20 minutos, aunque puede ser más largo si estás estresado, has consumido cafeína recientemente o si tu ambiente de sueño no es óptimo.',
          'SleepInTime tiene en cuenta este retraso en sus cálculos. Cuando estableces una hora de acostarte, la calculadora agrega tu tiempo típico de inicio del sueño antes de comenzar el conteo de ciclos. Esto asegura que tus recomendaciones de hora de despertar se alineen con los límites reales de los ciclos, no solo con tu hora de acostarte prevista.',
          'Puedes ajustar el tiempo de inicio del sueño en la configuración de la calculadora si sabes que tu promedio personal es diferente de los 15 minutos predeterminados.',
        ],
      },
      {
        heading: 'Cómo se hacen los cálculos',
        paragraphs: [
          'La calculadora funciona en dos direcciones. Si eliges "Acostarse a las", ingresas tu hora de acostarte deseada, y la herramienta calcula hacia adelante a través de ciclos completos de 90 minutos para sugerir horarios óptimos de despertar. Si eliges "Despertar a las", funciona hacia atrás desde tu hora de despertar para sugerir horas de acostarte que alinearán tu despertar con el final de un ciclo.',
          'Para cada cálculo, la herramienta agrega tu tiempo de inicio del sueño, luego agrega ciclos completos. Normalmente sugiere de 3 a 8 ciclos, con 5 ciclos (aproximadamente 7.5 horas más el inicio del sueño) siendo la recomendación más común. Esto te da suficiente sueño profundo para restauración física y suficiente sueño REM para procesamiento mental.',
          'La opción "Dormir ahora" usa tu hora actual como punto de partida, lo cual es útil si estás listo para dormir inmediatamente.',
        ],
      },
      {
        heading: 'Cómo interpretar las recomendaciones',
        paragraphs: [
          'La calculadora muestra múltiples opciones porque las necesidades individuales de sueño varían. La opción "RECOMENDADO" generalmente es de 5 ciclos, lo que funciona bien para la mayoría de los adultos. Sin embargo, algunas personas funcionan bien con 4 ciclos (aproximadamente 6 horas), mientras que otras necesitan 6 o 7 ciclos (8 a 10 horas).',
          'Presta atención a cómo te sientes después de probar diferentes conteos de ciclos. Si consistentemente te despiertas sintiéndote renovado con 4 ciclos, esa podría ser tu necesidad natural. Si necesitas 7 ciclos para sentirte bien, eso también es normal. El objetivo es encontrar lo que funciona para tu cuerpo.',
          'Recuerda que estas son recomendaciones de tiempo, no garantías. Factores como el estrés, la enfermedad, el alcohol y los cambios en la rutina pueden afectar la calidad del sueño independientemente del tiempo. Usa la calculadora como guía, pero siempre prioriza escuchar las señales de tu cuerpo.',
        ],
      },
    ],
  },
  fr: {
    title: 'Comment Cette Calculatrice de Sommeil Fonctionne',
    sections: [
      {
        heading: 'Comprendre les cycles du sommeil',
        paragraphs: [
          'Les cycles du sommeil sont le rythme naturel que votre corps suit pendant le sommeil. Chaque cycle dure généralement environ 90 minutes, bien que cela puisse varier entre 80 et 100 minutes selon l\'individu. Pendant un cycle, vous passez par plusieurs stades : sommeil léger (stades 1 et 2), sommeil profond (stade 3) et sommeil paradoxal (mouvement rapide des yeux).',
          'Les premiers cycles de la nuit contiennent plus de sommeil profond, qui est le moment où votre corps répare les tissus, renforce le système immunitaire et consolide les souvenirs. Au fur et à mesure que la nuit progresse, le sommeil profond diminue et le sommeil paradoxal augmente. Ce modèle explique pourquoi le moment de votre réveil compte—se réveiller pendant le sommeil léger semble naturel, tandis que se réveiller pendant le sommeil profond peut vous laisser groggy.',
        ],
      },
      {
        heading: 'Latence d\'endormissement',
        paragraphs: [
          'La latence d\'endormissement est le temps qu\'il vous faut pour vous endormir après vous être couché. Pour la plupart des gens, cela varie de 10 à 20 minutes, bien que cela puisse être plus long si vous êtes stressé, avez consommé de la caféine récemment ou si votre environnement de sommeil n\'est pas optimal.',
          'SleepInTime tient compte de ce délai dans ses calculs. Lorsque vous définissez une heure de coucher, le calculateur ajoute votre temps d\'endormissement typique avant de commencer le décompte des cycles. Cela garantit que vos recommandations d\'heure de réveil s\'alignent avec les limites réelles des cycles, pas seulement avec votre heure de coucher prévue.',
          'Vous pouvez ajuster le temps d\'endormissement dans les paramètres du calculateur si vous savez que votre moyenne personnelle est différente des 15 minutes par défaut.',
        ],
      },
      {
        heading: 'Comment les calculs sont effectués',
        paragraphs: [
          'Le calculateur fonctionne dans deux directions. Si vous choisissez "Se coucher à", vous entrez votre heure de coucher souhaitée, et l\'outil calcule vers l\'avant à travers des cycles complets de 90 minutes pour suggérer des heures de réveil optimales. Si vous choisissez "Se réveiller à", il fonctionne à rebours à partir de votre heure de réveil pour suggérer des heures de coucher qui aligneront votre réveil avec la fin d\'un cycle.',
          'Pour chaque calcul, l\'outil ajoute votre temps d\'endormissement, puis ajoute des cycles complets. Il suggère généralement de 3 à 8 cycles, avec 5 cycles (environ 7,5 heures plus l\'endormissement) étant la recommandation la plus courante. Cela vous donne assez de sommeil profond pour la restauration physique et assez de sommeil paradoxal pour le traitement mental.',
          'L\'option "Dormir maintenant" utilise votre heure actuelle comme point de départ, ce qui est utile si vous êtes prêt à dormir immédiatement.',
        ],
      },
      {
        heading: 'Comment interpréter les recommandations',
        paragraphs: [
          'Le calculateur montre plusieurs options car les besoins individuels de sommeil varient. L\'option "RECOMMANDÉ" est généralement de 5 cycles, ce qui fonctionne bien pour la plupart des adultes. Cependant, certaines personnes fonctionnent bien avec 4 cycles (environ 6 heures), tandis que d\'autres ont besoin de 6 ou 7 cycles (8 à 10 heures).',
          'Faites attention à la façon dont vous vous sentez après avoir essayé différents nombres de cycles. Si vous vous réveillez constamment en vous sentant rafraîchi avec 4 cycles, cela pourrait être votre besoin naturel. Si vous avez besoin de 7 cycles pour vous sentir bien, c\'est aussi normal. L\'objectif est de trouver ce qui fonctionne pour votre corps.',
          'N\'oubliez pas que ce sont des recommandations de timing, pas des garanties. Des facteurs comme le stress, la maladie, l\'alcool et les changements de routine peuvent affecter la qualité du sommeil indépendamment du timing. Utilisez le calculateur comme guide, mais priorisez toujours l\'écoute des signaux de votre corps.',
        ],
      },
    ],
  },
  zh: {
    title: '这个睡眠计算器的工作原理',
    sections: [
      {
        heading: '了解睡眠周期',
        paragraphs: [
          '睡眠周期是您的身体在睡眠期间遵循的自然节律。每个周期通常持续约90分钟，尽管这可能因个体而异，在80到100分钟之间。在一个周期中，您会经历几个阶段：浅睡眠（阶段1和2）、深睡眠（阶段3）和快速眼动睡眠。',
          '夜晚的前几个周期包含更多的深睡眠，这是您的身体修复组织、增强免疫系统和巩固记忆的时候。随着夜晚的进行，深睡眠减少，快速眼动睡眠增加。这种模式解释了为什么您的起床时间很重要——在浅睡眠期间醒来感觉自然，而在深睡眠期间醒来可能会让您感到昏昏沉沉。',
        ],
      },
      {
        heading: '入睡潜伏期',
        paragraphs: [
          '入睡潜伏期是您上床后入睡所需的时间。对于大多数人来说，这从10到20分钟不等，尽管如果您压力大、最近摄入咖啡因或睡眠环境不理想，可能会更长。',
          'SleepInTime在其计算中考虑了这种延迟。当您设置就寝时间时，计算器在开始周期计数之前会添加您典型的入睡时间。这确保您的起床时间建议与实际周期边界对齐，而不仅仅是您预期的就寝时间。',
          '如果您知道您的个人平均值与默认的15分钟不同，可以在计算器设置中调整入睡时间。',
        ],
      },
      {
        heading: '如何进行计算',
        paragraphs: [
          '计算器在两个方向上工作。如果您选择"就寝时间"，您输入您想要的就寝时间，工具会向前计算完整的90分钟周期，以建议最佳的起床时间。如果您选择"起床时间"，它会从您的起床时间向后工作，建议将您的起床与周期结束对齐的就寝时间。',
          '对于每次计算，工具会添加您的入睡时间，然后添加完整周期。它通常建议3到8个周期，其中5个周期（约7.5小时加上入睡时间）是最常见的建议。这为您提供足够的深睡眠进行身体恢复，以及足够的快速眼动睡眠进行心理处理。',
          '"现在睡觉"选项使用您当前的时间作为起点，如果您准备立即睡觉，这很有用。',
        ],
      },
      {
        heading: '如何解释建议',
        paragraphs: [
          '计算器显示多个选项，因为个人睡眠需求不同。"推荐"选项通常是5个周期，这对大多数成年人来说效果很好。但是，有些人在4个周期（约6小时）时表现良好，而其他人需要6或7个周期（8到10小时）。',
          '注意在尝试不同周期数后您的感受。如果您在4个周期时持续醒来感到精神焕发，那可能是您的自然需求。如果您需要7个周期才能感觉良好，这也是正常的。目标是找到适合您身体的方法。',
          '请记住，这些是时间建议，而不是保证。压力、疾病、酒精和日常生活的变化等因素可能会影响睡眠质量，无论时间如何。将计算器用作指南，但始终优先倾听您身体的信号。',
        ],
      },
    ],
  },
};

export const HowItWorks: React.FC = () => {
  const [language] = useLanguage();
  const pageContent = content[language];

  return (
    <div className="relative w-full bg-[#030617] text-white font-sans">
      <main className="relative z-10 pt-20 pb-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8" style={{ fontWeight: '200' }}>
          {pageContent.title}
        </h1>

        {pageContent.sections.map((section, index) => (
          <section key={index} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4" style={{ fontWeight: '300' }}>
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph, pIndex) => (
              <p
                key={pIndex}
                className="text-white/70 leading-relaxed mb-4 text-base md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </section>
        ))}

        <AdSlot id="how-it-works-ad-1" />
      </main>
    </div>
  );
};

