// src/app/education/page.js

import { education } from '../../data';

export default function Education() {
  return (
    <div className="max-w-4xl mx-auto my-10 p-6">
      <h1 className="text-3xl font-bold mb-4">Education</h1>
      {education.map((item, idx) => (
        <div key={idx} className="mb-6">
          <h2 className="text-2xl font-semibold">{item.degree}</h2>
          <h3 className="text-xl text-gray-600">{item.institution}</h3>
          <p className="text-gray-500">{item.duration}</p>
        </div>
      ))}
    </div>
  );
}
