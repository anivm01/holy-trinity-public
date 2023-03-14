import React from "react";
import "./CommunityNewsList.scss";
import { createMarkup } from "../../utils/createMarkup";
import { removeFuture } from "../../utils/limitData";
import CommunityNewsPreview from "../CommunityNewsPreview/CommunityNewsPreview";
import NoData from "../NoData/NoData";
import { useLanguage } from "../../utils/LanguageContext";
import { ThreeDots } from "react-loader-spinner";
import useFetch from "../../utils/useFetch";

function CommunityNewsList({ url }) {
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
    return <NoData />;
  }

  if (data) {
    const latestNews = removeFuture(data);
    return (
      <section className="community-news-list">
        {latestNews.map((single, index) => {
          return (
            <CommunityNewsPreview
              key={index}
              title={single.title}
              content={createMarkup(single.content)}
              author={single.author}
              id={language === "bg" ? single.en_id : single.id}
            />
          );
        })}
      </section>
    );
  }
  return <NoData />;
}

export default CommunityNewsList;
