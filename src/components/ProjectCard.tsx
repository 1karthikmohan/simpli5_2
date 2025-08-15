import React from "react";

interface Project {
  title: string;
  description: string;
  features: string[];
  images: string[];
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
      {project.images && project.images.length > 0 && (
        <img
          src={project.images[0]}  // ✅ Directly use the path from JSON
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="text-gray-600 text-sm mt-2">{project.description}</p>
        <ul className="list-disc list-inside text-sm text-gray-700 mt-3">
          {project.features.slice(0, 3).map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
