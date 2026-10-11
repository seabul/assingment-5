import { useState } from 'react';
import logo from './assets/logo-text.png';
import hamburgerIcon from './assets/hamburger.png';
import './Nav.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Mobile Hamburger Button */}
        <button
          className="hamburger-btn"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <img src={hamburgerIcon} alt="Menu" className="hamburger-icon" />
        </button>

        {/* Brand / Logo */}
        <div className="nav-brand">
          <a href="#" className="nav-logo-link">
            <img src={logo} alt="Dev Stack" className="nav-logo" />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="nav-links">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#technologies">Technologies</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Action Buttons */}
        <div className="nav-actions">
          <button className="btn-sign-in">Sign In</button>
          <button className="btn-sign-up">Sign Up</button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <ul className="mobile-menu">
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#technologies" onClick={() => setIsMenuOpen(false)}>Technologies</a></li>
          <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;