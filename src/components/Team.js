import React from 'react';
import { styles } from '../styles/styles';
import { teamMembers } from '../data/appData';
import { AnimatedTeam } from './ui/animated-team';

const Team = () => {
  return (
    <section id="team" style={styles.section} className="section">
      <div style={styles.sectionContent}>
        <h2 style={styles.sectionTitle} className="section-title">
          Meet Our Expert Team
        </h2>
        <p style={styles.sectionSubtitle}>
          Our dedicated team of professionals combines technical expertise with creative vision to deliver exceptional software solutions for your business.
        </p>
        <AnimatedTeam teamMembers={teamMembers} autoplay={true} />
      </div>
    </section>
  );
};

export default Team;