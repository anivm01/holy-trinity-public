import React from "react";
import "./WorshipOfficeSingle.scss";
import { ThreeDots } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { API_URL } from "../../utils/api";
import { useLanguage } from "../../utils/LanguageContext";
import useFetch from "../../utils/useFetchImage";
import NoData from "../NoData/NoData";
import ReadingButton from "../ReadingButton/ReadingButton";
import { createMarkup } from "../../utils/createMarkup";
import { ourFather, symbol } from "../../content/content";

function WorshipOfficeSingle() {
  const params = useParams();
  const language = useLanguage();
  const { data, loading, error } = useFetch(
    `${API_URL}/worship-office/${language}/${params.id}`
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
    const oldTestament = createMarkup(data.old_testament);
    const epistle = createMarkup(data.epistle);
    const gospel = createMarkup(data.gospel);
    return (
      <article className="worship-office-single">
        <div className="worship-office-single__hero">
          <iframe
            className="worship-office-single__video"
            src={`https://www.youtube.com/embed/${data.youtube_video_id}?rel=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
          ></iframe>
        </div>
        <h3 className="worship-office-single__title">{data.title}</h3>
        <div className="worship-office-single__bottom">
          <div className="worship-office-single__readings">
            {language === "bg" ? (
              <h3 className="worship-office-single__subtitle">Четива</h3>
            ) : (
              <h3 className="worship-office-single__subtitle">Readings</h3>
            )}
            {gospel.__html.length > 8 && (
              <ReadingButton
                content={gospel}
                title={language === "bg" ? "Евангелие" : "Gospel"}
              />
            )}
            {epistle.__html.length > 8 && (
              <ReadingButton
                content={epistle}
                title={language === "bg" ? "Апостол" : "Epistle"}
              />
            )}
            {oldTestament.__html.length > 8 && (
              <ReadingButton
                content={oldTestament}
                title={language === "bg" ? "Старият завет" : "Old Testament"}
              />
            )}
          </div>
          <div className="worship-office-single__prayers">
            {language === "bg" ? (
              <h3 className="worship-office-single__subtitle">Молитви</h3>
            ) : (
              <h3 className="worship-office-single__subtitle">Prayers</h3>
            )}
            {language === "bg" ? (
              <ReadingButton
                content={createMarkup(ourFather.bg)}
                title="Отче Наш"
              />
            ) : (
              <ReadingButton
                content={createMarkup(ourFather.en)}
                title="Our Father"
              />
            )}
            {language === "bg" ? (
              <ReadingButton
                content={createMarkup(symbol.bg)}
                title="Символ на Вярата"
              />
            ) : (
              <ReadingButton
                content={createMarkup(symbol.en)}
                title="The Creed: The Symbol of Faith"
              />
            )}
          </div>
        </div>
      </article>
    );
  }
  return <NoData />;
}

export default WorshipOfficeSingle;
