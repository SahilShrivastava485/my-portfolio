const ProjectCard = ({ title, description, link }) => (
    <div className="bg-white shadow-xl rounded-lg p-6 transition-all duration-300 ease-in-out hover:shadow-2xl">
      <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      <p className="mt-4 text-gray-600">{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-blue-500 hover:text-blue-700">View on GitHub</a>
      )}
    </div>
  );
  
  export default ProjectCard;
  