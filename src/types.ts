export interface ServiceItem {
  id: string;
  title: string;
  category: 'cambio' | 'arrefecimento' | 'motor' | 'revisao' | 'chassi' | 'diagnostico';
  categoryLabel: string;
  shortDesc: string;
  description: string;
  features: string[];
  frenchSpecifics: string;
  recommendedInterval: string;
  iconName: string;
  badge?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  carModel: string;
  rating: number;
  date: string;
  text: string;
  serviceDone: string;
  verifiedOnGoogle: boolean;
}

export interface SymptomItem {
  id: string;
  symptom: string;
  commonCars: string;
  probableCause: string;
  urgency: 'baixa' | 'moderada' | 'alta' | 'imediata';
  urgencyLabel: string;
  solution: string;
  iconName: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  brand: string;
  model: string;
  year: string;
  service: string;
  details: string;
  preferredTime: string;
}
