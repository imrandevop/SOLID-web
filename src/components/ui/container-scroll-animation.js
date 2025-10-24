import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContainerScroll = ({ titleComponent, children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const containerStyle = {
    minHeight: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    padding: isMobile ? "2rem 1rem" : "4rem 2rem",
  };

  const innerContainerStyle = {
    padding: isMobile ? "2rem 0" : "3rem 0",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    position: "relative",
    perspective: "1000px",
  };

  return (
    <div style={containerStyle} ref={containerRef}>
      <div style={innerContainerStyle}>
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }) => {
  const headerStyle = {
    maxWidth: "80rem",
    margin: "0 auto",
    textAlign: "center",
  };

  return (
    <motion.div
      style={{
        translateY: translate,
        ...headerStyle,
      }}
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({ rotate, scale, children }) => {
  const isMobile = window.innerWidth <= 768;

  const cardStyle = {
    marginTop: "2rem",
    marginLeft: "auto",
    marginRight: "auto",
    minHeight: "auto",
    width: "100%",
    border: "4px solid #6C6C6C",
    padding: isMobile ? "0.75rem" : "2rem",
    backgroundColor: "#222222",
    borderRadius: "30px",
    boxShadow:
      "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
    boxSizing: "border-box",
  };

  const innerCardStyle = {
    width: "100%",
    minHeight: "auto",
    overflow: "visible",
    borderRadius: "1rem",
    backgroundColor: "#18181b",
    padding: isMobile ? "2rem 1rem" : "3rem 2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
  };

  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        ...cardStyle,
      }}
    >
      <div style={innerCardStyle}>{children}</div>
    </motion.div>
  );
};
