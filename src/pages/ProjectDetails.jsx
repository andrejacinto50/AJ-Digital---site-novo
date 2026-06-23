import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ExternalLink,
  Layers3,
  MessageCircle,
  MonitorSmartphone,
  Rocket,
  Smartphone,
  Target,
  Zap
} from 'lucide-react';

import PageTransition from '../components/PageTransition.jsx';
import Reveal from '../components/Reveal.jsx';
import CTA from '../components/CTA.jsx';
import { projects } from '../data/projects.js';

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <PageTransition>
        <section className="section-padding compact-hero">
          <h1>Projeto não encontrado</h1>
          <Link className="secondary-btn" to="/portfolio">
            Voltar ao portfólio
          </Link>
        </section>
      </PageTransition>
    );
  }

  const whatsappMessage = encodeURIComponent(project.ctaMessage || `Olá, vi o projeto ${project.title} da AJ Digital e quero algo parecido.`);
  const whatsappLink = `https://wa.me/5548991087702?text=${whatsappMessage}`;

  return (
    <PageTransition>
      <section className="page-hero project-detail-hero section-padding">
        <div className="project-detail-orb detail-orb-one"></div>
        <div className="project-detail-orb detail-orb-two"></div>

        <Reveal className="project-detail-copy">
          <Link className="back-link" to="/portfolio">
            <ArrowLeft size={17} /> Voltar ao portfólio
          </Link>

          <span className="eyebrow">{project.category}</span>

          <h1>{project.title}</h1>

          <p>{project.description}</p>

          <div className="hero-actions">
            <a
              className="primary-btn"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              Abrir projeto <ExternalLink size={18} />
            </a>

            <a
              className="secondary-btn"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              {project.ctaText || 'Quero algo parecido'}
            </a>
          </div>
        </Reveal>

        <Reveal className="detail-premium-mockup" delay={0.12}>
          <div className="browser-bar gold-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="detail-mockup-content">
            <span className="detail-mockup-badge">Projeto Premium</span>
            <h3>{project.title}</h3>

            <div className="detail-mock-lines">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="detail-mock-grid">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="detail-floating-card detail-card-one">
            <Smartphone size={18} />
            <div>
              <strong>Mobile First</strong>
              <small>Experiência no celular</small>
            </div>
          </div>

          <div className="detail-floating-card detail-card-two">
            <MessageCircle size={18} />
            <div>
              <strong>WhatsApp</strong>
              <small>Contato direto</small>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-padding project-overview-section">
        <div className="project-overview-grid">
          <Reveal className="project-overview-card">
            <span className="eyebrow">Visão geral</span>
            <h2>O que esse modelo entrega</h2>
            <p>{project.longDescription}</p>

            {project.result && (
              <div className="project-result-box">
                <Rocket size={22} />
                <span>{project.result}</span>
              </div>
            )}
          </Reveal>

          <Reveal className="project-objective-card" delay={0.12}>
            <Target size={30} />
            <h3>Objetivo do projeto</h3>
            <p>{project.objective}</p>

            {project.positioning && (
              <>
                <h3>Posicionamento</h3>
                <p>{project.positioning}</p>
              </>
            )}
          </Reveal>
        </div>
      </section>

      <section className="section-padding project-highlights-section">
        <Reveal className="project-section-heading">
          <span className="eyebrow">Destaques principais</span>
          <h2>Principais diferenciais desse modelo</h2>
        </Reveal>

        <div className="project-highlights-grid">
          {project.highlights?.map((item) => (
            <Reveal className="project-highlight-card" key={item}>
              <CheckCircle2 size={22} />
              <span>{item}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding project-features-section">
        <div className="project-feature-layout">
          <Reveal className="project-feature-copy">
            <span className="eyebrow">Estrutura completa</span>
            <h2>Tudo que esse projeto pode incluir</h2>
            <p>
              Uma estrutura pensada para apresentar melhor a empresa, valorizar seus serviços
              ou produtos e facilitar a decisão do cliente.
            </p>
          </Reveal>

          <div className="project-feature-list">
            {project.features?.map((item) => (
              <Reveal className="project-feature-item" key={item}>
                <BadgeCheck size={21} />
                <span>{item}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding project-benefits-section">
        <Reveal className="project-section-heading">
          <span className="eyebrow">Benefícios para o negócio</span>
          <h2>Por que esse modelo pode fazer diferença</h2>
        </Reveal>

        <div className="project-benefits-grid">
          {project.benefits?.map((item) => (
            <Reveal className="project-benefit-card" key={item}>
              <Zap size={22} />
              <p>{item}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding project-mobile-section">
        <div className="project-mobile-content">
          <Reveal className="project-mobile-copy">
            <span className="eyebrow">Experiência mobile</span>

            <h2>Feito para funcionar muito bem no celular.</h2>

            <p>{project.mobileExperience}</p>

            <div className="project-app-box">
              <MonitorSmartphone size={24} />
              <div>
                <h3>Possibilidade de evolução para aplicativo</h3>
                <p>{project.appPossibility}</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="project-phone-visual" delay={0.12}>
            <div className="project-phone">
              <div className="project-phone-screen">
                <span>Mobile First</span>
                <h3>{project.title}</h3>
                <div></div>
                <div></div>
                <button>WhatsApp</button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding project-details-info-section">
        <div className="project-info-grid">
          <Reveal className="project-info-card">
            <Layers3 size={28} />
            <h3>Seções do projeto</h3>

            <div className="project-tags">
              {project.sections?.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </Reveal>

          <Reveal className="project-info-card" delay={0.12}>
            <MonitorSmartphone size={28} />
            <h3>Tecnologias e recursos</h3>

            <div className="project-tags">
              {project.technologies?.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </Reveal>

          <Reveal className="project-info-card" delay={0.18}>
            <Target size={28} />
            <h3>Ideal para</h3>

            <div className="project-tags">
              {project.idealFor?.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding project-final-cta-section">
        <Reveal className="project-final-cta">
          <span className="eyebrow">Quer algo parecido?</span>

          <h2>
            Sua empresa também pode ter uma presença digital nesse nível.
          </h2>

          <p>
            A AJ Digital adapta a estrutura, o visual e a estratégia conforme o seu segmento,
            seu público e o objetivo principal do projeto.
          </p>

          <div className="hero-actions">
            <a
              className="primary-btn"
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
            >
              {project.ctaText || 'Quero algo parecido'} <ArrowRight size={18} />
            </a>

            <a
              className="secondary-btn"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              Abrir projeto <ExternalLink size={18} />
            </a>
          </div>
        </Reveal>
      </section>

      <CTA />
    </PageTransition>
  );
}