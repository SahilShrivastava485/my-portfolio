// src/components/AboutSection.js

const AboutSection = ({ personalInfo }) => (
  <section id="about" className="py-20 bg-gray-100">
    <div className="max-w-6xl mx-auto px-6">
      <h3 className="text-2xl font-semibold mt-8 mb-6">Skills & Technologies</h3>
      <div className="flex space-x-6">
        {/* Frontend Skills Card */}
        <div className="w-1/3 bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-xl font-semibold mb-4">Frontend</h4>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            {personalInfo.skills.frontend.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Backend Skills Card */}
        <div className="w-1/3 bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-xl font-semibold mb-4">Backend</h4>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            {personalInfo.skills.backend.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>

        {/* Database Management Skills Card */}
        <div className="w-1/3 bg-white shadow-lg rounded-lg p-6">
          <h4 className="text-xl font-semibold mb-4">Database Management</h4>
          <ul className="list-disc pl-5 text-lg text-gray-700">
            {personalInfo.skills.database.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
