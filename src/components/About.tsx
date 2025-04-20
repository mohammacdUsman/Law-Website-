import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

import cv from "../../asset/CV-Shan Ali (5).pdf"
import img from "../../asset/logo.jpg"

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div 
        ref={sectionRef}
        className={`container mx-auto px-4 sm:px-6 lg:px-8 opacity-0 ${isInView ? 'animate-fadeIn' : ''}`}
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src={img} 
                alt="Law professional" 
                className="rounded-lg shadow-2xl w-full object-cover"
                style={{ height: '500px' }}
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#D4AF37] rounded-full flex items-center justify-center">
                <span className="text-black font-serif font-bold text-lg">Ph.D.</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Weclome to <span className="text-[#D4AF37]">Shan Ali Website</span>
            </h2>
            <p className="text-white/80 mb-4 leading-relaxed">
              I am a dedicated legal scholar with a passion for exploring the intersection of law and technology. My academic journey has taken me across multiple countries, providing me with a global perspective on legal systems.
            </p>
            <p className="text-white/80 mb-6 leading-relaxed">
              Currently pursuing my Ph.D. at the prestigious University of Padova, I am researching digital rhetoric and the legal applications of blockchain technology on Web 3.0. This cutting-edge research combines my interests in law, technology, and digital innovation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="bg-black/50 p-4 rounded-lg border border-[#D4AF37]/20">
                <h3 className="text-[#D4AF37] text-lg font-medium mb-2">Research Focus</h3>
                <p className="text-white/70">Blockchain Law & Digital Rhetoric</p>
              </div>
              <div className="bg-black/50 p-4 rounded-lg border border-[#D4AF37]/20">
                <h3 className="text-[#D4AF37] text-lg font-medium mb-2">Languages</h3>
                <p className="text-white/70">English, Italian, Urdu</p>
              </div>
            </div>
            {/* <button className="border-2 border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded font-medium hover:bg-[#D4AF37] hover:text-black transition-colors duration-300">
              <a href="images\CV-Shan Ali (5).pdf"  target="_blank" rel="noopener noreferrer" title='Shan CV'> Download CV</a>
            </button> */}

          
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
