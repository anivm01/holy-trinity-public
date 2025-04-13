import Carousel from "better-react-carousel";
import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import NoData from "../../NoData/NoData";
import "./LatestVideos.scss";
import SectionHeading from "../../UI/SectionHeading/SectionHeading";
import Button from "../../UI/Button/Button";
import { useLanguage } from "../../../utils/LanguageContext";
import { latestVideosHeading } from "../../../data/homePageStaticContent";
import { useVideos } from "../../../queries";
import { VideoIcon } from "../../../assets/svg";
import LightboxVideo from "../../Videos/LightboxVideo/LightboxVideo";

function LatestVideos() {
  const { data, loading, error } = useVideos();
  const language = useLanguage();
  const [modalVisible, setModalVisible] = useState(false);
  const [lightboxVideoUrl, setLightboxVideoUrl] = useState("");

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
      <div className="latest-videos">
        <SectionHeading text={latestVideosHeading[language]} />
        <Carousel cols={3} rows={1} gap={10} loop>
          {data.map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <div className="videos-item">
                  <div
                    className="videos-item__image"
                    onClick={() => {
                      setModalVisible(true);
                      setLightboxVideoUrl(
                        `https://www.youtube.com/embed/${item.youtube_video_id}`
                      );
                    }}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${item.youtube_video_id}/maxresdefault.jpg`}
                      alt="thumbnail placeholder"
                      className="image"
                    />
                    <VideoIcon className="videos-item__icon" />
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
        <Button text="See More" href="/videos" buttonComponent="link" />
        <LightboxVideo
          videoUrl={lightboxVideoUrl}
          visible={modalVisible}
          setVisible={setModalVisible}
        />
      </div>
    );
  }

  return <NoData />;
}

export default LatestVideos;
