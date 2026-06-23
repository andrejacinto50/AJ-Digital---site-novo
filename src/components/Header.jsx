import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', path: '/' },
  { label: 'Sobre', path: '/sobre' },
  { label: 'Serviços', path: '/servicos' },
  { label: 'Portfólio', path: '/portfolio' },
  { label: 'Processo', path: '/processo' },
  { label: 'Contato', path: '/contato' }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1180);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <header className="site-header">
      <Link to="/" className="brand" onClick={() => setOpen(false)}>
        <img
          src="/ajdigital.png"
          alt="AJ Digital"
          className="brand-logo"
        />

        <span>
          <strong>AJ Digital</strong>
        </span>
      </Link>

      {!isMobile && (
        <nav className="nav desktop-nav">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path}>
              {item.label}
            </NavLink>
          ))}

          <a
            className="nav-cta"
            href="https://wa.me/5548991087702"
            target="_blank"
            rel="noreferrer"
          >
            Orçamento
          </a>
        </nav>
      )}

      {isMobile && (
        <>
          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Abrir menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

          {open && (
            <nav className="mobile-nav">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}

              <a
                className="nav-cta"
                href="https://wa.me/5548991087702"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                Orçamento
              </a>
            </nav>
          )}
        </>
      )}
    </header>
  );
}