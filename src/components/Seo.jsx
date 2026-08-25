import { useEffect } from 'react';
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL
} from '../data/seo.js';

/**
 * Aplica título, descrição, canonical e tags de compartilhamento da rota atual.
 *
 * Feito na mão para não trazer dependência nova. Como o site é uma SPA, as tags
 * são atualizadas no cliente — o Google renderiza JavaScript e enxerga o
 * resultado. Se um dia for necessário preview correto de rota interna no
 * WhatsApp/LinkedIn, o caminho é pré-renderizar o build (SSG).
 */
function upsert(selector, attributes) {
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement(selector.startsWith('link') ? 'link' : 'meta');
    document.head.appendChild(tag);
  }

  Object.entries(attributes).forEach(([key, value]) => tag.setAttribute(key, value));
}

export default function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  noindex = false
}) {
  useEffect(() => {
    const url = `${SITE_URL}${path === '/' ? '' : path}`;

    document.title = title;

    upsert('meta[name="description"]', { name: 'description', content: description });
    upsert('link[rel="canonical"]', { rel: 'canonical', href: url });
    upsert('meta[name="robots"]', {
      name: 'robots',
      content: noindex ? 'noindex, follow' : 'index, follow'
    });

    upsert('meta[property="og:type"]', { property: 'og:type', content: type });
    upsert('meta[property="og:site_name"]', { property: 'og:site_name', content: SITE_NAME });
    upsert('meta[property="og:locale"]', { property: 'og:locale', content: 'pt_BR' });
    upsert('meta[property="og:title"]', { property: 'og:title', content: title });
    upsert('meta[property="og:description"]', { property: 'og:description', content: description });
    upsert('meta[property="og:url"]', { property: 'og:url', content: url });
    upsert('meta[property="og:image"]', { property: 'og:image', content: image });

    upsert('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsert('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    upsert('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description
    });
    upsert('meta[name="twitter:image"]', { name: 'twitter:image', content: image });
  }, [title, description, path, image, type, noindex]);

  return null;
}
