import React from "react";
import { createMarkup } from "../../utils/createMarkup";
import Event from "../Event/Event";
import "./Events.scss";
import { dateObjectConverter } from "../../utils/dateConversion";
import useFetch from "../../utils/useFetchImage";
import { ThreeDots } from "react-loader-spinner";
import NoData from "../NoData/NoData";
import { useLanguage } from "../../utils/LanguageContext";

function Events({ url }) {
  const { data, loading, error } = useFetch(url);
  const language = useLanguage();
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
              title={language === "en" ? single.title : single.title_bg}
              isDefault={single.is_default}
              details={language === "en" ? createMarkup(single.event_details) : createMarkup(single.event_details_bg)}
            />
          );
        })}
      </section>
    );
  }
  return <NoData />;
}

export default Events;
