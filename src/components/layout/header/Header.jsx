import { IoSearchOutline } from "react-icons/io5";
import "./Header.scss";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../../toolkit/languageSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const lang = useSelector((state) => state.language.lang);
  const nav = useNavigate();
  const dispatch = useDispatch();
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
    kg: {
      interior: "Ички жасалгасы",
      about: "Биз жөнүндө",
      menu: "Меню",
      contacts: "Байланыш",
      search: "Издөө",
    },
  };
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <h1
            style={{
              cursor: "pointer",
            }}
            onClick={() => nav("/")}
          >
            Restaurant
          </h1>
          <div className="header--nav">
            <ScrollLink to="hero" smooth={true} duration={500} offset={-100}>
              {translations[lang].interior}
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} offset={-100}>
              {translations[lang].about}
            </ScrollLink>
            <ScrollLink to="menu" smooth={true} duration={500} offset={-100}>
              {translations[lang].menu}
            </ScrollLink>
            <ScrollLink to="visit" smooth={true} duration={500} offset={-100}>
              {translations[lang].contacts}
            </ScrollLink>
            <div className="header--nav__form">
              <input type="text" placeholder={translations[lang].search} />
              <button>
                <IoSearchOutline />
              </button>
            </div>
            <select
              onChange={(e) => dispatch(setLanguage(e.target.value))}
              value={lang}
            >
              <option value="en">EN</option>
              <option value="ru">RU</option>
              <option value="kg">KG</option>
            </select>
          </div>
          <div className="header--menu">
            <button onClick={() => setMenu(!menu)}>
              <HiOutlineMenuAlt3 />
            </button>
          </div>
        </div>

        <div
          style={{
            display: menu ? "flex" : "none",
          }}
          className="modal"
        >
          <div className="modal--nav">
            <ScrollLink to="hero" smooth={true} duration={500} offset={-100}>
              {translations[lang].interior}
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} offset={-100}>
              {translations[lang].about}
            </ScrollLink>
            <ScrollLink to="menu" smooth={true} duration={500} offset={-100}>
              {translations[lang].menu}
            </ScrollLink>
            <ScrollLink to="visit" smooth={true} duration={500} offset={-100}>
              {translations[lang].contacts}
            </ScrollLink>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
              className="header--nav__language"
            >
              <a onClick={() => dispatch(setLanguage("en"))}>EN</a>
              <a onClick={() => dispatch(setLanguage("ru"))}>RU</a>
              <a onClick={() => dispatch(setLanguage("kg"))}>KG</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
