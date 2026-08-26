import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  BadgeCheck,
  CalendarClock,
  Code2,
  Handshake,
  MessageCircle,
  MonitorSmartphone,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Wrench,
  Zap
} from 'lucide-react';

import PageTransition from '../components/PageTransition.jsx';
import Seo from '../components/Seo.jsx';
import { pageSeo } from '../data/seo.js';
import Reveal from '../components/Reveal.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import CTA from '../components/CTA.jsx';
import Faq from '../components/Faq.jsx';
import { projects } from '../data/projects.js';
import { catalog, positioning } from '../data/catalog.js';
import { guarantees } from '../data/guarantees.js';

const stats = [
  ['6', 'modelos prontos'],
  ['7 a 15', 'dias de entrega'],
  ['12 meses', 'de garantia'],
  ['3 meses', 'de acompanhamento']
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
    'A maior parte dos seus clientes acessa pelo smartphone. Por isso cada detalhe começa pelo mobile.'
  ],
  [
    MessageCircle,
    'WhatsApp integrado',
    'O cliente entende sua empresa, chama no WhatsApp e é atendido de forma mais rápida e organizada.'
  ],
  [
    Zap,
    'Mais produtividade',
    'Automatizamos tarefas repetitivas para sua empresa ganhar tempo e melhorar o atendimento.'
  ]
];

const comoFunciona = [
  ['01', 'Conversa', 'Você conta o que precisa. Entendo a empresa, a rotina e o objetivo do projeto.'],
  ['02', 'Proposta', 'Defino a melhor solução e apresento o orçamento, sem compromisso.'],
  ['03', 'Desenvolvimento', 'Crio o projeto e acompanho você durante as etapas, com ajustes no caminho.'],
  ['04', 'No ar', 'Publico, configuro tudo e o projeto entra em funcionamento com garantia.']
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
      <Seo {...pageSeo.home} />

      <section className="hero hero-premium section-padding">
        <div className="hero-bg"></div>
        <div className="hero-orb hero-orb-one"></div>
        <div className="hero-orb hero-orb-two"></div>

        <Reveal className="hero-copy">
          <span className="eyebrow">AJ Digital • Atendemos todo o Brasil</span>

          <ul className="positioning-claim">
            <li>Sites</li>
            <li>Sistemas</li>
            <li>Aplicativos</li>
            <li>Automações</li>
          </ul>

          <h1>
            Automatizamos processos e criamos soluções digitais para empresas.
          </h1>

          <p>{positioning.description}</p>

          <ul className="hero-proof">
            <li>
              <ShieldCheck size={15} /> 12 meses de garantia
            </li>
            <li>
              <CalendarClock size={15} /> Entrega em 7 a 15 dias
            </li>
            <li>
              <MessageCircle size={15} /> Atendimento direto com quem desenvolve
            </li>
          </ul>

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
            <span className="eyebrow">O que a AJ Digital faz</span>

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
          title="Modelos criados para diferentes segmentos"
          text="Demonstrações navegáveis que mostram o padrão de entrega: visual, velocidade e integração com WhatsApp. Projetos de clientes entram aqui conforme forem publicados."
        />

        <div className="premium-portfolio-layout">
          {featuredProject && (
            <Reveal className="featured-project-wrap">
              <div className="featured-project-label">
                <span>Projeto em destaque</span>
                <strong>Loja Premium com foco em WhatsApp</strong>
              </div>

              <ProjectCard project={featuredProject} priority />
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

        <div className="section-more only-mobile">
          <Link className="secondary-btn" to="/portfolio">
            Ver os 6 modelos <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="section-padding why-section">
        <SectionTitle
          eyebrow="Por que investir"
          title="Sua empresa precisa de tecnologia para atrair clientes, economizar tempo e organizar processos"
          text="Um site profissional melhora a percepção da sua marca. Combinado com WhatsApp, sistemas e automações, sua empresa passa a trabalhar de forma mais rápida e eficiente."
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

      <section className="section-padding services-section">
        <SectionTitle
          eyebrow="O que desenvolvemos"
          title="Quatro frentes, um objetivo: resolver o problema da sua empresa"
          text="Site para apresentar, sistema para organizar, automação para eliminar o repetitivo e experiência mobile para atender onde o seu cliente está."
        />

        <div className="catalog-preview-grid">
          {catalog.map(({ id, icon: Icon, title, summary, destaques }) => (
            <Reveal className="catalog-preview-card" key={id}>
              <Icon size={28} />

              <h3>{title}</h3>
              <p>{summary}</p>

              <ul>
                {destaques.map((item) => (
                  <li key={item}>
                    <Check size={15} /> {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="section-more">
          <Link className="secondary-btn" to="/servicos#catalogo">
            Ver tudo o que a AJ Digital desenvolve <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="section-padding how-section">
        <SectionTitle
          eyebrow="Como funciona"
          title="Do primeiro contato no WhatsApp até o projeto no ar"
          text="Sem burocracia e sem termo técnico. Você acompanha cada etapa e fala sempre com a mesma pessoa."
        />

        <div className="about-process-grid">
          {comoFunciona.map(([number, title, text]) => (
            <Reveal className="about-process-card" key={number}>
              <strong>{number}</strong>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="how-section-link">
          <Link className="secondary-btn" to="/processo">
            Ver o processo completo <ArrowRight size={17} />
          </Link>
        </Reveal>
      </section>

      <section className="section-padding home-founder-section">
        <div className="home-founder-card">
          <Reveal className="home-founder-photo">
            <img
              src="/andre-quadrado.webp"
              alt="André Filipe Jacinto, fundador da AJ Digital"
              width="600"
              height="600"
              loading="lazy"
              decoding="async"
            />
          </Reveal>

          <Reveal className="home-founder-copy" delay={0.1}>
            <span className="eyebrow">Quem está por trás</span>

            <h2>Você não fala com um robô nem com um vendedor.</h2>

            <p>
              Sou André Filipe Jacinto, desenvolvedor e analista de sistemas, formado em Análise e
              Desenvolvimento de Sistemas. Trabalho com desenvolvimento desde 2021 e criei a AJ
              Digital para levar tecnologia de verdade para empresas que ainda dependem de processo
              manual.
            </p>

            <p>
              Participo de todas as etapas: a primeira conversa, o planejamento, o desenvolvimento,
              a publicação e a evolução do projeto.
            </p>

            <Link className="text-link" to="/sobre">
              Conhecer minha trajetória <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-padding guarantees-section">
        <SectionTitle
          eyebrow="Segurança para contratar"
          title="O que já está garantido no seu projeto"
          text="Contratar desenvolvimento gera dúvida, e é justo. Por isso o que está incluído fica escrito aqui, não só na conversa."
        />

        <div className="about-guarantees-grid">
          {guarantees.slice(0, 4).map(([Icon, title, text]) => (
            <Reveal className="about-guarantee-card" key={title}>
              <Icon size={26} />
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding faq-section">
        <SectionTitle
          eyebrow="Dúvidas frequentes"
          title="As perguntas que todo cliente faz antes de fechar"
          text="Se a sua dúvida não estiver aqui, é só chamar no WhatsApp que eu respondo."
        />

        <Faq />
      </section>

      <CTA />
    </PageTransition>
  );
}