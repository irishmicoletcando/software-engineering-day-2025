import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Student, Seminar } from '@/types/events';

interface ConfirmationScreenProps {
  studentData: Student;
  selectedSeminars: Seminar[];
  resetForm: () => void;
}

const ConfirmationScreen: React.FC<ConfirmationScreenProps> = ({ 
  studentData, 
  selectedSeminars,
  resetForm 
}) => {
  const fullName = `${studentData.firstName} ${studentData.middleInitial ? studentData.middleInitial + '. ' : ''}${studentData.surname}`;
  
  return (
    <section id="registration" className="py-24 bg-event-dark relative">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto bg-event-dark border border-event-blue/20">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
                <Check className="h-8 w-8 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Registration Complete!</h2>
              <p className="text-gray-300 mb-6">
                Thank you for registering, {fullName}! You&apos;ll receive a confirmation email at {studentData.email} with details about the seminars.
              </p>
              <div className="mb-8 border border-event-blue/10 rounded-lg p-4 bg-event-blue/5">
                <h3 className="text-lg font-medium text-white mb-3">Your selected seminars:</h3>
                <ul className="space-y-2">
                  {selectedSeminars.map(seminar => (
                    <li key={seminar.id} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-event-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white font-medium">{seminar.title}</p>
                        <p className="text-gray-300 text-sm">{seminar.date} at {seminar.time}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <Button 
                className="bg-event-blue hover:bg-event-blue-dark text-white"
                onClick={resetForm}
              >
                Register for More Seminars
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ConfirmationScreen;