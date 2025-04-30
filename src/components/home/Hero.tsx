'use client';

import { motion } from 'framer-motion';
import { CalendarDays, MapPin, ArrowRight } from 'lucide-react';
import DataVisBackground from '@/components/home/DataVisBackground';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-darkest-blue">
      {/* Radial dark background gradient overlay */}
      <div className="absolute inset-0 z-0" 
        style={{
          background: 'radial-gradient(circle at center, rgba(18, 24, 38, 0.7) 0%, #121826 100%)',
        }}
      />
      
      <DataVisBackground className="z-[1]" />

      <div className="container mx-auto px-6 relative z-10 flex items-center justify-center min-h-screen">
        <motion.div
          className="flex flex-col items-center justify-center w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Main content */}
          <div className="space-y-12 text-center max-w-5xl mx-auto">
            {/* Title Section */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-xl md:text-2xl text-white font-light tracking-[0.2em] mb-6">
                7th SOFTWARE ENGINEERING DAY
              </h1>

              {/* SPARK */}
              <div 
                className="text-7xl md:text-8xl lg:text-9xl font-black tracking-[0.2em] mb-6"
                style={{ 
                  fontFamily: 'TR2N, sans-serif',
                  color: '#FFD700',
                  textShadow: '0 0 10px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 215, 0, 0.5)',
                  WebkitTextStroke: '1px #FFD700',
                }}
              >
                SPARK
              </div>

{/* Updated meaning text */}
              <p className="text-lg md:text-xl lg:text-2xl font-light tracking-[0.15em] text-light-gray/90 max-w-3xl mx-auto leading-relaxed">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="relative inline-block"
                >
                  <span className="text-accent-blue text-glow">S</span>HAPING{' '} 
                <span className="text-accent-blue text-glow">P</span>ROGRESS{' '} 
                <span className="text-accent-blue text-glow">A</span>ND{' '} 
                <span className="text-accent-blue text-glow">R</span>EVOLUTIONIZING{' '} 
                <span className="text-accent-blue text-glow">K</span>NOWLEDGE
</motion.span>
              </p>
            </motion.div>
          </div>

          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center my-16"
            initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ScrollLink
              to="registration"
              className="bg-gradient-to-r from-dark-blue to-accent-blue hover:from-dark-blue hover:to-default-blue text-white px-8 py-3 text-sm md:text-base rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center group"
            >
              Register Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </ScrollLink>
            
            <ScrollLink
              to="schedule"
              className="border border-light-blue text-white hover:bg-dark-blue/20 px-8 py-3 text-sm md:text-base rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              View Schedule
            </ScrollLink>
          </motion.div>

          {/* Event Details */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 text-light-gray">
              <CalendarDays className="text-accent-blue" size={22} />
              <span className="text-md md:text-lg">May 5, 6, and 8, 2025</span>
            </div>
            <div className="flex items-center gap-3 text-light-gray">
              <MapPin className="text-accent-blue" size={22} />
              <span className="text-md md:text-lg">PUP AVR 4th Floor - CEA Building</span>
            </div>
          </motion.div>
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