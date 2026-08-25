/**
 * Medição do site (GA4).
 *
 * O ID vem da variável de ambiente VITE_GA_ID (ver .env.example). Sem ela,
 * nada é carregado — o site continua funcionando igual, só não mede.
 *
 * Além do pageview, captamos os cliques que realmente importam aqui: WhatsApp,
 * email, Instagram e "abrir projeto" do portfólio. Isso é feito por um único
 * listener no documento, então CTA novo já entra na medição sem alterar nada.
 */

const GA_ID = import.meta.env.VITE_GA_ID;

function gtag() {
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}

export function initAnalytics() {
  if (!GA_ID || typeof window === 'undefined' || window.__ajAnalyticsReady) return;

  window.__ajAnalyticsReady = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = gtag;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  gtag('js', new Date());
  // O pageview é enviado manualmente a cada troca de rota (SPA).
  gtag('config', GA_ID, { send_page_view: false });

  document.addEventListener('click', handleOutboundClick, true);
}

export function trackPageView(path, title = document.title) {
  if (!GA_ID || !window.gtag) return;

  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title,
    page_location: window.location.href
  });
}

export function trackEvent(name, params = {}) {
  if (!GA_ID || !window.gtag) return;

  window.gtag('event', name, params);
}

/** Descobre o tipo de conversão a partir do destino do link. */
function conversionName(href) {
  if (href.includes('wa.me') || href.includes('api.whatsapp.com')) return 'click_whatsapp';
  if (href.startsWith('mailto:')) return 'click_email';
  if (href.includes('instagram.com')) return 'click_instagram';
  if (href.includes('netlify.app')) return 'click_demo_projeto';
  return null;
}

function handleOutboundClick(event) {
  const link = event.target.closest?.('a[href]');
  if (!link) return;

  const href = link.getAttribute('href') || '';
  const name = conversionName(href);
  if (!name) return;

  trackEvent(name, {
    // De onde o clique saiu: página + texto do botão.
    origem_pagina: window.location.pathname,
    origem_cta: link.textContent.trim().slice(0, 60) || 'sem-texto'
  });
}
