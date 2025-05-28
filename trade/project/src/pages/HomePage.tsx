import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import CreditScoreCard from '../components/credit/CreditScoreCard';
import QuickStatsCard from '../components/home/QuickStatsCard';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const [creditScore, setCreditScore] = useState<number | null>(null);
  const [features, setFeatures] = useState<any>(null);
  const [loading, setLoading] = useState(true); // add loading state
  const [error, setError] = useState<string | null>(null); // handle errors

  useEffect(() => {
    const fetchCreditScore = async () => {
      try {
        const res = await fetch('http://localhost:8000/credit-score');
        if (!res.ok) {
          throw new Error(`API error: ${res.status}`);
        }
        const data = await res.json();
        setCreditScore(data.credit_score);
        setFeatures(data.features);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch credit score');
      } finally {
        setLoading(false);
      }
    };

    fetchCreditScore();
  }, []); 

  const handleCreditScoreClick = () => {
    navigate('/credit-score');
  };

  return (
    <div className="flex-1 overflow-y-auto pb-16">
      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-xl font-medium text-gray-800 mb-4">Hello, Veronica</h2>

          {loading ? (
            <p>Loading credit score...</p>
          ) : error ? (
            <p className="text-red-600">Error: {error}</p>
          ) : (
            <div onClick={handleCreditScoreClick} className="cursor-pointer">
              <CreditScoreCard score={creditScore ?? 0} />
            </div>
          )}
        </div>

        {!loading && !error && features && (
          <div className="mb-6">
            <h3 className="text-base font-medium text-gray-700 mb-3">Quick stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <QuickStatsCard
                title="CPay transactions"
                value={`M ${features.total_inflows + features.total_outflows}`}
                subtitle="This Month"
                bgColor="bg-teal-50"
              />
              <QuickStatsCard
                title="Receipts"
                value={features.credit_count}
                subtitle="This Month"
                bgColor="bg-teal-50"
              />
              <QuickStatsCard
                title="Score stats"
                value={`Usage - ${Math.round(features.spending_rate * 100)}%`}
                bgColor="bg-teal-50"
              />
              <QuickStatsCard
                title="View Fullscore"
                label="Breakdown"
                icon={<ChevronRight className="w-4 h-4" />}
                onClick={handleCreditScoreClick}
                bgColor="bg-teal-50"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;