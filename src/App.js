import React, { useState } from 'react';

const LottoWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('edtech');

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const technologies = [
    { 
      name: 'Flutter', 
      description: 'Cross-platform mobile development', 
      icon: '📱',
      backgroundImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    { 
      name: 'React', 
      description: 'Modern web applications', 
      icon: '⚛️',
      backgroundImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    { 
      name: 'Python', 
      description: 'Backend services & AI', 
      icon: '🐍',
      backgroundImage: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    { 
      name: 'PostgreSQL', 
      description: 'Robust database solutions', 
      icon: '🗄️',
      backgroundImage: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const projectCategories = [
    { id: 'web', name: 'Web Development', icon: '🌐' },
    { id: 'mobile', name: 'Mobile Development', icon: '📱' },
    { id: 'enterprise', name: 'Enterprise Software', icon: '🏢' },
    { id: 'data', name: 'Data Solutions', icon: '📊' },
    { id: 'social', name: 'Social Technology', icon: '👥' },
    { id: 'edtech', name: 'EdTech', icon: '📚' }
  ];

  const products = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack solution with payment integration, inventory management, and analytics dashboard.',
      category: 'web',
      images: [
        'https://via.placeholder.com/800x500/1a1a1a/6366f1?text=E-Commerce+Homepage',
        'https://via.placeholder.com/800x500/1a1a1a/6366f1?text=Product+Catalog',
        'https://via.placeholder.com/800x500/1a1a1a/6366f1?text=Shopping+Cart',
        'https://via.placeholder.com/800x500/1a1a1a/6366f1?text=Payment+Gateway',
        'https://via.placeholder.com/800x500/1a1a1a/6366f1?text=Admin+Dashboard'
      ]
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure banking with biometric authentication, real-time transactions, and fraud detection.',
      category: 'mobile',
      images: [
        'https://via.placeholder.com/800x500/1a1a1a/8b5cf6?text=Login+Screen',
        'https://via.placeholder.com/800x500/1a1a1a/8b5cf6?text=Dashboard',
        'https://via.placeholder.com/800x500/1a1a1a/8b5cf6?text=Transfer+Money',
        'https://via.placeholder.com/800x500/1a1a1a/8b5cf6?text=Transaction+History',
        'https://via.placeholder.com/800x500/1a1a1a/8b5cf6?text=Security+Settings'
      ]
    },
    {
      title: 'Healthcare System',
      description: 'Complete hospital management with patient records, scheduling, and telemedicine features.',
      category: 'enterprise',
      images: [
        'https://via.placeholder.com/800x500/1a1a1a/10b981?text=Patient+Dashboard',
        'https://via.placeholder.com/800x500/1a1a1a/10b981?text=Appointment+Booking',
        'https://via.placeholder.com/800x500/1a1a1a/10b981?text=Medical+Records',
        'https://via.placeholder.com/800x500/1a1a1a/10b981?text=Telemedicine',
        'https://via.placeholder.com/800x500/1a1a1a/10b981?text=Billing+System'
      ]
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time data visualization with business intelligence and predictive analytics.',
      category: 'data',
      images: [
        'https://via.placeholder.com/800x500/1a1a1a/f59e0b?text=Main+Dashboard',
        'https://via.placeholder.com/800x500/1a1a1a/f59e0b?text=Sales+Analytics',
        'https://via.placeholder.com/800x500/1a1a1a/f59e0b?text=User+Metrics',
        'https://via.placeholder.com/800x500/1a1a1a/f59e0b?text=Revenue+Reports',
        'https://via.placeholder.com/800x500/1a1a1a/f59e0b?text=Predictive+Models'
      ]
    },
    {
      title: 'Social Media Platform',
      description: 'Cross-platform networking with real-time messaging, content sharing, and community features.',
      category: 'social',
      images: [
        'https://via.placeholder.com/800x500/1a1a1a/ef4444?text=News+Feed',
        'https://via.placeholder.com/800x500/1a1a1a/ef4444?text=Profile+Page',
        'https://via.placeholder.com/800x500/1a1a1a/ef4444?text=Messaging',
        'https://via.placeholder.com/800x500/1a1a1a/ef4444?text=Groups',
        'https://via.placeholder.com/800x500/1a1a1a/ef4444?text=Live+Streaming'
      ]
    },
    {
      title: 'Educational Platform',
      description: 'Online learning management with interactive courses, progress tracking, and certification.',
      category: 'edtech',
      images: [
        'https://via.placeholder.com/800x500/1a1a1a/06b6d4?text=Course+Catalog',
        'https://via.placeholder.com/800x500/1a1a1a/06b6d4?text=Video+Lessons',
        'https://via.placeholder.com/800x500/1a1a1a/06b6d4?text=Interactive+Quiz',
        'https://via.placeholder.com/800x500/1a1a1a/06b6d4?text=Progress+Tracking',
        'https://via.placeholder.com/800x500/1a1a1a/06b6d4?text=Certificates'
      ]
    }
  ];

  const teamMembers = [
    {
      name: 'Alex Rodriguez',
      role: 'Full-Stack Developer',
      bio: 'Specializes in React, Node.js, and cloud architecture. 5+ years building scalable web applications.',
      image: 'https://via.placeholder.com/300x300/1a1a1a/6366f1?text=AR',
      skills: ['React', 'Node.js', 'AWS', 'PostgreSQL']
    },
    {
      name: 'Sarah Chen',
      role: 'UI/UX Designer',
      bio: 'Creates intuitive user experiences with a focus on modern design principles and accessibility.',
      image: 'https://via.placeholder.com/300x300/1a1a1a/8b5cf6?text=SC',
      skills: ['Figma', 'Design Systems', 'User Research', 'Prototyping']
    },
    {
      name: 'Marcus Johnson',
      role: 'Mobile Developer',
      bio: 'Expert in Flutter and React Native development with a passion for cross-platform solutions.',
      image: 'https://via.placeholder.com/300x300/1a1a1a/10b981?text=MJ',
      skills: ['Flutter', 'React Native', 'iOS', 'Android']
    },
    {
      name: 'Lisa Wang',
      role: 'DevOps Engineer',
      bio: 'Ensures seamless deployment and infrastructure management with modern DevOps practices.',
      image: 'https://via.placeholder.com/300x300/1a1a1a/f59e0b?text=LW',
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'Monitoring']
    }
  ];

  const features = [
    {
      title: 'Rapid Prototyping',
      description: 'From concept to working prototype in just 48 hours. Validate your ideas quickly.',
      icon: '⚡'
    },
    {
      title: 'Scalable Architecture',
      description: 'Built for growth. Our solutions scale from startup to enterprise seamlessly.',
      icon: '📈'
    },
    {
      title: 'Modern Tech Stack',
      description: 'Using cutting-edge technologies that ensure performance and maintainability.',
      icon: '🚀'
    },
    {
      title: 'Full-Stack Expertise',
      description: 'End-to-end development from database design to user interface.',
      icon: '🔧'
    }
  ];

  const selectedProject = products.find(product => product.category === selectedCategory);

  const nextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const styles = {
    container: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      backgroundColor: '#000000',
      color: '#ffffff',
      minHeight: '100vh',
      margin: 0,
      padding: 0
    },
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid #1a1a1a',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 1000
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#ffffff'
    },
    logoIcon: {
      width: '24px',
      height: '24px',
      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      borderRadius: '6px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    nav: {
      display: 'flex',
      gap: '2rem',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    navItem: {
      color: '#a1a1aa',
      textDecoration: 'none',
      fontWeight: '400',
      fontSize: '0.875rem',
      padding: '0.5rem 0',
      transition: 'color 0.2s ease',
      cursor: 'pointer',
      borderBottom: '2px solid transparent'
    },
    navItemActive: {
      color: '#ffffff',
      borderBottomColor: '#6366f1'
    },
    // Combined hero and features container
    heroFeaturesContainer: {
      maxWidth: '95vw',
      margin: '2rem auto 1.5rem',
      borderRadius: '16px',
      border: '1px solid #27272a',
      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.5), 0 4px 12px rgba(0, 0, 0, 0.3)',
      overflow: 'hidden',
      background: 'linear-gradient(180deg, radial-gradient(ellipse at center, #0a0a0a 0%, #000000 70%) 0%, linear-gradient(145deg, #0a0a0a 0%, #1a1a1a 100%) 100%)',
      position: 'relative'
    },
    hero: {
      padding: '12rem 1rem 5rem',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '600px'
    },
    heroBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '150%', // Extended height to cover more of the features section
      backgroundImage: 'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      opacity: 0.15,
      zIndex: 1,
      // Extended fade out gradient overlay
      background: `
        linear-gradient(180deg, 
          rgba(0,0,0,0) 0%, 
          rgba(0,0,0,0.1) 40%, 
          rgba(0,0,0,0.5) 75%, 
          rgba(0,0,0,0.9) 90%,
          rgba(0,0,0,1) 100%
        ),
        url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")
      `,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    },
    heroContent: {
      maxWidth: '800px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 10
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: '600',
      lineHeight: '1.1',
      marginBottom: '1.5rem',
      background: 'linear-gradient(to bottom, #ffffff 0%, #a1a1aa 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      color: '#a1a1aa',
      lineHeight: '1.6',
      marginBottom: '3rem',
      fontWeight: '400'
    },
    heroButtons: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    primaryButton: {
      backgroundColor: '#ffffff',
      color: '#000000',
      padding: '0.875rem 1.75rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      textDecoration: 'none',
      display: 'inline-block'
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: '#a1a1aa',
      padding: '0.875rem 1.75rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      border: '1px solid #27272a',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      textDecoration: 'none',
      display: 'inline-block'
    },
    // Features section within the blended container
    featuresSection: {
      padding: '5rem 1rem',
      position: 'relative',
      zIndex: 10
    },
    // Regular section styling for other sections
    section: {
      padding: '5rem 1rem',
      maxWidth: '95vw',
      margin: '1.5rem auto',
      background: 'linear-gradient(145deg, #0a0a0a 0%, #1a1a1a 100%)',
      borderRadius: '16px',
      border: '1px solid #27272a',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.2)',
      position: 'relative'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: '600',
      marginBottom: '1rem',
      textAlign: 'center',
      background: 'linear-gradient(to bottom, #ffffff 0%, #a1a1aa 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    sectionSubtitle: {
      fontSize: '1.125rem',
      color: '#a1a1aa',
      textAlign: 'center',
      marginBottom: '4rem',
      maxWidth: '600px',
      margin: '0 auto 4rem'
    },
    categoryFilter: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      marginBottom: '4rem',
      flexWrap: 'wrap'
    },
    categoryCircle: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      background: 'linear-gradient(145deg, #0a0a0a 0%, #1a1a1a 100%)',
      border: '2px solid #27272a',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)'
    },
    categoryCircleActive: {
      borderColor: '#6366f1',
      background: 'linear-gradient(145deg, #6366f1 0%, #8b5cf6 100%)',
      transform: 'scale(1.1)',
      boxShadow: '0 8px 24px rgba(99, 102, 241, 0.4)'
    },
    categoryIcon: {
      fontSize: '1.5rem',
      marginBottom: '0.25rem'
    },
    categoryLabel: {
      fontSize: '0.6rem',
      fontWeight: '500',
      textAlign: 'center',
      lineHeight: '1.2'
    },
    techGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      marginTop: '3rem'
    },
    techCard: {
      background: 'linear-gradient(145deg, #0a0a0a 0%, #1a1a1a 100%)',
      border: '1px solid #27272a',
      borderRadius: '12px',
      padding: '2rem',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3), 0 1px 4px rgba(0, 0, 0, 0.2)',
      position: 'relative',
      overflow: 'hidden'
    },
    techCardBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      opacity: 0.1,
      zIndex: 1,
      borderRadius: '12px'
    },
    techContent: {
      position: 'relative',
      zIndex: 2
    },
    techIcon: {
      fontSize: '2rem',
      marginBottom: '1rem'
    },
    techName: {
      fontSize: '1.125rem',
      fontWeight: '600',
      marginBottom: '0.5rem',
      color: '#ffffff'
    },
    techDescription: {
      fontSize: '0.875rem',
      color: '#a1a1aa',
      lineHeight: '1.5'
    },
    teamGrid: {
      display: 'flex',
      gap: '2rem',
      overflowX: 'auto',
      marginTop: '3rem',
      padding: '1rem 0',
      scrollBehavior: 'smooth'
    },
    teamCard: {
      minWidth: '280px',
      background: 'linear-gradient(145deg, #0a0a0a 0%, #1a1a1a 100%)',
      border: '1px solid #27272a',
      borderRadius: '12px',
      padding: '2rem',
      textAlign: 'center',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3), 0 1px 4px rgba(0, 0, 0, 0.2)',
      flexShrink: 0
    },
    teamImage: {
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      margin: '0 auto 1.5rem',
      objectFit: 'cover',
      border: '3px solid #27272a'
    },
    teamName: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '0.5rem',
      color: '#ffffff'
    },
    teamRole: {
      fontSize: '0.875rem',
      color: '#6366f1',
      fontWeight: '500',
      marginBottom: '1rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    teamBio: {
      fontSize: '0.875rem',
      color: '#a1a1aa',
      lineHeight: '1.5',
      marginBottom: '1.5rem'
    },
    teamSkills: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      justifyContent: 'center'
    },
    skillTag: {
      fontSize: '0.75rem',
      backgroundColor: '#27272a',
      color: '#a1a1aa',
      padding: '0.25rem 0.75rem',
      borderRadius: '12px',
      border: '1px solid #3f3f46'
    },
    projectShowcase: {
      marginTop: '3rem'
    },
    projectTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '2rem',
      textAlign: 'center',
      color: '#ffffff'
    },
    imageCarouselContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    },
    imageCarousel: {
      flex: 1,
      display: 'flex',
      gap: '1.5rem',
      overflowX: 'auto',
      padding: '1rem 0',
      scrollBehavior: 'smooth'
    },
    projectImage: {
      width: '300px',
      height: '500px',
      borderRadius: '12px',
      objectFit: 'cover',
      border: '1px solid #27272a',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
      flexShrink: 0
    },
    carouselButton: {
      backgroundColor: '#27272a',
      border: '1px solid #3f3f46',
      borderRadius: '50%',
      width: '48px',
      height: '48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      color: '#ffffff',
      fontSize: '1.2rem'
    },
    teamContainer: {
      position: 'relative'
    },
    teamScrollContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      marginTop: '3rem'
    },
    featureCard: {
      textAlign: 'center',
      padding: '2rem 1rem'
    },
    featureIcon: {
      fontSize: '3rem',
      marginBottom: '1rem'
    },
    featureTitle: {
      fontSize: '1.125rem',
      fontWeight: '600',
      marginBottom: '0.75rem',
      color: '#ffffff'
    },
    featureDescription: {
      fontSize: '0.875rem',
      color: '#a1a1aa',
      lineHeight: '1.5'
    },
    cta: {
      background: 'linear-gradient(145deg, #0a0a0a 0%, #1a1a1a 100%)',
      border: '1px solid #3f3f46',
      borderRadius: '16px',
      padding: '4rem 1rem',
      textAlign: 'center',
      margin: '1.5rem auto',
      maxWidth: '95vw',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.2)',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '3rem'
    },
    ctaContent: {
      maxWidth: '600px',
      zIndex: 2,
      position: 'relative'
    },
    ctaMockup: {
      maxWidth: '800px',
      width: '100%',
      zIndex: 2,
      position: 'relative'
    },
    mockupContainer: {
      background: 'linear-gradient(145deg, #1f1f23 0%, #2a2a30 100%)',
      borderRadius: '20px',
      padding: '2.5rem',
      border: '1px solid #3a3a42',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6), 0 8px 24px rgba(0, 0, 0, 0.4)',
      position: 'relative',
      overflow: 'hidden',
      transform: 'perspective(1000px) rotateX(5deg)',
      maxWidth: '700px',
      margin: '0 auto'
    },
    mockupHeader: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '1.5rem',
      paddingBottom: '1rem',
      borderBottom: '1px solid #3a3a42'
    },
    mockupInput: {
      flex: 1,
      background: '#2a2a30',
      border: '1px solid #3a3a42',
      borderRadius: '12px',
      padding: '1rem 1.25rem',
      color: '#9ca3af',
      fontSize: '0.95rem',
      fontStyle: 'italic',
      fontWeight: '400',
      boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)'
    },
    mockupOptions: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },
    mockupOption: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      padding: '1rem 1.25rem',
      background: '#2a2a30',
      border: '1px solid #3a3a42',
      borderRadius: '12px',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      position: 'relative'
    },
    mockupOptionActive: {
      borderColor: '#6366f1',
      background: 'linear-gradient(145deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.10) 100%)',
      boxShadow: '0 4px 12px rgba(99, 102, 241, 0.2)'
    },
    optionIcon: {
      width: '36px',
      height: '36px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.1rem',
      flexShrink: 0
    },
    optionContent: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    optionLeft: {
      display: 'flex',
      flexDirection: 'column'
    },
    optionName: {
      fontSize: '0.95rem',
      fontWeight: '500',
      color: '#ffffff',
      marginBottom: '0.25rem',
      lineHeight: '1.2'
    },
    optionDescription: {
      fontSize: '0.8rem',
      color: '#9ca3af',
      lineHeight: '1.2'
    },
    optionType: {
      fontSize: '0.75rem',
      color: '#6b7280',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      padding: '0.25rem 0.75rem',
      background: '#374151',
      borderRadius: '12px',
      fontWeight: '500'
    },
    ctaTitle: {
      fontSize: '2rem',
      fontWeight: '600',
      marginBottom: '1rem',
      color: '#ffffff'
    },
    ctaDescription: {
      fontSize: '1.125rem',
      color: '#a1a1aa',
      marginBottom: '2rem',
      lineHeight: '1.6'
    },
    ctaButton: {
      backgroundColor: '#6366f1',
      color: '#ffffff',
      padding: '1rem 2rem',
      fontSize: '1rem',
      fontWeight: '500',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      textDecoration: 'none',
      display: 'inline-block'
    },
    footer: {
      borderTop: '1px solid #27272a',
      padding: '3rem 2rem',
      textAlign: 'center',
      color: '#71717a'
    },
    gradientOrb: {
      position: 'absolute',
      borderRadius: '50%',
      filter: 'blur(80px)',
      opacity: 0.3,
      pointerEvents: 'none'
    },
    orb1: {
      width: '300px',
      height: '300px',
      background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      top: '10%',
      left: '10%',
      animation: 'float 8s ease-in-out infinite'
    },
    orb2: {
      width: '200px',
      height: '200px',
      background: 'linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)',
      bottom: '10%',
      right: '10%',
      animation: 'float 8s ease-in-out infinite reverse'
    }
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
          <div style={styles.logoIcon}></div>
          <span>LOTTO</span>
        </div>
        <nav style={styles.nav}>
          <a 
            style={{...styles.navItem, ...(activeSection === 'home' ? styles.navItemActive : {})}}
            className="nav-item"
            onClick={() => scrollToSection('home')}
          >
            Product
          </a>
          <a 
            style={{...styles.navItem, ...(activeSection === 'features' ? styles.navItemActive : {})}}
            className="nav-item"
            onClick={() => scrollToSection('features')}
          >
            Features
          </a>
          <a 
            style={{...styles.navItem, ...(activeSection === 'technology' ? styles.navItemActive : {})}}
            className="nav-item"
            onClick={() => scrollToSection('technology')}
          >
            Technology
          </a>
          <a 
            style={{...styles.navItem, ...(activeSection === 'projects' ? styles.navItemActive : {})}}
            className="nav-item"
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </a>
        </nav>
      </header>

      {/* Combined Hero and Features Container */}
      <div style={styles.heroFeaturesContainer}>
        <section id="home" style={styles.hero}>
          <div style={styles.heroBackground}></div>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle} className="hero-title">
              IDEA into MVP
            </h1>
            <p style={styles.heroSubtitle} className="hero-subtitle">
              LOTTO is a purpose-built development team for modern product development. We streamline your ideas from concept to deployment.
            </p>
            <div style={styles.heroButtons} className="hero-buttons">
              <a 
                href="#projects" 
                style={styles.primaryButton}
                className="primary-button"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('projects');
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
                  scrollToSection('features');
                }}
              >
                Learn more
              </a>
            </div>
          </div>
        </section>

        <section id="features" style={styles.featuresSection}>
          <h2 style={styles.sectionTitle} className="section-title">Made for modern product teams</h2>
          <p style={styles.sectionSubtitle}>
            LOTTO is shaped by the practices and principles that distinguish world-class product teams from the rest: relentless focus, fast execution, and a commitment to the quality of craft.
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
        <h2 style={styles.sectionTitle} className="section-title">Built on strong foundations</h2>
        <p style={styles.sectionSubtitle}>
          Our technology stack is built with modern frameworks and tools that keep your products robust, safe, and blazing fast.
        </p>
        <div style={styles.techGrid}>
          {technologies.map((tech, index) => (
            <div key={index} style={styles.techCard} className="tech-card">
              <div 
                style={{
                  ...styles.techCardBackground,
                  backgroundImage: `url(${tech.backgroundImage})`
                }}
                className="tech-card-bg"
              ></div>
              <div style={styles.techContent}>
                <div style={styles.techIcon}>{tech.icon}</div>
                <h3 style={styles.techName}>{tech.name}</h3>
                <p style={styles.techDescription}>{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" style={styles.section} className="section">
        <h2 style={styles.sectionTitle} className="section-title">Powering the world's best product teams</h2>
        <p style={styles.sectionSubtitle}>
          From next-gen startups to established enterprises, we deliver solutions that scale with your business.
        </p>
        
        <div style={styles.categoryFilter} className="category-filter">
          {projectCategories.map((category) => (
            <div
              key={category.id}
              style={{
                ...styles.categoryCircle,
                ...(selectedCategory === category.id ? styles.categoryCircleActive : {})
              }}
              className="category-circle"
              onClick={() => setSelectedCategory(category.id)}
            >
              <div style={styles.categoryIcon}>{category.icon}</div>
              <div style={styles.categoryLabel}>{category.name}</div>
            </div>
          ))}
        </div>

        <div style={styles.projectShowcase}>
          {selectedProject && (
            <>
              <h3 style={styles.projectTitle}>{selectedProject.title}</h3>
              <div style={styles.imageCarouselContainer}>
                <button 
                  style={styles.carouselButton}
                  className="carousel-button"
                  onClick={() => {
                    const container = document.querySelector('.project-carousel');
                    container.scrollBy({ left: -320, behavior: 'smooth' });
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
                    const container = document.querySelector('.project-carousel');
                    container.scrollBy({ left: 320, behavior: 'smooth' });
                  }}
                >
                  ›
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      <section id="team" style={styles.section} className="section">
        <h2 style={styles.sectionTitle} className="section-title">Meet our team</h2>
        <p style={styles.sectionSubtitle}>
          Our diverse team of experts brings together years of experience in modern software development, design, and engineering.
        </p>
        <div style={styles.teamContainer}>
          <div style={styles.teamScrollContainer}>
            <button 
              style={styles.carouselButton}
              className="carousel-button"
              onClick={() => {
                const container = document.querySelector('.team-grid');
                container.scrollBy({ left: -300, behavior: 'smooth' });
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
                const container = document.querySelector('.team-grid');
                container.scrollBy({ left: 300, behavior: 'smooth' });
              }}
            >
              ›
            </button>
          </div>
        </div>
      </section>

      <div style={styles.cta}>
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>Ready to transform your idea?</h2>
          <p style={styles.ctaDescription}>
            Professional website development starting at just ₹999. Get a stunning, responsive website for your business with modern design and optimized performance.
          </p>
          <a href="#contact" style={styles.ctaButton} className="cta-button">
            Start your project
          </a>
        </div>
        
        <div style={styles.ctaMockup}>
          <div style={styles.mockupContainer}>
            <div style={styles.mockupHeader}>
              <div style={styles.mockupInput}>
                Assign to...
              </div>
            </div>
            <div style={styles.mockupOptions}>
              <div style={{...styles.mockupOption, ...styles.mockupOptionActive}}>
                <div style={{...styles.optionIcon, background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)'}}>
                  🛡️
                </div>
                <div style={styles.optionContent}>
                  <div style={styles.optionName}>Frontend Developer</div>
                  <div style={styles.optionType}>Team</div>
                </div>
              </div>
              <div style={styles.mockupOption} className="mockup-option">
                <div style={{...styles.optionIcon, background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)'}}>
                  ⚛️
                </div>
                <div style={styles.optionContent}>
                  <div style={styles.optionName}>React Specialist</div>
                  <div style={styles.optionType}>Team</div>
                </div>
              </div>
              <div style={styles.mockupOption}>
                <div style={{...styles.optionIcon, background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'}}>
                  🐍
                </div>
                <div style={styles.optionContent}>
                  <div style={styles.optionName}>Python Developer</div>
                  <div style={styles.optionType}>Team</div>
                </div>
              </div>
              <div style={styles.mockupOption}>
                <div style={{...styles.optionIcon, background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'}}>
                  📱
                </div>
                <div style={styles.optionContent}>
                  <div style={styles.optionName}>Mobile Expert</div>
                  <div style={styles.optionType}>Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer style={styles.footer}>
        <p>&copy; 2025 LOTTO. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LottoWebsite;