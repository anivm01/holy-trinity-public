import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { createMarkup } from "../../utils/createMarkup";
import { dateObjectConverter } from "../../utils/dateConversion";
import useFetch from "../../utils/useFetchImage";
import Event from "../Event/Event";
import "./NextEvent.scss";
import { useLanguage } from "../../utils/LanguageContext";
import SectionHeading from "../UI/SectionHeading/SectionHeading";
import Button from "../UI/Button/Button";

function NextEvent({ url }) {
  const { data, loading, error } = useFetch(url);
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
    return <div className="next-event__box"></div>;
  }
  if (data) {
    const firstThreeItems = data.slice(0, 3)
    return (
      <div className="next-event__main">
        <SectionHeading
          bgText="Предстоящи събития в нашата църква"
          text="Upcoming Events at our church"
        />
        {firstThreeItems.map((single, index) => {
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
        <Button text="See More" href="/events" buttonComponent="link" />
      </div>
    );
  }
  return <div className="next-event__box"></div>;
}

export default NextEvent;
