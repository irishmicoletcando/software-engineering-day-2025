'use client';

import { useState } from 'react';
import { speakers } from '@/lib/data';
import { Linkedin } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import SpeakerCard from './SpeakerCard';
import SpeakersBackground from './SpeakersBackground';
import SectionHeading from '../common/SectionHeading';

const Speakers: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<string | null>(null);

  const selected = selectedSpeaker ? speakers.find((speaker) => speaker.id === selectedSpeaker) : null;

  return (
    <section id="speakers" className="bg-black relative pt-16 md:pt-20 px-8 md:px-10">
      {/* Background Animation */}
      <SpeakersBackground />

      <div className="container mx-auto relative z-10">
        <SectionHeading 
          subtitle="Expert Presenters"
          title="Meet Our"
          maintitle='Speakers'
          description="Learn from industry leaders and experts who are shaping the future of Big Data and Machine Learning."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <SpeakerCard
              key={speaker.id}
              speaker={speaker}
              index={index}
              onViewProfile={(id) => setSelectedSpeaker(id)} // Pass the callback
            />
          ))}
        </div>
      </div>

      {/* Speaker Detail Dialog */}
      <Dialog open={!!selectedSpeaker} onOpenChange={(open) => !open && setSelectedSpeaker(null)}>
        <DialogContent className="bg-accent-black/95 backdrop-blur-md border border-sea-green/20 text-white w-[95%] max-w-3xl max-h-[90vh] overflow-y-auto p-4 sm:p-6 mx-auto">
          {selected && (
            <>
              <DialogHeader className="space-y-4">
                <DialogTitle className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="w-full">
                    <h3 className="text-xl sm:text-2xl font-bold text-white break-words">
                      {selected.name}
                    </h3>
                    <p className="text-light-sea-green text-sm sm:text-base font-normal mt-1">
                      {selected.role} at {selected.company}
                    </p>
                  </div>
                </DialogTitle>
                <DialogDescription className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {selected.bio}
                </DialogDescription>
              </DialogHeader>

              <div className="mt-6 space-y-4">
                <h4 className="text-base sm:text-lg font-medium text-white">Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {selected.topics?.map((topic, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline" 
                      className="border-sea-green/30 text-sea-green text-xs sm:text-sm py-1 px-2"
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 mt-6 pt-4 border-t border-sea-green/20">
                  {selected.linkedin && (
                    <a
                      href={selected.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-shining-yellow/10 text-shining-yellow hover:bg-shining-yellow/20 transition-colors"
                      aria-label={`Visit ${selected.name}'s LinkedIn profile`}
                    >
                      <Linkedin size={20} />
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