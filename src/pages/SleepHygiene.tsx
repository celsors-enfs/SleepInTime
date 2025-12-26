import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Language } from '../i18n/translations';
import { AdSlot } from '../components/AdSlot';

const content: Record<Language, {
  title: string;
  sections: Array<{ heading: string; paragraphs: string[] }>;
}> = {
  en: {
    title: 'Sleep Hygiene',
    sections: [
      {
        heading: 'Light exposure and your sleep cycle',
        paragraphs: [
          'Your body\'s internal clock, or circadian rhythm, is heavily influenced by light. Exposure to bright light, especially blue light from screens, in the evening can suppress melatonin production and delay sleep onset. Conversely, getting natural sunlight in the morning helps reset your circadian rhythm and promotes alertness.',
          'To support better sleep timing, try to get 15-30 minutes of natural light exposure within the first hour of waking. In the evening, dim your lights and avoid screens for at least an hour before bed. If you must use devices, consider blue light filters or night mode settings.',
        ],
      },
      {
        heading: 'Caffeine timing matters',
        paragraphs: [
          'Caffeine has a half-life of about 5-6 hours, meaning half of it is still in your system after that time. Drinking coffee or other caffeinated beverages too late in the day can interfere with your ability to fall asleep at your intended bedtime.',
          'As a general guideline, try to avoid caffeine after 2 PM if you plan to sleep around 10 PM. If you\'re sensitive to caffeine, you might need to cut it off even earlier. Remember that caffeine isn\'t just in coffee—it\'s also in tea, chocolate, energy drinks, and some medications.',
        ],
      },
      {
        heading: 'The importance of consistency',
        paragraphs: [
          'Your body thrives on routine. Going to bed and waking up at roughly the same times each day—even on weekends—helps regulate your circadian rhythm. This consistency makes it easier to fall asleep at your intended time and wake up feeling refreshed.',
          'If you need to adjust your sleep schedule, do it gradually. Shift your bedtime by 15-30 minutes each night rather than making large changes all at once. This gives your body time to adapt to the new rhythm.',
        ],
      },
      {
        heading: 'Creating the right environment',
        paragraphs: [
          'Your sleep environment plays a crucial role in sleep quality. Aim for a cool room temperature (around 65-68°F or 18-20°C), as your body temperature naturally drops during sleep. A room that\'s too warm can disrupt this process.',
          'Keep your bedroom dark and quiet. Consider blackout curtains if outside light is an issue, and use earplugs or white noise if you\'re sensitive to sounds. Your bed should be primarily for sleep—avoid working, eating, or watching TV in bed, as this can weaken the mental association between your bed and rest.',
        ],
      },
      {
        heading: 'Pre-sleep routine',
        paragraphs: [
          'A calming pre-sleep routine signals to your body that it\'s time to wind down. This might include reading (a physical book, not a screen), gentle stretching, meditation, or listening to calming music. Avoid stimulating activities like intense exercise, work, or stressful conversations right before bed.',
          'Give yourself time to relax. If you plan to sleep at 10 PM, start your wind-down routine around 9 PM. This buffer time helps your mind and body transition from wakefulness to sleep readiness.',
        ],
      },
      {
        heading: 'Managing stress and anxiety',
        paragraphs: [
          'Stress and anxiety are common sleep disruptors. If worries keep you awake, try writing them down in a journal before bed. This "brain dump" can help clear your mind. Some people find that scheduling a "worry time" earlier in the day helps prevent bedtime anxiety.',
          'Relaxation techniques like deep breathing, progressive muscle relaxation, or guided meditation can also help calm your nervous system before sleep. These practices take time to master, but they can be powerful tools for improving sleep quality.',
        ],
      },
    ],
  },
  'pt-br': {
    title: 'Higiene do Sono',
    sections: [
      {
        heading: 'Exposição à luz e seu ciclo de sono',
        paragraphs: [
          'O relógio interno do seu corpo, ou ritmo circadiano, é fortemente influenciado pela luz. A exposição à luz brilhante, especialmente a luz azul das telas, à noite pode suprimir a produção de melatonina e atrasar o início do sono. Por outro lado, obter luz solar natural pela manhã ajuda a redefinir seu ritmo circadiano e promove o estado de alerta.',
          'Para apoiar um melhor horário de sono, tente obter 15-30 minutos de exposição à luz natural na primeira hora após acordar. À noite, diminua as luzes e evite telas por pelo menos uma hora antes de dormir. Se você precisar usar dispositivos, considere filtros de luz azul ou configurações de modo noturno.',
        ],
      },
      {
        heading: 'O horário da cafeína importa',
        paragraphs: [
          'A cafeína tem uma meia-vida de cerca de 5-6 horas, o que significa que metade dela ainda está em seu sistema após esse tempo. Beber café ou outras bebidas com cafeína muito tarde no dia pode interferir na sua capacidade de adormecer no horário pretendido.',
          'Como diretriz geral, tente evitar cafeína após as 14h se planeja dormir por volta das 22h. Se você é sensível à cafeína, pode precisar cortá-la ainda mais cedo. Lembre-se de que a cafeína não está apenas no café—também está no chá, chocolate, bebidas energéticas e alguns medicamentos.',
        ],
      },
      {
        heading: 'A importância da consistência',
        paragraphs: [
          'Seu corpo prospera com rotina. Ir para a cama e acordar aproximadamente nos mesmos horários todos os dias—mesmo nos fins de semana—ajuda a regular seu ritmo circadiano. Essa consistência facilita adormecer no horário pretendido e acordar se sentindo revigorado.',
          'Se você precisar ajustar seu horário de sono, faça-o gradualmente. Mude sua hora de dormir em 15-30 minutos a cada noite, em vez de fazer grandes mudanças de uma vez. Isso dá ao seu corpo tempo para se adaptar ao novo ritmo.',
        ],
      },
      {
        heading: 'Criando o ambiente certo',
        paragraphs: [
          'Seu ambiente de sono desempenha um papel crucial na qualidade do sono. Procure uma temperatura ambiente fresca (cerca de 18-20°C), pois a temperatura do seu corpo naturalmente cai durante o sono. Um quarto muito quente pode perturbar esse processo.',
          'Mantenha seu quarto escuro e silencioso. Considere cortinas blackout se a luz externa for um problema, e use tampões de ouvido ou ruído branco se você for sensível a sons. Sua cama deve ser principalmente para dormir—evite trabalhar, comer ou assistir TV na cama, pois isso pode enfraquecer a associação mental entre sua cama e o descanso.',
        ],
      },
      {
        heading: 'Rotina pré-sono',
        paragraphs: [
          'Uma rotina calmante pré-sono sinaliza ao seu corpo que é hora de relaxar. Isso pode incluir leitura (um livro físico, não uma tela), alongamento suave, meditação ou ouvir música calmante. Evite atividades estimulantes como exercícios intensos, trabalho ou conversas estressantes logo antes de dormir.',
          'Dê-se tempo para relaxar. Se você planeja dormir às 22h, comece sua rotina de relaxamento por volta das 21h. Esse tempo de buffer ajuda sua mente e corpo a fazer a transição do estado de vigília para a prontidão para o sono.',
        ],
      },
      {
        heading: 'Gerenciando estresse e ansiedade',
        paragraphs: [
          'Estresse e ansiedade são disruptores comuns do sono. Se as preocupações o mantêm acordado, tente escrevê-las em um diário antes de dormir. Esse "despejo cerebral" pode ajudar a limpar sua mente. Algumas pessoas descobrem que agendar um "tempo de preocupação" mais cedo no dia ajuda a prevenir a ansiedade na hora de dormir.',
          'Técnicas de relaxamento como respiração profunda, relaxamento muscular progressivo ou meditação guiada também podem ajudar a acalmar seu sistema nervoso antes do sono. Essas práticas levam tempo para dominar, mas podem ser ferramentas poderosas para melhorar a qualidade do sono.',
        ],
      },
    ],
  },
  es: {
    title: 'Higiene del Sueño',
    sections: [
      {
        heading: 'Exposición a la luz y tu ciclo de sueño',
        paragraphs: [
          'El reloj interno de tu cuerpo, o ritmo circadiano, está fuertemente influenciado por la luz. La exposición a la luz brillante, especialmente la luz azul de las pantallas, por la noche puede suprimir la producción de melatonina y retrasar el inicio del sueño. Por el contrario, obtener luz solar natural por la mañana ayuda a restablecer tu ritmo circadiano y promueve el estado de alerta.',
          'Para apoyar un mejor horario de sueño, intenta obtener 15-30 minutos de exposición a la luz natural en la primera hora después de despertar. Por la noche, atenúa las luces y evita las pantallas durante al menos una hora antes de acostarte. Si debes usar dispositivos, considera filtros de luz azul o configuraciones de modo nocturno.',
        ],
      },
      {
        heading: 'El momento de la cafeína importa',
        paragraphs: [
          'La cafeína tiene una vida media de aproximadamente 5-6 horas, lo que significa que la mitad todavía está en tu sistema después de ese tiempo. Beber café u otras bebidas con cafeína demasiado tarde en el día puede interferir con tu capacidad para quedarte dormido a la hora prevista.',
          'Como pauta general, intenta evitar la cafeína después de las 2 PM si planeas dormir alrededor de las 10 PM. Si eres sensible a la cafeína, es posible que necesites cortarla aún antes. Recuerda que la cafeína no solo está en el café—también está en el té, el chocolate, las bebidas energéticas y algunos medicamentos.',
        ],
      },
      {
        heading: 'La importancia de la consistencia',
        paragraphs: [
          'Tu cuerpo prospera con la rutina. Acostarte y despertarte aproximadamente a las mismas horas todos los días—incluso los fines de semana—ayuda a regular tu ritmo circadiano. Esta consistencia facilita quedarse dormido a la hora prevista y despertarse sintiéndose renovado.',
          'Si necesitas ajustar tu horario de sueño, hazlo gradualmente. Cambia tu hora de acostarte en 15-30 minutos cada noche en lugar de hacer grandes cambios de una vez. Esto le da a tu cuerpo tiempo para adaptarse al nuevo ritmo.',
        ],
      },
      {
        heading: 'Creando el ambiente correcto',
        paragraphs: [
          'Tu ambiente de sueño juega un papel crucial en la calidad del sueño. Apunta a una temperatura ambiente fresca (alrededor de 18-20°C), ya que la temperatura de tu cuerpo naturalmente baja durante el sueño. Una habitación demasiado cálida puede perturbar este proceso.',
          'Mantén tu habitación oscura y silenciosa. Considera cortinas opacas si la luz exterior es un problema, y usa tapones para los oídos o ruido blanco si eres sensible a los sonidos. Tu cama debe ser principalmente para dormir—evita trabajar, comer o ver TV en la cama, ya que esto puede debilitar la asociación mental entre tu cama y el descanso.',
        ],
      },
      {
        heading: 'Rutina pre-sueño',
        paragraphs: [
          'Una rutina calmante pre-sueño le indica a tu cuerpo que es hora de relajarse. Esto podría incluir leer (un libro físico, no una pantalla), estiramientos suaves, meditación o escuchar música calmante. Evita actividades estimulantes como ejercicio intenso, trabajo o conversaciones estresantes justo antes de acostarte.',
          'Date tiempo para relajarte. Si planeas dormir a las 10 PM, comienza tu rutina de relajación alrededor de las 9 PM. Este tiempo de amortiguación ayuda a tu mente y cuerpo a hacer la transición del estado de vigilia a la preparación para el sueño.',
        ],
      },
      {
        heading: 'Manejando el estrés y la ansiedad',
        paragraphs: [
          'El estrés y la ansiedad son disruptores comunes del sueño. Si las preocupaciones te mantienen despierto, intenta escribirlas en un diario antes de acostarte. Este "volcado cerebral" puede ayudar a despejar tu mente. Algunas personas encuentran que programar un "tiempo de preocupación" más temprano en el día ayuda a prevenir la ansiedad a la hora de acostarse.',
          'Las técnicas de relajación como la respiración profunda, la relajación muscular progresiva o la meditación guiada también pueden ayudar a calmar tu sistema nervioso antes del sueño. Estas prácticas requieren tiempo para dominar, pero pueden ser herramientas poderosas para mejorar la calidad del sueño.',
        ],
      },
    ],
  },
  fr: {
    title: 'Hygiène du Sommeil',
    sections: [
      {
        heading: 'Exposition à la lumière et votre cycle de sommeil',
        paragraphs: [
          'L\'horloge interne de votre corps, ou rythme circadien, est fortement influencée par la lumière. L\'exposition à la lumière vive, en particulier la lumière bleue des écrans, le soir peut supprimer la production de mélatonine et retarder l\'endormissement. À l\'inverse, obtenir la lumière naturelle du soleil le matin aide à réinitialiser votre rythme circadien et favorise la vigilance.',
          'Pour favoriser un meilleur horaire de sommeil, essayez d\'obtenir 15-30 minutes d\'exposition à la lumière naturelle dans la première heure après le réveil. Le soir, baissez les lumières et évitez les écrans pendant au moins une heure avant le coucher. Si vous devez utiliser des appareils, envisagez des filtres de lumière bleue ou des paramètres de mode nuit.',
        ],
      },
      {
        heading: 'Le moment de la caféine compte',
        paragraphs: [
          'La caféine a une demi-vie d\'environ 5-6 heures, ce qui signifie que la moitié est encore dans votre système après ce temps. Boire du café ou d\'autres boissons caféinées trop tard dans la journée peut interférer avec votre capacité à vous endormir à l\'heure prévue.',
          'Comme ligne directrice générale, essayez d\'éviter la caféine après 14h si vous prévoyez de dormir vers 22h. Si vous êtes sensible à la caféine, vous pourriez avoir besoin de la couper encore plus tôt. N\'oubliez pas que la caféine n\'est pas seulement dans le café—elle est aussi dans le thé, le chocolat, les boissons énergisantes et certains médicaments.',
        ],
      },
      {
        heading: 'L\'importance de la cohérence',
        paragraphs: [
          'Votre corps prospère avec la routine. Se coucher et se réveiller à peu près aux mêmes heures chaque jour—même le week-end—aide à réguler votre rythme circadien. Cette cohérence facilite l\'endormissement à l\'heure prévue et le réveil en se sentant rafraîchi.',
          'Si vous devez ajuster votre horaire de sommeil, faites-le progressivement. Déplacez votre heure de coucher de 15-30 minutes chaque nuit plutôt que de faire de grands changements en une seule fois. Cela donne à votre corps le temps de s\'adapter au nouveau rythme.',
        ],
      },
      {
        heading: 'Créer le bon environnement',
        paragraphs: [
          'Votre environnement de sommeil joue un rôle crucial dans la qualité du sommeil. Visez une température de pièce fraîche (environ 18-20°C), car la température de votre corps baisse naturellement pendant le sommeil. Une pièce trop chaude peut perturber ce processus.',
          'Gardez votre chambre sombre et silencieuse. Envisagez des rideaux opaques si la lumière extérieure est un problème, et utilisez des bouchons d\'oreille ou du bruit blanc si vous êtes sensible aux sons. Votre lit devrait être principalement pour dormir—évitez de travailler, de manger ou de regarder la télévision au lit, car cela peut affaiblir l\'association mentale entre votre lit et le repos.',
        ],
      },
      {
        heading: 'Routine pré-sommeil',
        paragraphs: [
          'Une routine apaisante avant le sommeil signale à votre corps qu\'il est temps de se détendre. Cela pourrait inclure la lecture (un livre physique, pas un écran), des étirements doux, la méditation ou l\'écoute de musique apaisante. Évitez les activités stimulantes comme l\'exercice intense, le travail ou les conversations stressantes juste avant le coucher.',
          'Donnez-vous le temps de vous détendre. Si vous prévoyez de dormir à 22h, commencez votre routine de détente vers 21h. Ce temps tampon aide votre esprit et votre corps à faire la transition de l\'éveil à la préparation au sommeil.',
        ],
      },
      {
        heading: 'Gérer le stress et l\'anxiété',
        paragraphs: [
          'Le stress et l\'anxiété sont des perturbateurs courants du sommeil. Si les soucis vous tiennent éveillé, essayez de les écrire dans un journal avant de vous coucher. Ce "vidage de cerveau" peut aider à clarifier votre esprit. Certaines personnes trouvent que programmer un "temps d\'inquiétude" plus tôt dans la journée aide à prévenir l\'anxiété au coucher.',
          'Les techniques de relaxation comme la respiration profonde, la relaxation musculaire progressive ou la méditation guidée peuvent également aider à calmer votre système nerveux avant le sommeil. Ces pratiques prennent du temps à maîtriser, mais elles peuvent être des outils puissants pour améliorer la qualité du sommeil.',
        ],
      },
    ],
  },
  zh: {
    title: '睡眠卫生',
    sections: [
      {
        heading: '光照与您的睡眠周期',
        paragraphs: [
          '您身体的内部时钟，或昼夜节律，受到光线的强烈影响。晚上暴露在明亮的光线下，尤其是屏幕的蓝光，可能会抑制褪黑激素的产生并延迟入睡。相反，早上获得自然阳光有助于重置您的昼夜节律并促进警觉性。',
          '为了支持更好的睡眠时间，尝试在醒来后的第一个小时内获得15-30分钟的自然光照射。晚上，调暗灯光，至少在睡前一个小时避免屏幕。如果您必须使用设备，请考虑蓝光过滤器或夜间模式设置。',
        ],
      },
      {
        heading: '咖啡因的时间很重要',
        paragraphs: [
          '咖啡因的半衰期约为5-6小时，这意味着在那之后，一半的咖啡因仍在您的系统中。在一天中太晚喝咖啡或其他含咖啡因的饮料可能会干扰您在预定就寝时间入睡的能力。',
          '作为一般指导原则，如果您计划在晚上10点左右睡觉，请尝试在下午2点后避免咖啡因。如果您对咖啡因敏感，您可能需要更早停止。请记住，咖啡因不仅存在于咖啡中—它也存在于茶、巧克力、能量饮料和一些药物中。',
        ],
      },
      {
        heading: '一致性的重要性',
        paragraphs: [
          '您的身体在例行公事中茁壮成长。每天大约在同一时间上床睡觉和醒来—即使在周末—有助于调节您的昼夜节律。这种一致性使您更容易在预定时间入睡并醒来感到精神焕发。',
          '如果您需要调整睡眠时间表，请逐步进行。每晚将就寝时间移动15-30分钟，而不是一次进行大的改变。这给您的身体时间适应新的节律。',
        ],
      },
      {
        heading: '创造合适的环境',
        paragraphs: [
          '您的睡眠环境在睡眠质量中起着至关重要的作用。目标是凉爽的室温（约18-20°C），因为您的体温在睡眠期间自然下降。太温暖的房间可能会干扰这个过程。',
          '保持卧室黑暗和安静。如果外部光线是个问题，请考虑遮光窗帘，如果您对声音敏感，请使用耳塞或白噪声。您的床应该主要用于睡眠—避免在床上工作、吃饭或看电视，因为这可能会削弱您的床与休息之间的心理关联。',
        ],
      },
      {
        heading: '睡前例行程序',
        paragraphs: [
          '平静的睡前例行程序向您的身体发出该放松的信号。这可能包括阅读（实体书，不是屏幕）、轻柔的伸展、冥想或听平静的音乐。避免在睡前进行刺激活动，如剧烈运动、工作或压力对话。',
          '给自己时间放松。如果您计划在晚上10点睡觉，请在晚上9点左右开始您的放松例行程序。这个缓冲时间有助于您的身心从清醒状态过渡到睡眠准备状态。',
        ],
      },
      {
        heading: '管理压力和焦虑',
        paragraphs: [
          '压力和焦虑是常见的睡眠干扰因素。如果担忧让您保持清醒，请尝试在睡前将它们写在日记中。这种"大脑倾倒"可以帮助清理您的思绪。有些人发现，在一天中更早安排"担忧时间"有助于防止睡前焦虑。',
          '放松技巧，如深呼吸、渐进式肌肉放松或引导冥想，也可以帮助在睡前平静您的神经系统。这些练习需要时间掌握，但它们可能是改善睡眠质量的强大工具。',
        ],
      },
    ],
  },
};

export const SleepHygiene: React.FC = () => {
  const [language] = useLanguage();
  const pageContent = content[language];

  return (
    <div className="relative min-h-screen w-full bg-[#030617] text-white font-sans">
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

        <AdSlot id="sleep-hygiene-ad-1" />
      </main>
    </div>
  );
};

