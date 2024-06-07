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
import LatestBroadcast from "../../components/HomeContent/LatestBroadcast/LatestBroadcast";
import ParishPriestBlurb from "../../components/HomeContent/ParishPriestBlurb/ParishPriestBlurb";
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
            <LatestBroadcast />
            <LatestWorshipOffice
              url={`${API_URL}/published/${language}/worship-offices/latest/${currentDate}`}
            />
          </div>
          <div>
            <NextEvent url={`${API_URL}/event/upcoming/${currentDate}`} />
            <ParishPriestBlurb />
          </div>
        </div>
        <LatestNews
          url={`${API_URL}/published/${language}/articles/latest/${currentDate}`}
        />
      </div>
    </main>
  );
}

export default HomePage;
