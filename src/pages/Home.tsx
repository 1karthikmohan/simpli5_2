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
      {/* Project 1 */}
      <div
        className="group cursor-pointer"
        onClick={() => onNavigate('projects')}
      >
        <div className="relative overflow-hidden rounded-xl bg-gray-200 aspect-square mb-4">
          <img
            src="/images/1/1.png"
            alt="Vihara Township"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-semibold">View Project</span>
          </div>
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">Vihaara</h3>
        <p className="text-gray-600 text-sm">Living green, designed for tomorrow</p>
      </div>

      {/* Project 2 */}
      <div
        className="group cursor-pointer"
        onClick={() => onNavigate('projects')}
      >
        <div className="relative overflow-hidden rounded-xl bg-gray-200 aspect-square mb-4">
          <img
            src="/images/2/1.png"
            alt="Spa Interior Design"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-semibold">View Project</span>
          </div>
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">
          Interior Design and Detailing of Spa
        </h3>
        <p className="text-gray-600 text-sm">Where wellness meets timeless design</p>
      </div>

      {/* Project 3 */}
      <div
        className="group cursor-pointer"
        onClick={() => onNavigate('projects')}
      >
        <div className="relative overflow-hidden rounded-xl bg-gray-200 aspect-square mb-4">
          <img
            src="/images/3/1.png"
            alt="Fine Art Campus"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-semibold">View Project</span>
          </div>
        </div>
        <h3 className="font-semibold text-gray-900 mb-2">Fine Art Campus</h3>
        <p className="text-gray-600 text-sm">Bricks, greens, and spaces that inspire</p>
      </div>
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
