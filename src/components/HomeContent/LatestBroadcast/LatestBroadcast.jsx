import React from "react";
import { ThreeDots } from "react-loader-spinner";
import "./LatestBroadcast.scss";
import SectionHeading from "../../UI/SectionHeading/SectionHeading";
import { useLanguage } from "../../../utils/LanguageContext";
import { latestBroadcastHeading } from "../../../data/homePageStaticContent";
import { useLatestBroadcast } from "../../../queries";

function LatestBroadcast() {
  const { data, loading, error } = useLatestBroadcast();
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
    const heading = {
      en: data.heading,
      bg: data.heading_bg,
    };
    return (
      <section>
        <SectionHeading
          text={heading[language] || latestBroadcastHeading[language]}
        />
        <div className="broadcast__hero">
          <iframe
            className="broadcast__video"
            src={`https://www.youtube.com/embed/${data.youtube_video_id}?rel=0&showinfo=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
          ></iframe>
        </div>
      </section>
    );
  }
  return <div></div>;
}

export default LatestBroadcast;
