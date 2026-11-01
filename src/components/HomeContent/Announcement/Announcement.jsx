import React from "react";
import { ThreeDots } from "react-loader-spinner";
import "./Announcement.scss";
import { useLanguage } from "../../../utils/LanguageContext";
import { useAnnouncement } from "../../../queries";
import { createMarkup } from "../../../utils/createMarkup";

function Announcement() {
  const { data, isLoading, error } = useAnnouncement();
  const language = useLanguage();

  if (isLoading) {
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

  if (error || !data) {
    return null;
  }

  const announcement = {
    en: data.announcement,
    bg: data.announcement_bg,
  };
  const announcementMarkup = createMarkup(announcement[language] || "");
  const announcementText = new DOMParser()
    .parseFromString(announcementMarkup.__html, "text/html")
    .body.textContent.replace(/\u00a0/g, " ")
    .trim();

  if (!announcementText) {
    return null;
  }

  return (
    <section>
      <div
        className="announcement"
        dangerouslySetInnerHTML={announcementMarkup}
      />
    </section>
  );
}

export default Announcement;
