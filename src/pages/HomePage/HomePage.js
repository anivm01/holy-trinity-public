import React from "react";
import "./HomePage.scss";
import { useLanguage } from "../../utils/LanguageContext";
import WeeklyAnnouncement from "../../components/WeeklyAnnouncement/WeeklyAnnouncement";
import { API_URL } from "../../utils/api";
import NextEvent from "../../components/NextEvent/NextEvent";
import LatestNews from "../../components/LatestNews/LatestNews";
import LatestWorshipOffice from "../../components/LatestWorshipOffice/LatestWorshipOffice";

function HomePage() {
  const language = useLanguage();
  const currentDate = Math.floor(Date.now() / 1000);

  return (
    <main className="home">
      <section className="home__hero">
        <div className="home__hero-background">
          <WeeklyAnnouncement
            url={`${API_URL}/published/${language}/announcements/latest/${currentDate}`}
          />
        </div>
      </section>
      <section className="home__section home__section--video">
        {language === "bg" ? (
          <h2 className="home__heading">Присъединете се към службата тази седмица през Интернет</h2>
        ) : (
          <h2 className="home__heading">Join this week's worship office online</h2>
        )}

      </section>
      <section className="home__section home__section--video">
        <LatestWorshipOffice
          url={`${API_URL}/published/${language}/worship-offices/latest/${currentDate}`}
        />
      </section>
      <section className="home__section">
        <NextEvent
          url={`${API_URL}/published/${language}/events/closest-upcoming/${currentDate}`}
        />
      </section>
      <section className="home__section">
        {language === "bg" ? (
          <h2 className="home__heading">Последни новини от нашата общност</h2>
        ) : (
          <h2 className="home__heading">Latest News From Our Community</h2>
        )}
        <LatestNews
          url={`${API_URL}/published/${language}/articles/latest/${currentDate}`}
        />
      </section>
    </main>
  );
}

export default HomePage;
