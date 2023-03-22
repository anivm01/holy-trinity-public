import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { API_URL } from "../../utils/api";
import { dateObjectConverter } from "../../utils/dateConversion";
import { useLanguage } from "../../utils/LanguageContext";
import useFetch from "../../utils/useFetchImage";
import ImageDeliverer from "../ImageDeliverer/ImageDeliverer";
import NoData from "../NoData/NoData";
import imageIcon from "../../assets/video-icon.svg";
import './LatestWorshipOffice.scss'

function LatestWorshipOffice({ url }) {
  const language = useLanguage();
  const { data, loading, error } = useFetch(url);

  if (loading) {
    return (
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#6F0B20"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ justifyContent: "center" }}
        wrapperClassName=""
        visible={true}
      />
    );
  }
  if (error) {
    return <NoData />;
  }
  if (data) {
    const date = dateObjectConverter(data.date)
    return (
      <div>
        <Link
          to={`/worship-offices/${data.id}`}
          className="worship-office-latest"
        >
          <div className="worship-office-latest__image">
            <ImageDeliverer
              url={`${API_URL}/thumbnail/${language}/${data.id}`}
            />
            <img
              className="worship-office-latest__icon"
              src={imageIcon}
              alt="video icon"
            />
          </div>
          <h3 className="worship-office-latest__title">{data.title}</h3>
          <h4 className="worship-office-latest__date">
            {date.day}, {date.month} {date.date}
          </h4>
        </Link>
      </div>
    );
  }
  return <NoData />;
}

export default LatestWorshipOffice;
