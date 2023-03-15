import React from "react";
import './WorshipOfficeItem.scss'
import { Link } from "react-router-dom";
import { API_URL } from "../../utils/api";
import { useLanguage } from "../../utils/LanguageContext";
import { dateObjectConverter } from "../../utils/dateConversion";
import ImageDeliverer from "../ImageDeliverer/ImageDeliverer";
import imageIcon from "../../assets/video-icon.svg"

function WorshipOfficeItem({ item }) {
  const language = useLanguage();
  const date = dateObjectConverter(item.date)
  return (
    <Link to={`/worship-offices/${item.id}`} className="worship-office-item">
        <div className="worship-office-item__image">
        <ImageDeliverer url={`${API_URL}/thumbnail/${language}/${item.id}`} />
        <img className="worship-office-item__icon" src={imageIcon} alt="video icon"/>
        </div>
      <h3 className="worship-office-item__title">{item.title}</h3>
      <h4 className="worship-office-item__date">{date.day}, {date.month} {date.date}</h4>
    </Link>
  );
}

export default WorshipOfficeItem;
