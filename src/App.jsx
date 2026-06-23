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

export default function App() {
  const location = useLocation();

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
        </Routes>
      </AnimatePresence>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
