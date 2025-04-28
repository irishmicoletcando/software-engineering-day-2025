// src/components/Registration/SeminarSelection.tsx
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { AlertCircle } from 'lucide-react';
import { Seminar } from '@/types/events';

interface SeminarSelectionProps {
  seminars: Seminar[];
  selectedSeminars: string[];
  toggleSeminar: (seminarId: string) => void;
}

const SeminarSelection: React.FC<SeminarSelectionProps> = ({ 
  seminars, 
  selectedSeminars, 
  toggleSeminar 
}) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-white mb-2">Select Seminars</h3>
      <p className="text-gray-300 mb-6">Choose the seminars you would like to attend</p>
      
      <div className="max-h-[400px] overflow-y-auto pr-2 space-y-3">
        {seminars.map(seminar => {
          return (
            <div 
              key={seminar.id} 
              className={`p-3 rounded-lg border transition-colors ${
                selectedSeminars.includes(seminar.id) 
                  ? 'border-event-blue bg-event-blue/10' 
                  : 'border-event-blue/20 bg-event-blue/5'
              }`}
            >
              <div className="flex items-start">
                <Checkbox 
                  id={seminar.id}
                  className="mt-1 data-[state=checked]:bg-event-blue data-[state=checked]:border-event-blue"
                  checked={selectedSeminars.includes(seminar.id)}
                  onCheckedChange={() => toggleSeminar(seminar.id)}
                />
                <div className="ml-3 flex-1">
                  <Label 
                    htmlFor={seminar.id} 
                    className="font-medium text-white"
                  >
                    {seminar.title}
                  </Label>
                  <div className="text-sm text-gray-400 mt-1">
                    {seminar.date} · {seminar.time} · {seminar.duration}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 text-sm text-gray-300 flex items-start gap-2">
        <AlertCircle className="h-4 w-4 text-event-accent flex-shrink-0 mt-0.5" />
        <p>
          You can select multiple seminars. A confirmation email will be sent after registration.
        </p>
      </div>
    </div>
  );
};

export default SeminarSelection;