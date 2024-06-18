import React from "react";
import "./FeastsListItem.scss";
import { useLanguage } from "../../../utils/LanguageContext";
import { wholeDateObjectConverter } from "../../../utils/dateConversion";
import { defaultFeastContent } from "../../../data/feastsStaticContent";
import { createMarkup } from "../../../utils/createMarkup";

const FeastsListItem = ({ item }) => {
  const language = useLanguage();
  const date = wholeDateObjectConverter(item.event_date);
  const title = {
    en: item.title,
    bg: item.title_bg,
  };
  const details = {
    en: item.event_details || <p></p>,
    bg: item.event_details_bg || <p></p>,
  };

  return (
    <div className="feast-item">
      <div className="feast-item__header">
        <span className="feast-item__date">
          {date.month[language]} {date.date}
        </span>
        <span className="feast-item__date">{date.day[language]}</span>
        <span className="feast-item__date">{date.year}</span>
      </div>
      <div className="feast-item__main">
        <h2 className="feast-item__title">{title[language]}</h2>
        {item.is_default ? (
          <div>
            <p>{defaultFeastContent[language]}</p>
          </div>
        ) : (
          <div
            className="feast-item__details"
            dangerouslySetInnerHTML={createMarkup(details[language])}
          ></div>
        )}
      </div>
    </div>
  );
};

export default FeastsListItem;
