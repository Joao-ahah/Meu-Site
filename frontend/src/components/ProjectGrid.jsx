import React, { useState } from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';

const ProjectGrid = ({ projects, services }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const categoryColors = {
    frontend: 'from-blue-500 to-cyan-500',
    uiux: 'from-purple-500 to-pink-500',
    graphic: 'from-green-500 to-teal-500',
    video: 'from-red-500 to-yellow-500'
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Meus Projetos
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Uma coleção dos meus trabalhos mais recentes, abrangendo desenvolvimento frontend, 
            design UI/UX, design gráfico e edição de vídeo.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeFilter === 'all'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Todos
          </button>
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveFilter(service.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === service.id
                  ? `bg-gradient-to-r ${categoryColors[service.id]} text-white`
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {service.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const categoryColors = {
    frontend: 'from-blue-500 to-cyan-500',
    uiux: 'from-purple-500 to-pink-500',
    graphic: 'from-green-500 to-teal-500',
    video: 'from-red-500 to-yellow-500'
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'video':
        return <Play size={16} />;
      default:
        return <ExternalLink size={16} />;
    }
  };

  return (
    <div className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-gray-800/70 transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-gray-700/50">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${categoryColors[project.category]} text-white`}>
            {project.categoryName}
          </span>
          <div className="flex gap-2">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors duration-200"
              >
                {getCategoryIcon(project.category)}
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors duration-200"
              >
                <Github size={16} />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;