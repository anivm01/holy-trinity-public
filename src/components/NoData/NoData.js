import React from "react";
import "./NoData.scss";
import noData from "../../assets/no-data.svg";
import { useLanguage } from "../../utils/LanguageContext";
import { useNavigate } from "react-router-dom";

function NoData() {
  const language = useLanguage();
  return (
    <div className="no-data">
      <img className="no-data__image" src={noData} alt="no data was found" />
      {language === "bg" ? (
        <p className="no-data__text">
          Няма какво да покажем тук в момента. Проверете отново по-късно.
        </p>
      ) : (
        <p className="no-data__text">
          We have nothing to show here right now. Check back later for updates
        </p>
      )}
    </div>
  );
}

export default NoData;
