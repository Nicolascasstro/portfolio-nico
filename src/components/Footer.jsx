import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <p className="mono">
          © {year} Nicolas Martinez. {t.footer.rights}
        </p>
        <p className="mono footer-built">{t.footer.builtWith}</p>
      </div>
    </footer>
  )
}
