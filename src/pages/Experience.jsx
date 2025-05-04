import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import "../style/exp.css";

const experienceData = [
  {
    title: "Software Tester",
    company: "One Zamboanga Evacuation Center Management System",
    period: "Capstone Project | 2024",
    description: "As the tester for our One Zamboanga Evacuation Center Management System capstone project, I was responsible for ensuring the system's accuracy, stability, and overall functionality. The project aimed to streamline the management and monitoring of evacuation centers in Zamboanga during disasters. My role involved writing and executing test cases, performing manual testing, and identifying bugs or inconsistencies in system behavior. I closely collaborated with the development team to report issues, validate fixes, and ensure that the features met both technical specifications and user requirements. This experience helped me sharpen my skills in quality assurance, strengthened my attention to detail, and gave me valuable insights into real-world testing processes for impactful software solutions.",
  },
  {
    title: "Software Tester",
    company: "Western Mindanao State University-Library Attendance System with Real-Time Text Detection",
    period: "Software Engineering Project | 2023-2024",
    description: "As a tester for our Library Attendance System with Real-Time Text Detection project, I was responsible for ensuring the functionality, accuracy, and usability of the system. This software aimed to streamline student check-ins by using real-time OCR to detect and log attendance.My role involved creating and executing test cases, identifying and documenting bugs, and verifying system performance under different scenarios. I closely monitored the accuracy of the text detection feature, especially how it recognized student IDs and names, and helped the team optimize detection reliability. This experience deepened my understanding of quality assurance, software testing methods, and the importance of a user-friendly interface in real-world applications. I also strengthened my communication skills by working closely with developers to troubleshoot and resolve issues efficiently.",
  },
  {
    title: "Front-End Developer",
    company: "Shoesinthehood E-Commerce Website",
    period: "E-Commerce Projects | 2023-2024",
    description: "As the front-end developer for Shoesinthehood, a modern e-commerce website focused on selling footwear, I was responsible for designing and developing an engaging, user-friendly shopping experience.Using HTML, CSS and pytho. I built responsive web pages that allowed users to browse products, filter selections, manage their carts, and complete purchases smoothly. I ensured the interface was mobile-optimized and visually aligned with the brand’s urban, stylish identity.I collaborated with the back-end team to connect real-time product data through APIs and helped implement features like inventory tracking and secure checkout. This project enhanced my skills in UI/UX design, responsive development, and the end-to-end e-commerce flow.",
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
              </div>
              <p className="experience-description">{job.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;