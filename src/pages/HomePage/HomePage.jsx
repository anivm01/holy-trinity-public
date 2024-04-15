import React from "react";
import "./HomePage.scss";
import { useLanguage } from "../../utils/LanguageContext";
import { API_URL } from "../../utils/api";
import NextEvent from "../../components/NextEvent/NextEvent";
import LatestNews from "../../components/LatestNews/LatestNews";
import LatestWorshipOffice from "../../components/LatestWorshipOffice/LatestWorshipOffice";
import { HomeProfile } from "../../components/HomeProfile/HomeProfile";

import { homeTitle } from "../../data/pageTitles";
import { PageTitle } from "../../components/UI";
function HomePage() {
  const language = useLanguage();
  const currentDate = Math.floor(Date.now() / 1000);

  return (
    <main>
      <PageTitle title={homeTitle[language]} />
      <div className="home">
        <div className="home__top">
          <div className="home__left">
            <HomeProfile />
            <LatestWorshipOffice
              url={`${API_URL}/published/${language}/worship-offices/latest/${currentDate}`}
            />
          </div>
          <NextEvent url={`${API_URL}/event/upcoming/${currentDate}`} />
        </div>
        <LatestNews
          url={`${API_URL}/published/${language}/articles/latest/${currentDate}`}
        />
      </div>
    </main>
  );
}

export default HomePage;
