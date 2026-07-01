import {
  ArrowRight,
  Code2,
  MessageCircle,
  MonitorSmartphone,
  Smartphone,
  Sparkles,
  Zap
} from 'lucide-react';

import PageTransition from '../components/PageTransition.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import CTA from '../components/CTA.jsx';
import { projects } from '../data/projects.js';

const portfolioStats = [
  ['+6', 'projetos premium'],
  ['100%', 'mobile first'],
  ['React', 'alta performance'],
  ['IA', 'automações inteligentes']
];

const portfolioHighlights = [
  [
    MonitorSmartphone,
    'Visual premium e responsivo',
    'Projetos pensados para impressionar no computador e principalmente no celular.'
  ],
  [
    Code2,
    'Tecnologia moderna',
    'Estrutura em React preparada para sites, sistemas, integrações e automações.'
  ],
  [
    MessageCircle,
    'WhatsApp e atendimento',
    'Chamadas estratégicas para facilitar contato, orçamentos e atendimento ao cliente.'
  ]
];

export default function Portfolio() {
  return (
    <PageTransition>
      <section className="page-hero portfolio-hero section-padding compact-hero">
        <div className="portfolio-orb portfolio-orb-one"></div>
        <div className="portfolio-orb portfolio-orb-two"></div>

        <Reveal className="portfolio-hero-copy">
          <span className="eyebrow">Portfólio AJ Digital</span>

          <h1>
            Projetos digitais criados para gerar confiança, produtividade e novas oportunidades.
          </h1>

          <p>
            Modelos premium para diferentes segmentos, criados com visual profissional,
            experiência mobile, tecnologia moderna e possibilidade de evoluir para sistemas,
            aplicativos e automações.
          </p>

          <div className="portfolio-hero-actions">
            <a
              className="primary-btn"
              href="https://wa.me/5548991087702?text=Olá,%20vi%20os%20projetos%20do%20portfólio%20da%20AJ%20Digital%20e%20quero%20uma%20solução%20digital%20para%20minha%20empresa."
              target="_blank"
              rel="noreferrer"
            >
              Quero um projeto nesse nível <ArrowRight size={18} />
            </a>

            <a className="secondary-btn" href="#modelos">
              Ver modelos
            </a>
          </div>
        </Reveal>
      </section>

      <section className="portfolio-stats-wrap">
        {portfolioStats.map(([value, label]) => (
          <Reveal key={label} className="portfolio-stat-card">
            <strong>{value}</strong>
            <span>{label}</span>
          </Reveal>
        ))}
      </section>

      <section className="section-padding portfolio-position-section">
        <div className="portfolio-position-content">
          <Reveal className="portfolio-position-copy">
            <span className="eyebrow">Muito além de páginas bonitas</span>

            <h2>
              Criamos experiências digitais para empresas que querem parecer mais profissionais e trabalhar melhor.
            </h2>

            <p>
              Cada projeto do portfólio foi pensado para mostrar como uma empresa pode se apresentar
              melhor na internet, gerar mais confiança e facilitar o contato do cliente.
            </p>

            <p>
              A AJ Digital une design premium, tecnologia moderna, estrutura estratégica, navegação
              mobile e possibilidade de automação para entregar soluções digitais mais completas.
            </p>
          </Reveal>

          <div className="portfolio-highlight-grid">
            {portfolioHighlights.map(([Icon, title, text]) => (
              <Reveal className="portfolio-highlight-card" key={title}>
                <Icon size={28} />
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="modelos" className="section-padding portfolio-projects-section">
        <SectionTitle
          eyebrow="Modelos em destaque"
          title="Projetos criados para diferentes segmentos"
          text="Use esses modelos como referência para imaginar o nível de presença digital, experiência e automação que sua empresa pode ter."
        />

        <div className="projects-grid portfolio-projects-grid">
          {projects.map((project) => (
            <Reveal key={project.slug}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding portfolio-app-section">
        <div className="portfolio-app-content">
          <Reveal className="portfolio-app-copy">
            <span className="eyebrow">Sites, apps e automações</span>

            <h2>
              Seu projeto pode começar como site e evoluir para aplicativo, sistema ou automação.
            </h2>

            <p>
              Os projetos da AJ Digital são desenvolvidos com foco mobile first, entregando uma
              navegação rápida, moderna e muito parecida com a experiência de um aplicativo.
            </p>

            <p>
              Para empresas que querem uma solução mais avançada, também é possível evoluir o projeto
              para aplicativo Android e iOS, sistemas internos, integrações com WhatsApp e automações
              inteligentes para melhorar a rotina do negócio.
            </p>

            <a
              className="primary-btn"
              href="https://wa.me/5548991087702?text=Olá,%20quero%20entender%20como%20um%20site,%20app,%20sistema%20ou%20automação%20pode%20ajudar%20minha%20empresa."
              target="_blank"
              rel="noreferrer"
            >
              Entender essa possibilidade <ArrowRight size={18} />
            </a>
          </Reveal>

          <Reveal className="portfolio-app-visual" delay={0.15}>
            <div className="portfolio-phone">
              <div className="portfolio-phone-screen">
                <span>
                  <Smartphone size={14} />
                  Mobile First
                </span>

                <h3>Experiência premium no celular</h3>

                <div className="portfolio-phone-card"></div>
                <div className="portfolio-phone-card small"></div>
                <div className="portfolio-phone-btn"></div>
              </div>
            </div>

            <div className="portfolio-floating-app-card card-one">
              <Sparkles size={18} />
              <div>
                <strong>Site premium</strong>
                <small>Visual profissional</small>
              </div>
            </div>

            <div className="portfolio-floating-app-card card-two">
              <Zap size={18} />
              <div>
                <strong>Automação/IA</strong>
                <small>Projeto avançado</small>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </PageTransition>
  );
}