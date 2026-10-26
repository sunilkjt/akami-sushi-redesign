import { useI18n } from "../i18n/i18n";
import { Reveal } from "./shared";

export default function RestaurantIntro() {
  const { t } = useI18n();
  return (
    <section className="section" id="sobre" aria-labelledby="intro-title">
      <div className="wrap intro">
        <Reveal>
          <figure className="intro__figure" style={{ margin: 0 }}>
            <span className="intro__kanji" aria-hidden="true">おもてなし</span>
            <img
              src="images/hero.jpg"
              alt={t("intro.imgAlt")}
              loading="lazy"
              decoding="async"
              width="600"
              height="750"
            />
          </figure>
        </Reveal>
        <Reveal>
          <div className="intro__copy">
            <p className="eyebrow">{t("intro.eyebrow")}</p>
            <h2 id="intro-title" className="section-title">{t("intro.title")}</h2>
            <p>{t("intro.p1")}</p>
            <p>{t("intro.p2")}</p>
            <div className="intro__facts">
              <span>{t("intro.line1")}</span>
              <span>{t("intro.line2")}</span>
              <span>{t("intro.line3")}</span>
            </div>
          </div>
        </Reveal>
    </div>
    </section>
  );
}
