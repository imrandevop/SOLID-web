import React from 'react';
import { styles } from '../styles/styles';
import { technologies } from '../data/appData';

const Technology = () => {
  return (
    <section id="technology" style={styles.section} className="section">
      <div style={styles.sectionContent}>
        <h2 style={styles.sectionTitle} className="section-title">
          Built on strong foundations
        </h2>
        <p style={styles.sectionSubtitle}>
          Our technology stack is built with modern frameworks and tools that
          keep your products robust, safe, and blazing fast.
        </p>
        <div style={styles.techGrid}>
          {technologies.map((tech, index) => (
            <div key={index} style={styles.techCard} className="tech-card">
              <div
                style={{
                  ...styles.techCardBackground,
                  backgroundImage: `url(${tech.backgroundImage})`,
                }}
                className="tech-card-bg"
              ></div>
              <div style={styles.techContent}>
                <img
                  src={tech.icon}
                  alt={`${tech.name} icon`}
                  style={styles.techIcon}
                />
                <h3 style={styles.techName}>{tech.name}</h3>
                <p style={styles.techDescription}>{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;