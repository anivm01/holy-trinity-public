import React from "react";
import { createMarkup } from "../../utils/createMarkup";
import Event from "../Event/Event";
import "./Events.scss";
import { dateObjectConverter } from "../../utils/dateConversion";
import useFetch from "../../utils/useFetchImage";
import { ThreeDots } from "react-loader-spinner";
import NoData from "../NoData/NoData";

function Events({ url }) {
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
    return (
      <section className="events">
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
      </section>
    );
  }
  return <NoData />;
}

export default Events;
