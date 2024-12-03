"use client";

import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Trigger when 60% of the section is in view
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect(); // Cleanup observer
  }, []);

  return (
    <nav className="bg-gray-800 text-white fixed w-full z-10 shadow-lg">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Favicon as Navbar Logo */}
        <img src="/favicon.ico" alt="SS Logo" width="40" height="40" className="mr-4" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {['home', 'skills', 'experience', 'education', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`text-lg pb-1 border-b-2 ${
                activeSection === section ? 'border-yellow-400' : 'border-transparent'
              } hover:border-yellow-400`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-16 right-6 bg-gray-800 text-white rounded-lg p-4 space-y-4 w-48">
              {['home', 'skills', 'experience', 'education', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className={`block text-lg ${activeSection === section ? 'border-b-2 border-yellow-400' : 'border-transparent'} hover:border-yellow-400`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
