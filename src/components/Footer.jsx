import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4">Portfolio</div>
          <p className="text-gray-400 mb-6">
            Crafting digital experiences with passion and precision
          </p>
          
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>© 2024 All rights reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;