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
    ShoppingBag,
    'Catálogo ou loja com WhatsApp',
    'Estrutura para apresentar produtos, categorias, ofertas e direcionar o cliente para comprar pelo WhatsApp.'
  ],
  [
    Target,
    'Landing pages de conversão',
    'Páginas estratégicas para campanhas, lançamentos, serviços específicos e captação de contatos.'
  ],
  [
    Code2,
    'Projetos personalizados',
    'Soluções sob medida para negócios que precisam de uma estrutura diferente dos modelos tradicionais.'
  ],
  [
    Smartphone,
    'Experiência mobile premium',
    'Sites pensados para funcionar no celular com aparência moderna, navegação fluida e sensação de aplicativo.'
  ],
  [
    Rocket,
    'Aplicativos Android e iOS',
    'Para empresas que querem ir além, também é possível transformar o projeto em aplicativo publicado nas lojas.'
  ]
];

const serviceSteps = [
  ['01', 'Entendimento', 'Analisamos seu negócio, seu público, seus serviços e o objetivo principal do projeto.'],
  ['02', 'Estratégia', 'Organizamos a estrutura ideal para apresentar sua empresa com clareza e gerar mais confiança.'],
  ['03', 'Desenvolvimento', 'Criamos o site com visual premium, tecnologia moderna, responsividade e foco em conversão.'],
  ['04', 'Entrega', 'Publicamos o projeto e deixamos sua empresa pronta para receber contatos pelo digital.']
];

const idealFor = [
  'Empresas que ainda não têm site profissional',
  'Negócios que dependem apenas do Instagram',
  'Lojas que querem vender pelo WhatsApp',
  'Prestadores de serviço que precisam transmitir mais confiança',
  'Marcas que querem melhorar sua apresentação digital',
  'Empresas que querem evoluir para uma experiência de aplicativo'
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
            Soluções digitais para empresas que querem se destacar, gerar confiança e vender melhor.
          </h1>

          <p>
            Da página institucional ao catálogo com venda pelo WhatsApp, cada projeto é pensado para
            fortalecer sua marca, melhorar sua presença digital e facilitar o contato com novos clientes.
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
              Ver modelos criados
            </a>
          </div>
        </Reveal>
      </section>

      <section className="section-padding services-main-section">
        <SectionTitle
          eyebrow="O que fazemos"
          title="Serviços criados para fortalecer sua presença digital"
          text="A AJ Digital desenvolve projetos modernos, responsivos e estratégicos para empresas que querem sair do improviso e se apresentar melhor na internet."
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
            <span className="eyebrow">Nova possibilidade</span>

            <h2>
              Seu site pode ter experiência de aplicativo. E também pode virar um app de verdade.
            </h2>

            <p>
              Hoje os sites criados pela AJ Digital já são pensados para o celular, com navegação
              fluida, visual moderno e experiência parecida com aplicativo.
            </p>

            <p>
              Para empresas que desejam uma solução mais avançada, também existe a possibilidade de
              transformar o projeto em aplicativo para Android e iOS. Esse tipo de projeto possui um
              investimento maior e é indicado para marcas que querem uma presença digital ainda mais forte.
            </p>

            <a
              className="primary-btn"
              href="https://wa.me/5548991087702?text=Olá,%20quero%20entender%20a%20diferença%20entre%20site,%20site%20com%20experiência%20de%20app%20e%20aplicativo%20Android/iOS."
              target="_blank"
              rel="noreferrer"
            >
              Entender site ou aplicativo <ArrowRight size={18} />
            </a>
          </Reveal>

          <Reveal className="services-app-visual" delay={0.15}>
            <div className="services-phone">
              <div className="services-phone-screen">
                <span>Mobile First</span>
                <h3>Experiência premium no celular</h3>
                <div></div>
                <div></div>
                <button>WhatsApp</button>
              </div>
            </div>

            <div className="services-app-badge app-badge-one">
              <strong>Android</strong>
              <small>Possibilidade avançada</small>
            </div>

            <div className="services-app-badge app-badge-two">
              <strong>iOS</strong>
              <small>Projeto sob medida</small>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding services-original-section">
        <SectionTitle
          eyebrow="Soluções disponíveis"
          title="O que a AJ Digital pode criar para sua empresa"
          text="Cada serviço pode ser adaptado conforme o segmento, objetivo e momento do seu negócio."
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
          <h2>Um processo simples, profissional e pensado para resultado.</h2>
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
              Ideal para empresas que querem parar de depender só das redes sociais.
            </h2>

            <p>
              O Instagram ajuda o cliente a conhecer sua marca, mas o site organiza sua apresentação,
              transmite mais confiança e facilita a decisão de entrar em contato.
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