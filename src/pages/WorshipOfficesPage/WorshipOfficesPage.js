import React from "react";
import WorshipOfficesList from "../../components/WorshipOfficesList/WorshipOfficesList";
import { API_URL } from "../../utils/api";
import { useLanguage } from "../../utils/LanguageContext";
import "./WorshipOfficesPage.scss";

function WorshipOfficesPage() {
  const language = useLanguage();
  return (
    <main className="worship-offices-page">
      {language === "bg" ? (
        <h2 className="worship-offices-page__title">Богослужения</h2>
      ) : (
        <h2 className="worship-offices-page__title">Worship Offices</h2>
      )}
      <WorshipOfficesList
        url={`${API_URL}/published/${language}/worship-offices`}
      />
    </main>
  );
}

export default WorshipOfficesPage;
