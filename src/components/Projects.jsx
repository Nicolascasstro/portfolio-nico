import { useLanguage } from '../context/LanguageContext'
import { PROJECTS } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <h2 className="section-title">
          <span className="mono section-index">02.</span> {t.projects.title}
        </h2>
        <p className="section-subtitle">{t.projects.subtitle}</p>

        {PROJECTS.length === 0 ? (
          <p className="projects-empty">{t.projects.empty}</p>
        ) : (
          <div className="projects-grid">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
