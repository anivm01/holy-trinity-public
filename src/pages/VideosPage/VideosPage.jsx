import React from "react";
//import { BroadcastsList } from "../../components/Broadcasts";
import { PageTitle } from "../../components/UI";
import { videosTitle } from "../../data/pageTitles";
import { useLanguage } from "../../utils/LanguageContext";
import VideosPageList from "../../components/Videos/VideosPageList/VideosPageList";
import "./VideosPage.scss";

const VideosPage = () => {
  const language = useLanguage();
  return (
    <div className="videos-page">
      <PageTitle title={videosTitle[language]} />
      <VideosPageList />
      {/* <BroadcastsList /> */}
    </div>
  );
};

export default VideosPage;
