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
      <Card className="bg-darkest-blue border border-default-blue/10 hover:border-shining-yellow/30 transition-all overflow-hidden group">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div className="p-6 flex-1">
              <div className="flex flex-col md:flex-row justify-between mb-3">
                <div className="flex items-center gap-2 text-accent-blue mb-2 md:mb-0">
                  <Clock className="h-4 w-4" />
                  <span>{seminar.time} · {seminar.duration} minutes</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-shining-yellow transition-colors">
                {seminar.title}
              </h3>
              <p className="text-gray-300 mb-4">{seminar.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {seminar.topics.map((tag, idx) => (
                  <Badge key={idx} variant="outline" className="border-default-blue/30 text-default-blue">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
                <div className="flex items-center gap-2">
                  {speaker && (
                    <>
                      <Avatar className="h-8 w-8 border border-default-blue/20">
                        <AvatarImage src={speaker.image} />
                        <AvatarFallback className="bg-default-blue/20 text-default-blue">
                          {speaker.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-white">{speaker.name}</span>
                    </>
                  )}
                </div>

                <Button
                  variant="outline"
                  className="bg-darkest-blue border-default-blue text-default-blue hover:bg-default-blue hover:text-white"
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