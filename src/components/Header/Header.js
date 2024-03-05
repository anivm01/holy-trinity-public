import React from "react";
import "./Header.scss";
import logoEn from "../../assets/church-logo-en.png";
import logoBg from "../../assets/church-logo-bg.png";
import languageIcon from "../../assets/language-icon.svg";
import { Link } from "react-router-dom";
import MainNav from "../MainNav/MainNav";
import MobileNav from "../MobileNav/MobileNav";
import { useLanguage, useLanguageUpdate } from "../../utils/LanguageContext";
import MainNavBg from "../MainNav/MainNavBg";
import MobileNavBg from "../MobileNav/MobileNavBg";

function Header() {
  const language = useLanguage();
  const changeLanguage = useLanguageUpdate();
  return (
    <header className="header">
      <div className="header__top">
        <Link to="/" className="header__home">
          <img className="header__logo" src={language === "bg" ? logoBg : logoEn} alt="logo" />
        </Link>
        {language === "bg" ? <MainNavBg /> : <MainNav />}
        <div className="header__right">
          {language === "bg" ? <MobileNavBg /> : <MobileNav />}
          <button
            type="button"
            onClick={changeLanguage}
            className="header__language"
          >
            <img
              className="header__icon"
              src={languageIcon}
              alt="change language icon"
            />
          </button>
        </div>
      </div>
      {/* <div className="header__bottom">
        {language === "bg" ? (
          <h1 className="header__title">
            Света Троица Македоно-Българска Източно-Православна Църква
          </h1>
        ) : (
          <h1 className="header__title">
            Holy Trinity Macedono-Bulgarian Eastern Orthodox Church
          </h1>
        )}
      </div> */}
    </header>
  );
}

export default Header;
