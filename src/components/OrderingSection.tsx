import { useI18n } from "../i18n/i18n";
import { Reveal } from "./shared";
import { RESTAURANT } from "../data/restaurant";

export default function OrderingSection() {
  const { t } = useI18n();
  return (
    <section className="section section--ink" aria-labelledby="order-title">
      <div className="wrap order">
        <Reveal>
          <p className="eyebrow">{t("order.eyebrow")}</p>
          <h2 id="order-title" className="section-title">{t("order.title")}</h2>
          <p className="section-sub">{t("order.sub")}</p>
          <div className="order__phone">
            <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.2rem", marginBottom: "0.5rem" }}>
              {t("order.phone.title")}
            </h3>
            <a className="btn btn--ivory" href={RESTAURANT.phoneHref}>{RESTAURANT.phoneDisplay}</a>{" "}
            <a
              className="btn btn--ghost"
              href={RESTAURANT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: "0.7rem" }}
            >
              WhatsApp
            </a>
          </div>
        </Reveal>
        <Reveal>
          <div className="order__providers">
            {RESTAURANT.ordering.map((p) => (
              <a
                key={p.name}
                className="order__provider"
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="order__brand" style={{ background: p.color }} aria-hidden="true">
                  {p.name.slice(0, 2)}
                </span>
                <span>
                  <strong>{p.name}</strong>
                  <small>{t("order.orderHere")}</small>
                </span>
                <span className="go" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
