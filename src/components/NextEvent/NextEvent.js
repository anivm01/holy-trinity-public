import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { createMarkup } from "../../utils/createMarkup";
import { dateObjectConverter } from "../../utils/dateConversion";
import useFetch from "../../utils/useFetchImage";
import Event from "../Event/Event";
import "./NextEvent.scss";

function NextEvent({ url }) {
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
    return <div className="next-event__box"></div>;
  }
  if (data) {
    return (
      <div className="next-event__main">
        {data.map((single, index) => {
          return (
            <Event
              key={index}
              date={dateObjectConverter(single.event_date)}
              title={single.title}
              details={createMarkup(single.event_details)}
            />
          );
        })}
      </div>
    );
  }
  return <div className="next-event__box"></div>;
}

export default NextEvent;
