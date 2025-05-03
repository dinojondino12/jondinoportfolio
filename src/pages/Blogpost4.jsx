import "../style/blogpost.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaCalendarDay,
  FaMapMarkerAlt,
  FaUser,
  FaTag,
} from "react-icons/fa";
import img1 from "../assets/day4/2.jpg";
import img2 from "../assets/day4/1.jpg";
import img3 from "../assets/day4/3.jpg";
import img4 from "../assets/day4/4.jpg";
import img5 from "../assets/day4/5.jpg";

const BlogPost4 = ({ day = 4 }) => {
  const [isVisible, setIsVisible] = useState(false);

  const post = {
    day: day,
    title: "From Money to Machines - A Glimpse of Progress",
    author: "Jondino Rodrigo",
    location: "Bangko Sentral, Hytec Power, Inc.",
    date: "April 10, 2025",
    tags: ["DayFour", "BangkoSentralNgPilipinas", "GoldBarsExperience","HyterPowerInc"],
    images: [
      {
        src: img4,
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
        src: img5,
        alt: "",
        orientation: "portrait",
      },
    ],
    content: [
      "Our fourth day of the educational tour took us on a journey through both the financial and technological advancements of our country. We began with a visit to the Bangko Sentral ng Pilipinas, where we witnessed firsthand how our currency is made, managed, and protected.",

      "The tour gave us a step-by-step look at the printing process for bills and the minting of coins. I was especially fascinated by the security measures in place, ensuring that every piece of currency is authentic and tamper-proof. It was a whole new world behind something we use every day without thinking much about it.",

      "One of the highlights of the visit was seeing real gold bars up close. They were heavy, gleaming, and closely guarded, reminding us of the value they represent in our economy. We also learned about how damaged or rejected currency is recycled and turned into new, usable money. It gave me a deeper appreciation of how secure and organized our financial system is.",

      "After lunch, we continued our tour with a visit to Hyter Power Inc., a company at the forefront of innovation and automation. Walking into their facility felt like stepping into the future, where robots and machines worked in perfect harmony.",

      "We observed automated tools and robotic arms designed to assist in various tasks, making operations faster, more precise, and safer for workers. Watching them in action felt like witnessing scenes from a sci-fi movie, but this was real life—happening right in front of us.",

      "This visit opened my eyes to the exciting potential of technology. It showed us how innovation is shaping the way we live and work, offering solutions that not only boost efficiency but also prioritize safety and quality. It was a powerful reminder of how progress can be both practical and inspiring.",
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

export default BlogPost4;
