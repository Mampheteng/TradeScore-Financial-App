import { CheckCircle as CircleCheck, DollarSign, TrendingUp, Wallet, Clock, History, Calendar } from 'lucide-react';
// import CreditScoreCard from '../components/credit/CreditScoreCard';
import ScoreDonutChart from '../components/credit/ScoreDonutChart';

const CreditScorePage = () => {
  const sections = [
    {
      percentage: 25,
      color: 'teal-500',
      label: 'Income Frequency'
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto pb-6">
      <div className="p-4">
        <div className="flex flex-col items-center mb-6">
          <div className="mb-6">
            {/* <CreditScoreCard score={750} /> */}
          </div>
          <div>
            <ScoreDonutChart sections={sections} />
          </div>
        </div>

        <div className="space-y-6">
          {/* Income Frequency Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center mb-3">
              <Calendar className="w-5 h-5 text-teal-600 mr-2" />
              <h3 className="text-lg font-medium text-gray-800">Income Frequency</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">How often you receive income (e.g., paychecks).</p>
            <div className="space-y-3">
              <div className="flex items-start">
                <CircleCheck className="w-5 h-5 text-teal-500 mr-3 mt-0.5" />
                <p className="text-sm text-gray-700">
                  Try to maintain consistent income regular deposits help boost your financial stability and credit profile.
                </p>
              </div>
              <div className="flex items-start">
                <CircleCheck className="w-5 h-5 text-teal-500 mr-3 mt-0.5" />
                <p className="text-sm text-gray-700">
                  If your income is irregular, consider setting up automatic transfers when you do get paid to simulate a regular flow.
                </p>
              </div>
            </div>
          </div>

          {/* Average Balance Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center mb-3">
              <Wallet className="w-5 h-5 text-teal-600 mr-2" />
              <h3 className="text-lg font-medium text-gray-800">Average Balance</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">Your average account balance over time.</p>
            <div className="space-y-3">
              <div className="flex items-start">
                <CircleCheck className="w-5 h-5 text-teal-500 mr-3 mt-0.5" />
                <p className="text-sm text-gray-700">
                  Keep some savings in your account. Even a small buffer of M500 to M1,000 can improve your financial standing.
                </p>
              </div>
              <div className="flex items-start">
                <CircleCheck className="w-5 h-5 text-teal-500 mr-3 mt-0.5" />
                <p className="text-sm text-gray-700">
                  Avoid letting your balance drop to zero maintaining a cushion shows responsible financial behavior.
                </p>
              </div>
            </div>
          </div>

          {/* Inflow vs Outflow Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center mb-3">
              <TrendingUp className="w-5 h-5 text-teal-600 mr-2" />
              <h3 className="text-lg font-medium text-gray-800">Inflow vs Outflow</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">How your income compares to your spending.</p>
            <div className="space-y-3">
              <div className="flex items-start">
                <CircleCheck className="w-5 h-5 text-teal-500 mr-3 mt-0.5" />
                <p className="text-sm text-gray-700">
                  Spend less than you earn. Aim for positive cash flow by cutting non-essential expenses.
                </p>
              </div>
              <div className="flex items-start">
                <CircleCheck className="w-5 h-5 text-teal-500 mr-3 mt-0.5" />
                <p className="text-sm text-gray-700">
                  Use budgeting tools to track your income and expenses and stay in control.
                </p>
              </div>
            </div>
          </div>

          {/* Spending Rate Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center mb-3">
              <DollarSign className="w-5 h-5 text-teal-600 mr-2" />
              <h3 className="text-lg font-medium text-gray-800">Spending Rate</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">The percentage of your income that you spend.</p>
            <div className="space-y-3">
              <div className="flex items-start">
                <CircleCheck className="w-5 h-5 text-teal-500 mr-3 mt-0.5" />
                <p className="text-sm text-gray-700">
                  Try to keep your spending under 80% of your income. The less you spend, the higher your potential score.
                </p>
              </div>
              <div className="flex items-start">
                <CircleCheck className="w-5 h-5 text-teal-500 mr-3 mt-0.5" />
                <p className="text-sm text-gray-700">
                  Look for recurring charges you don't use canceling them can lower your spending rate.
                </p>
              </div>
            </div>
          </div>

          {/* Balance Stability Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center mb-3">
              <Clock className="w-5 h-5 text-teal-600 mr-2" />
              <h3 className="text-lg font-medium text-gray-800">Balance Stability</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">How much your account balance fluctuates.</p>
            <div className="space-y-3">
              <div className="flex items-start">
                <CircleCheck className="w-5 h-5 text-teal-500 mr-3 mt-0.5" />
                <p className="text-sm text-gray-700">
                  Avoid drastic ups and downs in your account. Budgeting monthly can help smooth out your finances.
                </p>
              </div>
              <div className="flex items-start">
                <CircleCheck className="w-5 h-5 text-teal-500 mr-3 mt-0.5" />
                <p className="text-sm text-gray-700">
                  Set up alerts for low balances or large transactions to stay ahead of sudden drops.
                </p>
              </div>
            </div>
          </div>

          {/* Financial History Length Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center mb-3">
              <History className="w-5 h-5 text-teal-600 mr-2" />
              <h3 className="text-lg font-medium text-gray-800">Financial History Length</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">How many days of financial data we've analyzed.</p>
            <div className="space-y-3">
              <div className="flex items-start">
                <CircleCheck className="w-5 h-5 text-teal-500 mr-3 mt-0.5" />
                <p className="text-sm text-gray-700">
                  Keep using the app regularly. A longer financial history gives us more data to better assess and improve your score.
                </p>
              </div>
              <div className="flex items-start">
                <CircleCheck className="w-5 h-5 text-teal-500 mr-3 mt-0.5" />
                <p className="text-sm text-gray-700">
                  Don't disconnect your account even if you're not actively using it, ongoing tracking improves your profile over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditScorePage;