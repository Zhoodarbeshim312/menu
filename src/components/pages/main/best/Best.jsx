import { useRef } from "react";
import "./Best.scss";
import arrowLeft from "../../../../assets/images/arrowLeft.svg";
import bestImg1 from "../../../../assets/images/bestImg1.svg";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useChangeLanguage } from "../../../store/useLanguage";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export let api_key = import.meta.env.VITE_KEY;

const Best = () => {
  const scrollRef = useRef(null);
  const { lang } = useChangeLanguage();
  const [best, setBest] = useState([]);
  const getBest = async () => {
    let res = await axios.get(`${api_key}${lang}/bestsellers/`);

    setBest(res.data);
  };

  useEffect(() => {
    getBest();
  }, [lang]);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 280,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="best">
      <div className="container">
        {best.map((item) => (
          <div key={item.id} className="best">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="best--left"
            >
              <div className="best--left__icons">
                <img src={arrowLeft} alt="img" />
                <p>{item.title}</p>
              </div>
              <h1>{item.label}</h1>
              <p>{item.description}</p>
              <span>
                Each location has a menu that`s <br /> curated just for them.{" "}
                <br />
                See what new at your Cafesio and <br /> You`ll find Cafesio{" "}
                <br />
                Covent Carden moments.
              </span>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="best--right"
            >
              <div className="best--right__images" ref={scrollRef}>
                <img src={bestImg1} alt="img" />
                <img src={bestImg1} alt="img" />
                <img src={bestImg1} alt="img" />
                <img src={bestImg1} alt="img" />
                <img src={bestImg1} alt="img" />
                <img src={bestImg1} alt="img" />
                <img src={bestImg1} alt="img" />
                <img src={bestImg1} alt="img" />
                <img src={bestImg1} alt="img" />
              </div>

              <button onClick={scrollRight}>
                <MdOutlineKeyboardDoubleArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Best;
