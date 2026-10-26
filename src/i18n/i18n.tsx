//! MIT licensed. Small i18n context — no external localization dependency.
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Locale } from "../data/menu";
import { DICTIONARIES, LANG_META } from "./dictionaries";

const STORAGE_KEY = "akami-lang";

type I18nCtx = {
  lang: Locale;
  setLang: (l: Locale) => void;
  t: (key: string) => string;
};

const Ctx = createContext<I18nCtx | null>(null);

function initial(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "pt" || saved === "en" || saved === "ja") return saved;
  } catch {
    /* storage unavailable */
  }
  return "pt";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Locale>(initial);

  useEffect(() => {
    document.documentElement.lang = LANG_META[lang].htmlLang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = useCallback((l: Locale) => setLangState(l), []);

  const t = useCallback(
    (key: string) => DICTIONARIES[lang][key] ?? DICTIONARIES.pt[key] ?? key,
    [lang],
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n(): I18nCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
