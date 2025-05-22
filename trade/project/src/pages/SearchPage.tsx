import { useState } from 'react';
import { Search as SearchIcon, CreditCard, Receipt, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const categories = [
    { id: 'transactions', name: 'Transactions', icon: CreditCard, path: '/transactions' },
    { id: 'receipts', name: 'Receipts', icon: Receipt, path: '/transactions' },
    { id: 'institutions', name: 'Institutions', icon: Building, path: '/institutions' }
  ];

  const recentSearches = [
    { query: 'Supermarket transactions', path: '/transactions' },
    { query: 'Last month\'s receipts', path: '/transactions' },
    { query: 'Standard Bank', path: '/institutions' }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate('/transactions');
    }
  };

  return (
    <div className="flex-1 overflow-y-auto pb-16">
      <div className="p-4">
        <div className="mb-6">
          <form onSubmit={handleSearch}>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                placeholder="Search transactions, receipts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </form>
        </div>

        <div className="mb-6">
          <h3 className="text-base font-medium text-gray-700 mb-3">Categories</h3>
          <div className="grid grid-cols-3 gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                  onClick={() => navigate(category.path)}
                >
                  <div className="p-2 rounded-full bg-teal-100 mb-2">
                    <Icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <span className="text-sm text-gray-700">{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-base font-medium text-gray-700 mb-3">Recent Searches</h3>
          <div className="space-y-2">
            {recentSearches.map((search, index) => (
              <button
                key={index}
                className="w-full text-left p-2 hover:bg-gray-100 rounded-md transition-colors"
                onClick={() => navigate(search.path)}
              >
                <p className="text-sm text-gray-700">{search.query}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage