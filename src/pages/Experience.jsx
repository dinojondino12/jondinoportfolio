import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import "../style/exp.css";

const experienceData = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    location: "San Francisco, CA",
    description: "Led development of multiple React-based web applications with a focus on performance optimization and accessibility. Implemented CI/CD pipelines and mentored junior developers.",
    technologies: ["React", "TypeScript", "GraphQL", "Jest"]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Agency",
    period: "2019 - 2022",
    location: "Boston, MA",
    description: "Developed and maintained several client projects using modern JavaScript frameworks. Collaborated with UX designers to implement responsive interfaces and RESTful API integrations.",
    technologies: ["Node.js", "React", "MongoDB", "Docker"]
  },
  {
    title: "Web Developer",
    company: "Creative Studio",
    period: "2017 - 2019",
    location: "Austin, TX",
    description: "Built interactive websites for clients across various industries. Focused on responsive design, cross-browser compatibility, and performance optimization.",
    technologies: ["JavaScript", "CSS/SCSS", "PHP", "WordPress"]
  }
];

const Experience = () => {
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

    const experienceSection = document.querySelector(".experience-container");
    if (experienceSection) observer.observe(experienceSection);

    return () => {
      if (experienceSection) observer.unobserve(experienceSection);
    };
  }, []);

  return (
    <div className="experience-container">
      <motion.div
        className="experience-content"
        initial={{ y: 50, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Experience</h2>
        <div className="experience-timeline">
          {experienceData.map((job, index) => (
            <motion.div
              key={`${job.company}-${index}`}
              className="experience-card"
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
            >
              <div className="experience-header">
                <h3>{job.title}</h3>
                <h4>{job.company}</h4>
              </div>
              <div className="experience-meta">
                <span className="meta-item">
                  <FaCalendarAlt className="meta-icon" />
                  {job.period}
                </span>
                <span className="meta-item">
                  <FaMapMarkerAlt className="meta-icon" />
                  {job.location}
                </span>
              </div>
              <p className="experience-description">{job.description}</p>
              <div className="tech-tags">
                {job.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;