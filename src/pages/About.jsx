import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaPython, FaAws } from 'react-icons/fa'

const skillsData = [
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'AWS', icon: <FaAws /> }
]

const About = () => {
  return (
    <div className="about-container">
      <motion.div 
        className="about-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>About Me</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              A passionate developer with a keen eye for design and user experience.
              Specializing in creating innovative web solutions that make a difference.
            </p>
          </div>
          <div className="skills-container">
            <h3>Skills</h3>
            <div className="skills-grid">
              {skillsData.map((skill) => (
                <motion.div 
                  key={skill.name}
                  className="skill-item"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-name">{skill.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default About
