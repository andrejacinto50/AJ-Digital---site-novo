/**
 * Fonte única das informações de SEO do site.
 * Alterou aqui, muda em todas as páginas, no sitemap e nos previews de link.
 */

export const SITE_URL = 'https://ajdigital.dev.br';
export const SITE_NAME = 'AJ Digital';

/** Região usada nos textos e no schema local. */
export const REGION = 'Grande Florianópolis';
export const REGION_FULL = 'Grande Florianópolis, Santa Catarina';

export const WHATSAPP_NUMBER = '5548991087702';
export const CONTACT_EMAIL = 'andrejacinto80@gmail.com';
export const INSTAGRAM = 'https://instagram.com/aj__digital';

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

export const DEFAULT_DESCRIPTION =
  `Sites, sistemas, aplicativos e automações sob medida para empresas da ${REGION}. ` +
  'Projetos em React, mobile first e integrados ao WhatsApp.';

/**
 * Meta por rota. Título até ~60 caracteres, descrição até ~155 —
 * acima disso o Google corta no resultado de busca.
 */
export const pageSeo = {
  home: {
    title: `AJ Digital | Sites, sistemas e automações na ${REGION}`,
    description: DEFAULT_DESCRIPTION,
    path: '/'
  },

  about: {
    title: `Sobre a AJ Digital | Desenvolvimento web na ${REGION}`,
    description:
      `Conheça a AJ Digital, estúdio de tecnologia da ${REGION} que desenvolve sites, ` +
      'sistemas sob medida, aplicativos e automações para pequenas e médias empresas.',
    path: '/sobre'
  },

  services: {
    title: 'Serviços | Sites, sistemas, apps e automação de processos',
    description:
      'Catálogo completo: landing pages, sites institucionais, e-commerce, painéis ' +
      'administrativos, sistemas de agendamento, automações e aplicativos Android e iOS.',
    path: '/servicos'
  },

  portfolio: {
    title: 'Portfólio | Modelos de site premium para empresas',
    description:
      'Modelos demonstrativos criados pela AJ Digital para lojas, barbearias, restaurantes, ' +
      'academias e e-commerce. Veja cada projeto funcionando no celular e no computador.',
    path: '/portfolio'
  },

  process: {
    title: 'Como trabalhamos | Processo de projeto da AJ Digital',
    description:
      'Diagnóstico, planejamento, desenvolvimento e implantação: as quatro etapas de um ' +
      'projeto AJ Digital, do primeiro contato até a solução publicada e funcionando.',
    path: '/processo'
  },

  contact: {
    title: `Contato | Orçamento de site e automação na ${REGION}`,
    description:
      'Peça um orçamento para o seu projeto digital. Atendimento por WhatsApp para empresas ' +
      `da ${REGION} e de todo o Brasil.`,
    path: '/contato'
  },

  notFound: {
    title: 'Página não encontrada | AJ Digital',
    description: 'O endereço acessado não existe ou foi movido.',
    path: '/404',
    noindex: true
  }
};

/** Meta da página de detalhe de um projeto do portfólio. */
export function projectSeo(project) {
  return {
    title: `${project.title} | Portfólio AJ Digital`,
    description: project.description,
    path: `/portfolio/${project.slug}`,
    // OG usa o PNG: alguns leitores de preview (WhatsApp incluso) ainda
    // ignoram WebP.
    image: `${SITE_URL}${project.image.replace('.webp', '.png')}`
  };
}
