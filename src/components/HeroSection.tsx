import { useI18n } from "../i18n/i18n";
import { RESTAURANT } from "../data/restaurant";

export default function HeroSection() {
  const { t } = useI18n();
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero__media">
        <img
          src="images/dish-poke.jpg"
          alt={t("hero.photoAlt")}
          fetchPriority="high"
        />
        <div className="hero__shade" aria-hidden="true" />
      </div>
      <div className="wrap hero__inner">
        <p className="hero__eyebrow">{t("hero.tag")}</p>
        <h1 id="hero-title" className="hero__title">{t("hero.headline")}</h1>
        <p className="hero__sub">{t("hero.sub")}</p>
        <div className="hero__actions">
          <a className="btn btn--solid" href="#menu">{t("hero.cta")}<span className="arrow" aria-hidden="true">→</span></a>
          <a
            className="btn btn--ghost"
            href={RESTAURANT.mapsDirections}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("hero.cta2")}
          </a>
        </div>
        <p className="hero__meta">
          <span>{t("hero.hours")}</span>
          <span className="dot" aria-hidden="true" />
          <a href={RESTAURANT.phoneHref}>{RESTAURANT.phoneDisplay}</a>
        </p>
      </div>
      <a className="hero__scroll" href="#sobre">Scroll</a>
    </section>
  );
}
