import { Bot, Globe2, MonitorCog, Smartphone } from 'lucide-react';

/**
 * Catálogo do que a AJ Digital desenvolve.
 *
 * Fonte única: alimenta o catálogo completo da página de Serviços e o resumo
 * por categoria do Início. Serviço novo entra aqui e aparece nos dois lugares.
 *
 * `destaques` são os itens que representam a categoria no Início — os demais
 * aparecem só na página de Serviços.
 */
export const positioning = {
  claim: 'Sites • Sistemas • Aplicativos • Automações',
  description:
    'Desenvolvemos soluções digitais sob medida para apresentar sua empresa, ' +
    'organizar processos e automatizar tarefas do dia a dia.'
};

export const catalog = [
  {
    id: 'sites',
    icon: Globe2,
    title: 'Sites e presença digital',
    summary:
      'Da página única para uma campanha até o projeto exclusivo com painel administrativo e loja.',
    destaques: ['Landing Page', 'Site Institucional Multipágina', 'Site com Painel Administrativo', 'E-commerce'],
    items: [
      ['Landing Page', 'Página única focada em uma campanha, serviço ou conversão.'],
      ['Site One Page', 'Toda a apresentação da empresa em uma página.'],
      ['Site Institucional Multipágina', 'Início, Sobre, Serviços, Contato e o que mais o negócio precisar.'],
      [
        'Site Premium Personalizado',
        'Projeto exclusivo, com animações, identidade própria, SEO, WhatsApp, Maps e experiência mobile premium.'
      ],
      [
        'Site com Painel Administrativo',
        'Você mesmo altera textos, imagens, serviços, galeria e produtos, sem depender de ninguém.'
      ],
      ['Catálogo Digital / Loja via WhatsApp', 'Produtos organizados e pedidos direcionados direto para o WhatsApp.'],
      ['E-commerce', 'Loja virtual completa, com carrinho, produtos, pedidos e pagamento.'],
      [
        'Site para turismo e reservas',
        'Passeios, experiências, galeria, formulários e possibilidade de agenda ou reservas.'
      ],
      ['Portais e plataformas personalizadas', 'Quando o projeto não se encaixa em um site convencional.']
    ]
  },

  {
    id: 'sistemas',
    icon: MonitorCog,
    title: 'Sistemas sob medida',
    summary:
      'Quando o problema não é presença digital, e sim a operação: informação espalhada, controle no caderno, processo manual.',
    destaques: ['Painéis administrativos', 'Sistemas de agendamento', 'Controle de pedidos', 'Dashboards'],
    items: [
      ['Sistemas web personalizados', 'Desenvolvidos para o processo da sua empresa, não para o processo de outra.'],
      ['Painéis administrativos', 'Um lugar só para gerenciar o que hoje está espalhado.'],
      ['Sistemas internos de gestão', 'Organizam a rotina da equipe e o que cada um precisa acompanhar.'],
      ['Cadastro e gerenciamento de clientes', 'Histórico, dados e contatos organizados e acessíveis.'],
      ['Controle de pedidos e solicitações', 'Cada pedido com status, responsável e acompanhamento.'],
      ['Gestão de serviços', 'Serviços, valores e execução sob controle.'],
      ['Dashboards', 'Os números da operação em uma tela, atualizados.'],
      ['Sistemas de agendamento', 'Horários, disponibilidade e confirmação sem troca de mensagem manual.'],
      ['Sistemas de reservas', 'Para quem trabalha com vagas, datas ou capacidade limitada.'],
      ['Controle de entregas e logística', 'Acompanhamento do que saiu, do que está em rota e do que foi entregue.'],
      ['Formulários e processos internos', 'O formulário de papel ou planilha vira processo digital.']
    ]
  },

  {
    id: 'automacoes',
    icon: Bot,
    title: 'Automações',
    summary:
      'Me conte uma tarefa que alguém faz manualmente todo dia. Eu analiso se dá para transformar em processo automático.',
    destaques: [
      'Automação de atendimento inicial',
      'Automação de agendamentos',
      'Confirmações e lembretes automáticos',
      'Integrações com APIs'
    ],
    items: [
      ['Automação de atendimento inicial', 'O primeiro contato acontece sozinho, a qualquer hora.'],
      ['Formulários inteligentes', 'As perguntas mudam conforme a resposta anterior.'],
      ['Triagem automática de clientes', 'Chega até você já separado por tipo, urgência ou serviço.'],
      ['Solicitações organizadas antes do WhatsApp', 'A conversa começa com todas as informações em mãos.'],
      ['Automação de agendamentos', 'Sem ficar combinando horário mensagem por mensagem.'],
      ['Automação de reservas', 'Disponibilidade conferida e reserva confirmada automaticamente.'],
      ['Confirmações e lembretes automáticos', 'Menos falta, menos remarcação, menos cobrança manual.'],
      ['Organização automática de pedidos', 'O pedido entra e já cai organizado no lugar certo.'],
      ['Integrações entre site, sistema e WhatsApp', 'As três pontas trocando informação sem ninguém no meio.'],
      ['Automação de tarefas administrativas', 'Aquilo que se repete todo dia deixa de consumir tempo da equipe.'],
      ['Fluxos personalizados', 'Montados de acordo com o processo real da sua empresa.'],
      ['Integrações com APIs e plataformas externas', 'Conectando o que sua empresa já usa.']
    ]
  },

  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Aplicativos e experiência mobile',
    summary:
      'A maior parte dos seus clientes acessa pelo celular. Aqui o projeto é pensado para essa tela primeiro.',
    destaques: ['Aplicações instaláveis (PWA)', 'Experiência de aplicativo', 'Aplicativos Android e iOS', 'Painéis responsivos'],
    items: [
      ['Aplicações web instaláveis (PWA)', 'O cliente instala no celular e abre como aplicativo, sem passar pela loja.'],
      ['Sistemas com experiência de aplicativo', 'Navegação fluida e sensação de app, direto no navegador.'],
      ['Aplicativos Android e iOS', 'Conforme a necessidade e a arquitetura do projeto.'],
      ['Painéis e plataformas responsivas', 'Para usar e gerenciar de qualquer lugar, pelo celular.']
    ]
  }
];
