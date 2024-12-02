// src/components/HeroSection.js

const HeroSection = ({ personalInfo }) => (
  <section id="hero" className="h-screen bg-gray-900 text-white flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-5xl font-bold">{`Hi, I’m ${personalInfo.name}`}</h1>
      <p className="mt-4 text-xl">{personalInfo.title}</p>
      <p className="mt-6 text-lg">{personalInfo.about}</p>
      <div className="mt-6 space-x-4">
        <a href={personalInfo.contact.linkedin} className="bg-yellow-400 text-black px-6 py-3 rounded-md hover:bg-yellow-500">LinkedIn</a>
        <a href={personalInfo.contact.github} className="bg-gray-700 text-white px-6 py-3 rounded-md hover:bg-gray-600">GitHub</a>
      </div>
    </div>
  </section>
);

export default HeroSection;

  