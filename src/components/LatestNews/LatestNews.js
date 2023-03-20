import Carousel from "better-react-carousel";
import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { createMarkup } from "../../utils/createMarkup";
import { useLanguage } from "../../utils/LanguageContext";
import useFetch from "../../utils/useFetchImage";
import CommunityNewsMini from "../CommunityNewsMini/CommunityNewsMini";
import CommunityNewsPreview from "../CommunityNewsPreview/CommunityNewsPreview";
import NoData from "../NoData/NoData";
import "./LatestNews.scss";

function LatestNews({ url }) {
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
      return (
        <div className="latest-news">
          <Carousel cols={3} rows={1} gap={20} loop>
          {data.map((single, index) => {
              return (
                <Carousel.Item key={index}>
                  <CommunityNewsMini
                    title={single.title}
                    id={language === "bg" ? single.en_id : single.id}
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      );
      }

    return <NoData />;

 
}

export default LatestNews;
