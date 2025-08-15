import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  features: string[];
  images: string[];
  folder?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);

  useEffect(() => {
    setImagesLoaded(new Array(project.images.length).fill(false));
  }, [project.images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleImageLoad = (index: number) => {
    setImagesLoaded(prev => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  const getImagePath = (imageName: string) => {
    if (project.folder) {
      return `/src/projects/${project.folder}/images/${imageName}`;
    }
    return imageName;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
      {/* Image Carousel */}
      <div className="relative h-64 bg-gray-100">
        {project.images.length > 0 && (
          <>
            <img
              src={getImagePath(project.images[currentImageIndex])}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                imagesLoaded[currentImageIndex] ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => handleImageLoad(currentImageIndex)}
              loading="lazy"
            />
            
            {/* Loading skeleton */}
            {!imagesLoaded[currentImageIndex] && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                <div className="text-gray-400 text-sm">Loading...</div>
              </div>
            )}

            {/* Navigation buttons - only show if multiple images */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-4 w-4 text-gray-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-white"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-4 w-4 text-gray-700" />
                </button>

                {/* Dots indicator */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                        index === currentImageIndex 
                          ? 'bg-white' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
        
        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
              Key Features
            </h4>
            <ul className="space-y-1">
              {project.features.map((feature, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;