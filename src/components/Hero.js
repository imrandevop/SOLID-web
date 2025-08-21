import React from 'react';
import { styles } from '../styles/styles';
import { features } from '../data/appData';

const Hero = ({ scrollToSection }) => {
  return (
    <div style={styles.heroFeaturesContainer}>
      <section id="home" style={styles.hero}>
        <div style={styles.heroBackground}></div>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle} className="hero-title">
            Transform Ideas into Digital Solutions
          </h1>
          <p style={styles.heroSubtitle} className="hero-subtitle">
            SolidApps is a leading software development company specializing in custom applications and websites. We bring your vision to life with cutting-edge technology and exceptional design.
          </p>
          <div style={styles.heroButtons} className="hero-buttons">
            <a
              href="#projects"
              style={styles.primaryButton}
              className="primary-button"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
            >
              View our work
            </a>
            <a
              href="#features"
              style={styles.secondaryButton}
              className="secondary-button"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("features");
              }}
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="features" style={styles.featuresSection}>
        <h2 style={styles.sectionTitle} className="section-title">
          Built for Modern Businesses
        </h2>
        <p style={styles.sectionSubtitle}>
          SolidApps combines innovative technology with proven development methodologies to deliver exceptional software solutions that drive business growth and user engagement.
        </p>
        <div style={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} style={styles.featureCard}>
              <div style={styles.featureIcon}>{feature.icon}</div>
              <h3 style={styles.featureTitle}>{feature.title}</h3>
              <p style={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;