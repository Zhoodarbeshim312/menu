import React, { useState } from "react";
import "./Menu.scss";
import arrowRight from "../../../../assets/images/arrowRight.svg";
import arrowLeft from "../../../../assets/images/arrowLeft.svg";

const categories = [
  "Desserts",
  "Hot Drinks",
  "Cold Drinks",
  "National Foods",
  "Eastern cuisine",
  "Fast foods",
];


const menuItems = [
  {
    title: "Beer Brewery",
    desc: "Lorem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatiskt. Geoeghet pultväta, om pneumativ.",
    price: 24,
    category: "Desserts",
  },
  {
    title: "Burger&Pasta",
    desc: "Lorem ipsum askstoppad defaktisk, logokemi. Diastat retos att endomatiskt. Geoeghet pultväta, om pneumativ.",
    price: 14,
    category: "Desserts",
  },
  {
    title: "Cappuccino",
    desc: "Hot coffee with milk foam.",
    price: 6,
    category: "Hot Drinks",
  },
  {
    title: "Iced Tea",
    desc: "Refreshing cold drink with lemon.",
    price: 5,
    category: "Cold Drinks",
  },
  {
    title: "Plov",
    desc: "Traditional Uzbek rice dish.",
    price: 12,
    category: "National Foods",
  },
  {
    title: "Sushi",
    desc: "Japanese rolls with salmon and avocado.",
    price: 18,
    category: "Eastern cuisine",
  },
  {
    title: "Cheeseburger",
    desc: "Juicy burger with cheese.",
    price: 10,
    category: "Fast foods",
  },
];

export default function Menu() {
  const [active, setActive] = useState(categories[0]);

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
            <img src={arrowLeft} alt="img" />
            <h3>Main Menu</h3>
            <img src={arrowRight} alt="img" />
          </div>
          <h2 data-aos="fade-up" data-aos-duration="3000">
            DExceptional Quality. <br />
            Delightfully Delicious
          </h2>

          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="menu--card"
          >
            <div className="menu--card__list">
              {categories.map((c) => (
                <button onClick={() => setActive(c)}>{c}</button>
              ))}
            </div>
            <div className="menu__content">
              {filteredItems.map((item, idx) => (
                <div key={idx} className="menu__item">
                  <div className="menu__item-top">
                    <span className="title">{item.title}</span>
                    <span className="price">${item.price}</span>
                  </div>
                  <p>{item.desc}</p>
                  <span className="order-btn">Order Now</span>
                </div>
              ))}

              <button className="menu__cta">VIEW FULL MENU →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
