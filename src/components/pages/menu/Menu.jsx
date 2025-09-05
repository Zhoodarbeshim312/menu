import scss from "./Menu.module.scss";
import menuProduct from "../../../assets/images/menuProduct.svg";
const Menu = () => {
  const products = [
    {
      img: `${menuProduct}`,
      name: "Ice Cream",
      price: 9.11,
      description: "soda,cream,milk,sugar",
    },
    {
      img: `${menuProduct}`,
      name: "Ice Cream",
      price: 9.11,
      description: "soda,cream,milk,sugar",
    },
    {
      img: `${menuProduct}`,
      name: "Ice Cream",
      price: 9.11,
      description: "soda,cream,milk,sugar",
    },
    {
      img: `${menuProduct}`,
      name: "Ice Cream",
      price: 9.11,
      description: "soda,cream,milk,sugar",
    },
    {
      img: `${menuProduct}`,
      name: "Ice Cream",
      price: 9.11,
      description: "soda,cream,milk,sugar",
    },
    {
      img: `${menuProduct}`,
      name: "Ice Cream",
      price: 9.11,
      description: "soda,cream,milk,sugar",
    },
    {
      img: `${menuProduct}`,
      name: "Ice Cream",
      price: 9.11,
      description: "soda,cream,milk,sugar",
    },
  ];
  return (
    <section id={scss.Menu}>
      <div className="container">
        <div className={scss.menu}>
          <div className={scss.btns}>
            <button>
              Desserts <br /> <div className={scss.line}></div>
            </button>
            <button>
              Hot Drinks <br /> <div className={scss.line}></div>
            </button>
            <button>
              Cold Drinks <br /> <div className={scss.line}></div>
            </button>
            <button>
              National Foods <br /> <div className={scss.line}></div>
            </button>
            <button>
              Eastern cuisine <br /> <div className={scss.line}></div>
            </button>
            <button>
              Fast foods <br /> <div className={scss.line}></div>
            </button>
          </div>
          <div className={scss.products}>
            {products.map((el, idx) => (
              <div key={idx} className={scss.card}>
                <img src={el.img} alt={el.name} />
                <div className={scss.content}>
                  <div className={scss.info}>
                    <h3>{el.name}</h3>
                    <p>{el.description}</p>
                  </div>
                  <h3>${el.price}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
