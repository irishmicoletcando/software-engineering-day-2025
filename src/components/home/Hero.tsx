'use client';

import { motion } from 'framer-motion';
import { CalendarDays, MapPin, ArrowRight } from 'lucide-react';
import DataVisBackground from '@/components/home/DataVisBackground';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-darkest-blue">
      <DataVisBackground />

      <div className="container mx-auto px-6 py-12 relative z-10 text-center">
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="block text-white">{`<Software Engineering/>`}</span>
            <span className="text-gradient bg-gradient-to-r from-accent-blue to-light-blue bg-clip-text text-transparent block">
              Day 2025
            </span>
          </h1>

          {/* Description */}
          <p className="text-md md:text-lg text-light-gray max-w-xl mx-auto leading-relaxed">
            Discover the latest in Big Data and Machine Learning with top industry experts.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ScrollLink
              to="registration"
              className="bg-gradient-to-r from-dark-blue to-accent-blue hover:from-dark-blue hover:to-default-blue text-white px-6 py-3 text-sm md:text-md rounded-full shadow-lg transform transition-transform hover:scale-105 flex items-center group"
            >
              Register Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </ScrollLink>

            <button
              className="border border-light-blue text-white hover:bg-dark-blue hover:text-white px-6 py-3 text-sm md:text-md rounded-full shadow-lg transform transition-transform hover:scale-105"
            >
              View Schedule
            </button>
          </div>

          {/* Event Details */}
          <div className="flex flex-col sm:flex-row gap-6 pt-10 justify-center">
            <div className="flex items-center gap-3 text-light-gray">
              <CalendarDays className="text-accent-blue" size={22} />
              <span className="text-md md:text-lg">May 5, 6, 8, 2025</span>
            </div>
            <div className="flex items-center gap-3 text-light-gray">
              <MapPin className="text-accent-blue" size={22} />
              <span className="text-md md:text-lg">PUP CEA AVR - 4th Floor</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-darkest-blue to-transparent"></div>
    </div>
  );
};

const ScrollLink: React.FC<{ to: string; className?: string; children: React.ReactNode }> = ({ to, className, children }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(to);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <a href={`#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default Hero;