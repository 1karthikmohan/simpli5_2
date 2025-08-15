import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
        <Swiper spaceBetween={10} slidesPerView={1} loop={true}>
          {project.images.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt={`${project.title} ${i}`}
                className="w-full h-48 object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <div className="p-4">
        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="text-gray-600 text-sm mt-2">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
