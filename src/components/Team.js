import React from 'react';
import { styles } from '../styles/styles';
import { teamMembers } from '../data/appData';

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
        <div style={styles.teamContainer}>
          <div style={styles.teamScrollContainer}>
            <button
              style={styles.carouselButton}
              className="carousel-button"
              onClick={() => {
                const container = document.querySelector(".team-grid");
                container.scrollBy({ left: -300, behavior: "smooth" });
              }}
            >
              ‹
            </button>
            <div style={styles.teamGrid} className="team-grid">
              {teamMembers.map((member, index) => (
                <div key={index} style={styles.teamCard} className="team-card">
                  <img
                    src={member.image}
                    alt={member.name}
                    style={styles.teamImage}
                  />
                  <h3 style={styles.teamName}>{member.name}</h3>
                  <div style={styles.teamRole}>{member.role}</div>
                  <p style={styles.teamBio}>{member.bio}</p>
                  <div style={styles.teamSkills}>
                    {member.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} style={styles.skillTag}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button
              style={styles.carouselButton}
              className="carousel-button"
              onClick={() => {
                const container = document.querySelector(".team-grid");
                container.scrollBy({ left: 300, behavior: "smooth" });
              }}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;