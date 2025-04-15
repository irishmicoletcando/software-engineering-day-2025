'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { speakers } from '@/lib/data';
import { Linkedin, Twitter } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import SpeakerCard from './SpeakerCard';
import SpeakersBackground from './SpeakersBackground'; // Import the background component

const Speakers: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<string | null>(null);

  const selected = selectedSpeaker ? speakers.find((speaker) => speaker.id === selectedSpeaker) : null;

  return (
    <section id="speakers" className="bg-darkest-blue relative">
      {/* Add the animated background */}
      <SpeakersBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent-blue uppercase tracking-wider text-sm font-medium">Expert Presenters</span>
          <h2 className="text-4xl font-bold mt-2 mb-4 text-white">Meet Our Speakers</h2>
          <p className="text-gray-300 text-lg">
            Learn from industry leaders and experts who are shaping the future of Big Data and Machine Learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={speaker.id}
              speaker={speaker}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Speaker Detail Dialog */}
      <Dialog open={!!selectedSpeaker} onOpenChange={(open) => !open && setSelectedSpeaker(null)}>
        <DialogContent className="bg-darkest-blue border border-default-blue/20 text-white max-w-3xl">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold flex items-center gap-4">
                  <Avatar className="w-12 h-12 border-2 border-default-blue">
                    <AvatarImage src={selected.image} alt={selected.name} />
                    <AvatarFallback className="bg-default-blue">{selected.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    {selected.name}
                    <p className="text-accent-blue text-sm font-normal mt-1">
                      {selected.role} at {selected.company}
                    </p>
                  </div>
                </DialogTitle>
                <DialogDescription className="text-gray-300 mt-4">{selected.bio}</DialogDescription>
              </DialogHeader>

              <div className="mt-4">
                <h4 className="text-lg font-medium mb-3">Expertise</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selected.topics?.map((topic, idx) => (
                    <Badge key={idx} variant="outline" className="border-default-blue/30 text-default-blue">
                      {topic}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 mt-6">
                  {selected.linkedin && (
                    <a
                      href={selected.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-default-blue/10 text-default-blue hover:bg-default-blue/20 transition-colors"
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Speakers;