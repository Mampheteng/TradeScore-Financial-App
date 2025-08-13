import { useState } from 'react';
import { User, Settings, CreditCard, Shield, LogOut } from 'lucide-react';
import Button from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const AccountPage = () => {
  const navigate = useNavigate();
  const [user] = useState({
    name: 'Veronica',
    email: 'veronica@example.com'
  });

  const handleLogout = () => {
    // Reset login state and navigate to welcome page
    window.location.reload();
  };

  const handleAccountSettings = () => {
    navigate('/account-settings'); // navigate to account settings page
  };

  const handlePaymentMethods = () => {
    navigate('/payment-methods'); // navigate to payment methods page
  };

  const handlePrivacySecurity = () => {
    navigate('/privacy-security'); // navigate to privacy & security page
  };

  const handleSettings = () => {
    navigate('/settings'); // navigate to general settings page
  };

  return (
    <div className="flex-1 overflow-y-auto pb-16">
      <div className="p-4">
        <div className="mb-6 text-center">
          <div className="w-24 h-24 bg-teal-100 rounded-full mx-auto mb-4 flex items-center justify-center">
            <User className="w-12 h-12 text-teal-600" />
          </div>
          <h2 className="text-xl font-medium text-gray-800">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
        </div>

        <div className="space-y-4 mb-8">
          <button 
            onClick={handleAccountSettings}
            className="w-full flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <Settings className="w-5 h-5 text-gray-500 mr-3" />
            <span className="text-gray-700">Account Settings</span>
          </button>

          <button 
            onClick={handlePaymentMethods}
            className="w-full flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <CreditCard className="w-5 h-5 text-gray-500 mr-3" />
            <span className="text-gray-700">Payment Methods</span>
          </button>

          <button 
            onClick={handlePrivacySecurity}
            className="w-full flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <Shield className="w-5 h-5 text-gray-500 mr-3" />
            <span className="text-gray-700">Privacy & Security</span>
          </button>

          <button 
            onClick={handleSettings}
            className="w-full flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            <Settings className="w-5 h-5 text-gray-500 mr-3" />
            <span className="text-gray-700">Settings</span>
          </button>
        </div>

        <Button variant="outline" fullWidth onClick={handleLogout}>
          <LogOut className="w-4 h-4 mr-2" />
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default AccountPage;
