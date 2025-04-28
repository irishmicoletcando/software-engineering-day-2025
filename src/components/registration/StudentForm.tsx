// src/components/Registration/StudentForm.tsx
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Student } from '@/types/events';

interface StudentFormProps {
  formData: Omit<Student, 'seminars' | 'id' | 'createdAt'>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StudentForm: React.FC<StudentFormProps> = ({ formData, handleInputChange }) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="surname" className="text-white">Surname <span className="text-red-500">*</span></Label>
        <Input
          id="surname"
          name="surname"
          placeholder="Enter your surname"
          className="bg-event-blue/5 border-event-blue/20 text-white placeholder:text-gray-500"
          value={formData.surname}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="firstName" className="text-white">First Name <span className="text-red-500">*</span></Label>
        <Input
          id="firstName"
          name="firstName"
          placeholder="Enter your first name"
          className="bg-event-blue/5 border-event-blue/20 text-white placeholder:text-gray-500"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="middleInitial" className="text-white">Middle Initial</Label>
        <Input
          id="middleInitial"
          name="middleInitial"
          placeholder="Enter your middle initial"
          className="bg-event-blue/5 border-event-blue/20 text-white placeholder:text-gray-500"
          value={formData.middleInitial}
          onChange={handleInputChange}
          maxLength={1}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email" className="text-white">Email Address <span className="text-red-500">*</span></Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email address"
          className="bg-event-blue/5 border-event-blue/20 text-white placeholder:text-gray-500"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="studentNumber" className="text-white">Student Number <span className="text-red-500">*</span></Label>
        <Input
          id="studentNumber"
          name="studentNumber"
          placeholder="Enter your student number (e.g., 2020-12345-MN-0)"
          className="bg-event-blue/5 border-event-blue/20 text-white placeholder:text-gray-500"
          value={formData.studentNumber}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="pupWebmail" className="text-white">PUP Webmail Account <span className="text-red-500">*</span></Label>
        <Input
          id="pupWebmail"
          name="pupWebmail"
          type="email"
          placeholder="Enter your PUP webmail (e.g., student@pup.edu.ph)"
          className="bg-event-blue/5 border-event-blue/20 text-white placeholder:text-gray-500"
          value={formData.pupWebmail}
          onChange={handleInputChange}
          required
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="yearLevel" className="text-white">Year Level <span className="text-red-500">*</span></Label>
          <Input
            id="yearLevel"
            name="yearLevel"
            placeholder="e.g., 3rd Year"
            className="bg-event-blue/5 border-event-blue/20 text-white placeholder:text-gray-500"
            value={formData.yearLevel}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="section" className="text-white">Section <span className="text-red-500">*</span></Label>
          <Input
            id="section"
            name="section"
            placeholder="e.g., BSIT 3-1"
            className="bg-event-blue/5 border-event-blue/20 text-white placeholder:text-gray-500"
            value={formData.section}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default StudentForm;