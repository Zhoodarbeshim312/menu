import "./Visit.scss";
import arrowLeft from "../../../../assets/images/arrowLeft.svg";
import { FaArrowRight } from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { BiLogoTelegram } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
const Visit = () => {
  return (
    <section id="visit">
      <div className="container">
        <div className="visit">
          <div className="visit--left">
            <div className="visit--left__icon">
              <img src={arrowLeft} alt="img" />
              <p>Visit Restaurant</p>
            </div>
            <h1>
              Join Us for <br />
              Happy Hours
            </h1>
            <div className="visit--left__info">
              <h3>Your neighborhood</h3>
              <p>
                225$.Lake Ave.Suite 1150 <br />
                Pasadena,CA 911101
              </p>
            </div>
            <div className="visit--left__info">
              <h3>Opening hours:</h3>
              <p>Mon-Thu: 10:00 am - 01:00 am</p>
              <p>Fri-Sun: 10:00 am - 02:00 am</p>
            </div>
            <div className="visit--left__btn">
              <div className="visit--left__btn--lineTop"></div>
              <button>
                Purchase gift card <FaArrowRight />
              </button>
              <div className="visit--left__btn--lineBottom"></div>
            </div>
          </div>
          <div className="visit--right">
            <h2>contact Info</h2>
            <h3>
              <MdPhoneInTalk />
              +771219900
            </h3>
            <h3>
              <CiMail />
              motionweb312@gmail.com
            </h3>
            <div className="visit--right__link">
              <a href="#">
                <BiLogoTelegram />
              </a>
              <a href="#">
                <AiFillInstagram />
              </a>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.6700155181948!2d74.58255517595892!3d42.87980860210751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9ba3daadfbb%3A0x4e7a5fa037f5fd93!2sMotion%20Web%20IT%20academy!5e0!3m2!1sru!2skg!4v1756921118707!5m2!1sru!2skg"
              width="400"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;
