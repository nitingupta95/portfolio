import React, { useEffect, useState, useRef } from 'react';
import { Code, ShieldCheck, RadioTower } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      title: "Clean Architecture",
      description: "Building robust, modular codebases that scale across full-stack applications"
    },
    {
      icon: <RadioTower className="w-8 h-8 text-emerald-400" />,
      title: "Real-time Systems",
      description: "Creating interactive apps with live sync, WebSockets, and real-time data"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-yellow-400" />,
      title: "User-Centric Safety",
      description: "Developing apps that prioritize user safety, awareness, and accessibility"
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Full Stack Developer passionate about crafting meaningful digital solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Hi, I'm Nitin — a developer who loves turning ideas into real-world products. Whether it's a collaborative drawing app, a Codeforces student tracker, or an emergency alert system, I build tools that solve problems and improve lives.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                My work blends frontend polish with backend power. I focus on performance, usability, and scalable code. Every project is an opportunity to learn and level up.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  'React',
                  'TypeScript',
                  'Next.js',
                  'Node.js',
                  'MongoDB',
                  'Prisma',
                  'Socket.io',
                  'Tailwind CSS','AWS',
                  'Docker',
                ].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-blue-900/50 text-blue-300 rounded-full text-sm font-medium border border-blue-800">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-gray-900/50 rounded-xl hover:bg-gray-900/70 transition-colors duration-300 border border-gray-700">
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
