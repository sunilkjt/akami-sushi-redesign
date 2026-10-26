import { useI18n } from "../i18n/i18n";
import { Reveal, Lightbox } from "./shared";
import { useState } from "react";

const IMAGES = [
  "images/gallery-1.jpg",
  "images/gallery-2.jpg",
  "images/gallery-3.jpg",
  "images/gallery-4.jpg",
  "images/gallery-9.jpg",
  "images/gallery-5.jpg",
  "images/gallery-6.jpg",
  "images/gallery-7.jpg",
  "images/gallery-8.jpg",
  "images/dish-roll.jpg",
] as const;

export default function Gallery() {
  const { t } = useI18n();
  const [zoom, setZoom] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="section" id="galeria" aria-labelledby="gal-title">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">{t("gal.eyebrow")}</p>
          <h2 id="gal-title" className="section-title">{t("gal.title")}</h2>
          <p className="section-sub">{t("gal.sub")}</p>
        </Reveal>
        <Reveal>
          <div className="gallery">
            {IMAGES.map((src, i) => {
              const alt = t(`alt.gal${(i % 8) + 1}`);
              return (
                <button
                  key={src}
                  type="button"
                  className={i === 0 ? "gallery__narrow" : ""}
                  onClick={() => setZoom({ src, alt })}
                >
                  <img src={src} alt={alt} loading="lazy" decoding="async" />
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>
      <Lightbox src={zoom?.src ?? null} alt={zoom?.alt ?? ""} onClose={() => setZoom(null)} />
    </section>
  );
}
