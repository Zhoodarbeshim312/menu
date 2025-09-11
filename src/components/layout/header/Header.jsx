import { IoSearchOutline } from "react-icons/io5";
import "./Header.scss";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useChangeLanguage } from "../../store/useLanguage";

const Header = () => {
  const { lang, setLang } = useChangeLanguage(); 
  const nav = useNavigate();
  const [menu, setMenu] = useState(false);

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
    ky: {
      interior: "Ички жасалгасы",
      about: "Биз жөнүндө",
      menu: "Меню",
      contacts: "Байланыш",
      search: "Издөө",
    },
  };

  // Нормализуем язык и используем fallback на английский
  const normalizeLang = (lang) => (lang === "ky" ? "ky" : lang);
  const t = translations[normalizeLang(lang)] || translations.en;

  const handleLanguageChange = (value) => setLang(value);

  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <h1 onClick={() => nav("/")} style={{ cursor: "pointer" }}>
            Restaurant
          </h1>

          <div className="header--nav">
            <ScrollLink to="hero" smooth duration={500} offset={-100}>
              {t.interior}
            </ScrollLink>
            <ScrollLink to="about" smooth duration={500} offset={-100}>
              {t.about}
            </ScrollLink>
            <ScrollLink to="menu" smooth duration={500} offset={-100}>
              {t.menu}
            </ScrollLink>
            <ScrollLink to="visit" smooth duration={500} offset={-100}>
              {t.contacts}
            </ScrollLink>

            <div className="header--nav__form">
              <input type="text" placeholder={t.search} />
              <button>
                <IoSearchOutline />
              </button>
            </div>

            <select onChange={(e) => handleLanguageChange(e.target.value)} value={lang || "en"}>
              <option value="en">EN</option>
              <option value="ru">RU</option>
              <option value="ky">KY</option>
            </select>
          </div>

          <div className="header--menu">
            <button onClick={() => setMenu(!menu)}>
              <HiOutlineMenuAlt3 />
            </button>
          </div>
        </div>

        {/* Мобильное меню */}
        <div style={{ display: menu ? "flex" : "none" }} className="modal">
          <div className="modal--nav">
            <ScrollLink to="hero" smooth duration={500} offset={-100}>
              {t.interior}
            </ScrollLink>
            <ScrollLink to="about" smooth duration={500} offset={-100}>
              {t.about}
            </ScrollLink>
            <ScrollLink to="menu" smooth duration={500} offset={-100}>
              {t.menu}
            </ScrollLink>
            <ScrollLink to="visit" smooth duration={500} offset={-100}>
              {t.contacts}
            </ScrollLink>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <button onClick={() => handleLanguageChange("en")}>EN</button>
              <button onClick={() => handleLanguageChange("ru")}>RU</button>
              <button onClick={() => handleLanguageChange("ky")}>KY</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
