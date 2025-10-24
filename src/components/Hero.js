import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles/styles';
import { features } from '../data/appData';
import { ContainerScroll } from './ui/container-scroll-animation';
import { SpiralAnimation } from './ui/spiral-animation';

const Hero = ({ scrollToSection }) => {
  const spiralContainerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    overflow: 'hidden',
    opacity: 0.4,
  };

  return (
    <div style={styles.heroFeaturesContainer}>
      <section id="home" style={styles.hero}>
        <div style={spiralContainerStyle}>
          <SpiralAnimation />
        </div>
        <motion.div
          style={styles.heroContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [30, 0, 0, -30]
          }}
          transition={{
            duration: 15,
            times: [0, 0.15, 0.85, 1],
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.h1
            style={styles.heroTitle}
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [20, 0, 0, -20]
            }}
            transition={{
              duration: 15,
              times: [0, 0.18, 0.82, 1],
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Transform Ideas into Digital Solutions
          </motion.h1>
          <motion.p
            style={styles.heroSubtitle}
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [20, 0, 0, -20]
            }}
            transition={{
              duration: 15,
              times: [0, 0.21, 0.79, 1],
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            SolidApps is a leading software development company specializing in custom applications and websites. We bring your vision to life with cutting-edge technology and exceptional design.
          </motion.p>
          <motion.div
            style={styles.heroButtons}
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [20, 0, 0, -20]
            }}
            transition={{
              duration: 15,
              times: [0, 0.24, 0.76, 1],
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
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
          </motion.div>
        </motion.div>
      </section>

      <section id="features" style={styles.featuresSection}>
        <ContainerScroll
          titleComponent={
            <>
              <h2 style={styles.sectionTitle} className="section-title">
                Built for Modern Businesses
              </h2>
              <p style={styles.sectionSubtitle}>
                SolidApps combines innovative technology with proven development methodologies to deliver exceptional software solutions that drive business growth and user engagement.
              </p>
            </>
          }
        >
          <div style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} style={styles.featureCard}>
                <div style={styles.featureIcon}>{feature.icon}</div>
                <h3 style={styles.featureTitle}>{feature.title}</h3>
                <p style={styles.featureDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        </ContainerScroll>
      </section>
    </div>
  );
};

export default Hero;