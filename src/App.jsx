// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './Components/Splash';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Achievements from './Components/Achievements';
import Contact from './Components/Contact';

function App() {
  return (
    <Router>
      <div className="font-sans bg-gray-50 text-gray-900">
        <Routes>
          {/* Splash fullscreen page, no Navbar */}
          <Route path="/" element={<Splash />} />

          {/* Main site pages with Navbar */}
          <Route
            path="/home"
            element={
              <>
                <Navbar />
                <Hero />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <About />
              </>
            }
          />
          <Route
            path="/projects"
            element={
              <>
                <Navbar />
                <Projects />
              </>
            }
          />
          <Route
            path="/achievements"
            element={
              <>
                <Navbar />
                <Achievements />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <Contact />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
