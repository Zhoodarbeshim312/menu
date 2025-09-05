import "./About.scss";
import arrowLeft from "../../../../assets/images/arrowLeft.svg";
import aboutLeftImg from "../../../../assets/images/aboutLeftImg.svg";
const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about">
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="about--left"
          >
            <div className="about--left__icon">
              <img src={arrowLeft} alt="img" />
              <p>About Us</p>
            </div>
            <h1>
              A Journey Throught <br />
              Cafesio Flavors
            </h1>
            <img src={aboutLeftImg} alt="img" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="about--right"
          >
            <p>
              Try dishes that will open up new tastes for you and delight your
              eyes with their appearance. Here you will find a cozy atmosphere,
              excellent service and attention to each guest. Book a table now
              and enjoy a unique experience of taste discovery!
            </p>
            <img src={aboutLeftImg} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
