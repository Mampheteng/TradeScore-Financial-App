import { ChevronRight } from 'lucide-react';
import CreditScoreCard from '../components/credit/CreditScoreCard';
import QuickStatsCard from '../components/home/QuickStatsCard';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  
  const handleCreditScoreClick = () => {
    navigate('/credit-score');
  };

  return (
    <div className="flex-1 overflow-y-auto pb-16">
      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-xl font-medium text-gray-800 mb-4">Hello, Veronica</h2>
          <div onClick={handleCreditScoreClick} className="cursor-pointer">
            <CreditScoreCard score={750} />
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-base font-medium text-gray-700 mb-3">Quick stats</h3>
          <div className="grid grid-cols-2 gap-4">
            <QuickStatsCard 
              title="CPay transactions"
              value="M 1,300,500"
              subtitle="This Month"
              bgColor="bg-teal-50"
            />
            <QuickStatsCard 
              title="Receipts"
              value="18"
              subtitle="This Month"
              bgColor="bg-teal-50"
            />
            <QuickStatsCard 
              title="Score stats"
              value="Usage - 8%"
              bgColor="bg-teal-50"
            />
            <QuickStatsCard 
              title="View Fullscore"
              label="Breakdown"
              icon={<ChevronRight className="w-4 h-4" />}
              onClick={() => navigate('/credit-score')}
              bgColor="bg-teal-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;