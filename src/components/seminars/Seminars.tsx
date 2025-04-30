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
    <section id="schedule" className="bg-darkest-blue pt-24 px-8 md:px-10">
      <div className="container mx-auto z-10">
        <SectionHeading
          subtitle="Event Program"
          title="Seminar Schedule"
          description="Three days of inspiring sessions, hands-on workshops, and networking opportunities with industry leaders."
        />
      </div>

      <div className="mb-8 flex flex-col md:flex-row justify-between gap-4">
        <Tabs defaultValue={dates[0]} className="w-full">
          <TabsList className="bg-default-gray/20 border border-default-blue/20 overflow-x-auto flex h-10 items-center justify-start rounded-lg w-full">
            {dates.map(date => (
              <TabsTrigger
                key={date}
                value={date}
                className="text-gray-300 data-[state=active]:bg-default-blue data-[state=active]:text-white"
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
                    className="bg-default-blue hover:bg-dark-blue/90 text-white px-6 py-3 text-sm md:text-md rounded-full shadow-lg transform transition-transform hover:scale-105 flex mx-auto group"
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

      <Dialog open={!!selectedSeminar} onOpenChange={(open) => !open && setSelectedSeminar(null)}>
        <DialogContent className="bg-darkest-blue border border-default-blue/20 text-white w-full max-w-3xl mx-auto p-6 rounded-xl shadow-lg overflow-auto max-h-[80vh] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {selected && (
            <>
              <DialogHeader className="mb-3">
                <div className="flex items-center gap-2 text-accent-blue mb-1">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    {selected.date} · {selected.time} · {selected.duration} minutes
                  </span>
                </div>
                <DialogTitle className="text-xl font-bold text-white mb-1">
                  {selected.title}
                </DialogTitle>
                <DialogDescription className="text-gray-300 text-sm">
                  {selected.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-md font-medium mb-2 text-white border-b border-default-blue/20 pb-1">
                    Topics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.topics.map((topic, idx) => (
                      <Badge 
                        key={idx}
                        variant="outline"
                        className="border-shining-yellow/30 text-shining-yellow px-2 py-0.5 text-xs"
                      >
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {speaker && (
                  <div>
                    <h4 className="text-md font-medium mb-2 text-white border-b border-default-blue/20 pb-1">
                      Speaker
                    </h4>
                    <div className="p-3 rounded-lg bg-darkest-blue/10 border border-default-blue/20 hover:border-accent-blue/40 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <Avatar className="h-12 w-12 border-2 border-blue-500/50 ring-2 ring-blue-500/10">
                          <AvatarImage src={speaker.image} alt={speaker.name} />
                          <AvatarFallback className="bg-blue-900 text-blue-100">
                            {speaker.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-white font-medium text-base">{speaker.name}</p>
                          <p className="text-blue-400 text-xs">
                            {speaker.role} at {speaker.company}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-xs leading-relaxed line-clamp-2">
                        {speaker.bio}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              
              <DialogFooter className="mt-6">
                <Button 
                  className="bg-default-blue hover:bg-default-blue-dark text-white w-full sm:w-auto flex items-center gap-2"
                  onClick={() => {
                    setSelectedSeminar(null);
                    openDayRegistrationForm(selected.date);
                  }}
                >
                  Register for this Seminar <ExternalLink size={16} />
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