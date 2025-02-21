import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar = () => {
  return (
    <nav className="navbar">
      <motion.div 
        className="nav-logo"
        whileHover={{ scale: 1.1 }}
      >
        JD
      </motion.div>
      
      <div className="nav-links">
        <motion.div whileHover={{ y: -2 }}>
          <Link to="/">Home</Link>
        </motion.div>
        <motion.div whileHover={{ y: -2 }}>
          <Link to="/about">About</Link>
        </motion.div>
      </div>
    </nav>
  )
}

export default Navbar
