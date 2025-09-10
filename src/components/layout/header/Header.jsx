import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useChangeLanguage } from "../../store/useLanguage";
import "./Header.scss";

const translations = {
  en: {
    interior: "Interior",
    about: "About Us",
    menu: "Menu",
    contacts: "Contacts",
    search: "Search",
  },
  ru: {
    interior: "Интерьер",
    about: "О нас",
    menu: "Меню",
    contacts: "Контакты",
    search: "Поиск",
  },
  kg: {
    interior: "Ички жасалгасы",
    about: "Биз жөнүндө",
    menu: "Меню",
    contacts: "Байланыш",
    search: "Издөө",
  },
};

const normalizeLang = (lang) => (lang === "ky" ? "kg" : lang);

const Header = () => {
  const { lang, setLang } = useChangeLanguage();
  const nav = useNavigate();
  const [menu, setMenu] = useState(false);

  const handleLanguageChange = (value) => setLang(normalizeLang(value));

  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <h1 style={{ cursor: "pointer" }} onClick={() => nav("/")}>
            Restaurant
          </h1>

          {/* Основная навигация */}
          <div className="header--nav">
            <ScrollLink to="hero" smooth duration={500} offset={-100}>
              {translations[normalizeLang(lang)]?.interior ||
                translations.en.interior}
            </ScrollLink>
            <ScrollLink to="about" smooth duration={500} offset={-100}>
              {translations[normalizeLang(lang)]?.about ||
                translations.en.about}
            </ScrollLink>
            <ScrollLink to="menu" smooth duration={500} offset={-100}>
              {translations[normalizeLang(lang)]?.menu || translations.en.menu}
            </ScrollLink>
            <ScrollLink to="visit" smooth duration={500} offset={-100}>
              {translations[normalizeLang(lang)]?.contacts ||
                translations.en.contacts}
            </ScrollLink>

            {/* Поиск */}
            <div className="header--nav__form">
              <input
                type="text"
                placeholder={
                  translations[normalizeLang(lang)]?.search ||
                  translations.en.search
                }
              />
              <button>
                <IoSearchOutline />
              </button>
            </div>

            {/* Селект языка */}
            <select
              onChange={(e) => handleLanguageChange(e.target.value)}
              value={normalizeLang(lang)}
            >
              <option value="en">EN</option>
              <option value="ru">RU</option>
              <option value="kg">KG</option>
            </select>
          </div>

          {/* Кнопка мобильного меню */}
          <div className="header--menu">
            <button onClick={() => setMenu(!menu)}>
              <HiOutlineMenuAlt3 />
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        <div className="modal" style={{ display: menu ? "flex" : "none" }}>
          <div className="modal--nav">
            <ScrollLink
              to="hero"
              smooth
              duration={500}
              offset={-100}
              onClick={() => setMenu(false)}
            >
              {translations[normalizeLang(lang)]?.interior ||
                translations.en.interior}
            </ScrollLink>
            <ScrollLink
              to="about"
              smooth
              duration={500}
              offset={-100}
              onClick={() => setMenu(false)}
            >
              {translations[normalizeLang(lang)]?.about ||
                translations.en.about}
            </ScrollLink>
            <ScrollLink
              to="menu"
              smooth
              duration={500}
              offset={-100}
              onClick={() => setMenu(false)}
            >
              {translations[normalizeLang(lang)]?.menu || translations.en.menu}
            </ScrollLink>
            <ScrollLink
              to="visit"
              smooth
              duration={500}
              offset={-100}
              onClick={() => setMenu(false)}
            >
              {translations[normalizeLang(lang)]?.contacts ||
                translations.en.contacts}
            </ScrollLink>

            {/* Кнопки смены языка */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              <button onClick={() => handleLanguageChange("en")}>EN</button>
              <button onClick={() => handleLanguageChange("ru")}>RU</button>
              <button onClick={() => handleLanguageChange("ky")}>KG</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
