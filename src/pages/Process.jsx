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
    'Entendimento',
    'Entendemos sua empresa, público, diferenciais, concorrência e objetivos para construir algo alinhado ao negócio.'
  ],

  [
    '02',
    'Estrutura e Estratégia',
    'Organizamos páginas, seções, conteúdos e chamadas para apresentar sua empresa de forma clara e profissional.'
  ],

  [
    '03',
    'Desenvolvimento',
    'Transformamos a estratégia em um projeto moderno utilizando tecnologias atuais, visual premium e experiência responsiva.'
  ],

  [
    '04',
    'Publicação',
    'Realizamos os ajustes finais, conectamos domínio, revisamos tudo e colocamos o projeto online.'
  ]
];

const deliverables = [
  'Site publicado',
  'WhatsApp integrado',
  'Layout responsivo',
  'Experiência mobile premium',
  'Domínio configurado',
  'Suporte inicial',
  'Orientação de uso',
  'Projeto preparado para crescimento'
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
            Um processo profissional para transformar ideias em presença digital.
          </h1>

          <p>
            Cada projeto segue uma metodologia clara para garantir organização,
            qualidade e uma entrega alinhada aos objetivos da empresa.
          </p>
        </Reveal>
      </section>

      <section className="section-padding process-intro-section">
        <Reveal className="process-intro-card">
          <Target size={30} />

          <h2>
            Criar um site profissional vai muito além de escolher um layout.
          </h2>

          <p>
            Cada etapa existe para garantir que o projeto represente sua empresa,
            transmita mais confiança para o cliente e ajude a gerar oportunidades.
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
              Todos os projetos são desenvolvidos pensando primeiro no celular.
            </h2>

            <p>
              Hoje a maior parte dos acessos acontece pelo smartphone.
              Por isso os projetos da AJ Digital são construídos com foco
              em experiência mobile, navegação fluida e visual premium.
            </p>
          </Reveal>

          <Reveal className="process-mobile-card">
            <Smartphone size={30} />

            <h2>
              Seu projeto pode evoluir junto com sua empresa.
            </h2>

            <p>
              Um site pode começar como institucional e futuramente evoluir
              para catálogo, sistema web ou aplicativo Android e iOS,
              conforme o crescimento do negócio.
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
            O objetivo não é apenas entregar um site.
          </h2>

          <p>
            O objetivo é ajudar sua empresa a transmitir mais confiança,
            apresentar melhor seus serviços e facilitar o contato com novos clientes.
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