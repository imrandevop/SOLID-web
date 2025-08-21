export const styles = {
  container: {
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    backgroundColor: "#000000",
    color: "#ffffff",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
  },
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1100,
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#ffffff",
    marginLeft: "50px",
  },
  logoIcon: {
    width: "24px",
    height: "24px",
    background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  nav: {
    display: "flex",
    gap: "2rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    color: "#a1a1aa",
    textDecoration: "none",
    fontWeight: "400",
    fontSize: "0.875rem",
    padding: "0.5rem 0",
    transition: "color 0.2s ease",
    cursor: "pointer",
    borderBottom: "2px solid transparent",
  },
  navItemActive: {
    color: "#ffffff",
    borderBottomColor: "#6366f1",
  },
  heroFeaturesContainer: {
    maxWidth: "95vw",
    margin: "1.5rem auto 1.5rem auto",
    padding: "0 0.5rem",
    borderRadius: "16px",
    border: "1px solid #27272a",
    boxShadow:
      "0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.2)",
    overflow: "hidden",
    background:
      "linear-gradient(145deg, #0a0a0a 0%, #1a1a1a 100%)",
    position: "relative",
  },
  hero: {
    padding: "12rem 2rem 5rem",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
    minHeight: "600px",
  },
  heroBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "150%",
    opacity: 0.15,
    zIndex: 1,
    background: `
    linear-gradient(180deg, 
      rgba(0,0,0,0) 0%, 
      rgba(0,0,0,0.1) 40%, 
      rgba(0,0,0,0.5) 75%, 
      rgba(0,0,0,0.9) 90%,
      rgba(0,0,0,1) 100%
    ),
    url("/hero-background.jpg")
  `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  heroContent: {
    maxWidth: "800px",
    margin: "0 auto",
    position: "relative",
    zIndex: 10,
  },
  heroTitle: {
    fontSize: "3.5rem",
    fontWeight: "600",
    lineHeight: "1.1",
    marginBottom: "1.5rem",
    background: "linear-gradient(to bottom, #ffffff 0%, #a1a1aa 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  heroSubtitle: {
    fontSize: "1.25rem",
    color: "#a1a1aa",
    lineHeight: "1.6",
    marginBottom: "3rem",
    fontWeight: "400",
  },
  heroButtons: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  primaryButton: {
    backgroundColor: "#ffffff",
    color: "#000000",
    padding: "0.875rem 1.75rem",
    fontSize: "0.875rem",
    fontWeight: "500",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    textDecoration: "none",
    display: "inline-block",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    color: "#a1a1aa",
    padding: "0.875rem 1.75rem",
    fontSize: "0.875rem",
    fontWeight: "500",
    border: "1px solid #27272a",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    textDecoration: "none",
    display: "inline-block",
  },
  featuresSection: {
    padding: "5rem 1rem",
    position: "relative",
    zIndex: 10,
  },
  section: {
    padding: "0 0.5rem",
    maxWidth: "95vw",
    margin: "1.5rem auto",
    background: "linear-gradient(145deg, #0a0a0a 0%, #1a1a1a 100%)",
    borderRadius: "16px",
    border: "1px solid #27272a",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.2)",
    position: "relative",
    overflow: "visible",
  },
  sectionContent: {
    padding: "5rem 1rem",
  },
  sectionTitle: {
    fontSize: "2.5rem",
    fontWeight: "600",
    marginBottom: "1rem",
    textAlign: "center",
    background: "linear-gradient(to bottom, #ffffff 0%, #a1a1aa 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  sectionSubtitle: {
    fontSize: "1.125rem",
    color: "#a1a1aa",
    textAlign: "center",
    marginBottom: "4rem",
    maxWidth: "600px",
    margin: "0 auto 4rem",
  },
  categoryFilter: {
    display: "flex",
    gap: "1rem",
    marginBottom: "1rem",
    overflowX: "auto",
    overflowY: "visible",
    width: "100%",
    position: "relative",
    scrollBehavior: "smooth",
  },
  categoryContainer: {
    display: "flex",
    gap: "1rem",
    width: "fit-content",
    padding: "10px 0",
  },
  categoryCircle: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "linear-gradient(145deg, #0a0a0a 0%, #1a1a1a 100%)",
    border: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
    position: "relative",
  },
  categoryCircleActive: {
    background: "linear-gradient(145deg, #ffffff 0%, #f4f4f5 100%)",
    transform: "scale(1.1)",
  },
  categoryIcon: {
    fontSize: "1.5rem",
    marginBottom: "0.25rem",
  },
  categoryLabel: {
    fontSize: "0.6rem",
    fontWeight: "500",
    textAlign: "center",
    lineHeight: "1.2",
  },
  techGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
    marginTop: "3rem",
  },
  techCard: {
    background: "linear-gradient(145deg, #0a0a0a 0%, #1a1a1a 100%)",
    border: "1px solid #27272a",
    borderRadius: "12px",
    padding: "2rem",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3), 0 1px 4px rgba(0, 0, 0, 0.2)",
    position: "relative",
    overflow: "hidden",
  },
  techCardBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    opacity: 0.1,
    zIndex: 1,
    borderRadius: "12px",
  },
  techContent: {
    position: "relative",
    zIndex: 2,
  },
  techIcon: {
    width: "48px",
    height: "48px",
    marginBottom: "1rem",
    objectFit: "contain",
  },
  techName: {
    fontSize: "1.125rem",
    fontWeight: "600",
    marginBottom: "0.5rem",
    color: "#ffffff",
  },
  techDescription: {
    fontSize: "0.875rem",
    color: "#a1a1aa",
    lineHeight: "1.5",
  },
  teamGrid: {
    display: "flex",
    gap: "2rem",
    overflowX: "auto",
    marginTop: "3rem",
    padding: "1rem 0",
    scrollBehavior: "smooth",
  },
  teamCard: {
    minWidth: "280px",
    background: "linear-gradient(145deg, #0a0a0a 0%, #1a1a1a 100%)",
    border: "1px solid #27272a",
    borderRadius: "12px",
    padding: "2rem",
    textAlign: "center",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3), 0 1px 4px rgba(0, 0, 0, 0.2)",
    flexShrink: 0,
  },
  teamImage: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    margin: "0 auto 1.5rem",
    objectFit: "cover",
    border: "3px solid #27272a",
  },
  teamName: {
    fontSize: "1.25rem",
    fontWeight: "600",
    marginBottom: "0.5rem",
    color: "#ffffff",
  },
  teamRole: {
    fontSize: "0.875rem",
    color: "#6366f1",
    fontWeight: "500",
    marginBottom: "1rem",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
  teamBio: {
    fontSize: "0.875rem",
    color: "#a1a1aa",
    lineHeight: "1.5",
    marginBottom: "1.5rem",
  },
  teamSkills: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    justifyContent: "center",
  },
  skillTag: {
    fontSize: "0.75rem",
    backgroundColor: "#27272a",
    color: "#a1a1aa",
    padding: "0.25rem 0.75rem",
    borderRadius: "12px",
    border: "1px solid #3f3f46",
  },
  projectShowcase: {
    marginTop: "3rem",
  },
  projectTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    marginBottom: "2rem",
    textAlign: "center",
    color: "#ffffff",
  },
  imageCarouselContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  imageCarousel: {
    flex: 1,
    display: "flex",
    gap: "1.5rem",
    overflowX: "auto",
    padding: "1rem 0",
    scrollBehavior: "smooth",
  },
  projectImage: {
    width: "220px",
    height: "391px",
    borderRadius: "12px",
    objectFit: "contain",
    background: "#18181b",
    border: "1px solid #27272a",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.3)",
    flexShrink: 0,
  },
  carouselButton: {
    backgroundColor: "#27272a",
    border: "1px solid #3f3f46",
    borderRadius: "50%",
    width: "48px",
    height: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.2s ease",
    color: "#ffffff",
    fontSize: "1.2rem",
  },
  teamContainer: {
    position: "relative",
  },
  teamScrollContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
    marginTop: "3rem",
  },
  featureCard: {
    textAlign: "center",
    padding: "2rem 1rem",
  },
  featureIcon: {
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  featureTitle: {
    fontSize: "1.125rem",
    fontWeight: "600",
    marginBottom: "0.75rem",
    color: "#ffffff",
  },
  featureDescription: {
    fontSize: "0.875rem",
    color: "#a1a1aa",
    lineHeight: "1.5",
  },
  cta: {
    background: `url('/last2.jpg') center/cover no-repeat`,
    border: "1px solid #3f3f46",
    borderRadius: "16px",
    padding: "8rem 1rem",
    textAlign: "center",
    margin: "1.5rem auto",
    maxWidth: "95vw",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.2)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "6rem",
    overflow: "hidden",
  },
  ctaContent: {
    maxWidth: "600px",
    zIndex: 2,
    position: "relative",
  },
  ctaTitle: {
    fontSize: "2rem",
    fontWeight: "600",
    marginBottom: "1rem",
    color: "#ffffff",
  },
  ctaDescription: {
    fontSize: "1.125rem",
    color: "#a1a1aa",
    marginBottom: "2rem",
    lineHeight: "1.6",
  },
  ctaButton: {
    backgroundColor: "#6366f1",
    color: "#ffffff",
    padding: "1rem 2rem",
    fontSize: "1rem",
    fontWeight: "500",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    textDecoration: "none",
    display: "inline-block",
  },
  footer: {
    borderTop: "1px solid #27272a",
    padding: "3rem 2rem",
    textAlign: "center",
    color: "#71717a",
  },
};

export const globalCSS = `
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-30px) rotate(5deg); }
  }
  
  .tech-card:hover, .project-image:hover, .team-card:hover {
    transform: translateY(-8px);
    border-color: #3f3f46;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.3);
  }
  
  .tech-card:hover .tech-card-bg {
    opacity: 0.15;
  }
  
  .project-carousel {
    scrollbar-width: thin;
    scrollbar-color: #3f3f46 transparent;
  }
  
  .project-carousel::-webkit-scrollbar {
    height: 8px;
  }
  
  .project-carousel::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .project-carousel::-webkit-scrollbar-thumb {
    background-color: #3f3f46;
    border-radius: 4px;
  }
  
  .project-carousel::-webkit-scrollbar-thumb:hover {
    background-color: #52525b;
  }
  
  .carousel-button:hover {
    background-color: #3f3f46;
    border-color: #52525b;
  }
  
  .team-grid {
    scrollbar-width: thin;
    scrollbar-color: #3f3f46 transparent;
  }
  
  .team-grid::-webkit-scrollbar {
    height: 8px;
  }
  
  .team-grid::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .team-grid::-webkit-scrollbar-thumb {
    background-color: #3f3f46;
    border-radius: 4px;
  }
  
  .team-grid::-webkit-scrollbar-thumb:hover {
    background-color: #52525b;
  }
  
  .section:hover {
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5), 0 4px 16px rgba(0, 0, 0, 0.3);
  }
  
  .category-circle:hover {
    transform: scale(1.05);
    border-color: #3f3f46;
  }
  
  .category-circle {
    z-index: 999 !important;
  }
  
  .category-circle.active {
    z-index: 999 !important;
  }
  
  .category-filter {
    scrollbar-width: none;
    -ms-overflow-style: none;
    user-select: none;
    -webkit-overflow-scrolling: touch;
    will-change: scroll-position;
    transform: translateZ(0);
  }
  
  .category-filter::-webkit-scrollbar {
    display: none;
  }
  
  .category-filter:active {
    cursor: grabbing;
  }
  
  .category-circle {
    transition: transform 0.15s ease-out;
  }
  
  .primary-button:hover {
    background-color: #f4f4f5;
    transform: translateY(-1px);
  }
  
  .secondary-button:hover {
    background-color: #18181b;
    border-color: #3f3f46;
  }
  
  .cta-button:hover {
    background-color: #5855eb;
    transform: translateY(-1px);
  }
  
  .nav-item:hover {
    color: #ffffff;
  }
  
  @media (max-width: 768px) {
    .hero-title { font-size: 2.5rem !important; }
    .hero-subtitle { font-size: 1.125rem !important; }
    .section-title { font-size: 2rem !important; }
    .hero-buttons { flex-direction: column; align-items: center; }
    .hero-buttons a { width: 200px; text-align: center; }
    .nav { display: none; }
    .category-filter { gap: 0.5rem; }
    .category-circle { width: 60px; height: 60px; }
    .category-icon { font-size: 1.2rem; }
    .category-label { font-size: 0.5rem; }
    .cta { flex-direction: column; gap: 2rem; padding: 3rem 1rem !important; }
  }
  
  @media (max-width: 480px) {
    .hero-title { font-size: 2rem !important; }
    .hero { padding: 6rem 1rem 4rem !important; }
    .section { padding: 3rem 1rem !important; }
  }
`;