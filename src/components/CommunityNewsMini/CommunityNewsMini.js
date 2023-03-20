import React from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../../utils/api";
import { useLanguage } from "../../utils/LanguageContext";
import ImageDeliverer from "../ImageDeliverer/ImageDeliverer";
import "./CommunityNewsMini.scss";

function CommunityNewsMini({ title, id }) {
  const language = useLanguage();
  return (
    <Link to={`/community-news/${id}`} className="news-mini">
      <div className="news-mini__image">
        <ImageDeliverer url={`${API_URL}/featured-image/${language}/${id}`} />
      </div>
        <h3 className="news-mini__title">{title}</h3>
    </Link>
  );
}

export default CommunityNewsMini;
