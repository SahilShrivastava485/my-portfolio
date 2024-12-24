'use client'

import { useState } from "react";

const ExperienceSection = ({ experience }) => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active tab

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
        <div className="flex flex-col sm:flex-row">
          {/* Left-Side Tabs */}
          <div className="sm:w-1/3 flex sm:flex-col flex-row gap-4 sm:mr-8 mb-6 sm:mb-0">
            {experience.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-full text-left px-4 py-5 flex items-center gap-4 border-b border-gray-300 rounded-lg sm:mb-4 ${activeIndex === idx
                    ? "bg-gray-200 text-blue-600"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {/* Logo */}
                <img
                  src={item.logo}
                  alt={`${item.company} logo`}
                  className="w-12 h-12 object-contain"
                />
                {/* Company and Date */}
                <div>
                  <h4 className="text-lg font-semibold">{item.company}</h4>
                  <p className="text-sm text-gray-500">{item.duration}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Right-Side Content Card */}
          <div className="sm:w-2/3 p-6 bg-gray-100 shadow-lg rounded-lg h-96 overflow-hidden flex flex-col">
            {/* Title */}
            <h3 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-gray-300 pb-2">
              {experience[activeIndex].role}
            </h3>

            {/* Description List */}
            <div className="flex-grow overflow-y-auto">
              <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
                {experience[activeIndex].description.map((point, idx) => (
                  <li key={idx} className="hover:text-blue-500 transition-all duration-300">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
