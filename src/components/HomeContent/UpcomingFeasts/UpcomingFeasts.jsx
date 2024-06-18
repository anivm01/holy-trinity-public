import React from "react";
import { ThreeDots } from "react-loader-spinner";
// import { createMarkup } from "../../utils/createMarkup";
// import { dateObjectConverter } from "../../utils/dateConversion";
// import Event from "../Event/Event";
import "./UpcomingFeasts.scss";
import { useLanguage } from "../../../utils/LanguageContext";
import SectionHeading from "../../UI/SectionHeading/SectionHeading";
import Button from "../../UI/Button/Button";
import { nextEventHeading } from "../../../data/homePageStaticContent";
import { useNextFeasts } from "../../../queries";
import FeastsListItem from "../../Feasts/FeastsListItem/FeastsListItem";

function UpcomingFeasts() {
  const { data, loading, error } = useNextFeasts();
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
    // const firstThreeItems = data.slice(0, 3);
    return (
      <div className="next-event__main">
        <SectionHeading text={nextEventHeading[language]} />
        {data.map((single, index) => {
          return <FeastsListItem key={index} item={single} />;
        })}

        <Button text="See More" href="/events" buttonComponent="link" />
      </div>
    );
  }
  return <div className="next-event__box"></div>;
}

export default UpcomingFeasts;
