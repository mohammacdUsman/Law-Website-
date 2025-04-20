import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add('animate-fadeIn');
    }
    if (subtitleRef.current) {
      setTimeout(() => {
        subtitleRef.current?.classList.add('animate-fadeIn');
      }, 300);
    }
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/48148/document-agreement-documents-sign-48148.jpeg" 
          alt="Law background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 
          ref={titleRef}
          className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-4 opacity-0 transition-opacity duration-1000"
        >
          Legal <span className="text-[#D4AF37]">Scholar</span>
        </h1>
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto opacity-0 transition-opacity duration-1000 delay-300"
        >
          Dedicated to the advancement of law through rigorous research and academic excellence
        </p>
        <div className="mt-8 opacity-0 animate-fadeIn animation-delay-500">
          <button className="bg-[#D4AF37] text-black px-6 py-3 rounded font-medium hover:bg-[#B8860B] transition-colors duration-300">
            <a href="./">View Awards</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;