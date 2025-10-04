import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Achievements from './Components/Achievements';
import Contact from './Components/Contact';
import Splash from './Components/Splash';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme on startup
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') setDarkMode(true);
  }, []);

  // Apply / remove dark class on HTML root
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <Router>
      <div
        className={`min-h-screen transition-colors duration-700
        ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}
      >
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<><Navbar darkMode={darkMode} setDarkMode={setDarkMode} /><Hero /></>} />
          <Route path="/about" element={<><Navbar darkMode={darkMode} setDarkMode={setDarkMode} /><About /></>} />
          <Route path="/projects" element={<><Navbar darkMode={darkMode} setDarkMode={setDarkMode} /><Projects /></>} />
          <Route path="/achievements" element={<><Navbar darkMode={darkMode} setDarkMode={setDarkMode} /><Achievements /></>} />
          <Route path="/contact" element={<><Navbar darkMode={darkMode} setDarkMode={setDarkMode} /><Contact /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


