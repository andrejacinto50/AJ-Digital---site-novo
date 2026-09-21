import {
  BadgeCheck,
  CalendarClock,
  Handshake,
  MessageCircle,
  ShieldCheck,
  Wrench
} from 'lucide-react';

/**
 * O que está garantido em qualquer projeto.
 *
 * Fonte única: Início, Sobre e as páginas de projeto leem daqui. Mudou a
 * política, muda em um lugar só.
 */
export const guarantees = [
  [
    ShieldCheck,
    '12 meses de garantia',
    'Correções relacionadas ao desenvolvimento cobertas por um ano inteiro após a entrega.'
  ],
  [
    Handshake,
    '3 meses de acompanhamento',
    'O Programa de Acompanhamento AJ Digital segue com você nos primeiros meses do projeto no ar.'
  ],
  [
    CalendarClock,
    'Site no ar em 7 a 15 dias',
    'Sistemas e plataformas com reservas levam até 30. O prazo depende do tamanho do projeto e da rapidez com que você envia fotos, textos e logo.'
  ],
  [
    Wrench,
    'Publicação e configuração inclusas',
    'Hospedagem, domínio, DNS, certificado SSL e publicação configurados. Domínio incluso no primeiro ano. Você recebe o projeto no ar e funcionando.'
  ],
  [
    BadgeCheck,
    'Entrega conforme o combinado',
    'O que foi acordado na conversa é o que é entregue — sem surpresa no meio do caminho.'
  ],
  [
    MessageCircle,
    'Atendimento com quem desenvolve',
    'Sem intermediário e sem robô: você fala direto comigo, do primeiro contato à publicação.'
  ]
];

/** Versão curta, para as faixas acima dos botões de contato. */
export const guaranteesStrip = [
  [ShieldCheck, '12 meses de garantia'],
  [Handshake, '3 meses de acompanhamento'],
  [CalendarClock, 'Entrega em 7 a 30 dias']
];
