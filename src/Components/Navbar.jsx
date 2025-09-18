import React from 'react';

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md fixed w-full z-50">
      <div className="text-2xl font-bold">Manraj Kewat</div>
      <div className="space-x-6">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
