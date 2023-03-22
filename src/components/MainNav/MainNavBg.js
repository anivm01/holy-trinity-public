import React from "react";
import { NavLink } from "react-router-dom";
import './MainNav.scss'

function MainNavBg() {
  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <NavLink to="/" className="main-nav__link">Начало</NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink to="/worship-offices" className="main-nav__link">Богослужения</NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink to='/events' className="main-nav__link">Събития</NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink to='/community-news' className="main-nav__link">Новини</NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink to='/in-memoriam' className="main-nav__link">За Помен</NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink to='/about' className="main-nav__link">За Нас</NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink to='/donations' className="main-nav__link">Дарения</NavLink>
        </li>
        <li className="main-nav__item">
          <NavLink to='/hall' className="main-nav__link">Зала под Наем</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavBg;
