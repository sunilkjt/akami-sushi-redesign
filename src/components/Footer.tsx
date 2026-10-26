import { useI18n } from "../i18n/i18n";
import { RESTAURANT } from "../data/restaurant";
import type { Locale } from "../data/menu";
import { DICTIONARIES, LANG_META } from "../i18n/dictionaries";

const LINKS = [
  { href: "#inicio", key: "nav.home" },
  { href: "#menu", key: "nav.menu" },
  { href: "#sobre", key: "nav.about" },
  { href: "#galeria", key: "nav.gallery" },
  { href: "#contactos", key: "nav.contact" },
] as const;

export default function Footer() {
  const { t, lang, setLang } = useI18n();
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div className="footer__brand">
            <span
              style={{
                display: "inline-grid",
                placeItems: "center",
                width: "2.6rem",
                height: "2.6rem",
                borderRadius: "50%",
                background: "var(--vermilion)",
                fontFamily: "var(--serif-jp)",
              }}
              aria-hidden="true"
            >
              赤
            </span>
            <p>{t("footer.tagline")}</p>
          </div>

          <nav aria-label={t("footer.nav")}>
            <h3>{t("footer.nav")}</h3>
            <ul>
              {LINKS.map((l) => (
                <li key={l.href}><a href={l.href}>{t(l.key)}</a></li>
              ))}
            </ul>
          </nav>

          <div>
            <h3>{t("footer.follow")}</h3>
            <ul className="footer__social--list" style={{ display: "grid" }}>
              {RESTAURANT.social.map((s) => (
                <li key={s.name}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.name} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>{t("footer.contact")}</h3>
            <ul>
              <li>
                <a href={RESTAURANT.phoneHref}>{RESTAURANT.phoneDisplay}</a>
              </li>
              <li>
                {RESTAURANT.address.street}, {RESTAURANT.address.postalCode} {RESTAURANT.address.city}
              </li>
              <li style={{ marginTop: "0.6rem" }}>
                <span style={{ opacity: 0.6, fontSize: "0.82rem" }}>{t("footer.lang")}</span>
                <span className="footer__lang" style={{ marginTop: "0.5rem", display: "flex" }}>
                  {(Object.keys(DICTIONARIES) as Locale[]).map((l) => (
                    <button
                      key={l}
                      type="button"
                      aria-pressed={lang === l}
                      onClick={() => setLang(l)}
                    >
                      {LANG_META[l].flag}
                    </button>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Akami Sushi. {t("footer.copyright")}</span>
          <span>Restaurante japonês · Lisboa · sushi em Lisboa</span>
        </div>
      </div>
    </footer>
  );
}
