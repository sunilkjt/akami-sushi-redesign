import { useI18n } from "../i18n/i18n";
import { Reveal } from "./shared";
import { MENU } from "../data/menu";

type Feature = {
  catId: string;
  itemName: number;
  img: string;
  altKey: string;
  descKey: string;
};

/** Featured selections: verified dishes mapped to real restaurant photographs. */
const FEATURES: Feature[] = [
  { catId: "poke", itemName: 0, img: "images/gallery-9.jpg", altKey: "alt.gal5", descKey: "alt.dish.poke" },
  { catId: "sashimi", itemName: 0, img: "images/dish-rolls.jpg", altKey: "alt.gal2", descKey: "gal.sub" },
  { catId: "nigiri", itemName: 0, img: "images/gallery-7.jpg", altKey: "alt.gal4", descKey: "gal.sub" },
  { catId: "combinados", itemName: 5, img: "images/dish-roll.jpg", altKey: "alt.gal1", descKey: "gal.sub" },
  { catId: "combinados", itemName: 2, img: "images/dish-poke.jpg", altKey: "hero.photoAlt", descKey: "gal.sub" },
];

export default function FeaturedDishes() {
  const { t, lang } = useI18n();

  const dishes = FEATURES.map((f) => {
    const cat = MENU.find((c) => c.id === f.catId)!;
    const item = cat.items[f.itemName];
    return { ...f, cat, item };
  });

  return (
    <section className="section" id="pratos" aria-labelledby="dishes-title">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">{t("dishes.eyebrow")}</p>
          <h2 id="dishes-title" className="section-title">{t("dishes.title")}</h2>
          <p className="section-sub">{t("dishes.sub")}</p>
        </Reveal>
        <div className="dishes">
          {dishes.map((d, i) => (
            <Reveal key={i} className="dish">
              <img
                src={d.img}
                alt={t(d.altKey)}
                loading="lazy"
                decoding="async"
              />
              <div className="dish__info">
                <div className="dish__row">
                  <span className="dish__name">{d.item.names[lang]}</span>
                  <span className="dish__price">{d.item.price.toString().replace(".", ",")}</span>
                </div>
                {d.item.pcs && <p className="dish__desc">{d.item.pcs[lang]}</p>}
              </div>
            </Reveal>
          ))}
        </div>
        <div className="dishes__cta">
          <a className="btn btn--ink" href="#menu">
            {t("dishes.viewMenu")}<span className="arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
