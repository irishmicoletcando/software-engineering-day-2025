export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  image: string;
  linkedin: string;
  topics?: string[];
  schedule?: string;
}

export interface Seminar {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  duration: number;
  topics: string[];
  speakerId: string;
}