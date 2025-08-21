import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Technology from "./components/Technology";
import Projects from "./components/Projects";
import Team from "./components/Team";
import Footer from "./components/Footer";
import { styles, globalCSS } from "./styles/styles";
import { projectCategories, dummyCircles } from "./data/appData";

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
    e.currentTarget.style.scrollBehavior = 'auto';
  };

  const handleMouseLeave = (e) => {
    setIsDragging(false);
    e.currentTarget.style.cursor = 'grab';
    e.currentTarget.style.scrollBehavior = 'smooth';
  };

  const handleMouseUp = (e) => {
    setIsDragging(false);
    e.currentTarget.style.cursor = 'grab';
    e.currentTarget.style.scrollBehavior = 'smooth';
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
    const itemWidth = 80;
    const totalItems = projectCategories.length + dummyCircles.length;
    const sectionWidth = totalItems * itemWidth;
    
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

  return (
    <div style={styles.container}>
      <style>
        {globalCSS}
      </style>

      <Header 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />

      <Hero scrollToSection={scrollToSection} />

      <Technology />

      <Projects 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        handleWheel={handleWheel}
        handleMouseDown={handleMouseDown}
        handleMouseLeave={handleMouseLeave}
        handleMouseUp={handleMouseUp}
        handleMouseMove={handleMouseMove}
      />

      <Team />

      <Footer />
    </div>
  );
};

export default LottoWebsite;