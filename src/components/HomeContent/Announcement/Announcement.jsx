import React from "react";
import { ThreeDots } from "react-loader-spinner";
import "./Announcement.scss";
import { useLanguage } from "../../../utils/LanguageContext";
import { useAnnouncement } from "../../../queries";
import { createMarkup } from "../../../utils/createMarkup";

function Announcement() {
  const { data, loading, error } = useAnnouncement();
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
    console.log("Latest Broadcast data didn't load");
    return <div></div>;
  }
  if (data) {
    const announcement = {
      en: data.announcement,
      bg: data.announcement_bg,
    };
    return (
      <section>
        <div
          className="announcement"
          dangerouslySetInnerHTML={createMarkup(announcement[language])}
        ></div>
      </section>
    );
  }
  return <div></div>;
}

export default Announcement;
