import React from "react";
import "./InMemoriamPage.scss";
import { useLanguage } from "../../utils/LanguageContext";
import { API_URL } from "../../utils/api";
import Obituaries from "../../components/Obituaries/Obituaries";
import MemorialQuote from "../../components/MemorialQuote/MemorialQuote";
import { PageTitle } from "../../components/UI";
import { obitsTitle } from "../../data/pageTitles";

function InMemoriamPage() {
  const language = useLanguage();
  const currentDate = Math.floor(Date.now() / 1000)
  return (
    <main className="in-memoriam-page">
      <PageTitle title={obitsTitle[language]} />
      <Obituaries url={`${API_URL}/published/${language}/obituaries/past/${currentDate}`} />
      <MemorialQuote />
    </main>
  );
}

export default InMemoriamPage;
