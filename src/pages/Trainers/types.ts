export interface Review {
  userName: string;
  userImage: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Trainer {
  id: string;
  name: string;
  image: string;
  specialties: string[];
  bio: string;
  hourlyRate: number;
  age: number;
  experience: string;
  clientCount: number;
  location: string;
  certifications: string[];
  trainingStyle: string;
  reviews: Review[];
}