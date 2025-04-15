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