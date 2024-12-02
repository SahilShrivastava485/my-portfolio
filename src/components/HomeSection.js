// src/components/HomeSection.js

const HomeSection = ({ personalInfo }) => (
  <section id="home" className="h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
    <div className="text-center max-w-4xl mx-auto">
      {/* Profile Picture */}
      <div className="w-32 h-32 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-yellow-400 mx-auto mb-6">
        <img
          src="/profile-pic.jpg"
          alt={`${personalInfo.name}'s profile`}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Hero Text */}
      <h1 className="text-3xl md:text-5xl font-bold">{`Hi, I’m ${personalInfo.name}`}</h1>
      <p className="mt-4 text-lg md:text-xl">{personalInfo.title}</p>
      <p className="mt-6 text-base md:text-lg">{personalInfo.about}</p>

      <div className="mt-6 space-x-4">
        <a href={personalInfo.contact.linkedin} className="bg-yellow-400 text-black px-6 py-3 rounded-md hover:bg-yellow-500">LinkedIn</a>
        <a href={personalInfo.contact.github} className="bg-gray-700 text-white px-6 py-3 rounded-md hover:bg-gray-600">GitHub</a>
      </div>
    </div>
  </section>
);

export default HomeSection;
