import { useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * Perguntas que travam a decisão de contratar. Ficam em um lugar só para
 * poderem ser reaproveitadas em outras páginas (serviços, landing pages).
 */
export const faqItems = [
  {
    question: 'Quanto custa um projeto?',
    answer:
      'Automação a partir de R$ 900. Site a partir de R$ 1.200. Sistema a partir de R$ 2.500. ' +
      'Aplicativo a partir de R$ 15.000.\n\n' +
      'O que muda o valor não é o design: é quantas coisas a solução precisa resolver sozinha. ' +
      'Um site que só apresenta a empresa custa menos que um que recebe reserva e pagamento.\n\n' +
      'O orçamento fechado sai depois de entender sua necessidade, e a conversa não tem custo ' +
      'nenhum.'
  },
  {
    question: 'Em quanto tempo o projeto fica pronto?',
    answer:
      'Site fica pronto entre 7 e 15 dias. Sistema ou plataforma com reservas e agendamento ' +
      'leva até 30. O prazo conta a partir do envio das informações e materiais da empresa — se ' +
      'o material atrasar, o prazo pausa junto e eu te aviso.'
  },
  {
    question: 'Tem contrato?',
    answer:
      'Tem. A proposta descreve o que será desenvolvido, o prazo e o valor, e o contrato é ' +
      'assinado antes do projeto começar. O pagamento só acontece depois disso.'
  },
  {
    question: 'Consigo ver alguma coisa antes de fechar?',
    answer:
      'Quando ajuda a decidir, apresento um esboço ou uma prévia antes do projeto completo — ' +
      'assim você enxerga a ideia em vez de imaginar. E durante o desenvolvimento você avalia ' +
      'o projeto antes de ele ir ao ar.'
  },
  {
    question: 'Tem garantia depois da entrega?',
    answer:
      'Sim. Cada projeto conta com 12 meses de garantia para correções relacionadas ao ' +
      'desenvolvimento e 3 meses do Programa de Acompanhamento AJ Digital.'
  },
  {
    question: 'Preciso pagar mensalidade de hospedagem?',
    answer:
      'Não enquanto a infraestrutura utilizada permitir manter o projeto sem esse custo. Se o ' +
      'crescimento do site, sistema ou aplicação exigir um plano pago ou outro serviço externo, ' +
      'você é informado sobre o custo antes de qualquer contratação.'
  },
  {
    question: 'E o domínio, o endereço do site?',
    answer:
      'O domínio personalizado está incluso no primeiro ano do projeto. A partir do segundo ' +
      'ano, a renovação anual fica sob responsabilidade do cliente.'
  },
  {
    question: 'Quem publica e configura tudo?',
    answer:
      'A AJ Digital faz toda a parte técnica: configuração da hospedagem, domínio, DNS, ' +
      'certificado SSL e publicação do projeto. Você recebe a solução no ar e funcionando.'
  },
  {
    question: 'Preciso entender de tecnologia?',
    answer:
      'Não. Você conta qual é o problema ou o que quer melhorar, e a parte técnica é comigo — do ' +
      'primeiro contato até a publicação. Você fala direto com quem desenvolve.'
  },
  {
    question: 'E se eu quiser mudar algo depois?',
    answer:
      'Durante o Programa de Acompanhamento é só chamar. Depois desse período, alterações, ' +
      'melhorias e novas funcionalidades podem ser contratadas sob demanda. A AJ Digital também ' +
      'pretende disponibilizar planos de manutenção e evolução contínua para quem quiser ' +
      'acompanhamento recorrente.'
  }
];

/**
 * FAQ em <details> nativo: abre e fecha sem JavaScript e funciona com leitor
 * de tela. Enquanto está montado, publica o schema FAQPage — o Google pode
 * mostrar as perguntas direto no resultado de busca.
 */
export default function Faq({ items = faqItems }) {
  useEffect(() => {
    const script = document.createElement('script');

    script.type = 'application/ld+json';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: items.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer }
      }))
    });

    document.head.appendChild(script);

    return () => script.remove();
  }, [items]);

  return (
    <div className="faq-list">
      {items.map(({ question, answer }) => (
        <details className="faq-item" key={question}>
          <summary>
            {question}
            <ChevronDown size={20} />
          </summary>

          {answer.split('\n\n').map((paragrafo) => (
            <p key={paragrafo}>{paragrafo}</p>
          ))}
        </details>
      ))}
    </div>
  );
}
