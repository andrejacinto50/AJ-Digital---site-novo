import { useRef, useState } from 'react';
import { AlertCircle, CheckCircle2, MessageCircle } from 'lucide-react';

import { WHATSAPP_NUMBER } from '../data/seo.js';
import {
  MIN_MENSAGEM,
  REQUIRED_FIELDS,
  formatPhone,
  validateContactForm
} from '../lib/validation.js';

const FORM_NAME = 'orcamento';

const projectTypes = [
  'Site profissional',
  'Landing page',
  'Loja / catálogo com WhatsApp',
  'Aplicativo Android e iOS',
  'Sistema sob medida',
  'Automação de processos',
  'Ainda não sei, quero orientação'
];

const emptyForm = {
  nome: '',
  empresa: '',
  whatsapp: '',
  email: '',
  tipo: '',
  mensagem: ''
};

const encode = (data) =>
  Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');

/** Monta a mensagem que chega no WhatsApp, já organizada. */
function buildMessage({ nome, empresa, whatsapp, email, tipo, mensagem }) {
  const linhas = [
    'Olá André! Vim pelo site da AJ Digital.',
    '',
    `*Nome:* ${nome.trim()}`,
    empresa.trim() ? `*Empresa:* ${empresa.trim()}` : null,
    `*WhatsApp:* ${whatsapp}`,
    email.trim() ? `*Email:* ${email.trim()}` : null,
    `*Preciso de:* ${tipo}`,
    mensagem.trim() ? `*Sobre o projeto:* ${mensagem.trim()}` : null
  ];

  // Só remove os campos opcionais vazios (null) — a string vazia é a linha em
  // branco depois da saudação.
  return linhas.filter((linha) => linha !== null).join('\n');
}

/**
 * Formulário de orçamento.
 *
 * O envio abre o WhatsApp com a mensagem já preenchida — é lá que a conversa
 * acontece. Em paralelo, o mesmo conteúdo é registrado no Netlify Forms (o
 * formulário estático escondido em index.html é o que o Netlify detecta no
 * build), para o contato não se perder caso a pessoa desista de apertar enviar
 * no WhatsApp. Não existe backend próprio.
 *
 * A validação é nossa (validation.js) e não a do navegador: mensagem em
 * português, na mesma língua do site, e abaixo do campo certo.
 */
export default function ContactForm() {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [sentLink, setSentLink] = useState(null);
  const formRef = useRef(null);

  function handleChange(event) {
    const { name, value } = event.target;
    const nextValue = name === 'whatsapp' ? formatPhone(value) : value;
    const nextValues = { ...values, [name]: nextValue };

    setValues(nextValues);

    // Enquanto o campo ainda não foi tocado, não incomoda com erro no meio da
    // digitação. Depois de tocado, o erro some assim que for corrigido.
    if (touched[name]) {
      setErrors(validateContactForm(nextValues));
    }
  }

  function handleBlur(event) {
    const { name } = event.target;

    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validateContactForm(values));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validateContactForm(values);
    setErrors(nextErrors);
    setTouched(
      [...REQUIRED_FIELDS, 'email'].reduce((acc, field) => ({ ...acc, [field]: true }), {})
    );

    const firstInvalid = [...REQUIRED_FIELDS, 'email'].find((field) => nextErrors[field]);

    if (firstInvalid) {
      formRef.current?.elements[firstInvalid]?.focus();
      return;
    }

    const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildMessage(values))}`;

    // Precisa ser síncrono, ainda dentro do gesto do usuário, senão o
    // navegador bloqueia a abertura da nova aba.
    window.open(link, '_blank', 'noopener');

    // Cópia de segurança, sem travar a experiência: se falhar, tudo bem —
    // a conversa já foi para o WhatsApp.
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': FORM_NAME, ...values })
    }).catch(() => {});

    setValues(emptyForm);
    setTouched({});
    setErrors({});
    setSentLink(link);
  }

  // Usado só para sinalizar visualmente no botão. O bloqueio real acontece no
  // submit, que mostra o erro de cada campo — botão desabilitado sem explicação
  // deixa a pessoa sem saber o que falta.
  const isIncomplete = Object.keys(validateContactForm(values)).length > 0;

  /** Props comuns dos campos validados, incluindo acessibilidade. */
  function fieldProps(name) {
    const hasError = Boolean(errors[name] && touched[name]);

    return {
      id: name,
      name,
      value: values[name],
      onChange: handleChange,
      onBlur: handleBlur,
      'aria-invalid': hasError || undefined,
      'aria-describedby': hasError ? `${name}-erro` : undefined
    };
  }

  function fieldError(name) {
    if (!errors[name] || !touched[name]) return null;

    return (
      <span className="contact-form-error" id={`${name}-erro`} role="alert">
        <AlertCircle size={14} /> {errors[name]}
      </span>
    );
  }

  const fieldClass = (name) =>
    `contact-form-field${errors[name] && touched[name] ? ' has-error' : ''}`;

  if (sentLink) {
    return (
      <div className="contact-form-card contact-form-success">
        <CheckCircle2 size={40} />

        <h3>Pronto, é só enviar</h3>

        <p>
          Abrimos o WhatsApp com a sua mensagem preenchida. Se a janela não abriu
          automaticamente, use o botão abaixo.
        </p>

        <a className="primary-btn" href={sentLink} target="_blank" rel="noreferrer">
          <MessageCircle size={18} /> Abrir conversa no WhatsApp
        </a>

        <button className="contact-form-again" type="button" onClick={() => setSentLink(null)}>
          Preencher outro contato
        </button>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      className="contact-form-card"
      name={FORM_NAME}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      noValidate
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />

      <p className="contact-form-honeypot">
        <label>
          Não preencha este campo: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className={fieldClass('nome')}>
        <label htmlFor="nome">Nome</label>
        <input {...fieldProps('nome')} type="text" autoComplete="name" />
        {fieldError('nome')}
      </div>

      <div className="contact-form-field">
        <label htmlFor="empresa">Empresa <span>(opcional)</span></label>
        <input
          id="empresa"
          name="empresa"
          type="text"
          value={values.empresa}
          onChange={handleChange}
          autoComplete="organization"
        />
      </div>

      <div className="contact-form-row">
        <div className={fieldClass('whatsapp')}>
          <label htmlFor="whatsapp">WhatsApp</label>
          <input
            {...fieldProps('whatsapp')}
            type="tel"
            inputMode="numeric"
            placeholder="(48) 99999-0000"
            autoComplete="tel"
            maxLength={15}
          />
          {fieldError('whatsapp')}
        </div>

        <div className={fieldClass('email')}>
          <label htmlFor="email">Email <span>(opcional)</span></label>
          <input
            {...fieldProps('email')}
            type="email"
            inputMode="email"
            placeholder="voce@empresa.com.br"
            autoComplete="email"
          />
          {fieldError('email')}
        </div>
      </div>

      <div className={fieldClass('tipo')}>
        <label htmlFor="tipo">O que você precisa</label>
        <select {...fieldProps('tipo')}>
          <option value="">Selecione uma opção</option>
          {projectTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {fieldError('tipo')}
      </div>

      <div className={fieldClass('mensagem')}>
        <label htmlFor="mensagem">Conte um pouco sobre o projeto</label>
        <textarea
          {...fieldProps('mensagem')}
          rows={4}
          placeholder="Tipo de negócio, o que você quer resolver, prazo..."
        />

        <div className="contact-form-field-foot">
          {fieldError('mensagem')}

          <span className="contact-form-counter">
            {values.mensagem.trim().length}/{MIN_MENSAGEM}
          </span>
        </div>
      </div>

      <button
        className={`primary-btn contact-form-submit${isIncomplete ? ' is-blocked' : ''}`}
        type="submit"
      >
        <MessageCircle size={18} /> Enviar pelo WhatsApp
      </button>

      <p className="contact-form-note">
        Ao enviar, o WhatsApp abre com a mensagem pronta. Seus dados são usados
        apenas para responder este contato.
      </p>
    </form>
  );
}
