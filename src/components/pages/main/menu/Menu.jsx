import React, { useState } from "react";
import "./Menu.scss";
import arrowRight from "../../../../assets/images/arrowRight.svg";
import arrowLeft from "../../../../assets/images/arrowLeft.svg";
import { useNavigate } from "react-router-dom";
import { useChangeLanguage } from "../../../store/useLanguage";

const translations = {
  en: {
    mainTitle: "Main Menu",
    subtitle: "Exceptional Quality. Delightfully Delicious",
    categories: {
      desserts: "Desserts",
      hot: "Hot Drinks",
      cold: "Cold Drinks",
      national: "National Foods",
      eastern: "Eastern cuisine",
      fast: "Fast foods",
    },
    orderBtn: "Order Now",
    viewFull: "VIEW FULL MENU →",
  },
  ru: {
    mainTitle: "Главное меню",
    subtitle: "Исключительное качество. Восхитительно вкусно",
    categories: {
      desserts: "Десерты",
      hot: "Горячие напитки",
      cold: "Холодные напитки",
      national: "Национальные блюда",
      eastern: "Восточная кухня",
      fast: "Фастфуд",
    },
    orderBtn: "Заказать",
    viewFull: "ПОСМОТРЕТЬ ВСЁ МЕНЮ →",
  },
  ky: {
    mainTitle: "Башкы меню",
    subtitle: "Өзгөчө сапат. Даамдуу жана жагымдуу",
    categories: {
      desserts: "Десерттер",
      hot: "Ысык ичимдиктер",
      cold: "Муздак ичимдиктер",
      national: "Улуттук тамактар",
      eastern: "Чыгыш ашканасы",
      fast: "Фастфуд",
    },
    orderBtn: "Заказ кылуу",
    viewFull: "ТОЛУК МЕНЮНУ КӨРҮҮ →",
  },
};

const menuItems = [
  {
    title: {
      en: "Beer Brewery",
      ru: "Пивоварня",
      ky: "Пиво заводу",
    },
    desc: {
      en: "Craft beer with unique taste.",
      ru: "Крафтовое пиво с уникальным вкусом.",
      ky: "Өзгөчө даамы бар крафт пиво.",
    },
    price: 24,
    category: "desserts",
  },
  {
    title: {
      en: "Burger & Pasta",
      ru: "Бургер и паста",
      ky: "Бургер жана паста",
    },
    desc: {
      en: "Juicy burger with Italian pasta.",
      ru: "Сочный бургер с итальянской пастой.",
      ky: "Ширин бургер италиялык паста менен.",
    },
    price: 14,
    category: "desserts",
  },
  {
    title: {
      en: "Cappuccino",
      ru: "Капучино",
      ky: "Капучино",
    },
    desc: {
      en: "Hot coffee with milk foam.",
      ru: "Горячий кофе с молочной пенкой.",
      ky: "Сүт көбүгү менен ысык кофе.",
    },
    price: 6,
    category: "hot",
  },
  {
    title: {
      en: "Iced Tea",
      ru: "Холодный чай",
      ky: "Муздак чай",
    },
    desc: {
      en: "Refreshing cold drink with lemon.",
      ru: "Освежающий напиток с лимоном.",
      ky: "Лимон кошулган муздак ичимдик.",
    },
    price: 5,
    category: "cold",
  },
  {
    title: {
      en: "Plov",
      ru: "Плов",
      ky: "Палоо",
    },
    desc: {
      en: "Traditional Uzbek rice dish.",
      ru: "Традиционное узбекское блюдо из риса.",
      ky: "Салттуу өзбек күрүч тамагы.",
    },
    price: 12,
    category: "national",
  },
  {
    title: {
      en: "Sushi",
      ru: "Суши",
      ky: "Суши",
    },
    desc: {
      en: "Japanese rolls with salmon and avocado.",
      ru: "Японские роллы с лососем и авокадо.",
      ky: "Лосось жана авокадо менен жапон роллдору.",
    },
    price: 18,
    category: "eastern",
  },
  {
    title: {
      en: "Cheeseburger",
      ru: "Чизбургер",
      ky: "Чизбургер",
    },
    desc: {
      en: "Juicy burger with cheese.",
      ru: "Сочный бургер с сыром.",
      ky: "Сыр кошулган ширин бургер.",
    },
    price: 10,
    category: "fast",
  },
];

export default function Menu() {
  const { lang } = useChangeLanguage();
  const t = translations[lang];
  const [active, setActive] = useState("desserts");
  const nav = useNavigate();

  const filteredItems = menuItems.filter((item) => item.category === active);

  return (
    <div id="menu">
      <div className="container">
        <div className="menu">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="menu__title"
          >
            <img src={arrowLeft} alt="arrow left" />
            <h3>{t.mainTitle}</h3>
            <img src={arrowRight} alt="arrow right" />
          </div>
          <h2 data-aos="fade-up" data-aos-duration="3000">
            {t.subtitle}
          </h2>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="menu--card"
          >
            <div className="menu--card__list">
              {Object.entries(t.categories).map(([key, label]) => (
                <button key={key} onClick={() => setActive(key)}>
                  {label}
                </button>
              ))}
            </div>
            <div className="menu__content">
              {filteredItems.map((item, idx) => (
                <div key={idx} className="menu__item">
                  <div className="menu__item-top">
                    <span className="title">{item.title[lang]}</span>
                    <span className="price">${item.price}</span>
                  </div>
                  <p>{item.desc[lang]}</p>
                  <span className="order-btn">{t.orderBtn}</span>
                </div>
              ))}
              <button onClick={() => nav("/menu")} className="menu__cta">
                {t.viewFull}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
