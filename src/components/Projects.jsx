import React, { useEffect, useState, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [  
    {
      title: "Draw App",
      description: "A real-time collaborative whiteboard that lets users sketch together using WebSockets and persistent storage.",
      image: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com/nitingupta95/draw-app",
      live: "https://drive.google.com/file/d/1W-VJjeKBKv7rGy35H4C3Cywuc09CGe6r/view" 
    },
    {
      title: "Second Brain App",
      description: "A personal knowledge manager to save YouTube/Twitter links, organize content, and sync in real-time.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React", "Vite", "Socket.io", "MongoDB", "JWT"],
      github: "https://github.com/nitingupta95/SecondBrain",
      live: "https://second-brain-kappa-blush.vercel.app"  
    },
    {
      title: "Student Progress Management System (SPMS)",
      description: "A platform to track students' competitive programming progress, contest performance, and Codeforces stats.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Next.js", "TypeScript", "MongoDB", "Prisma", "Recharts"],
      github: "https://github.com/nitingupta95/SPMS",
      live: "https://drive.google.com/file/d/1phXoHiTYG7SeY7C2plhLfIDPFSZUUg9L/view"  
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio site showcasing projects with smooth animations and modern design.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["React.js", "Javascript", "Framer Motion"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion for development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden group border border-gray-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      className="p-2 bg-gray-800/90 rounded-full hover:bg-gray-700 transition-colors border border-gray-600"
                    >
                      <Github size={16} className="text-gray-200" />
                    </a>
                    <a
                      href={project.live}
                      className="p-2 bg-gray-800/90 rounded-full hover:bg-gray-700 transition-colors border border-gray-600"
                    >
                      <ExternalLink size={16} className="text-gray-200" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm font-medium border border-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;