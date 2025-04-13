import Carousel from "better-react-carousel";
import React from "react";
import { ThreeDots } from "react-loader-spinner";
import useFetch from "../../utils/useFetchImage";
import CommunityNewsMini from "../CommunityNewsMini/CommunityNewsMini";
import NoData from "../../components/NoData/NoData";
import "./LatestNews.scss";
import SectionHeading from "../../components/UI/SectionHeading/SectionHeading";
import Button from "../../components/UI/Button/Button";
import { useLanguage } from "../../utils/LanguageContext";
import { latestNewsHeading } from "../../data/homePageStaticContent";

function LatestNews({ url }) {
  const { data, loading, error } = useFetch(url);
  const language = useLanguage()

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
        <SectionHeading
          text={latestNewsHeading[language]}
        />
        <Carousel cols={3} rows={1} gap={10} loop>
          {data.map((single, index) => {
            return (
              <Carousel.Item key={index}>
                <CommunityNewsMini item={single} />
              </Carousel.Item>
            );
          })}
        </Carousel>
        <Button text="See More" href="/community-news" buttonComponent="link" />
      </div>
    );
  }

  return <NoData />;
}

export default LatestNews;
