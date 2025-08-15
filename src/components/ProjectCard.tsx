import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={10}
          slidesPerView={1}
          className="w-full h-48"
        >
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

        {/* ✅ Keep first 3 features */}
        {project.features && project.features.length > 0 && (
          <ul className="list-disc list-inside text-sm text-gray-700 mt-3">
            {project.features.slice(0, 3).map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
