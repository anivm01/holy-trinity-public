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
  return (
    <main className="events-page">
      {language === "bg" ? (
        <HeroBg
          image={eventsHero}
          title={"Присъединете се към нас за едно от нашите забавни събития!"}
        />
      ) : (
        <Hero
          image={eventsHero}
          title={"Join us for one of our wonderful community events!"}
        />
      )}
      <section className="events-page__upcoming">
        {language === "bg" ? (
          <h3 className="events-page__heading">Предстоящи Събития</h3>
        ) : (
          <h3 className="events-page__heading">Upcoming Events</h3>
        )}
        <Events
          url={`${API_URL}/published/${language}/events/`}
          timeline={"upcoming"}
        />
      </section>
      <section className="events-page__recent">
        {language === "bg" ? (
          <h3 className="events-page__heading">Минали Събития</h3>
        ) : (
          <h3 className="events-page__heading">Recent Events</h3>
        )}
        <Events
          url={`${API_URL}/published/${language}/events/`}
          timeline={"past"}
        />
      </section>
    </main>
  );
}

export default EventsPage;
