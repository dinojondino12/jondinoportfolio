import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaAws } from "react-icons/fa";
import "../style/about.css";

const skillsData = [
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Python", icon: <FaPython /> },
  { name: "AWS", icon: <FaAws /> },
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Detect when component is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const aboutSection = document.querySelector(".about-container");
    if (aboutSection) observer.observe(aboutSection);

    return () => {
      if (aboutSection) observer.unobserve(aboutSection);
    };
  }, []);

  return (
    <div className="about-container">
      <motion.div
        className="about-content"
        initial={{ y: 50, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              A passionate developer with a keen eye for design and user
              experience. Specializing in creating innovative web solutions that
              make a difference.
            </p>
            <p>
              With experience spanning multiple technologies and frameworks, I
              focus on building scalable, maintainable solutions that solve
              real-world problems.
            </p>
          </div>
          <div className="skills-container">
            <h3>Skills</h3>
            <div className="skills-grid">
              {skillsData.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-name">{skill.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
