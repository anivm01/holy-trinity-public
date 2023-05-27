import React from "react";
import "./EventsPage.scss";
import Hero from "../../components/Hero/Hero";
import HeroBg from "../../components/Hero/HeroBg";
import eventsHero from "../../assets/event.jpg";
import { useLanguage } from "../../utils/LanguageContext";
import Events from "../../components/Events/Events";
import { API_URL } from "../../utils/api";

function EventsPage() {
  const language = useLanguage();
  const currentDate = Math.floor(Date.now() / 1000);
  return (
    <main className="events-page">
      {language === "bg" ? (
        <HeroBg image={eventsHero} title={"Обединете се"} />
      ) : (
        <Hero image={eventsHero} title={"Join together"} />
      )}
      <section className="events-page__upcoming">
        {language === "bg" ? (
          <h3 className="events-page__heading">Предстоящи</h3>
        ) : (
          <h3 className="events-page__heading">Upcoming</h3>
        )}
        <Events
          url={`${API_URL}/published/${language}/events/upcoming/${currentDate}`}
          timeline={"upcoming"}
        />
      </section>
      <section className="events-page__recent">
        {language === "bg" ? (
          <h3 className="events-page__heading">Минали</h3>
        ) : (
          <h3 className="events-page__heading">Recent</h3>
        )}
        <Events
          url={`${API_URL}/published/${language}/events/past/${currentDate}`}
          timeline={"past"}
        />
      </section>
    </main>
  );
}

export default EventsPage;
