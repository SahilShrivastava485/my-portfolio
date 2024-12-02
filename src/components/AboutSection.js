// src/components/AboutSection.js

const AboutSection = ({ personalInfo }) => (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-700">{personalInfo.about}</p>
      </div>
    </section>
  );
  
  export default AboutSection;
  