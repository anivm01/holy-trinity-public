import React from "react";
import "./HomePage.scss";
import Hero from "../../components/Hero/Hero";
import homeHero from "../../assets/iconostas.jpg";
import { useLanguage } from "../../utils/LanguageContext";
import HeroBg from "../../components/Hero/HeroBg";
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
      {language === "bg" ? (
        <HeroBg image={homeHero} title={"Добре Дошли!"} />
      ) : (
        <Hero image={homeHero} title={"Welcome"} />
      )}
      <section className="home__section">
        <WeeklyAnnouncement
          url={`${API_URL}/published/${language}/announcements/latest/${currentDate}`}
        />
      </section>
      <section className="home__section">
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
