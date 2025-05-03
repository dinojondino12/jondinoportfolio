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
import img2 from "../assets/day2/5.jpg";
import img3 from "../assets/day3/3.jpg";
import img4 from "../assets/day4/4.jpg";
import img5 from "../assets/day5/1.jpg";
import img6 from "../assets/day6/7.jpg";
import img7 from "../assets/day7/2.jpg"

const blogsData = [
  {
    day: 1,
    title: "A Step Back in Time - Exploring Intramuros",
    location: "Intramuros",
    date: "April 7, 2025",
    image: img1,
    featured: true,
    tags: ["EducationalTour", "HistoricalTrip", "DayOne", "PhilippineHistory"],
    link: "/blogpost1",
  },
  {
    day: 2,
    title: "Discovering Discipline and Innovation in Subic",
    location: "Subic Bay",
    date: "April 8, 2025",
    image: img2,
    featured: true,
    tags: ["EducationalTour", "SubicExperience", "DayTwo"],
    link: "/blogpost2",
  },
  {
    day: 3,
    title: "Unveiling History and Heritage",
    location: "National Museum of Natural History",
    date: "April 9, 2025",
    image: img3, 
    featured: false,
    tags: ["DayThree", "PhilippineNationalMuseum", "CulturalHeritage", "ManuelQuezonPark"],
    link: "/blogpost3",
  },
  {
    day: 4,
    title: "From Money to Machines - A Glimpse of Progress",
    location: "Bangko Sentral, Hytec Power, Inc.",
    date: "April 10, 2025",
    image: img4,
    featured: true,
    tags: ["DayFour", "BangkoSentralNgPilipinas", "GoldBarsExperience","HyterPowerInc"],
    link: "/blogpost4",
  },
  {
    day: 5,
    title: "Exploring Safety and Transportation Systems",
    location: "Metro Manila",
    date: "April 11, 2025",
    image: img5,
    featured: false,
    tags: ["DayFive", "MMDAExperience", "TrafficManagement", "LRTTour"],
    link: "/blogpost5",
  },
  {
    day: 6,
    title: "Baguio Highlights - From Strawberries to the Night Market",
    location: "Baguio City",
    date: "April 12, 2025",
    image: img6,
    featured: true,
    tags: ["DaySix", "BaguioAdventure", "StrawberryFarm", "BellChurch"],
    link: "/blogpost6",
  },
  {
    day: 7,
    title: "Rest and Reflection - Wrapping Up the Journey",
    location: "Baguio City",
    date: "April 13, 2025",
    image: img7,
    featured: false,
    tags: ["DaySeven", "RestAndReflection", "BackToQuezonCity"],
    link: "/blogpost7",
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
