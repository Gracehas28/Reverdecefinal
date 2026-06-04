export interface Apartment {
  id: string;
  name: string;
  bedrooms: number;
  bathrooms: number;
  capacity: number;
  view: string;
  pricePerNight: number;
  competitorPrice: number;
  image: string;
  category: 'ocean_view' | 'two_bedroom' | 'three_bedroom' | 'pool';
  featured: boolean;
  benefits: string[];
}

export interface Review {
  id: string;
  author: string;
  origin: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  apartmentId: string;
  apartmentName: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  notes?: string;
  createdAt: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  totalPrice?: number;
}

export interface Attraction {
  id: string;
  name: string;
  distance: string;
  description: string;
  coords: { x: number; y: number }; // Relative coordinates for our visual map
  icon: string;
}
