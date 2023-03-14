import React from "react";
import { createMarkup } from "../../utils/createMarkup";
import Event from "../Event/Event";
import "./Events.scss";
import { dateObjectConverter } from "../../utils/dateConversion";
import useFetch from "../../utils/useFetchImage";
import { ThreeDots } from "react-loader-spinner";
import NoData from "../NoData/NoData";
import { removeFuture, removePast } from "../../utils/limitData";

function Events({ url, timeline }) {
  const { data, loading, error } = useFetch(url);
  if (loading) {
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#6F0B20"
      ariaLabel="three-dots-loading"
      wrapperStyle={{ justifyContent: "center" }}
      wrapperClassName=""
      visible={true}
    />;
  }
  if (error) {
    return <NoData />;
  }

  if (data) {
    const events = (timeline === "upcoming") ? removePast(data) : removeFuture(data)
    if(events.length === 0) {
      return (
        <NoData/>
      )
    }
    return (
      <section className="events">
        {events.map((single, index) => {
          return (
            <Event
              key={index}
              date={dateObjectConverter(single.date)}
              title={single.title}
              details={createMarkup(single.event_details)}
            />
          );
        })}
      </section>
    );
  }
  return <NoData />;
}

export default Events;
