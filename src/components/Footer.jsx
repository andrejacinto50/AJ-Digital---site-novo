import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  AtSign
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow"></div>

      <div className="footer-grid">

        <div className="footer-brand-column">
          <div className="footer-brand-wrap">
            <img
              src="/ajdigital.png"
              alt="AJ Digital"
              className="footer-logo"
            />

            <div>
              <h3>AJ Digital</h3>
              <span>Soluções Digitais para Empresas</span>
            </div>
          </div>

          <p>
            Desenvolvemos sites profissionais, sistemas, aplicativos e automações inteligentes
            para empresas que desejam ganhar produtividade, fortalecer sua presença digital
            e crescer com tecnologia.
          </p>

          <a
            className="footer-cta"
            href="https://wa.me/5548991087702"
            target="_blank"
            rel="noreferrer"
          >
            Falar com um especialista
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div>
          <h4>Navegação</h4>

          <Link to="/">Início</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/portfolio">Portfólio</Link>
          <Link to="/processo">Processo</Link>
          <Link to="/contato">Contato</Link>
        </div>

        <div>
          <h4>Soluções</h4>

          <span>Sites Profissionais</span>
          <span>Automação de Processos</span>
          <span>Sistemas Sob Medida</span>
          <span>Aplicativos Android e iOS</span>
          <span>Integrações</span>
          <span>Inteligência Artificial</span>
        </div>

        <div>
          <h4>Contato</h4>

          <a
            href="https://wa.me/5548991087702"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>

          <a
            href="https://instagram.com/aj__digital"
            target="_blank"
            rel="noreferrer"
          >
            <AtSign size={16} />
            Instagram
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=andrejacinto80@gmail.com&su=Solicitação%20de%20Orçamento%20-%20AJ%20Digital&body=Olá%20André,%20vim%20pelo%20site%20da%20AJ%20Digital%20e%20gostaria%20de%20mais%20informações%20sobre%20um%20projeto."
            target="_blank"
            rel="noreferrer"
          >
            <Mail size={16} />
            andrejacinto80@gmail.com
          </a>

          <a
            href="https://ajdigital.dev.br"
            target="_blank"
            rel="noreferrer"
          >
            <MonitorSmartphone size={16} />
            ajdigital.dev.br
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © 2026 AJ Digital. Transformando empresas através da tecnologia.
        </span>
      </div>
    </footer>
  );
}