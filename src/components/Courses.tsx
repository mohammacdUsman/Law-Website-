import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { GraduationCap } from 'lucide-react';

interface Course {
  title: string;
  institution: string;
  platform: string;
}

const coursesData: Course[] = [
  {
    title: "AI & Law",
    institution: "Lund University",
    platform: "Coursera"
  },
  {
    title: "Artificial Intelligence and Legal Issues",
    institution: "Politecnico di Milano",
    platform: "Coursera"
  },
  {
    title: "Privacy Law and Data Protection",
    institution: "University of Pennsylvania",
    platform: "Coursera"
  },
  {
    title: "Cloud Computing Law: Data Protection and Cybersecurity",
    institution: "Queen Mary University of London",
    platform: "Coursera"
  },
  {
    title: "European Business Law: Understanding the Fundamental",
    institution: "Lund University",
    platform: "Coursera"
  },
  {
    title: "European Business Law: Doing Business in Europe",
    institution: "Lund University",
    platform: "Coursera"
  }
];

const CourseCard: React.FC<{ course: Course; index: number }> = ({ course, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { threshold: 0.1 });

  return (
    <div
      ref={cardRef}
      className={`bg-gray-900 border border-[#D4AF37]/20 rounded-lg p-6 hover:border-[#D4AF37]/50 transition-all duration-300 opacity-0 ${
        isInView ? 'animate-fadeInUp' : ''
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-[#D4AF37]/10 rounded-lg">
          <GraduationCap className="h-6 w-6 text-[#D4AF37]" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
          <p className="text-[#D4AF37] font-medium mb-1">{course.institution}</p>
          <p className="text-white/60">Offered through {course.platform}</p>
        </div>
      </div>
    </div>
  );
};

const Courses: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(titleRef, { threshold: 0.1 });

  return (
    <section id="courses" className="bg-black py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={titleRef}
          className={`text-3xl md:text-4xl font-serif font-bold text-white mb-16 text-center opacity-0 ${
            isInView ? 'animate-fadeIn' : ''
          }`}
        >
          Online <span className="text-[#D4AF37]">Courses</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coursesData.map((course, index) => (
            <CourseCard key={index} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;