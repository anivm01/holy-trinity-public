import React from "react";
import "./ParishPriestPage.scss";
import { useLanguage } from "../../utils/LanguageContext";
import ParishPriestBio from "../../components/ParishPriestBio/ParishPriestBio";
import { PageTitle } from "../../components/UI/PageTitle/PageTitle";
import { parishPriestTitle } from "../../data/parishPriestData";


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
