import {
  ArrowRight,
  BadgeCheck,
  Code2,
  Layers3,
  MessageCircle,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
  Zap
} from 'lucide-react';

import PageTransition from '../components/PageTransition.jsx';
import Reveal from '../components/Reveal.jsx';
import CTA from '../components/CTA.jsx';

const techs = [
  'React',
  'JavaScript',
  'HTML & CSS',
  'Supabase',
  'Mobile First',
  'WhatsApp',
  'Automações',
  'Inteligência Artificial'
];

const values = [
  [
    ShieldCheck,
    'Credibilidade',
    'Criamos soluções digitais que fazem sua empresa parecer mais profissional logo no primeiro contato.'
  ],
  [
    Target,
    'Estratégia',
    'Cada projeto tem uma função: apresentar, gerar confiança, organizar processos e facilitar resultados.'
  ],
  [
    MonitorSmartphone,
    'Experiência mobile',
    'Sites e sistemas pensados primeiro para celular, com visual limpo, rápido e parecido com aplicativo.'
  ],
  [
    MessageCircle,
    'Automação e atendimento',
    'WhatsApp integrado, fluxos automatizados e soluções para agilizar a comunicação com o cliente.'
  ]
];

const process = [
  ['01', 'Entendimento', 'Conhecemos sua empresa, rotina, processos, público e objetivo principal.'],
  ['02', 'Estratégia', 'Identificamos o que pode ser melhorado, automatizado ou transformado em solução digital.'],
  ['03', 'Desenvolvimento', 'Criamos o site, sistema, aplicativo ou automação com tecnologia moderna e foco em resultado.'],
  ['04', 'Implantação', 'Publicamos, configuramos e deixamos a solução pronta para ajudar sua empresa no dia a dia.']
];

export default function About() {
  return (
    <PageTransition>
      <section className="page-hero about-hero section-padding compact-hero">
        <div className="about-hero-orb about-orb-one"></div>
        <div className="about-hero-orb about-orb-two"></div>

        <Reveal className="about-hero-copy">
          <span className="eyebrow">Sobre a AJ Digital</span>

          <h1>
            Muito além de um site bonito. Soluções digitais pensadas para transformar empresas.
          </h1>

          <p>
            A AJ Digital nasceu para ajudar empresas locais a usarem a tecnologia de forma mais
            estratégica, com sites profissionais, sistemas, aplicativos e automações inteligentes
            que melhoram a presença digital, organizam processos e geram mais oportunidades.
          </p>

          <div className="about-hero-actions">
            <a
              className="primary-btn"
              href="https://wa.me/5548991087702?text=Olá,%20quero%20conhecer%20melhor%20a%20AJ%20Digital%20e%20entender%20como%20soluções%20digitais%20podem%20ajudar%20minha%20empresa."
              target="_blank"
              rel="noreferrer"
            >
              Falar com a AJ Digital <ArrowRight size={18} />
            </a>

            <a className="secondary-btn" href="/portfolio">
              Ver projetos criados
            </a>
          </div>
        </Reveal>
      </section>

      <section className="section-padding about-founder-section">
        <div className="about-founder-grid">
          <Reveal className="about-founder-card">
            <span className="about-card-badge">
              <Sparkles size={16} />
              Fundador
            </span>

            <h2>
              Sou André Filipe Jacinto, fundador da AJ Digital.
            </h2>

            <p>
              Minha missão é transformar a forma como pequenas e médias empresas utilizam a
              tecnologia. Não desenvolvo apenas páginas bonitas: crio soluções digitais que
              valorizam a marca, melhoram processos, facilitam o atendimento e fortalecem a
              presença online.
            </p>

            <p>
              Hoje, a AJ Digital trabalha com projetos desenvolvidos em React, com foco em
              performance, experiência no celular, visual premium, integração com WhatsApp,
              sistemas personalizados e automações inteligentes.
            </p>

            <div className="about-founder-highlight">
              <Rocket size={22} />
              <span>
                Tecnologia criada para empresas que querem sair do improviso e trabalhar de forma mais profissional.
              </span>
            </div>
          </Reveal>

          <Reveal className="about-visual-panel" delay={0.15}>
            <div className="about-code-window">
              <div className="browser-bar gold-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="about-code-content">
                <span className="code-line gold">const ajDigital = &#123;</span>
                <span className="code-line">sites: 'profissionais',</span>
                <span className="code-line">sistemas: 'sob medida',</span>
                <span className="code-line">automacoes: 'inteligentes',</span>
                <span className="code-line">objetivo: 'gerar resultado',</span>
                <span className="code-line gold">&#125;;</span>
              </div>

              <div className="about-floating-badge badge-one">
                <strong>React</strong>
                <small>Alta performance</small>
              </div>

              <div className="about-floating-badge badge-two">
                <strong>IA</strong>
                <small>Automação inteligente</small>
              </div>

              <div className="about-floating-badge badge-three">
                <strong>WhatsApp</strong>
                <small>Contato direto</small>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding about-values-section">
        <Reveal className="about-section-heading">
          <span className="eyebrow">O que guia cada projeto</span>
          <h2>Design, tecnologia, automação e estratégia trabalhando juntos.</h2>
          <p>
            Cada solução é pensada para apresentar sua empresa com mais valor, melhorar a experiência
            do cliente, reduzir tarefas manuais e facilitar o crescimento do negócio.
          </p>
        </Reveal>

        <div className="about-values-grid">
          {values.map(([Icon, title, text]) => (
            <Reveal className="about-value-card" key={title}>
              <Icon size={28} />
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding about-tech-section">
        <div className="about-tech-content">
          <Reveal className="about-tech-copy">
            <span className="eyebrow">Tecnologia moderna</span>

            <h2>
              Projetos desenvolvidos com base sólida, visual premium e possibilidade de automação.
            </h2>

            <p>
              A AJ Digital utiliza tecnologias modernas para criar sites, sistemas e automações
              rápidos, organizados, responsivos e preparados para crescer junto com sua empresa.
            </p>
          </Reveal>

          <Reveal className="about-tech-panel" delay={0.15}>
            {techs.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-padding about-process-section">
        <Reveal className="about-section-heading">
          <span className="eyebrow">Como trabalhamos</span>
          <h2>Um processo simples, profissional e focado em transformar necessidades em soluções.</h2>
        </Reveal>

        <div className="about-process-grid">
          {process.map(([number, title, text]) => (
            <Reveal className="about-process-card" key={number}>
              <strong>{number}</strong>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </PageTransition>
  );
}