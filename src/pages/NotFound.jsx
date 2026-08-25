import { Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle } from 'lucide-react';

import PageTransition from '../components/PageTransition.jsx';
import Seo from '../components/Seo.jsx';
import { pageSeo, WHATSAPP_NUMBER } from '../data/seo.js';

export default function NotFound() {
  return (
    <PageTransition>
      <Seo {...pageSeo.notFound} />

      <section className="section-padding compact-hero">
        <span className="eyebrow">Erro 404</span>

        <h1>Essa página não existe</h1>

        <p>
          O endereço que você acessou pode ter sido movido ou digitado incorretamente.
          Você pode voltar para o início ou falar direto com a gente.
        </p>

        <div className="hero-actions">
          <Link className="primary-btn" to="/">
            <ArrowLeft size={18} /> Voltar ao início
          </Link>

          <a
            className="secondary-btn"
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} /> Chamar no WhatsApp
          </a>
        </div>
      </section>
    </PageTransition>
  );
}
