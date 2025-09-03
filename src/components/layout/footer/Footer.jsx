import scss from "./Footer.module.scss";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
const Footer = () => {
  return (
    <footer id={scss.Footer}>
      <div className="container">
        <div className={scss.footer}>
          <div className={scss.footer_on}>
            <h1>Restaurant</h1>
            <ul>
              <li>interior</li>
              <li>About us</li>
              <li>Menu</li>
              <li>Contacts</li>
            </ul>
            <div className={scss.footer_icons}>
              <FaTelegramPlane />
              <IoLogoInstagram />
            </div>
          </div>
          <div className={scss.footer_line}></div>
          <p>c 2023 Motion Study LLC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
