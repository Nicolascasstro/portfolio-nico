import { useLanguage } from '../context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <p className="hero-eyebrow mono">{t.hero.eyebrow}</p>
        <h1 className="hero-name">{t.hero.name}</h1>
        <p className="hero-title mono">{t.hero.title}</p>
        <p className="hero-value">{t.hero.valueProp}</p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            {t.hero.ctaProjects}
          </a>
          <a href="#contact" className="btn btn-secondary">
            {t.hero.ctaContact}
          </a>
        </div>
      </div>
    </section>
  )
}
