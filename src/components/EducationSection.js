// src/components/EducationSection.js

const EducationSection = ({ education }) => (
  <section id="education" className="py-20 bg-gray-100">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-4">Education</h2>
      {education.map((item, idx) => (
        <div key={idx} className="mb-6">
          <h3 className="text-2xl font-semibold">{item.degree}</h3>
          <h4 className="text-xl text-gray-600">{item.institution}</h4>
          <p className="text-gray-500">{item.duration}</p>
        </div>
      ))}
    </div>
  </section>
);

export default EducationSection;
