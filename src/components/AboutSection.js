// src/components/AboutSection.js

const AboutSection = ({ personalInfo }) => (
  <section id="about" className="py-20 bg-gray-100">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700">{personalInfo.about}</p>

      <h3 className="text-2xl font-semibold mt-8 mb-4">Skills & Technologies</h3>
      <ul className="list-disc pl-5 text-lg text-gray-700">
        {personalInfo.skills.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </div>
  </section>
);

export default AboutSection;
