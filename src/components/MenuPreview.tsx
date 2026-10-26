import { useI18n } from "../i18n/i18n";
import { Reveal, Lightbox } from "./shared";
import { MENU, ALL_MENU_IMAGES } from "../data/menu";
import type { Locale, MenuItem } from "../data/menu";
import { useState } from "react";
import { RESTAURANT } from "../data/restaurant";

export default function MenuPreview() {
  const { t, lang } = useI18n();
  const [zoom, setZoom] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="section section--ink" id="menu" aria-labelledby="menu-title">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">{t("menu.eyebrow")}</p>
          <h2 id="menu-title" className="section-title">{t("menu.title")}</h2>
          <p className="section-sub">{t("menu.sub")}</p>
        </Reveal>

        <Reveal>
          <div className="menu-grid">
            {MENU.map((cat) => (
              <article className="menu-cat" key={cat.id}>
                <h3>{cat.names[lang]}</h3>
                <ul>
                  {cat.items.map((item, i) => (
                    <MenuRow key={i} item={item} lang={lang} />
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="menu-photos">
            <h3>{t("menu.photosTitle")}</h3>
            <p className="section-sub">{t("menu.photosSub")}</p>
            <div className="menu-photos__grid">
              {ALL_MENU_IMAGES.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setZoom({ src: img.src, alt: t(img.key) })}
                  aria-label={t("menu.img" + (i + 1))}
                >
                <img src={img.src} alt={t(img.key)} loading="lazy" decoding="async" />
              </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="menu-banner">
          <div>
            <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.5rem" }}>{t("menu.bigCtaTitle")}</h3>
            <p style={{ marginTop: "0.4rem", opacity: 0.75 }}>{t("menu.bigCtaText")}</p>
          </div>
          <a className="btn btn--ivory" href={RESTAURANT.phoneHref}>{RESTAURANT.phoneDisplay}</a>
        </div>
      </div>

      <Lightbox src={zoom?.src ?? null} alt={zoom?.alt ?? ""} onClose={() => setZoom(null)} />
    </section>
  );
}

function MenuRow({ item, lang }: { item: MenuItem; lang: Locale }) {
  const { t } = useI18n();
  return (
    <li>
      <span>
        {item.names[lang]}
        {item.pcs && <span style={{ opacity: 0.55 }}> · {item.pcs[lang]}</span>}
        {item.vegan && <>
          {" "}
          <span className="tag tag--vegan">veg</span>
        </>}
        {item.spicy && <>
          {" "}
          <span className="tag tag--spicy">{t("menu.spicy")}</span>
        </>}
      </span>
      <span className="fill" aria-hidden="true" />
      <span className="price">{item.price.toString().replace(".", ",")}</span>
    </li>
  );
}
