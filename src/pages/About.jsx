import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  Code2,
  Handshake,
  Layers3,
  MessageCircle,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
  Wrench
} from 'lucide-react';

import PageTransition from '../components/PageTransition.jsx';
import Seo from '../components/Seo.jsx';
import { pageSeo } from '../data/seo.js';
import Reveal from '../components/Reveal.jsx';
import CTA from '../components/CTA.jsx';

const techs = [
  'React',
  'JavaScript',
  'Java',
  'Spring Boot',
  'Supabase',
  'APIs REST',
  'Git',
  'Automações',
  'Inteligência Artificial'
];

/** Trajetória real, de 2021 até hoje. */
const timeline = [
  [
    '2021',
    'O começo',
    'Primeiros passos no desenvolvimento de software, transformando o que eu estudava em código de verdade.'
  ],
  [
    'Formação',
    'Análise e Desenvolvimento de Sistemas',
    'Primeira experiência profissional desenvolvendo sistemas com Java, JSF, Hibernate, bancos de dados e React.'
  ],
  [
    'Empresas',
    'Analista de Sistemas e Suporte Técnico',
    'Onde aprendi que desenvolver não é só escrever código: é entender quem usa, achar o problema e resolver o processo.'
  ],
  [
    '2026',
    'Nasce a AJ Digital',
    'Conversando com empresários, percebi quanta coisa ainda depende de trabalho manual. A empresa nasceu daí.'
  ],
  [
    'Hoje',
    'Sistemas, integrações e automações',
    'Sites, painéis administrativos, APIs, bancos de dados e automação de processos — com IA como ferramenta de apoio.'
  ]
];

/** O que a tecnologia resolve, na prática. */
const problemas = [
  [
    MonitorSmartphone,
    'Um site melhora a presença',
    'Sua empresa deixa de depender só do Instagram e passa a ter um endereço próprio, profissional e rápido.'
  ],
  [
    Layers3,
    'Um sistema organiza a operação',
    'Informações espalhadas em papel, planilha e caderno viram um lugar só, acessível de qualquer dispositivo.'
  ],
  [
    Workflow,
    'Uma integração conecta ferramentas',
    'Sistemas que não conversam passam a trocar informação sozinhos, sem ninguém copiando dado de um lado para o outro.'
  ],
  [
    Rocket,
    'Uma automação elimina o repetitivo',
    'Aquela tarefa que alguém faz manualmente todo dia deixa de existir — e a equipe volta a cuidar do que importa.'
  ]
];

const garantias = [
  [
    ShieldCheck,
    '12 meses de garantia',
    'Correções relacionadas ao desenvolvimento cobertas por um ano inteiro após a entrega.'
  ],
  [
    Handshake,
    '3 meses de acompanhamento',
    'O Programa de Acompanhamento AJ Digital segue com você nos primeiros meses do projeto no ar.'
  ],
  [
    CalendarClock,
    'Entrega em 7 a 15 dias',
    'É o prazo normal de um projeto, conforme o tamanho e o retorno das informações.'
  ],
  [
    BadgeCheck,
    'Entrega conforme o combinado',
    'O que foi acordado na conversa é o que é entregue — sem surpresa no meio do caminho.'
  ],
  [
    Wrench,
    'Publicação e configuração inclusas',
    'Hospedagem, domínio, DNS, certificado SSL e publicação. Você recebe o projeto no ar e funcionando.'
  ],
  [
    MessageCircle,
    'Atendimento com quem desenvolve',
    'Sem intermediário e sem robô: você fala direto comigo, do primeiro contato à publicação.'
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
      <Seo {...pageSeo.about} />

      <section className="page-hero about-hero section-padding compact-hero">
        <div className="about-hero-orb about-orb-one"></div>
        <div className="about-hero-orb about-orb-two"></div>

        <Reveal className="about-hero-copy">
          <span className="eyebrow">Sobre a AJ Digital</span>

          <h1>
            A AJ Digital tem marca, site e tecnologia. Mas tem, principalmente, uma pessoa por trás.
          </h1>

          <p>
            Sou André Filipe Jacinto, desenvolvedor, analista de sistemas e fundador da AJ Digital.
            Trabalho com desenvolvimento desde 2021 e hoje ajudo empresas a usarem tecnologia para
            resolver problemas reais: presença digital, organização de processos e automação do que
            é repetitivo.
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
              Ver modelos criados
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
              Minha história com desenvolvimento começou em 2021.
            </h2>

            <p>
              Desde então venho construindo uma trajetória que passou por desenvolvimento Full
              Stack, análise de sistemas, suporte técnico, projetos para empresas e, mais
              recentemente, pela criação da minha própria empresa.
            </p>

            <p>
              Participo pessoalmente de todas as etapas dos projetos: a primeira conversa, o
              levantamento das necessidades, o planejamento, o desenvolvimento, os testes, a
              publicação e a evolução da solução. Quem você chama no WhatsApp é quem desenvolve.
            </p>

            <div className="about-founder-highlight">
              <Rocket size={22} />
              <span>
                Tecnologia criada para empresas que querem sair do improviso e trabalhar de forma
                mais profissional.
              </span>
            </div>
          </Reveal>

          <Reveal className="about-visual-panel" delay={0.15}>
            <div className="about-photo-frame">
              <img
                src="/andre.webp"
                alt="André Filipe Jacinto, fundador da AJ Digital"
                width="900"
                height="1200"
                loading="lazy"
                decoding="async"
              />

              <div className="about-floating-badge badge-one">
                <strong>Desde 2021</strong>
                <small>Desenvolvendo software</small>
              </div>

              <div className="about-floating-badge badge-two">
                <strong>ADS</strong>
                <small>Análise e Desenvolvimento</small>
              </div>

              <div className="about-floating-badge badge-three">
                <strong>WhatsApp</strong>
                <small>Contato direto comigo</small>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding about-timeline-section">
        <Reveal className="about-section-heading">
          <span className="eyebrow">Trajetória</span>
          <h2>De estudante de programação a fundador da AJ Digital.</h2>
          <p>
            Mais de cinco anos construindo experiência em tecnologia — com a mesma curiosidade do
            começo, mas com outra visão sobre o papel de um desenvolvedor dentro de uma empresa.
          </p>
        </Reveal>

        <div className="about-timeline">
          {timeline.map(([marco, title, text]) => (
            <Reveal className="about-timeline-item" key={title}>
              <span className="about-timeline-marker">{marco}</span>

              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding about-values-section">
        <Reveal className="about-section-heading">
          <span className="eyebrow">Como eu trabalho</span>
          <h2>Antes de escolher a tecnologia, a pergunta é outra: qual problema precisamos resolver?</h2>
          <p>
            É essa pergunta que define se o seu caso pede um site, um sistema, uma integração ou
            uma automação — e não o contrário.
          </p>
        </Reveal>

        <div className="about-values-grid">
          {problemas.map(([Icon, title, text]) => (
            <Reveal className="about-value-card" key={title}>
              <Icon size={28} />
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="about-ai-note">
          <Code2 size={24} />

          <p>
            Uso Inteligência Artificial como ferramenta de apoio em várias etapas — análise,
            planejamento, investigação de problemas, documentação e produtividade — sempre
            mantendo a validação técnica e o controle sobre aquilo que é entregue.
          </p>
        </Reveal>
      </section>

      <section className="section-padding about-guarantees-section">
        <Reveal className="about-section-heading">
          <span className="eyebrow">Segurança para contratar</span>
          <h2>O que você tem garantido ao fechar um projeto.</h2>
          <p>
            Contratar desenvolvimento gera dúvida — e é justo. Por isso o que está incluído fica
            escrito aqui, não só na conversa.
          </p>
        </Reveal>

        <div className="about-guarantees-grid">
          {garantias.map(([Icon, title, text]) => (
            <Reveal className="about-guarantee-card" key={title}>
              <Icon size={26} />
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding about-investment-section">
        <Reveal className="about-investment-card">
          <span className="eyebrow">Investimento</span>

          <h2>Por que não existe uma tabela de preços aqui</h2>

          <p>
            Cada projeto é diferente do outro e cada um tem sua personalização. Uma loja com
            catálogo e painel administrativo não custa o mesmo que uma landing page, e um sistema
            interno não custa o mesmo que um site institucional.
          </p>

          <p>
            Por isso o valor sai depois de entender o que você precisa: o que vai ser desenvolvido,
            o que o projeto vai ter e o que faz sentido para o momento da sua empresa. A conversa e
            o orçamento não têm custo nenhum.
          </p>

          <a
            className="primary-btn"
            href="https://wa.me/5548991087702?text=Olá,%20quero%20um%20orçamento%20para%20o%20meu%20projeto%20com%20a%20AJ%20Digital."
            target="_blank"
            rel="noreferrer"
          >
            Pedir meu orçamento <ArrowRight size={18} />
          </a>
        </Reveal>
      </section>

      <section className="section-padding about-tech-section">
        <div className="about-tech-content">
          <Reveal className="about-tech-copy">
            <span className="eyebrow">Tecnologia moderna</span>

            <h2>
              Projetos desenvolvidos com base sólida, visual premium e possibilidade de automação.
            </h2>

            <p>
              Trabalho principalmente com React, JavaScript, Java, Spring Boot, Supabase, APIs REST
              e Git, estudando continuamente desenvolvimento Full Stack, arquitetura de aplicações,
              automações e Inteligência Artificial aplicada ao desenvolvimento de software.
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
