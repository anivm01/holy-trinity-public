import React from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../utils/api";
import { useLanguage } from "../../utils/LanguageContext";
import Image from "../../components/Image/Image";
import ImageDeliverer from "../../components/ImageDeliverer/ImageDeliverer";
import "./CommunityNewsMini.scss";

function CommunityNewsMini({ item }) {
  const language = useLanguage();
  return (
    <Link to={`/community-news/${item.id}`} className="news-mini">
      <div className="news-mini__image">
        {item.src && <img className="image" src={item.src} alt={item.description} />}
      </div>
      <h3 className="news-mini__title">{item.title}</h3>
    </Link>
  );
}

export default CommunityNewsMini;
