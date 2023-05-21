import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { createMarkup } from "../../utils/createMarkup";
import useFetch from "../../utils/useFetchImage";
import NoData from "../NoData/NoData";
import "./WeeklyAnnouncement.scss";

function WeeklyAnnouncement({ url }) {
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
    return (
      <article className="weekly-announcement">
        <h3 className="weekly-announcement__title">{data.title}</h3>
        <div
          className="weekly-announcement__content"
          dangerouslySetInnerHTML={createMarkup(data.announcement)}
        ></div>
      </article>
    );
  }
  return <NoData />;
}

export default WeeklyAnnouncement;
