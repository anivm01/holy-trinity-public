import React from "react";
import "./Event.scss";
import { useLanguage } from "../../utils/LanguageContext";

function Event({ title, details, date, isDefault }) {
  const language = useLanguage();

  return (
    <div className="event">
      <div className="event__header">
        <span className="event__date">
          {language === "en" ? date.month : date.monthBg} {date.date}
        </span>
        <span className="event__date">{language === "en" ? date.day : date.dayBg}</span>
        <span className="event__date">{date.year}</span>
      </div>
      <div className="event__main">
        <h2>{title}</h2>
        {isDefault ? <div>{language === "en" ? <p>Divine Liturgy - 10:00 am</p> : <p>Света Литургия - 10:00 ч.</p>}</div> : <div className="event__details" dangerouslySetInnerHTML={details}></div>}
      </div>
    </div>
  );
}

export default Event;
