import "../style/blogpost.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaCalendarDay,
  FaMapMarkerAlt,
  FaUser,
  FaTag,
} from "react-icons/fa";
import img1 from "../assets/day1/1.jpg";
import img2 from "../assets/day1/2.jpg";
import img3 from "../assets/day1/3.jpg";
import img4 from "../assets/day1/4.jpg";
import img5 from "../assets/day1/5.jpg";

const BlogPost1 = ({ day = 1 }) => {
  
  const [isVisible, setIsVisible] = useState(false);

  const post = {
    day: day,
    title: "A Step Back in Time - Exploring Intramuros",
    author: "Jondino Rodrigo",
    location: "Intramuros",
    date: "April 7, 2025",
    tags: ["EducationalTour", "DayOne", "PhilippineHistory"],
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
      "On Day 1, we began our educational tour by meeting up at the airport, where I joined my classmates for the exciting journey ahead. The atmosphere was filled with anticipation and energy as we greeted each other and prepared for the days to come.",

      "Once everyone had arrived, we headed straight to the DJM Dorm to settle in. After checking into our rooms and unpacking, we took a much-needed break for lunch and some rest. It was a great way to refresh ourselves before diving into the day's main activities.",

      "In the afternoon, we officially kicked off our tour with our first destination: Intramuros. This historic site served as a powerful introduction to the rich cultural heritage of the Philippines and set the tone for the rest of our trip.",

      "Our tour guide gave us a detailed explanation of Intramuros' history, emphasizing how it was the heart of Spanish Manila and played a crucial role in shaping our country’s past. Hearing these stories while walking through cobblestone streets and seeing centuries-old architecture truly made the experience come alive.",

      "As I explored the area, I couldn’t help but feel like I was stepping back in time. The preserved buildings and historical ambiance offered a glimpse into the past, sparking curiosity and appreciation for our nation’s history.",

      "After all the learning and walking, we wrapped up the day at SM Mall of Asia (MOA). It was the perfect place to relax, grab a bite to eat, and enjoy some free time with friends. The combination of historical insight and modern leisure made for a memorable first day of our tour.",
    ],
  };

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

export default BlogPost1;
