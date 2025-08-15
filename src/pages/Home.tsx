import React from 'react';
import { ArrowRight, Award, Users, Building } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const stats = [
    { icon: Building, label: 'Projects Completed', value: '150+' },
    { icon: Users, label: 'Happy Clients', value: '200+' },
    { icon: Award, label: 'Awards Won', value: '25+' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transforming Spaces,
            <br />
            <span className="text-blue-600">Inspiring Lives</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            At Simpli5 Design Studio, we create innovative and sustainable design solutions 
            that blend functionality with aesthetic excellence. Every project is a journey 
            of creativity, precision, and passion.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onNavigate('projects')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 group"
            >
              View Our Work
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center p-8 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-200">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover our latest design innovations that showcase our commitment 
              to excellence and attention to detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="group cursor-pointer"
                onClick={() => onNavigate('projects')}
              >
                <div className="relative overflow-hidden rounded-xl bg-gray-200 aspect-square mb-4">
                  <img
                    src=src={item === 1 ? "/images/1/1.png" : item === 2 ? "/images/2/1.png" : "/images/3/1.png"}
                    alt={`Featured project ${item}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold">View Project</span>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item === 1 ? 'Vihaara' : item === 2 ? 'Interior Design and Detailing of Spa' : 'Fine Art Campus'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item === 1 ? 'Living green, designed for tomorrow' : item === 2 ? 'Where wellness meets timeless design' : 'Bricks, greens, and spaces that inspire'}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('projects')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center gap-2"
            >
              View All Projects
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;