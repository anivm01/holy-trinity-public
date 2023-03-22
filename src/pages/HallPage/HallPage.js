import React from 'react'
import { useLanguage } from '../../utils/LanguageContext';
import "./HallPage.scss"
import hall from "../../assets/hall.jpg"
import HeroBg from '../../components/Hero/HeroBg';
import Hero from '../../components/Hero/Hero';
import Hall from '../../components/Hall/Hall';
import HallBg from '../../components/Hall/HallBg';

function HallPage() {
    const language = useLanguage();
    return (
      <main className="donations-page">
        {language === "bg" ? (
          <>
          <HeroBg image={hall} title={"Зала под наем"} />
          <HallBg />
          </>
        ) : (
          <>
          <Hero image={hall} title={"Hall For Rent"} />
          <Hall />
          </>
        )}
      </main>
    );
}

export default HallPage