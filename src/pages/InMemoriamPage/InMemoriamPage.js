import React from "react";
import "./InMemoriamPage.scss";
import { useLanguage } from "../../utils/LanguageContext";
import Obituaries from "../../components/Obituaries/Obituaries";
import MemorialQuote from "../../components/MemorialQuote/MemorialQuote";
import { PageTitle } from "../../components/UI";
import { obitsTitle } from "../../data/pageTitles";

function InMemoriamPage() {
  const language = useLanguage();
  return (
    <main className="in-memoriam-page">
      <PageTitle title={obitsTitle[language]} />
      <Obituaries />
      <MemorialQuote />
    </main>
  );
}

export default InMemoriamPage;
