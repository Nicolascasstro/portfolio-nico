import { useLanguage } from '../context/LanguageContext'
import { PROFILE } from '../data/profile'

function ContactLink({ label, href, unavailableLabel, download }) {
  if (!href) {
    return (
      <div className="contact-link is-disabled">
        <span className="contact-link-label mono">{label}</span>
        <span className="contact-link-value">{unavailableLabel}</span>
      </div>
    )
  }

  return (
    <a
      className="contact-link"
      href={href}
      target={download ? undefined : '_blank'}
      rel={download ? undefined : 'noopener noreferrer'}
      download={download || undefined}
    >
      <span className="contact-link-label mono">{label}</span>
      <span className="contact-link-value">{href.replace(/^mailto:/, '')}</span>
    </a>
  )
}

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <h2 className="section-title">
          <span className="mono section-index">04.</span> {t.contact.title}
        </h2>
        <p className="section-subtitle">{t.contact.subtitle}</p>

        <div className="contact-grid">
          <ContactLink
            label={t.contact.email}
            href={PROFILE.email ? `mailto:${PROFILE.email}` : null}
            unavailableLabel={t.contact.unavailable}
          />
          <ContactLink
            label={t.contact.linkedin}
            href={PROFILE.linkedin}
            unavailableLabel={t.contact.unavailable}
          />
          <ContactLink
            label={t.contact.github}
            href={PROFILE.github}
            unavailableLabel={t.contact.unavailable}
          />
          <ContactLink
            label={t.contact.cv}
            href={PROFILE.cvUrl}
            unavailableLabel={t.contact.unavailable}
            download="cv-nicolas-martinez.pdf"
          />
        </div>
      </div>
    </section>
  )
}
