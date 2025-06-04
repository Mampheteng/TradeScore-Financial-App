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
import NavigationBar from './components/layout/NavigationBar';
import Header from './components/layout/Header';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'login' | 'signup'>('login');

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (!isLoggedIn) {
    if (currentScreen === 'welcome') {
      return (
        <WelcomePage
          onLoginClick={() => setCurrentScreen('login')}
          
        />
      );
    } else if (currentScreen === 'login') {
      return (
        <LoginPage
          onLogin={handleLogin}
          switchToWelcomePage={() => setCurrentScreen('signup')}
          goBack={() => setCurrentScreen('welcome')}
        />
      );
    } else if (currentScreen === 'signup') {
      return (
        <SignUpPage
          switchToLogin={() => setCurrentScreen('login')}
          goBack={() => setCurrentScreen('welcome')}
        />
      );
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      <div className="flex-1 max-w-md mx-auto w-full bg-white shadow-lg flex flex-col">
        <Routes>
          <Route path="/" element={
            <>
              <Header title="Home" showBackButton={false} />
              <HomePage />
              <NavigationBar />
            </>
          } />
          <Route path="/transactions" element={
            <>
              <Header title="Transactions & Receipts" showBackButton={false} showOptionsButton={true} />
              <TransactionsPage />
              <NavigationBar />
            </>
          } />
          <Route path="/credit-score" element={
            <>
              <Header title="Credit Score Breakdown" showBackButton={true} />
              <CreditScorePage />
            </>
          } />
          <Route path="/institutions" element={
            <>
              <Header title="Financial Institutions" showBackButton={true} />
              <InstitutionsPage />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Header title="Contact Support" showBackButton={true} />
              <ContactPage />
              <NavigationBar />
            </>
          } />
          <Route path="/account" element={
            <>
              <Header title="Account" showBackButton={false} />
              <AccountPage />
              <NavigationBar />
            </>
          } />
          <Route path="/notifications" element={
            <>
              <Header title="Notifications" showBackButton={false} />
              <NotificationsPage />
              <NavigationBar />
            </>
          } />
          <Route path="/search" element={
            <>
              <Header title="Search" showBackButton={false} />
              <SearchPage />
              <NavigationBar />
            </>
          } />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

