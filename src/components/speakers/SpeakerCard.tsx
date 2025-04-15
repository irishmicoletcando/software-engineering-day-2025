'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Speaker } from '@/types/events';
import { Linkedin, Twitter, Github, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface SpeakerCardProps {
  speaker: Speaker;
  index: number;
  // onViewProfile: (id: string) => void;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div id="speakers" className="bg-gradient-to-br from-darkest-blue to-darkest-blue/70 border border-default-blue/10 overflow-hidden hover:border-default-blue/30 transition-all group rounded-lg">
        <div className="aspect-[3/2] relative overflow-hidden">
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-darkest-blue via-transparent to-transparent"></div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-1">{speaker.name}</h3>
          <p className="text-accent-blue mb-3">
            {speaker.role} at {speaker.company}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {speaker.topics?.map((topic, idx) => (
              <Badge key={idx} variant="outline" className="border-default-blue/30 text-default-blue">
                {topic}
              </Badge>
            ))}
          </div>

          <Button 
            variant="ghost" 
            className="w-full justify-start px-0 text-gray-300 hover:cursor-pointer hover:text-white hover:bg-transparent group"
          >
            View Profile
            <ExternalLink className="ml-2 h-4 w-4 opacity-70 group-hover:translate-x-1 transition-all" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default SpeakerCard;