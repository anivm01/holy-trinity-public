import React from "react";
import "./BroadcastsSingle.scss";
import { ThreeDots } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { API_URL } from "../../../utils/api";
import { useLanguage } from "../../../utils/LanguageContext";
import useFetch from "../../../utils/useFetchImage";
import NoData from "../../NoData/NoData";
import { PageTitle } from "../../UI";
import BookModal from "../../UI/BookModal/BookModal";
import {
  ourFather,
  ourFatherTitle,
  symbol,
  symbolTitle,
} from "../../../data/prayersData";

const BroadcastsSingle = () => {
  const params = useParams();
  const language = useLanguage();
  const { data, loading, error } = useFetch(
    `${API_URL}/broadcasts/${params.id}`
  );

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
    const title = {
      en: data.title,
      bg: data.title_bg,
    };
    return (
      <article className="broadcast">
        <PageTitle title={title[language]} />
        <div className="broadcast__hero">
          <iframe
            className="broadcast__video"
            src={`https://www.youtube.com/embed/${data.youtube_video_id}?rel=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
          ></iframe>
        </div>
        <div className="broadcast__prayers">
          <BookModal
            title={ourFatherTitle[language]}
            contentArray={ourFather[language]}
          />
          <BookModal
            title={symbolTitle[language]}
            contentArray={symbol[language]}
          />
        </div>
      </article>
    );
  }
  return <NoData />;
};

export default BroadcastsSingle;
