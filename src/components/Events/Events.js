import React from "react";
import { sortNewestToOldest } from "../../utils/sort";
import { createMarkup } from "../../utils/createMarkup";
import Event from "../Event/Event";
import "./Events.scss";
import { dateObjectConverter } from "../../utils/dateConversion";

function Events({ data }) {
  if(!data) {
    return <p>Loading...</p>
  }
  const sortedArray = sortNewestToOldest(data);
  return (
    <section className="events">
      {sortedArray.map((single, index) => {
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

export default Events;
