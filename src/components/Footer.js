import React from 'react';
import { styles } from '../styles/styles';

const Footer = () => {
  return (
    <>
      <div style={styles.cta}>
        {/* Overlay for readability */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.55)",
            zIndex: 1,
          }}
        ></div>
        <div style={{ ...styles.ctaContent, position: "relative", zIndex: 2 }}>
          <h2 style={styles.ctaTitle}>Ready to Build Your Digital Future?</h2>
          <p style={styles.ctaDescription}>
            Partner with SolidApps for professional software development. From custom applications to enterprise websites, we deliver quality solutions that drive business success.
          </p>
          <a href="#contact" style={styles.ctaButton} className="cta-button">
            Start Your Project
          </a>
        </div>
      </div>

      <footer style={styles.footer}>
        <p>&copy; 2025 SolidApps. All rights reserved. | Building digital solutions for tomorrow's businesses.</p>
      </footer>
    </>
  );
};

export default Footer;