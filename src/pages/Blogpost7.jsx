import "../style/blogpost.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaCalendarDay,
  FaMapMarkerAlt,
  FaUser,
  FaTag,
  FaShareAlt,
} from "react-icons/fa";
import vid from "../assets/day7/1.mp4";

const BlogPost7 = ({ day = 7 }) => {
  const [isVisible, setIsVisible] = useState(false);

  const post = {
    day: day,
    title: "Rest and Reflection - Wrapping Up the Journey",
    author: "Jondino Rodrigo",
    location: "Baguio City",
    date: "April 13, 2025",
    tags: ["DaySeven", "RestAndReflection", "BackToQuezonCity"],
    vid: [
      {
        orientation: "landscape",
      },
      {
        src: vid,
        alt: "",
        orientation: "portrait",
      },
    ],
    content: [
      "",

      "After six eventful days filled with learning, exploration, and adventure, Day 7 was a time to slow down. Knowing we had a long trip back to Quezon City, I took the morning to rest, recharge, and quietly reflect on all the places we had visited. From historical landmarks to modern institutions, every stop along the way taught me something new and left a lasting impression.",

      "The bus ride back gave us even more time to reminisce about the week. My classmates and I shared stories, looked through our photos, and laughed about the little moments that made the tour so special. Though tired, we were all grateful for the experiences and the bonds we had strengthened throughout the journey.",

      "We arrived in Quezon City at around 7 PM and grabbed a quick dinner. As I finally settled in for the night, I felt a mix of exhaustion and fulfillment. This educational tour was more than just a school trip—it was a meaningful adventure that gave me a deeper appreciation for our country, its history, and the people I shared it with.",
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

        <article className="blogpost-article">
          <div className={`article-image ${post.vid[1].orientation}`}>
            <video
              src={post.vid[1].src}
              alt={post.vid[1].alt}
              controls
              loop
              playsInline
            />
          </div>

          <p className="article-paragraph">{post.content[1]}</p>

          <div className="dual-image-container">
            <p className="article-paragraph dual-content">{post.content[2]}</p>
          </div>

          <p className="article-paragraph">{post.content[3]}</p>
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

export default BlogPost7;
