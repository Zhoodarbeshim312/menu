import "./Hero.scss";
import arrowLeft from "../../../../assets/images/arrowLeft.svg";
import arrowRight from "../../../../assets/images/arrowRight.svg";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import userImg from "../../../../assets/images/modalImg1.svg";
import phoneImg from "../../../../assets/images/modalImg2.svg";
import { IoClose } from "react-icons/io5";
import { useChangeLanguage } from "../../../store/useLanguage";

const translations = {
  en: {
    title: "Italian Cuisine",
    description:
      "Classic steak & delicious with delightfully unexpected twists. The Restaurant`s sunny decor was inspired by the diners",
    spanText:
      "Classic steak & delicious with delightfully unexpected twists. The Restaurant`s sunny decor was inspired by the diners",
    reserveBtn: "Reserve Your Table",
    locationTitle: "Location",
    locationAddress: "Rua da moeda 1g, 1200-275, Portugal",
    hotlineTitle: "Hotline",
    hotlinePhone: "+771219900",
    nameLabel: "NAME",
    phoneLabel: "PHONE",
    contactBtn: "Contact",
  },
  ru: {
    title: "Итальянская кухня",
    description:
      "Классический стейк & вкусно с неожиданными изысками. Солнечный интерьер ресторана был вдохновлён посетителями",
    spanText:
      "Классический стейк & вкусно с неожиданными изысками. Солнечный интерьер ресторана был вдохновлён посетителями",
    reserveBtn: "Забронировать стол",
    locationTitle: "Местоположение",
    locationAddress: "Rua da moeda 1g, 1200-275, Португалия",
    hotlineTitle: "Горячая линия",
    hotlinePhone: "+771219900",
    nameLabel: "ИМЯ",
    phoneLabel: "ТЕЛЕФОН",
    contactBtn: "Связаться",
  },
  kg: {
    title: "Итальян ашканасы",
    description:
      "Классикалык стейк & даамдуу, күтүлбөгөн кызыктуу кошумчалар менен. Ресторандын жаркыраган дизайны коноктордон шыктанды",
    spanText:
      "Классикалык стейк & даамдуу, күтүлбөгөн кызыктуу кошумчалар менен. Ресторандын жаркыраган дизайны коноктордон шыктанды",
    reserveBtn: "Столду брондоо",
    locationTitle: "Орду",
    locationAddress: "Rua da moeda 1g, 1200-275, Португалия",
    hotlineTitle: "Жылуулук линиясы",
    hotlinePhone: "+771219900",
    nameLabel: "АТЫ",
    phoneLabel: "ТЕЛЕФОН",
    contactBtn: "Байланыш",
  },
};

const Hero = () => {
  const [modal, setModal] = useState(false);
  const { lang } = useChangeLanguage();

  useEffect(() => {
    Aos.init({});
  }, []);

  // Нормализуем lang: если пришло "ky", используем "kg"
  const normalizeLang = (lang) => (lang === "ky" ? "kg" : lang);
  const t = translations[normalizeLang(lang)] || translations.en;

  return (
    <section id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero--lineTop"></div>
          <div className="hero--lineBottom"></div>
          <div className="hero--lineLeft"></div>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="hero--icons"
          >
            <img src={arrowLeft} alt="arrow left" />
            <img src={arrowRight} alt="arrow right" />
          </div>

          <h1 data-aos="fade-up" data-aos-duration="3000">
            {t.title}
          </h1>
          <p data-aos="fade-up" data-aos-duration="3000">
            {t.description}
          </p>
          <span data-aos="fade-up" data-aos-duration="3000">
            {t.spanText}
          </span>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="hero--btn"
          >
            <div className="hero--btn__line"></div>
            <button onClick={() => setModal(true)}>
              {t.reserveBtn} <FaArrowRight />
            </button>
            <div className="hero--btn__line"></div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="hero--info"
            data-aos-anchor-placement="top-bottom"
          >
            <div className="hero--info__text">
              <h3>{t.locationTitle}</h3>
              <div className="hero--info__text--line"></div>
              <p>
                <ImLocation2 style={{ color: "red", fontSize: "20px" }} />
                {t.locationAddress}
              </p>
              <span>
                <ImLocation2 style={{ color: "red", fontSize: "20px" }} />
                {t.locationAddress}
              </span>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="3000"
            data-aos-anchor-placement="top-bottom"
            className="hero--contact"
          >
            <div className="hero--contact__text">
              <h3>{t.hotlineTitle}</h3>
              <div className="hero--contact__text--line"></div>
              <p>
                <FaPhoneAlt style={{ color: "red", fontSize: "20px" }} />
                {t.hotlinePhone}
              </p>
            </div>
          </div>
        </div>

        {/* Модальное окно */}
        <div
          style={{
            opacity: modal ? "1" : "0",
            visibility: modal ? "visible" : "hidden",
            pointerEvents: modal ? "auto" : "none",
          }}
          className="modal"
        >
          <div
            style={{
              transform: modal ? "scale(1)" : "scale(0)",
              visibility: modal ? "visible" : "hidden",
              pointerEvents: modal ? "auto" : "none",
            }}
            className="modal--form"
          >
            <a onClick={() => setModal(false)}>
              <IoClose />
            </a>

            <div className="modal--form__img">
              <img src={userImg} alt="user" />
              <div className="modal--form__img--info">
                <label>{t.nameLabel}</label>
                <input type="text" placeholder={t.nameLabel} />
              </div>
            </div>

            <div className="modal--form__img">
              <img src={phoneImg} alt="phone" />
              <div className="modal--form__img--info">
                <label>{t.phoneLabel}</label>
                <input type="text" placeholder={t.phoneLabel} />
              </div>
            </div>

            <button>{t.contactBtn}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
