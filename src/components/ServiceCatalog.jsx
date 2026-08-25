import { ChevronDown } from 'lucide-react';

import { catalog } from '../data/catalog.js';

/**
 * Catálogo completo do que a AJ Digital desenvolve.
 *
 * Cada categoria é um <details>: no celular a página não vira uma lista de
 * quase quarenta itens, e no computador a primeira já abre para o visitante
 * entender o formato. Sem JavaScript de estado — o próprio elemento cuida
 * disso e continua acessível por teclado e leitor de tela.
 */
export default function ServiceCatalog() {
  return (
    <div className="catalog-list">
      {catalog.map(({ id, icon: Icon, title, summary, items }, index) => (
        <details className="catalog-group" key={id} open={index === 0}>
          <summary>
            <span className="catalog-group-icon">
              <Icon size={22} />
            </span>

            <span className="catalog-group-title">
              <strong>{title}</strong>
              <small>{summary}</small>
            </span>

            <ChevronDown size={20} className="catalog-chevron" />
          </summary>

          <ul className="catalog-items">
            {items.map(([nome, descricao]) => (
              <li key={nome}>
                <strong>{nome}</strong>
                <span>{descricao}</span>
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}
