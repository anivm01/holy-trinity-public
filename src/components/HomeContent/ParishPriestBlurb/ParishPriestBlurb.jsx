import React from "react";
import parishPriest from "../../../assets/parish-priest.jpg";
import "./ParishPriestBlurb.scss";
import { useLanguage } from "../../../utils/LanguageContext";
import { parishPriestSection } from "../../../data/homePageStaticContent";
import { Link } from "react-router-dom";

const ParishPriestBlurb = () => {
  const language = useLanguage();
  return (
    <section className="parish-priest-blurb">
      <div className="parish-priest-blurb__image-box">
        <img
          className="parish-priest-blurb__image"
          src={parishPriest}
          alt="Fr. Velichko Mihailov Archpriest of the Bulgarian Orthodox Church - Bulgarian Patriarchate"
        />
      </div>
      <div className="parish-priest-blurb__text-box">
        <h2>{parishPriestSection.name[language]}</h2>
        <p>{parishPriestSection.shortBio[language]}</p>
        <Link className="parish-priest-blurb__link" to="/parish-priest">
          {parishPriestSection.link[language]}
        </Link>
      </div>
    </section>
  );
};

export default ParishPriestBlurb;
