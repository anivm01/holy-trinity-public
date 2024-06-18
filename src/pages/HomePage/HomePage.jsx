import React from "react";
import "./HomePage.scss";
import { useLanguage } from "../../utils/LanguageContext";
import { API_URL } from "../../utils/api";
import LatestNews from "../../components/LatestNews/LatestNews";
import { homeTitle } from "../../data/pageTitles";
import { PageTitle } from "../../components/UI";
import LatestBroadcast from "../../components/HomeContent/LatestBroadcast/LatestBroadcast";
import ParishPriestBlurb from "../../components/HomeContent/ParishPriestBlurb/ParishPriestBlurb";
import UpcomingFeasts from "../../components/HomeContent/UpcomingFeasts/UpcomingFeasts";
import Announcement from "../../components/HomeContent/Announcement/Announcement";
function HomePage() {
  const language = useLanguage();
  const currentDate = Math.floor(Date.now() / 1000);

  return (
    <main>
      <PageTitle title={homeTitle[language]} />
      <div className="home">
        <div className="home__top">
          <div>
            <Announcement />
            <LatestBroadcast />
          </div>
          <div>
            <UpcomingFeasts />
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
