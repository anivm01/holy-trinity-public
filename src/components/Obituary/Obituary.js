import React from "react";
import "./Obituary.scss";
import cross from "../../assets/cross.svg";
import ImageDeliverer from "../ImageDeliverer/ImageDeliverer";
import { API_URL } from "../../utils/api";
import { useLanguage } from "../../utils/LanguageContext";
import { Link } from "react-router-dom";
import { createMarkup } from "../../utils/createMarkup";
import Image from "../Image/Image";

function Obituary({ item }) {
  const content = createMarkup(item.obituary);
  return (
    <article className="obituary">
      <div className="obituary__border">
        <div className="obituary__top">
          <div className="obituary__info">
            <img className="obituary__cross" src={cross} alt="cross" />
            <h3 className="obituary__name">{item.name}</h3>
            <h4 className="obituary__years">{item.years}</h4>
          </div>
          <div className="obituary__image">
            {item.src && <img src={item.src} alt={item.description} className="image" />}
          </div>
        </div>
        <div
          className="obituary__content"
          dangerouslySetInnerHTML={content}
        ></div>
        {content.__html.length > 8 && 
          <Link className="obituary__continue" to={`/in-memoriam/${item.id}`}>
            View...
          </Link>
        }
      </div>
    </article>
  );
}

export default Obituary;
