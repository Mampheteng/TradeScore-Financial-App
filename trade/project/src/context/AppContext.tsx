import React, { createContext, useContext, useState, useEffect } from 'react';
import { Notification, ChatMessage, UserSettings, UserProfile, PaymentMethod, Page } from '../types';
import { CreditCard, Shield } from 'lucide-react';

interface AppContextType {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  notifications: Notification[];
  setNotifications: (notifications: Notification[]) => void;
  chatMessages: ChatMessage[];
  setChatMessages: (messages: ChatMessage[]) => void;
  userSettings: UserSettings;
  setUserSettings: (settings: UserSettings) => void;
  userProfile: UserProfile;
  setUserProfile: (profile: UserProfile) => void;
  paymentMethods: PaymentMethod[];
  setPaymentMethods: (methods: PaymentMethod[]) => void;
  darkMode: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [userSettings, setUserSettings] = useState<UserSettings>({
    darkMode: false,
    pushNotifications: true,
    language: 'English',
    emailNotifications: true,
    smsNotifications: false,
    marketingCommunications: false,
  });

  const [userProfile, setUserProfile] = useState<UserProfile>({
    fullName: 'Veronica',
    email: 'veronica@example.com',
    phone: '+266 5778 9238',
  });

  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'Credit Score Update',
      message: 'Your credit score has increased by 15 points',
      time: '2 hours ago',
      icon: <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center"><div className="w-4 h-4 bg-green-500 rounded"></div></div>,
      read: false
    },
    {
      id: '2',
      title: 'New Transaction',
      message: 'Payment of M15,000 to Supermarket',
      time: '5 hours ago',
      icon: <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"><CreditCard className="w-4 h-4 text-blue-500" /></div>,
      read: false
    },
    {
      id: '3',
      title: 'Security Alert',
      message: 'New device logged into your account',
      time: '1 day ago',
      icon: <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center"><Shield className="w-4 h-4 text-yellow-500" /></div>,
      read: false
    }
  ]);

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: 'Hi! How can I help you today?',
      sender: 'support',
      timestamp: '10:30 AM'
    }
  ]);

  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: '1',
      type: 'card',
      last4: '1234',
      expiry: '12/25',
      verified: true
    },
    {
      id: '2',
      type: 'card',
      last4: '5678',
      expiry: '08/26',
      verified: true
    },
    {
      id: '3',
      type: 'bank',
      last4: '1234',
      bankName: 'Standard Bank',
      verified: false
    }
  ]);

  // Apply dark mode to document
  useEffect(() => {
    if (userSettings.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [userSettings.darkMode]);

  const value = {
    currentPage,
    setCurrentPage,
    notifications,
    setNotifications,
    chatMessages,
    setChatMessages,
    userSettings,
    setUserSettings,
    userProfile,
    setUserProfile,
    paymentMethods,
    setPaymentMethods,
    darkMode: userSettings.darkMode,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};