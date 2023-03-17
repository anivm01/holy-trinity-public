import React from "react";
import "./Obituary.scss";
import cross from "../../assets/cross.svg";
import ImageDeliverer from "../ImageDeliverer/ImageDeliverer";
import { API_URL } from "../../utils/api";
import { useLanguage } from "../../utils/LanguageContext";
import { Link } from "react-router-dom";

function Obituary({ name, id, years, obituary }) {
  const linkChecker = obituary['__html']
  const language = useLanguage();
  return (
    <article className="obituary">
      <div className="obituary__border">
        <div className="obituary__top">
          <div className="obituary__info">
            <img className="obituary__cross" src={cross} alt="cross" />
            <h3 className="obituary__name">{name}</h3>
            <h4 className="obituary__years">{years}</h4>
          </div>
          <div className="obituary__image">
              <ImageDeliverer url={`${API_URL}/deceased/${language}/${id}`} />
          </div>
        </div>
        <div
          className="obituary__content"
          dangerouslySetInnerHTML={obituary}
        ></div>
        {linkChecker.length > 8 && <Link className="obituary__continue" to={`/in-memoriam/${id}`}>View...</Link>}
      </div>
    </article>
  );
}

export default Obituary;
