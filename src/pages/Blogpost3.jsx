import "../style/blogpost.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaCalendarDay,
  FaMapMarkerAlt,
  FaUser,
  FaTag,
} from "react-icons/fa";
import img1 from "../assets/day3/1.jpg";
import img2 from "../assets/day3/2.jpg";
import img3 from "../assets/day3/3.jpg";
import img4 from "../assets/day3/4.jpg";
import img5 from "../assets/day3/5.jpg";

const BlogPost3 = ({ day = 3 }) => {
  const [isVisible, setIsVisible] = useState(false);

  const post = {
    day: day,
    title: "Unveiling History and Heritage",
    author: "Jondino Rodrigo",
    location: "National Museum of Natural History",
    date: "April 9, 2025",
    tags: ["EducationalTour", "HistoricalTrip", "DayOne", "PhilippineHistory"],
    images: [
      {
        src: img3,
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
        src: img5,
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
      "On the third day of our educational tour, we took a meaningful dive into the nation's past by visiting the Philippine National Museum. It was an enriching experience as we explored a wide range of exhibits—from ancient artifacts to intricate artworks that showcased the depth and beauty of Filipino culture.",

      "As we walked through the museum halls, our tour guide offered detailed explanations about each exhibit. We took plenty of pictures, capturing not only the displays but also the moments of awe and discovery. Every piece told a story, deepening our understanding of the Philippines' diverse heritage and historical roots.",

      "In the afternoon, we made our way to Manuel Quezon Park. The calm and serene atmosphere of the park allowed us to reflect on the legacy of President Manuel Quezon, the first president of the Philippine Commonwealth. The guide shared his achievements and contributions, which helped us connect more personally with this iconic historical figure.",

      "Standing in the park, surrounded by nature and monuments, I felt a sense of pride and gratitude. It was a reminder of the sacrifices made by past leaders and how their leadership shaped the future we live in today.",

      "Our final stop for the day was the Museo ng Pampangulong Sasakyan. This unique museum showcased the official vehicles used by past presidents of the Philippines. Each car had a story, and the guide took us through the timeline of changes in both design and function, reflecting how the role of the presidency evolved through the years.",

      "Seeing these presidential vehicles up close was both fascinating and informative. It offered a different angle on history—one that highlighted leadership, modernization, and the symbols of national progress over time. It was the perfect way to end a day dedicated to exploring our country’s rich and layered history.",
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

export default BlogPost3;
