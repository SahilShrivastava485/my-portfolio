// src/components/ExperienceSection.js

const ExperienceSection = ({ experience }) => (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
        {experience.map((item, idx) => (
          <div key={idx} className="mb-8">
            <h3 className="text-2xl font-semibold">{item.role}</h3>
            <h4 className="text-xl text-gray-600">{item.company}</h4>
            <p className="text-gray-500 mb-2">{item.duration}</p>
            <ul className="list-disc pl-5 text-lg text-gray-700">
              {item.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
  
  export default ExperienceSection;
  