import { useLanguage } from '../context/LanguageContext'
import { SKILLS } from '../data/skills'

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className="mono section-index">03.</span> {t.skills.title}
        </h2>
        <p className="section-subtitle">{t.skills.subtitle}</p>

        <ul className="skills-grid">
          {SKILLS.map((skill) => (
            <li key={skill.name} className="skill-pill mono">
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
