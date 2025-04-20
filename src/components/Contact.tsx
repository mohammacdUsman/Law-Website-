import React, { useRef } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const ContactItem: React.FC<{ icon: React.ReactNode; title: string; content: string }> = ({ 
  icon, title, content 
}) => {
  return (
    <div className="flex items-start space-x-4 p-6 bg-black rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300">
      <div className="text-[#D4AF37]">{icon}</div>
      <div>
        <h3 className="text-white font-medium text-lg mb-1">{title}</h3>
        <p className="text-white/70">{content}</p>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section id="contact" className="py-20 bg-black">
      <div 
        ref={sectionRef}
        className={`container mx-auto px-4 sm:px-6 lg:px-8 opacity-0 ${isInView ? 'animate-fadeIn' : ''}`}
      >
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12 text-center">
          Get in <span className="text-[#D4AF37]">Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <ContactItem 
            icon={<Mail size={24} />}
            title="Email"
            content="contact@legalprofessional.com"
          />
          <ContactItem 
            icon={<Phone size={24} />}
            title="Phone"
            content="+39 123 456 7890"
          />
          <ContactItem 
            icon={<MapPin size={24} />}
            title="Address"
            content="University of Padova, Italy"
          />
        </div>
        
        <div className="bg-gray-900 p-8 md:p-12 rounded-xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-white/80 mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white/80 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-white/80 mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                placeholder="Research Inquiry"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white/80 mb-2">Message</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <div>
              <button 
                type="submit"
                className="bg-[#D4AF37] text-black px-8 py-3 rounded font-medium hover:bg-[#B8860B] transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;