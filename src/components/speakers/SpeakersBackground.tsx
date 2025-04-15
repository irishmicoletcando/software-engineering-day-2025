'use client';

import { motion } from 'framer-motion';

const SpeakersBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-darkest-blue opacity-30" />

      {/* Floating Yellow Circle */}
      <motion.div
        className="absolute w-[200px] h-[200px] bottom-105 right-20 bg-gradient-to-br from-shining-yellow to-transparent rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating Blue Circle */}
      <motion.div
        className="absolute w-[250px] h-[250px] top-40 left-10  bg-gradient-to-br from-default-blue to-transparent rounded-full blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Flowing Data Streams */}
      <motion.div
        className="absolute w-[2px] h-[300px] top-1/4 left-1/3 bg-gradient-to-b from-shining-yellow to-transparent"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[2px] h-[300px] top-1/3 right-1/4 bg-gradient-to-b from-default-blue to-transparent"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Interconnected Nodes */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Nodes */}
        <circle cx="20%" cy="30%" r="5" fill="var(--color-shining-yellow)" />
        <circle cx="40%" cy="50%" r="8" fill="var(--color-default-blue)" />
        <circle cx="70%" cy="40%" r="6" fill="var(--color-accent-blue)" />

        {/* Connections */}
        <line
          x1="20%"
          y1="30%"
          x2="40%"
          y2="50%"
          stroke="var(--color-shining-yellow)"
          strokeWidth="1"
        />
        <line
          x1="40%"
          y1="50%"
          x2="70%"
          y2="40%"
          stroke="var(--color-default-blue)"
          strokeWidth="1"
        />
        <line
          x1="20%"
          y1="30%"
          x2="70%"
          y2="40%"
          stroke="var(--color-accent-blue)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default SpeakersBackground;