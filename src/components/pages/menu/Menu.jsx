import React, { useState } from "react"; // Added React import
import scss from "./Menu.module.scss";
import { useChangeLanguage } from "../../store/useLanguage";
import axios from "axios";
import { useEffect } from "react";
// import menuProduct from "../../../assets/images/menuProduct.svg";
// import { IoClose } from "react-icons/io5";

const Menu = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // const products = [
  //   {
  //     id: 1,
  //     img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop",
  //     name: "Ice Cream",
  //     price: 9.11,
  //     description: "soda,cream,milk,sugar",
  //   },
  //   {
  //     id: 2,
  //     img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
  //     name: "Chocolate Dessert",
  //     price: 12.5,
  //     description: "cocoa,butter,cream,sugar",
  //   },
  //   {
  //     id: 3,
  //     img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=300&fit=crop",
  //     name: "Vanilla Shake",
  //     price: 8.3,
  //     description: "milk,vanilla,sugar",
  //   },
  //   {
  //     id: 4,
  //     img: "https://images.unsplash.com/photo-1586985289906-406988974504?w=400&h=300&fit=crop",
  //     name: "Red Velvet",
  //     price: 10.9,
  //     description: "cream,red cake,sugar",
  //   },
  // ];

  const categories = [
    "Desserts",
    "Hot Drinks",
    "Cold Drinks",
    "National Foods",
    "Eastern cuisine",
    "Fast foods",
  ];

  const extras = [
    { name: "Cherry", price: 0.9 },
    { name: "Chocolate", price: 0.9 },
  ];

  const drinks = [
    { name: "Coca Cola", price: 0.9 },
    { name: "Coca Cola", price: 0.9 },
  ];
  const { lang } = useChangeLanguage();
  const [product, setProduct] = useState([]);
  const getProduct = async () => {
    let res = await axios.get(`http://54.152.44.106/${lang}/products/`);
    setProduct(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <section id={scss.Menu}>
      <div className="container">
        <div className={scss.menu}>
          <div className={scss.sidebar}>
            {selectedProduct && (
              <button
                className={scss.closeBtn}
                onClick={() => setSelectedProduct(null)}
              >
                {/* <IoClose size={22} /> */}×
              </button>
            )}

            <div className={scss.btns}>
              <button className={scss.btn}>
                Desserts <div className={scss.line}></div>
              </button>

              <button className={scss.btn}>
                Cold Drinks <div className={scss.line}></div>
              </button>

              <button className={scss.btn}>
                Hot Drinks <div className={scss.line}></div>
              </button>

              <button className={scss.btn}>
                National Foods <div className={scss.line}></div>
              </button>

              <button className={scss.btn}>
                Eastern cuisine <div className={scss.line}></div>
              </button>

              <button className={scss.btn}>
                Fast foods <div className={scss.line}></div>
              </button>
            </div>
          </div>

          {product.map((el) => (
            <div key={el.id} className={scss.content}>
              {selectedProduct ? (
                <>
                  <div className={scss.details}>
                    <div className={scss.info}>
                      <img
                        src={el.images_product.map((el) => el.image)}
                        alt={el.name}
                      />
                      <div className={scss.info_bottom}>
                        <div className={scss.info_right}>
                          <h2>{selectedProduct.name}</h2>
                          <p>{selectedProduct.description}</p>
                        </div>
                        <span>${selectedProduct.price}</span>
                      </div>
                    </div>
                    <div className={scss.extras}>
                      <div className={scss.drinks}>
                        <h4>Extras</h4>
                        <div className={scss.price}>
                          <p>Cherry</p>
                          <p>$0.90</p>
                        </div>
                        <div className={scss.price}>
                          <p>Cherry</p>
                          <p>$0.90</p>
                        </div>
                      </div>
                      <div className={scss.drinks}>
                        <h4>Drinks</h4>
                        <div className={scss.price}>
                          <p>Cola</p>
                          <p>$0.90</p>
                        </div>
                        <div className={scss.price}>
                          <p>Cola</p>
                          <p>$0.90</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Similar queries */}
                  <div className={scss.similar}>
                    <h3>Similar queries</h3>
                    <div className={scss.cards}>
                      {product.map((el, idx) => (
                        <div
                          key={el.id}
                          className={scss.card}
                          onClick={() => setSelectedProduct(el)}
                        >
                          <img
                            src={el.images_product.map((el) => el.image)}
                            alt={el.name}
                          />
                          <div className={scss.cardInfo}>
                            <h4>{el.name}</h4>
                            <p>{el.description}</p>
                            <span>${el.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                /* Если продукт не выбран */
                <div className={scss.products}>
                  {product.map((el, idx) => (
                    <div
                      key={el.id}
                      className={scss.card}
                      onClick={() => setSelectedProduct(el)}
                    >
                      <img
                        src={el.images_product.map((el) => el.image)}
                        alt={el.name}
                      />
                      <div className={scss.cardInfo}>
                        <h4>{el.title}</h4>
                        <p>{el.description}</p>
                        <span>${el.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
