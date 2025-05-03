import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import "../style/projects.css"

const projectsData = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping platform with cart functionality, user authentication, and payment processing integration.",
    image: "/images/project-ecommerce.jpg", // Replace with your image path
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://ecommerce-platform-demo.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A drag-and-drop task management application with real-time updates, user collaboration, and automated reminders.",
    image: "/images/project-taskapp.jpg", // Replace with your image path
    technologies: ["React", "Firebase", "Material UI", "Socket.io"],
    githubUrl: "https://github.com/yourusername/task-management",
    liveUrl: "https://task-app-demo.com",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather application that provides real-time weather data and forecasts based on user location or search.",
    image: "/images/project-weather.jpg", // Replace with your image path
    technologies: [
      "JavaScript",
      "OpenWeather API",
      "Chart.js",
      "Geolocation API",
    ],
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.com",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing my projects and skills with modern UI/UX design principles.",
    image: "/images/project-portfolio.jpg", // Replace with your image path
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/portfolio-website",
    liveUrl: "https://yourportfolio.com",
  },
  {
    title: "Recipe Finder App",
    description:
      "An application that helps users find recipes based on ingredients they have, dietary restrictions, and cuisine preferences.",
    image: "/images/project-recipe.jpg", // Replace with your image path
    technologies: ["React Native", "Redux", "Spoonacular API"],
    githubUrl: "https://github.com/yourusername/recipe-finder",
    liveUrl: "https://recipe-finder-demo.com",
  },
  {
    title: "News Aggregator",
    description:
      "A news aggregation platform that collects and categorizes news from various sources with personalized recommendations.",
    image: "/images/project-news.jpg", // Replace with your image path
    technologies: ["Vue.js", "Node.js", "Express", "News API"],
    githubUrl: "https://github.com/yourusername/news-aggregator",
    liveUrl: "https://news-aggregator-demo.com",
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
                <p>{project.description}</p>

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
