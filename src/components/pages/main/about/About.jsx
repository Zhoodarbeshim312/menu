import "./About.scss";
import arrowLeft from "../../../../assets/images/arrowLeft.svg";
import aboutLeftImg from "../../../../assets/images/aboutLeftImg.svg";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useChangeLanguage } from "../../../store/useLanguage";

export let api_key = import.meta.env.VITE_KEY;
const About = () => {
  console.log(api_key);

  const { lang } = useChangeLanguage();
  const [about, setAbout] = useState([]);
  const getAboutUs = async () => {
    let res = await axios.get(`${api_key}${lang}/about/`);

    setAbout(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    getAboutUs();
  }, [lang]);
  return (
    <section id="about">
      <div className="container">
        {about.slice(-1).map((el, idx) => (
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
