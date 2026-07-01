import {
  ArrowRight,
  BadgeCheck,
  Code2,
  Layers3,
  MessageCircle,
  MonitorSmartphone,
  Rocket,
  ShoppingBag,
  Smartphone,
  Target,
  Zap
} from 'lucide-react';

import PageTransition from '../components/PageTransition.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import CTA from '../components/CTA.jsx';
import { services } from '../data/services.js';

const mainServices = [
  [
    MonitorSmartphone,
    'Sites profissionais',
    'Sites modernos, rápidos e responsivos para empresas que querem transmitir mais confiança e valorizar sua marca.'
  ],
  [
    Zap,
    'Automação de processos',
    'Automatizamos tarefas repetitivas para sua empresa economizar tempo, organizar demandas e trabalhar com mais eficiência.'
  ],
  [
    MessageCircle,
    'WhatsApp e atendimento',
    'Soluções para facilitar contatos, respostas, orçamentos, direcionamentos e atendimento ao cliente pelo WhatsApp.'
  ],
  [
    Code2,
    'Sistemas sob medida',
    'Projetos personalizados para empresas que precisam organizar processos internos ou criar uma solução própria.'
  ],
  [
    Smartphone,
    'Experiência mobile premium',
    'Sites e sistemas pensados para funcionar no celular com aparência moderna, navegação fluida e sensação de aplicativo.'
  ],
  [
    Rocket,
    'Aplicativos Android e iOS',
    'Para empresas que querem ir além, também é possível transformar o projeto em aplicativo publicado nas lojas.'
  ]
];

const serviceSteps = [
  ['01', 'Entendimento', 'Analisamos seu negócio, sua rotina, seus processos e o objetivo principal do projeto.'],
  ['02', 'Estratégia', 'Identificamos o que pode ser criado, melhorado ou automatizado para gerar mais resultado.'],
  ['03', 'Desenvolvimento', 'Criamos o site, sistema, aplicativo ou automação com tecnologia moderna e foco em eficiência.'],
  ['04', 'Implantação', 'Publicamos, configuramos e deixamos a solução pronta para ajudar sua empresa no dia a dia.']
];

const idealFor = [
  'Empresas que ainda não têm site profissional',
  'Negócios que dependem apenas do Instagram',
  'Empresas que perdem tempo com tarefas repetitivas',
  'Prestadores de serviço que precisam transmitir mais confiança',
  'Marcas que querem melhorar sua apresentação digital',
  'Empresas que querem automatizar atendimento, processos ou rotinas internas'
];

export default function Services() {
  return (
    <PageTransition>
      <section className="page-hero services-hero section-padding compact-hero">
        <div className="services-hero-orb services-orb-one"></div>
        <div className="services-hero-orb services-orb-two"></div>

        <Reveal className="services-hero-copy">
          <span className="eyebrow">Serviços AJ Digital</span>

          <h1>
            Soluções digitais para empresas que querem vender melhor, economizar tempo e crescer com tecnologia.
          </h1>

          <p>
            De sites profissionais a automações inteligentes, cada projeto é pensado para fortalecer
            sua presença digital, melhorar o atendimento e tornar sua empresa mais produtiva.
          </p>

          <div className="services-hero-actions">
            <a
              className="primary-btn"
              href="https://wa.me/5548991087702?text=Olá,%20quero%20entender%20qual%20serviço%20da%20AJ%20Digital%20faz%20mais%20sentido%20para%20minha%20empresa."
              target="_blank"
              rel="noreferrer"
            >
              Quero uma solução digital <ArrowRight size={18} />
            </a>

            <a className="secondary-btn" href="/portfolio">
              Ver projetos criados
            </a>
          </div>
        </Reveal>
      </section>

      <section className="section-padding services-main-section">
        <SectionTitle
          eyebrow="O que fazemos"
          title="Serviços criados para fortalecer sua empresa"
          text="A AJ Digital desenvolve sites, sistemas, aplicativos e automações para empresas que querem sair do improviso e trabalhar de forma mais profissional."
        />

        <div className="services-premium-grid">
          {mainServices.map(([Icon, title, description]) => (
            <Reveal className="services-premium-card" key={title}>
              <div className="services-card-icon">
                <Icon size={28} />
              </div>

              <h3>{title}</h3>
              <p>{description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding services-app-section">
        <div className="services-app-content">
          <Reveal className="services-app-copy">
            <span className="eyebrow">Sites, apps e automações</span>

            <h2>
              Sua empresa pode ter site, aplicativo e automações trabalhando juntos.
            </h2>

            <p>
              Hoje os projetos criados pela AJ Digital já são pensados para o celular, com navegação
              fluida, visual moderno e experiência parecida com aplicativo.
            </p>

            <p>
              Além disso, também é possível criar automações, sistemas internos, integrações com
              WhatsApp e até aplicativos Android e iOS, dependendo da necessidade e do momento da empresa.
            </p>

            <a
              className="primary-btn"
              href="https://wa.me/5548991087702?text=Olá,%20quero%20entender%20como%20site,%20app%20e%20automação%20podem%20ajudar%20minha%20empresa."
              target="_blank"
              rel="noreferrer"
            >
              Entender as possibilidades <ArrowRight size={18} />
            </a>
          </Reveal>

          <Reveal className="services-app-visual" delay={0.15}>
            <div className="services-phone">
              <div className="services-phone-screen">
                <span>Mobile + Automação</span>
                <h3>Soluções digitais para empresas</h3>
                <div></div>
                <div></div>
                <button>WhatsApp</button>
              </div>
            </div>

            <div className="services-app-badge app-badge-one">
              <strong>Apps</strong>
              <small>Possibilidade avançada</small>
            </div>

            <div className="services-app-badge app-badge-two">
              <strong>IA</strong>
              <small>Automação inteligente</small>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding services-original-section">
        <SectionTitle
          eyebrow="Soluções disponíveis"
          title="O que a AJ Digital pode criar para sua empresa"
          text="Cada serviço pode ser adaptado conforme o segmento, objetivo, rotina e necessidade do seu negócio."
        />

        <div className="service-grid">
          {services.map(({ icon: Icon, title, description }) => (
            <Reveal className="service-card" key={title}>
              <Icon size={30} />
              <h3>{title}</h3>
              <p>{description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding services-process-section">
        <Reveal className="services-section-heading">
          <span className="eyebrow">Como funciona</span>
          <h2>Um processo simples, profissional e pensado para transformar necessidades em soluções.</h2>
        </Reveal>

        <div className="services-process-grid">
          {serviceSteps.map(([number, title, text]) => (
            <Reveal className="services-process-card" key={number}>
              <strong>{number}</strong>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding services-ideal-section">
        <div className="services-ideal-content">
          <Reveal className="services-ideal-copy">
            <span className="eyebrow">Para quem é</span>

            <h2>
              Ideal para empresas que querem parar de depender só das redes sociais e do trabalho manual.
            </h2>

            <p>
              O Instagram ajuda o cliente a conhecer sua marca, mas uma solução digital bem construída
              organiza sua apresentação, facilita o atendimento, reduz tarefas repetitivas e melhora a
              experiência do cliente.
            </p>
          </Reveal>

          <div className="services-ideal-list">
            {idealFor.map((item) => (
              <Reveal className="services-ideal-item" key={item}>
                <BadgeCheck size={22} />
                <span>{item}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </PageTransition>
  );
}