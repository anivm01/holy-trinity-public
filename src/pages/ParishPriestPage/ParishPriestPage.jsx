import React from "react";
import "./ParishPriestPage.scss";
import { useLanguage } from "../../utils/LanguageContext";
import ParishPriestBio from "../../components/ParishPriestBio/ParishPriestBio";

import { parishPriestTitle } from "../../data/parishPriestStaticContent";
import { PageTitle } from "../../components/UI";

function ParishPriestPage() {
  const language = useLanguage();
  return (
    <main>
      <PageTitle title={parishPriestTitle[language]} />
      <ParishPriestBio />
    </main>
  );
}

export default ParishPriestPage;
