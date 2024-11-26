// src/app/projects/page.js

import ProjectCard from '../../components/ProjectCard';
import { projects } from '../../data';

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto my-10 p-6">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
}
