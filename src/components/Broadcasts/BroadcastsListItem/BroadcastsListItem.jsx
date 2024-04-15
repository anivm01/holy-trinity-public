import React from "react";
import "./BroadcastsListItem.scss";
import { Link } from "react-router-dom";
import { wholeDateObjectConverter } from "../../../utils/dateConversion";
import imageIcon from "../../../assets/video-icon.svg";
import placeholder from "../../../assets/sunset-background.jpg";

const BroadcastsListItem = ({ item }) => {
  const date = wholeDateObjectConverter(item.broadcast_time);
  return (
    <Link to={`/broadcasts/${item.id}`} className="worship-office-item">
      <div className="worship-office-item__image">
        <img
          src={item.featured_image_url || placeholder}
          alt="thumbnail placeholder"
          className="image"
        />
        <img
          className="worship-office-item__icon"
          src={imageIcon}
          alt="video icon"
        />
      </div>
      <h3 className="worship-office-item__title">{item.title}</h3>
      <h4 className="worship-office-item__date">
        {date.day}, {date.month} {date.date}
      </h4>
    </Link>
  );
};

export default BroadcastsListItem;
