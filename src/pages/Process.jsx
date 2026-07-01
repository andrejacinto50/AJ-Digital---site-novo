import {
  ArrowRight,
  BadgeCheck,
  MonitorSmartphone,
  Rocket,
  Smartphone,
  Target,
  Zap
} from 'lucide-react';

import PageTransition from '../components/PageTransition.jsx';
import Reveal from '../components/Reveal.jsx';
import CTA from '../components/CTA.jsx';

const steps = [
  [
    '01',
    'Diagnóstico',
    'Entendemos sua empresa, rotina, desafios, público e objetivos para identificar oportunidades de melhoria.'
  ],

  [
    '02',
    'Planejamento',
    'Definimos a melhor solução para o seu caso, seja um site, sistema, aplicativo ou automação.'
  ],

  [
    '03',
    'Desenvolvimento',
    'Criamos a solução utilizando tecnologias modernas, com foco em performance, experiência mobile e qualidade.'
  ],

  [
    '04',
    'Implantação',
    'Realizamos os testes, configuramos tudo, colocamos a solução em funcionamento e acompanhamos os primeiros ajustes.'
  ]
];

const deliverables = [
  'Solução publicada',
  'WhatsApp integrado',
  'Layout responsivo',
  'Experiência mobile premium',
  'Automações quando aplicável',
  'Integrações necessárias',
  'Orientação de uso',
  'Estrutura preparada para evolução'
];

export default function Process() {
  return (
    <PageTransition>
      <section className="page-hero process-hero section-padding compact-hero">
        <div className="process-orb process-orb-one"></div>
        <div className="process-orb process-orb-two"></div>

        <Reveal className="process-hero-copy">
          <span className="eyebrow">Nosso Processo</span>

          <h1>
            Um processo pensado para transformar necessidades em soluções digitais.
          </h1>

          <p>
            Cada projeto segue uma metodologia que identifica oportunidades de melhoria,
            define a melhor solução e entrega tecnologia alinhada aos objetivos da sua empresa.
          </p>
        </Reveal>
      </section>

      <section className="section-padding process-intro-section">
        <Reveal className="process-intro-card">
          <Target size={30} />

          <h2>
            Desenvolver uma solução digital vai muito além de criar um site.
          </h2>

          <p>
            Antes de escrever qualquer linha de código, entendemos como sua empresa funciona,
            identificamos oportunidades de melhoria e definimos a tecnologia mais adequada para
            resolver o problema.
          </p>
        </Reveal>
      </section>

      <section className="section-padding process-timeline-section">
        <div className="process-timeline">
          {steps.map(([number, title, text]) => (
            <Reveal className="process-step-card" key={number}>
              <span className="process-number">{number}</span>

              <h3>{title}</h3>

              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding process-mobile-section">
        <div className="process-mobile-content">
          <Reveal className="process-mobile-card">
            <MonitorSmartphone size={30} />

            <h2>
              Tudo começa pensando na experiência do usuário.
            </h2>

            <p>
              Sites, sistemas e aplicativos são desenvolvidos para oferecer rapidez,
              facilidade de uso e excelente experiência em qualquer dispositivo.
            </p>
          </Reveal>

          <Reveal className="process-mobile-card">
            <Smartphone size={30} />

            <h2>
              Sua solução pode evoluir junto com sua empresa.
            </h2>

            <p>
              Um projeto pode começar como um site institucional e evoluir para um
              sistema interno, aplicativo, integração ou automação conforme o crescimento do negócio.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding process-deliverables-section">
        <Reveal className="process-section-heading">
          <span className="eyebrow">Entrega</span>

          <h2>O que você recebe ao final do projeto</h2>
        </Reveal>

        <div className="process-deliverables-grid">
          {deliverables.map((item) => (
            <Reveal className="process-deliverable-card" key={item}>
              <BadgeCheck size={22} />
              <span>{item}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding process-final-section">
        <Reveal className="process-final-card">
          <Rocket size={34} />

          <h2>
            O objetivo não é apenas entregar um projeto.
          </h2>

          <p>
            Nosso objetivo é desenvolver soluções digitais que ajudem sua empresa
            a ganhar produtividade, transmitir mais profissionalismo, melhorar o atendimento
            e crescer com tecnologia.
          </p>

          <a
            className="primary-btn"
            href="https://wa.me/5548991087702"
            target="_blank"
            rel="noreferrer"
          >
            Quero iniciar meu projeto
            <ArrowRight size={18} />
          </a>
        </Reveal>
      </section>

      <CTA />
    </PageTransition>
  );
}