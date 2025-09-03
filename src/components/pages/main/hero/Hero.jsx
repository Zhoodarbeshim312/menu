import "./Hero.scss";
import arrowLeft from "../../../../assets/images/arrowLeft.svg";
import arrowRight from "../../../../assets/images/arrowRight.svg";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero">
          <div className="hero--lineTop"></div>
          <div className="hero--lineBottom"></div>
          <div className="hero--lineLeft"></div>
          <div className="hero--icons">
            <img src={arrowLeft} alt="img" />
            <p>Delicious</p>
            <img src={arrowRight} alt="img" />
          </div>
          <h1>Italian Cuisine</h1>
          <p>
            Classic steak & delicious with delightfully unexpenced twists.
            <br />
            The Restaurant`s sunny decor was inspired by the diners
          </p>
          <div className="hero--btn">
            <div className="hero--btn__line"></div>
            <button>
              Reserve Your Table <FaArrowRight />
            </button>
            <div className="hero--btn__line"></div>
          </div>
          <div className="hero--info">
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
            </div>
          </div>
          <div className="hero--contact">
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
      </div>
    </section>
  );
};

export default Hero;
