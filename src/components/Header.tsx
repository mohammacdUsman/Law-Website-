import React from 'react';
import { BookOpenText } from 'lucide-react';
import { Link } from './Link';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <BookOpenText className="h-8 w-8 text-[#D4AF37]" />
            <span className="ml-2 text-[#D4AF37] font-serif text-xl font-bold">Shan Ali</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><Link href="#home">Home</Link></li>
              <li><Link href="#about">About</Link></li>
              <li><Link href="#education">Education</Link></li>
              <li><Link href="#experience">Experience</Link></li>
              <li><Link href="#courses">Courses</Link></li>
              <li><Link href="#awards">Awards</Link></li>
              <li><Link href="#volunteering">Volunteering</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button className="text-[#D4AF37] focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;