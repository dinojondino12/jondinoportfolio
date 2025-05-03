import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen size is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClick = () => setIsOpen(false);
    setTimeout(() => {
      window.addEventListener("click", handleClick);
    }, 0);

    return () => window.removeEventListener("click", handleClick);
  }, [isOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const navLinks = [
    { to: "/", text: "Home" },
    { to: "/about", text: "About" },
    { to: "/experience", text: "Experience" },
    { to: "/projects", text: "Projects" },
    { to: "/blogs", text: "Blogs" },
  ];

  return (
    <nav className="navbar">
      <motion.div className="nav-logo" whileHover={{ scale: 1.1 }}>
        JD
      </motion.div>

      {/* Desktop Menu */}
      <div className="nav-links desktop-nav">
        {navLinks.map((link, index) => (
          <motion.div key={index} whileHover={{ y: -2 }}>
            <Link to={link.to}>{link.text}</Link>
          </motion.div>
        ))}
      </div>

      {/* Mobile Hamburger Button */}
      <div className="hamburger-container">
        <button
          className="hamburger-button"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          aria-label="Menu"
        >
          <div className={`hamburger-line ${isOpen ? "open" : ""}`}></div>
          <div className={`hamburger-line ${isOpen ? "open" : ""}`}></div>
          <div className={`hamburger-line ${isOpen ? "open" : ""}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ type: "tween" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mobile-nav-links">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ x: 10 }}
                >
                  <Link to={link.to} onClick={() => setIsOpen(false)}>
                    {link.text}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
