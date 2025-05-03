import { motion } from "framer-motion";
import { useState } from "react";
import "../style/contact.css"
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });

      // Clear success message after 3 seconds
      setTimeout(() => setSubmitMessage(""), 3000);
    }, 1500);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="contact-container">
      <div className="contact-header">
        <h1>Contact</h1>
        <div className="underline"></div>
      </div>

      <div className="contact-content">
        <motion.div
          className="contact-info"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="contact-card" variants={itemVariants}>
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <div className="contact-details">
              <h3>Email</h3>
              <p>
                <a href="mailto:jondino@example.com">jonrodrigodino123@gmail.com</a>
              </p>
            </div>
          </motion.div>

          <motion.div className="contact-card" variants={itemVariants}>
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="contact-details">
              <h3>Location</h3>
              <p>Tetuan, Zamboanga City</p>
            </div>
          </motion.div>

          <motion.div className="contact-card" variants={itemVariants}>
            <div className="contact-icon">
              <FaPhone />
            </div>
            <div className="contact-details">
              <h3>Phone</h3>
              <p>
                <a href="tel:+11234567890">09345617235</a>
              </p>
            </div>
          </motion.div>

          <motion.div className="social-media" variants={itemVariants}>
            <h3>Connect</h3>
            <div className="social-icons">
              <a
                href="https://github.com/dinojondino12"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/jondinorodrigo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/jondinorodrigo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com/jondinorodrigo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="contact-form-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send Me a Message</h2>

            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              />
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitMessage && (
              <motion.p
                className="submit-message"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {submitMessage}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
