import { useI18n } from "../i18n/i18n";
import { Reveal } from "./shared";

const ITEMS = ["lunch", "dinner", "takeaway", "share"] as const;

export default function ExperienceSection() {
  const { t } = useI18n();
  return (
    <section className="section section--sand" aria-labelledby="exp-title">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">{t("exp.eyebrow")}</p>
          <h2 id="exp-title" className="section-title">{t("exp.title")}</h2>
        </Reveal>
        <div className="exp-grid">
          {ITEMS.map((key, i) => (
            <Reveal key={key}>
              <div className="exp-card">
                <span className="no" aria-hidden="true">0{i + 1}</span>
                <h3>{t(`exp.${key}.title`)}</h3>
                <p>{t(`exp.${key}.text`)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
