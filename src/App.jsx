import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Blogs from "./pages/Blogs";
import BlogPost1 from "./pages/Blogpost1";
import BlogPost2 from "./pages/Blogpost2";
import BlogPost3 from "./pages/Blogpost3";
import BlogPost4 from "./pages/Blogpost4";
import BlogPost5 from "./pages/Blogpost5";
import BlogPost6 from "./pages/Blogpost6";
import BlogPost7 from "./pages/Blogpost7";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogpost1" element={<BlogPost1 />} />
          <Route path="/blogpost2" element={<BlogPost2 />} />
          <Route path="/blogpost3" element={<BlogPost3 />} />
          <Route path="/blogpost4" element={<BlogPost4 />} />
          <Route path="/blogpost5" element={<BlogPost5 />} />
          <Route path="/blogpost6" element={<BlogPost6 />} />
          <Route path="/blogpost7" element={<BlogPost7 />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
