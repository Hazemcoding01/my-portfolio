import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects.js';

export default function ProjectsSection() {
  return (
    <section id="projects" className="section projects-section">
      <h2 className="section-title">أحدث المشاريع</h2>
      <p className="section-subtitle">نماذج من أعمالي وتطبيقات الويب التي قمت ببنائها</p>

      <div className="projects-grid">
        {PROJECTS.map((project) => {
          const isSoon = project.status === 'soon';
          return (
            <div className={`project-card${isSoon ? ' is-soon' : ''}`} key={project.id}>
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="project-img"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="project-img-placeholder" aria-hidden="true">
                  Coming soon
                </div>
              )}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                {!isSoon && (
                  <div className="project-links">
                    {project.details && (
                      <Link to={project.details} className="card-btn primary">
                        عرض التفاصيل والصور
                      </Link>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="card-btn">
                        التجربة المباشرة
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="card-btn">
                        الكود على GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
