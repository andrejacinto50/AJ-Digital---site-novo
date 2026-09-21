import {
  ArrowRight,
  BadgeCheck,
  FileSignature,
  Images,
  Rocket,
  Type,
  UserRound
} from 'lucide-react';

import PageTransition from '../components/PageTransition.jsx';
import Seo from '../components/Seo.jsx';
import { pageSeo } from '../data/seo.js';
import Reveal from '../components/Reveal.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import CTA from '../components/CTA.jsx';
import Faq from '../components/Faq.jsx';
import { guaranteesStrip } from '../data/guarantees.js';

/**
 * As sete etapas reais de um projeto.
 *
 * Cada uma diz o que acontece do lado da AJ Digital e o que é preciso do
 * cliente — é a segunda parte que costuma faltar, e é o que mais atrasa
 * projeto. `entrega` fecha a etapa com o que sai dela.
 */
const steps = [
  {
    numero: '01',
    titulo: 'Entendimento e análise',
    acontece:
      'O primeiro passo não é oferecer um site pronto. É entender como a empresa funciona: o que você vende, como o cliente chega até você, como acontece o atendimento, quais tarefas ainda são manuais e onde se perde tempo hoje.',
    lista: [
      'Como a empresa funciona no dia a dia',
      'Serviços ou produtos oferecidos',
      'Como os clientes chegam e são atendidos',
      'O que ainda é feito manualmente',
      'Onde existe perda de tempo ou desorganização',
      'Qual é o objetivo principal do projeto'
    ],
    deVoce: 'Só a conversa. Sem compromisso e sem custo.'
  },
  {
    numero: '02',
    titulo: 'Proposta da solução',
    acontece:
      'Com a empresa entendida, defino o que realmente faz sentido desenvolver — e muitas vezes é uma combinação: site profissional, sistema sob medida, painel administrativo, aplicativo ou PWA, automação, catálogo digital, integrações. Quando ajuda a decidir, apresento um esboço ou prévia antes do projeto completo, para você enxergar a ideia em vez de imaginar.',
    deVoce: 'Ler a proposta com calma, perguntar o que não ficou claro e aprovar. O contrato é assinado antes do início, e a condição de pagamento fica definida nele, conforme o projeto.'
  },
  {
    numero: '03',
    titulo: 'Planejamento e estrutura',
    acontece:
      'A ideia aprovada vira projeto definido antes de virar código: páginas, funcionalidades, identidade visual, conteúdos, imagens, integrações, banco de dados quando necessário, estrutura do painel, experiência no celular, chamadas para ação e o que pode crescer depois.',
    deVoce: 'Os materiais da empresa: logo, fotos, textos, lista de serviços e informações de contato. É a parte que mais pesa no prazo.'
  },
  {
    numero: '04',
    titulo: 'Desenvolvimento',
    acontece:
      'A solução é construída de forma personalizada: front-end, back-end quando necessário, banco de dados, painel administrativo, automações, integrações, WhatsApp, responsividade, segurança, desempenho, SEO técnico inicial e testes. Tudo pensado primeiro para o celular, porque é de lá que vem a maior parte dos clientes de negócio local.',
    deVoce: 'Nada nesta etapa além de responder alguma dúvida pontual sobre o conteúdo.'
  },
  {
    numero: '05',
    titulo: 'Apresentação, testes e refinamento',
    acontece:
      'Antes de ir ao ar, você recebe o projeto para avaliar: visual, textos, imagens, funcionamento, navegação, versão mobile e funcionalidades. Os ajustes e refinamentos são feitos aí, com você olhando — não é surpresa no final.',
    deVoce: 'Olhar com calma, no celular e no computador, e apontar o que quiser mudar.'
  },
  {
    numero: '06',
    titulo: 'Publicação e entrega',
    acontece:
      'Com a aprovação final, cuido da parte técnica inteira: domínio, hospedagem, DNS, certificado SSL, publicação e configurações finais. Quando o projeto tem painel administrativo, você recebe a orientação de como usar.',
    deVoce: 'A aprovação final e, se a empresa já tiver endereço na internet, o acesso ao domínio.'
  },
  {
    numero: '07',
    titulo: 'Acompanhamento',
    acontece:
      'O projeto no ar continua comigo. São 3 meses de Programa de Acompanhamento AJ Digital — orientação, dúvidas, adaptação ao painel e os pequenos ajustes previstos — e 12 meses de garantia para falhas relacionadas ao que foi desenvolvido. Depois disso, a relação segue em manutenção, melhorias, novas funcionalidades e automações.',
    deVoce: 'Só me chamar quando precisar. Mesmo WhatsApp, mesma pessoa.'
  }
];

const materiais = [
  [Images, 'Logo e fotos', 'Logo em boa qualidade e fotos do espaço, da equipe ou dos produtos. Foto de celular com boa luz resolve.'],
  [Type, 'Textos e serviços', 'A lista de serviços ou produtos e o que você quer destacar. Se não tiver texto pronto, eu ajudo a escrever.'],
  [UserRound, 'Dados de contato', 'WhatsApp, endereço, horário de atendimento e as redes que devem aparecer.'],
  [FileSignature, 'Acesso ao domínio', 'Se a empresa já tem endereço na internet. Se não tiver, eu registro e configuro.']
];

const deliverables = [
  'Projeto publicado e funcionando',
  'Domínio, hospedagem, DNS e SSL configurados',
  'Painel administrativo, quando faz parte do escopo',
  'WhatsApp integrado',
  'Layout responsivo, pensado primeiro para o celular',
  'Automações e integrações previstas no projeto',
  'SEO técnico inicial',
  'Orientação de uso do que você mesmo vai mexer'
];

const faqProcesso = [
  {
    question: 'Quanto tempo leva do começo ao projeto no ar?',
    answer:
      'Site fica pronto entre 7 e 15 dias. Sistema ou plataforma com reservas e agendamento leva até 30. O que mais faz variar não é o desenvolvimento: é o tempo até os materiais da empresa chegarem — logo, fotos, textos e a lista de serviços. Se o material atrasar, o prazo pausa junto e eu te aviso.'
  },
  {
    question: 'Tem contrato?',
    answer:
      'Tem. A proposta descreve o que será desenvolvido, o prazo e o valor; o contrato é assinado antes do início do projeto, e a condição de pagamento fica definida nele, conforme o caso.'
  },
  {
    question: 'E se eu quiser mudar alguma coisa durante o projeto?',
    answer:
      'Ajustes e refinamentos fazem parte da etapa de apresentação. Se surgir uma ideia simples que melhora bastante o resultado, ela pode entrar como cortesia. Se virar funcionalidade nova ou desenvolvimento considerável, passa a ser uma evolução com orçamento próprio — combinada antes, nunca cobrada de surpresa.'
  },
  {
    question: 'Depois de entregue, eu fico sozinho?',
    answer:
      'Não. São 3 meses de Programa de Acompanhamento e 12 meses de garantia para falhas relacionadas ao desenvolvimento. Passado esse período, melhorias e novas funcionalidades seguem sob demanda.'
  }
];

export default function Process() {
  return (
    <PageTransition>
      <Seo {...pageSeo.process} />

      <section className="page-hero process-hero section-padding compact-hero">
        <div className="process-orb process-orb-one"></div>
        <div className="process-orb process-orb-two"></div>

        <Reveal className="process-hero-copy">
          <span className="eyebrow">Como funciona</span>

          <h1>
            Antes de vender uma solução, entender o problema.
          </h1>

          <p>
            São sete etapas, do primeiro contato até o projeto no ar — normalmente entre 7 e 30
            dias. Em cada uma você sabe o que está acontecendo, o que eu preciso de você e o que
            vem depois. E quem conversa é quem desenvolve.
          </p>
        </Reveal>
      </section>

      <section className="section-padding process-timeline-section">
        <div className="process-timeline">
          {steps.map(({ numero, titulo, acontece, lista, deVoce }) => (
            <Reveal className="process-step-card" key={numero}>
              <span className="process-number">{numero}</span>

              <h3>{titulo}</h3>

              <p>{acontece}</p>

              {lista && (
                <ul className="process-step-list">
                  {lista.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              <div className="process-step-need">
                <span className="process-need-label">O que eu preciso de você</span>
                <p>{deVoce}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding process-materials-section">
        <SectionTitle
          eyebrow="Antes de começar"
          title="O que vale já ir separando"
          text="Nada disso precisa estar pronto para a gente conversar. Mas quanto antes chegar, antes o projeto entra no ar."
        />

        <div className="process-materials-grid">
          {materiais.map(([Icon, title, text]) => (
            <Reveal className="process-material-card" key={title}>
              <Icon size={26} />
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding process-deliverables-section">
        <Reveal className="process-section-heading">
          <span className="eyebrow">Entrega</span>

          <h2>O que você recebe ao final</h2>
        </Reveal>

        <div className="process-deliverables-grid">
          {deliverables.map((item) => (
            <Reveal className="process-deliverable-card" key={item}>
              <BadgeCheck size={22} />
              <span>{item}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-padding process-faq-section">
        <SectionTitle
          eyebrow="Dúvidas sobre o processo"
          title="O que perguntam antes de começar"
          text="Se a sua dúvida não estiver aqui, é só chamar no WhatsApp que eu respondo."
        />

        <Faq items={faqProcesso} />
      </section>

      <section className="section-padding process-final-section">
        <Reveal className="process-final-card">
          <Rocket size={34} />

          <h2>
            O objetivo não é entregar um projeto e sumir.
          </h2>

          <p>
            É deixar sua empresa com uma solução que funciona, que você entende como usar e que
            pode crescer junto com o negócio — com alguém do outro lado quando precisar.
          </p>

          <ul className="project-guarantee-strip">
            {guaranteesStrip.map(([Icon, label]) => (
              <li key={label}>
                <Icon size={16} /> {label}
              </li>
            ))}
          </ul>

          <a
            className="primary-btn"
            href="https://wa.me/5548991087702?text=Olá,%20vi%20como%20funciona%20o%20processo%20da%20AJ%20Digital%20e%20quero%20conversar%20sobre%20um%20projeto."
            target="_blank"
            rel="noreferrer"
          >
            Começar pela conversa
            <ArrowRight size={18} />
          </a>
        </Reveal>
      </section>

      <CTA />
    </PageTransition>
  );
}
