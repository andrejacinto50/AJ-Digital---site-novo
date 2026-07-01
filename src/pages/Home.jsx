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
  ['IA', 'automações inteligentes']
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
    'Mais profissionalismo',
    'Sua empresa transmite mais confiança com uma presença digital moderna, organizada e estratégica.'
  ],
  [
    Smartphone,
    'Pensado para celular',
    'A maior parte dos clientes acessa pelo smartphone. Por isso, cada detalhe é pensado para mobile.'
  ],
  [
    Code2,
    'Tecnologia moderna',
    'Sites, sistemas e automações desenvolvidos com estrutura leve, moderna e preparada para evoluir.'
  ],
  [
    Zap,
    'Mais produtividade',
    'Automatizamos tarefas repetitivas para sua empresa ganhar tempo e melhorar o atendimento.'
  ]
];

const agencyHighlights = [
  [
    MonitorSmartphone,
    'Visual premium em todos os dispositivos',
    'Seu projeto precisa impressionar no computador, mas principalmente no celular.'
  ],
  [
    Target,
    'Estrutura focada em resultado',
    'Não criamos apenas páginas bonitas. Criamos soluções pensadas para gerar contato e facilitar processos.'
  ],
  [
    MessageCircle,
    'WhatsApp e atendimento integrado',
    'O cliente entende sua empresa, chama no WhatsApp e pode ser atendido de forma mais rápida e organizada.'
  ],
  [
    LayoutDashboard,
    'Projetos sob medida',
    'Sites, sistemas, aplicativos e automações personalizadas para diferentes tipos de negócios.'
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
          <span className="eyebrow">AJ Digital • Sites, Apps e Automações</span>

          <h1>
            Automatizamos processos e criamos soluções digitais para empresas.
          </h1>

          <p>
            Desenvolvemos sites profissionais, aplicativos e automações inteligentes para empresas
            que querem ganhar tempo, melhorar o atendimento e transformar tecnologia em resultado.
          </p>

          <div className="hero-actions">
            <a
              className="primary-btn"
              href="https://wa.me/5548991087702?text=Olá,%20vim%20pelo%20site%20da%20AJ%20Digital%20e%20quero%20um%20orçamento."
              target="_blank"
              rel="noreferrer"
            >
              Quero automatizar minha empresa <ArrowRight size={18} />
            </a>

            <a className="secondary-btn" href="/portfolio">
              Ver projetos criados
            </a>
          </div>

          <div className="hero-trust hero-trust-cards">
            <span>
              <strong>Sites profissionais</strong>
              <small>Presença digital moderna para valorizar sua marca</small>
            </span>

            <span>
              <strong>Automações inteligentes</strong>
              <small>Processos mais rápidos, organizados e eficientes</small>
            </span>

            <span>
              <strong>Atendimento facilitado</strong>
              <small>Estrutura pensada para gerar contatos e economizar tempo</small>
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

              <span className="mock-label">Solução Digital</span>

              <h3>
                Sites, apps e automações para empresas que querem evoluir.
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
              <strong>+ Tempo</strong>
              <span>Processos automatizados</span>
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
                <strong>Resultado</strong>
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
            <span className="eyebrow">Nova fase AJ Digital</span>

            <h2>
              Sua empresa pode ter site, aplicativo e automações trabalhando juntos.
            </h2>

            <p>
              Hoje a AJ Digital desenvolve soluções digitais que vão além de um site bonito.
              Criamos estruturas para melhorar a presença online, facilitar o atendimento e
              automatizar tarefas que tomam tempo no dia a dia da empresa.
            </p>

            <p>
              Dependendo da necessidade do negócio, o projeto pode envolver site profissional,
              experiência mobile parecida com aplicativo, aplicativo Android e iOS, integração
              com WhatsApp, formulários, sistemas internos e automações inteligentes.
            </p>

            <a
              className="primary-btn"
              href="https://wa.me/5548991087702?text=Olá,%20quero%20entender%20como%20a%20AJ%20Digital%20pode%20automatizar%20processos%20da%20minha%20empresa."
              target="_blank"
              rel="noreferrer"
            >
              Quero entender as automações <ArrowRight size={18} />
            </a>
          </Reveal>

          <Reveal delay={0.15} className="app-experience-visual">
            <div className="app-phone-mockup">
              <div className="app-phone-top"></div>

              <div className="app-phone-screen">
                <span className="app-screen-badge">Automação + Mobile</span>
                <h3>Soluções digitais para empresas</h3>

                <div className="app-screen-card"></div>
                <div className="app-screen-card small"></div>
                <div className="app-screen-button"></div>
              </div>
            </div>

            <div className="app-floating-card app-card-one">
              <strong>Sites</strong>
              <span>Presença profissional</span>
            </div>

            <div className="app-floating-card app-card-two">
              <strong>Apps</strong>
              <span>Projeto mais avançado</span>
            </div>

            <div className="app-floating-card app-card-three">
              <strong>Automação</strong>
              <span>Mais produtividade</span>
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
              Sua empresa precisa de tecnologia para atrair clientes, economizar tempo e organizar processos.
            </h2>

            <p>
              Um site profissional melhora a percepção da sua marca. Mas quando ele é combinado com
              automações, WhatsApp, sistemas e integrações, sua empresa passa a trabalhar de forma mais
              rápida, moderna e eficiente.
            </p>

            <a
              className="primary-btn"
              href="https://wa.me/5548991087702?text=Olá,%20quero%20entender%20como%20soluções%20digitais%20e%20automações%20podem%20ajudar%20minha%20empresa."
              target="_blank"
              rel="noreferrer"
            >
              Quero melhorar minha empresa <ArrowRight size={18} />
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
          title="Automação e presença digital mudam a forma como sua empresa trabalha"
          text="Além de atrair mais confiança, a tecnologia pode reduzir tarefas manuais, agilizar atendimentos e melhorar a experiência do cliente."
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
          title="Soluções digitais para empresas que querem crescer"
          text="Criamos sites, aplicativos, sistemas e automações personalizadas para negócios que querem mais presença, produtividade e resultado."
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