import React from "react";
import { PageTitle } from "../../components/UI";
import { feastsTitle } from "../../data/pageTitles";
import { useLanguage } from "../../utils/LanguageContext";
import { FeastsList } from "../../components/Feasts";
import Hero from "../../components/Hero/Hero";
import HeroBg from "../../components/Hero/HeroBg";
import eventsHero from "../../assets/feasts-hero.jpg";

const FeastsPage = () => {
  const language = useLanguage();
  return (
    <div>
      <PageTitle title={feastsTitle[language]} />
      {language === "bg" ? (
        <HeroBg image={eventsHero} title={"Обединете се"} />
      ) : (
        <Hero image={eventsHero} title={"Join together"} />
      )}
      <FeastsList />
    </div>
  );
};

export default FeastsPage;
