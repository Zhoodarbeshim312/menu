import { useChangeLanguage } from "../../../components/store/useLanguage";
import { Link as ScrollLink } from "react-scroll";
import styles from "./Footer.module.scss";

const translations = {
  en: {
    interior: "Interior",
    about: "About Us",
    menu: "Menu",
    contacts: "Contacts",
  },
  ru: {
    interior: "Интерьер",
    about: "О нас",
    menu: "Меню",
    contacts: "Контакты",
  },
  kg: {
    interior: "Ички жасалгасы",
    about: "Биз жөнүндө",
    menu: "Меню",
    contacts: "Байланыш",
  },
};

const Footer = () => {
  const { lang } = useChangeLanguage();
  const normalizeLang = (lang) => (lang === "ky" ? "kg" : lang);
  const t = translations[normalizeLang(lang)] || translations.en;

  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footer}>
        <div className={styles.footerOn}>
          <h1>Restaurant</h1>
          <ul>
            <li>
              <ScrollLink to="hero" smooth={true} duration={500} offset={-100}>
                {t.interior}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="about" smooth={true} duration={500} offset={-100}>
                {t.about}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="menu" smooth={true} duration={500} offset={-100}>
                {t.menu}
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="visit" smooth={true} duration={500} offset={-100}>
                {t.contacts}
              </ScrollLink>
            </li>
          </ul>
        </div>

        <div className={styles.footerLine}></div>

        <p className={styles.footerCopyright}>
          &copy; {new Date().getFullYear()} Restaurant. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
