import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, ExternalLink, FlaskConical } from 'lucide-react';

export default function ProjectCard({ project, priority = false }) {
  const isModel = project.kind === 'modelo';

  return (
    <article className={`project-card ${project.gradient === 'gold' ? 'gold-card' : ''}`}>
      <div className="project-preview">
        <img
          src={project.image}
          alt={`Preview do projeto ${project.title}`}
          className="project-image"
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          width="1280"
          height="640"
        />

        {isModel && (
          <span className="project-kind-badge">
            <FlaskConical size={13} /> Modelo demonstrativo
          </span>
        )}
      </div>

      <div className="project-content">
        <span className="tag">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <ul>
          {project.highlights.slice(0, 3).map((item) => (
            <li key={item}>
              <CheckCircle2 size={16} /> {item}
            </li>
          ))}
        </ul>

        <div className="project-card-actions">
          <Link className="text-link" to={`/portfolio/${project.slug}`}>
            Ver detalhes <ArrowUpRight size={17} />
          </Link>

          {project.link && (
            <a className="text-link subtle" href={project.link} target="_blank" rel="noreferrer">
              Ver demo <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
