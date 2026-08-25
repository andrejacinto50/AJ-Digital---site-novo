/**
 * Validação dos campos do formulário de contato.
 *
 * Mantida separada da interface para poder ser testada e reaproveitada em
 * outros formulários (landing pages, orçamento por segmento).
 */

/** DDDs em uso no Brasil (Anatel). Fora dessa lista é erro de digitação. */
const DDDS_VALIDOS = new Set([
  11, 12, 13, 14, 15, 16, 17, 18, 19,
  21, 22, 24, 27, 28,
  31, 32, 33, 34, 35, 37, 38,
  41, 42, 43, 44, 45, 46, 47, 48, 49,
  51, 53, 54, 55,
  61, 62, 63, 64, 65, 66, 67, 68, 69,
  71, 73, 74, 75, 77, 79,
  81, 82, 83, 84, 85, 86, 87, 88, 89,
  91, 92, 93, 94, 95, 96, 97, 98, 99
]);

export const onlyDigits = (value = '') => value.replace(/\D/g, '');

/** Aplica a máscara (48) 99999-0000 conforme a pessoa digita. */
export function formatPhone(value = '') {
  const digits = onlyDigits(value).slice(0, 11);

  if (digits.length <= 2) return digits.replace(/^(\d{0,2})/, '($1');
  if (digits.length <= 6) return digits.replace(/^(\d{2})(\d{0,4})/, '($1) $2');
  if (digits.length <= 10) return digits.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');

  return digits.replace(/^(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
}

/** Número no formato que o WhatsApp entende: 55 + DDD + número. */
export const toWhatsAppNumber = (value = '') => `55${onlyDigits(value)}`;

export function validateName(value = '') {
  const nome = value.trim();

  if (!nome) return 'Digite seu nome.';
  if (nome.length < 2) return 'Nome muito curto.';

  return null;
}

export function validatePhone(value = '') {
  const digits = onlyDigits(value);

  if (!digits) return 'Digite seu WhatsApp com DDD.';
  if (digits.length < 11) return 'Faltam números. Use DDD + 9 dígitos, ex: (48) 99999-0000.';
  if (!DDDS_VALIDOS.has(Number(digits.slice(0, 2)))) return 'DDD inválido. Confira os dois primeiros números.';
  if (digits[2] !== '9') return 'Celular no Brasil começa com 9 depois do DDD.';
  // Todos os dígitos iguais: (48) 99999-9999 e afins.
  if (/^(\d)\1+$/.test(digits.slice(2))) return 'Esse número não parece válido.';

  return null;
}

export function validateEmail(value = '', { required = false } = {}) {
  const email = value.trim();

  if (!email) return required ? 'Digite seu email.' : null;
  // Um arroba, sem espaços, domínio com ponto e extensão de pelo menos 2 letras.
  if (!/^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/.test(email)) return 'Email inválido. Confira o endereço.';
  if (email.length > 254) return 'Email muito longo.';

  return null;
}

/** Mínimo de caracteres na descrição do projeto. */
export const MIN_MENSAGEM = 20;

export function validateType(value = '') {
  if (!value) return 'Escolha o que você precisa.';

  return null;
}

export function validateMessage(value = '') {
  const mensagem = value.trim();

  if (!mensagem) return 'Conte rapidamente o que você precisa.';
  if (mensagem.length < MIN_MENSAGEM) {
    const faltam = MIN_MENSAGEM - mensagem.length;
    return `Escreva um pouco mais: faltam ${faltam} ${faltam === 1 ? 'caractere' : 'caracteres'}.`;
  }

  return null;
}

/** Campos que impedem o envio enquanto não estiverem válidos. */
export const REQUIRED_FIELDS = ['nome', 'whatsapp', 'tipo', 'mensagem'];

/** Roda todas as validações de uma vez. Retorna { campo: mensagem }. */
export function validateContactForm({ nome, whatsapp, email, tipo, mensagem }) {
  const errors = {};

  const checks = {
    nome: validateName(nome),
    whatsapp: validatePhone(whatsapp),
    email: validateEmail(email),
    tipo: validateType(tipo),
    mensagem: validateMessage(mensagem)
  };

  Object.entries(checks).forEach(([field, error]) => {
    if (error) errors[field] = error;
  });

  return errors;
}
