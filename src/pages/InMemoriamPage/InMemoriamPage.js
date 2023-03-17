import React from "react";
import "./InMemoriamPage.scss";
import Hero from "../../components/Hero/Hero";
import HeroBg from "../../components/Hero/HeroBg";
import memoriamHero from "../../assets/candles.jpg";
import { useLanguage } from "../../utils/LanguageContext";
import { API_URL } from "../../utils/api";
import Obituaries from "../../components/Obituaries/Obituaries";
import NoData from "../../components/NoData/NoData";
import MemorialQuote from "../../components/MemorialQuote/MemorialQuote";

function InMemoriamPage() {
  const language = useLanguage();
  const currentDate = Math.floor(Date.now()/1000)
    return (
      <main className="in-memoriam-page">
        {language === "bg" ? (
          <HeroBg
            image={memoriamHero}
            title={"Упокой Господи дуиште на починалите"}
          />
        ) : (
          <Hero image={memoriamHero} title={"In Memoriam"} />
        )}
        <Obituaries url={`${API_URL}/published/${language}/obituaries/past/${currentDate}`} />
        <MemorialQuote />
      </main>
    );
  return <NoData />;
}

export default InMemoriamPage;
