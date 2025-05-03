import "../style/blogpost.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaCalendarDay,
  FaMapMarkerAlt,
  FaUser,
  FaTag,
} from "react-icons/fa";
import img1 from "../assets/day2/1.jpg";
import img2 from "../assets/day2/2.jpg";
import img3 from "../assets/day2/3.jpg";
import img4 from "../assets/day2/4.jpg";
import img5 from "../assets/day2/5.jpg";

const BlogPost2 = ({ day = 2 }) => {
  const [isVisible, setIsVisible] = useState(false);

  const post = {
    day: day,
    title: "Discovering Discipline and Innovation in Subic",
    author: "Jondino Rodrigo",
    location: "Subic Bay",
    date: "April 8, 2025",
    tags: ["EducationalTour", "SubicExperience", "DayTwo"],
    images: [
      {
        src: img5,
        alt: "",
        orientation: "landscape",
      },
      {
        src: img1,
        alt: "",
        orientation: "portrait",
      },
      {
        src: img2,
        alt: "",
        orientation: "portrait",
      },
      {
        src: img3,
        alt: "",
        orientation: "landscape",
      },
      {
        src: img4,
        alt: "",
        orientation: "portrait",
      },
    ],
    content: [
      "On the second day of our educational tour, we traveled to Subic, a place known for its cleanliness, order, and progressive systems. The day promised a deeper look into how discipline and innovation help shape a thriving community.",

      "Our first stop was the Subic Police Station. We were welcomed by officers who shared an insightful talk about the area’s strict traffic rules and overall regulations. They emphasized how discipline is a shared responsibility among the people, contributing to the area's safety and organization.",

      "Listening to the officers, I was amazed at how everyone in the community takes accountability seriously. From following traffic rules to maintaining public cleanliness, their discipline was admirable. It made me reflect on how such practices could improve other cities if adopted widely.",

      "After our visit to the police station, we took a break and had lunch near the beach. The cool breeze, the calming sound of waves, and the company of classmates made it a perfect spot to relax and recharge before heading to our next destination.",

      "In the afternoon, we visited the Subic Port Authority. There, we learned about port operations, management, and how it contributes significantly to both local and international trade. The systems in place were impressive, and it was clear how efficiency plays a crucial role in the success of the port.",

      "Seeing the scale and activity of the port gave me a new perspective on how important logistics and trade are to a country's economy. It was a day full of learning and reflection on how discipline, innovation, and structure contribute to a community’s growth and sustainability.",
    ],
  };

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

    const blogpostSection = document.querySelector(".blogpost-container");
    if (blogpostSection) observer.observe(blogpostSection);

    return () => {
      if (blogpostSection) observer.unobserve(blogpostSection);
    };
  }, []);

  return (
    <div className="blogpost-container">
      <motion.div
        className="blogpost-content"
        initial={{ y: 50, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="blogpost-header">
          <div className="day-badge">Day {post.day}</div>
          <h1>{post.title}</h1>

          <div className="blogpost-meta">
            <div className="meta-item">
              <FaUser className="meta-icon" />
              <span>{post.author}</span>
            </div>
            <div className="meta-item">
              <FaCalendarDay className="meta-icon" />
              <span>{post.date}</span>
            </div>
            <div className="meta-item">
              <FaMapMarkerAlt className="meta-icon" />
              <span>{post.location}</span>
            </div>
          </div>
        </div>

        <div className="blogpost-hero">
          <img
            src={post.images[0].src}
            alt={post.images[0].alt}
            className="hero-image"
          />
        </div>

        <article className="blogpost-article">
          <p className="article-paragraph">{post.content[0]}</p>

          <div className={`article-image ${post.images[1].orientation}`}>
            <img src={post.images[1].src} alt={post.images[1].alt} />
          </div>

          <p className="article-paragraph">{post.content[1]}</p>

          <div className="dual-image-container">
            <div className={`article-image ${post.images[2].orientation}`}>
              <img src={post.images[2].src} alt={post.images[2].alt} />
            </div>

            <p className="article-paragraph dual-content">{post.content[2]}</p>
          </div>

          <p className="article-paragraph">{post.content[3]}</p>

          <div className={`article-image ${post.images[3].orientation}`}>
            <img src={post.images[3].src} alt={post.images[3].alt} />
          </div>

          <div className="split-content">
            <p className="article-paragraph">{post.content[4]}</p>

            <div className={`article-image ${post.images[4].orientation}`}>
              <img src={post.images[4].src} alt={post.images[4].alt} />
            </div>
          </div>

          <p className="article-paragraph">{post.content[5]}</p>
        </article>

        <div className="blogpost-footer">
          <div className="tag-container">
            <FaTag className="tag-icon" />
            <div className="post-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="post-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default BlogPost2;
