import React from "react";
import "./Obituary.scss";
import cross from "../../assets/cross.svg";
import { Link } from "react-router-dom";
import { createMarkup } from "../../utils/createMarkup";
import { useLanguage } from "../../utils/LanguageContext";
import { getLocalizedObituary } from "../../utils/obituaryLocalization";

function Obituary({ item }) {
  const language = useLanguage();
  const localizedObituary = getLocalizedObituary(item, language);
  const content = createMarkup(localizedObituary.content);

  return (
    <article className="obituary">
      <div className="obituary__border">
        <div className="obituary__top">
          <div className="obituary__info">
            <img className="obituary__cross" src={cross} alt="cross" />
            <h3 className="obituary__name">{localizedObituary.name}</h3>
            <h4 className="obituary__years">{item.years}</h4>
          </div>
          <div className="obituary__image">
            {item.image_url && (
              <img
                src={item.image_url}
                alt={localizedObituary.name}
                className="image"
              />
            )}
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
