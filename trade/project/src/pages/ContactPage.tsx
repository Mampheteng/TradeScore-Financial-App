import { Mail, Phone, MessageSquare } from 'lucide-react';
import Button from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const navigate = useNavigate();

  const handleChat = () => {
    console.log('Starting chat...');
    navigate('/live-chat'); // Make sure this matches your route casing exactly
  };

  const handleCall = () => {
    window.location.href = 'tel:+26657789238';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:support@tradescore.com';
  };

  return (
    <div className="flex-1 overflow-y-auto pb-16">
      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-xl font-medium text-gray-800 mb-2">Hi Veronica,</h2>
          <p className="text-gray-600">How can we help you today?</p>
        </div>

        <div className="space-y-4 mb-8">
          {/* Call Support */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-teal-100 mr-3">
                <Phone className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Call Support</h3>
                <p className="text-sm text-gray-500">Available 24/7</p>
              </div>
            </div>
            <Button variant="outline" fullWidth onClick={handleCall}>
              +266 5778 9238
            </Button>
          </div>

          {/* Email Us */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-teal-100 mr-3">
                <Mail className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Email Us</h3>
                <p className="text-sm text-gray-500">Response within 24 hours</p>
              </div>
            </div>
            <Button variant="outline" fullWidth onClick={handleEmail}>
              support@tradescore.com
            </Button>
          </div>

          {/* Live Chat */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-full bg-teal-100 mr-3">
                <MessageSquare className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Live Chat</h3>
                <p className="text-sm text-gray-500">Typical response: 5 mins</p>
              </div>
            </div>
            <Button variant="primary" fullWidth onClick={handleChat}>
              Start Chat
            </Button>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-medium text-gray-800 mb-2">FAQs</h3>
          <div className="space-y-2">
            <button
              className="w-full text-left p-2 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => navigate('/faq-link-bank-account')}
            >
              <p className="text-sm text-gray-700">How do I link my bank account?</p>
            </button>
            <button
              className="w-full text-left p-2 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => navigate('/faq-credit-score')}
            >
              <p className="text-sm text-gray-700">What affects my credit score?</p>
            </button>
            <button
              className="w-full text-left p-2 hover:bg-gray-100 rounded-md transition-colors"
              onClick={() => navigate('/faq-score-updates')}
            >
              <p className="text-sm text-gray-700">How often is my score updated?</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
