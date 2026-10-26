import { useI18n } from "../i18n/i18n";
import { Reveal } from "./shared";
import { RESTAURANT } from "../data/restaurant";

export default function ContactSection() {
  const { t } = useI18n();
  return (
    <section className="section" id="contactos" aria-labelledby="contact-title">
      <div className="wrap contact">
        <Reveal>
          <p className="eyebrow">{t("contact.eyebrow")}</p>
          <h2 id="contact-title" className="section-title">{t("contact.title")}</h2>
          <dl style={{ marginTop: "2rem" }}>
            <dt>{t("contact.address")}</dt>
            <dd>
              {RESTAURANT.address.street}<br />
              {RESTAURANT.address.postalCode} {RESTAURANT.address.city}, {RESTAURANT.address.country}
              <br />
              <a href={RESTAURANT.mapsDirections} target="_blank" rel="noopener noreferrer">
                {t("contact.directions")} ↗
              </a>
            </dd>

            <dt>{t("contact.hours")}</dt>
            <dd>
              <span className="muted">{t("contact.hours.everyday")}</span>
              <table className="hours-table">
                <tbody>
                  {RESTAURANT.hours.map((h) => (
                    <tr key={h.key}>
                      <td>{t(h.key)}</td>
                      <td>{h.label}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </dd>

            <dt>{t("contact.phone")}</dt>
            <dd><a href={RESTAURANT.phoneHref}>{RESTAURANT.phoneDisplay}</a></dd>

            <dt>{t("contact.whatsapp")}</dt>
            <dd>
              <a href={RESTAURANT.whatsappHref} target="_blank" rel="noopener noreferrer">
                {t("contact.whatsapp")} ↗
              </a>
            </dd>
          </dl>
        </Reveal>
        <Reveal>
          <div className="contact__map">
            <iframe
              src={RESTAURANT.mapsEmbed}
              title={t("contact.directions")}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <p className="fallback">
              {RESTAURANT.address.street}, {RESTAURANT.address.postalCode} {RESTAURANT.address.city}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
