import React, { useRef } from 'react';
import { useInView } from '../hooks/useInView';
import { Heart } from 'lucide-react';

interface VolunteerRole {
  period: string;
  title: string;
  organization: string;
}

const volunteerRoles: VolunteerRole[] = [
  {
    period: "05/11/2020 – Current",
    title: "Legal Executive and Senior Coordinator",
    organization: "Crime Victim Services of Pakistan"
  },
  {
    period: "01/09/2022 – Current",
    title: "Volunteer",
    organization: "Sahil Volunteer Islamabad"
  },
  {
    period: "23/12/2022 – Current",
    title: "Legal Advisor (Islamabad Chapter)",
    organization: "Ehd-e-Aman"
  }
];

const Volunteering: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(titleRef, { threshold: 0.1 });

  return (
    <section id="volunteering" className="bg-black py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={titleRef}
          className={`text-3xl md:text-4xl font-serif font-bold text-white mb-16 text-center opacity-0 ${
            isInView ? 'animate-fadeIn' : ''
          }`}
        >
          <span className="text-[#D4AF37]">Volunteering</span> Experience
        </h2>

        <div className="space-y-8">
          {volunteerRoles.map((role, index) => {
            const itemRef = useRef<HTMLDivElement>(null);
            const isItemInView = useInView(itemRef, { threshold: 0.1 });

            return (
              <div
                key={index}
                ref={itemRef}
                className={`bg-gray-900 border border-[#D4AF37]/20 rounded-lg p-8 opacity-0 ${
                  isItemInView ? 'animate-fadeInUp' : ''
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-[#D4AF37]/10 rounded-lg">
                    <Heart className="h-6 w-6 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{role.title}</h3>
                    <p className="text-[#D4AF37] font-medium mb-1">{role.organization}</p>
                    <p className="text-white/60">{role.period}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Volunteering;