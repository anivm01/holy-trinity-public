import React from "react";
import "./Header.scss";
import logoEn from "../../assets/church-logo-en.png";
import logoBg from "../../assets/church-logo-bg.png";
import languageIcon from "../../assets/language-icon.svg";
import { Link } from "react-router-dom";
import { useLanguage, useLanguageUpdate } from "../../utils/LanguageContext";
import Nav from "../Nav/Nav";

function Header() {
  const language = useLanguage();
  const changeLanguage = useLanguageUpdate();
  return (
    <header className="header">
      <div className="header__top">
        <Link to="/" className="header__home">
          <img
            className="header__logo"
            src={language === "bg" ? logoBg : logoEn}
            alt="logo"
          />
        </Link>
        <div className="header__right">
          <Nav />
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
    </header>
  );
}

export default Header;
