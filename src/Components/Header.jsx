import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import "../styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
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
            <a href="/">Главная</a>
          </li>
          <li>
            <a href="/about">О нас</a>
          </li>
          <li>
            <a href="/contact">Контакты</a>
          </li>
          <li>
            <Link to="/teachers">Учителя</Link>
          </li>
        </ul>
      </nav>
      <div
        className={`burger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  );
}

export default Header;
