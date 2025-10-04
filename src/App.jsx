import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Splash from './Components/Splash';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Achievements from "./Components/Achievements";
import Contact from './Components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Splash fullscreen page, no navbar */}
        <Route path="/" element={<Splash />} />

        {/* Main site pages with Navbar */}
        <Route path="/home" element={
          <div className="font-sans bg-gray-50 text-gray-900">
            <Navbar />
            <Hero />
          </div>
        } />

        <Route path="/about" element={
          <div className="font-sans bg-gray-50 text-gray-900">
            <Navbar />
            <About />
          </div>
        } />

        <Route path="/projects" element={
          <div className="font-sans bg-gray-50 text-gray-900">
            <Navbar />
            <Projects />
          </div>
        } />

        <Route path="/achievements" element={
          <div className="font-sans bg-gray-50 text-gray-900">
            <Navbar />
            <Achievements />
          </div>
        } />

        <Route path="/contact" element={
          <div className="font-sans bg-gray-50 text-gray-900">
            <Navbar />
            <Contact />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
