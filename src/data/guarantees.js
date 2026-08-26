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
    'Entrega em 7 a 15 dias',
    'É o prazo normal de um projeto, conforme o tamanho e o retorno das informações.'
  ],
  [
    Wrench,
    'Publicação e configuração inclusas',
    'Hospedagem, domínio, DNS, certificado SSL e publicação. Você recebe o projeto no ar e funcionando.'
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
  [CalendarClock, 'Entrega em 7 a 15 dias']
];
