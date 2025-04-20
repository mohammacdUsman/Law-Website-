import React from 'react';
import { BookOpenText, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <BookOpenText className="h-8 w-8 text-[#D4AF37]" />
            <span className="ml-2 text-[#D4AF37] font-serif text-xl font-bold">Shan Ali</span>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-white hover:text-[#D4AF37] transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-white hover:text-[#D4AF37] transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-white hover:text-[#D4AF37] transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-white hover:text-[#D4AF37] transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-800 pt-8 text-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Shan ali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;