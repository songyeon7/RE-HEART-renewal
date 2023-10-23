import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header-container">
      <div className="logo">
        <img src={logo} alt="로고" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/map">지도</Link>
          </li>
          <li>
            <Link to="/description">설명</Link>
          </li>
          <li>
            <Link to="/about">소개</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
