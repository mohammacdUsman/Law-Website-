import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Trophy } from 'lucide-react';

const awards = [
  "Merit Scholarship holder as the Batch Topper during Semesters",
  "Qualify for Gold Medal in LL.M.",
  "Summa Cum Laude in LL.M.",
  "Award of Laptop being highest achiever in class"
];

const Awards: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(titleRef, { threshold: 0.1 });

  return (
    <section id="awards" className="bg-gradient-to-b from-black to-gray-900 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={titleRef}
          className={`text-3xl md:text-4xl font-serif font-bold text-white mb-16 text-center opacity-0 ${
            isInView ? 'animate-fadeIn' : ''
          }`}
        >
          Honours & <span className="text-[#D4AF37]">Awards</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award, index) => {
            const itemRef = useRef<HTMLDivElement>(null);
            const isItemInView = useInView(itemRef, { threshold: 0.1 });

            return (
              <div
                key={index}
                ref={itemRef}
                className={`bg-black/50 border border-[#D4AF37]/20 rounded-lg p-6 flex items-start gap-4 opacity-0 ${
                  isItemInView ? 'animate-fadeInUp' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-3 bg-[#D4AF37]/10 rounded-lg">
                  <Trophy className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <p className="text-white/90 text-lg">{award}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Awards;