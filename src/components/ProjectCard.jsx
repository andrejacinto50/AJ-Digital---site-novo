import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.gradient === 'gold' ? 'gold-card' : ''}`}>
      <div className="project-preview">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
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

        <Link className="text-link" to={`/portfolio/${project.slug}`}>
          Ver detalhes <ArrowUpRight size={17} />
        </Link>
      </div>
    </article>
  );
}