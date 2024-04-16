import React from "react";
import "./BroadcastsListItem.scss";
import { Link } from "react-router-dom";
import { wholeDateObjectConverter } from "../../../utils/dateConversion";
import { useLanguage } from "../../../utils/LanguageContext";
import { VideoIcon } from "../../../assets/svg";

const BroadcastsListItem = ({ item }) => {
  const language = useLanguage();
  const date = wholeDateObjectConverter(item.broadcast_time);
  const title = {
    en: item.title,
    bg: item.title_bg,
  };
  return (
    <Link to={`/broadcasts/${item.id}`} className="worship-office-item">
      <div className="worship-office-item__image">
        <img
          src={`https://img.youtube.com/vi/${item.youtube_video_id}/maxresdefault.jpg`}
          alt="thumbnail placeholder"
          className="image"
        />
        <VideoIcon className="worship-office-item__icon" />
      </div>
      <h3 className="worship-office-item__title">{title[language]}</h3>
      <h4 className="worship-office-item__date">
        {date.day[language]}, {date.month[language]} {date.date}
      </h4>
    </Link>
  );
};

export default BroadcastsListItem;
