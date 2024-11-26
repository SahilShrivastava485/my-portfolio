// src/app/about/page.js

import { personalInfo } from '../../data';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto my-10 p-6">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-lg text-gray-700 mb-4">{personalInfo.about}</p>

      <h2 className="text-2xl font-semibold mb-2">Skills & Technologies</h2>
      <ul className="list-disc pl-5 text-lg text-gray-700">
        {personalInfo.skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
