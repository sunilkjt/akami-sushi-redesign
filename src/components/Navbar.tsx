import { useEffect, useState } from "react";
import { useI18n } from "../i18n/i18n";
import { LANG_META } from "../i18n/dictionaries";
import type { Locale } from "../data/menu";

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrolled;
}

export function LanguageMenu() {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const clickOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".lang")) setOpen(false);
    };
    window.addEventListener("keydown", close);
    window.addEventListener("click", clickOutside);
    return () => {
      window.removeEventListener("keydown", close);
      window.removeEventListener("click", clickOutside);
    };
  }, [open]);

  return (
    <div className="lang">
      <button
        type="button"
        className="lang__btn"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${t("footer.lang")}: ${LANG_META[lang].flag}`}
        onClick={() => setOpen((v) => !v)}
      >
        {LANG_META[lang].flag}
        <span className="lang__chev" aria-hidden="true">▾</span>
      </button>
      {open && (
        <ul className="lang__menu" role="listbox" aria-label={t("footer.lang")}>
          {(Object.keys(LANG_META) as Locale[]).map((l) => (
            <li key={l}>
              <button
                type="button"
                role="option"
                aria-checked={lang === l}
                className="lang__item"
                onClick={() => { setLang(l); setOpen(false); }}
              >
                {LANG_META[l].label}
                <small>{LANG_META[l].flag}</small>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const LINKS = [
  { href: "#inicio", key: "nav.home" },
  { href: "#menu", key: "nav.menu" },
  { href: "#sobre", key: "nav.about" },
  { href: "#galeria", key: "nav.gallery" },
  { href: "#contactos", key: "nav.contact" },
] as const;

export default function Navbar() {
  const { t } = useI18n();
  const scrolled = useScrolled();
  const [openMobile, setOpenMobile] = useState(false);

  useEffect(() => {
    document.body.style.overflow = openMobile ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [openMobile]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMobile(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <a className="skip" href="#principal">{t("nav.skip")}</a>
      <header className={`nav ${scrolled || openMobile ? "nav--solid" : ""}`}>
        <div className="wrap nav__inner">
          <a href="#inicio" className="nav__brand" aria-label="Akami Sushi">
            <img className="nav__logo" src="images/logo.png" alt="Akami Sushi" width="44" height="44" />
          </a>
          <nav aria-label="Principal">
            <ul className="nav__links">
              {LINKS.map((l) => (
                <li key={l.href}><a href={l.href}>{t(l.key)}</a></li>
              ))}
            </ul>
          </nav>
          <div className="nav__actions" style={{ display: "flex", gap: "0.8rem", alignItems: "center" }}>
            <LanguageMenu />
            <a className="btn btn--solid nav__cta" href="#menu">{t("nav.viewMenu")}</a>
          </div>
          <button
            type="button"
            className="nav__burger"
            aria-expanded={openMobile}
            aria-controls="mobile-menu"
            onClick={() => setOpenMobile((v) => !v)}
          >
            <span aria-hidden="true" />
            <span className="sr-only" style={{ position: "absolute", left: "-9999px" }}>
              {openMobile ? t("menu.close") : t("nav.home")}
            </span>
          </button>
      </div>
      </header>
      {openMobile && (
        <nav
          id="mobile-menu"
          className="nav__mobile"
          aria-label={t("nav.brandNote")}
        >
          <ul>
            {LINKS.map((l) => (
              <li key={l.href}>
                <a className="nav__mobile-link" href={l.href} onClick={() => setOpenMobile(false)}>
                  {t(l.key)}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav__mobile-foot">
            <a className="btn btn--solid" href="#menu" onClick={() => setOpenMobile(false)}>{t("nav.viewMenu")}</a>
            <LanguageMenu />
          </div>
        </nav>
      )}
    </>
  );
}
