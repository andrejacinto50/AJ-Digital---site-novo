import { ArrowRight, CalendarClock, Handshake, ShieldCheck } from 'lucide-react';

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="cta-glow"></div>
      <span className="eyebrow">Vamos elevar sua presença digital?</span>
      <h2>Seu negócio merece um site à altura da qualidade que você entrega.</h2>
      <p>Fale com a AJ Digital e veja a melhor estrutura para apresentar sua empresa com mais profissionalismo.</p>
      <a className="primary-btn" href="https://wa.me/5548991087702" target="_blank" rel="noreferrer">
        Chamar no WhatsApp <ArrowRight size={18} />
      </a>

      <ul className="cta-guarantees">
        <li>
          <ShieldCheck size={16} /> 12 meses de garantia
        </li>
        <li>
          <Handshake size={16} /> 3 meses de acompanhamento
        </li>
        <li>
          <CalendarClock size={16} /> Entrega em 7 a 15 dias
        </li>
      </ul>
    </section>
  );
}
