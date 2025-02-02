import React from "react";
import { PageTitle } from "../../components/UI";
import { feastsTitle } from "../../data/pageTitles";
import { useLanguage } from "../../utils/LanguageContext";
import { FeastsList } from "../../components/Feasts";
// import Hero from "../../components/Hero/Hero";
// import HeroBg from "../../components/Hero/HeroBg";
import eventsHero from "../../assets/feasts-hero.jpg";
import Calendar from "../../components/Calendar/Calendar";
import "./FeastsPage.scss";

const FeastsPage = () => {
  const language = useLanguage();
  const blurb = {
    en: "Our church feasts are a time of prayer, reflection, and celebration. We invite you to join us for these meaningful services and gatherings as we come together in faith and fellowship.",
    bg: "Църковните празници са време за молитва, размисъл и празник. Каним ви да се присъедините към нас за тези богослужения и тържества, за да се съберем заедно във вяра и единство.",
  };
  const calendarTitle = {
    en: "Orthodox Calendar",
    bg: "Православен Календар",
  };
  return (
    <div>
      <PageTitle title={feastsTitle[language]} />
      {/* {language === "bg" ? (
        <HeroBg image={eventsHero} title={"Обединете се"} />
      ) : (
        <Hero image={eventsHero} title={"Join together"} />
      )} */}
      <div className="feasts-page__main">
        <div className="feasts-page__calendar">
          <h3>{calendarTitle[language]}</h3>
          <Calendar />
        </div>
        <div>
          <div className="feasts-page__invite">
            <img
              className="feasts-page__image"
              src={eventsHero}
              alt="priest holding a service"
            />
            <h3 className="feasts-page__blurb">{blurb[language]}</h3>
          </div>
          <FeastsList />
        </div>
      </div>
    </div>
  );
};

export default FeastsPage;
