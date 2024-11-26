// src/app/experience/page.js

import { experience } from '../../data';

export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto my-10 p-6">
      <h1 className="text-3xl font-bold mb-4">Professional Experience</h1>
      {experience.map((item, idx) => (
        <div key={idx} className="mb-8">
          <h2 className="text-2xl font-semibold">{item.role}</h2>
          <h3 className="text-xl text-gray-600">{item.company}</h3>
          <p className="text-gray-500 mb-2">{item.duration}</p>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            {item.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
