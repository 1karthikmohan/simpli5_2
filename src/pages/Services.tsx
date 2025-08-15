import React from 'react';
import { Home, Building2, Trees, MessageSquare, Ruler, Palette, Lightbulb, Settings } from 'lucide-react';

const Services: React.FC = () => {
  const mainServices = [
    {
      icon: Home,
      title: 'Residential Design',
      description: 'Transform your home into a personalized sanctuary that reflects your lifestyle and enhances your daily living experience.',
      features: ['Interior Design', 'Space Planning', 'Custom Furniture', 'Color Consultation']
    },
    {
      icon: Building2,
      title: 'Commercial Design',
      description: 'Create inspiring work environments that boost productivity, reflect your brand, and leave lasting impressions on clients.',
      features: ['Office Design', 'Retail Spaces', 'Restaurant Design', 'Brand Integration']
    },
    {
      icon: Trees,
      title: 'Landscape Design',
      description: 'Design outdoor spaces that seamlessly blend with your architecture and create beautiful, functional environments.',
      features: ['Garden Design', 'Hardscape Planning', 'Sustainable Solutions', 'Outdoor Living']
    },
    {
      icon: MessageSquare,
      title: 'Design Consultation',
      description: 'Expert guidance and professional advice to help you make informed decisions about your design projects.',
      features: ['Design Strategy', 'Material Selection', 'Budget Planning', 'Project Timeline']
    }
  ];

  const additionalServices = [
    {
      icon: Ruler,
      title: 'Space Planning',
      description: 'Optimize your space for maximum functionality and flow.'
    },
    {
      icon: Palette,
      title: 'Color & Material Selection',
      description: 'Expert guidance on colors, textures, and materials.'
    },
    {
      icon: Lightbulb,
      title: 'Lighting Design',
      description: 'Create the perfect ambiance with professional lighting.'
    },
    {
      icon: Settings,
      title: 'Project Management',
      description: 'End-to-end management of your design project.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we offer comprehensive design services 
            tailored to bring your vision to life with precision and creativity.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="p-4 bg-blue-100 rounded-xl">
                        <Icon className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-gray-600 flex items-center">
                              <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Specialized services to complement your main design project and ensure every detail is perfect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Design Process</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A structured approach that ensures exceptional results from initial consultation to final reveal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Understanding your vision, needs, and budget' },
              { step: '02', title: 'Concept', description: 'Creating initial designs and mood boards' },
              { step: '03', title: 'Development', description: 'Refining details and finalizing specifications' },
              { step: '04', title: 'Implementation', description: 'Managing execution and final installation' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;