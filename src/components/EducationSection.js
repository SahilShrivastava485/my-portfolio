// src/components/EducationSection.js

const EducationSection = ({ education }) => (
  <section id="education" className="py-20 bg-gray-100">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8">Education</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((item, idx) => (
          <div key={idx} className="bg-white shadow-lg rounded-lg p-6 flex items-center gap-6">
            {/* Logo or Image */}
            <img
              src={item.logo}
              alt={`${item.institution} logo`}
              className="w-16 h-16 object-contain"
            />
            <div>
              <h3 className="text-2xl font-semibold">{item.degree}</h3>
              <h4 className="text-xl text-gray-600">{item.institution}</h4>
              <p className="text-gray-500">{item.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
