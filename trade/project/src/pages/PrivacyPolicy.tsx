import React from 'react';
import { useApp } from '../context/AppContext';
import Header from '../components/layout/Header';

const PrivacyPolicy: React.FC = () => {
  const { darkMode } = useApp();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-50 text-gray-800'} pb-20`}>
      <Header title="Privacy Policy" showBackButton />

      <div className="p-4 space-y-4 max-w-3xl mx-auto">
        <p>
          This Privacy Policy describes how TradeScore collects, uses, and protects your personal information.
        </p>

        <h2 className="text-lg font-semibold">Information We Collect</h2>
        <p>
          We collect information you provide directly to us, such as when you create an account,
          link bank accounts, or contact customer support.
        </p>

        <h2 className="text-lg font-semibold">How We Use Your Information</h2>
        <p>
          We use your information to provide our services, improve user experience,
          communicate with you, and ensure security.
        </p>

        <h2 className="text-lg font-semibold">Information Sharing</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information to third parties without your consent,
          except as described in this policy.
        </p>

        <h2 className="text-lg font-semibold">Data Security</h2>
        <p>
          We implement appropriate security measures to protect your personal information against
          unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h2 className="text-lg font-semibold">Your Rights</h2>
        <p>
          You have the right to access, update, or delete your personal information.
          You may also opt out of certain communications.
        </p>

        <h2 className="text-lg font-semibold">Cookies and Tracking</h2>
        <p>
          We use cookies and similar technologies to enhance your experience and analyze usage patterns.
        </p>

        <h2 className="text-lg font-semibold">Changes to Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any material changes.
        </p>

        <p>
          If you have questions about this Privacy Policy, please contact us at{' '}
          <a href="mailto:privacy@tradescore.com" className="text-teal-500 underline">
            privacy@tradescore.com
          </a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
