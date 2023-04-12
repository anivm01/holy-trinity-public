import React from "react";
import Hero from "../../components/Hero/Hero";
import HeroBg from "../../components/Hero/HeroBg";
import { useLanguage } from "../../utils/LanguageContext";
import donations from "../../assets/church-inside.jpg";
import DonationsBg from "../../components/Donations/DonationsBg";
import Donations from "../../components/Donations/Donations";

function DonationsPage() {
  const language = useLanguage();
  return (
    <main className="donations-page">
      {language === "bg" ? (
        <>
        <HeroBg image={donations} title={"Дарения"} />
        <DonationsBg />
        </>
      ) : (
        <>
        <Hero image={donations} title={"Donations"} />
        <Donations />
        </>
      )}
    </main>
  );
}

export default DonationsPage;
