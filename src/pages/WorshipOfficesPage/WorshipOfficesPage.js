import React from "react";
import WorshipOfficesList from "../../components/WorshipOfficesList/WorshipOfficesList";
import { API_URL } from "../../utils/api";
import { useLanguage } from "../../utils/LanguageContext";
import "./WorshipOfficesPage.scss";

function WorshipOfficesPage() {
  const language = useLanguage();
  const currentDate = Math.floor(Date.now()/1000)
  return (
    <main className="worship-offices-page">
      {language === "bg" ? (
        <h2 className="worship-offices-page__title">Предавания на Живо</h2>
      ) : (
        <h2 className="worship-offices-page__title">Broadcasts</h2>
      )}
      <WorshipOfficesList
        url={`${API_URL}/published/${language}/worship-offices/past/${currentDate}`}
      />
    </main>
  );
}

export default WorshipOfficesPage;
