import "./About.scss";
import arrowLeft from "../../../../assets/images/arrowLeft.svg";
import aboutLeftImg from "../../../../assets/images/aboutLeftImg.svg";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const About = () => {
  const [about, setAbout] = useState([]);
  const getAboutUs = async () => {
    let res = await axios.get(`http://13.60.233.80/ru/about/`);
    setAbout(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    getAboutUs();
  }, []);
  return (
    <section id="about">
      <div className="container">
        {about.map((el, idx) => (
          <div key={idx} className="about">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="about--left"
            >
              <div className="about--left__icon">
                <img src={arrowLeft} alt="img" />
                <p>{el.title}</p>
              </div>
              <h1>{el.label}</h1>
              <img src={el.image_one} alt="img" />
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="about--right"
            >
              <p>{el.description}</p>
              <img src={el.image_two} alt="img" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
