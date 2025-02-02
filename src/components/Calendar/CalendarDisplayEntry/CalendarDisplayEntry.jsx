import React from "react";
import "./CalendarDisplayEntry.scss";
import SingleCalendarEntryTitles from "../SingleCalendarEntryTitles/SingleCalendarEntryTitles";
import { calendarDateConverter } from "../../../utils/dateConversion";
import { useLanguage } from "../../../utils/LanguageContext";

function CalendarDisplayEntry({ single }) {
  const language = useLanguage();
  const date = calendarDateConverter(single.date);
  const entry = {
    title: {
      en: single.title || "No English Title",
      bg: single.title_bg || "Няма Заглавие",
    },
    // title: single.title || "No English Title",
    // titleBg: single.title_bg || "No Bulgrarian Title",
    cross: single.cross,
    bold: single.bold,
    red: single.red,
    star: single.star,
  };

  return (
    <div
      className={`calendar-single ${entry.bold ? "calendar-single__bold" : ""}`}
    >
      <div
        className={`calendar-single__date ${
          entry.red ? "calendar-single__red" : ""
        }`}
      >
        <span>{date.date}</span>
        <span>{date[language]}</span>
      </div>
      <SingleCalendarEntryTitles
        red={entry.red}
        cross={entry.cross}
        star={entry.star}
        title={entry.title[language]}
      />
    </div>
  );
}

export default CalendarDisplayEntry;
