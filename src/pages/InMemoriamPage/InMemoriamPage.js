import React from "react";
import "./InMemoriamPage.scss";
import Hero from "../../components/Hero/Hero";
import HeroBg from "../../components/Hero/HeroBg";
import memoriamHero from "../../assets/candles.jpg";
import { useLanguage } from "../../utils/LanguageContext";
import { API_URL } from "../../utils/api";
import useFetch from "../../utils/useFetch";
import Obituaries from "../../components/Obituaries/Obituaries";
import NoData from "../../components/NoData/NoData";
import { ThreeDots } from "react-loader-spinner";

function InMemoriamPage() {
  const language = useLanguage();
  const { data, loading, error } = useFetch(`${API_URL}/obituary/${language}`);

  if (loading) {
    return (
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#6F0B20"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ justifyContent: "center" }}
        wrapperClassName=""
        visible={true}
      />
    );
  }

  if (error) {
    return <NoData />;
  }

  if (data) {
    return (
      <main>
        {language === "bg" ? (
          <HeroBg
            image={memoriamHero}
            title={"Упокой Господи дуиште на починалите"}
          />
        ) : (
          <Hero image={memoriamHero} title={"In Memoriam"} />
        )}
        <Obituaries data={data} />
      </main>
    );
  }
  return <NoData />;
}

export default InMemoriamPage;
