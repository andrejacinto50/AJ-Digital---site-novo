import {
  ArrowRight,
  Camera,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  Rocket,
  Smartphone
} from 'lucide-react';

import PageTransition from '../components/PageTransition.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Contact() {
  return (
    <PageTransition>
      <section className="page-hero contact-hero section-padding">
        <div className="contact-orb contact-orb-one"></div>
        <div className="contact-orb contact-orb-two"></div>

        <Reveal className="contact-hero-copy">
          <span className="eyebrow">Contato AJ Digital</span>

          <h1>
            Vamos transformar a presença digital da sua empresa?
          </h1>

          <p>
            Seja para um site profissional, catálogo digital,
            sistema web ou aplicativo, podemos conversar sobre a melhor
            solução para o seu negócio.
          </p>

          <a
            className="primary-btn"
            href="https://wa.me/5548991087702"
            target="_blank"
            rel="noreferrer"
          >
            Solicitar orçamento
            <ArrowRight size={18} />
          </a>
        </Reveal>
      </section>

      <section className="section-padding contact-intro-section">
        <Reveal className="contact-intro-card">
          <Rocket size={34} />

          <h2>
            Cada empresa possui necessidades diferentes.
          </h2>

          <p>
            Por isso a AJ Digital desenvolve projetos personalizados,
            alinhados com o segmento, objetivos e realidade de cada negócio.
          </p>

          <p>
            Hoje desenvolvemos sites profissionais, lojas online,
            sistemas web e também soluções com experiência de aplicativo.
          </p>
        </Reveal>
      </section>

      <section className="section-padding contact-grid-premium">
        <Reveal className="contact-card-premium">
          <MessageCircle size={34} />

          <h3>WhatsApp</h3>

          <p>
            Canal principal para orçamento, dúvidas e atendimento.
          </p>

          <a
            href="https://wa.me/5548991087702"
            target="_blank"
            rel="noreferrer"
          >
            Chamar agora
          </a>
        </Reveal>

        <Reveal className="contact-card-premium">
          <Camera size={34} />

          <h3>Instagram</h3>

          <p>
            Veja projetos, bastidores e novidades da AJ Digital.
          </p>

          <a
            href="https://instagram.com/aj__digital"
            target="_blank"
            rel="noreferrer"
          >
            Abrir Instagram
          </a>
        </Reveal>

        <Reveal className="contact-card-premium">
          <Mail size={34} />

          <h3>Email</h3>

          <p>
            Ideal para propostas, parcerias e informações detalhadas.
          </p>

          <a href="mailto:andrejacinto80@gmail.com">
            Enviar email
          </a>
        </Reveal>
      </section>

      <section className="section-padding contact-services-section">
        <Reveal className="contact-services-copy">
          <span className="eyebrow">O que podemos desenvolver</span>

          <h2>
            Soluções digitais para empresas que querem crescer.
          </h2>
        </Reveal>

        <div className="contact-services-grid">
          <Reveal className="contact-service-item">
            <MonitorSmartphone size={28} />
            <span>Sites profissionais</span>
          </Reveal>

          <Reveal className="contact-service-item">
            <Smartphone size={28} />
            <span>Experiência mobile premium</span>
          </Reveal>

          <Reveal className="contact-service-item">
            <Rocket size={28} />
            <span>Aplicativos Android e iOS</span>
          </Reveal>

          <Reveal className="contact-service-item">
            <MessageCircle size={28} />
            <span>Integração com WhatsApp</span>
          </Reveal>
        </div>
      </section>

      <section className="section-padding contact-final-section">
        <Reveal className="contact-final-card">
          <h2>
            Seu próximo cliente pode estar procurando sua empresa agora.
          </h2>

          <p>
            Vamos criar uma presença digital que transmita mais confiança,
            valorize sua marca e facilite o contato com novos clientes.
          </p>

          <a
            className="primary-btn"
            href="https://wa.me/5548991087702"
            target="_blank"
            rel="noreferrer"
          >
            Falar com a AJ Digital
            <ArrowRight size={18} />
          </a>
        </Reveal>
      </section>
    </PageTransition>
  );
}