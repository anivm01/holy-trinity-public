import React from "react";
import { NavLink } from "react-router-dom";
import './MainNav.scss'

function MainNav() {
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <NavLink to="/" className="main-nav__link">Home</NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink to="/worship-offices" className="main-nav__link">Broadcasts</NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink to='/events' className="main-nav__link">Events</NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink to='/community-news' className="main-nav__link">Community News</NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink to='/in-memoriam' className="main-nav__link">In Memoriam</NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink to='/about' className="main-nav__link">About Us</NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink to='/donations' className="main-nav__link">Donations</NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink to='/hall' className="main-nav__link">Hall for Rent</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
