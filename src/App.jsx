import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Process from './pages/Process.jsx';
import Contact from './pages/Contact.jsx';
import ProjectDetails from './pages/ProjectDetails.jsx';
import NotFound from './pages/NotFound.jsx';
import { trackPageView } from './lib/analytics.js';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  // Link do tipo /servicos#catalogo: o router troca a pagina, mas a rolagem
  // ate a secao e por nossa conta. Como o AnimatePresence espera a animacao de
  // saida terminar, a secao ainda nao existe no momento da troca de rota —
  // por isso tentamos por alguns instantes em vez de olhar uma vez so.
  useEffect(() => {
    if (!location.hash) return undefined;

    let tentativas = 0;
    const intervalo = setInterval(() => {
      const alvo = document.querySelector(location.hash);

      if (alvo) {
        alvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
        clearInterval(intervalo);
        return;
      }

      // Desiste depois de ~2s: a ancora pode simplesmente nao existir.
      if (++tentativas > 20) clearInterval(intervalo);
    }, 100);

    return () => clearInterval(intervalo);
  }, [location.pathname, location.hash]);

  useEffect(() => {
  const applyMobileClass = () => {
    const isMobile =
      window.innerWidth <= 1180 ||
      window.matchMedia('(pointer: coarse)').matches;

    document.documentElement.classList.toggle('aj-mobile', isMobile);
  };

  applyMobileClass();

  window.addEventListener('resize', applyMobileClass);
  window.addEventListener('orientationchange', applyMobileClass);

  return () => {
    window.removeEventListener('resize', applyMobileClass);
    window.removeEventListener('orientationchange', applyMobileClass);
  };
}, []);

  return (
    <div className="app-shell">
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:slug" element={<ProjectDetails />} />
          <Route path="/processo" element={<Process />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
