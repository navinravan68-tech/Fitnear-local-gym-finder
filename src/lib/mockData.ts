import { Gym } from '../types';

export const CHENNAI_GYMS: Gym[] = [
  {
    id: '1',
    ownerId: 'owner1',
    name: 'Slam Fitness',
    description: 'Premier fitness destination in Chennai with world-class equipment and certified trainers.',
    address: 'Nandanam, Chennai, Tamil Nadu',
    city: 'Chennai',
    location: { lat: 13.0292, lng: 80.2443 },
    category: 'premium',
    images: ['https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000'],
    rating: 4.8,
    startingPrice: 1999,
    status: 'open',
    facilities: ['AC', 'Parking', 'Shower', 'Cardio', 'Weights', 'Trainer'],
    instagram: '@slamfitness',
    whatsapp: '+919876543210',
    crowdStatus: 'low',
    plans: [
      { name: 'Monthly', price: 1999, duration: '1 month' },
      { name: 'Quarterly', price: 4999, duration: '3 months' },
      { name: 'Yearly', price: 14999, duration: '12 months' }
    ],
    trainers: [
      { name: 'Raj Kumar', specialty: 'Bodybuilding', image: 'https://i.pravatar.cc/150?u=raj' },
      { name: 'Anita Rao', specialty: 'Yoga & Pilates', image: 'https://i.pravatar.cc/150?u=anita' }
    ],
    isApproved: true,
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    ownerId: 'owner2',
    name: 'Ozone Fitness',
    description: 'Budget friendly gym with all essential equipment for your daily workout.',
    address: 'Adyar, Chennai, Tamil Nadu',
    city: 'Chennai',
    location: { lat: 13.0067, lng: 80.2578 },
    category: 'budget',
    images: ['https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1000'],
    rating: 4.2,
    startingPrice: 999,
    status: 'open',
    facilities: ['Parking', 'Cardio', 'Weights', 'Trainer'],
    instagram: '@ozonefitness',
    whatsapp: '+919988776655',
    crowdStatus: 'moderate',
    plans: [
      { name: 'Monthly', price: 999, duration: '1 month' },
      { name: 'Quarterly', price: 2499, duration: '3 months' },
      { name: 'Yearly', price: 8999, duration: '12 months' }
    ],
    trainers: [
      { name: 'Suresh V', specialty: 'Weight Loss', image: 'https://i.pravatar.cc/150?u=suresh' }
    ],
    isApproved: true,
    createdAt: new Date().toISOString()
  },
  {
    id: '3',
    ownerId: 'owner3',
    name: 'Pink Fitness',
    description: 'Exclusive ladies-only gym with specialized programs for women.',
    address: 'T-Nagar, Chennai, Tamil Nadu',
    city: 'Chennai',
    location: { lat: 13.0418, lng: 80.2341 },
    category: 'ladies',
    images: ['https://images.unsplash.com/photo-1518611012118-2969c6360207?auto=format&fit=crop&q=80&w=1000'],
    rating: 4.5,
    startingPrice: 1499,
    status: 'open',
    facilities: ['AC', 'Shower', 'Yoga', 'Cardio'],
    instagram: '@pinkfitness_ladies',
    whatsapp: '+919123456789',
    crowdStatus: 'heavy',
    plans: [
      { name: 'Monthly', price: 1499, duration: '1 month' },
      { name: 'Quarterly', price: 3999, duration: '3 months' }
    ],
    trainers: [
      { name: 'Meena S', specialty: 'Zumba', image: 'https://i.pravatar.cc/150?u=meena' }
    ],
    isApproved: true,
    createdAt: new Date().toISOString()
  },
  {
    id: '4',
    ownerId: 'owner4',
    name: 'Gold\'s Gym',
    description: 'International fitness chain with state-of-the-art equipment and specialized training zones.',
    address: 'Anna Nagar West, Chennai, Tamil Nadu',
    city: 'Chennai',
    location: { lat: 13.0850, lng: 80.2101 },
    category: 'premium',
    images: ['https://images.unsplash.com/photo-1571902251103-d71b4e995c0d?auto=format&fit=crop&q=80&w=1000'],
    rating: 4.9,
    startingPrice: 3500,
    status: 'open',
    facilities: ['AC', 'Parking', 'Steam Bath', 'Cardio', 'Bodybuilding', 'Personal Trainer'],
    instagram: '@goldsgym_annanagar',
    whatsapp: '+919999999994',
    crowdStatus: 'moderate',
    plans: [
      { name: 'Monthly', price: 3500, duration: '1 month' },
      { name: 'Annual', price: 28000, duration: '12 months' }
    ],
    trainers: [
      { name: 'Vikram Singh', specialty: 'Bodybuilding', image: 'https://i.pravatar.cc/150?u=vikram' }
    ],
    isApproved: true,
    createdAt: new Date().toISOString()
  },
  {
    id: '5',
    ownerId: 'owner5',
    name: 'Cult.fit',
    description: 'Fun, group-based fitness classes including Yoga, Zumba, HIIT and more.',
    address: 'Velachery Main Road, Chennai, Tamil Nadu',
    city: 'Chennai',
    location: { lat: 12.9790, lng: 80.2210 },
    category: 'premium',
    images: ['https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=1000'],
    rating: 4.7,
    startingPrice: 2500,
    status: 'open',
    facilities: ['AC', 'No Weights', 'Yoga', 'Boxing', 'Shower'],
    instagram: '@cultfit_chennai',
    whatsapp: '+918888888885',
    crowdStatus: 'heavy',
    plans: [
      { name: 'Cultpass Elite', price: 2500, duration: '1 month' },
      { name: 'Cultpass Pro', price: 1800, duration: '1 month' }
    ],
    trainers: [
      { name: 'Priya K', specialty: 'Zumba & Dance', image: 'https://i.pravatar.cc/150?u=priya' }
    ],
    isApproved: true,
    createdAt: new Date().toISOString()
  },
  {
    id: '6',
    ownerId: 'owner6',
    name: 'Muscle Mechanics',
    description: 'The ultimate destination for hardcore bodybuilding and strength training.',
    address: 'Mylapore, Chennai, Tamil Nadu',
    city: 'Chennai',
    location: { lat: 13.0333, lng: 80.2667 },
    category: 'budget',
    images: ['https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000'],
    rating: 4.4,
    startingPrice: 800,
    status: 'open',
    facilities: ['Heavy Weights', 'Trainer', 'Water Station'],
    instagram: '@muscle_mechanics',
    whatsapp: '+917777777776',
    crowdStatus: 'low',
    plans: [
      { name: 'Student Plan', price: 800, duration: '1 month' },
      { name: 'General', price: 1200, duration: '1 month' }
    ],
    trainers: [
      { name: 'Arun Kumar', specialty: 'Powerlifting', image: 'https://i.pravatar.cc/150?u=arun' }
    ],
    isApproved: true,
    createdAt: new Date().toISOString()
  },
  {
    id: '7',
    ownerId: 'owner7',
    name: 'Core Fitness',
    description: 'A boutique gym focused on functional training and core strength.',
    address: 'Besant Nagar Beach Road, Chennai, Tamil Nadu',
    city: 'Chennai',
    location: { lat: 13.0003, lng: 80.2672 },
    category: 'premium',
    images: ['https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=1000'],
    rating: 4.6,
    startingPrice: 2200,
    status: 'open',
    facilities: ['AC', 'Beach View', 'Functional Training', 'Cardio'],
    instagram: '@corefitness_besant',
    whatsapp: '+919998887776',
    crowdStatus: 'moderate',
    plans: [
        { name: 'Monthly', price: 2200, duration: '1 month' },
        { name: 'Unlimited', price: 5000, duration: '3 months' }
    ],
    trainers: [
        { name: 'Deepak Raj', specialty: 'Functional Training', image: 'https://i.pravatar.cc/150?u=deepak' }
    ],
    isApproved: true,
    createdAt: new Date().toISOString()
  },
  {
    id: '8',
    ownerId: 'owner8',
    name: 'Zen Yoga Studio',
    description: 'Find your inner peace with our specialized Hatha and Vinyasa yoga sessions in a tranquil environment.',
    address: 'Mylapore, Chennai, Tamil Nadu',
    city: 'Chennai',
    location: { lat: 13.0333, lng: 80.2667 },
    category: 'yoga',
    images: ['https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000'],
    rating: 4.8,
    startingPrice: 1500,
    status: 'open',
    facilities: ['AC', 'Yoga Mats', 'Herbal Tea', 'Changing Room'],
    instagram: '@zenyoga_chennai',
    whatsapp: '+919997775553',
    crowdStatus: 'low',
    plans: [
      { name: '10 Sessions', price: 1500, duration: '1 month' },
      { name: 'Unlimited', price: 3500, duration: '1 month' }
    ],
    trainers: [
      { name: 'Sita Devi', specialty: 'Hatha Yoga', image: 'https://i.pravatar.cc/150?u=sita' }
    ],
    isApproved: true,
    createdAt: new Date().toISOString()
  },
  {
    id: '9',
    ownerId: 'owner9',
    name: 'Warrior Martial Arts',
    description: 'Elite training in Muay Thai, Kickboxing, and Brazilian Jiu-Jitsu for all skill levels.',
    address: 'Adyar, Chennai, Tamil Nadu',
    city: 'Chennai',
    location: { lat: 13.0067, lng: 80.2578 },
    category: 'mma',
    images: ['https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&q=80&w=1000'],
    rating: 4.9,
    startingPrice: 3000,
    status: 'open',
    facilities: ['Boxing Ring', 'MMA Mats', 'Heavy Bags', 'Shower'],
    instagram: '@warrior_mma',
    whatsapp: '+918887776665',
    crowdStatus: 'moderate',
    plans: [
      { name: 'Basic Combat', price: 3000, duration: '1 month' },
      { name: 'Fighter Program', price: 7500, duration: '3 months' }
    ],
    trainers: [
      { name: 'Captain Rahul', specialty: 'MMA & Muay Thai', image: 'https://i.pravatar.cc/150?u=rahul' }
    ],
    isApproved: true,
    createdAt: new Date().toISOString()
  }
];
