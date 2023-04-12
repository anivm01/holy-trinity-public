import React from "react";
import "./Footer.scss";

import { useLanguage } from "../../utils/LanguageContext";
import FooterContent from "../FooterContent/FooterContent";
import FooterContentBg from "../FooterContent/FooterContentBg";

function Footer() {
  const language = useLanguage();
  return (
    <footer className="footer">
      {language === "bg" ? <FooterContentBg /> : <FooterContent />}
    </footer>
  );
}

export default Footer;
