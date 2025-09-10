import { create } from "zustand";

// Функция для нормализации кода языка
const normalizeLang = (lang) => (lang === "ky" ? "kg" : lang);

const savedLangRaw = localStorage.getItem("lang") || "en";
const savedLang = normalizeLang(savedLangRaw);

export const useChangeLanguage = create((set) => ({
  lang: savedLang,
  changeLang: () =>
    set((state) => {
      const order = ["en", "ru", "kg"];
      const currentIndex = order.indexOf(state.lang);
      const nextIndex = (currentIndex + 1) % order.length;
      const newLang = order[nextIndex];
      localStorage.setItem("lang", newLang);
      return { lang: newLang };
    }),
  setLang: (lang) => {
    const fixedLang = normalizeLang(lang);
    localStorage.setItem("lang", fixedLang);
    set({ lang: fixedLang });
  },
}));
