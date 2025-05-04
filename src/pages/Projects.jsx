import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import "../style/projects.css";
import poke from "../assets/pokemon.png";
import oz from "../assets/oz.png";
import se from "../assets/se.jpg";
import ecom from "../assets/ecom.jpg";

const projectsData = [
  {
    title: "Pokemon Pokedex with Battle Simulation",
    image: poke,
    technologies: ["ReactJS"],
    liveUrl: "https://pokkomon.netlify.app/",
    featured: true,
  },
  {
    title: "One Zamboanga: An Evacuation Management System for Zamboanga City",
    image: oz,
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    githubUrl: "https://github.com/larenzzx/oneZamboanga_capstone.git",
    featured: true,
  },
  {
    title: "WMSU Library OCR-Library Attendance System",
    image: se,
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    githubUrl: "https://github.com/czeenotfound/ocr-las.git",
    liveUrl: "#",
  },
  {
    title: "Shoesinthehood E-Commerce Website",
    image: ecom,
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    githubUrl: "",
    liveUrl: "",
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("all");

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

    const projectsSection = document.querySelector(".projects-container");
    if (projectsSection) observer.observe(projectsSection);

    return () => {
      if (projectsSection) observer.unobserve(projectsSection);
    };
  }, []);

  // Filter projects based on selected category
  const filteredProjects =
    filter === "featured"
      ? projectsData.filter((project) => project.featured)
      : projectsData;

  return (
    <div className="projects-container">
      <motion.div
        className="projects-content"
        initial={{ y: 50, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Projects</h2>

        <div className="projects-filter">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All Projects
          </button>
          <button
            className={`filter-btn ${filter === "featured" ? "active" : ""}`}
            onClick={() => setFilter("featured")}
          >
            Featured
          </button>
        </div>

        <div className="projects-grid">
          {console.log("Rendered Projects:", filteredProjects)}
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>

                <div className="project-tech">
                  <div className="tech-icon">
                    <FaCode />
                  </div>
                  <div className="project-tech-list">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="project-tech-item">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
