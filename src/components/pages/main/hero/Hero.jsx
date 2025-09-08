import "./Hero.scss";
import arrowLeft from "../../../../assets/images/arrowLeft.svg";
import arrowRight from "../../../../assets/images/arrowRight.svg";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import userImg from "../../../../assets/images/modalImg1.svg";
import phoneImg from "../../../../assets/images/modalImg2.svg";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
const Hero = () => {
  const [modal, setModal] = useState(false);
  useEffect(() => {
    Aos.init({});
  }, []);
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
            <img src={arrowLeft} alt="img" />
            <p>Delicious</p>
            <img src={arrowRight} alt="img" />
          </div>
          <h1 data-aos="fade-up" data-aos-duration="3000">
            Italian Cuisine
          </h1>
          <p data-aos="fade-up" data-aos-duration="3000">
            Classic steak & delicious with delightfully unexpenced twists.
            <br />
            The Restaurant`s sunny decor was inspired by the diners
          </p>
          <span data-aos="fade-up" data-aos-duration="3000">
            Classic steak & delicious with <br /> delightfully unexpenced
            twists. <br />
            The Restaurant`s sunny decor was <br /> inspired by the diners
          </span>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="hero--btn"
          >
            <div className="hero--btn__line"></div>
            <button onClick={() => setModal(true)}>
              Reserve Your Table <FaArrowRight />
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
              <h3>Location</h3>
              <div className="hero--info__text--line"></div>
              <p>
                <ImLocation2
                  style={{
                    color: "red",
                    fontSize: "20px",
                  }}
                />
                Rua da moeda 1g,1200-275,Portugal
              </p>
              <span>
                <ImLocation2
                  style={{
                    color: "red",
                    fontSize: "20px",
                  }}
                />
                Rua da moeda <br /> 1g,1200-275,Portugal
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
              <h3>Hotline</h3>
              <div className="hero--contact__text--line"></div>
              <p>
                <FaPhoneAlt
                  style={{
                    color: "red",
                    fontSize: "20px",
                  }}
                />
                +771219900
              </p>
            </div>
          </div>
        </div>
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
              <img src={userImg} alt="img" />
              <div className="modal--form__img--info">
                <label htmlFor="">NAME</label>
                <input type="text" placeholder="Enter your name" />
              </div>
            </div>
            <div className="modal--form__img">
              <img src={phoneImg} alt="img" />
              <div className="modal--form__img--info">
                <label htmlFor="">PHONE</label>
                <input type="text" placeholder="Enter your phone" />
              </div>
            </div>
            <button>Сontact</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
