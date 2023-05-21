import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { createMarkup } from "../../utils/createMarkup";
import { dateObjectConverter } from "../../utils/dateConversion";
import { useLanguage } from "../../utils/LanguageContext";
import useFetch from "../../utils/useFetchImage";
import Event from "../Event/Event";
import "./NextEvent.scss";

function NextEvent({ url }) {
  const language = useLanguage();
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
    return (
      <div className="next-event__box">
        {language === "bg" ? (
          <h2 className="next-event__error">
            В момента нямаме предстоящи събития. Проверете отново на по-късна
            дата
          </h2>
        ) : (
          <h2 className="next-event__error">
            We don't have any upcoming events at this time. Check back with us
            at a later date for updates.
          </h2>
        )}
      </div>
    );
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
  return (
    <div className="next-event__box">
      {language === "bg" ? (
        <h2 className="next-event__error">
          В момента нямаме предстоящи събития. Проверете отново на по-късна дата
        </h2>
      ) : (
        <h2 className="next-event__error">
          We don't have any upcoming events at this time. Check back with us at
          a later date for updates.
        </h2>
      )}
    </div>
  );
}

export default NextEvent;
