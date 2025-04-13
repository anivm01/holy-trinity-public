import React, { useState } from "react";
import "./VideosPageListItem.scss";
// import { Link } from "react-router-dom";
// import { wholeDateObjectConverter } from "../../../utils/dateConversion";
// import { useLanguage } from "../../../utils/LanguageContext";
// import { VideoIcon } from "../../../assets/svg";
import LightboxVideo from "../LightboxVideo/LightboxVideo";
import { VideoIcon } from "../../../assets/svg";
import { createMarkup } from "../../../utils/createMarkup";

const VideosPageListItem = ({ item }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <div className="video-card">
      <h3>{item.title}</h3>
      <div className="video-card__image" onClick={() => setModalVisible(true)}>
        <img
          src={`https://img.youtube.com/vi/${item.youtube_video_id}/maxresdefault.jpg`}
          alt={item.title}
          className="video-card__thumbnail"
        />
        <VideoIcon className="video-card__icon" />
      </div>
      {item.commentary && (
        <div
          className="video-card__commentary"
          dangerouslySetInnerHTML={createMarkup(item.commentary)}
        ></div>
      )}

      <LightboxVideo
        videoUrl={`https://www.youtube.com/embed/${item.youtube_video_id}`}
        visible={modalVisible}
        setVisible={setModalVisible}
      />
    </div>
    // <Link to={`/VideosPage/${item.id}`} className="worship-office-item">
    //   <div className="worship-office-item__image">
    //     <img
    //       src={`https://img.youtube.com/vi/${item.youtube_video_id}/maxresdefault.jpg`}
    //       alt="thumbnail placeholder"
    //       className="image"
    //     />
    //     <VideoIcon className="worship-office-item__icon" />
    //   </div>
    //   <h3 className="worship-office-item__title">{title[language]}</h3>
    //   <h4 className="worship-office-item__date">
    //     {date.day[language]}, {date.month[language]} {date.date}
    //   </h4>
    // </Link>
  );
};

export default VideosPageListItem;
