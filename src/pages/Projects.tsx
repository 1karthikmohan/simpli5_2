import React from 'react';
import ProjectCard, { Project } from '../components/ProjectCard';

// Import project data
import modernLoftData from '../projects/modern-loft/data.json';
import corporateOfficeData from '../projects/corporate-office/data.json';
import luxuryVillaData from '../projects/luxury-villa/data.json';

const Projects: React.FC = () => {
  // Map imported data to include folder information for image paths
  const projects: Project[] = [
    { ...modernLoftData, folder: 'modern-loft' },
    { ...corporateOfficeData, folder: 'corporate-office' },
    { ...luxuryVillaData, folder: 'luxury-villa' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of exceptional design projects that showcase our commitment 
            to innovation, functionality, and aesthetic excellence.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gray-50 rounded-2xl p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can transform your space into something extraordinary. 
                Every great project starts with a conversation.
              </p>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;