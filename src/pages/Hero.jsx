import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h2>Jondino Rodrigo</h2>
          <h1>Full Stack Developer</h1>
          <p className="hero-description">
            "Turning complex problems into elegant web solutions."
          </p>
          <button className="cta-button">
            <MotionLink to="/contact">Let's Connect</MotionLink>
          </button>
        </div>
        <div className="hero-image">
          <div className="image-container">
            {/* Replace with your actual image */}
            <img
              src="/picture.jpeg"
              alt="Jondino Rodrigo"
              className="floating-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
