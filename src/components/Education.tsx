import React, { useEffect, useRef } from 'react';
import { useInView } from '../hooks/useInView';

interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  address: string;
  details?: string[];
  grade?: string;
}

const educationData: EducationItem[] = [
  {
    period: "2023 – In Process",
    degree: "Ph.D. Law Scholar",
    institution: "University of Padova",
    address: "Via VIII Febbraio, 2, 35122 Padova PD Italy",
    details: [
      "Thesis Topic: Digital rhetoric and legal, economic, and social applications of the blockchain network on the Web 3.0",
      "July 2024- Current Visiting Research Student",
      "Nottingham Law School, Nottingham Trent University, UK"
    ]
  },
  {
    period: "2019 – 2021",
    degree: "Master of Law (LLM)",
    institution: "Bahria University Islamabad",
    address: "Shangrilla Rd, E 8/1, Islamabad, Islamabad Capital Territory, Pakistan",
    grade: "Final grade: CGPA = 3.93/4.00 Grade = A (With Distinction)"
  },
  {
    period: "2013 – 2018",
    degree: "Bachelor of Law (LLB)",
    institution: "Government College University Faisalabad",
    address: "Kotwali Rd, Gurunanakpura, Faisalabad, Pakistan",
    grade: "Final grade: CGPA = 3.46/4.00 Grade = A"
  }
];

const EducationItem: React.FC<{ item: EducationItem; index: number }> = ({ item, index }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { threshold: 0.1 });

  return (
    <div 
      ref={itemRef}
      className={`flex flex-col md:flex-row gap-6 mb-16 opacity-0 ${isInView ? 'animate-fadeInUp' : ''}`}
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="md:w-1/3">
        <div className="sticky top-24">
          <div className="text-[#D4AF37] font-serif text-xl mb-2">{item.period}</div>
          <h3 className="text-white text-2xl font-bold">{item.degree}</h3>
        </div>
      </div>
      <div className="md:w-2/3 border-l-2 border-[#D4AF37]/30 pl-6 relative">
        <div className="absolute w-4 h-4 bg-[#D4AF37] rounded-full -left-[9px] top-0"></div>
        <h4 className="text-xl text-white font-semibold">{item.institution}</h4>
        <p className="text-white/60 mt-1 italic">{item.address}</p>
        
        {item.details && item.details.map((detail, i) => (
          <p key={i} className="text-white/80 mt-3">{detail}</p>
        ))}
        
        {item.grade && (
          <p className="text-[#D4AF37] mt-4 font-medium">{item.grade}</p>
        )}
      </div>
    </div>
  );
};

const Education: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(titleRef, { threshold: 0.1 });

  return (
    <section id="education" className="bg-black py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          ref={titleRef}
          className={`text-3xl md:text-4xl font-serif font-bold text-white mb-16 text-center opacity-0 ${isInView ? 'animate-fadeIn' : ''}`}
        >
          <span className="text-[#D4AF37]">Academic</span> Journey
        </h2>
        
        <div className="mt-12">
          {educationData.map((item, index) => (
            <EducationItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;