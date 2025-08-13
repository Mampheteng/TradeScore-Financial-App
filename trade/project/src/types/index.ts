export interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  icon: React.ReactNode;
  read: boolean;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'support';
  timestamp: string;
}

export interface UserSettings {
  darkMode: boolean;
  pushNotifications: boolean;
  language: string;
  emailNotifications: boolean;
  smsNotifications: boolean;
  marketingCommunications: boolean;
}

export interface UserProfile {
  fullName: string;
  email: string;
  phone: string;
}

export interface PaymentMethod {
  id: string;
  type: 'card' | 'bank';
  last4: string;
  expiry?: string;
  bankName?: string;
  verified: boolean;
}

export type Page = 
  | 'home' 
  | 'notifications' 
  | 'account' 
  | 'contact-support' 
  | 'account-settings' 
  | 'payment-methods' 
  | 'privacy-security' 
  | 'settings' 
  | 'live-chat' 
  | 'faq-bank-linking' 
  | 'faq-credit-score' 
  | 'faq-score-updates'
  | 'terms-of-service'
  | 'privacy-policy'
  | 'help-center';