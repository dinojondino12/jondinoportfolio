import "../style/blogs.css";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaCalendarDay,
  FaMapMarkerAlt,
  FaClock,
  FaChevronRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "../assets/day1/5.jpg";

const blogsData = [
  {
    day: 1,
    title: "Footsteps Through History: Discovering Manila’s Iconic Landmarks",
    location: "San Francisco, CA",
    date: "March 15, 2025",
    readTime: "6 min read",
    image: img1,
    featured: true,
    tags: ["Technology", "Innovation", "Silicon Valley"],
    link: "/blogpost1",
  },
  {
    day: 2,
    title: "Workshops at Stanford University",
    location: "Palo Alto, CA",
    date: "March 16, 2025",
    readTime: "8 min read",
    image: "/images/blog-day2.jpg",
    featured: true,
    tags: ["Education", "Workshops", "Stanford"],
    link: "/",
  },
  {
    day: 3,
    title: "Sustainable Tech Solutions",
    location: "Berkeley, CA",
    date: "March 17, 2025",
    readTime: "5 min read",
    image: "/images/blog-day3.jpg", 
    featured: false,
    tags: ["Sustainability", "Climate Tech", "Green Solutions"],
    link: "/",
  },
  {
    day: 4,
    title: "Startup Ecosystem Deep Dive",
    location: "San Francisco, CA",
    date: "March 18, 2025",
    readTime: "7 min read",
    image: "/images/blog-day4.jpg",
    featured: true,
    tags: ["Startups", "Entrepreneurship", "Venture Capital"],
    link: "/",
  },
  {
    day: 5,
    title: "AI and Machine Learning Breakthroughs",
    location: "Mountain View, CA",
    date: "March 19, 2025",
    readTime: "9 min read",
    image: "/images/blog-day5.jpg",
    featured: false,
    tags: ["AI", "Machine Learning", "Technology"],
    link: "/",
  },
  {
    day: 6,
    title: "Design Thinking Workshop",
    location: "Cupertino, CA",
    date: "March 20, 2025",
    readTime: "6 min read",
    image: "/images/blog-day6.jpg",
    featured: false,
    tags: ["Design", "User Experience", "Innovation"],
    link: "/",
  },
  {
    day: 7,
    title: "Future of Work and Technology",
    location: "San Jose, CA",
    date: "March 21, 2025",
    readTime: "8 min read",
    image: "/images/blog-day7.jpg",
    featured: true,
    tags: ["Future of Work", "Remote Work", "Digital Transformation"],
    link: "/",
  },
];

const Blogs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("all");
  const [selectedDay, setSelectedDay] = useState(null);

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

    const blogsSection = document.querySelector(".blogs-container");
    if (blogsSection) observer.observe(blogsSection);

    return () => {
      if (blogsSection) observer.unobserve(blogsSection);
    };
  }, []);

  // Filter blogs based on selected category
  const filteredBlogs =
    filter === "featured"
      ? blogsData.filter((blog) => blog.featured)
      : selectedDay !== null
      ? blogsData.filter((blog) => blog.day === selectedDay)
      : blogsData;

  // Sort blogs by day number
  const sortedBlogs = [...filteredBlogs].sort((a, b) => a.day - b.day);

  return (
    <div className="blogs-container">
      <motion.div
        className="blogs-content"
        initial={{ y: 50, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Educational Tour Blog</h2>

        <div className="blogs-filters">
          <div className="filter-buttons">
            <button
              className={`filter-btn ${
                filter === "all" && selectedDay === null ? "active" : ""
              }`}
              onClick={() => {
                setFilter("all");
                setSelectedDay(null);
              }}
            >
              All Days
            </button>
            <button
              className={`filter-btn ${filter === "featured" ? "active" : ""}`}
              onClick={() => {
                setFilter("featured");
                setSelectedDay(null);
              }}
            >
              Featured
            </button>
          </div>

          <div className="day-selector">
            {Array.from({ length: 7 }, (_, i) => i + 1).map((day) => (
              <button
                key={day}
                className={`day-btn ${selectedDay === day ? "active" : ""}`}
                onClick={() => {
                  setSelectedDay(day);
                  setFilter("all");
                }}
              >
                Day {day}
              </button>
            ))}
          </div>
        </div>

        <div className="blogs-grid">
          {sortedBlogs.map((blog, index) => (
            <motion.article
              key={blog.day}
              className="blog-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.15 * index }}
              whileHover={{ y: -8 }}
            >
              <div className="blog-image-container">
                <div className="blog-day-badge">Day {blog.day}</div>
                <img
                  src={blog.image}
                  alt={`Day ${blog.day} - ${blog.title}`}
                  className="blog-image"
                />
              </div>

              <div className="blog-content">
                <h3>{blog.title}</h3>

                <div className="blog-meta">
                  <div className="meta-item">
                    <FaCalendarDay className="meta-icon" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="meta-item">
                    <FaMapMarkerAlt className="meta-icon" />
                    <span>{blog.location}</span>
                  </div>
                  <div className="meta-item">
                    <FaClock className="meta-icon" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <div className="blog-footer">
                  <div className="blog-tags">
                    {blog.tags.map((tag) => (
                      <span key={tag} className="blog-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link to={blog.link} className="read-more-btn">
                    Read More <FaChevronRight className="read-more-icon" />
                  </Link >
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Blogs;
