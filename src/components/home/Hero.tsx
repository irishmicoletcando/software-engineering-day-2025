'use client';

import { motion } from 'framer-motion';
import { CalendarDays, MapPin, ArrowRight } from 'lucide-react';
import DataVisBackground from '@/components/home/DataVisBackground';
import Image from 'next/image';
import { useState } from 'react';
import RegistrationModal from '@/components/common/RegistrationModal';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const Hero: React.FC = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Basic animation variants
  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.3 }
  };

  // Optimized animation variants
  const fadeInUp = {
    initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 },
    animate: shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
    transition: { duration: 0.3 }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-accent-black">
      {/* Radial dark background gradient overlay */}
      <div className="absolute inset-0 z-0" 
        style={{
          background: 'radial-gradient(circle at center, rgba(18, 24, 38, 0.7) 0%, #121826 100%)',
        }}
      />
      
      <DataVisBackground className="z-[1]" />

      <div className="container mx-auto px-6 md:px-6 relative z-10 flex items-center justify-center min-h-screen">
        <motion.div
          {...fadeInUp}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center justify-center w-full gap-8 md:gap-12"
        >
          {/* Logos Section */}
          {!shouldReduceMotion ? (
            <motion.div
              className="flex justify-center items-center gap-4 md:gap-8"
              {...fadeInUp}
              transition={{ duration: 0.3 }}
            >
              {[
                { name: 'PUP', type: 'png' },
                { name: 'CPE', type: 'png' },
                { name: 'SED', type: 'png' }
              ].map((logo) => (
                <div key={logo.name} className="relative group">
                  <Image
                    src={`/assets/partners/${logo.name}.${logo.type}`}
                    alt={`${logo.name} Logo`}
                    width={80}
                    height={80}
                    className="h-8 sm:h-10 md:h-12 w-auto opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />
                  <div className="absolute -inset-2 bg-accent-blue/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </motion.div>
          ) : (
            <div className="flex justify-center items-center gap-4 md:gap-8">
              {[
                { name: 'PUP', type: 'png' },
                { name: 'CPE', type: 'png' },
                { name: 'SED', type: 'png' }
              ].map((logo) => (
                <div key={logo.name} className="relative group">
                  <Image
                    src={`/assets/partners/${logo.name}.${logo.type}`}
                    alt={`${logo.name} Logo`}
                    width={80}
                    height={80}
                    className="h-8 sm:h-10 md:h-12 w-auto opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />
                  <div className="absolute -inset-2 bg-accent-blue/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          )}

          {/* Main content */}
          <div className="space-y-8 md:space-y-12 text-center max-w-5xl mx-auto px-4">
            <motion.div
              {...fadeIn}
              transition={{ duration: 0.4 }}
              className="space-y-4 md:space-y-6"
            >
              <h1 className="text-lg sm:text-xl md:text-2xl text-white font-light tracking-[0.15em] md:tracking-[0.2em]">
                7TH SOFTWARE ENGINEERING DAY
              </h1>

              {/* SPARK */}
              <motion.div
                {...fadeIn}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div 
                  className="text-7xl lg:text-8xl xl:text-9xl font-black tracking-[0.1em] md:tracking-[0.2em] spark-text"
                  style={{ 
                    fontFamily: 'TR2N, sans-serif',
                  }}
                >
                  SPARK
                </div>
              </motion.div>

              {/* SPARK meaning */}
              <motion.p
                {...fadeIn}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl font-light tracking-[0.1em] md:tracking-[0.15em] text-light-gray/90 max-w-3xl mx-auto leading-relaxed"
                style={{ 
                  fontFamily: 'daggersquare, sans-serif',
                }}
              >
                <span 
                  className="relative inline-block"
                  style={{ 
                    fontFamily: 'daggersquare, sans-serif',
                  }}
                >
                  <span className="text-dull-yellow font-bold text-glow">S</span>HAPING{' '} 
                  <span className="text-dull-yellow font-bold text-glow">P</span>ROGRESS{' '} 
                  <span className="text-dull-yellow font-bold text-glow">A</span>ND{' '} 
                  <span className="text-dull-yellow font-bold text-glow">R</span>EVOLUTIONIZING{' '} 
                  <span className="text-dull-yellow font-bold text-glow">K</span>NOWLEDGE
                </span>
              </motion.p>
            </motion.div>
          </div>

          {/* Buttons */}
          {!shouldReduceMotion ? (
            <motion.div 
              {...fadeInUp}
              transition={{ duration: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4"
            >
              <button
                onClick={() => setIsRegistrationOpen(true)}
                className="bg-shining-yellow hover:bg-bright-orange hover:cursor-pointer text-black font-bold px-8 py-3 text-sm md:text-base rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center group"
              >
                Register Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              
              <ScrollLink
                to="schedule"
                className="border border-sea-green text-white hover:bg-dull-sea-green/20 hover:cursor-pointer px-8 py-3 text-sm md:text-base rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                View Schedule
              </ScrollLink>
            </motion.div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4">
              <button
                onClick={() => setIsRegistrationOpen(true)}
                className="bg-shining-yellow hover:bg-bright-orange hover:cursor-pointer text-black font-bold px-8 py-3 text-sm md:text-base rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center group"
              >
                Register Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              
              <ScrollLink
                to="schedule"
                className="border border-sea-green text-white hover:bg-dull-sea-green/20 hover:cursor-pointer px-8 py-3 text-sm md:text-base rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
              >
                View Schedule
              </ScrollLink>
            </div>
          )}

          {/* Event Details */}
          <motion.div 
            {...fadeIn}
            transition={{ duration: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center text-center sm:text-left w-full px-4"
          >
            <div className="flex items-center gap-2 md:gap-3 text-light-gray">
              <CalendarDays className="text-sea-green" size={22} />
              <span className="text-md md:text-lg">May 5, 6, and 8, 2025</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 text-light-gray">
              <MapPin className="text-sea-green" size={22} />
              <span className="text-md md:text-lg">PUP AVR 4th Floor - CEA Building</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Registration Modal */}
      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-accent-black to-transparent"></div>
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