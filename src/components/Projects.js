import React from 'react';
import { styles } from '../styles/styles';
import { projectCategories, dummyCircles, products } from '../data/appData';

const Projects = ({ 
  selectedCategory, 
  setSelectedCategory, 
  handleWheel, 
  handleMouseDown, 
  handleMouseLeave, 
  handleMouseUp, 
  handleMouseMove 
}) => {
  const selectedProject = products.find(
    (product) => product.category === selectedCategory
  );

  return (
    <>
      {/* Projects Heading & Subtitle */}
      <section id="projects" style={styles.section} className="section">
        <div style={styles.sectionContent}>
          <h2 style={styles.sectionTitle} className="section-title">
            Empowering Businesses Worldwide
          </h2>
          <p style={styles.sectionSubtitle}>
            From innovative startups to established enterprises, SolidApps delivers
            custom software solutions that drive growth and success.
          </p>
        </div>
      </section>

      {/* Category Logos */}
      <section
        style={{
          padding: "0",
          margin: "-1rem auto -1rem auto",
          background: "none",
          boxShadow: "none",
          border: "none",
          maxWidth: "95vw",
          position: "relative",
          zIndex: 1000,
          overflow: "visible",
        }}
      >
        <div style={{padding: "0 1rem", position: "relative", zIndex: 20}}>
          <div 
            style={{...styles.categoryFilter, cursor: 'grab'}} 
            className="category-filter" 
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div style={styles.categoryContainer}>
              {[...projectCategories, ...dummyCircles, ...projectCategories, ...dummyCircles, ...projectCategories, ...dummyCircles].map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minWidth: "80px",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      ...(item.color ? {
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, ${item.color} 0%, ${item.color}dd 100%)`,
                        border: "none",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        position: "relative",
                      } : {
                        ...styles.categoryCircle,
                        ...(selectedCategory === item.id
                          ? styles.categoryCircleActive
                          : {}),
                      }),
                    }}
                    className={`category-circle ${selectedCategory === item.id ? 'active' : ''}`}
                    onClick={() => item.id && !item.color && setSelectedCategory(item.id)}
                  >
                    {!item.color && (
                      <div style={styles.categoryIcon}>
                        {typeof item.icon === "string" &&
                        item.icon.endsWith(".png") ? (
                          <img
                            src={item.icon}
                            alt={item.name}
                            draggable="false"
                            style={{
                              width: "40px",
                              height: "40px",
                              objectFit: "contain",
                              borderRadius: "50%",
                              padding: "4px",
                              boxSizing: "border-box",
                              display: "block",
                              margin: "0 auto",
                              pointerEvents: "none",
                              userSelect: "none",
                              }}
                          />
                        ) : (
                          <span style={{ fontSize: "2.4rem", lineHeight: 1 }}>
                            {item.icon}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Screenshots Carousel */}
      <section
        style={{
          ...styles.section,
          margin: "1.5rem auto",
        }}
        className="section"
      >
        <div style={{padding: "2rem 1rem 5rem 1rem"}}>
          <div style={styles.projectShowcase}>
            {selectedProject && (
              <>
                <h3 style={styles.projectTitle}>{selectedProject.title}</h3>
                <div style={styles.imageCarouselContainer}>
                  <button
                    style={styles.carouselButton}
                    className="carousel-button"
                    onClick={() => {
                      const container =
                        document.querySelector(".project-carousel");
                      container.scrollBy({ left: -320, behavior: "smooth" });
                    }}
                  >
                    ‹
                  </button>
                  <div style={styles.imageCarousel} className="project-carousel">
                    {selectedProject.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${selectedProject.title} - Screenshot ${index + 1}`}
                        style={styles.projectImage}
                        className="project-image"
                      />
                    ))}
                  </div>
                  <button
                    style={styles.carouselButton}
                    className="carousel-button"
                    onClick={() => {
                      const container =
                        document.querySelector(".project-carousel");
                      container.scrollBy({ left: 320, behavior: "smooth" });
                    }}
                  >
                    ›
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;