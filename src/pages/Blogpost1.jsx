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
import img1 from "../assets/day1/1.jpg";
import img2 from "../assets/day1/2.jpg";
import img3 from "../assets/day1/3.jpg";
import img4 from "../assets/day1/4.jpg";
import img5 from "../assets/day1/5.jpg";

const BlogPost1 = ({ day = 1 }) => {
  
  const [isVisible, setIsVisible] = useState(false);

  // Sample blog post data - would typically come from an API or props
  const post = {
    day: day,
    title: "Footsteps Through History: Discovering Manila’s Iconic Landmarks",
    author: "Jondino Rodrigo",
    location: "Intramuros",
    date: "April 14, 2025",
    tags: ["Technology", "Innovation", "Silicon Valley", "Education"],
    images: [
      {
        src: img5,
        alt: "Silicon Valley Campus",
        orientation: "landscape",
        caption:
          "The impressive campus of a leading tech company in Silicon Valley.",
      },
      {
        src: img1,
        alt: "Innovation Workshop",
        orientation: "portrait",
        caption:
          "Students engaging in an innovation workshop led by industry experts.",
      },
      {
        src: img2,
        alt: "AI Demonstration",
        orientation: "portrait",
        caption:
          "Live demonstration of cutting-edge AI technology applications.",
      },
      {
        src: img3,
        alt: "Group Discussion",
        orientation: "landscape",
        caption:
          "Group discussion about the future of technology and its impact on society.",
      },
      {
        src: img4,
        alt: "Sustainable Tech Lab",
        orientation: "portrait",
        caption: "Inside the sustainable technology research laboratory.",
      },
    ],
    content: [
      "Our educational tour began with visits to leading tech companies in Silicon Valley, exploring innovation labs and learning about cutting-edge technologies that are shaping our future. The day started with an early morning briefing at our hotel before boarding buses to our first destination. The anticipation among students was palpable as we approached the sleek, modern campus of one of the world's most influential technology companies.",

      "Upon arrival, we were greeted by our hosts who provided an overview of the company's history, mission, and vision for the future. What struck me immediately was how the physical space reflected the company's values - open collaborative spaces, sustainable architecture, and technology seamlessly integrated into every aspect of the environment. Students were particularly impressed by the innovation lab, where prototypes of future products were being developed and tested.",

      "The afternoon session included a panel discussion with engineering leaders who shared insights about their career journeys and the skills most valued in today's rapidly evolving tech landscape. Several students asked thoughtful questions about ethical considerations in technology development and how the company approaches issues of privacy and security. The panelists engaged candidly, acknowledging challenges while also highlighting their frameworks for responsible innovation.",

      "One of the most valuable aspects of the day was the hands-on workshop where students were divided into small teams and tasked with ideating solutions to real-world problems using emerging technologies. It was fascinating to observe how quickly they applied concepts they had learned earlier in the day, collaborating effectively despite having met only recently. The creativity and technical sophistication displayed in their proposals impressed even the seasoned industry mentors guiding the activity.",

      "As the day concluded, we gathered for a reflection session where students shared their key takeaways and how the experience had influenced their thinking about future career paths. Many expressed that seeing technology development up close had demystified the process and made their aspirations feel more achievable. Others noted how the visit had broadened their understanding of the diverse roles available within tech companies beyond just programming and engineering.",

      "The day's experiences underscored the value of experiential learning and the importance of bridging academic knowledge with real-world applications. As we returned to our hotel, conversations continued to buzz with excitement about tomorrow's agenda and the new perspectives gained from today's immersion in Silicon Valley's innovation ecosystem.",
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
          <p className="image-caption">{post.images[0].caption}</p>
        </div>

        <article className="blogpost-article">
          <p className="article-paragraph">{post.content[0]}</p>

          <div className={`article-image ${post.images[1].orientation}`}>
            <img src={post.images[1].src} alt={post.images[1].alt} />
            <p className="image-caption">{post.images[1].caption}</p>
          </div>

          <p className="article-paragraph">{post.content[1]}</p>

          <div className="dual-image-container">
            <div className={`article-image ${post.images[2].orientation}`}>
              <img src={post.images[2].src} alt={post.images[2].alt} />
              <p className="image-caption">{post.images[2].caption}</p>
            </div>

            <p className="article-paragraph dual-content">{post.content[2]}</p>
          </div>

          <p className="article-paragraph">{post.content[3]}</p>

          <div className={`article-image ${post.images[3].orientation}`}>
            <img src={post.images[3].src} alt={post.images[3].alt} />
            <p className="image-caption">{post.images[3].caption}</p>
          </div>

          <div className="split-content">
            <p className="article-paragraph">{post.content[4]}</p>

            <div className={`article-image ${post.images[4].orientation}`}>
              <img src={post.images[4].src} alt={post.images[4].alt} />
              <p className="image-caption">{post.images[4].caption}</p>
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

          <div className="share-container">
            <button className="share-button">
              <FaShareAlt className="share-icon" /> Share this post
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogPost1;
