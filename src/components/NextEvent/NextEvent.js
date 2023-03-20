import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { createMarkup } from "../../utils/createMarkup";
import { dateObjectConverter } from "../../utils/dateConversion";
import useFetch from "../../utils/useFetchImage";
import Event from "../Event/Event";
import NoData from "../NoData/NoData";
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
    return <NoData />;
  }
  if (data) {
    return (
      <Event
        date={dateObjectConverter(data.event_date)}
        title={data.title}
        details={createMarkup(data.event_details)}
      />
    );
  }
  return <NoData />;
}

export default NextEvent;
