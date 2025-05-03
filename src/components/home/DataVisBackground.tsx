'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface DataVisBackgroundProps {
  className?: string;
}

const DataVisBackground: React.FC<DataVisBackgroundProps> = ({ className }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Update cursor position on mouse move
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-black" /> 
      
      <motion.div
        className="absolute w-[250px] h-[250px] top-20 -left-20 bg-gradient-to-br from-light-sea-green/50 to-transparent rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[200px] h-[200px] top-1/2 -left-32 bg-gradient-to-br from-sea-green to-transparent rounded-full blur-2xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Right Side Animations */}
      <motion.div
        className="absolute w-[250px] h-[250px] top-16 right-0 bg-gradient-to-br from-sea-green to-transparent rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[200px] h-[200px] top-1/3 right-10 bg-gradient-to-br from-accent-black to-transparent rounded-full blur-2xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      {/* Neural Network Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20%" cy="30%" r="5" fill="var(--color-light-sea-green)" />
        <circle cx="40%" cy="50%" r="8" fill="var(--color-light-blue)" />
        <circle cx="70%" cy="40%" r="6" fill="var(--color-bright-orange)" />
        <line
          x1="20%"
          y1="30%"
          x2="40%"
          y2="50%"
          stroke="var(--color-light-sea-green)"
          strokeWidth="1"
        />
        <line
          x1="40%"
          y1="50%"
          x2="70%"
          y2="40%"
          stroke="var(--color-bright-orange)"
          strokeWidth="1"
        />
      </svg>

      {/* Flowing Data Streams */}
      <motion.div
        className="absolute w-[2px] h-[300px] top-1/4 -left-10 bg-gradient-to-b from-bright-orange/65 to-transparent"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 0.3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[2px] h-[300px] top-1/3 right-5 bg-gradient-to-b from-bright-orange to-transparent"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Pulsating Nodes */}
      <motion.div
        className="absolute w-4 h-4 top-1/5 -left-16 rounded-full bg-bright-orange/70"
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.4, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-3 h-3 bottom-1/5 right-10 rounded-full bg-bright-orange/70"
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.4, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Cursor Following Effect */}
      <motion.div
        className="absolute w-10 h-10 rounded-full bg-bright-orange/50 blur-xl pointer-events-none"
        style={{
          top: cursorPosition.y - 20,
          left: cursorPosition.x - 20,
        }}
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
};

export default DataVisBackground;