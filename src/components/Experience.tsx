import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  location: string;
  department?: string;
  responsibilities: string[];
}

const experienceData: ExperienceItem[] = [
  {
    period: "2023 – Present",
    title: "Legal Officer",
    company: "Arm Financial Group",
    location: "Melbourne VIC 3000, Australia",
    responsibilities: [
      "Ensuring legal compliance across all company operations",
      "Ensuring adherence to financial and digital currency regulations",
      "Drafting, reviewing, and managing various legal contracts",
      "Formulating and implementing internal policies",
      "Providing legal guidance on corporate governance and business ethics",
      "Overseeing risk management in legal aspects"
    ]
  },
  {
    period: "2022 – 2023",
    title: "Law Lecturer (Visiting Faculty)",
    company: "Bahria University Islamabad",
    location: "Shangrilla Rd, E 8/1, Islamabad, Islamabad Capital Territory Pakistan",
    department: "School of Law",
    responsibilities: [
      "Undergraduate courses taught: Company Law, Contract Act, sales of Goods Act, Negotiable Instrument Act, Labor Law, etc",
      "Supervised undergraduate teaching, internship, and research work"
    ]
  },
  {
    period: "2022 – 2023",
    title: "Law Lecturer (Visiting Faculty)",
    company: "Federal Urdu University of Arts, Sciences & Technology",
    location: "Kuri Model Village, Near Bahria Enclave, Islamabad, Islamabad, Pakistan",
    department: "Business Administration",
    responsibilities: [
      "Prepare and deliver Lectures to Business Management students on subjects such as Corporate Law and Business Law",
      "Evaluate and grade students class work, assignments, papers, and oral presentations",
      "Advise students on academic and vocational curricula, and on career issues"
    ]
  },
  {
    period: "2021 – 2023",
    title: "Lawyer (Partner)",
    company: "Legalities Inc. Advocates and Legal Consultants",
    location: "Islamabad",
    responsibilities: [
      "Legal Research and case preparation. Appear before District Court, and High Court",
      "Draft Bails, Civil Suits, Writ Petitions, Civil Revision, and Appeals"
    ]
  },
  {
    period: "2018 – 2021",
    title: "Associate Lawyer",
    company: "Law Firm of Rao Brothers",
    location: "Islamabad, Pakistan",
    responsibilities: []
  }
];

const ExperienceItem: React.FC<{ item: ExperienceItem; index: number }> = ({ item, index }) => {
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
          <h3 className="text-white text-2xl font-bold">{item.title}</h3>
        </div>
      </div>
      <div className="md:w-2/3 border-l-2 border-[#D4AF37]/30 pl-6 relative">
        <div className="absolute w-4 h-4 bg-[#D4AF37] rounded-full -left-[9px] top-0"></div>
        <h4 className="text-xl text-white font-semibold">{item.company}</h4>
        <p className="text-white/60 mt-1 italic">{item.location}</p>
        
        {item.department && (
          <p className="text-[#D4AF37] mt-2">Department: {item.department}</p>
        )}
        
        {item.responsibilities.length > 0 && (
          <div className="mt-4">
            <h5 className="text-white font-medium mb-2">Main activities and responsibilities:</h5>
            <ul className="list-disc list-inside space-y-2">
              {item.responsibilities.map((responsibility, i) => (
                <li key={i} className="text-white/80">{responsibility}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(titleRef, { threshold: 0.1 });

  return (
    <section id="experience" className="bg-black py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          ref={titleRef}
          className={`text-3xl md:text-4xl font-serif font-bold text-white mb-16 text-center opacity-0 ${isInView ? 'animate-fadeIn' : ''}`}
        >
          Professional <span className="text-[#D4AF37]">Experience</span>
        </h2>
        
        <div className="mt-12">
          {experienceData.map((item, index) => (
            <ExperienceItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;