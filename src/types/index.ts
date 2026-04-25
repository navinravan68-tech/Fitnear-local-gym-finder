export type UserType = 'customer' | 'owner' | 'admin';

export interface UserProfile {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  userType: UserType;
  phoneNumber?: string;
  fitnessGoals?: string[];
  savedGyms?: string[];
  createdAt: string;
}

export type GymCategory = 'budget' | 'premium' | 'ladies' | 'crossfit' | 'yoga' | 'mma';
export type CrowdStatus = 'low' | 'moderate' | 'heavy';

export interface GymPlan {
  name: string;
  price: number;
  duration: string;
}

export interface Trainer {
  name: string;
  specialty: string;
  image: string;
}

export interface Gym {
  id: string;
  ownerId: string;
  name: string;
  description: string;
  address: string;
  city: string;
  location: { lat: number; lng: number };
  category: GymCategory;
  images: string[];
  rating: number;
  startingPrice: number;
  status: 'open' | 'closed';
  facilities: string[];
  instagram?: string;
  whatsapp?: string;
  crowdStatus: CrowdStatus;
  plans: GymPlan[];
  trainers: Trainer[];
  isApproved: boolean;
  createdAt: string;
}

export interface Booking {
  id: string;
  userId: string;
  gymId: string;
  type: 'trial' | 'membership';
  planName?: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  date: string;
  paymentId?: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userPhoto: string;
  gymId: string;
  rating: number;
  comment: string;
  createdAt: string;
}
