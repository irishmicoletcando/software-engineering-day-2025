'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Speaker } from '@/types/events';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface SpeakerCardProps {
  speaker: Speaker;
  index: number;
  onViewProfile: (id: string) => void;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ speaker, index, onViewProfile }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="bg-gradient-to-br from-darkest-blue to-darkest-blue/70 border border-default-blue/10 overflow-hidden hover:border-default-blue/30 transition-all group rounded-lg">
        <div className="aspect-[3/2] relative overflow-hidden">
          <Image
            src={speaker.image || '/images/default-speaker.jpg'}
            alt={speaker.name}
            width={800}
            height={600}
            quality={95}
            placeholder="blur"
            blurDataURL={speaker.image}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            priority={index < 3}
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
              <Badge
                key={idx}
                variant="outline"
                className="border-shining-yellow/30 text-shining-yellow hover:bg-shining-yellow/10 transition-colors"
              >
                {topic}
              </Badge>
            ))}
          </div>

          <Button
            variant="ghost"
            className="w-full justify-start px-0 text-gray-300 hover:cursor-pointer hover:text-white hover:bg-transparent group"
            onClick={() => onViewProfile(speaker.id)} // Trigger the Speaker Detail Dialog box
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