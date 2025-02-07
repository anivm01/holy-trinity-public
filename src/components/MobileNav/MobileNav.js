import React, { useEffect, useState } from "react";
import "./MobileNav.scss";
import navIcon from "../../assets/nav-icon.svg";
import { NavLink } from "react-router-dom";

function MobileNav() {
  const [navVisible, setNavVisible] = useState(false);
  const [noAnimation, setNoAnimation] = useState(true);

  useEffect(() => {
    const handleWindowResize = () => {
      setNoAnimation(true);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="mobile-nav">
      <button
        type="button"
        onClick={() => {
          setNavVisible((current) => !current);
          setNoAnimation(false);
        }}
        className="mobile-nav__button"
      >
        <img src={navIcon} className="mobile-nav__icon" alt="menu icon" />
      </button>
      <nav
        className={`mobile-nav__box ${!navVisible ? "mobile-nav__box--out" : ""
          } 
        ${noAnimation ? "mobile-nav__box--none" : ""} 
        `}
      >
        {navVisible && (
          <ul className="mobile-nav__list">
            <li className="mobile-nav__item">
              <NavLink to="/" className="mobile-nav__link">
                Home
              </NavLink>
            </li>
            <li className="mobile-nav__item">
              <NavLink to="/broadcasts" className="mobile-nav__link">
                Broadcasts
              </NavLink>
            </li>
            <li className="mobile-nav__item">
              <NavLink to="/feasts" className="mobile-nav__link">
                Feasts
              </NavLink>
            </li>
            <li className="mobile-nav__item">
              <NavLink to="/community-news" className="mobile-nav__link">
                Community News
              </NavLink>
            </li>
            <li className="mobile-nav__item">
              <NavLink to="/in-memoriam" className="mobile-nav__link">
                In Memoriam
              </NavLink>
            </li>
            <li className="mobile-nav__item">
              <NavLink to="/about" className="mobile-nav__link">
                About Us
              </NavLink>
            </li>
            <li className="mobile-nav__item">
              <NavLink to="/donations" className="mobile-nav__link">
                Donations
              </NavLink>
            </li>
            <li className="mobile-nav__item">
              <NavLink to="/hall" className="mobile-nav__link">
                Hall for Rent
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default MobileNav;
