import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Achievements from "./Components/Achievements";




function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;

