import { useSelector } from "react-redux";
import scss from "./Footer.module.scss";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  const lang = useSelector((state) => state.language.lang);

  const translations = {
    en: {
      interior: "Interior",
      about: "About Us",
      menu: "Menu",
      contacts: "Contacts",
      rights: "© 2023 Motion Study LLC",
    },
    ru: {
      interior: "Интерьер",
      about: "О нас",
      menu: "Меню",
      contacts: "Контакты",
      rights: "© 2023 Motion Study ООО",
    },
    kg: {
      interior: "Ички жасалгасы",
      about: "Биз жөнүндө",
      menu: "Меню",
      contacts: "Байланыш",
      rights: "© 2023 Motion Study ЖЧК",
    },
  };

  return (
    <footer id={scss.Footer}>
      <div className="container">
        <div className={scss.footer}>
          <div className={scss.footer_on}>
            <h1>Restaurant</h1>
            <ul>
              <li>{translations[lang].interior}</li>
              <li>{translations[lang].about}</li>
              <li>{translations[lang].menu}</li>
              <li>{translations[lang].contacts}</li>
            </ul>
            <div className={scss.footer_icons}>
              <FaTelegramPlane />
              <IoLogoInstagram />
            </div>
          </div>
          <div className={scss.footer_line}></div>
          <p>{translations[lang].rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
