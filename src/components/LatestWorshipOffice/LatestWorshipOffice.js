import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { dateObjectConverter } from "../../utils/dateConversion";
import useFetch from "../../utils/useFetchImage";
import imageIcon from "../../assets/video-icon.svg";
import placeholder from "../../assets/sunset-background.jpg";
import "./LatestWorshipOffice.scss";
import SectionHeading from "../UI/SectionHeading/SectionHeading";
import { useLanguage } from "../../utils/LanguageContext";
import { latestWorshipOfficeHeading } from "../../data/homePageStaticContent";

function LatestWorshipOffice({ url }) {
  const { data, loading, error } = useFetch(url);
  const language = useLanguage()

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
    return <div></div>;
  }
  if (data) {
    const date = dateObjectConverter(data.date);
    return (
      <section>
        <SectionHeading
          text={latestWorshipOfficeHeading[language]}
        />
        <Link
          to={`/worship-offices/${data.id}`}
          className="worship-office-latest"
        >
          <div className="worship-office-latest__image">
            {data.src ? (
              <img className="image" src={data.src} alt={data.description} />
            ) : (
              <img
                src={placeholder}
                alt="thumbnail placeholder"
                className="image"
              />
            )}
            <img
              className="worship-office-latest__icon"
              src={imageIcon}
              alt="video icon"
            />
          </div>
          <div className="worship-office-latest__text">
            <h3 className="worship-office-latest__title">{data.title}</h3>
            <h4 className="worship-office-latest__date">
              {date.day}, {date.month} {date.date}
            </h4>
          </div>
        </Link>
      </section>
    );
  }
  return <div></div>;
}

export default LatestWorshipOffice;
