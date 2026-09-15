import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function ProjectCard({ project }) {
  const { lang, t } = useLanguage()
  const [expanded, setExpanded] = useState(false)

  const content = project.content[lang]
  const isDone = project.status === 'done'
  const hasDetails = Boolean(content.problem || content.decisions.length)

  return (
    <article className={`project-card${project.featured ? ' is-featured' : ''}`}>
      <div className="project-card-header">
        <h3>{content.name}</h3>
        <span className={`status-badge ${isDone ? 'is-done' : 'is-progress'}`}>
          {isDone ? t.projects.statusDone : t.projects.statusInProgress}
        </span>
      </div>

      <p className="project-description">{content.description}</p>

      <div className="project-tech">
        {project.tech.map((tech) => (
          <span key={tech} className="tech-tag mono">
            {tech}
          </span>
        ))}
      </div>

      <div className="project-actions">
        {project.demoUrl ? (
          <a
            className="btn btn-small"
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.projects.demo}
          </a>
        ) : (
          <button type="button" className="btn btn-small" disabled>
            {t.projects.comingSoon}
          </button>
        )}

        {project.codeUrl ? (
          <a
            className="btn btn-small btn-outline"
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.projects.code}
          </a>
        ) : (
          <button type="button" className="btn btn-small btn-outline" disabled>
            {t.projects.comingSoon}
          </button>
        )}
      </div>

      {hasDetails && (
        <div className="project-details">
          <button
            type="button"
            className="details-toggle mono"
            aria-expanded={expanded}
            onClick={() => setExpanded((value) => !value)}
          >
            {expanded ? t.projects.hideDetails : t.projects.showDetails}
          </button>

          {expanded && (
            <div className="details-body">
              <div>
                <h4 className="mono">{t.projects.problemLabel}</h4>
                <p>{content.problem}</p>
              </div>
              <div>
                <h4 className="mono">{t.projects.decisionsLabel}</h4>
                <ul>
                  {content.decisions.map((decision, index) => (
                    <li key={index}>{decision}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </article>
  )
}
