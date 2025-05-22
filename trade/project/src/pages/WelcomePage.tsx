import { ArrowRight, Receipt, PieChart, Phone } from 'lucide-react';
import Button from '../components/ui/Button';
import Logo from '../components/ui/Logo';

interface WelcomePageProps {
  onLogin: () => void;
}

const WelcomePage = ({ onLogin }: WelcomePageProps) => {
  return (
    <div className="min-h-screen flex flex-col p-6 bg-white">
      <div className="flex-1 flex flex-col items-center justify-center mb-8">
        <div className="w-48 h-48 mb-6">
          <Logo />
        </div>
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">TRADESCORE</h1>
        
        <div className="w-full space-y-4 mb-8">
          <div className="p-4 border border-gray-200 rounded-lg shadow-sm flex items-center">
            <div className="p-2 rounded-full bg-teal-100 mr-4">
              <Receipt className="w-6 h-6 text-teal-600" />
            </div>
            <span className="text-lg text-gray-700">Scan Your Receipts</span>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg shadow-sm flex items-center">
            <div className="p-2 rounded-full bg-teal-100 mr-4">
              <PieChart className="w-6 h-6 text-teal-600" />
            </div>
            <span className="text-lg text-gray-700">Check your credit score</span>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg shadow-sm flex items-center">
            <div className="p-2 rounded-full bg-teal-100 mr-4">
              <Phone className="w-6 h-6 text-teal-600" />
            </div>
            <span className="text-lg text-gray-700">Contact Support</span>
          </div>
        </div>
      </div>
      
      <div className="w-full">
        <Button onClick={onLogin} fullWidth>
          Get Started
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
        
        <div className="flex items-center justify-center mt-6">
          <div className="flex items-center text-gray-500">
            <Receipt className="w-4 h-4 mr-2" />
            <span className="text-sm">CPay Account</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;