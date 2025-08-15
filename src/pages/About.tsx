import React from 'react';
import { Target, Eye, Heart, Award } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To create innovative and sustainable design solutions that transform spaces and enhance lives through thoughtful, functional, and beautiful design.'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'To be the leading design studio recognized for excellence, creativity, and our commitment to sustainable and human-centered design practices.'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Integrity, creativity, sustainability, and collaboration guide every project. We believe great design should be accessible, functional, and environmentally responsible.'
    },
    {
      icon: Award,
      title: 'Our Excellence',
      description: 'With over a decade of experience and numerous awards, we consistently deliver exceptional results that exceed client expectations and industry standards.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Simpli5</span> Design Studio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Founded on the principle that great design can transform not just spaces, 
              but lives, we are passionate creators dedicated to bringing your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Established in 2014, Simpli5 Design Studio began as a small team of passionate 
                  designers with a shared vision: to create spaces that not only look beautiful 
                  but truly enhance the way people live, work, and interact.
                </p>
                <p>
                  Over the years, we've grown into a full-service design studio, but we've never 
                  lost sight of what makes us unique – our commitment to understanding each client's 
                  individual needs and translating them into spaces that reflect their personality 
                  and lifestyle.
                </p>
                <p>
                  Today, we're proud to have completed over 150 projects, from intimate residential 
                  spaces to large commercial developments. Each project is a testament to our belief 
                  that thoughtful design has the power to transform lives and communities.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Design team working on blueprints"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Drives Us</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our core values and principles that guide every project and decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Founder</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Passionate leadership driving innovation in design and architecture.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sarah Johnson</h3>
                <p className="text-blue-600 font-semibold mb-6">Founder & Principal Designer</p>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    With over 15 years of experience in architecture and interior design, 
                    Sarah founded Simpli5 with a vision to create spaces that truly serve 
                    the people who inhabit them.
                  </p>
                  <p>
                    A graduate of the Rhode Island School of Design, Sarah's work has been 
                    featured in numerous design publications and has received recognition 
                    from the American Institute of Architects.
                  </p>
                  <p>
                    When she's not designing, Sarah enjoys traveling to discover new design 
                    inspirations and spending time with her family in their own thoughtfully 
                    designed home.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500"
                    alt="Sarah Johnson, Founder of Simpli5 Design Studio"
                    className="rounded-xl shadow-lg w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;