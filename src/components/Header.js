import React from 'react';
import { styles } from '../styles/styles';

const Header = ({ activeSection, scrollToSection }) => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <img
          src="favicon.ico"
          alt="LOTTO Logo"
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "6px",
            objectFit: "contain",
          }}
        />
        <span>SolidApps</span>
      </div>
      <nav style={styles.nav}>
        <button
          style={{
            ...styles.navItem,
            ...(activeSection === "home" ? styles.navItemActive : {}),
            background: "none",
            border: "none",
          }}
          className="nav-item"
          onClick={() => scrollToSection("home")}
        >
          Services
        </button>
        <button
          style={{
            ...styles.navItem,
            ...(activeSection === "features" ? styles.navItemActive : {}),
            background: "none",
            border: "none",
          }}
          className="nav-item"
          onClick={() => scrollToSection("features")}
        >
          Features
        </button>
        <button
          style={{
            ...styles.navItem,
            ...(activeSection === "technology" ? styles.navItemActive : {}),
            background: "none",
            border: "none",
          }}
          className="nav-item"
          onClick={() => scrollToSection("technology")}
        >
          Technology
        </button>
        <button
          style={{
            ...styles.navItem,
            ...(activeSection === "projects" ? styles.navItemActive : {}),
            background: "none",
            border: "none",
          }}
          className="nav-item"
          onClick={() => scrollToSection("projects")}
        >
          Portfolio
        </button>
      </nav>
    </header>
  );
};

export default Header;