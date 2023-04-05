import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="site-title">
          <h1>TeachingRate</h1>
        </div>

        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to={'/'}>Главная</Link>
            </li>
            <li>
              <Link to="/teachers">Учителя</Link>
            </li>
            <li>
              <Link to={'/userProfile'}>Профиль</Link>
            </li>
          </ul>
        </nav>

        <div onClick={toggleMenu} className={isMenuOpen ? 'menu-btn open' : 'menu-btn'}>
          <div className="menu-btn__burger">

          </div>
        </div>
      </header>

    </>
  );
}

export default Header;
