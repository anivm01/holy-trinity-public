import React from "react";
import facebook from "../../assets/facebook.svg";
import youtube from "../../assets/youtube.svg";
import gmail from "../../assets/gmail.svg";
import { Link } from "react-router-dom";

function FooterContentBg() {
  return (
    <div className="footer__container">
      <div className="footer__block footer__block--start">
        <h3>Адрес</h3>
        <address>
          <p>201 Monarch Park Avenue, Toronto,</p>
          <p>Ontario, Canada, M4J 4R9</p>
          <p>Тел.: 647-293-4426</p>
          <p>
            <span>Е-мейл:</span>
            <span>
              <a
                className="footer__email"
                href="mailto:ourholytrinitymbc@gmail.com"
                target="_blank"
              >
                ourholytrinitymbc@gmail.com
              </a>
            </span>
          </p>
        </address>
        <iframe
          className="footer__map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.2097903471827!2d-79.33031494889686!3d43.68540175826342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cc6441d3a625%3A0x102e7793f49b1c48!2sHoly%20Trinity%20Macedonian-Bulgarian%20Eastern%20Orthodox%20Church!5e0!3m2!1sen!2sca!4v1679422899304!5m2!1sen!2sca"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="footer__block footer__block--center">
        <h3>Контакти</h3>
        <p className="footer__position">Енорийски свещтеник</p>
        <p className="footer__name">Прот. Величко Михайлов</p>
        <p className="footer__position">
          Председател на църковното настоятелство:
        </p>
        <p className="footer__name">Ник Стефанов</p>
        <p className="footer__position">
          Ковчежник на Църковното Настоятелство:
        </p>
        <p className="footer__name">Фред Минков</p>
        <a
          href="mailto:ourholytrinitymbc@gmail.com"
          className="footer__link"
          target="_blank"
        >
          Contact Us
        </a>
        <div className="footer__socials">
          <a
            href="https://www.youtube.com/@celebrationatholytrinitych4006"
            target="_blank"
          >
            <img className="footer__icon" src={youtube} />
          </a>
          <a href="https://www.facebook.com/ourholytrinity" target="_blank">
            <img className="footer__icon" src={facebook} />
          </a>
          <a href="mailto:ourholytrinitymbc@gmail.com" target="_blank">
            <img className="footer__icon" src={gmail} />
          </a>
        </div>
      </div>
      <div className="footer__block footer__block--end">
        <h3>Дарения</h3>
        <p className="footer__text">
          С благодарност приемаме дарения от частни лица и корпорации.
        </p>
        <Link to="/donations" className="footer__link">
        Научете повече
        </Link>
        <h3>Зала под наем</h3>
        <p>Църковната зала се дава под наем</p>
        <a className="footer__link">Научете повече</a>
      </div>
    </div>
  );
}

export default FooterContentBg;
