import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const AnimatedTeam = ({ teamMembers, autoplay = false }) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, teamMembers.length]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "5rem 1rem",
  };

  const gridStyle = {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "5rem",
  };

  const gridStyleMd = {
    gridTemplateColumns: "1fr 1fr",
  };

  const imageContainerStyle = {
    position: "relative",
    height: "320px",
    width: "100%",
  };

  const imageWrapperStyle = {
    position: "absolute",
    inset: 0,
    transformOrigin: "bottom",
  };

  const imgStyle = {
    height: "100%",
    width: "100%",
    borderRadius: "1.5rem",
    objectFit: "cover",
    objectPosition: "center",
  };

  const contentContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    padding: "1rem 0",
  };

  const nameStyle = {
    fontSize: "2rem",
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: "0.5rem",
  };

  const roleStyle = {
    fontSize: "0.875rem",
    color: "#6366f1",
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    marginBottom: "2rem",
  };

  const bioStyle = {
    fontSize: "1.125rem",
    color: "#a1a1aa",
    lineHeight: "1.6",
    marginTop: "2rem",
  };

  const skillsContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginTop: "1.5rem",
  };

  const skillTagStyle = {
    fontSize: "0.75rem",
    backgroundColor: "#27272a",
    color: "#a1a1aa",
    padding: "0.25rem 0.75rem",
    borderRadius: "12px",
    border: "1px solid #3f3f46",
  };

  const buttonContainerStyle = {
    display: "flex",
    gap: "1rem",
    paddingTop: "3rem",
  };

  const buttonStyle = {
    height: "2.5rem",
    width: "2.5rem",
    borderRadius: "50%",
    backgroundColor: "#27272a",
    border: "1px solid #3f3f46",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
    color: "#ffffff",
  };

  const iconStyle = {
    height: "1.25rem",
    width: "1.25rem",
    transition: "transform 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <div
        style={{
          ...gridStyle,
          ...(window.innerWidth >= 768 ? gridStyleMd : {}),
        }}
      >
        <div>
          <div style={imageContainerStyle}>
            <AnimatePresence>
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : teamMembers.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  style={imageWrapperStyle}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    draggable={false}
                    style={imgStyle}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div style={contentContainerStyle}>
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 style={nameStyle}>{teamMembers[active].name}</h3>
            <p style={roleStyle}>{teamMembers[active].role}</p>
            <motion.p style={bioStyle}>
              {teamMembers[active].bio.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  style={{ display: "inline-block" }}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
            <div style={skillsContainerStyle}>
              {teamMembers[active].skills.map((skill, skillIndex) => (
                <span key={skillIndex} style={skillTagStyle}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
          <div style={buttonContainerStyle}>
            <button
              onClick={handlePrev}
              style={buttonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#3f3f46";
                e.currentTarget.querySelector("svg").style.transform =
                  "rotate(12deg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#27272a";
                e.currentTarget.querySelector("svg").style.transform =
                  "rotate(0deg)";
              }}
            >
              <IconArrowLeft style={iconStyle} />
            </button>
            <button
              onClick={handleNext}
              style={buttonStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#3f3f46";
                e.currentTarget.querySelector("svg").style.transform =
                  "rotate(-12deg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#27272a";
                e.currentTarget.querySelector("svg").style.transform =
                  "rotate(0deg)";
              }}
            >
              <IconArrowRight style={iconStyle} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
