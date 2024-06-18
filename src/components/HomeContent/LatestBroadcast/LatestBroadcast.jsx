import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";
import imageIcon from "../../../assets/video-icon.svg";
import "./LatestBroadcast.scss";
import SectionHeading from "../../UI/SectionHeading/SectionHeading";
import { useLanguage } from "../../../utils/LanguageContext";
import { latestBroadcastHeading } from "../../../data/homePageStaticContent";
import { useLatestBroadcast } from "../../../queries";
import { wholeDateObjectConverter } from "../../../utils/dateConversion";

function LatestBroadcast() {
  const { data, loading, error } = useLatestBroadcast();
  const language = useLanguage();

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
    console.log("Latest Broadcast data didn't load");
    return <div></div>;
  }
  if (data) {
    const date = wholeDateObjectConverter(data.broadcast_time);
    const heading = {
      en: data.heading,
      bg: data.heading_bg,
    };
    return (
      <section>
        <SectionHeading
          text={heading[language] || latestBroadcastHeading[language]}
        />
        <Link to={`/broadcasts/${data.id}`} className="worship-office-latest">
          <div className="worship-office-latest__image">
            <img
              className="image"
              src={`https://img.youtube.com/vi/${data.youtube_video_id}/maxresdefault.jpg`}
              alt={data.title}
            />
            <img
              className="worship-office-latest__icon"
              src={imageIcon}
              alt="video icon"
            />
          </div>
          <div className="worship-office-latest__text">
            <h3 className="worship-office-latest__title">{data.title}</h3>
            <h4 className="worship-office-latest__date">
              {date.day[language]}, {date.month[language]} {date.date}
            </h4>
          </div>
        </Link>
      </section>
    );
  }
  return <div></div>;
}

export default LatestBroadcast;
