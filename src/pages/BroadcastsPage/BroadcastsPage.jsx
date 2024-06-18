import React from "react";
import { BroadcastsList } from "../../components/Broadcasts";
import { PageTitle } from "../../components/UI";
import { broadcastsTitle } from "../../data/pageTitles";
import { useLanguage } from "../../utils/LanguageContext";

const BroadcastsPage = () => {
  const language = useLanguage();
  return (
    <div>
      <PageTitle title={broadcastsTitle[language]} />
      <BroadcastsList />
    </div>
  );
};

export default BroadcastsPage;
