import axios from "axios";
import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import HeroBg from "../../components/Hero/HeroBg";
import { API_URL } from "../../utils/api";
import { useLanguage } from "../../utils/LanguageContext";
import useFetch from "../../utils/useFetch";
import communityHeroImage from "../../assets/iconostas.jpg";
import "./CommunityNewsPage.scss";
import { sortNewestToOldest } from "../../utils/sort";
import CommunityNewsList from "../../components/CommunityNewsList/CommunityNewsList";
import NoData from "../../components/NoData/NoData";
import { ThreeDots } from "react-loader-spinner";

function CommunityNewsPage() {
  const language = useLanguage();
  const { data, loading, error } = useFetch(`${API_URL}/published/${language}/articles`);

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
          <HeroBg image={communityHeroImage} title={"Новини"} />
        ) : (
          <Hero image={communityHeroImage} title={"Community News"} />
        )}
        <CommunityNewsList data={data} />
      </main>
    );
  }

  return <NoData />;
}

export default CommunityNewsPage;
