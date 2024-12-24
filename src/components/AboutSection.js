'use client'

const AboutSection = ({ personalInfo }) => (
  <section id="skills" className="py-20 bg-gray-100">
    <div className="max-w-6xl mx-auto px-6">
      <h3 className="text-2xl font-semibold mt-8 mb-6">Skills & Technologies</h3>
      {/* Grid Layout for 2 Cards per Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Object.keys(personalInfo.skills).map((category, idx) => (
          <div key={idx} className="bg-white shadow-lg rounded-lg p-6">
            <h4 className="text-xl font-semibold mb-4 capitalize">{category}</h4>
            <ul className="list-disc pl-5 text-lg text-gray-700">
              {personalInfo.skills[category].map((skill, skillIdx) => (
                <li key={skillIdx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
