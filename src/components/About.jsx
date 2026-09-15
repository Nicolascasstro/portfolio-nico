import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">
          <span className="mono section-index">01.</span> {t.about.title}
        </h2>
        <div className="about-body">
          {t.about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
