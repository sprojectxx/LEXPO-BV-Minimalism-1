export type ActiveView = 'home' | 'services' | 'portfolio' | 'contact';

export type HubId = 'rotterdam' | 'singapore' | 'dubai' | 'new_york';

export interface GlobalHub {
  id: HubId;
  name: string;
  role: string;
  coordinates: string;
  lat: number;
  lng: number;
  description: string;
  stats: {
    warehouseCap: string;
    weeklyRoutes: number;
    activePartners: number;
    processingTime: string;
  };
  keyContacts: string[];
}

export type CargoStatus = 'in_transit' | 'cargo_processing' | 'ready_for_pickup' | 'delivered';

export interface CargoItem {
  id: string;
  trackerCode: string;
  description: string;
  category: 'Electronics' | 'Hardware' | 'Automotive';
  origin: string;
  destination: string;
  status: CargoStatus;
  weight: string;
  volume: string;
  departureDate: string;
  arrivalDate: string;
  temperatureControlled: boolean;
}

export interface TradeInquiry {
  id: string;
  fullName: string;
  company: string;
  email: string;
  subject: string;
  message: string;
  status: 'Pending' | 'Reviewing' | 'Accepted';
  timestamp: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

export interface TradeInsight {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  image: string;
  author: string;
}
