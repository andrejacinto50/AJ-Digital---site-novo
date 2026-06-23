import {
  ArrowRight,
  BadgeCheck,
  Code2,
  LayoutDashboard,
  MessageCircle,
  MonitorSmartphone,
  Smartphone,
  Target,
  TrendingUp,
  Zap
} from 'lucide-react';

import PageTransition from '../components/PageTransition.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import CTA from '../components/CTA.jsx';
import { projects } from '../data/projects.js';
import { services } from '../data/services.js';

const stats = [
  ['+6', 'projetos premium'],
  ['100%', 'mobile first'],
  ['React', 'alta performance'],
  ['WhatsApp', 'conversão direta']
];

const projectOrder = [
  'loja-premium-whatsapp',
  'barbearia-monarch',
  'restaurante-multipage',
  'monarch-store',
  'academia-premium',
  'barbearia-premium-multipagina'
];

const orderedProjects = projectOrder
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter(Boolean);

const featuredProject = orderedProjects[0];
const otherProjects = orderedProjects.slice(1);

const benefits = [
  [
    BadgeCheck,
    'Mais credibilidade',
    'Sua empresa passa uma imagem mais profissional antes mesmo do primeiro atendimento.'
  ],
  [
    Smartphone,
    'Pensado para celular',
    'A maior parte dos clientes acessa pelo smartphone. Por isso, cada detalhe é pensado para mobile.'
  ],
  [
    Code2,
    'Tecnologia moderna',
    'Sites desenvolvidos com React, estrutura leve, visual rápido e experiência mais fluida.'
  ],
  [
    Zap,
    'Mais oportunidades',
    'Botões, chamadas e seções estratégicas para transformar visitantes em conversas no WhatsApp.'
  ]
];

const agencyHighlights = [
  [
    MonitorSmartphone,
    'Visual premium em todos os dispositivos',
    'Seu site precisa impressionar no computador, mas principalmente no celular.'
  ],
  [
    Target,
    'Estrutura focada em resultado',
    'Não criamos apenas páginas bonitas. Criamos uma apresentação digital pensada para gerar contato.'
  ],
  [
    MessageCircle,
    'WhatsApp integrado',
    'O cliente vê seus serviços, entende sua empresa e consegue chamar você com poucos cliques.'
  ],
  [
    LayoutDashboard,
    'Projetos organizados por segmento',
    'Academias, barbearias, lojas, restaurantes e projetos personalizados para diferentes negócios.'
  ]
];

const appExperienceHighlights = [
  [
    Smartphone,
    'Experiência de aplicativo',
    'Sites mobile first, rápidos e com navegação fluida para o cliente sentir que está usando um app.'
  ],
  [
    MonitorSmartphone,
    'Visual perfeito no celular',
    'Cada seção é pensada para telas menores, com botões estratégicos, leitura fácil e contato rápido.'
  ],
  [
    Code2,
    'Possibilidade de virar app',
    'Para empresas que querem ir além, também é possível transformar o projeto em aplicativo Android e iOS.'
  ]
];

export default function Home() {
  return (
    <PageTransition>
      <section className="hero hero-premium section-padding">
        <div className="hero-bg"></div>
        <div className="hero-orb hero-orb-one"></div>
        <div className="hero-orb hero-orb-two"></div>

        <Reveal className="hero-copy">
          <span className="eyebrow">AJ Digital • Agência Web Premium</span>

          <h1>
            Seu negócio precisa causar uma primeira impressão forte.
          </h1>

          <p>
            Criamos sites profissionais para empresas que querem transmitir mais confiança,
            valorizar sua marca e transformar visitantes em oportunidades reais pelo WhatsApp.
          </p>

          <div className="hero-actions">
            <a
              className="primary-btn"
              href="https://wa.me/5548991087702?text=Olá,%20vim%20pelo%20site%20da%20AJ%20Digital%20e%20quero%20um%20orçamento."
              target="_blank"
              rel="noreferrer"
            >
              Quero um site profissional <ArrowRight size={18} />
            </a>

            <a className="secondary-btn" href="/portfolio">
              Ver modelos criados
            </a>
          </div>

          <div className="hero-trust hero-trust-cards">
            <span>
              <strong>Visual premium</strong>
              <small>Design moderno para valorizar sua marca</small>
            </span>

            <span>
              <strong>Mais confiança</strong>
              <small>Presença digital profissional para o cliente decidir</small>
            </span>

            <span>
              <strong>Contato facilitado</strong>
              <small>Estrutura pensada para gerar conversas no WhatsApp</small>
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="hero-visual">
          <div className="agency-mockup">
            <div className="browser-bar gold-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="agency-mockup-content">
              <div className="mock-glass-block"></div>

              <span className="mock-label">Projeto Premium</span>

              <h3>
                Site profissional focado em presença e conversão.
              </h3>

              <div className="mock-progress">
                <span></span>
              </div>

              <div className="mock-progress small">
                <span></span>
              </div>

              <div className="mock-preview-grid">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>

            <div className="mock-float-card value-card">
              <strong>+ Valor</strong>
              <span>Percepção profissional</span>
            </div>

            <div className="mock-float-card mobile-card">
              <strong>Mobile First</strong>
              <span>Experiência no celular</span>
            </div>

            <div className="mock-float-card whatsapp-card">
              <strong>WhatsApp</strong>
              <span>Contato direto</span>
            </div>

            <div className="mock-float-card result-card">
              <TrendingUp size={18} />
              <div>
                <strong>Conversão</strong>
                <span>Estrutura estratégica</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="stats-wrap">
        {stats.map(([value, label]) => (
          <Reveal key={label} className="stat-card">
            <strong>{value}</strong>
            <span>{label}</span>
          </Reveal>
        ))}
      </section>

      <section className="section-padding app-experience-section">
        <div className="app-experience-content">
          <Reveal className="app-experience-copy">
            <span className="eyebrow">Nova possibilidade AJ Digital</span>

            <h2>
              Sites que parecem aplicativos no celular. E que também podem virar um app de verdade.
            </h2>

            <p>
              Hoje a AJ Digital desenvolve sites profissionais com foco total na experiência mobile.
              Na prática, o cliente acessa pelo celular e sente uma navegação rápida, moderna e muito
              parecida com um aplicativo.
            </p>

            <p>
              Para empresas que querem dar um passo maior no digital, também é possível transformar
              o projeto em um aplicativo para Android e iOS. Essa é uma solução mais avançada, com
              investimento maior, indicada para negócios que querem uma presença ainda mais forte.
            </p>

            <a
              className="primary-btn"
              href="https://wa.me/5548991087702?text=Olá,%20quero%20entender%20a%20possibilidade%20de%20ter%20um%20site%20com%20experiência%20de%20aplicativo%20ou%20transformar%20meu%20site%20em%20app."
              target="_blank"
              rel="noreferrer"
            >
              Quero entender essa possibilidade <ArrowRight size={18} />
            </a>
          </Reveal>

          <Reveal delay={0.15} className="app-experience-visual">
            <div className="app-phone-mockup">
              <div className="app-phone-top"></div>

              <div className="app-phone-screen">
                <span className="app-screen-badge">Mobile First</span>
                <h3>Experiência premium no celular</h3>

                <div className="app-screen-card"></div>
                <div className="app-screen-card small"></div>
                <div className="app-screen-button"></div>
              </div>
            </div>

            <div className="app-floating-card app-card-one">
              <strong>Android</strong>
              <span>Possibilidade de publicação</span>
            </div>

            <div className="app-floating-card app-card-two">
              <strong>iOS</strong>
              <span>Projeto mais avançado</span>
            </div>

            <div className="app-floating-card app-card-three">
              <strong>Site + App</strong>
              <span>Presença digital completa</span>
            </div>
          </Reveal>
        </div>

        <div className="app-experience-grid">
          {appExperienceHighlights.map(([Icon, title, text]) => (
            <Reveal className="app-experience-card" key={title}>
              <Icon size={26} />
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding portfolio-premium-section">
        <SectionTitle
          eyebrow="Portfólio"
          title="Modelos premium criados para empresas reais"
          text="Projetos com visual profissional, estrutura estratégica e foco em gerar mais confiança antes do primeiro contato."
        />

        <div className="premium-portfolio-layout">
          {featuredProject && (
            <Reveal className="featured-project-wrap">
              <div className="featured-project-label">
                <span>Projeto em destaque</span>
                <strong>Loja Premium com foco em WhatsApp</strong>
              </div>

              <ProjectCard project={featuredProject} />
            </Reveal>
          )}

          <div className="side-projects-grid">
            {otherProjects.map((project) => (
              <Reveal key={project.slug}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding agency-section">
        <div className="agency-content">
          <Reveal className="agency-copy">
            <span className="eyebrow">Muito além de um site bonito</span>

            <h2>
              Seu cliente pode conhecer sua empresa pelas redes sociais, mas é no site que ele decide se confia em você.
            </h2>

            <p>
              Um site profissional organiza sua apresentação, valoriza seus serviços e transmite a segurança
              que o cliente precisa para entrar em contato. A AJ Digital cria essa estrutura com visual premium,
              navegação simples e foco em conversão.
            </p>

            <a
              className="primary-btn"
              href="https://wa.me/5548991087702?text=Olá,%20quero%20entender%20como%20um%20site%20profissional%20pode%20ajudar%20minha%20empresa."
              target="_blank"
              rel="noreferrer"
            >
              Quero melhorar minha presença digital <ArrowRight size={18} />
            </a>
          </Reveal>

          <div className="agency-grid">
            {agencyHighlights.map(([Icon, title, text]) => (
              <Reveal className="agency-card" key={title}>
                <Icon size={26} />
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding why-section">
        <SectionTitle
          eyebrow="Por que investir"
          title="Um site profissional muda a percepção sobre sua empresa"
          text="A primeira impressão do cliente pode definir se ele chama você ou procura o concorrente."
        />

        <div className="service-grid">
          {benefits.map(([Icon, title, text]) => (
            <Reveal className="service-card" key={title}>
              <Icon size={28} />
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <SectionTitle
          eyebrow="Serviços"
          title="Soluções digitais para negócios locais"
          text="Da página institucional ao projeto personalizado, criamos estruturas digitais para empresas que querem se apresentar melhor."
        />

        <div className="service-grid">
          {services.slice(0, 6).map(({ icon: Icon, title, description }) => (
            <Reveal className="service-card" key={title}>
              <Icon size={28} />
              <h3>{title}</h3>
              <p>{description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </PageTransition>
  );
}