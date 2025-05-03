'use client';

import { useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { seminars, getSpeakerBySeminar } from '@/lib/data';
import { Calendar, ExternalLink } from 'lucide-react';
import SeminarCard from './SeminarCard';
import { motion } from 'framer-motion';

// Google Form URLs for registration
const REGISTRATION_FORM_URLS: Record<string, string> = {
  "May 5, 2025": "https://forms.gle/rnyG7764FVhMuufc9",
  "May 6, 2025": "https://forms.gle/X1cyqqq2nDkp4i7Q9",
  "May 8, 2025": "https://forms.gle/QBtwLyo168NhVdFA7",
};

const Seminars: React.FC = () => {
  const [selectedSeminar, setSelectedSeminar] = useState<string | null>(null);

  // Group seminars by date
  const seminarsByDate = seminars.reduce((acc, seminar) => {
    if (!acc[seminar.date]) {
      acc[seminar.date] = [];
    }
    acc[seminar.date].push(seminar);
    return acc;
  }, {} as Record<string, typeof seminars>);

  // Get all unique dates
  const dates = Object.keys(seminarsByDate);

  // Get currently selected seminar
  const selected = selectedSeminar ? seminars.find(seminar => seminar.id === selectedSeminar) : null;

  // Get speaker for selected seminar
  const speaker = selected ? getSpeakerBySeminar(selected.id) : null;

  // Handle the registration form opening
  const openDayRegistrationForm = (date: string) => {
    const cleanDate = date.includes('-') ? date.split('-')[1].trim() : date;
    const formUrl = REGISTRATION_FORM_URLS[cleanDate];
    
    if (formUrl) {
      window.open(formUrl, '_blank', 'noopener,noreferrer');
    } else {
      console.error(`No registration form URL found for date: ${cleanDate}`);
    }
  };

  return (
    <section id="schedule" className="bg-black pt-16 md:pt-20 px-8 md:px-10">
      <div className="container mx-auto z-10">
        <SectionHeading
          subtitle="Event Program"
          title="Seminar"
          maintitle="Schedule"
          description="Three days of inspiring sessions, hands-on workshops, and networking opportunities with industry leaders."
        />
      </div>

      <div className="mb-8 flex flex-col md:flex-row justify-between gap-4">
        <Tabs defaultValue={dates[0]} className="w-full">
          <TabsList className="bg-default-gray/20 border border-sea-green/20 overflow-x-auto flex h-10 items-center justify-start rounded-lg w-full">
            {dates.map(date => (
              <TabsTrigger
                key={date}
                value={date}
                className="text-gray-300 data-[state=active]:bg-sea-green data-[state=active]:text-accent-black"
              >
                {date}
              </TabsTrigger>
            ))}
          </TabsList>

          {dates.map(date => (
            <TabsContent key={date} value={date} className="mt-6">
              <div className="space-y-6">
                {seminarsByDate[date].map((seminar, index) => (
                  <SeminarCard
                    key={seminar.id}
                    seminar={seminar}
                    index={index}
                    onViewDetails={(id) => setSelectedSeminar(id)}
                  />
                ))}
              </div>

              {/* Registration button */}
              <motion.div 
                className="mt-16 text-center pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: seminarsByDate[date].length * 0.05 + 0.5
                }}
              >
                <div className="max-w-2xl mx-auto">
                  <h3 className="text-xl font-medium text-gray-400 mb-2">
                    Ready to join?
                  </h3>
                  <h4 className="text-xl font-semibold text-white mb-6">
                    Register for {date}
                  </h4>
                  <Button 
                    onClick={() => openDayRegistrationForm(date)}
                    className="bg-shining-yellow hover:bg-bright-orange hover:cursor-pointer text-accent-black font-bold px-6 py-3 text-sm md:text-md rounded-full shadow-lg transform transition-transform hover:scale-105 flex mx-auto group"
                  >
                    Register Now
                    <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                  {/* <p className="text-gray-500 mt-3 text-xs">
                    Free registration • Opens in new tab
                  </p> */}
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
          
      {/* Seminar Detail Dialog */}
      <Dialog open={!!selectedSeminar} onOpenChange={(open) => !open && setSelectedSeminar(null)}>
        <DialogContent className="bg-accent-black/95 backdrop-blur-md border border-sea-green/20 text-white w-[95%] max-w-3xl max-h-[90vh] overflow-y-auto p-4 sm:p-6 mx-auto">
          {selected && (
            <>
              <DialogHeader className="space-y-4">
                {/* Date and Time */}
                <div className="flex items-center gap-2 text-light-sea-green">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base font-medium">
                    {selected.date} · {selected.time} · {selected.duration} minutes
                  </span>
                </div>

                {/* Title */}
                <DialogTitle className="text-xl sm:text-2xl font-bold text-white">
                  {selected.title}
                </DialogTitle>

                {/* Description */}
                <DialogDescription className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {selected.description}
                </DialogDescription>
              </DialogHeader>
                    
              <div className="mt-6 space-y-6">
                {/* Topics Section */}
                <div className="space-y-3">
                  <h4 className="text-base sm:text-lg font-medium text-white border-b border-sea-green/20 pb-2">
                    Topics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.topics.map((topic, idx) => (
                      <Badge 
                        key={idx}
                        variant="outline"
                        className="border-shining-yellow/30 text-shining-yellow px-3 py-1 text-xs sm:text-sm"
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
                      
                {/* Speaker Section */}
                {speaker && (
                  <div className="space-y-3">
                    <h4 className="text-base sm:text-lg font-medium text-white border-b border-sea-green/20 pb-2">
                      Speaker
                    </h4>
                    <div className="p-4 rounded-lg bg-sea-green/5 border border-sea-green/20 hover:border-light-sea-green/40 transition-colors duration-300">
                      <div className="flex items-start gap-4 mb-3">
                        <Avatar className="h-14 w-14 sm:h-16 sm:w-16 border-2 border-light-sea-green/50 ring-2 ring-light-sea-green/10">
                          <AvatarImage src={speaker.image} alt={speaker.name} />
                          <AvatarFallback className="bg-sea-green text-white text-lg">
                            {speaker.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-white font-medium text-base sm:text-lg">
                            {speaker.name}
                          </p>
                          <p className="text-light-sea-green text-sm">
                            {speaker.role} at {speaker.company}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {speaker.bio}
                      </p>
                    </div>
                  </div>
                )}
              </div>
                    
              {/* Footer */}
              <DialogFooter className="mt-8 pt-4 border-t border-sea-green/20">
                <Button 
                  onClick={() => {
                    setSelectedSeminar(null);
                    openDayRegistrationForm(selected.date);
                  }}
                  className="w-full sm:w-auto bg-shining-yellow hover:bg-bright-orange hover:cursor-pointer text-accent-black px-6 py-3 rounded-full shadow-lg font-semibold transform transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group"
                >
                  Register for this Seminar
                  <ExternalLink 
                    size={18} 
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Seminars;