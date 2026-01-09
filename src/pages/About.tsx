import React from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { Language } from '../i18n/translations';
import { AdsenseAd } from '../components/AdsenseAd';
import { Banner320x50 } from '../components/Banner320x50';

const content: Record<Language, {
  title: string;
  paragraphs: string[];
}> = {
  en: {
    title: 'About SleepInTime',
    paragraphs: [
      'SleepInTime is a simple, educational tool designed to help you align your sleep and wake times with your natural sleep cycles. We believe that understanding when you sleep can be just as important as how long you sleep.',
      'Our philosophy is straightforward: no tracking obsession, no gimmicks, no medical claims. We don\'t require accounts, we don\'t collect your data, and we don\'t promise miracles. This is simply a timing calculator based on well-established sleep science about 90-minute sleep cycles.',
      'The tool helps you find optimal wake times that fall during light sleep phases—the natural end points of sleep cycles. Waking during these windows can help you feel more refreshed than being jolted awake during deep sleep.',
      'We emphasize trust and simplicity. SleepInTime is free to use, always will be, and respects your privacy. There are no hidden costs, no premium tiers, and no data collection. What you see is what you get: a calm, educational tool that helps you make informed decisions about your sleep timing.',
      'If you have questions about how the calculator works, check out our "How it works" page. For general sleep information, see our "Sleep hygiene" guide. And remember: this tool is for educational purposes only and does not provide medical advice.',
    ],
  },
  'pt-br': {
    title: 'Sobre o SleepInTime',
    paragraphs: [
      'O SleepInTime é uma ferramenta simples e educacional projetada para ajudá-lo a alinhar seus horários de sono e despertar com seus ciclos naturais de sono. Acreditamos que entender quando você dorme pode ser tão importante quanto quanto tempo você dorme.',
      'Nossa filosofia é direta: sem obsessão por rastreamento, sem truques, sem alegações médicas. Não exigimos contas, não coletamos seus dados e não prometemos milagres. Esta é simplesmente uma calculadora de tempo baseada em ciência do sono bem estabelecida sobre ciclos de sono de 90 minutos.',
      'A ferramenta ajuda você a encontrar horários ideais de despertar que caem durante as fases de sono leve—os pontos finais naturais dos ciclos de sono. Acordar durante essas janelas pode ajudá-lo a se sentir mais revigorado do que ser acordado abruptamente durante o sono profundo.',
      'Enfatizamos confiança e simplicidade. O SleepInTime é gratuito para usar, sempre será, e respeita sua privacidade. Não há custos ocultos, sem níveis premium e sem coleta de dados. O que você vê é o que você obtém: uma ferramenta calma e educacional que ajuda você a tomar decisões informadas sobre seu horário de sono.',
      'Se você tiver perguntas sobre como a calculadora funciona, confira nossa página "Como funciona". Para informações gerais sobre sono, consulte nosso guia "Higiene do sono". E lembre-se: esta ferramenta é apenas para fins educacionais e não fornece aconselhamento médico.',
    ],
  },
  es: {
    title: 'Acerca de SleepInTime',
    paragraphs: [
      'SleepInTime es una herramienta simple y educativa diseñada para ayudarte a alinear tus horarios de sueño y despertar con tus ciclos naturales de sueño. Creemos que entender cuándo duermes puede ser tan importante como cuánto tiempo duermes.',
      'Nuestra filosofía es directa: sin obsesión por el seguimiento, sin trucos, sin afirmaciones médicas. No requerimos cuentas, no recopilamos tus datos y no prometemos milagres. Esta es simplemente una calculadora de tiempo basada en ciencia del sueño bien establecida sobre ciclos de sueño de 90 minutos.',
      'La herramienta te ayuda a encontrar horarios óptimos de despertar que caen durante las fases de sueño ligero—los puntos finales naturales de los ciclos de sueño. Despertar durante estas ventanas puede ayudarte a sentirte más renovado que ser despertado abruptamente durante el sueño profundo.',
      'Enfatizamos la confianza y la simplicidad. SleepInTime es gratuito para usar, siempre lo será, y respeta tu privacidad. No hay costos ocultos, sin niveles premium y sin recopilación de datos. Lo que ves es lo que obtienes: una herramienta calmante y educativa que te ayuda a tomar decisiones informadas sobre tu horario de sueño.',
      'Si tienes preguntas sobre cómo funciona la calculadora, consulta nuestra página "Cómo funciona". Para información general sobre el sueño, consulta nuestra guía "Higiene del sueño". Y recuerda: esta herramienta es solo para fines educativos y no proporciona consejo médico.',
    ],
  },
  fr: {
    title: 'À propos de SleepInTime',
    paragraphs: [
      'SleepInTime est un outil simple et éducatif conçu pour vous aider à aligner vos heures de sommeil et de réveil avec vos cycles naturels de sommeil. Nous croyons que comprendre quand vous dormez peut être tout aussi important que la durée de votre sommeil.',
      'Notre philosophie est simple : pas d\'obsession de suivi, pas de gadgets, pas d\'affirmations médicales. Nous ne demandons pas de comptes, nous ne collectons pas vos données et nous ne promettons pas de miracles. C\'est simplement un calculateur de temps basé sur une science du sommeil bien établie concernant les cycles de sommeil de 90 minutes.',
      'L\'outil vous aide à trouver des heures de réveil optimales qui tombent pendant les phases de sommeil léger—les points finaux naturels des cycles de sommeil. Se réveiller pendant ces fenêtres peut vous aider à vous sentir plus rafraîchi que d\'être réveillé brusquement pendant le sommeil profond.',
      'Nous mettons l\'accent sur la confiance et la simplicité. SleepInTime est gratuit à utiliser, le sera toujours, et respecte votre vie privée. Il n\'y a pas de coûts cachés, pas de niveaux premium et pas de collecte de données. Ce que vous voyez est ce que vous obtenez : un outil calme et éducatif qui vous aide à prendre des décisions éclairées concernant votre horaire de sommeil.',
      'Si vous avez des questions sur le fonctionnement du calculateur, consultez notre page "Comment ça marche". Pour des informations générales sur le sommeil, consultez notre guide "Hygiène du sommeil". Et rappelez-vous : cet outil est à des fins éducatives uniquement et ne fournit pas de conseils médicaux.',
    ],
  },
  zh: {
    title: '关于SleepInTime',
    paragraphs: [
      'SleepInTime是一个简单、教育性的工具，旨在帮助您将睡眠和起床时间与您的自然睡眠周期对齐。我们相信，了解何时睡觉可能与睡眠时长同样重要。',
      '我们的理念很简单：没有跟踪痴迷，没有噱头，没有医疗声明。我们不需要账户，不收集您的数据，也不承诺奇迹。这只是一个基于完善的睡眠科学关于90分钟睡眠周期的时间计算器。',
      '该工具帮助您找到落在浅睡眠阶段的最佳起床时间—睡眠周期的自然终点。在这些窗口期间醒来可以帮助您感觉比在深睡眠期间被突然唤醒更加精神焕发。',
      '我们强调信任和简单。SleepInTime是免费使用的，永远都是，并尊重您的隐私。没有隐藏成本，没有高级层级，也没有数据收集。您看到的就是您得到的：一个平静、教育性的工具，帮助您就睡眠时间做出明智的决定。',
      '如果您对计算器的工作原理有疑问，请查看我们的"工作原理"页面。有关一般睡眠信息，请参阅我们的"睡眠卫生"指南。请记住：此工具仅用于教育目的，不提供医疗建议。',
    ],
  },
};

export const About: React.FC = () => {
  const [language] = useLanguage();
  const pageContent = content[language];

  return (
    <div className="relative w-full bg-[#030617] text-white font-sans">
      <main className="relative z-10 pt-20 pb-8 md:pb-20 px-4 md:px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8" style={{ fontWeight: '200' }}>
          {pageContent.title}
        </h1>

        {/* Banner 320x50 - After title */}
        <div className="mb-8 md:mb-12">
          <Banner320x50 />
        </div>

        {pageContent.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-white/70 leading-relaxed mb-6 text-base md:text-lg"
          >
            {paragraph}
          </p>
        ))}

        {/* Banner 320x50 - Before AdSense */}
        <div className="my-8 md:my-12">
          <Banner320x50 />
        </div>

        {/* AdSense Ad - After content, below the fold */}
        <div className="mt-12 md:mt-16">
          <AdsenseAd slot="about-ad-1" />
        </div>
      </main>
    </div>
  );
};

