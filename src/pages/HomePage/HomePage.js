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
import useFetch from "../../utils/useFetchImage";
import { useState } from "react";
import { useEffect } from "react";

function HomePage() {
  const language = useLanguage();
  const currentDate = Math.floor(Date.now() / 1000);
  const [hero, setHero] = useState(homeHero);
  const { data } = useFetch(
    `${API_URL}/published/${language}/worship-offices/latest/${currentDate}`
  );
  useEffect(() => {
    if (data) {
      setHero(data.src);
    }
  }, [data]);

  return (
    <main className="home">
      {language === "bg" ? (
        <HeroBg image={hero} title={"Добре Дошли!"} />
      ) : (
        <Hero image={hero} title={"Welcome"} />
      )}
      <section className="home__section">
        <WeeklyAnnouncement
          url={`${API_URL}/published/${language}/announcements/latest/${currentDate}`}
        />
      </section>
      <section className="home__section">
        {language === "bg" ? (
          <h2 className="home__heading">Присъединете се към службата тази седмица през Интернет</h2>
        ) : (
          <h2 className="home__heading">Join this week's worship office online</h2>
        )}
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
