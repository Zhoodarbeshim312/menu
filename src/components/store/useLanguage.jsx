import { create } from "zustand";

const savedLang = localStorage.getItem("lang") || "en";

export const useChangeLanguage = create((set) => ({
  lang: savedLang,
  changeLang: () =>
    set((state) => {
      const order = ["en", "ru", "ky"];
      const currentIndex = order.indexOf(state.lang);
      const nextIndex = (currentIndex + 1) % order.length;
      const newLang = order[nextIndex];
      localStorage.setItem("lang", newLang);
      return { lang: newLang };
    }),
  setLang: (lang) => {
    localStorage.setItem("lang", lang);
    set({ lang });
  },
}));
