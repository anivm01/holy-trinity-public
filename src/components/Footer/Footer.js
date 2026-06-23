import React from "react";
import "./Footer.scss";
import * as footerContent from "../../data/footerContent";
import facebook from "../../assets/facebook.svg";
import youtube from "../../assets/youtube.svg";
import gmail from "../../assets/gmail.svg";
import { useLanguage } from "../../utils/LanguageContext";
import { NavLink } from "react-router-dom";

function Footer() {
  const language = useLanguage();
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__block footer__block--start">
          <h3>{footerContent.address.heading[language]}</h3>
          <address>
            <p>{footerContent.address.address.line1[language]}</p>
            <p>{footerContent.address.address.line2[language]}</p>
            <p>{footerContent.phone.heading[language]}: {footerContent.phone.number}</p>
            <p>
              <span>{footerContent.email.heading[language]}:</span>
              <span className="footer__email"><a href={`mailto:${footerContent.email.email}`} target="_blank" rel="noreferrer">
                {footerContent.email.email}
              </a></span>
            </p>
          </address>
          <iframe
            className="footer__map"
            title="Holy Trinity Church map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.2097903471827!2d-79.33031494889686!3d43.68540175826342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cc6441d3a625%3A0x102e7793f49b1c48!2sHoly%20Trinity%20Macedonian-Bulgarian%20Eastern%20Orthodox%20Church!5e0!3m2!1sen!2sca!4v1679422899304!5m2!1sen!2sca"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="footer__block footer__block--center">
          <h3>{footerContent.contacts.heading[language]}</h3>
          {footerContent.contacts.people.map((person, index) => (
            <div key={index}>
              <p className="footer__position">{person.position[language]}</p>
              <p className="footer__name">{person.name[language]}</p>
            </div>
          ))}

          <NavLink className="footer__link" to="/contact">{footerContent.buttons.contactUs[language]}</NavLink>
          <div className="footer__socials">
            <a
              href={footerContent.socialLinks.youtube}
              target="_blank"
              rel="noreferrer"
            >
              <img className="footer__icon" src={youtube} alt="YouTube" />
            </a>
            <a href={footerContent.socialLinks.facebook} target="_blank" rel="noreferrer">
              <img className="footer__icon" src={facebook} alt="Facebook" />
            </a>
            <a href={footerContent.socialLinks.gmail} target="_blank" rel="noreferrer">
              <img className="footer__icon" src={gmail} alt="Email" />
            </a>
          </div>
        </div>
        <div className="footer__block footer__block--end">
          <div>
            <h3>{footerContent.donations.heading[language]}</h3>
            <p className="footer__text">
              {footerContent.donations.text[language]}
            </p>
            <NavLink to="/donations" className="footer__link">
              {footerContent.buttons.learnMore[language]}
            </NavLink>
          </div>
          <div>
            <h3>{footerContent.hallForRent.heading[language]}</h3>
            <p className="footer__text">
              {footerContent.hallForRent.text[language]}
            </p>
            <NavLink to="/hall" className="footer__link">
              {footerContent.buttons.learnMore[language]}
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
