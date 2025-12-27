import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { Language } from '../i18n/translations';
import { cn } from '@/lib/utils';
import { AdSlot } from '../components/AdSlot';

interface FAQItem {
  question: string;
  answer: string;
}

const faqContent: Record<Language, {
  title: string;
  description: string;
  items: FAQItem[];
}> = {
  en: {
    title: 'Sleep Calculator FAQ',
    description: 'Common questions about sleep cycles and SleepInTime',
    items: [
      {
        question: 'How long is a sleep cycle?',
        answer: 'A typical sleep cycle lasts about 90 minutes, though this can vary between 80 and 100 minutes depending on the individual. The calculator uses 90 minutes as the default, but you can adjust this in the settings if you know your personal cycle length differs.',
      },
      {
        question: 'How accurate are the recommendations?',
        answer: 'The recommendations are based on well-established sleep science about 90-minute cycles. However, individual sleep needs and cycle lengths vary. The calculator provides timing guidance, but factors like stress, illness, alcohol, and sleep quality can affect how you feel regardless of timing. Use it as a helpful guide, not a guarantee.',
      },
      {
        question: 'Can I use this for naps?',
        answer: 'Yes, but with some considerations. For short naps (20-30 minutes), you\'ll stay in light sleep and avoid sleep inertia. For longer naps, aim for one complete 90-minute cycle to wake during light sleep. Naps longer than 90 minutes but shorter than a full cycle can leave you groggy.',
      },
      {
        question: 'What if I work night shifts?',
        answer: 'The same principles apply—your body still follows 90-minute cycles regardless of when you sleep. The key is consistency. Try to maintain the same sleep schedule on your days off, and use the calculator to align your sleep times with cycle boundaries. Blackout curtains and a quiet environment can help signal to your body that it\'s time to sleep.',
      },
      {
        question: 'Why do I feel different after the same amount of sleep?',
        answer: 'Sleep quality matters as much as timing. Even if you wake at the right point in your cycle, factors like stress, room temperature, noise, alcohol, and sleep disorders can affect how rested you feel. The calculator helps with timing, but good sleep hygiene is essential for quality rest.',
      },
      {
        question: 'Do sleep cycles change with age?',
        answer: 'Yes, sleep patterns change throughout life. Older adults tend to have shorter deep sleep phases and may wake more frequently. However, the 90-minute cycle structure generally remains consistent. The calculator can still be useful, though you may find you need to adjust the number of cycles or sleep onset time based on your experience.',
      },
      {
        question: 'What\'s the difference between REM and deep sleep?',
        answer: 'Deep sleep (stage 3) is when your body repairs tissues, strengthens the immune system, and consolidates physical memories. REM sleep is when you dream and your brain processes emotional memories and learning. Both are essential, and the calculator helps ensure you get adequate amounts of both by timing your sleep correctly.',
      },
      {
        question: 'Can I change my sleep cycle length?',
        answer: 'Your natural cycle length is largely determined by genetics and age, so it\'s difficult to change significantly. However, you can adjust the calculator settings to match your personal cycle length if you\'ve noticed through tracking or experience that yours differs from 90 minutes.',
      },
      {
        question: 'What if I can\'t fall asleep at the suggested time?',
        answer: 'The calculator provides timing guidance, but it can\'t account for insomnia, stress, or other factors that prevent sleep. If you consistently can\'t fall asleep at the suggested time, focus on sleep hygiene first—consistent schedule, dark room, cool temperature, and avoiding screens before bed. The timing tool works best when combined with good sleep habits.',
      },
      {
        question: 'Is 5 cycles really the best recommendation?',
        answer: 'Five cycles (about 7.5 hours plus sleep onset time) works well for most adults, but individual needs vary. Some people function well on 4 cycles (about 6 hours), while others need 6 or 7 cycles (8 to 10 hours). Pay attention to how you feel after different cycle counts and adjust based on what works for your body.',
      },
      {
        question: 'Does this work for people with sleep disorders?',
        answer: 'SleepInTime is a timing tool based on general sleep science. It\'s not a treatment for sleep disorders. If you have a diagnosed sleep disorder like sleep apnea, insomnia, or restless leg syndrome, consult with a healthcare provider. The calculator may still provide useful timing guidance, but it should not replace medical advice.',
      },
    ],
  },
  'pt-br': {
    title: 'Perguntas Frequentes da Calculadora de Sono',
    description: 'Perguntas comuns sobre ciclos de sono e SleepInTime',
    items: [
      {
        question: 'Quanto tempo dura um ciclo de sono?',
        answer: 'Um ciclo típico de sono dura cerca de 90 minutos, embora isso possa variar entre 80 e 100 minutos dependendo do indivíduo. A calculadora usa 90 minutos como padrão, mas você pode ajustar isso nas configurações se souber que seu comprimento de ciclo pessoal difere.',
      },
      {
        question: 'Quão precisas são as recomendações?',
        answer: 'As recomendações são baseadas em ciência do sono bem estabelecida sobre ciclos de 90 minutos. No entanto, as necessidades individuais de sono e os comprimentos dos ciclos variam. A calculadora fornece orientação de tempo, mas fatores como estresse, doença, álcool e qualidade do sono podem afetar como você se sente independentemente do tempo. Use-a como um guia útil, não uma garantia.',
      },
      {
        question: 'Posso usar isso para sonecas?',
        answer: 'Sim, mas com algumas considerações. Para sonecas curtas (20-30 minutos), você permanecerá em sono leve e evitará inércia do sono. Para sonecas mais longas, procure um ciclo completo de 90 minutos para acordar durante o sono leve. Sonecas mais longas que 90 minutos, mas mais curtas que um ciclo completo, podem deixá-lo grogue.',
      },
      {
        question: 'E se eu trabalho em turnos noturnos?',
        answer: 'Os mesmos princípios se aplicam—seu corpo ainda segue ciclos de 90 minutos independentemente de quando você dorme. A chave é consistência. Tente manter o mesmo horário de sono nos seus dias de folga e use a calculadora para alinhar seus horários de sono com os limites dos ciclos. Cortinas blackout e um ambiente silencioso podem ajudar a sinalizar ao seu corpo que é hora de dormir.',
      },
      {
        question: 'Por que me sinto diferente após a mesma quantidade de sono?',
        answer: 'A qualidade do sono importa tanto quanto o tempo. Mesmo se você acordar no ponto certo do seu ciclo, fatores como estresse, temperatura do quarto, ruído, álcool e distúrbios do sono podem afetar o quão descansado você se sente. A calculadora ajuda com o tempo, mas uma boa higiene do sono é essencial para um descanso de qualidade.',
      },
      {
        question: 'Os ciclos de sono mudam com a idade?',
        answer: 'Sim, os padrões de sono mudam ao longo da vida. Adultos mais velhos tendem a ter fases de sono profundo mais curtas e podem acordar com mais frequência. No entanto, a estrutura do ciclo de 90 minutos geralmente permanece consistente. A calculadora ainda pode ser útil, embora você possa descobrir que precisa ajustar o número de ciclos ou o tempo de início do sono com base na sua experiência.',
      },
      {
        question: 'Qual é a diferença entre REM e sono profundo?',
        answer: 'O sono profundo (estágio 3) é quando seu corpo repara tecidos, fortalece o sistema imunológico e consolida memórias físicas. O sono REM é quando você sonha e seu cérebro processa memórias emocionais e aprendizado. Ambos são essenciais, e a calculadora ajuda a garantir que você obtenha quantidades adequadas de ambos cronometrando seu sono corretamente.',
      },
      {
        question: 'Posso mudar o comprimento do meu ciclo de sono?',
        answer: 'O comprimento natural do seu ciclo é amplamente determinado por genética e idade, então é difícil mudar significativamente. No entanto, você pode ajustar as configurações da calculadora para corresponder ao seu comprimento de ciclo pessoal se notou através de rastreamento ou experiência que o seu difere de 90 minutos.',
      },
      {
        question: 'E se eu não conseguir adormecer no horário sugerido?',
        answer: 'A calculadora fornece orientação de tempo, mas não pode contabilizar insônia, estresse ou outros fatores que impedem o sono. Se você consistentemente não consegue adormecer no horário sugerido, concentre-se primeiro na higiene do sono—horário consistente, quarto escuro, temperatura fresca e evitar telas antes de dormir. A ferramenta de tempo funciona melhor quando combinada com bons hábitos de sono.',
      },
      {
        question: '5 ciclos são realmente a melhor recomendação?',
        answer: 'Cinco ciclos (cerca de 7,5 horas mais o tempo de início do sono) funcionam bem para a maioria dos adultos, mas as necessidades individuais variam. Algumas pessoas funcionam bem com 4 ciclos (cerca de 6 horas), enquanto outras precisam de 6 ou 7 ciclos (8 a 10 horas). Preste atenção em como você se sente após diferentes contagens de ciclos e ajuste com base no que funciona para seu corpo.',
      },
      {
        question: 'Isso funciona para pessoas com distúrbios do sono?',
        answer: 'O SleepInTime é uma ferramenta de tempo baseada em ciência do sono geral. Não é um tratamento para distúrbios do sono. Se você tem um distúrbio do sono diagnosticado como apneia do sono, insônia ou síndrome das pernas inquietas, consulte um profissional de saúde. A calculadora ainda pode fornecer orientação útil de tempo, mas não deve substituir aconselhamento médico.',
      },
    ],
  },
  es: {
    title: 'Preguntas Frecuentes de la Calculadora de Sueño',
    description: 'Preguntas comunes sobre ciclos de sueño y SleepInTime',
    items: [
      {
        question: '¿Cuánto dura un ciclo de sueño?',
        answer: 'Un ciclo típico de sueño dura aproximadamente 90 minutos, aunque esto puede variar entre 80 y 100 minutos dependiendo del individuo. La calculadora usa 90 minutos como predeterminado, pero puedes ajustar esto en la configuración si sabes que tu longitud de ciclo personal difiere.',
      },
      {
        question: '¿Qué tan precisas son las recomendaciones?',
        answer: 'Las recomendaciones se basan en ciencia del sueño bien establecida sobre ciclos de 90 minutos. Sin embargo, las necesidades individuales de sueño y las longitudes de los ciclos varían. La calculadora proporciona orientación de tiempo, pero factores como el estrés, la enfermedad, el alcohol y la calidad del sueño pueden afectar cómo te sientes independientemente del tiempo. Úsala como una guía útil, no una garantía.',
      },
      {
        question: '¿Puedo usar esto para siestas?',
        answer: 'Sí, pero con algunas consideraciones. Para siestas cortas (20-30 minutos), permanecerás en sueño ligero y evitarás la inercia del sueño. Para siestas más largas, apunta a un ciclo completo de 90 minutos para despertar durante el sueño ligero. Las siestas más largas que 90 minutos pero más cortas que un ciclo completo pueden dejarte aturdido.',
      },
      {
        question: '¿Qué pasa si trabajo en turnos nocturnos?',
        answer: 'Los mismos principios se aplican—tu cuerpo todavía sigue ciclos de 90 minutos independientemente de cuándo duermas. La clave es la consistencia. Trata de mantener el mismo horario de sueño en tus días libres y usa la calculadora para alinear tus horas de sueño con los límites de los ciclos. Cortinas opacas y un ambiente silencioso pueden ayudar a señalar a tu cuerpo que es hora de dormir.',
      },
      {
        question: '¿Por qué me siento diferente después de la misma cantidad de sueño?',
        answer: 'La calidad del sueño importa tanto como el tiempo. Incluso si te despiertas en el punto correcto de tu ciclo, factores como el estrés, la temperatura de la habitación, el ruido, el alcohol y los trastornos del sueño pueden afectar qué tan descansado te sientes. La calculadora ayuda con el tiempo, pero una buena higiene del sueño es esencial para un descanso de calidad.',
      },
      {
        question: '¿Los ciclos de sueño cambian con la edad?',
        answer: 'Sí, los patrones de sueño cambian a lo largo de la vida. Los adultos mayores tienden a tener fases de sueño profundo más cortas y pueden despertar con más frecuencia. Sin embargo, la estructura del ciclo de 90 minutos generalmente permanece consistente. La calculadora aún puede ser útil, aunque puedes descubrir que necesitas ajustar el número de ciclos o el tiempo de inicio del sueño según tu experiencia.',
      },
      {
        question: '¿Cuál es la diferencia entre REM y sueño profundo?',
        answer: 'El sueño profundo (etapa 3) es cuando tu cuerpo repara tejidos, fortalece el sistema inmunológico y consolida recuerdos físicos. El sueño REM es cuando sueñas y tu cerebro procesa recuerdos emocionales y aprendizaje. Ambos son esenciales, y la calculadora ayuda a asegurar que obtengas cantidades adecuadas de ambos cronometrando tu sueño correctamente.',
      },
      {
        question: '¿Puedo cambiar la longitud de mi ciclo de sueño?',
        answer: 'La longitud natural de tu ciclo está determinada en gran medida por la genética y la edad, por lo que es difícil cambiarla significativamente. Sin embargo, puedes ajustar la configuración de la calculadora para que coincida con tu longitud de ciclo personal si has notado a través del seguimiento o la experiencia que la tuya difiere de 90 minutos.',
      },
      {
        question: '¿Qué pasa si no puedo quedarme dormido a la hora sugerida?',
        answer: 'La calculadora proporciona orientación de tiempo, pero no puede tener en cuenta el insomnio, el estrés u otros factores que impiden el sueño. Si consistentemente no puedes quedarte dormido a la hora sugerida, concéntrate primero en la higiene del sueño—horario consistente, habitación oscura, temperatura fresca y evitar pantallas antes de acostarte. La herramienta de tiempo funciona mejor cuando se combina con buenos hábitos de sueño.',
      },
      {
        question: '¿Son realmente 5 ciclos la mejor recomendación?',
        answer: 'Cinco ciclos (aproximadamente 7.5 horas más el tiempo de inicio del sueño) funcionan bien para la mayoría de los adultos, pero las necesidades individuales varían. Algunas personas funcionan bien con 4 ciclos (aproximadamente 6 horas), mientras que otras necesitan 6 o 7 ciclos (8 a 10 horas). Presta atención a cómo te sientes después de diferentes conteos de ciclos y ajusta según lo que funcione para tu cuerpo.',
      },
      {
        question: '¿Esto funciona para personas con trastornos del sueño?',
        answer: 'SleepInTime es una herramienta de tiempo basada en ciencia del sueño general. No es un tratamiento para trastornos del sueño. Si tienes un trastorno del sueño diagnosticado como apnea del sueño, insomnio o síndrome de piernas inquietas, consulta con un proveedor de atención médica. La calculadora aún puede proporcionar orientación útil de tiempo, pero no debe reemplazar el consejo médico.',
      },
    ],
  },
  fr: {
    title: 'Questions Fréquemment Posées sur la Calculatrice de Sommeil',
    description: 'Questions courantes sur les cycles du sommeil et SleepInTime',
    items: [
      {
        question: 'Combien de temps dure un cycle de sommeil?',
        answer: 'Un cycle de sommeil typique dure environ 90 minutes, bien que cela puisse varier entre 80 et 100 minutes selon l\'individu. Le calculateur utilise 90 minutes par défaut, mais vous pouvez ajuster cela dans les paramètres si vous savez que votre longueur de cycle personnelle diffère.',
      },
      {
        question: 'Quelle est la précision des recommandations?',
        answer: 'Les recommandations sont basées sur une science du sommeil bien établie concernant les cycles de 90 minutes. Cependant, les besoins individuels de sommeil et les longueurs de cycles varient. Le calculateur fournit des conseils de timing, mais des facteurs comme le stress, la maladie, l\'alcool et la qualité du sommeil peuvent affecter comment vous vous sentez indépendamment du timing. Utilisez-le comme guide utile, pas comme garantie.',
      },
      {
        question: 'Puis-je utiliser cela pour les siestes?',
        answer: 'Oui, mais avec quelques considérations. Pour les courtes siestes (20-30 minutes), vous resterez en sommeil léger et éviterez l\'inertie du sommeil. Pour les siestes plus longues, visez un cycle complet de 90 minutes pour vous réveiller pendant le sommeil léger. Les siestes plus longues que 90 minutes mais plus courtes qu\'un cycle complet peuvent vous laisser groggy.',
      },
      {
        question: 'Et si je travaille en quarts de nuit?',
        answer: 'Les mêmes principes s\'appliquent—votre corps suit toujours des cycles de 90 minutes indépendamment de quand vous dormez. La clé est la cohérence. Essayez de maintenir le même horaire de sommeil pendant vos jours de congé et utilisez le calculateur pour aligner vos heures de sommeil avec les limites des cycles. Les rideaux opaques et un environnement silencieux peuvent aider à signaler à votre corps qu\'il est temps de dormir.',
      },
      {
        question: 'Pourquoi je me sens différent après la même quantité de sommeil?',
        answer: 'La qualité du sommeil compte autant que le timing. Même si vous vous réveillez au bon moment de votre cycle, des facteurs comme le stress, la température de la pièce, le bruit, l\'alcool et les troubles du sommeil peuvent affecter à quel point vous vous sentez reposé. Le calculateur aide avec le timing, mais une bonne hygiène du sommeil est essentielle pour un repos de qualité.',
      },
      {
        question: 'Les cycles de sommeil changent-ils avec l\'âge?',
        answer: 'Oui, les modèles de sommeil changent tout au long de la vie. Les adultes plus âgés ont tendance à avoir des phases de sommeil profond plus courtes et peuvent se réveiller plus fréquemment. Cependant, la structure du cycle de 90 minutes reste généralement cohérente. Le calculateur peut encore être utile, bien que vous puissiez découvrir que vous devez ajuster le nombre de cycles ou le temps d\'endormissement en fonction de votre expérience.',
      },
      {
        question: 'Quelle est la différence entre REM et sommeil profond?',
        answer: 'Le sommeil profond (stade 3) est lorsque votre corps répare les tissus, renforce le système immunitaire et consolide les souvenirs physiques. Le sommeil REM est lorsque vous rêvez et que votre cerveau traite les souvenirs émotionnels et l\'apprentissage. Les deux sont essentiels, et le calculateur aide à s\'assurer que vous obtenez des quantités adéquates des deux en chronométrant votre sommeil correctement.',
      },
      {
        question: 'Puis-je changer la longueur de mon cycle de sommeil?',
        answer: 'La longueur naturelle de votre cycle est largement déterminée par la génétique et l\'âge, il est donc difficile de la changer significativement. Cependant, vous pouvez ajuster les paramètres du calculateur pour correspondre à votre longueur de cycle personnelle si vous avez remarqué par le suivi ou l\'expérience que la vôtre diffère de 90 minutes.',
      },
      {
        question: 'Et si je ne peux pas m\'endormir à l\'heure suggérée?',
        answer: 'Le calculateur fournit des conseils de timing, mais il ne peut pas tenir compte de l\'insomnie, du stress ou d\'autres facteurs qui empêchent le sommeil. Si vous ne pouvez pas systématiquement vous endormir à l\'heure suggérée, concentrez-vous d\'abord sur l\'hygiène du sommeil—horaire cohérent, chambre sombre, température fraîche et éviter les écrans avant le coucher. L\'outil de timing fonctionne mieux lorsqu\'il est combiné avec de bonnes habitudes de sommeil.',
      },
      {
        question: '5 cycles sont-ils vraiment la meilleure recommandation?',
        answer: 'Cinq cycles (environ 7,5 heures plus le temps d\'endormissement) fonctionnent bien pour la plupart des adultes, mais les besoins individuels varient. Certaines personnes fonctionnent bien avec 4 cycles (environ 6 heures), tandis que d\'autres ont besoin de 6 ou 7 cycles (8 à 10 heures). Faites attention à la façon dont vous vous sentez après différents nombres de cycles et ajustez en fonction de ce qui fonctionne pour votre corps.',
      },
      {
        question: 'Cela fonctionne-t-il pour les personnes atteintes de troubles du sommeil?',
        answer: 'SleepInTime est un outil de timing basé sur la science générale du sommeil. Ce n\'est pas un traitement pour les troubles du sommeil. Si vous avez un trouble du sommeil diagnostiqué comme l\'apnée du sommeil, l\'insomnie ou le syndrome des jambes sans repos, consultez un professionnel de la santé. Le calculateur peut encore fournir des conseils de timing utiles, mais il ne doit pas remplacer les conseils médicaux.',
      },
    ],
  },
  zh: {
    title: '睡眠计算器常见问题',
    description: '关于睡眠周期和SleepInTime的常见问题',
    items: [
      {
        question: '一个睡眠周期有多长？',
        answer: '典型的睡眠周期持续约90分钟，尽管这可能因个体而异，在80到100分钟之间。计算器默认使用90分钟，但如果您知道您的个人周期长度不同，可以在设置中调整。',
      },
      {
        question: '建议有多准确？',
        answer: '建议基于关于90分钟周期的完善的睡眠科学。但是，个人睡眠需求和周期长度会有所不同。计算器提供时间指导，但压力、疾病、酒精和睡眠质量等因素可能会影响您的感受，无论时间如何。将其用作有用的指南，而不是保证。',
      },
      {
        question: '我可以将其用于小睡吗？',
        answer: '可以，但需要考虑一些因素。对于短时间小睡（20-30分钟），您将保持在浅睡眠状态，避免睡眠惯性。对于更长时间的小睡，目标是完整的90分钟周期，以便在浅睡眠期间醒来。超过90分钟但短于完整周期的小睡可能会让您感到昏昏沉沉。',
      },
      {
        question: '如果我上夜班怎么办？',
        answer: '同样的原则适用—无论何时睡觉，您的身体仍然遵循90分钟周期。关键是保持一致性。尝试在休息日保持相同的睡眠时间表，并使用计算器将您的睡眠时间与周期边界对齐。遮光窗帘和安静的环境可以帮助向您的身体发出该睡觉的信号。',
      },
      {
        question: '为什么在相同睡眠量后我感觉不同？',
        answer: '睡眠质量与时间同样重要。即使您在周期的正确点醒来，压力、室温、噪音、酒精和睡眠障碍等因素也可能影响您感到的休息程度。计算器有助于时间安排，但良好的睡眠卫生对于优质休息至关重要。',
      },
      {
        question: '睡眠周期会随着年龄变化吗？',
        answer: '是的，睡眠模式在一生中会发生变化。老年人往往有更短的深睡眠阶段，可能更频繁地醒来。但是，90分钟周期结构通常保持一致。计算器仍然可能有用，尽管您可能会发现需要根据经验调整周期数或入睡时间。',
      },
      {
        question: 'REM和深睡眠有什么区别？',
        answer: '深睡眠（阶段3）是您的身体修复组织、增强免疫系统和巩固身体记忆的时候。快速眼动睡眠是您做梦和大脑处理情感记忆和学习的时候。两者都是必不可少的，计算器通过正确计时您的睡眠来帮助确保您获得足够的两种睡眠。',
      },
      {
        question: '我可以改变我的睡眠周期长度吗？',
        answer: '您的自然周期长度主要由遗传和年龄决定，因此很难显著改变。但是，如果您通过跟踪或经验发现您的周期长度与90分钟不同，可以调整计算器设置以匹配您的个人周期长度。',
      },
      {
        question: '如果我在建议的时间无法入睡怎么办？',
        answer: '计算器提供时间指导，但无法考虑失眠、压力或其他阻止睡眠的因素。如果您持续无法在建议的时间入睡，首先专注于睡眠卫生—一致的时间表、黑暗的房间、凉爽的温度以及睡前避免屏幕。时间工具在与良好睡眠习惯结合时效果最佳。',
      },
      {
        question: '5个周期真的是最好的建议吗？',
        answer: '五个周期（约7.5小时加上入睡时间）对大多数成年人来说效果很好，但个人需求不同。有些人在4个周期（约6小时）时表现良好，而其他人需要6或7个周期（8到10小时）。注意在不同周期数后您的感受，并根据适合您身体的情况进行调整。',
      },
      {
        question: '这对有睡眠障碍的人有效吗？',
        answer: 'SleepInTime是基于一般睡眠科学的时间工具。它不是睡眠障碍的治疗方法。如果您有诊断的睡眠障碍，如睡眠呼吸暂停、失眠或不宁腿综合征，请咨询医疗保健提供者。计算器仍可能提供有用的时间指导，但不应该取代医疗建议。',
      },
    ],
  },
};

export const FAQ: React.FC = () => {
  const [language] = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const pageContent = faqContent[language];

  // Generate JSON-LD schema for FAQPage
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pageContent.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="relative w-full bg-[#030617] text-white font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="relative z-10 pt-20 pb-8 md:pb-20 px-4 md:px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontWeight: '200' }}>
          {pageContent.title}
        </h1>
        <p className="text-white/60 mb-12 text-lg">{pageContent.description}</p>

        <div className="space-y-2">
          {pageContent.items.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors text-left"
              >
                <span className="font-semibold text-lg pr-4">{item.question}</span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 flex-shrink-0 transition-transform',
                    openIndex === index && 'rotate-180'
                  )}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-white/70 leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <AdSlot id="faq-ad-1" />
      </main>
    </div>
  );
};

