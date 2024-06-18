import React from "react";
import { PageTitle } from "../../components/UI";
import { feastsTitle } from "../../data/pageTitles";
import { useLanguage } from "../../utils/LanguageContext";
import { FeastsList } from "../../components/Feasts";

const FeastsPage = () => {
  const language = useLanguage();
  return (
    <div>
      <PageTitle title={feastsTitle[language]} />
      <FeastsList />
    </div>
  );
};

export default FeastsPage;
