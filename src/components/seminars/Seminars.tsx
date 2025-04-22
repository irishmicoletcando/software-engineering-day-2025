'use client';

import { useState } from 'react';
import SectionHeading from '../common/SectionHeading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { seminars, getSpeakerBySeminar } from '@/lib/data';
import { Calendar } from 'lucide-react';
import SeminarCard from './SeminarCard';

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

  return (
    <section id="schedule" className="bg-darkest-blue py-24 px-8 md:px-14">
      <div className="container mx-auto z-10">
        <SectionHeading
          subtitle="Event Program"
          title="Seminar Schedule"
          description="Three days of inspiring sessions, hands-on workshops, and networking opportunities with industry leaders."
        />
      </div>

      <div className="mb-8 flex flex-col md:flex-row justify-between gap-4">
        <Tabs defaultValue={dates.length > 0 ? dates[0] : undefined} className="w-full">
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
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Seminar Detail Dialog */}
      <Dialog open={!!selectedSeminar} onOpenChange={(open) => !open && setSelectedSeminar(null)}>
        <DialogContent className="bg-darkest-blue border border-default-blue/20 text-white w-full max-w-3xl mx-auto p-6 rounded-xl shadow-lg overflow-auto max-h-[80vh] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {selected && (
            <>
              <DialogHeader className="mb-3">
                <div className="flex items-center gap-2 text-accent-blue mb-1">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">{selected.date} · {selected.time} · {selected.duration} minutes</span>
                </div>
                <DialogTitle className="text-xl font-bold text-white mb-1">{selected.title}</DialogTitle>
                <DialogDescription className="text-gray-300 text-sm">
                  {selected.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-md font-medium mb-2 text-white border-b border-default-blue/20 pb-1">Topics</h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.topics.map((topic, idx) => (
                      <Badge key={idx} variant="outline" className="border-shining-yellow/30 text-shining-yellow px-2 py-0.5 text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-md font-medium mb-2 text-white border-b border-default-blue/20 pb-1">Speaker</h4>
                  {speaker && (
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
                          <p className="text-blue-400 text-xs">{speaker.role} at {speaker.company}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 text-xs leading-relaxed line-clamp-2">{speaker.bio}</p>
                    </div>
                  )}
                </div>
              </div>
              
              <DialogFooter className="mt-4 pt-2 border-t border-blue-500/20">
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto px-4 py-2 rounded-md font-medium transition-colors text-sm"
                  onClick={() => {
                    setSelectedSeminar(null);
                    // Scroll to registration section with a small delay
                    setTimeout(() => {
                      const element = document.getElementById('registration');
                      if (element) {
                        window.scrollTo({
                          top: element.offsetTop - 80,
                          behavior: 'smooth'
                        });
                      }
                    }, 100);
                  }}
                >
                  Register for this Seminar
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