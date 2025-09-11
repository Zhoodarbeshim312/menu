import React, { useState, useEffect } from "react";
import scss from "./Menu.module.scss";
import { useChangeLanguage } from "../../store/useLanguage";
import axios from "axios";

const Menu = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { lang } = useChangeLanguage();
  const [product, setProduct] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const getProduct = async () => {
    let res = await axios.get(`http://54.152.44.106/${lang}/products/`);
    setProduct(res.data);
    setFilteredProducts(res.data);
  };

  useEffect(() => {
    getProduct();
  }, [lang]); 

  const filterProducts = (category) => {
    if (!category) {
      setFilteredProducts(product); 
    } else {
      const filtered = product.filter((el) => el.category === category);
      setFilteredProducts(filtered);
    }
    setSelectedProduct(null); 
  };

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
                ✕
              </button>
            )}

            <div className={scss.btns}>
              <button
                onClick={() => filterProducts("Desserts")}
                className={scss.btn}
              >
                Desserts <div className={scss.line}></div>
              </button>

              <button
                onClick={() => filterProducts("Cold Drinks")}
                className={scss.btn}
              >
                Cold Drinks <div className={scss.line}></div>
              </button>

              <button
                onClick={() => filterProducts("Hot Drinks")}
                className={scss.btn}
              >
                Hot Drinks <div className={scss.line}></div>
              </button>

              <button
                onClick={() => filterProducts("National Foods")}
                className={scss.btn}
              >
                National Foods <div className={scss.line}></div>
              </button>

              <button
                onClick={() => filterProducts("Eastern cuisine")}
                className={scss.btn}
              >
                Eastern cuisine <div className={scss.line}></div>
              </button>

              <button
                onClick={() => filterProducts("Fast foods")}
                className={scss.btn}
              >
                Fast foods <div className={scss.line}></div>
              </button>

              <button onClick={() => filterProducts("")} className={scss.btn}>
                All <div className={scss.line}></div>
              </button>
            </div>
          </div>

          <div className={scss.content}>
            {selectedProduct ? (
              <>
                <div className={scss.details}>
                  <div className={scss.info}>
                    <img
                      src={selectedProduct.images_product[0]?.image}
                      alt={selectedProduct.name}
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

                <div className={scss.similar}>
                  <h3>Similar queries</h3>
                  <div className={scss.cards}>
                    {filteredProducts.map((el) => (
                      <div
                        key={el.id}
                        className={scss.card}
                        onClick={() => setSelectedProduct(el)}
                      >
                        <img src={el.images_product[0]?.image} alt={el.name} />
                        <div className={scss.cardInfo}>
                          <h4>{el.title}</h4>
                          <p>{el.description}</p>
                          <span>${el.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className={scss.products}>
                {filteredProducts.map((el) => (
                  <div
                    key={el.id}
                    className={scss.card}
                    onClick={() => setSelectedProduct(el)}
                  >
                    <img src={el.images_product[0]?.image} alt={el.name} />
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
        </div>
      </div>
    </section>
  );
};

export default Menu;
