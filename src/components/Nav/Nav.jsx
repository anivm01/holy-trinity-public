import { useState } from "react";
import { NavLink } from "react-router-dom";
import navIcon from "../../assets/nav-icon.svg";
import { menuItems } from "../../data/menu";
import "./Nav.scss";
import { useLanguage } from "../../utils/LanguageContext";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const language = useLanguage();

  return (
    <nav className="nav">
      <div className="nav__container">
        <button className="nav__toggle" onClick={() => setIsOpen(!isOpen)}>
          <img src={navIcon} alt="Menu" className="nav__icon" />
        </button>
        <ul className={`nav__menu ${isOpen ? "nav__menu--open" : ""}`}>
          {menuItems.map((item, index) => (
            <li className="nav__item" key={index}>
              <NavLink
                to={item.link}
                className="nav__link"
                onClick={() => setIsOpen(!isOpen)}
              >
                {item[language]}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
