import React from "react";
import Hero from "../../components/Hero/Hero";
import HeroBg from "../../components/Hero/HeroBg";
import { API_URL } from "../../utils/api";
import { useLanguage } from "../../utils/LanguageContext";
import communityHeroImage from "../../assets/church-doors.jpg";
import "./CommunityNewsPage.scss";
import CommunityNewsList from "../../components/CommunityNewsList/CommunityNewsList";

function CommunityNewsPage() {
  const language = useLanguage();
  const currentDate = Math.floor(Date.now()/1000)

    return (
      <main>
        {language === "bg" ? (
          <HeroBg image={communityHeroImage} title={"Новини"} />
        ) : (
          <Hero image={communityHeroImage} title={"Community News"} />
        )}
        <CommunityNewsList url={`${API_URL}/published/${language}/articles/past/${currentDate}`} />
      </main>
    );

}

export default CommunityNewsPage;
