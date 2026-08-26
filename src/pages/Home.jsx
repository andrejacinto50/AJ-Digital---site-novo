import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  CalendarClock,
  ClipboardList,
  FileSignature,
  FileSpreadsheet,
  MessageCircle,
  ShieldCheck,
  TrendingUp
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

/**
 * Dores concretas no lugar de benefícios genéricos: quem se reconhece em uma
 * delas entende sozinho o que precisa. Cada dor aponta para a frente que resolve.
 */
const dores = [
  [
    MessageCircle,
    '"Quanto custa?" no direct, cinco vezes por dia',
    'Você repete a mesma resposta e ainda precisa perguntar tudo antes de orçar.',
    'Site com a informação certa e formulário que chega organizado no WhatsApp'
  ],
  [
    CalendarClock,
    'Agenda no caderno e cliente ligando para confirmar',
    'Horário marcado por mensagem, remarcado por mensagem e esquecido do mesmo jeito.',
    'Sistema de agendamento com confirmação automática'
  ],
  [
    FileSpreadsheet,
    'A planilha que só uma pessoa da equipe entende',
    'Quando essa pessoa falta, ninguém acha a informação — e nada anda.',
    'Painel administrativo, com tudo em um lugar só'
  ],
  [
    ClipboardList,
    'Pedido anotado no papel e passado a limpo depois',
    'O mesmo dado digitado duas, três vezes, e sempre com risco de erro.',
    'Automação do processo, do pedido até o registro'
  ]
];

/** Resumo das sete etapas do processo, agrupadas em quatro momentos. */
const comoFunciona = [
  ['01', 'Conversa', 'Você conta o que precisa. Entendo a empresa, a rotina e onde se perde tempo hoje.'],
  ['02', 'Proposta e contrato', 'Defino o que faz sentido desenvolver, com prazo e valor. Contrato assinado antes de começar.'],
  ['03', 'Desenvolvimento e apresentação', 'Construo o projeto e você avalia antes de ir ao ar — nada de surpresa no final.'],
  ['04', 'No ar, com acompanhamento', 'Publico e configuro tudo. Depois seguem 3 meses de acompanhamento e 12 meses de garantia.']
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

          <h1>
            Sites, sistemas, aplicativos e automações para sua empresa parar de fazer no manual.
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
              <FileSignature size={15} /> Contrato antes de começar
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
              Ver os modelos
            </a>
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
              Quatro frentes, um objetivo: resolver o problema da sua empresa.
            </h2>

            <p>
              Antes de falar em site, eu entendo como a empresa funciona: como o cliente chega,
              como acontece o atendimento e o que ainda é feito na mão. Só depois disso a gente
              decide o que desenvolver.
            </p>

            <p>
              Site para apresentar, sistema para organizar a operação, automação para eliminar o
              repetitivo e experiência mobile para atender onde o seu cliente está. Muitas vezes,
              uma combinação deles.
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
                <span>Modelo em destaque</span>
                <strong>{featuredProject.searchTitle || featuredProject.title}</strong>
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
          eyebrow="Onde a tecnologia entra"
          title="Você reconhece algum desses?"
          text="Nenhum deles é problema de falta de esforço. São processos que ninguém parou para arrumar — e é exatamente aí que a tecnologia resolve."
        />

        <div className="pain-grid">
          {dores.map(([Icon, dor, detalhe, solucao]) => (
            <Reveal className="pain-card" key={dor}>
              <Icon size={26} />

              <h3>{dor}</h3>
              <p>{detalhe}</p>

              <span className="pain-solution">
                <ArrowRight size={15} /> {solucao}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding how-section">
        <SectionTitle
          eyebrow="Como funciona"
          title="Do primeiro contato no WhatsApp até o projeto no ar"
          text="São sete etapas, resumidas aqui em quatro momentos. Sem burocracia e sem termo técnico: você acompanha cada uma e fala sempre com a mesma pessoa."
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
            Ver as sete etapas <ArrowRight size={17} />
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