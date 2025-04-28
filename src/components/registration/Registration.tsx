'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Toaster } from "sonner";
import { Student, Seminar } from '@/types/events';
import StudentForm from './StudentForm';
import SeminarSelection from './SeminarSelection';
import ConfirmationScreen from './ConfirmationScreen';
import SectionHeading from '../common/SectionHeading';
// import { fetchSeminars, registerStudent, checkStudentExists } from '../../lib/api';

const Registration: React.FC = () => {
  // const [seminars, setSeminars] = useState<Seminar[]>([]);
  const [selectedSeminars, setSelectedSeminars] = useState<string[]>([]);
  const [selectedSeminarDetails, setSelectedSeminarDetails] = useState<Seminar[]>([]);
  const [formData, setFormData] = useState<Omit<Student, 'seminars' | 'id' | 'createdAt'>>({
    surname: '',
    firstName: '',
    middleInitial: '',
    email: '',
    studentNumber: '',
    pupWebmail: '',
    yearLevel: '',
    section: '',
  });
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  
  // useEffect(() => {
  //   async function loadSeminars() {
  //     try {
  //       const data = await fetchSeminars();
  //       setSeminars(data);
  //     } catch (err) {
  //       setError('Failed to load seminars. Please refresh the page.');
  //       console.error('Error loading seminars:', err);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }
    
  //   loadSeminars();
  // }, []);
  
  // useEffect(() => {
  //   if (selectedSeminars.length > 0 && seminars.length > 0) {
  //     const details = seminars.filter(seminar => selectedSeminars.includes(seminar.id));
  //     setSelectedSeminarDetails(details);
  //   } else {
  //     setSelectedSeminarDetails([]);
  //   }
  // }, [selectedSeminars, seminars]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const toggleSeminar = (seminarId: string) => {
    setSelectedSeminars(prev => 
      prev.includes(seminarId)
        ? prev.filter(id => id !== seminarId)
        : [...prev, seminarId]
    );
  };
  
  const resetForm = () => {
    setSubmitted(false);
    setSelectedSeminars([]);
    setFormData({
      surname: '',
      firstName: '',
      middleInitial: '',
      email: '',
      studentNumber: '',
      pupWebmail: '',
      yearLevel: '',
      section: '',
    });
  };
  
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
    
  //   if (selectedSeminars.length === 0) {
  //     toast.error("Please select at least one seminar to register for.");
  //     return;
  //   }
    
  //   setIsSubmitting(true);
    
  //   try {
  //     // Check if student already exists
  //     const exists = await checkStudentExists(formData.studentNumber, formData.email);
  //     if (exists) {
  //       toast.error("A student with this student number or email is already registered.");
  //       setIsSubmitting(false);
  //       return;
  //     }
      
  //     // Prepare student data with seminars
  //     const studentData: Student = {
  //       ...formData,
  //       seminars: selectedSeminars,
  //       createdAt: new Date().toISOString()
  //     };
      
  //     // Register student
  //     await registerStudent(studentData);
      
  //     setSubmitted(true);
  //     toast.success("You have been registered for the selected seminars.", {
  //       duration: 5000,
  //     });
  //   } catch (err) {
  //     toast.error("There was an error processing your registration. Please try again.");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };
  
  // if (isLoading) {
  //   return (
  //     <section id="registration" className="py-24 bg-event-dark relative">
  //       <div className="container mx-auto px-4 text-center">
  //         <Loader2 className="h-8 w-8 animate-spin mx-auto text-event-blue" />
  //         <p className="text-white mt-4">Loading registration form...</p>
  //       </div>
  //     </section>
  //   );
  // }
  
  // if (error) {
  //   return (
  //     <section id="registration" className="py-24 bg-event-dark relative">
  //       <div className="container mx-auto px-4 text-center">
  //         <div className="text-red-500 flex items-center justify-center gap-2 mb-4">
  //           <AlertCircle className="h-6 w-6" />
  //           <h3 className="text-xl font-bold">Error</h3>
  //         </div>
  //         <p className="text-white">{error}</p>
  //         <Button 
  //           className="bg-event-blue hover:bg-event-blue-dark text-white mt-6"
  //           onClick={() => window.location.reload()}
  //         >
  //           Refresh Page
  //         </Button>
  //       </div>
  //     </section>
  //   );
  // }
  
  if (submitted) {
    return (
      <ConfirmationScreen 
        studentData={{ ...formData, seminars: selectedSeminars }}
        selectedSeminars={selectedSeminarDetails}
        resetForm={resetForm}
      />
    );
  }

  return (
    <section id="registration" className="bg-darkest-blue py-24 px-8 md:px-14">
      <Toaster />
      <div className="container mx-auto z-10">
        <SectionHeading
          subtitle="Secure Your Spot"
          title="Registration"
          description="Register now to attend our seminars and workshops. Space is limited, so secure your spot early!"
        />
      </div>

      <div className="max-w-4xl mx-auto">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Card className="bg-event-dark border border-event-blue/20 h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-6">Student Information</h3>
                    <StudentForm 
                      formData={formData}
                      handleInputChange={handleInputChange}
                    />
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card className="bg-event-dark border border-event-blue/20 h-full">
                  <CardContent className="p-6">
                    <SeminarSelection
                      seminars={seminars}
                      selectedSeminars={selectedSeminars}
                      toggleSeminar={toggleSeminar}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                type="submit" 
                className="bg-event-blue hover:bg-event-blue-dark text-white px-8 py-6 h-auto text-lg"
                // disabled={isSubmitting}
              >
                {/* {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Complete Registration'
                )} */}
              </Button>
            </div>
          </form>
        </div>
    </section>
  )
}

export default Registration