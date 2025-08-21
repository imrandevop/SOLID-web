import React, { useState, useEffect } from "react";

const LottoWebsite = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState("web");
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    // Initialize scroll position to the middle section
    const container = document.querySelector('.category-filter');
    if (container) {
      const itemWidth = 80;
      const totalItems = projectCategories.length + dummyCircles.length;
      const sectionWidth = totalItems * itemWidth;
      container.scrollLeft = sectionWidth;
    }
  }, []);

  const handleWheel = (e) => {
    e.preventDefault();
    const container = e.currentTarget;
    const scrollAmount = e.deltaY * 0.8;
    
    container.scrollTo({
      left: container.scrollLeft + scrollAmount,
      behavior: 'smooth'
    });
    
    checkInfiniteScroll(container);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
    e.currentTarget.style.cursor = 'grabbing';
    e.currentTarget.style.scrollBehavior = 'auto'; // Disable smooth scroll during drag
  };

  const handleMouseLeave = (e) => {
    setIsDragging(false);
    e.currentTarget.style.cursor = 'grab';
    e.currentTarget.style.scrollBehavior = 'smooth'; // Re-enable smooth scroll
  };

  const handleMouseUp = (e) => {
    setIsDragging(false);
    e.currentTarget.style.cursor = 'grab';
    e.currentTarget.style.scrollBehavior = 'smooth'; // Re-enable smooth scroll
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 0.8;
    e.currentTarget.scrollLeft = scrollLeft - walk;
    
    checkInfiniteScroll(e.currentTarget);
  };

  const checkInfiniteScroll = (container) => {
    if (isScrolling) return;
    
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    const itemWidth = 80; // Width of each category item
    const totalItems = projectCategories.length + dummyCircles.length;
    const sectionWidth = totalItems * itemWidth;
    
    // Reset position when reaching near the end or beginning
    if (scrollLeft >= sectionWidth * 1.5) {
      setIsScrolling(true);
      container.scrollLeft = sectionWidth * 0.5;
      setTimeout(() => setIsScrolling(false), 50);
    } else if (scrollLeft <= sectionWidth * 0.25) {
      setIsScrolling(true);
      container.scrollLeft = sectionWidth * 1.25;
      setTimeout(() => setIsScrolling(false), 50);
    }
  };


  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const technologies = [
    {
      name: "Flutter",
      description: "Cross-platform mobile development",
      icon: "/icons/flutter-icon.png",
      backgroundImage:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "React",
      description: "Modern web applications",
      icon: "/icons/react-icon.png",
      backgroundImage:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Python",
      description: "Backend services & AI",
      icon: "/icons/python-icon.png",
      backgroundImage:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "PostgreSQL",
      description: "Robust database solutions",
      icon: "/icons/postgresql-icon.png",
      backgroundImage:
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
  ];

  const projectCategories = [
    { id: "web", name: "Lotto", icon: "icons/lotto-icon.png" },
    { id: "mobile", name: "Mobile Apps", icon: "📱" },
    { id: "enterprise", name: "Enterprise Solutions", icon: "🏢" },
    { id: "ecommerce", name: "E-Commerce", icon: "🛍️" },
    { id: "cms", name: "CMS Platforms", icon: "📋" },
    { id: "saas", name: "SaaS Products", icon: "☁️" },
  ];

  const dummyCircles = [
    { id: "circle1", color: "#6366f1", name: "Circle 1" },
    { id: "circle2", color: "#8b5cf6", name: "Circle 2" },
    { id: "circle3", color: "#10b981", name: "Circle 3" },
    { id: "circle4", color: "#f59e0b", name: "Circle 4" },
    { id: "circle5", color: "#ef4444", name: "Circle 5" },
    { id: "circle6", color: "#06b6d4", name: "Circle 6" },
    { id: "circle7", color: "#84cc16", name: "Circle 7" },
    { id: "circle8", color: "#f97316", name: "Circle 8" },
    { id: "circle9", color: "#ec4899", name: "Circle 9" },
    { id: "circle10", color: "#14b8a6", name: "Circle 10" },
    { id: "circle11", color: "#a855f7", name: "Circle 11" },
    { id: "circle12", color: "#22c55e", name: "Circle 12" },
  ];

  const products = [
    {
      title: "Corporate Website",
      description:
        "Professional responsive websites with modern design, SEO optimization, and content management systems.",
      category: "web",
      images: [
        "/screenshots/lotto1.png",
        "/screenshots/lotto2.png",
        "/screenshots/lotto3.png",
        "/screenshots/lotto4.png",
        "/screenshots/lotto5.png",
        "/screenshots/lotto6.png",
      ],
    },
    {
      title: "Business Mobile App",
      description:
        "Cross-platform mobile applications with native performance, secure authentication, and cloud integration.",
      category: "mobile",
      images: [
        "https://via.placeholder.com/800x500/1a1a1a/8b5cf6?text=App+Dashboard",
        "https://via.placeholder.com/800x500/1a1a1a/8b5cf6?text=User+Profile",
        "https://via.placeholder.com/800x500/1a1a1a/8b5cf6?text=Features+Screen",
        "https://via.placeholder.com/800x500/1a1a1a/8b5cf6?text=Analytics+View",
        "https://via.placeholder.com/800x500/1a1a1a/8b5cf6?text=Settings+Panel",
      ],
    },
    {
      title: "Enterprise Management System",
      description:
        "Comprehensive business management solution with workflow automation, reporting, and multi-user access.",
      category: "enterprise",
      images: [
        "https://via.placeholder.com/800x500/1a1a1a/10b981?text=Admin+Dashboard",
        "https://via.placeholder.com/800x500/1a1a1a/10b981?text=Project+Management",
        "https://via.placeholder.com/800x500/1a1a1a/10b981?text=Team+Collaboration",
        "https://via.placeholder.com/800x500/1a1a1a/10b981?text=Reports+Analytics",
        "https://via.placeholder.com/800x500/1a1a1a/10b981?text=User+Management",
      ],
    },
    {
      title: "Online Store Platform",
      description:
        "Complete e-commerce solution with payment processing, inventory management, and customer analytics.",
      category: "ecommerce",
      images: [
        "https://via.placeholder.com/800x500/1a1a1a/f59e0b?text=Product+Catalog",
        "https://via.placeholder.com/800x500/1a1a1a/f59e0b?text=Shopping+Cart",
        "https://via.placeholder.com/800x500/1a1a1a/f59e0b?text=Checkout+Process",
        "https://via.placeholder.com/800x500/1a1a1a/f59e0b?text=Order+Management",
        "https://via.placeholder.com/800x500/1a1a1a/f59e0b?text=Sales+Dashboard",
      ],
    },
    {
      title: "Content Management System",
      description:
        "Custom CMS solutions with drag-and-drop editors, multi-language support, and advanced publishing tools.",
      category: "cms",
      images: [
        "https://via.placeholder.com/800x500/1a1a1a/ef4444?text=Content+Editor",
        "https://via.placeholder.com/800x500/1a1a1a/ef4444?text=Media+Library",
        "https://via.placeholder.com/800x500/1a1a1a/ef4444?text=Page+Builder",
        "https://via.placeholder.com/800x500/1a1a1a/ef4444?text=SEO+Tools",
        "https://via.placeholder.com/800x500/1a1a1a/ef4444?text=Analytics+Panel",
      ],
    },
    {
      title: "SaaS Application",
      description:
        "Cloud-based software solutions with subscription management, API integrations, and scalable infrastructure.",
      category: "saas",
      images: [
        "https://via.placeholder.com/800x500/1a1a1a/06b6d4?text=SaaS+Dashboard",
        "https://via.placeholder.com/800x500/1a1a1a/06b6d4?text=Subscription+Plans",
        "https://via.placeholder.com/800x500/1a1a1a/06b6d4?text=API+Integration",
        "https://via.placeholder.com/800x500/1a1a1a/06b6d4?text=Usage+Analytics",
        "https://via.placeholder.com/800x500/1a1a1a/06b6d4?text=Billing+System",
      ],
    },
  ];

  const teamMembers = [
    {
      name: "David Kumar",
      role: "Lead Developer",
      bio: "Full-stack developer with 8+ years of experience in web and mobile app development, specializing in scalable solutions.",
      image: "https://via.placeholder.com/300x300/1a1a1a/6366f1?text=DK",
      skills: ["React", "Node.js", "Flutter", "AWS"],
    },
    {
      name: "Priya Sharma",
      role: "UI/UX Designer",
      bio: "Creative designer focused on user-centered design and modern interfaces that enhance business growth.",
      image: "https://via.placeholder.com/300x300/1a1a1a/8b5cf6?text=PS",
      skills: ["Figma", "Adobe Creative Suite", "UX Research", "Prototyping"],
    },
    {
      name: "Rajesh Patel",
      role: "Backend Specialist",
      bio: "Expert in database design and server architecture, ensuring robust and secure application backends.",
      image: "https://via.placeholder.com/300x300/1a1a1a/10b981?text=RP",
      skills: ["Python", "PostgreSQL", "MongoDB", "API Design"],
    },
    {
      name: "Anita Singh",
      role: "Project Manager",
      bio: "Experienced project manager ensuring timely delivery and smooth communication between teams and clients.",
      image: "https://via.placeholder.com/300x300/1a1a1a/f59e0b?text=AS",
      skills: ["Agile", "Scrum", "Client Relations", "Quality Assurance"],
    },
  ];

  const features = [
    {
      title: "Custom Development",
      description:
        "Tailored applications and websites built specifically for your business needs and goals.",
      icon: "⚡",
    },
    {
      title: "Scalable Solutions",
      description:
        "Future-proof architecture that grows with your business, from startup to enterprise.",
      icon: "📈",
    },
    {
      title: "Latest Technologies",
      description:
        "Cutting-edge frameworks and tools ensuring optimal performance and user experience.",
      icon: "🚀",
    },
    {
      title: "End-to-End Service",
      description:
        "Complete development lifecycle from planning and design to deployment and maintenance.",
      icon: "🔧",
    },
  ];

  const selectedProject = products.find(
    (product) => product.category === selectedCategory
  );



  const styles = {
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
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid #1a1a1a",
      padding: "1rem 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 1000,
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
    // Combined hero and features container
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
    // Features section within the blended container
    featuresSection: {
      padding: "5rem 1rem",
      position: "relative",
      zIndex: 10,
    },
    // Regular section styling for other sections
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
      width: "48px", // Set specific width
      height: "48px", // Set specific height
      marginBottom: "1rem",
      objectFit: "contain", // Keep aspect ratio
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
    ctaMockup: {
      maxWidth: "800px",
      width: "100%",
      zIndex: 2,
      position: "relative",
    },
    mockupContainer: {
      background: "linear-gradient(145deg, #1f1f23 0%, #2a2a30 100%)",
      borderRadius: "20px",
      padding: "2.5rem",
      border: "1px solid #3a3a42",
      boxShadow:
        "0 20px 60px rgba(0, 0, 0, 0.6), 0 8px 24px rgba(0, 0, 0, 0.4)",
      position: "relative",
      overflow: "hidden",
      transform: "perspective(1000px) rotateX(5deg)",
      maxWidth: "700px",
      margin: "0 auto",
    },
    mockupHeader: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      marginBottom: "1.5rem",
      paddingBottom: "1rem",
      borderBottom: "1px solid #3a3a42",
    },
    mockupInput: {
      flex: 1,
      background: "#2a2a30",
      border: "1px solid #3a3a42",
      borderRadius: "12px",
      padding: "1rem 1.25rem",
      color: "#9ca3af",
      fontSize: "0.95rem",
      fontStyle: "italic",
      fontWeight: "400",
      boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.3)",
    },
    mockupOptions: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
    },
    mockupOption: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      padding: "1rem 1.25rem",
      background: "#2a2a30",
      border: "1px solid #3a3a42",
      borderRadius: "12px",
      transition: "all 0.2s ease",
      cursor: "pointer",
      position: "relative",
    },
    mockupOptionActive: {
      borderColor: "#6366f1",
      background:
        "linear-gradient(145deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.10) 100%)",
      boxShadow: "0 4px 12px rgba(99, 102, 241, 0.2)",
    },
    optionIcon: {
      width: "36px",
      height: "36px",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.1rem",
      flexShrink: 0,
    },
    optionContent: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    optionLeft: {
      display: "flex",
      flexDirection: "column",
    },
    optionName: {
      fontSize: "0.95rem",
      fontWeight: "500",
      color: "#ffffff",
      marginBottom: "0.25rem",
      lineHeight: "1.2",
    },
    optionDescription: {
      fontSize: "0.8rem",
      color: "#9ca3af",
      lineHeight: "1.2",
    },
    optionType: {
      fontSize: "0.75rem",
      color: "#6b7280",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      padding: "0.25rem 0.75rem",
      background: "#374151",
      borderRadius: "12px",
      fontWeight: "500",
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
    gradientOrb: {
      position: "absolute",
      borderRadius: "50%",
      filter: "blur(80px)",
      opacity: 0.3,
      pointerEvents: "none",
    },
    orb1: {
      width: "300px",
      height: "300px",
      background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
      top: "10%",
      left: "10%",
      animation: "float 8s ease-in-out infinite",
    },
    orb2: {
      width: "200px",
      height: "200px",
      background: "linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)",
      bottom: "10%",
      right: "10%",
      animation: "float 8s ease-in-out infinite reverse",
    },
  };

  return (
    <div style={styles.container}>
      <style>
        {`
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
            z-index: 1001 !important;
          }
          
          .category-circle.active {
            z-index: 1002 !important;
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
          
          .mockup-option:hover {
            border-color: #4f46e5;
            background: linear-gradient(145deg, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.05) 100%);
            transform: translateY(-1px);
            box-shadow: 0 2px 8px rgba(99, 102, 241, 0.15);
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
            .mockup-container { padding: 1rem !important; }
          }
          
          @media (max-width: 480px) {
            .hero-title { font-size: 2rem !important; }
            .hero { padding: 6rem 1rem 4rem !important; }
            .section { padding: 3rem 1rem !important; }
          }
        `}
      </style>

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

      {/* Combined Hero and Features Container */}
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
    </div>
  );
};

export default LottoWebsite;