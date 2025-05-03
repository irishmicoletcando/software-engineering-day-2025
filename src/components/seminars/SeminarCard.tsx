'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Clock } from 'lucide-react';
import { Seminar } from '@/types/events';
import { getSpeakerBySeminar } from '@/lib/data';

interface SeminarCardProps {
  seminar: Seminar;
  index: number;
  onViewDetails: (id: string) => void;
}

const SeminarCard: React.FC<SeminarCardProps> = ({ seminar, index, onViewDetails }) => {
  const speaker = getSpeakerBySeminar(seminar.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Card 
        className="bg-gradient-to-br from-accent-black to-darkest border border-sea-green/10 hover:border-light-sea-green/30 hover:shadow-[0_0_15px_2px_rgba(121,201,212,0.1)] hover:shadow-light-sea-green/10 hover:-translate-y-1 transition-all duration-300 ease-in-out overflow-hidden group after:absolute after:inset-0 after:bg-gradient-to-r after:from-sea-green/0 after:to-light-sea-green/5 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300 *:relative"
      >
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div className="p-6 flex-1">
              <div className="flex flex-col md:flex-row justify-between mb-3">
                <div className="flex items-center gap-2 text-light-sea-green mb-2 md:mb-0">
                  <Clock className="h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                  <span>{seminar.time} · {seminar.duration} minutes</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                {seminar.title}
              </h3>
              <p className="text-gray-300 mb-4">{seminar.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {seminar.topics.map((tag, idx) => (
                  <Badge key={idx} variant="outline" className="border-shining-yellow/30 text-shining-yellow">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
                <div className="flex items-center gap-2">
                  {speaker && (
                    <>
                      <Avatar className="h-8 w-8 border border-sea-green/20">
                        <AvatarImage src={speaker.image} />
                        <AvatarFallback className="bg-sea-green/20 text-sea-green">
                          {speaker.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-white">{speaker.name}</span>
                    </>
                  )}
                </div>

                <Button
                  variant="outline"
                  className="bg-accent-black border-sea-green text-sea-green hover:bg-dull-sea-green hover:text-white hover:border-none hover:cursor-pointer"
                  onClick={() => onViewDetails(seminar.id)}
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SeminarCard;