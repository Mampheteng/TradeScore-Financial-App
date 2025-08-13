import React from 'react';
import { useApp } from '../context/AppContext';
import Header from '../components/layout/Header';

const HelpCenter: React.FC = () => {
  const { darkMode } = useApp();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-50 text-gray-800'} pb-20`}>
      <Header title="Help Center" showBackButton />

      <div className="p-4 space-y-4 max-w-3xl mx-auto">
        <p>
          Welcome to the TradeScore Help Center. Here you'll find answers to common questions and helpful resources.
        </p>

        <h2 className="text-lg font-semibold">Getting Started</h2>
        <p>
          New to TradeScore? Start by creating your account and linking your bank account to begin monitoring your credit health.
        </p>

        <h2 className="text-lg font-semibold">Account Management</h2>
        <p>
          Learn how to update your profile, manage payment methods, and adjust your privacy settings.
        </p>

        <h2 className="text-lg font-semibold">Understanding Your Credit Score</h2>
        <p>
          Discover what factors affect your credit score and how to interpret the insights we provide.
        </p>

        <h2 className="text-lg font-semibold">Security and Privacy</h2>
        <p>
          Find information about how we protect your data and what security measures you can take.
        </p>

        <h2 className="text-lg font-semibold">Troubleshooting</h2>
        <p>
          Having technical issues? Check our troubleshooting guide or contact our support team.
        </p>

        <h2 className="text-lg font-semibold">Contact Support</h2>
        <p>
          Our support team is available 24/7 via phone, email, or live chat.
          Call us at <span className="font-semibold">+266 5778 9238</span>.
        </p>

        <h2 className="text-lg font-semibold">Feature Updates</h2>
        <p>
          Stay informed about new features and improvements to the TradeScore app.
        </p>

        <h2 className="text-lg font-semibold">Best Practices</h2>
        <p>
          Get tips and advice on how to improve your credit score and maintain good financial health.
        </p>
      </div>
    </div>
  );
};

export default HelpCenter;
