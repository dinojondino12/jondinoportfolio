import "../style/blogpost.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaCalendarDay,
  FaMapMarkerAlt,
  FaUser,
  FaTag,
} from "react-icons/fa";
import img1 from "../assets/day5/2.jpg";
import img2 from "../assets/day5/1.jpg";
import img3 from "../assets/day5/3.jpg";
import img4 from "../assets/day5/4.jpg";
import img5 from "../assets/day5/5.jpg";

const BlogPost5 = ({ day = 5 }) => {
  const [isVisible, setIsVisible] = useState(false);

  const post = {
    day: day,
    title: "Exploring Safety and Transportation Systems",
    author: "Jondino Rodrigo",
    location: "Metro Manila",
    date: "April 11, 2025",
    tags: ["DayFive", "MMDAExperience", "TrafficManagement", "LRTTour"],
    images: [
      {
        src: img1,
        alt: "Silicon Valley Campus",
        orientation: "landscape",
      },
      {
        src: img4,
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
        src: img5,
        alt: "",
        orientation: "portrait",
      },
    ],
    content: [
      "On Day 5 of our educational tour, we delved into the systems that help manage city life and ensure public safety. We kicked off the day with a visit to the Metropolitan Manila Development Authority (MMDA), where we learned how traffic is monitored and controlled across Metro Manila.",

      "Inside the MMDA headquarters, we got to observe the command center where multiple CCTV monitors displayed real-time footage of traffic from all over the metro. It was fascinating to see how these tools are used not just to spot congestion, but also to respond quickly to accidents, floods, and other emergencies.",

      "The staff explained how traffic enforcers coordinate with the command center to improve flow and safety on the roads. It was eye-opening to learn how much technology and teamwork is involved in managing something we often take for granted—daily transportation.",

      "In the afternoon, we shifted gears and visited an LRT station. It was exciting to explore the system behind one of Metro Manila’s most-used modes of transport. We even had the chance to take a ride on the train, giving us a glimpse of what commuters experience every day.",

      "After the ride, we toured the LRT garage, where the trains are stored, cleaned, and maintained. The scale of operations behind keeping the trains in top shape was impressive. We saw mechanics and staff checking every detail to make sure each ride is safe, clean, and on time.",

      "This day gave us a new appreciation for the people and systems that work behind the scenes to keep a city moving. It was a perfect blend of learning about urban planning, safety, and the importance of public transport in a growing metropolis.",
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

export default BlogPost5;
