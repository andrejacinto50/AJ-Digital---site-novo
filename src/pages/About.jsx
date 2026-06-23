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
  'Performance',
  'Responsivo'
];

const values = [
  [
    ShieldCheck,
    'Credibilidade',
    'Criamos sites que fazem sua empresa parecer mais profissional logo no primeiro acesso.'
  ],
  [
    Target,
    'Estratégia',
    'Cada seção tem uma função: apresentar, gerar confiança e levar o cliente até o contato.'
  ],
  [
    MonitorSmartphone,
    'Experiência mobile',
    'O site é pensado primeiro para celular, com visual limpo, rápido e parecido com aplicativo.'
  ],
  [
    MessageCircle,
    'Conversão',
    'WhatsApp integrado e chamadas estratégicas para facilitar o contato do cliente.'
  ]
];

const process = [
  ['01', 'Entendimento', 'Conhecemos sua empresa, público, serviços e objetivo principal.'],
  ['02', 'Estrutura', 'Organizamos as seções para apresentar seu negócio com clareza e autoridade.'],
  ['03', 'Desenvolvimento', 'Criamos o site com tecnologia moderna, visual premium e foco mobile.'],
  ['04', 'Entrega', 'Publicamos o projeto pronto para gerar presença, confiança e novas oportunidades.']
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
            Muito além de um site bonito. Uma presença digital pensada para gerar confiança.
          </h1>

          <p>
            A AJ Digital nasceu para ajudar empresas locais a se apresentarem melhor na internet,
            com sites modernos, rápidos, responsivos e preparados para transformar visitantes em
            oportunidades reais pelo WhatsApp.
          </p>

          <div className="about-hero-actions">
            <a
              className="primary-btn"
              href="https://wa.me/5548991087702?text=Olá,%20quero%20conhecer%20melhor%20a%20AJ%20Digital%20e%20entender%20como%20um%20site%20pode%20ajudar%20minha%20empresa."
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
              Minha missão é transformar a forma como pequenas e médias empresas se apresentam no
              digital. Não desenvolvo apenas páginas bonitas: crio estruturas profissionais que
              valorizam a marca, organizam a comunicação e facilitam o contato do cliente.
            </p>

            <p>
              Hoje, a AJ Digital trabalha com projetos desenvolvidos em React, com foco em
              performance, experiência no celular, visual premium e integração direta com WhatsApp.
            </p>

            <div className="about-founder-highlight">
              <Rocket size={22} />
              <span>
                Sites criados para empresas que querem sair do improviso e transmitir mais confiança.
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
                <span className="code-line">visual: 'premium',</span>
                <span className="code-line">mobile: 'first',</span>
                <span className="code-line">tecnologia: 'React',</span>
                <span className="code-line">objetivo: 'gerar confiança',</span>
                <span className="code-line gold">&#125;;</span>
              </div>

              <div className="about-floating-badge badge-one">
                <strong>React</strong>
                <small>Alta performance</small>
              </div>

              <div className="about-floating-badge badge-two">
                <strong>Mobile</strong>
                <small>Experiência premium</small>
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
          <h2>Design, tecnologia e estratégia trabalhando juntos.</h2>
          <p>
            Cada site é pensado para apresentar sua empresa com mais valor, melhorar a experiência do
            cliente e facilitar o próximo passo: entrar em contato.
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
              Projetos desenvolvidos com base sólida e acabamento visual de alto nível.
            </h2>

            <p>
              A AJ Digital utiliza tecnologias modernas para criar sites rápidos, organizados,
              responsivos e preparados para crescer junto com sua empresa.
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
          <h2>Um processo simples, profissional e focado em resultado.</h2>
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