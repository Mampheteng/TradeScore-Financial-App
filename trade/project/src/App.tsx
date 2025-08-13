import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUp';
import WelcomePage from './pages/WelcomePage';
import HomePage from './pages/HomePage';
import TransactionsPage from './pages/TransactionsPage';
import CreditScorePage from './pages/CreditScorePage';
import InstitutionsPage from './pages/InstitutionsPage';
import ContactPage from './pages/ContactPage';
import AccountPage from './pages/AccountPage';
import NotificationsPage from './pages/NotificationsPage';
import SearchPage from './pages/SearchPage';
import LiveChatPage from './pages/LiveChatPage';
import PrivacySecurityPage from './pages/PrivacySecurityPage';
import NavigationBar from './components/layout/NavigationBar';
import Header from './components/layout/Header';
import FooterLinks from './components/layout/FooterLinks';
import PaymentMethodsPage from './pages/PaymentMethodsPage';
import AccountSettingsPage from './pages/AccountSettingsPage';
import SettingsPage from './pages/SettingsPage';
import FAQPage from './pages/FAQPage';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import HelpCenter from './pages/HelpCenter';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'login' | 'signup'>('login');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    if (currentScreen === 'welcome') return <WelcomePage onLoginClick={() => setCurrentScreen('login')} />;
    if (currentScreen === 'login')
      return (
        <LoginPage
          onLogin={handleLogin}
          switchToWelcomePage={() => setCurrentScreen('signup')}
          goBack={() => setCurrentScreen('welcome')}
        />
      );
    if (currentScreen === 'signup')
      return <SignUpPage switchToLogin={() => setCurrentScreen('login')} goBack={() => setCurrentScreen('welcome')} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      <div className="flex-1 max-w-md mx-auto w-full bg-white shadow-lg flex flex-col">
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={
              <>
                <Header title="Home" showBackButton={false} />
                <HomePage />
                <NavigationBar />
                <FooterLinks />
              </>
            }
          />

          {/* Transactions */}
          <Route
            path="/transactions"
            element={
              <>
                <Header title="Transactions & Receipts" showBackButton={false} showOptionsButton={true} />
                <TransactionsPage />
                <NavigationBar />
                <FooterLinks />
              </>
            }
          />

          {/* Credit Score */}
          <Route
            path="/credit-score"
            element={
              <>
                <Header title="Credit Score Breakdown" showBackButton={true} />
                <CreditScorePage />
              </>
            }
          />

          {/* Institutions */}
          <Route
            path="/institutions"
            element={
              <>
                <Header title="Financial Institutions" showBackButton={true} />
                <InstitutionsPage />
              </>
            }
          />

          {/* Contact */}
          <Route
            path="/contact"
            element={
              <>
                <Header title="Contact Support" showBackButton={true} />
                <ContactPage />
                <NavigationBar />
                <FooterLinks />
              </>
            }
          />

          {/* Live Chat */}
          <Route
            path="/live-chat"
            element={
              <>
                <Header title="Live Chat" showBackButton={true} />
                <LiveChatPage />
              </>
            }
          />

          {/* Account */}
          <Route
            path="/account"
            element={
              <>
                <Header title="Account" showBackButton={false} />
                <AccountPage />
                <NavigationBar />
                <FooterLinks />
              </>
            }
          />

          {/* Privacy Security */}
          <Route path="/privacy-security" element={<PrivacySecurityPage />} />
          <Route path="/payment-methods" element={<PaymentMethodsPage />} />
          <Route path="/account-settings" element={<AccountSettingsPage />} />

          {/* Settings */}
          <Route
            path="/settings"
            element={
              <>
                <SettingsPage />
                <NavigationBar />
                <FooterLinks />
              </>
            }
          />

          {/* Notifications */}
          <Route
            path="/notifications"
            element={
              <>
                <Header title="Notifications" showBackButton={false} />
                <NotificationsPage />
                <NavigationBar />
                <FooterLinks />
              </>
            }
          />

          {/* Search */}
          <Route
            path="/search"
            element={
              <>
                <Header title="Search" showBackButton={false} />
                <SearchPage />
                <NavigationBar />
                <FooterLinks />
              </>
            }
          />

          {/* FAQ Pages */}
          <Route path="/faq-link-bank-account" element={<FAQPage title="How do I link my bank account?" content="To link your bank account to TradeScore, follow these steps..." />} />
          <Route path="/faq-credit-score" element={<FAQPage title="What affects my credit score?" content="Your credit score is influenced by several key factors..." />} />
          <Route path="/faq-score-updates" element={<FAQPage title="How often is my score updated?" content="TradeScore updates your credit information on the following schedule..." />} />

          {/* Legal Pages */}
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/help-center" element={<HelpCenter />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
