import React from 'react';
import { useApp } from '../context/AppContext';
import Header from '../components/layout/Header';

const TermsOfService: React.FC = () => {
  const { darkMode } = useApp();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-50 text-gray-800'} pb-20`}>
      <Header title="Terms of Service" showBackButton />

      <div className="p-4 space-y-4 max-w-3xl mx-auto">
        <p>
          Welcome to TradeScore. These Terms of Service govern your use of our mobile application and services.
        </p>

        <h2 className="text-lg font-semibold">Acceptance of Terms</h2>
        <p>
          By accessing or using TradeScore, you agree to be bound by these Terms of Service and all applicable laws and regulations.
        </p>

        <h2 className="text-lg font-semibold">Description of Service</h2>
        <p>
          TradeScore provides credit monitoring, financial insights, and related services to help users understand and improve their credit health.
        </p>

        <h2 className="text-lg font-semibold">User Responsibilities</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
        </p>

        <h2 className="text-lg font-semibold">Privacy and Data Protection</h2>
        <p>
          We take your privacy seriously. Please review our Privacy Policy to understand how we collect, use, and protect your information.
        </p>

        <h2 className="text-lg font-semibold">Limitation of Liability</h2>
        <p>
          TradeScore shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.
        </p>

        <h2 className="text-lg font-semibold">Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. We will notify users of any material changes via email or in-app notification.
        </p>

        <p>
          For questions about these terms, please contact our support team.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
