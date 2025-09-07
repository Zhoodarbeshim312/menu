import { useRef } from "react";
import "./Best.scss";
import arrowLeft from "../../../../assets/images/arrowLeft.svg";
import bestImg1 from "../../../../assets/images/bestImg1.svg";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Best = () => {
  const scrollRef = useRef(null);

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
        <div className="best">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="best--left"
          >
            <div className="best--left__icons">
              <img src={arrowLeft} alt="img" />
              <p>Best Sellers</p>
            </div>
            <h1>
              You Only Reserve <br />
              Exception
            </h1>
            <p>
              Each location has a menu that`s curated just for them. <br />
              See what new at your Cafesio and You`ll find Cafesio <br />
              Covent Carden moments.
            </p>
            <span>
              Each location has a menu that`s <br /> curated just for them.{" "}
              <br />
              See what new at your Cafesio and <br /> You`ll find Cafesio <br />
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
      </div>
    </section>
  );
};

export default Best;
