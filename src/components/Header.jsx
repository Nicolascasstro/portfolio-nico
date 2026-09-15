import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const SECTIONS = ['about', 'projects', 'skills', 'contact']

export default function Header() {
  const { lang, setLang, t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container header-row">
        <a href="#top" className="brand" onClick={handleNavClick}>
          <span className="brand-mark">{'<NM />'}</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-label={t.nav.menuToggle}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`site-nav${menuOpen ? ' is-open' : ''}`}>
          <ul>
            {SECTIONS.map((section) => (
              <li key={section}>
                <a href={`#${section}`} onClick={handleNavClick}>
                  {t.nav[section]}
                </a>
              </li>
            ))}
          </ul>

          <div
            className="lang-toggle"
            role="group"
            aria-label={t.nav.langLabel}
          >
            <button
              type="button"
              className={lang === 'es' ? 'is-active' : ''}
              onClick={() => setLang('es')}
              aria-pressed={lang === 'es'}
            >
              ES
            </button>
            <button
              type="button"
              className={lang === 'en' ? 'is-active' : ''}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
