import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=1ZRMqvlqKj7qx3BP1P904YYygeXVYVBOC"
    link.download = "Nitin-Resume.pdf"; 
    link.click(); 
  };



  
     
    
    


  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 pt-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Creative
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              {' '}Developer
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful, functional, and user-centered digital experiences
            that make a difference in the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            
             <button onClick={downloadResume}  className="flex items-center gap-2 text-gray-300 px-8 py-4 rounded-lg font-medium hover:text-blue-400 hover:bg-gray-800 transition-all duration-300 border border-gray-700 hover:border-blue-500">
              <Download size={20} />
              Download CV
            </button> 

          </div>

           
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-500 hover:text-blue-400 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;