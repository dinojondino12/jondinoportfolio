import "../style/blogpost.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaCalendarDay,
  FaMapMarkerAlt,
  FaUser,
  FaTag,
} from "react-icons/fa";
import img1 from "../assets/day6/8.jpg";
import img2 from "../assets/day6/1.jpg";
import img3 from "../assets/day6/6.jpg";
import img4 from "../assets/day6/4.jpg";
import img5 from "../assets/day6/5.jpg";

const BlogPost6 = ({ day = 6 }) => {
  const [isVisible, setIsVisible] = useState(false);

  const post = {
    day: day,
    title: "Baguio Highlights - From Strawberries to the Night Market",
    author: "Jondino Rodrigo",
    location: "Baguio City",
    date: "April 12, 2025",
    tags: ["DaySix", "BaguioAdventure", "StrawberryFarm", "BellChurch"],
    images: [
      {
        src: img1,
        alt: "",
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
      "Our sixth day was an early start—we woke up at 1 AM to prepare for the long drive to Baguio. After a few hours on the road, we finally arrived at around 6 AM, greeted by the cool breeze and scenic views that Baguio is known for. We kicked off our day with a visit to the famous strawberry farm, where we saw rows of fresh strawberries and enjoyed buying pasalubong to bring home to our families.",

      "Afterward, we stopped by the Bell Church, a peaceful place with stunning architecture that beautifully blends Chinese and Filipino design. The serenity of the surroundings, along with the intricate details of the temple, created a calming atmosphere. It was a quiet moment of reflection amid our busy tour.",

      "By mid-morning, we headed to our hotel for breakfast and some well-needed rest. Later in the afternoon, our next destination was the Philippine Military Academy (PMA). There, we learned about the rigorous training and strong discipline that shape the country’s future military leaders. Seeing the cadets and their routines was truly inspiring.",

      "Following that, we visited The Mansion, the official summer residence of the Philippine president. Its grand gates and beautifully landscaped gardens made it a popular photo spot. The place was not just historic but also visually stunning—perfect for soaking in the fresh mountain air.",

      "We then made our way to Mines View Park, one of Baguio's most popular tourist spots. From there, we enjoyed a panoramic view of the mountains and valleys. We also explored nearby souvenir shops and picked up even more local goods and crafts to remember the trip by.",

      "To end our adventure-filled day, we stopped at Burnham Park for a relaxing stroll before diving into the lively and bustling Baguio Night Market. The market was filled with affordable clothes, especially ukay-ukay, and a variety of souvenirs. It was the perfect way to cap off the day—shopping, laughing, and bonding with classmates under the cool Baguio night sky.",
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

export default BlogPost6;
