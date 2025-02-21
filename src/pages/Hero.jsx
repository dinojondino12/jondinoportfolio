import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Jondino Rodrigo</h1>
          <h2>Full Stack Developer</h2>
          <p className="hero-description">
          "Turning complex problems into elegant web solutions."
          </p>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Let's Connect
          </motion.button>
        </motion.div>
        
        <motion.div 
          className="hero-image"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="image-container">
            <img src="/picture.jpeg" alt="Doge" className="floating-image" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
